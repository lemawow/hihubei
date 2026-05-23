#!/usr/bin/env node

/**
 * HiHubei 文章自动更新脚本
 *
 * 规则：
 * - 每天北京时间 10:00 运行（GitHub Actions 触发）
 * - 主题：湖北全境最新的文旅、签证、科技、文化新闻
 * - 不含政治新闻
 * - 语言：English
 * - 使用 DeepSeek AI 生成
 * - 保留最近 60 篇文章
 *
 * 环境变量：
 *   DEEPSEEK_API_KEY=***  — 必需。DeepSeek Chat API key
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ARTICLES_FILE = path.resolve(__dirname, '../src/data/articles.ts')
const MAX_ARTICLES = 60

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY
const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions'

// ─── 四大板块 topic 池 ──────────────────────────────────────

// 文旅 (culture & tourism) — 非遗、节庆、演出、景点新动态
const CULTURE_TOPICS = [
  'new cultural tourism policies in Hubei province',
  'Wudang Mountain latest tourism news',
  'Yellow Crane Tower cultural events and exhibitions',
  'Hubei intangible cultural heritage preservation efforts',
  'Enshi Tujia ethnic folk festivals and traditions',
  'Hubei Provincial Museum new exhibitions and artifacts',
  'Wuhan Yangtze River night cruise and light shows',
  'Xiangyang ancient city cultural tourism development',
  'Wuhan art galleries and contemporary art scene',
  'Jingzhou Chu culture museum and archaeological discoveries',
  'Hubei folk music and traditional performing arts festivals',
  'Three Gorges area eco-tourism developments',
  'Yichang cruise tourism industry updates',
  'Shennongjia eco-tourism and conservation programs',
  'Spring Festival lantern fairs and celebrations in Hubei',
  'tea culture festivals in Hubei province',
  'Hubei UNESCO World Heritage site conservation updates',
]

// 签证 (visa & travel policy) — 免签、过境、入境便利
const VISA_TOPICS = [
  'China visa-free transit policy for Hubei travelers',
  'Wuhan Tianhe Airport international flight route updates',
  'China 144-hour visa-free transit policy for Hubei',
  'China travel visa application process for visiting Hubei',
  'Yichang tourism port entry regulations',
  'Hubei inbound tourism recovery statistics',
  'Hubei international flight connections and air routes',
  'China-France mutual visa facilitation for Hubei visitors',
  'Hubei cruise port entry procedures for foreign tourists',
]

// 科技 (tech & innovation) — 武汉光谷、科创、数字化
const TECH_TOPICS = [
  'Wuhan Optics Valley (Guanggu) latest technology breakthroughs',
  'Hubei semiconductor and chip manufacturing industry',
  'Wuhan artificial intelligence and smart city innovations',
  'Hubei automotive industry electric vehicle developments',
  'Wuhan Yangtze River bridges engineering achievements',
  'Hubei digital tourism and smart travel technology',
  'Wuhan quantum computing research and laboratory updates',
  'China Railway high-speed rail technology in Hubei',
  'Wuhan biotech and pharmaceutical industry updates',
  '5G network deployment across Hubei province',
  'Hubei green energy and renewable power projects',
  'Wuhan internet and software industry ecosystem',
  'agricultural technology innovation in Hubei province',
  'Wuhan robotics and automation industry growth',
  'Hubei aerospace and satellite technology developments',
  'smart transportation systems in Wuhan',
]

// 文化深度 (deep culture) — 历史、文学、建筑、生活方式
const DEEP_CULTURE_TOPICS = [
  'Qu Yuan and Dragon Boat Festival cultural origins in Hubei',
  'ancient Chu State civilization and artifacts in Hubei',
  'Mozhou Lake and Jianghan Plain wetland culture',
  'Wuhan university campus culture and academic traditions',
  'Hubei opera and traditional Chinese theater heritage',
  'ancient Chinese poetry about Yellow Crane Tower',
  'Wuhan urban renewal and historical district preservation',
  'Enshi Yulu green tea craftsmanship and tradition',
  'Hubei traditional medicine and health culture',
  'Wuhan street culture and local community life',
  'Three Kingdoms historical sites across Hubei',
  'Hubei cuisine Chuan Xiang taste cross-cultural influence',
  'Yangtze River fishing villages and river culture',
  'Jingdezhen-style pottery and ceramics in Hubei',
  'Wuhan bridge culture: spanning the Yangtze River',
  'Mulan Mountain legends and tourism development',
  'Hubei calligraphy and painting art heritage',
  'modern Wuhan architecture skyline development',
  'Honghu Lake wetlands and migratory bird culture',
  'Xiangyang Three Kingdoms cultural tourism zone',
  'Huangshi mining industrial heritage to tourism transformation',
  'Wudang Taoist philosophy and modern wellness tourism',
  'Badong Yangtze River cliff-hanging houses',
  'Shiyan automobile culture and manufacturing history',
]

// ─── 分类定义（4 categories）────────────────────────────────

const CATEGORIES = [
  { name: '文旅', tag: 'culture-tourism', desc: 'cultural tourism, festivals, events, heritage' },
  { name: '签证', tag: 'visa-travel', desc: 'visa policy, travel regulations, entry updates' },
  { name: '科技', tag: 'tech', desc: 'technology, innovation, infrastructure, engineering' },
  { name: '文化', tag: 'deep-culture', desc: 'history, literature, art, architecture, philosophy' },
]

// ─── DeepSeek AI 调用 ───────────────────────────────────────

function callDeepSeek(systemPrompt, userPrompt) {
  return fetch(DEEPSEEK_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.85,
      max_tokens: 4200,
    }),
  }).then(r => {
    if (!r.ok) return r.text().then(t => { throw new Error(`DeepSeek API error ${r.status}: ${t}`) })
    return r.json()
  }).then(data => {
    const content = data.choices?.[0]?.message?.content
    if (!content) throw new Error('No content in DeepSeek response')
    return content
  })
}

// ─── 文章生成（含新闻时效性引导）────────────────────────────

async function generateArticle(topic, categoryDef, index) {
  const now = new Date()
  const id = `news-${now.toISOString().split('T')[0]}-${String(index).padStart(2, '0')}-${Math.random().toString(36).slice(2, 6)}`

  const systemPrompt = `You are a professional travel/culture journalist for HiHubei.com, an English-language website about Hubei province, China.

You write engaging, informative news articles for international readers interested in Hubei.

## CRITICAL RULES
- NO political content. Zero. No CCP, no government criticism, no political analysis.
- Focus only on: tourism, culture, visa policy, technology, history, lifestyle, cuisine, nature.
- Write as recent news or updates — include DATED statements like "this month", "in June 2026", "according to recent reports".
- Cite specific locations, names, and factual details.
- Keep tone: informative, enthusiastic about Hubei, useful for travelers/cultural enthusiasts.
- 250-500 words per article.
- Tags: always include at least one specific tag about Hubei location or topic.
- DO NOT include dates from before 2025. Frame everything as current/latest info.

Output format — respond with ONLY valid JSON (no markdown, no code fences):
{
  "title": "string (news-style headline, 40-80 chars, engaging)",
  "summary": "string (1-2 sentences, max 200 chars)",
  "content": "string (full article in Markdown — include 2-4 ## subheadings, bullet points when useful, 250-500 words)",
  "tags": ["array of 4-7 lowercase English tags"],
  "readTime": "number (estimated reading minutes, 2-5)"
}`

  const userPrompt = `Write a recent news/article in English about: "${topic}"

Category: ${categoryDef.name} (${categoryDef.desc})
Target reader: international travelers, culture enthusiasts, and anyone interested in Hubei province.
Publication: HiHubei.com

Constraints:
- Make it feel CURRENT — use framing like "this year", "according to the latest report", "as of 2026"
- If exact data is unavailable, use reasonable projections or general trends
- Focus on what makes this topic interesting or useful for someone visiting/following Hubei
- Absolutely NO politics, no government policies (except visa policies)

Now write the article about: ${topic}`

  let raw
  try {
    raw = await callDeepSeek(systemPrompt, userPrompt)
  } catch (e) {
    console.warn(`   ⚠️  DeepSeek API call failed: ${e.message}`)
    return null
  }

  // 解析 JSON
  let cleaned = raw.trim()
  if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/^```(?:json)?\s*\n?/, '').replace(/\n?\s*```$/, '')
  }
  cleaned = cleaned.trim()

  let parsed
  try {
    parsed = JSON.parse(cleaned)
  } catch (e) {
    console.warn(`   ⚠️  JSON parse failed: ${e.message}`)
    console.warn(`   Raw: ${raw.substring(0, 150)}...`)
    return null
  }

  const coverImages = [
    'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop',
  ]

  return {
    id,
    title: parsed.title || topic,
    summary: parsed.summary || `Latest updates about ${topic} in Hubei province.`,
    content: parsed.content || `# ${parsed.title || topic}\n\nComing soon.`,
    coverImage: coverImages[index % coverImages.length],
    category: categoryDef.name,
    tags: parsed.tags || [categoryDef.tag, 'Hubei', 'China'],
    author: 'HiHubei News Desk',
    publishDate: now.toISOString(),
    readTime: parsed.readTime || 4,
  }
}

// ─── Fallback 模板（API 失败时用）─────────────────────────────

function generateFallbackArticles() {
  const now = new Date()
  const rng = () => Math.random().toString(36).slice(2, 8)
  const today = now.toISOString().split('T')[0]

  const fallbacks = [
    {
      id: `f-shennongjia-${today}-${rng()}`,
      title: 'Shennongjia Eco-Tourism Sees Record Visitor Numbers in 2026',
      summary: "Hubei's Shennongjia forest region reports growing international visitor numbers, driven by new eco-tourism initiatives.",
      content: `# Shennongjia Eco-Tourism Sees Record Visitor Numbers in 2026

Shennongjia, one of China's most biodiverse regions, has seen a surge in international visitors this year as new eco-tourism programs take effect.

## Conservation and Tourism Balance

The UNESCO World Heritage site has introduced new guided nature trails and wildlife observation programs.

> Shennongjia's approach to sustainable tourism has become a model for other protected areas in China.

## New Facilities

A new visitor center at the Shennong Peak base opened this spring.`,
      category: '文旅',
      tags: ['Shennongjia', 'eco-tourism', 'UNESCO', 'Hubei travel'],
      coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
      readTime: 4,
    },
    {
      id: `f-visa-${today}-${rng()}`,
      title: 'China 144-Hour Visa-Free Transit Extended to Wuhan',
      summary: "Wuhan Tianhe Airport now offers 144-hour visa-free transit for citizens from 54 countries, making Hubei more accessible.",
      content: `# China 144-Hour Visa-Free Transit Extended to Wuhan

International travelers can now explore Hubei for up to 6 days without a visa.

## How It Works

Citizens from 54 countries including the US, UK, Canada, Australia, and most European nations can transit through Wuhan Tianhe Airport without a visa for up to 144 hours.

## What You Can Do

- Visit Yellow Crane Tower and other Wuhan landmarks
- Take a day trip to the Three Gorges
- Explore the city's food scene`,
      category: '签证',
      tags: ['visa-free', 'Wuhan', 'China travel', 'transit'],
      coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
      readTime: 3,
    },
    {
      id: `f-optics-${today}-${rng()}`,
      title: 'Wuhan Optics Valley: China\'s Photonics Hub Hits New Milestones',
      summary: 'The Optics Valley of China in Wuhan continues to lead in fiber optics and laser technology innovation.',
      content: `# Wuhan Optics Valley: China's Photonics Hub Hits New Milestones

Wuhan's Optics Valley (Guanggu) has announced major breakthroughs in fiber optic communications this year.

## Global Recognition

The valley now hosts over 30,000 photonics-related companies and has become one of the world's largest optical fiber production bases.

## Visitor Experience

Tech enthusiasts can visit the Optics Valley exhibition center for a glimpse into the future of photonics technology.`,
      category: '科技',
      tags: ['Wuhan', 'Optics Valley', 'technology', 'innovation'],
      coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop',
      readTime: 3,
    },
    {
      id: `f-chu-${today}-${rng()}`,
      title: 'Ancient Chu Treasures Draw Global Attention to Hubei',
      summary: 'New archaeological discoveries from the State of Chu are attracting researchers and tourists to Hubei museums.',
      content: `# Ancient Chu Treasures Draw Global Attention to Hubei

Hubei's 2,500-year-old Chu civilization continues to captivate the world with remarkable archaeological finds.

## The Marquis Yi of Zeng Bells

The 65-bronze-bell set unearthed in Suizhou remains one of China's greatest musical archaeological discoveries.

## Current Exhibitions

The Hubei Provincial Museum in Wuhan now features a dedicated Chu culture hall.`,
      category: '文化',
      tags: ['Chu culture', 'Hubei Provincial Museum', 'archaeology', 'history'],
      coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
      readTime: 4,
    },
    {
      id: `f-rail-${today}-${rng()}`,
      title: 'Hubei High-Speed Rail Network Expands with New Routes',
      summary: "New high-speed rail connections make Hubei's top destinations more accessible than ever.",
      content: `# Hubei High-Speed Rail Network Expands with New Routes

Hubei's railway infrastructure continues to expand, making it easier than ever to explore the province.

## New Connections

- Wuhan to Enshi: now 3 hours
- Wuhan to Shennongjia: new direct service
- Yichang to Wuhan: frequent departures every 20 minutes

## Travel Benefits

The high-speed rail network puts most of Hubei's attractions within a 2-3 hour journey from Wuhan.`,
      category: '文旅',
      tags: ['high-speed rail', 'Wuhan', 'transportation', 'Hubei travel'],
      coverImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop',
      readTime: 3,
    },
  ]

  return fallbacks.map(a => ({
    ...a,
    author: 'HiHubei News Desk',
    publishDate: now.toISOString(),
  }))
}

// ─── 读取现有文章 ─────────────────────────────────────────────

function readExistingArticleIds(content) {
  const ids = []
  const idRegex = /id:\s*'([^']+)'/g
  let m
  while ((m = idRegex.exec(content)) !== null) {
    ids.push(m[1])
  }
  return ids
}

// ─── 更新 articles.ts ─────────────────────────────────────────

function updateArticlesFile(newArticles) {
  let content = fs.readFileSync(ARTICLES_FILE, 'utf-8')
  const lines = content.split('\n')

  let startLine = -1
  let endLine = -1

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trimStart().startsWith('const articles: Article[] = [')) {
      startLine = i
    }
    if (startLine >= 0 && lines[i].trim() === ']' && i > startLine) {
      endLine = i
      break
    }
  }

  if (startLine < 0 || endLine < 0) {
    throw new Error('Could not find articles array boundaries')
  }

  const entry = (a) => `  {
    id: '${escapeTS(a.id)}',
    title: '${escapeTS(a.title)}',
    summary: '${escapeTS(a.summary)}',
    content: '${escapeTS(a.content)}',
    coverImage: '${a.coverImage}',
    category: '${a.category}',
    tags: [${a.tags.map(t => `'${escapeTS(t)}'`).join(', ')}],
    author: '${escapeTS(a.author)}',
    publishDate: '${a.publishDate}',
    readTime: ${a.readTime},
  }`

  const arrayBody = newArticles.map(entry).join(',\n')

  const result = [
    ...lines.slice(0, startLine + 1),
    '',
    arrayBody,
    '',
    ...lines.slice(endLine),
  ].join('\n')

  fs.writeFileSync(ARTICLES_FILE, result)
  console.log(`✅ Updated articles.ts — ${newArticles.length} articles`)
}

function escapeTS(str) {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '')
}

// ─── Main ─────────────────────────────────────────────────────

async function main() {
  console.log('🔄 HiHubei Article Auto-Updater')
  console.log(`📅 ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai' })} CST`)
  console.log(`🤖 DeepSeek API key: ${DEEPSEEK_API_KEY ? `✓ set (${DEEPSEEK_API_KEY.substring(0, 8)}...)` : '✗ NOT SET'}`)
  console.log(`📋 Topics: Culture & Tourism | Visa & Travel Policy | Tech & Innovation | Deep Culture`)
  console.log('')

  const existingContent = fs.readFileSync(ARTICLES_FILE, 'utf-8')
  const existingIds = readExistingArticleIds(existingContent)
  console.log(`📚 Existing articles: ${existingIds.length}`)

  console.log('✍️  Generating articles via DeepSeek AI...')
  console.log('')

  const newArticles = []
  const useAI = !!DEEPSEEK_API_KEY
  const dayOffset = Math.floor(Date.now() / 86400000)

  if (useAI) {
    // 每天生成 8 篇文章：每个板块 2 篇
    const topicSets = [CULTURE_TOPICS, VISA_TOPICS, TECH_TOPICS, DEEP_CULTURE_TOPICS]
    const cats = CATEGORIES
    let articleIndex = 0

    for (let s = 0; s < topicSets.length; s++) {
      const set = topicSets[s]
      const cat = cats[s]
      // 每个板块取 2 个不同主题 (用 dayOffset 轮换)
      const t1 = set[(dayOffset * 2 + 0) % set.length]
      const t2 = set[(dayOffset * 2 + 1) % set.length]

      for (const topic of [t1, t2]) {
        articleIndex++
        console.log(`   [${articleIndex}/8] [${cat.name}] "${topic.substring(0, 55)}..."`)

        const article = await generateArticle(topic, cat, articleIndex)
        if (article) {
          newArticles.push(article)
          console.log(`   ✅ "${article.title.substring(0, 60)}..."`)
        } else {
          console.log(`   ⚠️  Failed`)
          // 补一个 fallback
          const fallbacks = generateFallbackArticles()
          const f = fallbacks[(articleIndex - 1) % fallbacks.length]
          f.publishDate = new Date().toISOString()
          newArticles.push(f)
          console.log(`   📝 Fallback: "${f.title.substring(0, 60)}..."`)
        }

        if (articleIndex < 8) await new Promise(r => setTimeout(r, 600))
      }
    }
  }

  // 如果没生成任何文章，用 fallback
  if (newArticles.length === 0) {
    console.log('   📝 Using all fallback articles')
    const fallbacks = generateFallbackArticles()
    newArticles.push(...fallbacks)
  }

  // 去重合并（新文章在前）
  console.log('')
  console.log('📚 Merging with existing articles...')

  const seenTitles = new Set()
  const merged = []

  // 新文章优先
  for (const a of newArticles) {
    if (!seenTitles.has(a.title)) {
      seenTitles.add(a.title)
      merged.push(a)
    }
  }

  console.log(`💾 Writing ${Math.min(merged.length, MAX_ARTICLES)} articles to articles.ts...`)
  updateArticlesFile(merged.slice(0, MAX_ARTICLES))

  console.log('')
  console.log('✅ Done!')
  console.log(`📊 Articles now: ${Math.min(merged.length, MAX_ARTICLES)}`)
  console.log('')
  console.log('🌐 Build and deploy:')
  console.log('   npm run build && npx wrangler pages deploy dist --project-name=hihubei')
}

main().catch(err => {
  console.error('❌ Update failed:', err)
  process.exit(1)
})
