/**
 * HiHubei 文章数据系统
 *
 * 这是文章数据的核心存储文件。
 * 自动更新机制：通过 GitHub Actions (cron job) 定时运行 Node.js 脚本，
 * 调用外部 API (AI/LLM 或 RSS 爬虫) 生成新的湖北旅游相关文章，
 * 然后自动向本仓库提交 PR，CI 通过后自动部署。
 *
 * 手动更新：直接编辑 articles 数组，运行 npm run build 即可。
 */

export interface Article {
  id: string
  title: string
  summary: string
  content: string    // Markdown 格式的文章内容
  coverImage: string
  category: string   // 分类: 景点 | 美食 | 文化 | 攻略 | 新闻
  tags: string[]
  author: string
  publishDate: string // ISO date string
  readTime: number    // 阅读时间（分钟）
}

/**
 * 初始文章数据（示例文章）
 * 自动更新脚本运行后，此数组会被动态替换/追加。
 */
const articles: Article[] = [

  {
    id: 'f-shennongjia-2026-07-19-yu1fg0',
    title: 'Shennongjia Eco-Tourism Sees Record Visitor Numbers in 2026',
    summary: 'Hubei\'s Shennongjia forest region reports growing international visitor numbers, driven by new eco-tourism initiatives.',
    content: '# Shennongjia Eco-Tourism Sees Record Visitor Numbers in 2026\n\nShennongjia, one of China\'s most biodiverse regions, has seen a surge in international visitors this year as new eco-tourism programs take effect.\n\n## Conservation and Tourism Balance\n\nThe UNESCO World Heritage site has introduced new guided nature trails and wildlife observation programs.\n\n> Shennongjia\'s approach to sustainable tourism has become a model for other protected areas in China.\n\n## New Facilities\n\nA new visitor center at the Shennong Peak base opened this spring.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['Shennongjia', 'eco-tourism', 'UNESCO', 'Hubei travel'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-19T05:28:09.986Z',
    readTime: 4,
  },
  {
    id: 'f-visa-2026-07-19-ae8gnf',
    title: 'China 144-Hour Visa-Free Transit Extended to Wuhan',
    summary: 'Wuhan Tianhe Airport now offers 144-hour visa-free transit for citizens from 54 countries, making Hubei more accessible.',
    content: '# China 144-Hour Visa-Free Transit Extended to Wuhan\n\nInternational travelers can now explore Hubei for up to 6 days without a visa.\n\n## How It Works\n\nCitizens from 54 countries including the US, UK, Canada, Australia, and most European nations can transit through Wuhan Tianhe Airport without a visa for up to 144 hours.\n\n## What You Can Do\n\n- Visit Yellow Crane Tower and other Wuhan landmarks\n- Take a day trip to the Three Gorges\n- Explore the city\'s food scene',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['visa-free', 'Wuhan', 'China travel', 'transit'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-19T05:28:10.905Z',
    readTime: 3,
  },
  {
    id: 'f-optics-2026-07-19-72d4cd',
    title: 'Wuhan Optics Valley: China\'s Photonics Hub Hits New Milestones',
    summary: 'The Optics Valley of China in Wuhan continues to lead in fiber optics and laser technology innovation.',
    content: '# Wuhan Optics Valley: China\'s Photonics Hub Hits New Milestones\n\nWuhan\'s Optics Valley (Guanggu) has announced major breakthroughs in fiber optic communications this year.\n\n## Global Recognition\n\nThe valley now hosts over 30,000 photonics-related companies and has become one of the world\'s largest optical fiber production bases.\n\n## Visitor Experience\n\nTech enthusiasts can visit the Optics Valley exhibition center for a glimpse into the future of photonics technology.',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['Wuhan', 'Optics Valley', 'technology', 'innovation'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-19T05:28:11.822Z',
    readTime: 3,
  },
  {
    id: 'f-chu-2026-07-19-8odcpy',
    title: 'Ancient Chu Treasures Draw Global Attention to Hubei',
    summary: 'New archaeological discoveries from the State of Chu are attracting researchers and tourists to Hubei museums.',
    content: '# Ancient Chu Treasures Draw Global Attention to Hubei\n\nHubei\'s 2,500-year-old Chu civilization continues to captivate the world with remarkable archaeological finds.\n\n## The Marquis Yi of Zeng Bells\n\nThe 65-bronze-bell set unearthed in Suizhou remains one of China\'s greatest musical archaeological discoveries.\n\n## Current Exhibitions\n\nThe Hubei Provincial Museum in Wuhan now features a dedicated Chu culture hall.',
    coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['Chu culture', 'Hubei Provincial Museum', 'archaeology', 'history'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-19T05:28:12.737Z',
    readTime: 4,
  },
  {
    id: 'f-rail-2026-07-19-x0ibfa',
    title: 'Hubei High-Speed Rail Network Expands with New Routes',
    summary: 'New high-speed rail connections make Hubei\'s top destinations more accessible than ever.',
    content: '# Hubei High-Speed Rail Network Expands with New Routes\n\nHubei\'s railway infrastructure continues to expand, making it easier than ever to explore the province.\n\n## New Connections\n\n- Wuhan to Enshi: now 3 hours\n- Wuhan to Shennongjia: new direct service\n- Yichang to Wuhan: frequent departures every 20 minutes\n\n## Travel Benefits\n\nThe high-speed rail network puts most of Hubei\'s attractions within a 2-3 hour journey from Wuhan.',
    coverImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['high-speed rail', 'Wuhan', 'transportation', 'Hubei travel'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-19T05:28:13.654Z',
    readTime: 3,
  }

]

/**
 * 获取所有文章（按发布时间倒序）
 */
export function getArticles(): Article[] {
  return [...articles].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  )
}

/**
 * 获取最新文章（指定数量）
 */
export function getLatestArticles(count: number = 4): Article[] {
  return getArticles().slice(0, count)
}

/**
 * 按分类获取文章
 */
export function getArticlesByCategory(category: string): Article[] {
  return getArticles().filter(a => a.category === category)
}

/**
 * 获取所有分类
 */
export function getCategories(): string[] {
  return [...new Set(articles.map(a => a.category))]
}

/**
 * 根据 ID 获取单篇文章
 */
export function getArticleById(id: string): Article | undefined {
  return articles.find(a => a.id === id)
}

/**
 * 搜索文章
 */
export function searchArticles(query: string): Article[] {
  const q = query.toLowerCase()
  return getArticles().filter(
    a =>
      a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.tags.some(t => t.toLowerCase().includes(q))
  )
}
