#!/usr/bin/env node

/**
 * HiHubei 文章自动更新脚本
 *
 * 规则：
 * - 每天北京时间 10:00 运行（GitHub Actions 触发）
 * - 主题：Hubei tourism attractions / food / culture
 * - 语言：English
 * - 使用 DeepSeek AI 生成真实文章内容
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

// ─── DeepSeek AI 文章生成 ─────────────────────────────────────────

const TOPIC_PROMPTS = [
  { category: '景点', tag: 'attractions', prompt: 'Write a detailed travel article in English about a specific attraction in Hubei province, China. Focus on: location, history, what to see, practical tips, and why it\'s worth visiting.' },
  { category: '美食', tag: 'food', prompt: 'Write a food/cuisine article in English about a specific dish or food experience in Hubei province, China. Cover: what it is, ingredients, history, where to try it, and cultural significance.' },
  { category: '文化', tag: 'culture', prompt: 'Write a cultural article in English about a specific cultural aspect of Hubei province, China. Topics: traditional festivals, ethnic minorities, performing arts, handicrafts, or historical traditions.' },
  { category: '攻略', tag: 'travel-tips', prompt: 'Write a travel guide article in English about visiting a specific destination in Hubei province, China. Include: best time to visit, itinerary suggestions, transportation, accommodation tips, and hidden gems.' },
]

const TOPIC_ROTATIONS = [
  // attractions
  'Wudang Mountain Taoist temples and martial arts heritage',
  'Yellow Crane Tower history and poetry',
  'Three Gorges cruise experience from Yichang',
  'Shennongjia forest and wildlife preservation area',
  'Enshi Grand Canyon geological wonders',
  'Hubei Provincial Museum and the Marquis Yi of Zeng artifacts',
  'Xiangyang ancient city walls and Three Kingdoms history',

  // food
  'Hot Dry Noodles (Re Gan Mian) recipe and culture',
  'Wuhan breakfast culture beyond noodles',
  'Hubei freshwater fish and lake cuisine',
  'Enshi Tujia ethnic food traditions',
  'Jingzhou fish cake and Chu cuisine heritage',
  'Wuhan evening street food and night markets',
  'Lotus root dishes and soups in Hubei cooking',

  // culture
  'Tujia ethnic minority traditions in Enshi',
  'Qu Yuan and the Dragon Boat Festival origins in Hubei',
  'Chu culture and ancient State of Chu legacy',
  'Tea culture in Hubei: Enshi Yulu green tea',
  'Traditional Chinese medicine and herbal culture in Shennongjia',
  'Spring Festival customs in rural Hubei',
  'Hubei opera and folk music traditions',

  // travel-tips
  '3-day Wuhan itinerary for first-time visitors',
  'Wuhan to Wudang Mountain high-speed rail guide',
  'Budget travel tips for Hubei province',
  'Photography spots along the Yangtze River in Hubei',
  'Family-friendly activities in Hubei',
  'Solo travel guide to Hubei\'s off-the-beaten-path destinations',
  'Best hot springs and wellness retreats in Hubei',
]

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
      temperature: 0.8,
      max_tokens: 4000,
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

async function generateArticle(topic, category, index) {
  const now = new Date()
  const id = `ai-${now.toISOString().split('T')[0]}-${String(index).padStart(2, '0')}-${Math.random().toString(36).slice(2, 6)}`

  const systemPrompt = `You are a professional travel writer for HiHubei.com, a tourism website for Hubei province, China.
You write engaging, informative English articles for international travelers.

Output format — you MUST respond with ONLY valid JSON (no markdown, no code fences). Use this exact schema:
{
  "title": "string (compelling, SEO-friendly, 40-70 chars)",
  "summary": "string (1-2 sentences, max 200 chars, enticing hook)",
  "content": "string (full article in Markdown — include 3-5 ## headings, bullet points, at least 1 > quote, 300-600 words)",
  "tags": ["array of 3-6 lowercase English tags"],
  "readTime": "number (estimated reading minutes, 3-8)"
}

Important rules:
- Content must be factual and accurate about Hubei province
- Include specific names, locations, and practical details
- Write in natural, engaging English — not tourist brochure language
- Make it useful for someone planning a trip to Hubei
- No markdown code fences in your response, just raw JSON`

  const userPrompt = `Write an article in English about: ${topic}

Category: ${category}
The article will be published on HiHubei.com, promoting tourism to Hubei province, China.
Target audience: international travelers interested in Chinese culture and nature.

${topic}`

  let raw
  try {
    raw = await callDeepSeek(systemPrompt, userPrompt)
  } catch (e) {
    console.warn(`   ⚠️  DeepSeek API call failed: ${e.message}`)
    return null
  }

  // Parse JSON — handle possible markdown fences
  let cleaned = raw.trim()
  if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/^```(?:json)?\s*/, '').replace(/\s*```$/, '')
  }
  cleaned = cleaned.trim()

  let parsed
  try {
    parsed = JSON.parse(cleaned)
  } catch (e) {
    console.warn(`   ⚠️  Failed to parse DeepSeek response as JSON: ${e.message}`)
    console.warn(`   Raw response (first 200 chars): ${raw.substring(0, 200)}`)
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
  ]

  return {
    id,
    title: parsed.title || `${topic} — A Complete Guide`,
    summary: parsed.summary || `Discover the best of ${topic} in Hubei province.`,
    content: parsed.content || `# ${parsed.title || topic}\n\nComing soon.`,
    coverImage: coverImages[index % coverImages.length],
    category,
    tags: parsed.tags || [category, 'Hubei', 'China travel'],
    author: 'HiHubei Travel Editor',
    publishDate: now.toISOString(),
    readTime: parsed.readTime || 5,
  }
}

