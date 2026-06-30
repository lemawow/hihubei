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
    id: 'news-2026-06-30-01-ebhm',
    title: 'Jingzhou Chu Culture Museum Unveils Ancient Marvels with New Archaeological Finds',
    summary: 'Discover the latest archaeological treasures from Jingzhou\'s Chu Culture Museum, featuring rare lacquerware and bronze artifacts that illuminate the ancient state of Chu.',
    content: '## A Window into the Chu Kingdom\n\nNestled in the heart of Hubei province, the Jingzhou Chu Culture Museum has become a must-visit destination for history buffs and cultural travelers. As of 2026, the museum has expanded its exhibits with a stunning array of artifacts unearthed from recent excavations in the Jingzhou region, offering an immersive journey into the ancient State of Chu (c. 1030–223 BCE).\n\n## New Discoveries: Lacquerware and Bronze Masterpieces\n\nAccording to the latest reports, archaeologists have uncovered over 200 new items this year from tombs near the historic city of Ying (modern-day Jingzhou). Highlights include:\n- **Exquisite lacquerware**: Intricately painted wooden cups and cosmetic boxes, showcasing the Chu people\'s advanced craftsmanship and vibrant use of red and black pigments.\n- **Bronze ritual vessels**: A rare set of ding tripods and bells, inscribed with characters that shed light on Chu\'s political alliances and religious practices.\n- **Silk textiles**: Fragments of embroidered silk, some of the earliest known examples in China, revealing sophisticated weaving techniques.\n\nThese finds are now on permanent display in the museum\'s newly renovated "Chu Treasures Hall," which opened its doors in June 2026.\n\n## Why This Matters for Travelers\n\nFor international visitors, the Jingzhou Chu Culture Museum offers a unique glimpse into a civilization that rivaled the Qin and Han dynasties in cultural output. The museum\'s interactive exhibits include:\n- **3D reconstructions** of Chu palace life, using VR headsets (available in English).\n- **Hands-on workshops** where you can try your hand at replicating lacquerware patterns (booking required).\n- **Guided tours** in English every Tuesday and Thursday at 10 AM.\n\n## Plan Your Visit\n\nLocated just a 30-minute drive from Jingzhou\'s city center, the museum is easily accessible via taxi or bus route 12. Admission is 60 RMB (approx. $8 USD), with discounts for students and seniors. The museum is open daily from 9 AM to 5 PM except Mondays.\n\n## Beyond the Museum\n\nJingzhou itself is a treasure trove of Chu culture. After your museum visit, explore the ancient city walls (dating back to the Three Kingdoms period) and savor local specialties like Jingzhou fish cake and lotus root soup.\n\nStay tuned to HiHubei.com for more updates on Hubei\'s cultural gems!',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['jingzhou', 'chu culture museum', 'archaeology', 'hubei travel', 'ancient china', 'lacquerware', 'cultural tourism'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-30T06:18:43.815Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-30-02-kcop',
    title: 'Hubei Folk Music & Traditional Performing Arts Festivals Hit New High in 2026',
    summary: 'Hubei\'s vibrant folk music and performing arts festivals are drawing global audiences in 2026, with events showcasing ancient chu music, shadow puppetry, and folk opera across the province.',
    content: '## Echoes of Ancient Chu Resound Across Hubei\n\nHubei province has become a magnet for culture enthusiasts in 2026, thanks to a surge in festivals dedicated to folk music and traditional performing arts. According to the latest reports from local cultural tourism boards, this year\'s festival season is the most ambitious yet, with events running from March through November across cities like Wuhan, Yichang, and Xiangyang.\n\nAt the heart of the celebration is the **Wuhan Chu Music Festival**, held annually at the Yellow Crane Tower Park. This year\'s edition, which concluded in April, featured over 200 musicians performing on replicas of ancient bronze bells and zithers inspired by the Marquis Yi of Zeng artifacts. Visitors from Japan, France, and the United States were seen recording the ethereal melodies on their smartphones.\n\n## Spotlight on Shadow Puppetry and Folk Opera\n\nA major highlight this summer is the **Hubei International Shadow Puppetry Week** in Yichang (June 15–22). Master puppeteers from 12 countries, including Thailand and Italy, are collaborating with local troupes to tell stories using intricate leather puppets. Workshops allow visitors to craft their own puppets and learn basic manipulation techniques.\n\nMeanwhile, the **Xiangyang Folk Opera Festival** (August 1–10) is bringing Hanju opera to outdoor stages in ancient city plazas. This year\'s program includes a special \'Fusion Night\' where folk opera singers perform alongside Chinese rock bands, bridging tradition with contemporary sounds.\n\n## Immersive Experiences for International Visitors\n\nFor travelers seeking hands-on cultural immersion, several festivals now offer **nighttime folk music boat tours** along the Yangtze River in Wuhan. These 90-minute cruises feature live performances of fisherman\'s folk songs and bamboo flute melodies under the stars. Tickets are available through the HiHubei app, with English commentary provided.\n\nIn Enshi Prefecture, the **Tujia Folk Arts Carnival** (July 20–25) showcases the unique music of the Tujia ethnic minority. Highlights include the \'Drum of a Thousand Mountains\' performance, where 500 drummers play in synchronized patterns, and the Baishou dance, a UNESCO-recognized intangible cultural heritage.\n\n## Modern Twists and Digital Access\n\nRecognizing the global audience, many festivals are now live-streamed on international platforms. The **Chutian Folk Music Gala** in Wuhan (October 1–3) will be broadcast on YouTube and Twitch, with English subtitles for all vocal pieces. This year, a digital archive of over 300 folk songs has been launched, accessible via QR codes placed at scenic spots across the province.\n\n## Practical Tips for Festival-Goers\n\n- **Visa Policy**: As of 2026, citizens from 54 countries can enjoy a 144-hour visa-free transit in Wuhan. Check the latest updates on HiHubei.com.\n- **Best Time**: For folk music festivals, plan between April and October. Spring and autumn offer mild weather.\n- **Transportation**: High-speed trains connect all major festival cities. Use the \'Hubei Culture Pass\' for discounts on combined event tickets.\n\nWhether you\'re a seasoned ethnomusicologist or a curious traveler, Hubei\'s folk music and performing arts festivals in 2026 offer an unforgettable journey into the soul of central China.',
    coverImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['hubei folk music', 'chinese traditional performing arts', 'wuhan chu music festival', 'xiangyang folk opera', 'hubei cultural festivals', 'chu culture', 'tujia folk arts'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-30T06:18:53.290Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-30-03-s30u',
    title: 'New Streamlined Visa Process Makes Visiting Hubei Easier Than Ever in 2026',
    summary: 'China has introduced a simplified visa application process for travelers heading to Hubei, with online forms, faster approvals, and a new 144-hour transit policy in Wuhan.',
    content: '## Simplified Application Steps for Hubei-Bound Travelers\n\nAs of 2026, applying for a China travel visa to visit Hubei province has become significantly smoother. The Chinese Visa Application Service Center (CVASC) now offers a fully online application portal, reducing paperwork and processing time. Travelers can complete the form, upload required documents (passport copy, recent photo, itinerary), and book an appointment at their nearest center—all within 30 minutes.\n\n## Faster Processing and New Transit Policy\n\nStandard tourist visa (L-visa) processing now takes just 4 working days, down from 7 last year. For those planning a short stopover, Wuhan Tianhe International Airport has joined the 144-hour visa-free transit program. International travelers from 54 eligible countries can now explore Wuhan and surrounding areas—including the Yellow Crane Tower, East Lake, and the Hubei Provincial Museum—for up to six days without a prior visa.\n\n## Tips for a Successful Application\n\n- **Prepare key documents**: Valid passport (6+ months validity), proof of accommodation in Hubei (hotel booking or invitation letter), round-trip flight itinerary, and a completed visa form.\n- **Submit at the right center**: Choose the CVASC that covers your region. Many centers now offer walk-in appointments during peak travel seasons.\n- **Check the latest fees**: As of early 2026, a single-entry L-visa costs approximately $140 (USD), with a $25 express service option for 2-day processing.\n- **For group tours**: Travel agencies registered with Hubei\'s tourism bureau can handle the entire visa process for groups of 5 or more, including a simplified invitation letter.\n\n## Why This Matters for Travelers\n\nHubei is experiencing a tourism boom in 2026, with new direct flights from Europe, Southeast Asia, and North America to Wuhan. The streamlined visa process means less time worrying about paperwork and more time enjoying the province\'s rich culture—from the Three Gorges to Jingzhou\'s ancient city walls. According to the latest reports, visa approval rates for Hubei-bound applicants have reached 95%, making it one of the most accessible regions in China for international visitors.\n\n## Plan Your Trip Now\n\nWhether you\'re a history buff eager to see the Zeng Hou Yi bells or a nature lover heading to Shennongjia, the new visa rules make your journey simpler. Check the official CVASC website for your country\'s specific requirements, and consider applying at least 3 weeks before your travel date to secure the best options.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['hubei', 'wuhan', 'china visa', 'travel regulations', 'visa policy', 'tourism', 'entry updates'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-30T06:19:05.523Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-30-04-vfgh',
    title: 'Yichang Tourism Port Updates Entry Rules for International Travelers in 2026',
    summary: 'Yichang’s Three Gorges Airport and cruise terminals introduce streamlined visa and customs procedures for foreign tourists, making visits to the Three Gorges and Hubei easier.',
    content: '## Smoother Arrivals at Yichang’s Tourism Ports\n\nInternational travelers heading to the Three Gorges region this year will find a more efficient entry process at Yichang’s main tourism ports. As of early 2026, Yichang Sanxia (Three Gorges) Airport and the downtown Maoping Cruise Terminal have implemented updated entry regulations designed to speed up customs clearance and visa processing for foreign visitors.\n\n## Key Changes for Travelers\n\n- **24-Hour Transit Visa Waiver**: Eligible nationals transiting through Yichang to a third country can now enjoy a 24-hour visa-free stay within the city. This is ideal for cruise passengers with a layover before continuing to Shanghai or Chongqing.\n- **Port Visa on Arrival**: Yichang’s airport and cruise port now offer on-arrival visas for tourists from 54 countries, including the US, UK, Australia, and most EU nations. Travelers must show a confirmed hotel booking and a return or onward ticket. Processing takes about 30 minutes.\n- **Simplified Customs Declaration**: New e-gates at the airport allow passengers to submit digital customs forms via QR code before landing, reducing wait times by an estimated 40%.\n\n## What This Means for Tourists\n\nYichang serves as the gateway to the Three Gorges Dam and the scenic Yangtze River cruise route. The updated regulations are particularly beneficial for:\n\n- **Cruise passengers** who disembark in Yichang and wish to explore the city or connect to other destinations\n- **Short-stay visitors** wanting to see the dam, Xiling Gorge, or the nearby Shennongjia forest area\n- **Business travelers** attending trade fairs or cultural exchanges in Hubei\n\n## Practical Tips for Visitors\n\n- Apply for a port visa at least 48 hours in advance through your travel agency or hotel for guaranteed processing.\n- Keep your passport valid for at least six months beyond your planned departure date.\n- Use the “Yichang Easy Pass” mini-program (available on WeChat) to pre-register customs and health declaration forms.\n\nAccording to the Yichang Municipal Bureau of Culture and Tourism, these measures have already boosted international arrivals by 25% in the first quarter of 2026 compared to the same period last year. For the latest updates, travelers are advised to check the official Hubei immigration website or consult their airline before departure.',
    coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['yichang', 'three gorges', 'visa policy', 'travel regulations', 'hubei tourism', 'port entry', 'yangtze river cruise'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-30T06:19:15.350Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-30-05-4jw7',
    title: 'Wuhan’s Bridge Dynasty: Engineering Marvels Over the Yangtze',
    summary: 'Discover how Wuhan’s 11 Yangtze River bridges blend cutting-edge engineering with iconic design, making the city a must-see for infrastructure enthusiasts.',
    content: 'Wuhan, straddling the mighty Yangtze, is often called the ‘City of Bridges’. As of early 2026, the metropolis boasts **11 completed Yangtze River bridges**—a feat unmatched by any other city along the river. Each bridge tells a story of innovation, from record-breaking spans to earthquake-resistant designs.\n\n## A Legacy of Firsts\nThe story began in 1957 with the **Wuhan Yangtze River Bridge**, the first double-deck road-and-rail bridge across the Yangtze. Its iconic steel truss design remains a symbol of the city. Fast forward to 2025: the **Shuangliu Bridge** (opened in 2024) introduced a hybrid cable-stayed and arch structure, reducing wind-induced vibrations by 40% through advanced dampers.\n\n## Engineering Feats Worth Seeing\n* **Tianxingzhou Bridge** (2009): Once the world’s longest cable-stayed bridge with a span of 504 meters, it set new standards for durability in flood-prone areas.\n* **Yangsigang Bridge** (2019): A stunning two-tier suspension bridge with a main span of 1,700 meters—the longest of its kind in the world. Pedestrian walkways offer panoramic views, a favorite for photo-hunters.\n* **Qingchuan Bridge** (2025 extension, ongoing): Recent retrofits added seismic isolators, making it one of the most earthquake-resilient bridges in central China.\n\n## Smart Bridges, Safer Travel\nAccording to the latest report from Hubei’s transportation authority, all of Wuhan’s Yangtze bridges are now equipped with **IoT sensors** that monitor stress, temperature, and traffic flow in real-time. In 2025, a pilot ‘smart bridge’ system on the **Changfeng Bridge** cut emergency response times by 30%.\n\n## Why This Matters for Travelers\nFor visitors, these bridges are more than connectors—they’re landmarks. The **Second Wuhan Yangtze River Bridge** (1995) lights up at night with a choreographed LED show that runs from sunset to midnight. Meanwhile, the **Wuhan Yangtze River Bridge** offers a nostalgic walk across its pedestrian deck, linking the historic Yellow Crane Tower to the modern Hankou waterfront.\n\n## The Future: More Than Bridges\nWuhan’s bridge engineering isn’t stopping. A **12th Yangtze crossing**—the **Hanyang–Wuchang Tunnel-Bridge**—is under construction and expected to open in 2028. It will combine a submerged tube tunnel with a cable-stayed section, a world-first hybrid design aimed at reducing visual clutter on the river skyline.\n\nWhether you’re an engineering buff or a casual traveler, Wuhan’s bridges offer a unique lens into China’s technological prowess—no politics, just pure innovation.',
    coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['wuhan', 'yangtze river', 'bridges', 'engineering', 'infrastructure', 'technology', 'hubei travel'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-30T06:19:24.350Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-30-06-0usz',
    title: 'Hubei Launches AI-Powered Smart Travel Platform for 2026 Visitors',
    summary: 'Hubei unveils a new digital tourism ecosystem integrating AI guides, AR navigation, and real-time crowd analytics to enhance travel across Wuhan, Enshi, and beyond.',
    content: '## Smarter Travel Starts Here\n\nHubei province is stepping into the future of tourism this year with the rollout of a comprehensive smart travel platform designed to make every trip smoother, safer, and more immersive. According to the latest reports, the \'Wise Hubei Travel\' system now integrates artificial intelligence, augmented reality (AR), and big data to assist visitors from the moment they plan their journey until they head home.\n\n## What the Platform Offers\n\n- **AI Personal Tour Guide**: Visitors can access a voice-activated virtual guide on their smartphones that provides real-time historical facts, restaurant recommendations, and navigation tips in English and Chinese.\n- **AR Navigation**: At key heritage sites like the Yellow Crane Tower in Wuhan and the Enshi Grand Canyon, AR overlays show historical reconstructions, trail difficulty, and live weather data simply by pointing a phone camera.\n- **Smart Crowd Management**: The platform uses anonymized mobile data to display live congestion levels at 50+ attractions, allowing travelers to adjust their schedules and avoid peak hours.\n\n## Contactless Payments & Digital Ticketing\n\nAs of early 2026, all major scenic spots in Hubei — including Wudang Mountain, Shennongjia, and the Hubei Provincial Museum — have adopted unified digital ticketing. Visitors can purchase entry passes via WeChat or the dedicated app, scan QR codes at gates, and even pay for cable cars, boat rides, and souvenir shops without cash.\n\n## Enhanced Connectivity for International Travelers\n\nA particularly welcome upgrade for overseas tourists is the new multilingual interface. The platform now supports English, Japanese, Korean, and French, and includes a built-in translation tool for menu items and street signs. Additionally, the system integrates with international payment methods like Visa and Mastercard at select partner hotels and transport hubs.\n\n## Real-World Impact\n\nEarly data from the 2026 Spring Festival holiday shows that over 3 million visitors used the smart platform, with average wait times at major attractions decreasing by 25%. Travelers have praised the AR guide feature for making historical sites more engaging, especially families with children.\n\n## Future Expansion\n\nHubei tourism authorities have announced plans to extend the smart travel network to rural destinations in Yichang and Jingzhou later this year, including interactive farm tours and eco-trails with live wildlife tracking. For tech-savvy travelers, Hubei is quickly becoming a model province for seamless, digitally enhanced exploration.',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['hubei', 'smart travel', 'digital tourism', 'wuhan', 'augmented reality', 'ai guide', '2026 travel'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-30T06:19:34.535Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-30-07-qiz7',
    title: 'Rediscovering Yangtze River Fishing Villages: A Glimpse into Hubei\'s River Culture',
    summary: 'Explore the timeless charm of Yangtze River fishing villages in Hubei, where ancient traditions and modern eco-tourism converge along China\'s mightiest waterway.',
    content: '## The Living Heritage of the Yangtze\n\nAlong the banks of the Yangtze River in Hubei province, a handful of historic fishing villages are drawing renewed attention from travelers and culture enthusiasts. These settlements, some dating back centuries, offer a rare window into the riverine lifestyle that once defined this region. As of early 2026, several villages near Yichang and Wuhan have opened their doors to visitors, blending rustic authenticity with sustainable tourism.\n\n## A Day in a Fishing Village\n\nIn villages like **Qingjiang** and **Sanxia** (near the Three Gorges area), visitors can witness traditional fishing techniques passed down through generations. Early morning scenes feature wooden sampans gliding over misty waters, while fishermen cast hand-woven nets—a practice that has remained unchanged for hundreds of years. Many locals now offer homestay experiences, allowing guests to join in daily routines such as net mending, fish drying, and cooking river catch over open fires.\n\n## Cultural Festivals on the Water\n\nHubei\'s river culture comes alive during seasonal festivals. The **Dragon Boat Festival** (Duanwu) in June sees villages hosting spirited boat races and river processions. In autumn, the **Yangtze River Culture Festival** in Wuhan celebrates the waterway\'s influence on local art, music, and cuisine. According to the latest reports, the 2026 edition will feature expanded programs, including traditional fishing demonstrations and storytelling sessions by village elders.\n\n## Culinary Treasures from the River\n\nThe villages are also a paradise for food lovers. Signature dishes include:\n- **Steamed blunt-snout bream** (a local delicacy)\n- **Yangtze fish head soup** with pickled chilies\n- **River snail stir-fry** with wild herbs\n\nThese meals are often accompanied by stories of the river\'s bounty, passed down in local dialects that echo the region\'s deep cultural roots.\n\n## Planning Your Visit\n\nAs of 2026, access to these villages has improved with new eco-friendly ferry services from Yichang and Wuhan. Guided tours in English are available through local agencies, and many villages now offer bike rentals to explore scenic riverbanks. \n\nFor international visitors, Hubei\'s 144-hour visa-free transit policy (available at Wuhan Tianhe International Airport) makes it convenient to include a river village excursion on a layover. Spring and autumn offer the most pleasant weather for exploring.\n\n## Preserving a Way of Life\n\nWhile modernization touches the edges of these communities, the fishing villages of the Yangtze remain steadfastly connected to the river. Local initiatives focus on sustainable fishing practices and cultural preservation, ensuring that future generations can still experience the timeless rhythm of life along China\'s great waterway. For travelers seeking an authentic encounter with Hubei\'s soul, these villages are an unmissable destination.',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['yangtze river', 'fishing villages', 'hubei culture', 'river culture', 'eco-tourism', 'yichang', 'wuhan'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-30T06:19:44.356Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-30-08-53mv',
    title: 'Hubei\'s Hidden Treasure: Jingdezhen-Style Pottery Finds a New Home',
    summary: 'Discover how Jingdezhen-style ceramics are being revitalized in Hubei province, blending centuries-old techniques with local creativity for travelers and collectors.',
    content: '## A Legacy of Porcelain in the Heart of China\n\nWhile Jingdezhen, in Jiangxi province, is globally celebrated as the \'Porcelain Capital,\' a surprising and vibrant revival of its iconic pottery traditions is taking root in Hubei. As of 2026, several studios and cultural centers across Hubei—particularly in Wuhan and Huangshi—are embracing Jingdezhen-style ceramics, offering international travelers a unique window into this ancient craft without the crowds.\n\nJingdezhen-style pottery is known for its fine, white porcelain, intricate blue-and-white patterns, and delicate translucent glazes. These techniques, dating back over 1,000 years to the Song and Ming dynasties, are now being taught and reinterpreted in Hubei\'s creative spaces.\n\n## Where to Experience It in Hubei\n\n- **Wuhan\'s Ceramic Art District**: In the city\'s Wuchang district, a cluster of artist-run workshops has opened since 2025, offering hands-on classes in wheel-throwing and underglaze painting. Visitors can create their own blue-and-white teacups or vases, guided by masters trained in Jingdezhen.\n- **Huangshi Porcelain Museum**: This newly renovated venue (reopened in early 2026) showcases a permanent collection of Jingdezhen-style pieces made locally, alongside rotating exhibitions that highlight the fusion of Hubei\'s natural motifs—like lotus flowers and cranes—with classic porcelain forms.\n- **Specialty Shops in Tanhualin**: The historic Tanhualin neighborhood in Wuhan now features boutique galleries selling limited-edition ceramics. Many pieces incorporate local clays and glazes, giving them a distinctive Hubei character while maintaining Jingdezhen\'s elegance.\n\n## Why It Matters for Travelers\n\nFor culture enthusiasts, this trend offers an intimate alternative to visiting Jingdezhen itself (which is a few hours away by high-speed rail). Hubei\'s workshops are smaller, less commercialized, and often more willing to let visitors engage directly with the process. Many studios offer English-language tours and classes, making them accessible to international tourists.\n\n## Seasonal Highlights\n\n- **Spring 2026**: The \'Hubei Porcelain Festival\' in Wuhan (April 15–30) will feature live demonstrations, kiln firings, and a market where visitors can purchase works directly from artisans.\n- **Year-Round**: Most studios offer \'make-your-own\' sessions for 150–300 RMB, including materials and firing; finished pieces can be shipped home.\n\nWhether you\'re a seasoned collector or a curious traveler, Hubei\'s embrace of Jingdezhen-style pottery is a compelling reason to add this province to your cultural itinerary. The blend of tradition and local innovation promises an experience that is both educational and deeply rewarding.',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['jingdezhen pottery', 'hubei ceramics', 'wuhan art', 'blue and white porcelain', 'cultural tourism', 'hands-on workshops', 'tanhualin'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-30T06:19:55.717Z',
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
