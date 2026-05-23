/**
 * HiHubei Articles API — Cloudflare Pages Function
 *
 * 实时从 Google News RSS 抓取湖北文旅/签证/科技/文化新闻
 * 返回格式：时间 → 标题 → 正文摘要 → 关键词（便于 AI 检索与前端展示）
 */

interface Article {
  id: string
  title: string
  date: string           // 发布时间（ISO）
  content: string        // 正文
  keywords: string[]     // 关键词
  category: string       // 文旅 | 签证 | 科技 | 文化
  sourceUrl: string      // 原文链接
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

// ─── RSS Parser ──────────────────────────────────────────────────

async function fetchRSS(url: string): Promise<any[]> {
  try {
    const resp = await fetch(url, {
      headers: { 'User-Agent': 'HiHubei/1.0 (news aggregator)' },
      signal: AbortSignal.timeout(8000),
    })
    if (!resp.ok) return []
    const text = await resp.text()

    const items: any[] = []
    const itemRegex = /<item>([\s\S]*?)<\/item>/gi
    let match
    while ((match = itemRegex.exec(text)) !== null) {
      const block = match[1]
      const title = (block.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1] || '').trim()
      const link = (block.match(/<link[^>]*>([^<]*)<\/link>/i)?.[1] || '').trim()
      const desc = block.match(/<description[^>]*>([^<]*)<\/description>/i)?.[1] || ''
      const date = block.match(/<pubDate[^>]*>([^<]*)<\/pubDate>/i)?.[1]
        || block.match(/<dc:date[^>]*>([^<]*)<\/dc:date>/i)?.[1]
        || ''
      const source = block.match(/<source[^>]*>([^<]*)<\/source>/i)?.[1]
        || link.match(/https?:\/\/(?:www\.)?([^/]+)/)?.[1]
        || ''

      // Keep raw description (HTML-escaped); toArticle handles cleaning
      if (title && link) {
        items.push({ title, link, description: desc, pubDate: date, source })
      }
    }
    return items
  } catch (e) {
    return []
  }
}

// ─── Google News RSS ─────────────────────────────────────────────

