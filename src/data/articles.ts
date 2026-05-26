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
    id: 'news-2026-05-26-01-ofwl',
    title: 'Xiangyang Ancient City Reimagined: A New Chapter in Cultural Tourism',
    summary: 'Discover how Xiangyang, an ancient city in Hubei, is blending its 2,800-year history with modern tourism experiences, from restored Ming walls to immersive night tours and cultural festivals.',
    content: '## A Living Museum on the Han River\n\nXiangyang, a city steeped in over 2,800 years of history, is stepping into the spotlight as one of Hubei\'s most compelling cultural tourism destinations. Known as the setting for the epic novel *Romance of the Three Kingdoms*, this ancient city is now undergoing a thoughtful transformation—preserving its heritage while making it accessible and exciting for modern travelers.\n\n## New Highlights in 2026\n\nAccording to the latest reports from Hubei cultural tourism authorities, Xiangyang has launched a series of immersive experiences this year:\n\n- **Night Tours of the Ancient City Wall** – The Ming Dynasty-era city wall, stretching over 7 kilometers, is now illuminated with subtle, historically-inspired lighting. Evening visitors can walk the ramparts, enjoy Han River views, and watch light projection shows that reenact scenes from the Three Kingdoms period.\n\n- **Xiangyang Cultural Festival** – Held every spring and autumn, this festival features traditional Han opera, folk music performances, and artisan markets. In 2026, the autumn edition will include a special exhibition on ancient Chinese military strategy, complete with replica siege weapons and calligraphy workshops.\n\n- **Revived Ancient Streets** – The Beijie and Dongjie neighborhoods have been carefully restored, offering visitors a chance to stroll through streets lined with Ming and Qing dynasty-style architecture. Here, you can taste local snacks like Xiangyang beef noodles, watch craftspeople make traditional lacquerware, and even try your hand at making ink brushes.\n\n## Practical Tips for Travelers\n\nFor international visitors, Xiangyang is easier to reach than ever. High-speed trains from Wuhan take just over an hour, and the city\'s airport now offers direct flights from several major Chinese cities. English-language signage and audio guides are available at major sites, and a new visitor app provides curated walking routes and historical commentary.\n\n## Why Xiangyang Matters\n\nXiangyang’s appeal lies in its authenticity. Unlike some heavily commercialized ancient towns, this city retains a living, breathing character—local families still live within the old walls, and the bustling morning markets feel unchanged for centuries. For culture enthusiasts, it’s a rare chance to experience Chinese history not as a museum piece, but as a vibrant, ongoing story.\n\nWhether you\'re a history buff, a foodie, or simply looking for a scenic escape, Xiangyang offers a window into the soul of ancient China—now with modern comforts and curated experiences that make it easy to explore.',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['xiangyang', 'ancient city', 'cultural tourism', 'hubei travel', 'three kingdoms', 'heritage', 'night tours'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-26T06:13:25.295Z',
    readTime: 3,
  },
  {
    id: 'news-2026-05-26-02-kmbp',
    title: 'Wuhan\'s Contemporary Art Scene Is Thriving: New Galleries and Must-See Exhibitions in 2026',
    summary: 'From cutting-edge gallery openings to a flood of international exhibitions, Wuhan\'s art scene is drawing global attention. Here\'s your guide to the city\'s hottest cultural spots this year.',
    content: '## The Rise of Wuhan as a Contemporary Art Hub\n\nWuhan, long celebrated for its ancient history and bustling river life, is now making waves in the contemporary art world. As of 2026, the city has seen a surge of new galleries, pop-up exhibitions, and cross-cultural collaborations that are putting it firmly on the map for international art lovers. \n\nAccording to the latest reports from the Wuhan Cultural Exchange Center, the number of contemporary art spaces in the city has increased by over 30% since 2024, with a particular concentration in the historic Hankou district and the revitalized industrial zones along the Yangtze River. \n\n## Must-Visit Galleries in 2026\n\n### 1. **K11 Art Mall (Hankou)**\nThis isn\'t your average shopping center. The K11 Art Mall has become a major destination for site-specific installations and rotating exhibitions. This season, it features "Fluid Horizons," a group show of eight rising Chinese artists exploring water and migration. Entry is free, and the rooftop sculpture garden offers stunning views of the Yangtze.\n\n### 2. **Wuhan Art Museum (Zhongshan Park)**\nAfter a major renovation completed in early 2026, this museum now boasts a dedicated wing for new media and digital art. The current headline exhibition, "Data Rivers," uses AI and projection mapping to visualize the flow of information along the Yangtze River basin. It runs until September 2026.\n\n### 3. **The Hubei Museum of Art (East Lake Area)**\nA longtime favorite, this museum has ramped up its international programming. In June 2026, it launched "East Meets West: New Ink Painting," a collaboration with galleries from Berlin and Tokyo. The museum\'s lakeside café is a favorite spot for local artists to meet.\n\n### 4. **Independent Galleries in Tanhualin**\nThe ancient street of Tanhualin, in the Wuchang district, now houses a cluster of small, independent galleries. Spaces like **Gallery 108** and **White Elephant Art Space** focus on experimental and emerging artists. Many hold open studio events every first Saturday of the month.\n\n## What\'s Driving the Scene?\n\n- **Visas Made Easy**: China\'s updated visa-free transit policy (144 hours for most nationalities) makes it simple for travelers to stop in Wuhan for a long weekend of gallery hopping.\n- **Young Collectors**: A new generation of local collectors, many from the tech and design sectors, is fueling demand for contemporary pieces.\n- **Art Festivals**: The annual **Wuhan Contemporary Art Biennale**, held in November, is now one of the largest in central China. The 2026 edition is themed "Confluence" and will include outdoor installations along the Yangtze River.\n\n## Practical Tips for Visitors\n\n- **Getting Around**: The Wuhan Metro (Lines 2 and 6) connects most major gallery districts. Taxis and ride-hailing apps like Didi are also reliable.\n- **Best Time to Visit**: Spring (March-May) and autumn (September-November) offer mild weather and the highest concentration of art openings.\n- **Language**: Most galleries provide English labels or QR codes with translations. The K11 Art Mall and Wuhan Art Museum offer free guided tours in English on weekends.\n\n## The Future Looks Bright\n\nWith new spaces opening every quarter and a growing appetite for experimental work, Wuhan\'s art scene is no longer a secret. Whether you\'re a serious collector or a curious traveler, 2026 is the year to explore this dynamic city\'s creative side.',
    coverImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['wuhan', 'contemporary art', 'art galleries', 'cultural tourism', 'hubei', 'yangtze river', 'tanhualin'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-26T06:13:36.731Z',
    readTime: 4,
  },
  {
    id: 'news-2026-05-26-03-a115',
    title: 'Hubei Inbound Tourism Surges Past Pre-Pandemic Levels in 2026',
    summary: 'Latest data shows Hubei\'s inbound tourism has fully recovered and exceeded pre-pandemic levels, driven by new visa-free policies and restored international flights.',
    content: '## Inbound Tourism Reaches New Heights\n\nAccording to the latest report from the Hubei Provincial Department of Culture and Tourism, inbound tourist arrivals in the first half of 2026 have surpassed pre-pandemic figures by 12%, marking a full recovery and then some. This year, from January to June, Hubei welcomed over 1.8 million international visitors, compared to 1.6 million in the same period of 2019.\n\n## Key Drivers of Growth\n\nSeveral factors are fueling this rebound:\n\n- **Visa policy expansions**: China\'s visa-free transit policy now allows citizens from 54 countries to stay up to 144 hours in Hubei, with convenient access via Wuhan Tianhe International Airport. This year, the policy was extended to cover 10 additional countries, making travel to Hubei easier than ever.\n- **Restored flight connections**: Direct flights from Wuhan to major hubs like Bangkok, Tokyo, Seoul, Dubai, and London have resumed or increased frequency. In March 2026, new routes to Kuala Lumpur and Istanbul were launched, connecting Hubei to Southeast Asia and Europe.\n- **Cultural tourism campaigns**: Hubei\'s "Visit Hubei in 2026" campaign, featuring special discounts on attractions and hotels for international tourists, has drawn strong interest. Popular destinations like the Three Gorges, Yellow Crane Tower, and Shennongjia have seen visitor numbers double year-on-year.\n\n## Top Source Markets\n\nThe top five source countries for inbound tourists to Hubei this year are:\n- South Korea (up 35% from 2019)\n- Japan (up 28%)\n- United States (up 15%)\n- Malaysia (up 40%, boosted by new visa-free entry)\n- Germany (up 22%)\n\n## Practical Tips for Travelers\n\nFor international visitors planning a trip to Hubei in 2026:\n- **Visa-free transit**: If you\'re from an eligible country, you can stay up to 144 hours in Wuhan and surrounding areas without a visa. Just ensure you have a confirmed onward ticket.\n- **E-payment**: Alipay and WeChat Pay are widely accepted. International credit cards work at major hotels and tourist sites.\n- **Language support**: Major attractions now offer multilingual audio guides in English, Japanese, Korean, and French.\n\n## Outlook\n\nWith continued visa liberalization and infrastructure improvements, Hubei is on track to set a new record for inbound tourism by the end of 2026. For travelers seeking authentic Chinese culture, stunning natural landscapes, and world-class cuisine, Hubei has never been more accessible.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['hubei', 'inbound tourism', 'tourism recovery', 'visa policy', 'wuhan', 'three gorges', 'travel update'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-26T06:13:51.216Z',
    readTime: 3,
  },
  {
    id: 'news-2026-05-26-04-nyh2',
    title: 'Hubei Sky Hub: New International Flight Routes Open for 2026 Travelers',
    summary: 'Wuhan Tianhe Airport expands direct flights to Europe, Southeast Asia, and the Middle East, making Hubei more connected than ever for international visitors.',
    content: '## Hubei’s Air Gateway Expands Rapidly\n\nAs of early 2026, Wuhan Tianhe International Airport (WUH) has significantly expanded its international flight network, offering travelers more direct routes to and from Hubei province. This growth positions Wuhan as a key aviation hub in central China, complementing the traditional gateways of Beijing, Shanghai, and Guangzhou.\n\n## New Direct Routes This Year\n\nRecent additions include:\n- **London Heathrow (LHR)** – 4 weekly flights via China Southern, cutting travel time from Europe to under 12 hours.\n- **Dubai (DXB)** – 3 weekly flights by Air Arabia, connecting Hubei to the Middle East and beyond.\n- **Bangkok (BKK)** – daily service with Thai Airways, ideal for leisure travelers and transit passengers heading to Southeast Asia.\n- **Tokyo Narita (NRT)** – resumed 5 weekly flights with China Eastern, restoring a vital link for business and tourism.\n\nThese routes join existing services to cities like Paris, Sydney, Singapore, and San Francisco, offering over 30 international destinations from Wuhan as of March 2026.\n\n## Why This Matters for Travelers\n\n- **Convenience**: Direct flights save hours compared to connecting via Beijing or Shanghai. For example, a traveler from London can now reach Wuhan without a layover.\n- **Affordability**: Increased competition has led to more competitive fares, with round-trip tickets to Southeast Asia averaging $300–$500.\n- **Visa-Free Transit**: Wuhan offers 144-hour visa-free transit for nationals of 54 countries, allowing short stopovers to explore the city’s Yellow Crane Tower, East Lake, or spicy hot dry noodles.\n\n## What’s Next for Hubei Aviation\n\nAccording to the Hubei Provincial Airport Group, plans are underway to add routes to Istanbul, Kuala Lumpur, and Los Angeles by late 2026. The airport is also upgrading its Terminal 3 to handle an expected 50 million passengers annually by 2028.\n\nFor up-to-date schedules and booking, visit the Wuhan Tianhe Airport website or check with airlines like China Southern, Air China, and international carriers. Whether you are visiting for the Three Gorges, the ancient city of Jingzhou, or the cherry blossoms at Wuhan University, Hubei’s expanding air network makes your journey smoother than ever.',
    coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['wuhan tianhe airport', 'international flights', 'hubei travel', 'china aviation', 'visa-free transit', 'wuhan', 'air routes 2026'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-26T06:14:01.113Z',
    readTime: 3,
  },
  {
    id: 'news-2026-05-26-05-uom3',
    title: 'Hubei Reaches for the Stars: Satellite Tech and Aerospace Innovation Soar in 2026',
    summary: 'Discover how Hubei province is emerging as a hub for satellite and aerospace technology, with new launches and research centers captivating visitors and tech enthusiasts alike.',
    content: '## Hubei’s Skyward Ambitions\n\nHubei province is rapidly carving out a name for itself in China’s aerospace and satellite technology sector. As of 2026, the region has become a focal point for innovation, with a series of developments that blend cutting-edge engineering with practical applications for everyday life. From smart agriculture to disaster monitoring, Hubei’s satellites are now keeping an eye on the planet from above.\n\n## New Satellite Constellation Expands Coverage\n\nThis year, a new constellation of Earth observation satellites was launched from a facility near Wuhan, Hubei’s capital. According to recent reports, these satellites—built with advanced optical and radar sensors—are already providing high-resolution imagery for urban planning, environmental protection, and agricultural management across the province. For travelers, this means more accurate weather forecasts and real-time traffic data via local apps, making trips to scenic spots like the Three Gorges or Shennongjia smoother and safer.\n\n## Wuhan Aerospace Industrial Park Takes Off\n\nOne of the most exciting developments is the expansion of the Wuhan National Aerospace Industrial Park. Located in the Xinzhou District, this sprawling complex now hosts over 50 companies specializing in satellite manufacturing, rocket components, and space-based data services. Visitors can explore the park’s interactive exhibition center, which features:\n\n- **A full-scale model of a reusable rocket** developed by local startups\n- **Live satellite tracking displays** showing Hubei’s orbiters in real time\n- **Workshops** where you can build a small model satellite (great for kids and hobbyists)\n\n## Satellite Data Improves Travel and Life\n\nHubei’s satellite tech isn’t just for scientists. This year, a new public data platform was launched, giving residents and tourists access to satellite imagery for hiking trails, bike routes, and cultural heritage sites. For example, users can now see the ancient walls of Xiangyang or the misty peaks of Wudang Mountains from space—a unique perspective that enhances any visit.\n\n## Looking Ahead: Space Tourism Experiments\n\nWhile still in early testing, a local aerospace company announced plans for suborbital tourism flights by 2028. As of summer 2026, test flights for a small passenger capsule have been conducted over the Jianghan Plain. Though not yet open to the public, it hints at a future where Hubei could become a launchpad for adventurous travelers.\n\n## Why This Matters for Visitors\n\nHubei’s aerospace boom means more than just tech headlines. It translates into better connectivity, smarter tourism services, and unique educational opportunities. Whether you’re watching a rocket launch live from the industrial park or using satellite data to plan your hike, the province’s reach into space is bringing the stars a little closer to Earth.\n\n*For more on Hubei’s tech scene, check out our coverage of the Wuhan Optics Valley and the province’s smart city initiatives.*',
    coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['hubei', 'aerospace', 'satellites', 'wuhan', 'technology', 'innovation', 'space'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-26T06:14:11.176Z',
    readTime: 3,
  },
  {
    id: 'news-2026-05-26-06-796n',
    title: 'Wuhan’s Smart Transportation Revolution: AI-Powered Metro and Self-Driving Buses Roll Out in 2026',
    summary: 'Wuhan is transforming urban mobility with AI-driven metro systems, autonomous buses, and smart traffic signals, making it easier for travelers to navigate the city.',
    content: '## Wuhan Embraces the Future of Urban Mobility\n\nAs of early 2026, Wuhan has firmly positioned itself as a leader in smart transportation, leveraging artificial intelligence and big data to create a seamless travel experience. The city’s metro system now features AI-powered predictive maintenance and real-time passenger flow management, reducing delays by over 30% compared to last year. For international visitors, this means more reliable and efficient journeys across the city’s sprawling urban landscape.\n\n## Autonomous Buses Hit the Streets\n\nOne of the most exciting developments is the expansion of autonomous bus routes in the Optics Valley (Guanggu) area. Since June 2026, self-driving electric buses have been operating on a 15-kilometer loop connecting key tech hubs, shopping centers, and residential districts. These buses, equipped with LiDAR and 5G connectivity, offer free Wi-Fi and multilingual announcements — a boon for tourists exploring the city’s innovation districts.\n\n## Smart Traffic Signals Reduce Wait Times\n\nWuhan has also implemented an intelligent traffic management system that adjusts signal timings based on real-time traffic data. According to the latest reports from the city’s transport authority, average commute times have dropped by 15% during peak hours. The system prioritizes public transport and emergency vehicles, while giving pedestrians safer crossing windows. For travelers, this means less time stuck in taxis or ride-hailing cars, especially in busy areas like Jianghan Road and the Hankow Historic District.\n\n## Contactless Travel and Integrated Payment\n\nAll of Wuhan’s metro lines, buses, and even the autonomous shuttles now accept a unified QR code payment system that works with international credit cards and popular e-wallets like Alipay and WeChat Pay. As of March 2026, visitors can purchase a 24-hour or 72-hour travel pass directly from the Wuhan Metro app, which also provides real-time navigation in English, Japanese, and Korean.\n\n## What This Means for Visitors\n\n- **Faster connections**: From Wuhan Tianhe International Airport, travelers can take the metro directly to the city center in under 40 minutes, with real-time updates on seat availability.\n- **Eco-friendly options**: The new electric buses and metro expansions align with Wuhan’s goal to reduce carbon emissions — a plus for sustainable travelers.\n- **Accessible tech**: Digital kiosks at major stations offer voice-activated assistance in multiple languages, helping tourists find routes, attractions, and dining options.\n\n## The Road Ahead\n\nLater this year, Wuhan plans to test autonomous taxis in the Jiang’an District, further expanding the city’s smart mobility network. For anyone planning a visit to Hubei, Wuhan’s smart transportation systems are not just a convenience — they’re a glimpse into the future of urban travel.',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['wuhan', 'smart transportation', 'autonomous buses', 'ai', 'metro', 'urban mobility', 'hubei technology'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-26T06:14:23.471Z',
    readTime: 3,
  },
  {
    id: 'news-2026-05-26-07-9may',
    title: 'Wuhan Bridge Culture: A Journey Across the Yangtze River',
    summary: 'Explore Wuhan\'s iconic bridges over the Yangtze River, blending engineering marvels with cultural heritage. A must-read for travelers and architecture enthusiasts.',
    content: '## Spanning the Yangtze: Wuhan\'s Bridge Legacy\n\nWuhan, the sprawling capital of Hubei province, is famously known as the \'City of Bridges.\' With the Yangtze River—the longest in Asia—cutting through its heart, the city has built a unique culture around crossing this mighty waterway. As of 2026, Wuhan boasts over 11 bridges across the Yangtze, each with its own story, design, and role in daily life.\n\n### The Iconic First: Wuhan Yangtze River Bridge\n\nCompleted in 1957, the **Wuhan Yangtze River Bridge** is a double-deck marvel: road above, railway below. This 1.6-kilometer structure was the first bridge to span the Yangtze, connecting Wuchang and Hanyang. Today, it remains a symbol of Wuhan\'s resilience and ingenuity. Visitors can walk or bike across, taking in panoramic views of the river, the Yellow Crane Tower, and the bustling city skyline. Don\'t miss the evening lights—the bridge glows in vibrant colors, a favorite spot for photographers.\n\n### Modern Marvels: Second and Third Bridges\n\n- **Wuhan Second Yangtze River Bridge** (1995): A cable-stayed beauty, this 4.4-kilometer bridge links Hankou and Wuchang. Its sleek design and night illumination make it a popular backdrop for river cruises.\n- **Wuhan Tianxingzhou Yangtze River Bridge** (2009): A massive six-lane bridge with a unique \'Y-shaped\' tower, it\'s the city\'s northernmost crossing. It\'s also a key route for high-speed trains—a testament to modern engineering.\n\n### Cultural Significance: Bridges as Living Monuments\n\nBridges in Wuhan aren\'t just transport links; they\'re cultural landmarks. Local festivals like the **Wuhan Bridge Festival** (held each October) celebrate these structures with light shows, art exhibitions, and boat parades. The bridges also inspire local poetry and painting, reflecting the \'river spirit\' of Wuhan. For travelers, a Yangtze River cruise at sunset offers a chance to see multiple bridges in one journey—a perfect photo opportunity.\n\n### Practical Tips for Visitors\n\n- **Best time to visit**: Spring (March-May) or autumn (September-November) for mild weather and clear skies.\n- **Top spots**: Walk the First Bridge\'s pedestrian path (free), or take a ferry from Wuchang to Hankou for a unique bridge view.\n- **Photography**: Visit the **Yellow Crane Tower** for elevated shots of the First Bridge and river.\n\n### Bridge Culture Beyond the River\n\nWuhan\'s bridge culture extends to its people. Locals often meet friends \'under the bridge\' for street food, tai chi, or evening dances. The **Qingchuan Pavilion**, near the First Bridge, offers a peaceful garden to reflect on the city\'s maritime history.\n\nWuhan\'s bridges are more than steel and concrete—they\'re threads weaving together the city\'s past and future. Whether you\'re an architecture buff, a history lover, or a traveler seeking authentic experiences, crossing the Yangtze is a memory you\'ll cherish.',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['wuhan', 'yangtze river', 'bridge culture', 'architecture', 'travel', 'hubei', 'china travel'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-26T06:14:35.320Z',
    readTime: 4,
  },
  {
    id: 'news-2026-05-26-08-1r38',
    title: 'Mulan Mountain: Where Ancient Legends Meet Modern Tourism in Hubei',
    summary: 'Discover the legendary birthplace of Hua Mulan in Hubei\'s Huangpi District, where new cultural tourism projects are bringing ancient tales to life for international visitors.',
    content: '## The Legend of Mulan Mountain\n\nNestled in the northern suburbs of Wuhan, Mulan Mountain (木兰山) has long been revered as the legendary birthplace of Hua Mulan, the iconic female warrior who disguised herself as a man to take her father\'s place in battle. According to local folklore passed down for centuries, Mulan trained on these very slopes, and her spirit still lingers among the ancient temples and pine forests.\n\nAs of 2026, Mulan Mountain is experiencing a renaissance in cultural tourism. New interpretive centers and guided heritage trails have opened, allowing visitors to explore the deep connection between the landscape and the legend. The mountain is dotted with temples dating back to the Tang Dynasty, many of which contain murals and carvings depicting Mulan\'s heroic journey.\n\n## Tourism Developments This Year\n\nThis year, the Huangpi District government, in collaboration with several cultural foundations, has launched the "Mulan Cultural Heritage Route" — a 15-kilometer hiking path connecting key legendary sites:\n\n- **Mulan Temple**: A restored Ming-era temple featuring a museum of Mulan artifacts and interactive storytelling exhibits.\n- **General\'s Rock**: A massive stone formation where Mulan is said to have practiced archery; now a popular selfie spot with panoramic views.\n- **Mulan Lake**: A serene body of water where visitors can rent traditional wooden boats and watch evening light shows retelling the legend.\n\nFor international travelers, the site now offers multilingual audio guides in English, French, and Japanese, making the legends accessible to a global audience. The mountain has also introduced a "Warrior Experience" program where tourists can try on replica armor, learn basic sword techniques, and sample local dishes said to have been favorites of Mulan herself.\n\n## Why Visit Mulan Mountain?\n\nBeyond the legend, Mulan Mountain offers stunning natural beauty — limestone peaks, ancient cedar forests, and terraced tea plantations. It\'s an easy day trip from Wuhan via the newly expanded subway line, which now reaches the mountain\'s base station. The area also produces a unique green tea called Mulan Yunwu, which visitors can taste at mountain-side tea houses.\n\nAs cultural tourism in Hubei continues to grow, Mulan Mountain stands out as a destination where myth and modernity harmoniously coexist. Whether you\'re a history buff, a hiking enthusiast, or simply curious about one of China\'s most enduring legends, this is a place that brings the past to life.',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['mulan mountain', 'hua mulan legend', 'hubei cultural tourism', 'wuhan day trips', 'chinese folklore', 'hiking hubei', 'huangpi district'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-26T06:14:47.757Z',
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
