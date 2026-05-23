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
    id: 'wg-2026-05-23-yhu5aa',
    title: 'Wudang Mountain: A Journey Into Taoist Spirituality and Martial Arts',
    summary: 'Explore the sacred peaks of Wudang Mountain, a UNESCO World Heritage site where ancient Taoist traditions meet breathtaking natural beauty.',
    content: '# Wudang Mountain: A Journey Into Taoist Spirituality and Martial Arts\n\nNestled in the northwestern part of Hubei province, Wudang Mountain is one of China\'s most revered Taoist sacred sites. With its mist-shrouded peaks, ancient temples, and rich martial arts heritage, it offers visitors an unforgettable spiritual and cultural experience.\n\n## A UNESCO World Heritage Treasure\n\nDesignated a UNESCO World Heritage site in 1994, the Wudang Mountain complex features an architectural ensemble of 33 buildings constructed during the Ming Dynasty (1368–1644). These structures harmoniously blend with the natural landscape, following traditional Chinese principles of feng shui.\n\n## The Birthplace of Tai Chi\n\nWudang is world-famous as the birthplace of Tai Chi (taijiquan). According to legend, the Taoist monk Zhang Sanfeng created the martial art after witnessing a snake fighting a crane. Today, visitors can take classes from master instructors at several martial arts schools on the mountain.\n\n## Must-Visit Sites\n\n- **Golden Summit (Jinding)**: At 1,612 meters, the summit offers panoramic views of the surrounding peaks. The Golden Hall, built entirely from gilded copper, is a masterpiece of Ming craftsmanship.\n- **Purple Cloud Palace (Zixiao Gong)**: The best-preserved of Wudang\'s ancient buildings, this palace complex dates back to the Song Dynasty.\n- **South Rock Palace (Nanyan Gong)**: Built on a sheer cliff face, this temple offers dramatic views and a glimpse into the lives of Taoist hermits.\n\n## Practical Information\n\n- **Best time to visit**: April to October\n- **Getting there**: High-speed trains from Wuhan to Wudangshan West Station (about 2 hours)\n- **Admission**: 243 RMB (includes scenic area shuttle bus)\n- **Recommended stay**: 2-3 days to fully experience the mountain\n\n> "The mountain is not famous for its height, but for the immortals who dwell upon it." — Ancient Chinese saying',
    coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    category: '景点',
    tags: ['Wudang Mountain', 'Taoism', 'Tai Chi', 'UNESCO', 'Hubei travel'],
    author: 'HiHubei Travel Editor',
    publishDate: '2026-05-23T06:58:57.148Z',
    readTime: 7,
  },
  {
    id: 'hg-2026-05-23-1qb3vl',
    title: 'Hot Dry Noodles: The Heart and Soul of Wuhan Breakfast Culture',
    summary: 'Discover why Wuhan\'s iconic Hot Dry Noodles (Re Gan Mian) have captured the hearts—and stomachs—of millions across China.',
    content: '# Hot Dry Noodles: The Heart and Soul of Wuhan Breakfast Culture\n\nAsk any Wuhan local about their favorite breakfast, and the answer will almost certainly be Re Gan Mian (热干面) — Hot Dry Noodles. This seemingly simple dish is the undisputed king of Wuhan\'s legendary breakfast scene.\n\n## What Makes It Special?\n\nUnlike soup noodles or saucy noodles, Hot Dry Noodles are defined by what they don\'t have. The noodles are cooked, drained, and tossed with a rich sesame paste dressing. The result is a dry, fragrant, and intensely flavorful dish that\'s both satisfying and quick to eat — perfect for Wuhan\'s fast-paced mornings.\n\n## The Secret Recipe\n\nThe magic lies in the ingredients:\n\n- **Alkaline noodles**: Thinner than Italian pasta but chewier, made specifically for this dish\n- **Sesame paste**: The soul of the dish — high-quality toasted sesame paste creates the signature aroma\n- **Pickled vegetables**: Adds a tangy crunch that cuts through the richness\n- **Soy sauce and chili oil**: For depth and heat\n- **Scallions**: Fresh garnish for brightness\n\n## A Brief History\n\nLegend has it that Hot Dry Noodles were invented in the 1930s by a noodle vendor named Li Bao in Hankou. After accidentally knocking over his sesame oil jar, he decided to incorporate it into his noodles — and a culinary icon was born.\n\n## Where to Try It\n\nIn Wuhan, Hot Dry Noodles are everywhere:\n- **Hu Bu Xiang (户部巷)**: Wuhan\'s most famous breakfast street\n- **Cai Lin Ji (蔡林记)**: The oldest and most famous chain, with history dating back to 1928\n- **Street vendors**: Many locals swear by anonymous street carts for the most authentic experience\n\n> "A bowl of Hot Dry Noodles in the morning — that\'s a Wuhanese person\'s way of saying \'I love life.\'" — Local Wuhan saying',
    coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    category: '美食',
    tags: ['Wuhan food', 'Hot Dry Noodles', 'breakfast', 'street food', 'Hubei cuisine'],
    author: 'HiHubei Travel Editor',
    publishDate: '2026-05-23T06:58:57.148Z',
    readTime: 5,
  },
  {
    id: 'tg-2026-05-23-vqg5ro',
    title: 'Yangtze River Cruise: Discovering the Three Gorges of Hubei',
    summary: 'Everything you need to know about cruising through the magnificent Three Gorges, from Yichang to Chongqing, with stops at Hubei\'s most spectacular river scenery.',
    content: '# Yangtze River Cruise: Discovering the Three Gorges of Hubei\n\nA cruise through the Three Gorges of the Yangtze River is a journey through the heart of China\'s natural beauty and cultural history. Starting from Yichang in Hubei province, this route offers travelers an unforgettable experience.\n\n## The Gorges\n\nThe Three Gorges span approximately 193 kilometers along the Yangtze River:\n\n### Qutang Gorge (瞿塘峡)\nThe shortest at just 8 kilometers, but the most dramatic. The towering cliffs create a natural gateway known as Kuimen (夔门), one of China\'s most photographed landscapes.\n\n### Wu Gorge (巫峡)\nAt 45 kilometers, this gorge is famous for its serene beauty and the legendary "Twelve Peaks of Wushan," each with its own folklore.\n\n### Xiling Gorge (西陵峡)\nThe longest at 76 kilometers, Xiling Gorge was historically the most dangerous for navigation. Today, the Three Gorges Dam has tamed its turbulent waters.\n\n## Three Gorges Dam\n\nNo cruise is complete without visiting the Three Gorges Dam, the world\'s largest hydroelectric power station. Located near Yichang, the dam is an engineering marvel that generates clean energy for millions.\n\n## Shore Excursions from Hubei\n\n- **Yichang**: Visit the dam and explore the city\'s riverside parks\n- **Shennong Stream**: Take a small boat trip through a tributary gorge\n- **Three Gorges Tribe**: Experience the culture of the Tujia ethnic minority\n\n## Best Seasons\n\n- **Spring (March-May)**: Mild temperatures, blooming flowers along the riverbanks\n- **Autumn (September-November)**: Clear skies, comfortable cruising weather\n- **Winter**: Fewer tourists, misty landscapes that look like traditional Chinese paintings\n\n> "The river is a scroll of jade; the mountains are hairpins of emerald." — Chinese poem describing the Yangtze',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    category: '景点',
    tags: ['Three Gorges', 'Yangtze River', 'Yichang', 'cruise', 'natural wonder'],
    author: 'HiHubei Travel Editor',
    publishDate: '2026-05-23T06:58:57.148Z',
    readTime: 7,
  },
  {
    id: 'sn-2026-05-23-fj6ivg',
    title: 'Shennongjia: Exploring Central China\'s Last Wilderness',
    summary: 'Venture into the mysterious forests of Shennongjia, a UNESCO World Heritage site known for its biodiversity, wild monkeys, and the legendary Yeren (Wild Man).',
    content: '# Shennongjia: Exploring Central China\'s Last Wilderness\n\nDeep in the mountains of western Hubei lies Shennongjia, one of China\'s most biodiverse regions and a UNESCO World Heritage site. This vast forested area is renowned for its untouched wilderness, rare wildlife, and mysterious legends.\n\n## Why Visit Shennongjia?\n\nShennongjia offers a rare opportunity to experience Central China\'s natural heritage in its purest form. The region boasts:\n\n- Over 3,000 plant species, including rare medicinal herbs\n- Golden snub-nosed monkeys, one of China\'s most endangered primates\n- The legendary "Yeren" (Wild Man), Shennongjia\'s answer to Bigfoot\n- Pristine hiking trails through ancient forests\n\n## Top Attractions\n\n### Shennong Peak (神农顶)\nThe highest point in Central China at 3,105 meters. On clear days, the panoramic views stretch for hundreds of kilometers.\n\n### Big Nine Lakes (大九湖)\nA series of nine alpine lakes surrounded by wetlands and meadows, often called "Hubei\'s Hulunbuir." The area is spectacular in spring when wildflowers bloom.\n\n### Shennong Altar (神农祭坛)\nA cultural site dedicated to Shennong, the legendary Chinese emperor who taught the art of agriculture and herbal medicine.\n\n## Hiking Tips\n\n- **Best season**: May to October\n- **Difficulty**: Moderate to challenging\n- **Must-bring**: Rain gear, warm layers, mosquito repellent\n- **Guide recommended**: The trails can be confusing without local knowledge\n\n## Getting There\n\n- **Bus**: Regular services from Yichang or Wuhan to Muyu Town (木鱼镇), Shennongjia\'s tourist hub\n- **Self-drive**: About 6 hours from Wuhan via the G42 expressway\n\n> Shennongjia remains one of China\'s best-kept travel secrets — a place where nature still reigns supreme.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: '景点',
    tags: ['Shennongjia', 'hiking', 'nature', 'wildlife', 'UNESCO'],
    author: 'HiHubei Travel Editor',
    publishDate: '2026-05-23T06:58:57.148Z',
    readTime: 6,
  },
  {
    id: 'en-2026-05-23-p9hbgm',
    title: 'Enshi Grand Canyon: Hubei\'s Answer to the American Southwest',
    summary: 'Discover the dramatic karst landscapes of Enshi Grand Canyon, home to towering cliffs, deep gorges, and the unique culture of the Tujia people.',
    content: '# Enshi Grand Canyon: Hubei\'s Answer to the American Southwest\n\nHidden in the southwestern corner of Hubei province, Enshi Grand Canyon (恩施大峡谷) offers some of the most dramatic karst scenery in China. With its vertigo-inducing cliff walks, ancient villages, and rich Tujia culture, it\'s a must-visit destination for adventurous travelers.\n\n## The Canyon Experience\n\nThe grand canyon stretches for 108 kilometers and features:\n\n- **Cloud Dragon River Rift (云龙地缝)**: A 3.6-kilometer-long fissure in the earth, with waterfalls cascading down moss-covered walls\n- **One-incense Stick (一炷香)**: A 150-meter-tall stone pillar that seems to defy gravity — Enshi\'s most iconic rock formation\n- **Cliff-side boardwalks**: Suspended hundreds of meters above the canyon floor, these walkways offer breathtaking views\n\n## Tujia Culture\n\nThe canyon is home to the Tujia ethnic minority, whose traditions add a rich cultural dimension to any visit:\n\n- **Tujia architecture**: Stilted wooden houses (吊脚楼) perched on hillsides\n- **Hand-waving dance (摆手舞)**: A traditional group dance performed during festivals\n- **Local cuisine**: Sour and spicy flavors, with specialties like Enshi tofu skin and cured pork\n\n## Practical Guide\n\n- **Location**: 60 km from Enshi city center\n- **Best time**: April to October\n- **Time needed**: Full day (6-8 hours)\n- **Difficulty**: Strenuous — bring comfortable walking shoes and plenty of water\n- **Entrance fee**: 270 RMB (includes scenic area and shuttle bus)\n\n## Getting to Enshi\n\n- **High-speed train**: From Wuhan to Enshi (about 4 hours)\n- **Flight**: Enshi Xujiaping Airport has connections to several major Chinese cities\n\n> Enshi Grand Canyon is the kind of place that makes you feel small in the best possible way.',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    category: '景点',
    tags: ['Enshi', 'Grand Canyon', 'Tujia culture', 'karst landscape', 'hiking'],
    author: 'HiHubei Travel Editor',
    publishDate: '2026-05-23T06:58:57.148Z',
    readTime: 6,
  },
  {
    id: 'hb-food-2026-05-23-uwdu0b',
    title: 'A Food Lover\'s Guide to Hubei: 10 Dishes You Must Try',
    summary: 'From Wuhan\'s bustling breakfast stalls to Enshi\'s rustic mountain kitchens, Hubei\'s culinary scene is a treasure trove of flavors waiting to be explored.',
    content: '# A Food Lover\'s Guide to Hubei: 10 Dishes You Must Try\n\nHubei province, known as the "Land of a Thousand Lakes," offers a culinary tradition that\'s as diverse as its landscape. Here are ten dishes you absolutely must try on your visit.\n\n## 1. Hot Dry Noodles (热干面)\nWuhan\'s signature dish. Alkaline noodles tossed with sesame paste, soy sauce, and chili oil. The ultimate Wuhan breakfast.\n\n## 2. Steamed Wuchang Fish (清蒸武昌鱼)\nWuchang bream from Liangzi Lake is steamed with ginger, scallions, and soy sauce. The flesh is incredibly tender and sweet.\n\n## 3. Mian Wo (面窝)\nDeep-fried rice and soybean flour rings — crispy outside, soft inside. A perfect breakfast companion to Hot Dry Noodles.\n\n## 4. Doupi (豆皮)\nA crispy mung bean and egg crepe wrapped around a savory filling of sticky rice, pork, and mushrooms.\n\n## 5. Wuhan Duck Neck (武汉鸭脖)\nSpicy, numbing, and addictive. Wuhan\'s marinated duck neck is the perfect beer snack.\n\n## 6. Steamed Pork with Rice Flour (粉蒸肉)\nTender pork belly coated in seasoned rice flour and steamed until melt-in-your-mouth tender.\n\n## 7. Lotus Root Soup (莲藕排骨汤)\nA hearty soup made with locally grown lotus root and pork ribs — Hubei comfort food at its finest.\n\n## 8. Enshi Doupi (恩施豆皮)\nUnlike Wuhan\'s Doupi, Enshi\'s version is a thin tofu skin that can be served cold as a salad or hot in soups.\n\n## 9. Sanxia Fish Hotpot (三峡鱼火锅)\nFresh Yangtze river fish cooked in a spicy broth with local herbs and vegetables.\n\n## 10. Suan Cao Yu (酸草鱼)\nA Tujia specialty from Enshi — fish pickled with rice and fermented, then fried with chilies and herbs.\n\n> Hubei\'s food philosophy: fresh ingredients, bold flavors, and a deep respect for culinary tradition.',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    category: '美食',
    tags: ['Hubei food', 'food guide', 'local cuisine', 'Wuhan food', 'street food'],
    author: 'HiHubei Travel Editor',
    publishDate: '2026-05-23T06:58:57.148Z',
    readTime: 6,
  },
  {
    id: 'yc-2026-05-23-c18j4f',
    title: 'Yichang Travel Guide: Where the Yangtze Meets the Mountains',
    summary: 'Plan your trip to Yichang, the gateway to the Three Gorges, with this comprehensive guide covering attractions, food, and travel tips.',
    content: '# Yichang Travel Guide: Where the Yangtze Meets the Mountains\n\nYichang, a charming city in western Hubei, is best known as the home of the Three Gorges Dam. But there\'s much more to this riverside city than its famous hydroelectric project.\n\n## Top Attractions\n\n### Three Gorges Dam (三峡大坝)\nThe world\'s largest hydroelectric dam is a must-visit. The best views are from Tanziling Hill, which offers a panoramic perspective of the entire structure.\n\n### Three Gorges Tribe (三峡人家)\nA living museum showcasing the traditional culture of the Tujia people who have lived along the Yangtze for centuries. Watch boat trackers demonstrate the traditional art of towpath pulling.\n\n### Qingjiang Gallery (清江画廊)\nA scenic boat ride on the Qingjiang River, often described as "a gallery of mountains and water." The emerald-green river winds through dramatic karst peaks.\n\n## Local Food\n\nYichang\'s cuisine focuses on freshwater fish:\n- **Yangtze River Fish (长江肥鱼)**: A local delicacy, best served steamed or in soup\n- **Yichang Liang Xia (凉虾)**: A refreshing summer dessert made from rice flour and brown sugar syrup\n\n## Getting Around\n\n- **High-speed rail**: 2 hours from Wuhan\n- **Airport**: Yichang Sanxia Airport serves domestic routes\n- **Ferry**: Regular ferries connect Yichang with cities along the Yangtze\n\n> Yichang is where the Yangtze River begins its most spectacular journey through the heart of China.',
    coverImage: 'https://images.unsplash.com/photo-1596178060810-0e6e3f3e3f3b?w=800&auto=format&fit=crop',
    category: '景点',
    tags: ['Yichang', 'Three Gorges Dam', 'travel guide', 'Yangtze River', 'Qingjiang'],
    author: 'HiHubei Travel Editor',
    publishDate: '2026-05-23T06:58:57.148Z',
    readTime: 6,
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
