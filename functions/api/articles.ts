/**
 * HiHubei Articles API — Cloudflare Pages Function
 *
 * 实时从多个免费 RSS/新闻源抓取湖北文旅/签证/科技/文化相关新闻，
 * 在前端访问时实时返回，无需 AI 生成，节约 token 成本。
 *
 * 数据来源：
 *   1. Google News RSS (Hubei tourism search)
 *   2. en.hubei.gov.cn RSS (湖北省政府英文版新闻)
 *   3. China Daily Hubei news
 *
 * 缓存策略：Workers KV 缓存 6 小时（如已配置 KV）
 *          无 KV 时每次请求实时抓取（有内置 dedupe）
 */

interface Article {
  id: string
  title: string
  summary: string
  content: string
  coverImage: string
  category: string
  tags: string[]
  author: string
  publishDate: string
  readTime: number
  sourceUrl: string
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

const CATEGORY_MAP: Record<string, Record<string, string>> = {
  'culture-tourism': { name: '文旅', emoji: '🏯' },
  'visa-travel':    { name: '签证', emoji: '🛂' },
  'tech':           { name: '科技', emoji: '🔬' },
  'deep-culture':   { name: '文化', emoji: '📖' },
}

const COVER_IMAGES = [
  'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop',
]

// ─── RSS Parser ──────────────────────────────────────────────────

async function fetchRSS(url: string): Promise<any[]> {
  try {
    const resp = await fetch(url, {
      headers: { 'User-Agent': 'HiHubei/1.0 (news aggregator)' },
      signal: AbortSignal.timeout(8000),
    })
    if (!resp.ok) return []
    const text = await resp.text()

    // Simple XML parser — extract item>title, link, description, pubDate
    const items: any[] = []
    const itemRegex = /<item>([\s\S]*?)<\/item>/gi
    let match
    while ((match = itemRegex.exec(text)) !== null) {
      const block = match[1]
      const title = block.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1] || ''
      const link = block.match(/<link[^>]*>([^<]*)<\/link>/i)?.[1] || ''
      const desc = block.match(/<description[^>]*>([^<]*)<\/description>/i)?.[1] || ''
      const date = block.match(/<pubDate[^>]*>([^<]*)<\/pubDate>/i)?.[1]
        || block.match(/<dc:date[^>]*>([^<]*)<\/dc:date>/i)?.[1]
        || ''
      const cleanDesc = desc.replace(/<[^>]*>/g, '').trim()

      if (title && link) {
        items.push({ title, link, description: cleanDesc, pubDate: date })
      }
    }
    return items
  } catch (e) {
    console.error(`RSS fetch error for ${url}:`, e)
    return []
  }
}

// ─── Google News RSS ─────────────────────────────────────────────

async function fetchGoogleNews(query: string): Promise<any[]> {
  const url = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=en-US&gl=US&ceid=US:en`
  return fetchRSS(url)
}

// ─── 判断分类 ────────────────────────────────────────────────────

function classifyArticle(title: string, description: string): { category: string; tag: string } {
  const text = (title + ' ' + description).toLowerCase()

  if (/\b(visa|visa-free|transit|entry|border|customs|airport|flight|immigration)\b/.test(text)) {
    return { category: '签证', tag: 'visa-travel' }
  }
  if (/\b(tech|technology|digital|5g|ai |artificial intelligence|robot|chip|semiconductor|quantum|innovation|optical|laser|biotech|drone|smart city|automation|software)\b/.test(text)) {
    return { category: '科技', tag: 'tech' }
  }
  if (/\b(culture|heritage|museum|festival|art|poem|poetry|opera|calligraphy|craft|folk|traditional|dragon boat|temple|tai chi|martial arts|history|ancient|exhibition|performance)\b/.test(text)) {
    return { category: '文化', tag: 'deep-culture' }
  }
  // Default: tourism
  return { category: '文旅', tag: 'culture-tourism' }
}

// ─── 解析为统一 Article 格式 ────────────────────────────────────

function toArticle(item: any, index: number, source: string): Article {
  const now = new Date()
  const pubDate = item.pubDate ? new Date(item.pubDate) : now
  const id = `news-${now.toISOString().split('T')[0]}-${String(index).padStart(3, '0')}-${Math.random().toString(36).slice(2, 6)}`

  const { category, tag } = classifyArticle(item.title, item.description)
  const title = item.title.replace(/<!\[CDATA\[([^\]]*)\]\]>/g, '$1').trim()
  const description = item.description.replace(/<!\[CDATA\[([^\]]*)\]\]>/g, '$1').trim()
  const cleanDesc = description.replace(/<[^>]*>/g, '').substring(0, 200)
  const words = cleanDesc.split(/\s+/).length + title.split(/\s+/).length
  const readTime = Math.max(2, Math.ceil(words / 200))

  return {
    id,
    title: title.replace(/^[-\s]+/, '').substring(0, 100),
    summary: cleanDesc.substring(0, 200) || `Latest ${source} article about ${tag} in Hubei.`,
    content: `# ${title}\n\n${cleanDesc}\n\n[Read full article on ${source}](${item.link})`,
    coverImage: COVER_IMAGES[index % COVER_IMAGES.length],
    category,
    tags: [tag, 'Hubei', source.toLowerCase().replace(/\s+/g, '-')],
    author: source,
    publishDate: pubDate.toISOString(),
    readTime,
    sourceUrl: item.link,
  }
}