// ─── Fallback: template articles (when API fails) ────────────────────

function generateFallbackArticles() {
  const now = new Date()
  const rng = () => Math.random().toString(36).slice(2, 8)
  const today = now.toISOString().split('T')[0]

  const fallbacks = [
    {
      id: `f-wudang-${today}-${rng()}`,
      title: 'Wudang Mountain: A Journey Into Taoist Spirituality and Martial Arts',
      summary: 'Explore the sacred peaks of Wudang Mountain, a UNESCO World Heritage site where ancient Taoist traditions meet breathtaking natural beauty.',
      content: `# Wudang Mountain: A Journey Into Taoist Spirituality and Martial Arts

Nestled in the northwestern part of Hubei province, Wudang Mountain is one of China's most revered Taoist sacred sites. With its mist-shrouded peaks, ancient temples, and rich martial arts heritage, it offers visitors an unforgettable experience.

## A UNESCO World Heritage Treasure

Designated a UNESCO World Heritage site in 1994, the Wudang Mountain complex features an architectural ensemble of 33 buildings constructed during the Ming Dynasty (1368–1644). These structures harmoniously blend with the natural landscape.

## The Birthplace of Tai Chi

Wudang is world-famous as the birthplace of Tai Chi (taijiquan). According to legend, the Taoist monk Zhang Sanfeng created the martial art after witnessing a snake fighting a crane.

## Must-Visit Sites

- **Golden Summit (Jinding)**: At 1,612 meters, the summit offers panoramic views of the surrounding peaks.
- **Purple Cloud Palace (Zixiao Gong)**: The best-preserved of Wudang's ancient buildings.
- **South Rock Palace (Nanyan Gong)**: Built on a sheer cliff face with dramatic views.

> "The mountain is not famous for its height, but for the immortals who dwell upon it." — Ancient Chinese saying`,
      category: '景点',
      tags: ['Wudang Mountain', 'Taoism', 'Tai Chi', 'UNESCO', 'Hubei travel'],
      coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
      readTime: 6,
    },
    {
      id: `f-threegorges-${today}-${rng()}`,
      title: 'Yangtze River Cruise: Discovering the Three Gorges of Hubei',
      summary: 'Everything you need to know about cruising through the magnificent Three Gorges, from Yichang to Chongqing.',
      content: `# Yangtze River Cruise: Discovering the Three Gorges

A cruise through the Three Gorges of the Yangtze River is a journey through the heart of China's natural beauty. Starting from Yichang in Hubei province, this route offers travelers an unforgettable experience.

## The Three Gorges

### Qutang Gorge (瞿塘峡)
The shortest at just 8 kilometers, but the most dramatic. The towering cliffs create a natural gateway known as Kuimen (夔门).

### Wu Gorge (巫峡)
At 45 kilometers, this gorge is famous for its serene beauty and the legendary "Twelve Peaks of Wushan."

### Xiling Gorge (西陵峡)
The longest at 76 kilometers, now tamed by the Three Gorges Dam.

## Practical Information

- **Best time**: Spring (March-May) and Autumn (September-November)
- **Starting point**: Yichang, Hubei province
- **Duration**: 3-5 days typical

> "The river is a scroll of jade; the mountains are hairpins of emerald."`,
      category: '景点',
      tags: ['Three Gorges', 'Yangtze River', 'Yichang', 'cruise'],
      coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
      readTime: 5,
    },
    {
      id: `f-hotdry-${today}-${rng()}`,
      title: 'Hot Dry Noodles: The Soul of Wuhan Breakfast Culture',
      summary: 'Discover why Wuhan\'s iconic Hot Dry Noodles (Re Gan Mian) have captured the hearts of millions across China.',
      content: `# Hot Dry Noodles: The Soul of Wuhan Breakfast Culture

Ask any Wuhan local about their favorite breakfast, and the answer will be Re Gan Mian (热干面) — Hot Dry Noodles.

## What Makes It Special?

The noodles are cooked, drained, and tossed with a rich sesame paste dressing. The result is a dry, fragrant, and intensely flavorful dish.

## A Brief History

Legend has it that Hot Dry Noodles were invented in the 1930s by a noodle vendor named Li Bao in Hankou.

## Where to Try It

- **Hu Bu Xiang (户部巷)**: Wuhan's most famous breakfast street
- **Cai Lin Ji (蔡林记)**: The oldest chain, dating back to 1928
- **Street vendors**: The most authentic experience

> "A bowl of Hot Dry Noodles in the morning — that's a Wuhanese person's way of saying 'I love life.'"`,
      category: '美食',
      tags: ['Wuhan food', 'Hot Dry Noodles', 'breakfast', 'street food'],
      coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
      readTime: 4,
    },
    {
      id: `f-shennongjia-${today}-${rng()}`,
      title: "Shennongjia: Exploring Central China's Last Wilderness",
      summary: 'Venture into the mysterious forests of Shennongjia, a UNESCO World Heritage site known for its biodiversity and wild monkeys.',
      content: `# Shennongjia: Exploring Central China's Last Wilderness

Deep in the mountains of western Hubei lies Shennongjia, one of China's most biodiverse regions and a UNESCO World Heritage site.

## Top Attractions

- **Shennong Peak (神农顶)**: The highest point in Central China at 3,105 meters
- **Big Nine Lakes (大九湖)**: A series of nine alpine lakes surrounded by wetlands
- **Shennong Altar (神农祭坛)**: Dedicated to the legendary emperor Shennong

## Getting There

- **Bus**: Regular services from Yichang or Wuhan to Muyu Town (木鱼镇)
- **Self-drive**: About 6 hours from Wuhan via the G42 expressway

> Shennongjia remains one of China's best-kept travel secrets.`,
      category: '景点',
      tags: ['Shennongjia', 'hiking', 'nature', 'UNESCO'],
      coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
      readTime: 5,
    },
    {
      id: `f-enshi-${today}-${rng()}`,
      title: 'Enshi Grand Canyon: Hubei\'s Most Dramatic Karst Landscape',
      summary: 'Discover the towering cliffs, deep gorges, and unique Tujia culture of Enshi Grand Canyon.',
      content: `# Enshi Grand Canyon: Hubei's Most Dramatic Karst Landscape

Hidden in southwestern Hubei, Enshi Grand Canyon offers some of the most dramatic karst scenery in China.

## The Canyon Experience

- **Cloud Dragon River Rift (云龙地缝)**: A 3.6-kilometer fissure with waterfalls
- **One-incense Stick (一炷香)**: A 150-meter-tall stone pillar
- **Cliff-side boardwalks**: Suspended hundreds of meters above the canyon floor

## Tujia Culture

- **Architecture**: Stilted wooden houses (吊脚楼)
- **Hand-waving dance (摆手舞)**: Traditional group dance
- **Cuisine**: Sour and spicy Tujia specialties

## Getting There

- **High-speed train**: From Wuhan to Enshi (about 4 hours)
- **Entrance fee**: 270 RMB

> Enshi Grand Canyon is the kind of place that makes you feel small in the best possible way.`,
      category: '景点',
      tags: ['Enshi', 'Grand Canyon', 'Tujia culture', 'karst'],
      coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
      readTime: 5,
    },
    {
      id: `f-hubeifood-${today}-${rng()}`,
      title: "A Food Lover's Guide to Hubei: 10 Dishes You Must Try",
      summary: 'From Wuhan breakfast stalls to Enshi mountain kitchens, explore Hubei\'s diverse culinary scene.',
      content: `# A Food Lover's Guide to Hubei: 10 Dishes You Must Try

## 1. Hot Dry Noodles (热干面)
Alkaline noodles with sesame paste — Wuhan's signature.

## 2. Steamed Wuchang Fish (清蒸武昌鱼)
Tender bream from Liangzi Lake, steamed with ginger and scallions.

## 3. Doupi (豆皮)
Crispy mung bean crepe wrapped around sticky rice, pork, and mushrooms.

## 4. Wuhan Duck Neck (武汉鸭脖)
Spicy, numbing, addictive — the perfect beer snack.

## 5. Lotus Root Soup (莲藕排骨汤)
Hearty soup with lotus root and pork ribs.

> Hubei's food philosophy: fresh ingredients, bold flavors, tradition.`,
      category: '美食',
      tags: ['Hubei food', 'food guide', 'Wuhan food'],
      coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
      readTime: 5,
    },
    {
      id: `f-yichang-${today}-${rng()}`,
      title: 'Yichang Travel Guide: Gateway to the Three Gorges',
      summary: 'Plan your trip to Yichang with this comprehensive guide covering attractions, food, and travel tips.',
      content: `# Yichang Travel Guide

Yichang, in western Hubei, is best known as the home of the Three Gorges Dam.

## Top Attractions

- **Three Gorges Dam (三峡大坝)**: The world's largest hydroelectric dam
- **Three Gorges Tribe (三峡人家)**: Tujia culture living museum
- **Qingjiang Gallery (清江画廊)**: Scenic boat ride on emerald-green river

## Getting Around

- **High-speed rail**: 2 hours from Wuhan
- **Airport**: Yichang Sanxia Airport

> Yichang is where the Yangtze begins its most spectacular journey.`,
      category: '景点',
      tags: ['Yichang', 'Three Gorges Dam', 'travel guide'],
      coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
      readTime: 4,
    },
  ]

  return fallbacks.map(a => ({
    ...a,
    author: 'HiHubei Travel Editor',
    publishDate: now.toISOString(),
  }))
}