async function fetchGoogleNews(query: string): Promise<any[]> {
  const url = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=en-US&gl=US&ceid=US:en`
  return fetchRSS(url)
}

// ─── 分类 + 关键词提取 ──────────────────────────────────────────

const CATEGORY_RULES: { name: string; tests: RegExp[] }[] = [
  { name: '签证', tests: [
    /visa[- ]?free/i, /visa[-\s]/i, /transit/i, /entry policy/i, /immigration/i,
    /border/i, /airport/i, /customs/i, /travel permit/i, /entry ban/i,
  ]},
  { name: '科技', tests: [
    /technology|digital|5g|ai |artificial intelligence|robot|chip|semiconductor/i,
    /quantum|innovation|optical|laser|biotech|drone|smart city|automation/i,
    /startup|electric vehicle|ev |battery|software|cloud|algorithm/i,
  ]},
  { name: '文化', tests: [
    /culture|heritage|museum|festival|art|poem|poetry|opera|calligraphy/i,
    /craft|folk|traditional|dragon boat|tai chi|martial arts|history/i,
    /ancient|exhibition|performance|ceremony|spirituality|philosophy/i,
  ]},
  { name: '文旅', tests: [
    /tourism|tourist|travel|destination|attraction|scenic|hotel|restaurant/i,
    /food|cuisine|gourmet|mountain|river|lake|nature|park|hiking/i,
    /wudang|three gorges|yellow crane|shennongjia|wuhan|yichang|huangshi/i,
  ]},
]

function extractKeywords(text: string, category: string): string[] {
  const lower = text.toLowerCase()
  const words = new Set<string>()

  // Place names
  const places = ['wuhan','hubei','yichang','huangshi','xiangyang','jingzhou',
    'shiyan','xianning','enshi','shennongjia','wudang','yichun','jincheng',
    'yellow crane tower','three gorges','east lake','optics valley','guanggu',
    'yangtze river','han river','qichun','chibi','jingmen']
  for (const p of places) {
    if (lower.includes(p)) words.add(p)
  }

  // Category-specific
  const catKeywords: Record<string, string[]> = {
    '签证': ['visa','visa-free','policy','entry','passport','transit','travel permit'],
    '科技': ['tech','AI','5G','biotech','innovation','digital','semiconductor'],
    '文化': ['culture','heritage','history','tradition','festival','art','museum'],
    '文旅': ['tourism','travel','attraction','food','cuisine','nature','mountain'],
  }
  for (const kw of (catKeywords[category] || [])) {
    if (lower.includes(kw)) words.add(kw)
  }

  // Extract capitalized nouns > 3 chars
  const tokens = text.match(/\b[A-Z][a-z]{2,}\b/g) || []
  for (const t of tokens) {
    if (t.length > 3 && !['The','This','That','With','From','China','Chinese','Hubei'].includes(t)) {
      // Avoid duplicates with place names
      if (!places.includes(t.toLowerCase())) words.add(t.toLowerCase())
    }
  }

  return [...words].slice(0, 8)
}

function classifyArticle(title: string, description: string): string {
  const text = title + ' ' + description
  for (const rule of CATEGORY_RULES) {
    for (const test of rule.tests) {
      if (test.test(text)) return rule.name
    }
  }
  return '文旅' // default
}

// ─── 生成正文 ────────────────────────────────────────────────────



// ─── 格式化日期 ──────────────────────────────────────────────────

function formatPubDate(dateStr: string): string {
  if (!dateStr) return new Date().toISOString()
  try {
    const d = new Date(dateStr)
    if (isNaN(d.getTime())) return new Date().toISOString()
    return d.toISOString()
  } catch {
    return new Date().toISOString()
  }
}

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
}

function extractCleanText(html: string): string {
  // Step 1: decode HTML entities so < and > become real tags
  let decoded = decodeHtmlEntities(html)
  // Step 2: CDATA
  decoded = decoded.replace(/<!\[CDATA\[([^\]]*)\]\]>/g, '$1')
  // Step 3: strip all tags
  decoded = decoded.replace(/<[^>]*>/g, '')
  // Step 4: decode again (double-encoded)
  decoded = decodeHtmlEntities(decoded)
  // Step 5: collapse whitespace
  return decoded.replace(/\s+/g, ' ').trim()
}

function extractSourceUrl(item: any): string {
  // Prefer explicit source url from Google News
  if (item.sourceUrl) return item.sourceUrl
  // Fallback to the RSS link
  return item.link || ''
}

function toArticle(item: any, index: number): Article {
  const title = extractCleanText(item.title).substring(0, 150)

  // Google News description is HTML: <a href="...">Title</a>&nbsp;&nbsp;<font>Source</font>
  // Extract the text portion only
  let bodyText = extractCleanText(item.description)

  // Try to extract actual source from description by parsing the <a> tag
  const descLinkMatch = item.description.match(/<a[^>]+href="([^"]+)"[^>]*>/i)
  const actualSource = descLinkMatch?.[1] || item.sourceUrl || item.link

  const category = classifyArticle(title, bodyText)
  const keywords = extractKeywords(title + ' ' + bodyText, category)
  const source = item.source || ''

  // Use actual source title + body as content
  const contentLines: string[] = []
  if (bodyText && bodyText.length > 20) {
    contentLines.push(bodyText)
  } else {
    contentLines.push(title)
  }

  return {
    id: `news-${index}-${Date.now().toString(36)}`,
    title,
    date: formatPubDate(item.pubDate),
    content: contentLines.join(' '),
    keywords,
    category,
    sourceUrl: actualSource,
  }
}

// ─── 主逻辑 ──────────────────────────────────────────────────────

async function fetchArticles(): Promise<Article[]> {
  const queries = [
    'Hubei China tourism travel',
    'Wuhan technology innovation',
    'Hubei visa travel policy China',
    'Hubei culture heritage festival',
  ]

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
    await new Promise(r => setTimeout(r, 200))
  }

  const seenTitles = new Set<string>()
  const articles: Article[] = []

  for (let i = 0; i < allItems.length; i++) {
    const item = allItems[i]
    const title = item.title.replace(/<!\[CDATA\[([^\]]*)\]\]>/g, '$1').trim()
    if (!title || seenTitles.has(title)) continue
    seenTitles.add(title)
    articles.push(toArticle(item, articles.length))
  }

  articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return articles.slice(0, 30)
}

// ─── Handler ─────────────────────────────────────────────────────

export async function onRequest(context: { request: Request; env: any }): Promise<Response> {
  const { request, env } = context

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS_HEADERS })
  }
  if (request.method !== 'GET') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    })
  }

  try {
    let articles: Article[] | null = null

    // Try KV cache first
    if (env?.HIHUBEI_CACHE) {
      try {
        const cached = await env.HIHUBEI_CACHE.get('articles', 'json')
        if (cached && Array.isArray(cached)) articles = cached as Article[]
      } catch {}
    }

    if (!articles) {
      articles = await fetchArticles()
      if (env?.HIHUBEI_CACHE) {
        try {
          await env.HIHUBEI_CACHE.put('articles', JSON.stringify(articles), { expirationTtl: 21600 })
        } catch {}
      }
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
    return new Response(JSON.stringify({ error: err.message, articles: [] }), {
      status: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    })
  }
}