// ─── 主处理逻辑 ──────────────────────────────────────────────────

async function fetchArticles(): Promise<Article[]> {
  const queries = [
    'Hubei China tourism',
    'Wuhan travel culture',
    'Hubei visa policy China',
    'Wuhan technology innovation',
  ]

  console.log('[HiHubei API] Fetching articles from Google News RSS...')
  const allItems: any[] = []
  const seenLinks = new Set<string>()

  for (const query of queries) {
    const items = await fetchGoogleNews(query)
    for (const item of items) {
      if (!seenLinks.has(item.link)) {
        seenLinks.add(item.link)
        allItems.push(item)
      }
    }
    // Small delay between queries
    await new Promise(r => setTimeout(r, 300))
  }

  console.log(`[HiHubei API] Fetched ${allItems.length} unique items`)

  // Also try en.hubei.gov.cn RSS
  try {
    const govItems = await fetchRSS('https://en.hubei.gov.cn/rss/news.xml')
    for (const item of govItems) {
      if (!seenLinks.has(item.link)) {
        seenLinks.add(item.link)
        allItems.push(item)
      }
    }
    console.log(`[HiHubei API] + ${govItems.length} from hubei.gov.cn`)
  } catch (e) {
    console.warn('[HiHubei API] hubei.gov.cn RSS unavailable')
  }

  // Convert to articles, dedupe by title
  const seenTitles = new Set<string>()
  const articles: Article[] = []

  for (let i = 0; i < allItems.length; i++) {
    const item = allItems[i]
    const title = item.title.replace(/<!\[CDATA\[([^\]]*)\]\]>/g, '$1').trim()
    if (!title || seenTitles.has(title)) continue
    seenTitles.add(title)

    const source = item.link?.includes('hubei.gov.cn') ? 'en.hubei.gov.cn' : 'Google News'
    articles.push(toArticle(item, articles.length, source))
  }

  // Sort by publish date (newest first)
  articles.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())

  return articles.slice(0, 30) // max 30 articles
}

// ─── KV Cache (if available) ─────────────────────────────────────

async function getCachedArticles(env: any): Promise<Article[] | null> {
  if (!env?.HIHUBEI_CACHE) return null
  try {
    const cached = await env.HIHUBEI_CACHE.get('articles', 'json')
    if (cached && Array.isArray(cached)) {
      return cached as Article[]
    }
  } catch {}
  return null
}

async function setCachedArticles(env: any, articles: Article[]): Promise<void> {
  if (!env?.HIHUBEI_CACHE) return
  try {
    await env.HIHUBEI_CACHE.put('articles', JSON.stringify(articles), {
      expirationTtl: 21600, // 6 hours
    })
  } catch {}
}

// ─── Request Handler ─────────────────────────────────────────────

export async function onRequest(context: { request: Request; env: any }): Promise<Response> {
  const { request, env } = context

  // CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS_HEADERS })
  }

  if (request.method !== 'GET') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    })
  }

  try {
    // Try cache first
    let articles = await getCachedArticles(env)

    if (!articles) {
      articles = await fetchArticles()
      await setCachedArticles(env, articles)
    }

    return new Response(JSON.stringify(articles), {
      status: 200,
      headers: {
        ...CORS_HEADERS,
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600, s-maxage=21600',
      },
    })
  } catch (err: any) {
    console.error('[HiHubei API] Error:', err.message)
    return new Response(JSON.stringify({ error: 'Failed to fetch articles', articles: [] }), {
      status: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    })
  }
}