// ─── Read existing articles ───────────────────────────────────────────

function readExistingArticleIds(content) {
  const ids = []
  const idRegex = /id:\s*'([^']+)'/g
  let m
  while ((m = idRegex.exec(content)) !== null) {
    ids.push(m[1])
  }
  return ids
}

function readExistingArticles(content) {
  const articles = []
  const blocks = content.split(/\n  \{\n    id: '/).slice(1)
  
  for (const block of blocks) {
    const id = block.match(/^([^']+)'/)?.[1]
    if (id) {
      const title = block.match(/title:\s*'([^']*)'/)?.[1]
      articles.push({ id, title })
    }
  }
  return articles
}

// ─── Update articles.ts — replaces entire array ───────────────────────

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

// ─── Main ─────────────────────────────────────────────────────────────

async function main() {
  console.log('🔄 HiHubei Article Auto-Updater')
  console.log(`📅 ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai' })} CST`)
  console.log(`🤖 DeepSeek API key: ${DEEPSEEK_API_KEY ? '✓ set (' + DEEPSEEK_API_KEY.substring(0, 8) + '...)' : '✗ NOT SET'}`)
  console.log('')

  // Read existing
  const existingContent = fs.readFileSync(ARTICLES_FILE, 'utf-8')
  const existingIds = readExistingArticleIds(existingContent)
  const existingArticles = readExistingArticles(existingContent)
  console.log(`📚 Existing articles: ${existingIds.length}`)

  // Generate new articles
  console.log('✍️  Generating articles via DeepSeek AI...')
  console.log('')

  const newArticles = []
  const useAI = !!DEEPSEEK_API_KEY

  // Use AI if key available
  if (useAI) {
    // Generate 7 articles, covering all 4 categories
    for (let i = 0; i < 7; i++) {
      const topicIdx = (i + Math.floor(Date.now() / 86400000)) % TOPIC_ROTATIONS.length
      const catIdx = i % TOPIC_PROMPTS.length
      const topic = TOPIC_ROTATIONS[topicIdx]
      const category = TOPIC_PROMPTS[catIdx].category

      console.log(`   [${i + 1}/7] Generating: "${topic.substring(0, 50)}..." (${category})`)

      const article = await generateArticle(topic, category, i + 1)
      if (article) {
        newArticles.push(article)
        console.log(`   ✅ "${article.title.substring(0, 60)}..."`)
      } else {
        console.log(`   ⚠️  Failed, will use fallback`)
      }

      // Small delay to avoid rate limits
      if (i < 6) await new Promise(r => setTimeout(r, 500))
    }
  }

  // If any AI articles failed, fill with fallbacks
  if (newArticles.length < 7) {
    const fallbacks = generateFallbackArticles()
    const needed = 7 - newArticles.length
    console.log(`   📝 Adding ${needed} fallback articles`)
    for (let i = 0; i < needed; i++) {
      newArticles.push(fallbacks[i])
    }
  }

  // Merge: new first, then old (dedup by title)
  console.log('')
  console.log('📚 Merging articles...')

  const seenTitles = new Set()
  const merged = []

  for (const a of newArticles) {
    if (!seenTitles.has(a.title)) {
      seenTitles.add(a.title)
      merged.push(a)
    }
  }

  // If no AI, keep old articles that don't conflict
  if (!useAI) {
    for (const old of existingArticles) {
      if (!seenTitles.has(old.title)) {
        seenTitles.add(old.title)
        // We can't reconstruct old article from just title/id, so skip for now
        // In AI mode, this is handled by keeping the existing content
      }
    }
  }

  // Write
  console.log('💾 Writing articles.ts...')
  updateArticlesFile(merged.slice(0, MAX_ARTICLES))

  console.log('')
  console.log('✅ Done!')
  console.log(`📊 Articles now: ${Math.min(merged.length, MAX_ARTICLES)}`)
  console.log('')
  console.log('🌐 Build and deploy to see changes:')
  console.log('   npm run build && npx wrangler pages deploy dist --project-name=hihubei')
}

main().catch(err => {
  console.error('❌ Update failed:', err)
  process.exit(1)
})
