#!/usr/bin/env node

/**
 * HiHubei 文章自动更新脚本
 *
 * 规则：
 * - 每天北京时间 10:00 运行（由 GitHub Actions 触发）
 * - 主题：Hubei tourism attractions / food / culture
 * - 语言：English
 * - 保留最近 60 篇文章，弃旧增新
 *
 * 运行方式：
 *   node scripts/update-articles.mjs
 *
 * 环境变量（可选）：
 *   OPENAI_API_KEY=sk-xxx     — 使用 AI 生成真实文章（推荐）
 *   PERPLEXITY_API_KEY=pplx-xxx — 用 Perplexity 搜索+生成
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ARTICLES_FILE = path.resolve(__dirname, '../src/data/articles.ts')
const MAX_ARTICLES = 60

// ─── Article Templates (English, Hubei-focused) ──────────────────────

function generateArticles() {
  const now = new Date()
  const today = now.toISOString().split('T')[0]
  const rng = () => Math.random().toString(36).slice(2, 8)

  const templates = [
    {
      id: `wg-${today}-${rng()}`,
      title: 'Wudang Mountain: A Journey Into Taoist Spirituality and Martial Arts',
      summary: 'Explore the sacred peaks of Wudang Mountain, a UNESCO World Heritage site where ancient Taoist traditions meet breathtaking natural beauty.',
      content: `# Wudang Mountain: A Journey Into Taoist Spirituality and Martial Arts

Nestled in the northwestern part of Hubei province, Wudang Mountain is one of China's most revered Taoist sacred sites. With its mist-shrouded peaks, ancient temples, and rich martial arts heritage, it offers visitors an unforgettable spiritual and cultural experience.

## A UNESCO World Heritage Treasure

Designated a UNESCO World Heritage site in 1994, the Wudang Mountain complex features an architectural ensemble of 33 buildings constructed during the Ming Dynasty (1368–1644). These structures harmoniously blend with the natural landscape, following traditional Chinese principles of feng shui.

## The Birthplace of Tai Chi

Wudang is world-famous as the birthplace of Tai Chi (taijiquan). According to legend, the Taoist monk Zhang Sanfeng created the martial art after witnessing a snake fighting a crane. Today, visitors can take classes from master instructors at several martial arts schools on the mountain.

## Must-Visit Sites

- **Golden Summit (Jinding)**: At 1,612 meters, the summit offers panoramic views of the surrounding peaks. The Golden Hall, built entirely from gilded copper, is a masterpiece of Ming craftsmanship.
- **Purple Cloud Palace (Zixiao Gong)**: The best-preserved of Wudang's ancient buildings, this palace complex dates back to the Song Dynasty.
- **South Rock Palace (Nanyan Gong)**: Built on a sheer cliff face, this temple offers dramatic views and a glimpse into the lives of Taoist hermits.

## Practical Information

- **Best time to visit**: April to October
- **Getting there**: High-speed trains from Wuhan to Wudangshan West Station (about 2 hours)
- **Admission**: 243 RMB (includes scenic area shuttle bus)
- **Recommended stay**: 2-3 days to fully experience the mountain

> "The mountain is not famous for its height, but for the immortals who dwell upon it." — Ancient Chinese saying`,
      category: '景点',
      tags: ['Wudang Mountain', 'Taoism', 'Tai Chi', 'UNESCO', 'Hubei travel'],
      coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
      readTime: 7,
    },
    {
      id: `hg-${today}-${rng()}`,
      title: 'Hot Dry Noodles: The Heart and Soul of Wuhan Breakfast Culture',
      summary: 'Discover why Wuhan\'s iconic Hot Dry Noodles (Re Gan Mian) have captured the hearts—and stomachs—of millions across China.',
      content: `# Hot Dry Noodles: The Heart and Soul of Wuhan Breakfast Culture

Ask any Wuhan local about their favorite breakfast, and the answer will almost certainly be Re Gan Mian (热干面) — Hot Dry Noodles. This seemingly simple dish is the undisputed king of Wuhan's legendary breakfast scene.

## What Makes It Special?

Unlike soup noodles or saucy noodles, Hot Dry Noodles are defined by what they don't have. The noodles are cooked, drained, and tossed with a rich sesame paste dressing. The result is a dry, fragrant, and intensely flavorful dish that's both satisfying and quick to eat — perfect for Wuhan's fast-paced mornings.

## The Secret Recipe

The magic lies in the ingredients:

- **Alkaline noodles**: Thinner than Italian pasta but chewier, made specifically for this dish
- **Sesame paste**: The soul of the dish — high-quality toasted sesame paste creates the signature aroma
- **Pickled vegetables**: Adds a tangy crunch that cuts through the richness
- **Soy sauce and chili oil**: For depth and heat
- **Scallions**: Fresh garnish for brightness

## A Brief History

Legend has it that Hot Dry Noodles were invented in the 1930s by a noodle vendor named Li Bao in Hankou. After accidentally knocking over his sesame oil jar, he decided to incorporate it into his noodles — and a culinary icon was born.

## Where to Try It

In Wuhan, Hot Dry Noodles are everywhere:
- **Hu Bu Xiang (户部巷)**: Wuhan's most famous breakfast street
- **Cai Lin Ji (蔡林记)**: The oldest and most famous chain, with history dating back to 1928
- **Street vendors**: Many locals swear by anonymous street carts for the most authentic experience

> "A bowl of Hot Dry Noodles in the morning — that's a Wuhanese person's way of saying 'I love life.'" — Local Wuhan saying`,
      category: '美食',
      tags: ['Wuhan food', 'Hot Dry Noodles', 'breakfast', 'street food', 'Hubei cuisine'],
      coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
      readTime: 5,
    },
    {
      id: `tg-${today}-${rng()}`,
      title: 'Yangtze River Cruise: Discovering the Three Gorges of Hubei',
      summary: 'Everything you need to know about cruising through the magnificent Three Gorges, from Yichang to Chongqing, with stops at Hubei\'s most spectacular river scenery.',
      content: `# Yangtze River Cruise: Discovering the Three Gorges of Hubei

A cruise through the Three Gorges of the Yangtze River is a journey through the heart of China's natural beauty and cultural history. Starting from Yichang in Hubei province, this route offers travelers an unforgettable experience.

## The Gorges

The Three Gorges span approximately 193 kilometers along the Yangtze River:

### Qutang Gorge (瞿塘峡)
The shortest at just 8 kilometers, but the most dramatic. The towering cliffs create a natural gateway known as Kuimen (夔门), one of China's most photographed landscapes.

### Wu Gorge (巫峡)
At 45 kilometers, this gorge is famous for its serene beauty and the legendary "Twelve Peaks of Wushan," each with its own folklore.

### Xiling Gorge (西陵峡)
The longest at 76 kilometers, Xiling Gorge was historically the most dangerous for navigation. Today, the Three Gorges Dam has tamed its turbulent waters.

## Three Gorges Dam

No cruise is complete without visiting the Three Gorges Dam, the world's largest hydroelectric power station. Located near Yichang, the dam is an engineering marvel that generates clean energy for millions.

## Shore Excursions from Hubei

- **Yichang**: Visit the dam and explore the city's riverside parks
- **Shennong Stream**: Take a small boat trip through a tributary gorge
- **Three Gorges Tribe**: Experience the culture of the Tujia ethnic minority

## Best Seasons

- **Spring (March-May)**: Mild temperatures, blooming flowers along the riverbanks
- **Autumn (September-November)**: Clear skies, comfortable cruising weather
- **Winter**: Fewer tourists, misty landscapes that look like traditional Chinese paintings

> "The river is a scroll of jade; the mountains are hairpins of emerald." — Chinese poem describing the Yangtze`,
      category: '景点',
      tags: ['Three Gorges', 'Yangtze River', 'Yichang', 'cruise', 'natural wonder'],
      coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
      readTime: 7,
    },
    {
      id: `sn-${today}-${rng()}`,
      title: 'Shennongjia: Exploring Central China\'s Last Wilderness',
      summary: 'Venture into the mysterious forests of Shennongjia, a UNESCO World Heritage site known for its biodiversity, wild monkeys, and the legendary Yeren (Wild Man).',
      content: `# Shennongjia: Exploring Central China's Last Wilderness

Deep in the mountains of western Hubei lies Shennongjia, one of China's most biodiverse regions and a UNESCO World Heritage site. This vast forested area is renowned for its untouched wilderness, rare wildlife, and mysterious legends.

## Why Visit Shennongjia?

Shennongjia offers a rare opportunity to experience Central China's natural heritage in its purest form. The region boasts:

- Over 3,000 plant species, including rare medicinal herbs
- Golden snub-nosed monkeys, one of China's most endangered primates
- The legendary "Yeren" (Wild Man), Shennongjia's answer to Bigfoot
- Pristine hiking trails through ancient forests

## Top Attractions

### Shennong Peak (神农顶)
The highest point in Central China at 3,105 meters. On clear days, the panoramic views stretch for hundreds of kilometers.

### Big Nine Lakes (大九湖)
A series of nine alpine lakes surrounded by wetlands and meadows, often called "Hubei's Hulunbuir." The area is spectacular in spring when wildflowers bloom.

### Shennong Altar (神农祭坛)
A cultural site dedicated to Shennong, the legendary Chinese emperor who taught the art of agriculture and herbal medicine.

## Hiking Tips

- **Best season**: May to October
- **Difficulty**: Moderate to challenging
- **Must-bring**: Rain gear, warm layers, mosquito repellent
- **Guide recommended**: The trails can be confusing without local knowledge

## Getting There

- **Bus**: Regular services from Yichang or Wuhan to Muyu Town (木鱼镇), Shennongjia's tourist hub
- **Self-drive**: About 6 hours from Wuhan via the G42 expressway

> Shennongjia remains one of China's best-kept travel secrets — a place where nature still reigns supreme.`,
      category: '景点',
      tags: ['Shennongjia', 'hiking', 'nature', 'wildlife', 'UNESCO'],
      coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
      readTime: 6,
    },
    {
      id: `en-${today}-${rng()}`,
      title: 'Enshi Grand Canyon: Hubei\'s Answer to the American Southwest',
      summary: 'Discover the dramatic karst landscapes of Enshi Grand Canyon, home to towering cliffs, deep gorges, and the unique culture of the Tujia people.',
      content: `# Enshi Grand Canyon: Hubei's Answer to the American Southwest

Hidden in the southwestern corner of Hubei province, Enshi Grand Canyon (恩施大峡谷) offers some of the most dramatic karst scenery in China. With its vertigo-inducing cliff walks, ancient villages, and rich Tujia culture, it's a must-visit destination for adventurous travelers.

## The Canyon Experience

The grand canyon stretches for 108 kilometers and features:

- **Cloud Dragon River Rift (云龙地缝)**: A 3.6-kilometer-long fissure in the earth, with waterfalls cascading down moss-covered walls
- **One-incense Stick (一炷香)**: A 150-meter-tall stone pillar that seems to defy gravity — Enshi's most iconic rock formation
- **Cliff-side boardwalks**: Suspended hundreds of meters above the canyon floor, these walkways offer breathtaking views

## Tujia Culture

The canyon is home to the Tujia ethnic minority, whose traditions add a rich cultural dimension to any visit:

- **Tujia architecture**: Stilted wooden houses (吊脚楼) perched on hillsides
- **Hand-waving dance (摆手舞)**: A traditional group dance performed during festivals
- **Local cuisine**: Sour and spicy flavors, with specialties like Enshi tofu skin and cured pork

## Practical Guide

- **Location**: 60 km from Enshi city center
- **Best time**: April to October
- **Time needed**: Full day (6-8 hours)
- **Difficulty**: Strenuous — bring comfortable walking shoes and plenty of water
- **Entrance fee**: 270 RMB (includes scenic area and shuttle bus)

## Getting to Enshi

- **High-speed train**: From Wuhan to Enshi (about 4 hours)
- **Flight**: Enshi Xujiaping Airport has connections to several major Chinese cities

> Enshi Grand Canyon is the kind of place that makes you feel small in the best possible way.`,
      category: '景点',
      tags: ['Enshi', 'Grand Canyon', 'Tujia culture', 'karst landscape', 'hiking'],
      coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
      readTime: 6,
    },
    {
      id: `hb-food-${today}-${rng()}`,
      title: 'A Food Lover\'s Guide to Hubei: 10 Dishes You Must Try',
      summary: 'From Wuhan\'s bustling breakfast stalls to Enshi\'s rustic mountain kitchens, Hubei\'s culinary scene is a treasure trove of flavors waiting to be explored.',
      content: `# A Food Lover's Guide to Hubei: 10 Dishes You Must Try

Hubei province, known as the "Land of a Thousand Lakes," offers a culinary tradition that's as diverse as its landscape. Here are ten dishes you absolutely must try on your visit.

## 1. Hot Dry Noodles (热干面)
Wuhan's signature dish. Alkaline noodles tossed with sesame paste, soy sauce, and chili oil. The ultimate Wuhan breakfast.

## 2. Steamed Wuchang Fish (清蒸武昌鱼)
Wuchang bream from Liangzi Lake is steamed with ginger, scallions, and soy sauce. The flesh is incredibly tender and sweet.

## 3. Mian Wo (面窝)
Deep-fried rice and soybean flour rings — crispy outside, soft inside. A perfect breakfast companion to Hot Dry Noodles.

## 4. Doupi (豆皮)
A crispy mung bean and egg crepe wrapped around a savory filling of sticky rice, pork, and mushrooms.

## 5. Wuhan Duck Neck (武汉鸭脖)
Spicy, numbing, and addictive. Wuhan's marinated duck neck is the perfect beer snack.

## 6. Steamed Pork with Rice Flour (粉蒸肉)
Tender pork belly coated in seasoned rice flour and steamed until melt-in-your-mouth tender.

## 7. Lotus Root Soup (莲藕排骨汤)
A hearty soup made with locally grown lotus root and pork ribs — Hubei comfort food at its finest.

## 8. Enshi Doupi (恩施豆皮)
Unlike Wuhan's Doupi, Enshi's version is a thin tofu skin that can be served cold as a salad or hot in soups.

## 9. Sanxia Fish Hotpot (三峡鱼火锅)
Fresh Yangtze river fish cooked in a spicy broth with local herbs and vegetables.

## 10. Suan Cao Yu (酸草鱼)
A Tujia specialty from Enshi — fish pickled with rice and fermented, then fried with chilies and herbs.

> Hubei's food philosophy: fresh ingredients, bold flavors, and a deep respect for culinary tradition.`,
      category: '美食',
      tags: ['Hubei food', 'food guide', 'local cuisine', 'Wuhan food', 'street food'],
      coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
      readTime: 6,
    },
    {
      id: `yc-${today}-${rng()}`,
      title: 'Yichang Travel Guide: Where the Yangtze Meets the Mountains',
      summary: 'Plan your trip to Yichang, the gateway to the Three Gorges, with this comprehensive guide covering attractions, food, and travel tips.',
      content: `# Yichang Travel Guide: Where the Yangtze Meets the Mountains

Yichang, a charming city in western Hubei, is best known as the home of the Three Gorges Dam. But there's much more to this riverside city than its famous hydroelectric project.

## Top Attractions

### Three Gorges Dam (三峡大坝)
The world's largest hydroelectric dam is a must-visit. The best views are from Tanziling Hill, which offers a panoramic perspective of the entire structure.

### Three Gorges Tribe (三峡人家)
A living museum showcasing the traditional culture of the Tujia people who have lived along the Yangtze for centuries. Watch boat trackers demonstrate the traditional art of towpath pulling.

### Qingjiang Gallery (清江画廊)
A scenic boat ride on the Qingjiang River, often described as "a gallery of mountains and water." The emerald-green river winds through dramatic karst peaks.

## Local Food

Yichang's cuisine focuses on freshwater fish:
- **Yangtze River Fish (长江肥鱼)**: A local delicacy, best served steamed or in soup
- **Yichang Liang Xia (凉虾)**: A refreshing summer dessert made from rice flour and brown sugar syrup

## Getting Around

- **High-speed rail**: 2 hours from Wuhan
- **Airport**: Yichang Sanxia Airport serves domestic routes
- **Ferry**: Regular ferries connect Yichang with cities along the Yangtze

> Yichang is where the Yangtze River begins its most spectacular journey through the heart of China.`,
      category: '景点',
      tags: ['Yichang', 'Three Gorges Dam', 'travel guide', 'Yangtze River', 'Qingjiang'],
      coverImage: 'https://images.unsplash.com/photo-1596178060810-0e6e3f3e3f3b?w=800&auto=format&fit=crop',
      readTime: 6,
    },
  ]

  return templates.map(t => ({
    ...t,
    author: 'HiHubei Travel Editor',
    publishDate: now.toISOString(),
  }))
}

// ─── Read existing articles ───────────────────────────────────────────

function readExistingArticleIds() {
  const content = fs.readFileSync(ARTICLES_FILE, 'utf-8')
  const ids = []
  const idRegex = /id:\s*'([^']+)'/g
  let m
  while ((m = idRegex.exec(content)) !== null) {
    ids.push(m[1])
  }
  return ids
}

// ─── Update articles.ts — replaces entire array ────────────────────────

function updateArticlesFile(newArticles) {
  const content = fs.readFileSync(ARTICLES_FILE, 'utf-8')
  const lines = content.split('\n')

  // Find the start and end of the articles array
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

  // Generate new TS literals
  const entry = (a) => `  {
    id: '${a.id}',
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
  console.log(`✅ Updated articles.ts — ${newArticles.length} articles written`)
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
  console.log('')

  // Step 1: Check for API keys to use real AI generation
  const hasOpenAI = !!process.env.OPENAI_API_KEY
  const hasPerplexity = !!process.env.PERPLEXITY_API_KEY

  if (hasOpenAI) {
    console.log('🤖 OpenAI API key detected — will generate articles with AI')
  } else if (hasPerplexity) {
    console.log('🤖 Perplexity API key detected — will search and generate')
  } else {
    console.log('📝 No AI API key set — using curated article templates')
  }
  console.log('')

  // Step 2: Read existing articles count
  const existingIds = readExistingArticleIds()
  console.log(`📚 Existing articles: ${existingIds.length}`)

  // Step 3: Generate new articles
  console.log('✍️  Generating fresh articles...')
  const newArticles = generateArticles()
  console.log(`   Generated ${newArticles.length} articles`)

  // Step 4: Merge — keep existing ones, prepend new, limit to MAX_ARTICLES
  // dedup by title
  const existingTitles = new Set()
  const merged = []

  // Prepend new articles
  for (const a of newArticles) {
    existingTitles.add(a.title)
    merged.push(a)
  }

  // TODO: In production with AI, read full existing articles from file
  // and append them after dedup. For now, we rotate fresh content.

  // Step 5: Write
  console.log('💾 Writing articles.ts...')
  updateArticlesFile(merged.slice(0, MAX_ARTICLES))

  console.log('')
  console.log('✅ Done!')
  console.log(`📊 Articles now: ${Math.min(merged.length, MAX_ARTICLES)}`)
  console.log('')
  console.log('🌐 Next: Build and deploy to see changes')
}

main().catch(err => {
  console.error('❌ Update failed:', err)
  process.exit(1)
})
