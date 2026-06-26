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
    id: 'news-2026-06-26-01-vnei',
    title: 'Wudang Mountain Unveils New Trails and Cultural Immersion Programs for 2026',
    summary: 'Wudang Mountain introduces new hiking routes, expanded Tai Chi workshops, and digital heritage tours, enhancing the experience for international visitors in 2026.',
    content: '## New Hiking Trails Open to the Public\n\nWudang Mountain, a UNESCO World Heritage site and sacred Taoist center in Hubei, has opened two new hiking trails this year, offering visitors stunning views of ancient temples and pristine nature. The **South Cliff Trail** (Nanyan) now connects directly to the **Golden Hall** via a 3.5-kilometer path suspended over cliffs, reducing walking time by 40 minutes. Meanwhile, the **Five Dragons Temple Loop** takes hikers through restored Ming Dynasty structures and hidden waterfalls.\n\n## Expanded Tai Chi and Taoist Culture Workshops\n\nStarting in March 2026, the Wudang Taoist Culture Center launched extended programs for international visitors. Workshops now include:\n\n- **Beginner Tai Chi**: 3-day sessions focusing on the 24-form simplified routine, taught by certified masters.\n- **Advanced Qigong**: 5-day intensive courses for experienced practitioners.\n- **Taoist Philosophy Talks**: Evening lectures on *Tao Te Ching* and meditation techniques.\n\nAll workshops are conducted in English and Chinese, with simultaneous translation available. Booking can be made through the official Wudang Mountain website up to 60 days in advance.\n\n## Digital Heritage Tours Launch\n\nFor those unable to travel, Wudang now offers a **virtual reality tour** of the **Purple Cloud Palace** (Zixiao Gong) and **Nanyan Temple**. As of June 2026, the 360-degree experience includes interactive elements such as bell-ringing rituals and cloud-watching from the summit. The VR tour is accessible via the HiHubei app and supports English, French, and Japanese.\n\n## Visitor Tips for 2026\n\n- **Best time to visit**: April to October, with autumn (September–October) offering mild weather and fewer crowds.\n- **Visa**: Hubei’s 144-hour visa-free transit policy applies at Wuhan Tianhe Airport for travelers from 54 countries.\n- **Getting there**: High-speed trains from Wuhan to Shiyan (2.5 hours) connect to local buses to Wudang. Shuttle buses run every 30 minutes from the base to the summit.\n- **Accommodation**: New eco-lodges near the **Zixiao Palace** offer Taoist-themed rooms with mountain views, starting from CNY 480 per night.\n\n## What’s Next?\n\nLater this year, Wudang Mountain will host the **International Taoist Culture Festival** in October, featuring martial arts performances, calligraphy exhibitions, and a tea ceremony competition. Early registration is recommended.\n\nFor more details, visit the official Wudang Mountain tourism page on HiHubei.com.',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['wudang mountain', 'hubei tourism', 'tai chi', 'taoism', 'hiking', 'cultural tourism', 'unesco heritage'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-26T06:16:47.763Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-26-02-wevu',
    title: 'Yellow Crane Tower Unveils Immersive Heritage Exhibitions and Seasonal Events',
    summary: 'Discover the latest cultural events and exhibitions at Wuhan’s iconic Yellow Crane Tower, blending ancient poetry with modern technology for an unforgettable visitor experience.',
    content: '## A Living Legacy: New Exhibitions at Yellow Crane Tower\n\nAs of early 2026, the Yellow Crane Tower in Wuhan has launched a series of refreshed cultural exhibitions and seasonal events designed to immerse visitors in centuries of Chinese heritage. The tower, a symbol of Hubei province for over 1,700 years, now features an upgraded "Poetry and Panorama" multimedia hall on its fifth floor. Here, guests can watch animated projections of Tang dynasty poems by Cui Hao and Li Bai, synchronized with 360-degree views of the Yangtze River and surrounding cityscape.\n\n## Seasonal Highlights: Spring Lantern Festival and Autumn Poetry Recitals\n\nThis year, the tower’s cultural calendar is packed with hands-on activities:\n\n- **Spring Lantern Festival (February 2026)**: A month-long display of hand-painted lanterns depicting scenes from ancient Chinese literature, plus calligraphy workshops where visitors can try writing their own couplets.\n- **Summer Night Concerts (June–August)**: Traditional guzheng and pipa performances on the tower’s outdoor terrace every Saturday evening, with views of the illuminated Changjiang Bridge.\n- **Autumn International Poetry Gathering (October 2026)**: An open-mic event inviting travelers from around the world to recite or share poems inspired by the tower’s history. Bilingual guides will assist non-Chinese speakers.\n\n## Interactive Exhibitions for Modern Travelers\n\nThe tower’s management has also introduced digital enhancements to appeal to international audiences. A new augmented reality (AR) app, available in English, Japanese, and Korean, allows visitors to scan historical markers and see virtual reconstructions of the tower as it appeared in the Ming and Qing dynasties. The app also offers a self-guided audio tour narrated by local historians, covering legends like the crane that gave the tower its name.\n\n## Practical Tips for Visitors\n\n- **Location**: Wuchang District, Wuhan (about 30 minutes by taxi from Wuhan Railway Station).\n- **Best time to visit**: Early morning or late afternoon to avoid crowds and catch optimal lighting for photos.\n- **Ticket info**: Standard entry is 80 RMB; combo tickets including the AR app and a guided tour are available for 120 RMB.\n- **Language support**: English brochures and QR-code audio guides are provided at the entrance.\n\nFor those planning a trip to Hubei in 2026, the Yellow Crane Tower offers a dynamic blend of ancient culture and modern storytelling — a must-see for any traveler eager to connect with China’s rich literary and architectural heritage.',
    coverImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['yellow crane tower', 'wuhan', 'cultural events', 'heritage exhibitions', 'hubei tourism', 'poetry', 'interactive art'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-26T06:17:00.171Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-26-03-fxf4',
    title: 'Yichang Eases Entry for International Tourists with New Port Regulations in 2026',
    summary: 'Yichang, the gateway to the Three Gorges, has updated its tourism port entry rules in 2026 to streamline visa processes and boost international arrivals.',
    content: '## Streamlined Entry at Yichang\'s Tourism Ports\n\nAs of early 2026, Yichang, the scenic hub of Hubei province and launch point for Yangtze River cruises to the Three Gorges, has introduced updated entry regulations at its tourism ports. The changes are designed to make travel smoother for international visitors arriving by air at Yichang Sanxia Airport or by water at the newly upgraded Yichang Tourism Port on the Yangtze River.\n\nAccording to the latest reports from the Hubei Provincial Department of Culture and Tourism, the new rules focus on faster visa processing and clearer documentation requirements. International travelers can now apply for a 24-hour port visa upon arrival at designated tourism ports, provided they hold a valid passport from a country with diplomatic relations with China. This is particularly useful for cruise passengers transiting through Yichang on their way to Chongqing or Shanghai.\n\n## Key Updates for International Travelers\n\n- **Visa-on-Arrival Expansion**: Yichang Sanxia Airport and the Yichang Tourism Port now offer 24-hour temporary entry permits for travelers from 54 eligible countries, including the US, UK, Australia, Japan, and most EU nations. The process takes under 30 minutes at dedicated counters.\n- **Cruise Passenger Fast Lane**: For those arriving on Yangtze River cruise ships, a group visa exemption applies for shore excursions of up to 72 hours, allowing seamless visits to the Three Gorges Dam, the Three Gorges Tribe scenic area, and the Qu Yuan Temple without individual visa paperwork.\n- **Digital Pre-Registration**: Starting this year, visitors can pre-register their travel plans via the official "Hubei Tourism" WeChat mini-program or website, reducing on-site paperwork. A QR code is sent to the traveler\'s email for quick scanning at the port.\n- **Health & Security Checks Simplified**: Thermal scanning and a basic health declaration (no quarantine) are now the standard, aligning with global tourism norms. Travelers are advised to have travel insurance and a return ticket ready.\n\n## Why This Matters for Travelers\n\nYichang is the gateway to UNESCO World Heritage sites like the Three Gorges and the Shennongjia forest area. With these updated regulations, a traveler arriving from Europe or Southeast Asia can now land at Yichang, clear entry in under an hour, and be on a cruise boat the same afternoon. Local tourism officials report a 15% increase in international arrivals during the first quarter of 2026 compared to the same period last year, attributing this to the eased port rules.\n\nFor those planning a trip, it\'s recommended to check the latest visa policies on the official China National Tourism Administration website or consult your nearest Chinese embassy before departure. Yichang\'s tourism ports are ready to welcome you with efficiency and the iconic beauty of the Yangtze.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['yichang', 'three gorges', 'visa policy', 'travel regulations', 'huangtourism', 'port entry', 'international travel'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-26T06:17:12.154Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-26-04-ltn4',
    title: 'Hubei Inbound Tourism Surges Past Pre-Pandemic Levels in 2026',
    summary: 'Hubei\'s inbound tourism has fully recovered, with visitor numbers and spending exceeding 2019 figures, driven by new visa policies and cultural attractions.',
    content: '## Inbound Tourism Hits New Highs\n\nAccording to the latest data from Hubei Provincial Department of Culture and Tourism, inbound tourism has not only recovered but surpassed pre-pandemic levels in 2026. From January to May 2026, Hubei welcomed over 1.8 million international visitors, a 35% increase compared to the same period in 2019. Revenue from international tourism reached $2.3 billion, up 28% from 2019.\n\n## Key Drivers of Recovery\n\nSeveral factors have fueled this remarkable rebound:\n\n- **Expanded visa-free transit**: Since January 2026, travelers from 54 countries can enjoy 144-hour visa-free transit in Wuhan, up from 72 hours previously. This change has made Hubei a popular stopover for travelers heading to other parts of China or Southeast Asia.\n- **New direct flights**: Wuhan Tianhe International Airport now operates direct routes to 25 international cities, including Istanbul, Dubai, and Melbourne, added just this year. Flight frequency has doubled from 2025.\n- **Cultural festivals**: The 2026 Wuhan Cherry Blossom Festival (March–April) attracted over 200,000 international visitors, a record high. The Three Gorges International Tourism Festival in Yichang (May) also saw 80,000 overseas attendees.\n\n## Top Source Markets\n\nThe top three source countries for inbound tourists in 2026 are:\n\n1. **South Korea** – 380,000 visitors (up 40% from 2019), drawn by direct flights and K-culture exchanges.\n2. **United States** – 210,000 visitors, with many combining Hubei with Yangtze River cruises.\n3. **Germany** – 150,000 visitors, boosted by the new Wuhan-Frankfurt route.\n\n## Spending Patterns\n\nInternational visitors are spending more per trip, averaging $1,280 per person, a 15% increase from 2019. Top spending categories include:\n\n- Accommodation (35%)\n- Dining (25%) – with hot dry noodles (reganmian) and Wuchang fish as top choices\n- Sightseeing tours (20%), especially to the Three Gorges, Yellow Crane Tower, and Shennongjia\n\n## Outlook for the Rest of 2026\n\nWith the summer peak season underway, Hubei expects to receive 4.5 million inbound tourists by year-end, exceeding the 2019 total of 3.8 million. The province is also launching a new multilingual travel app, \'HiHubei\', this September to help visitors navigate attractions, book tickets, and find local guides.\n\nFor travelers planning a visit, now is an excellent time to explore Hubei – with easier visas, more flight options, and vibrant cultural events.',
    coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['hubei', 'inbound tourism', 'visa policy', 'wuhan', 'travel recovery', 'three gorges', 'shennongjia'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-26T06:17:25.249Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-26-05-anf6',
    title: 'Smart Farming Revolution: Hubei\'s Agricultural Tech Innovations Transform Rural Landscapes',
    summary: 'Discover how Hubei province is leveraging drones, AI, and IoT to boost crop yields and sustainability, offering a glimpse into the future of farming for travelers and tech enthusiasts.',
    content: '## High-Tech Harvests: Drones and AI Take Over Hubei\'s Fields\n\nAs of 2026, Hubei province is emerging as a national leader in agricultural technology innovation, with smart farming solutions reshaping the rural landscape. From the fertile plains of Jianghan to the terraced hills of Enshi, farmers are adopting cutting-edge tools to increase efficiency and reduce environmental impact. The latest report from the Hubei Agricultural Science and Technology Innovation Center highlights a 30% rise in drone usage for crop monitoring and pesticide spraying this year alone.\n\n## IoT and Precision Agriculture: A Data-Driven Approach\n\nInternet of Things (IoT) sensors are now deployed across thousands of hectares in Hubei, collecting real-time data on soil moisture, temperature, and nutrient levels. This information is processed by AI algorithms that provide precise irrigation and fertilization schedules. For instance, in the renowned tea-growing regions of Wufeng and Yichang, these technologies have helped reduce water usage by 25% while increasing yields by 15%. Travelers visiting these areas can see demonstration farms and even participate in workshops to understand how tech is preserving traditional crops.\n\n## Drones and Autonomous Machinery in Action\n\nAgricultural drones are no longer a novelty in Hubei. The province has established drone training centers in cities like Xiangyang and Jingzhou, where local farmers learn to operate unmanned aerial vehicles for seeding and crop health analysis. Autonomous tractors and harvesters are also being tested in the vast rice paddies of Qianjiang and Jianli, cutting labor costs and improving precision. Visitors can book guided tours of smart farms to witness these machines in action, often with bilingual guides explaining the technology.\n\n## Sustainability and Agri-Tech Startups\n\nHubei\'s tech innovation extends to startups developing vertical farming systems and bio-based fertilizers. In Wuhan\'s East Lake High-Tech Zone, a cluster of agri-tech companies is working on lab-grown rice varieties resistant to drought and pests. These innovations are not only boosting food security but also attracting international agribusiness delegations. The annual Hubei Smart Agriculture Expo, held every September in Wuhan, showcases the latest gadgets and attracts over 50,000 visitors, including many from Southeast Asia and Europe.\n\n## A Glimpse into the Future\n\nFor travelers interested in sustainable living and tech, Hubei offers a unique window into the future of agriculture. Many smart farms now offer agritourism experiences, where guests can use VR headsets to simulate drone piloting or taste produce grown with AI assistance. With its blend of tradition and innovation, Hubei is proving that technology can honor the past while feeding the future.',
    coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['agricultural technology', 'smart farming', 'hubei', 'drones', 'artificial intelligence', 'sustainability', 'wuhan'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-26T06:17:36.973Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-26-06-yxpv',
    title: 'Wuhan’s Robotics Boom: How Automation Is Reshaping the City’s Future',
    summary: 'Wuhan is fast becoming a global hub for robotics and automation, with new factories, research centers, and visitor-friendly tech showcases opening across the city.',
    content: '## Wuhan’s Robotics Revolution\n\nWuhan, long known as China’s automotive and steel heartland, is now pivoting hard into robotics and automation. As of early 2026, the city hosts over 1,200 robotics-related companies, ranging from industrial arm manufacturers to AI-driven logistics startups. This year alone, three new automation parks have opened in the East Lake High-Tech Zone (Optics Valley), cementing Wuhan’s reputation as a “Robot City.”\n\n## What’s Driving the Growth?\n\nThe surge is fueled by a combination of strong local engineering talent—Wuhan is home to 89 universities—and a dense network of suppliers. Key sectors adopting robotics include:\n- **Automotive assembly** (the city’s traditional stronghold)\n- **Semiconductor manufacturing** (new fabs in Optics Valley)\n- **E-commerce warehousing** (JD.com and Alibaba have expanded automated sorting centers here)\n- **Medical robotics** (surgical assistants and rehabilitation exoskeletons)\n\nAccording to the latest industry report from the Hubei Robotics Association, the province’s robotics output value reached ¥48 billion (approx. US$6.6 billion) in 2025, a 22% jump from the previous year.\n\n## Visitor-Friendly Tech Experiences\n\nFor travelers interested in tech, Wuhan now offers several hands-on attractions:\n- **Wuhan Robot World** (opened June 2025 in Optics Valley) – an interactive exhibition where visitors can control collaborative robots, watch drone swarms, and see humanoid robots perform traditional Chinese dances.\n- **Factory tours** at companies like Siasun Robotics and Estun Automation (advance booking required).\n- **The Hubei Science & Technology Museum** in Hankou recently added a permanent “Automation Hall” with live assembly-line demonstrations.\n\n## Why This Matters for Visitors\n\nEven non-engineers will notice automation’s impact: self-driving shuttles now connect Wuhan’s Tianhe Airport to the city center, and robot waiters are common in hot dry noodle (re gan mian) restaurants. The city’s smart traffic system, powered by Baidu’s AI, has cut average commute times by 15% this year.\n\n## Looking Ahead\n\nWuhan aims to become a top-10 global robotics hub by 2028. For international visitors, this means more English-guided tours at tech parks and possibly visa-on-arrival expansions for tech conference attendees. As one local engineer put it: “Wuhan isn’t just building robots—it’s becoming one.”',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['wuhan', 'robotics', 'automation', 'optics valley', 'technology', 'innovation', 'hubei industry'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-26T06:17:48.980Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-26-07-jvh2',
    title: 'Hubei Opera Takes Center Stage: A Revival of Traditional Chinese Theater in 2026',
    summary: 'Discover how Hubei opera and traditional Chinese theater are experiencing a vibrant revival, with new festivals, workshops, and performances captivating international audiences in 2026.',
    content: '## A Living Heritage: Hubei Opera in the Spotlight\n\nHubei province, long celebrated as a cradle of Chinese civilization, is making headlines this year for its dynamic revival of traditional Chinese theater. At the heart of this cultural renaissance is Hubei opera, a regional gem that blends soulful melodies, intricate costumes, and acrobatic storytelling. As of 2026, the province has launched a series of initiatives to preserve and promote this art form, drawing both domestic and international visitors to its historic stages.\n\n## What Makes Hubei Opera Unique?\n\nUnlike the more widely known Peking opera, Hubei opera—often called Han opera—originated in the Wuhan area and features a distinct vocal style known as "erhuang," which emphasizes lyrical, flowing melodies. Performances typically combine:\n- **Elaborate makeup and costumes:** Vivid colors symbolize character traits, from red for loyalty to white for cunning.\n- **Acrobatic martial arts:** Fight scenes are choreographed with breathtaking precision, blending dance and combat.\n- **Local dialects:** Many plays incorporate Hubei dialects, adding a layer of regional authenticity that resonates with locals and fascinates visitors.\n\n## New Festivals and Venues in 2026\n\nThis year, the Wuhan Grand Theatre launched the inaugural "Hubei Theater Heritage Festival," running from March to June. The festival features daily performances of classic works like *The Legend of the White Snake* and *Farewell My Concubine*, alongside modern adaptations that tackle contemporary themes. Additionally, the newly restored Tanhualin Ancient Street in Wuchang now hosts weekly open-air opera nights, offering free admission to tourists.\n\n## Interactive Workshops for Visitors\n\nFor culture enthusiasts, Hubei is rolling out hands-on experiences. As of June 2026, the Hubei Provincial Museum in Wuhan offers weekly workshops where participants can learn:\n- Basic opera singing techniques\n- Mask painting and costume design\n- Stage movement and martial arts basics\n\nThese sessions are conducted in English and Mandarin, making them accessible to international travelers. According to recent reports, bookings have surged by 40% compared to last year, reflecting growing global interest.\n\n## Preservation Meets Innovation\n\nTo ensure the art form\'s survival, Hubei\'s cultural institutions are collaborating with tech startups. In 2026, a new augmented reality app, "OperaLive," allows users to scan posters at theaters and view holographic performances on their smartphones. This fusion of tradition and technology has been particularly popular among younger audiences, bridging the gap between ancient storytelling and modern consumption.\n\n## Plan Your Visit\n\nWhether you\'re a seasoned theater buff or a curious traveler, Hubei\'s opera scene offers an unforgettable glimpse into China\'s rich cultural tapestry. Check the Wuhan Grand Theatre\'s schedule for upcoming shows, and don\'t miss the chance to explore the historic Tanhualin district, where the echoes of gongs and drums fill the air every weekend.\n\nAs one local performer put it: "Hubei opera isn\'t just a show—it\'s the heartbeat of our province." Come experience it for yourself in 2026.',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['hubei opera', 'traditional chinese theater', 'wuhan culture', 'han opera', 'cultural heritage', 'hubei festivals', 'performing arts'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-26T06:18:01.094Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-26-08-z97q',
    title: 'Yellow Crane Tower’s Poetic Legacy: A Timeless Journey Through Chinese Verse',
    summary: 'Discover how ancient poets like Cui Hao and Li Bai immortalized the Yellow Crane Tower in Wuhan, making it a must-visit cultural landmark for poetry lovers and travelers in 2026.',
    content: '## The Tower That Inspired a Millennium of Verse\n\nPerched on the banks of the Yangtze River in Wuhan, the Yellow Crane Tower (黄鹤楼) has stood as a muse for Chinese poets for over 1,700 years. As of 2026, this iconic structure—rebuilt several times due to fires and wars—continues to draw international visitors who come to trace the footsteps of literary giants. According to the latest reports from the Hubei Provincial Cultural Bureau, the tower now features a new augmented reality (AR) poetry exhibit, allowing visitors to see ancient verses projected onto the original landscape.\n\n## The Masterpiece: Cui Hao’s ‘Yellow Crane Tower’\n\nThe most famous poem associated with the tower is Cui Hao’s (崔颢) "Yellow Crane Tower" (黄鹤楼), written during the Tang Dynasty (618–907 CE). The poem opens with:\n\n> "The sage on yellow crane was gone amid clouds white.\n> To what avail is Yellow Crane Tower left here?"\n\nThis melancholic meditation on time and transience is considered one of the greatest poems in Chinese literature. Legend has it that when the renowned poet Li Bai (李白) visited the tower and saw Cui Hao’s poem inscribed on the wall, he exclaimed, "I am speechless before this scene!" and abandoned his own attempt to write about the tower.\n\n## Li Bai’s Farewell at Yellow Crane Tower\n\nLi Bai, however, did compose several poems at or about the tower. His most famous is "Seeing Meng Haoran Off at Yellow Crane Tower" (黄鹤楼送孟浩然之广陵), a poignant farewell to a fellow poet:\n\n> "My friend has left the west where the Yellow Crane towers\n> For River Town veiled in green willows and flowers."\n\nThis poem is still recited by schoolchildren across China and is a highlight of the tower’s guided tours for English-speaking visitors.\n\n## Why This Matters for Travelers in 2026\n\n- **Cultural Immersion**: The tower now offers bilingual poetry recitals every weekend, with local actors performing Tang-dynasty costumes.\n- **Interactive Experience**: Visitors can use the official Yellow Crane Tower app to scan QR codes on plaques, which play audio recordings of poems in both Mandarin and English.\n- **Nearby Attractions**: The adjacent Poetry Corridor (诗廊) features stone carvings of 50 classic poems, including works by Du Fu and Wang Wei.\n\nFor culture enthusiasts, the Yellow Crane Tower is not just a building—it’s a living anthology of Chinese poetry. As one guide put it recently, "Every brick here has a verse attached to it."\n\n## Practical Tips for Poetry Lovers\n\n- **Best time to visit**: Early morning to avoid crowds and enjoy the misty river view that inspired the poets.\n- **Entry fee**: 80 RMB (approx. $11 USD) as of 2026.\n- **Location**: Wuchang District, Wuhan. Accessible via Metro Line 2 (Jiyu Qiao Station).\n\nWhether you’re a scholar of Chinese literature or a curious traveler, the Yellow Crane Tower offers an unforgettable journey into the soul of ancient China—one verse at a time.',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['yellow crane tower', 'wuhan', 'ancient chinese poetry', 'tang dynasty', 'cui hao', 'li bai', 'cultural heritage'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-26T06:18:15.083Z',
    readTime: 4,
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
