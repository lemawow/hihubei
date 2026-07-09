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
    id: 'news-2026-07-09-01-37t8',
    title: 'Hubei’s Folk Music and Performing Arts Festivals Hit New Highs in 2026',
    summary: 'From ancient chime bells to shadow puppetry, Hubei’s 2026 lineup of folk music and traditional arts festivals offers travelers an immersive journey into the province’s living heritage.',
    content: '## Echoes of Antiquity: A Season of Sound and Movement\n\nThis year, Hubei province is turning up the volume on its rich intangible cultural heritage with a packed calendar of folk music and traditional performing arts festivals. According to the latest cultural tourism reports, events running from spring through autumn 2026 are drawing record numbers of international visitors eager to experience authentic Chinese folk arts in their original settings.\n\n## Spotlight on the Bianzhong Festival in Suizhou\n\nThe centerpiece remains the **Suizhou Bianzhong (Chime Bells) International Music Festival**, held each May at the Zeng Hou Yi Tomb site. In 2026, the festival features over 40 performances using full-scale replica chime bells, alongside workshops where visitors can try striking the ancient bronze instruments. Organizers have added a new “Night of Bronze” open-air concert under the stars, blending chime bells with guqin and bamboo flute ensembles.\n\n## Yellow Crane Tower Hosts Shadow Puppetry Extravaganza\n\nIn Wuhan, the **Yellow Crane Tower Traditional Arts Fair** (running every weekend in September) this year spotlights Hubei’s famed shadow puppetry troupes from Yunmeng and Tianmen. Daily shows retell folk tales like *The Legend of the White Snake*, and visitors can step behind the screen to learn basic manipulation techniques. The fair also includes live performances of **Han Opera** and **Huangmei Opera**, two UNESCO-recognized local genres.\n\n## Enshi’s Mountain Songs and Tujia Dance Festival\n\nDeep in the southwestern mountains, the **Enshi Grand Canyon Folk Music Festival** (October 10–20) celebrates the Tujia and Miao ethnic groups’ oral traditions. This year’s edition features the haunting “Mountain Love Songs” competition, where singers from remote villages exchange verses across valley ridges. Evening performances include the iconic **Baishou Dance** — a 500-year-old circular group dance — with audience participation encouraged.\n\n## Practical Tips for Travelers\n\n- **Best time to visit:** May (Suizhou), September (Wuhan), or October (Enshi).\n- **Getting there:** High-speed trains connect Wuhan to Suizhou (1 hour) and Enshi (4 hours).\n- **Visa note:** As of 2026, Hubei offers 144-hour visa-free transit for citizens of 54 countries at Wuhan Tianhe Airport — perfect for a short festival-hopping trip.\n\nWhether you’re a musicologist, a dancer, or simply curious, Hubei’s 2026 festivals promise to turn ancient traditions into unforgettable live experiences.',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['hubei folk music', 'traditional performing arts', 'bianzhong festival', 'shadow puppetry', 'enshi grand canyon', 'han opera', 'yellow crane tower'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-09T06:11:32.147Z',
    readTime: 3,
  },
  {
    id: 'news-2026-07-09-02-1h9s',
    title: 'Three Gorges Area Embraces Green Tourism with New Eco-Trails and Riverside Lodges',
    summary: 'Discover how the Three Gorges region is transforming into a sustainable travel destination, with new eco-friendly trails, carbon-neutral ferry services, and immersive cultural experiences along the Yangtze.',
    content: '## A Greener Journey Along the Yangtze\nThe Three Gorges area, long celebrated for its dramatic karst peaks and ancient river culture, is undergoing a quiet revolution — one that puts nature and sustainability at the center of the travel experience. As of early 2026, a series of eco-tourism projects have opened along both banks of the Yangtze between Yichang and Chongqing, designed to allow visitors to explore the gorges with minimal environmental impact.\n\n## New Eco-Trails and Observation Decks\nThis spring, the first phase of the **Three Gorges Eco-Ridge Trail** was completed, stretching 18 kilometers through the Xiling Gorge section. The trail is built entirely from recycled materials and local stone, with elevated wooden walkways that protect native vegetation. Along the route, four low-impact observation decks offer panoramic views of the river and surrounding cliffs, with interpretive signs in Chinese, English, and French explaining local flora and wildlife.\n\nNear the town of Zigui, a newly opened **Cloud Path** (Yun Dao) takes hikers through misty bamboo groves and past restored terraced fields where farmers continue traditional tea cultivation. Visitors can join half-day guided walks led by community members, learning about sustainable harvesting and the region\'s agricultural history.\n\n## Eco-Friendly River Travel\nA major update for travelers is the launch of the **Green Gorge Ferry** service. Starting this year, six hybrid-electric ferries now operate between Badong and Wushan, replacing older diesel vessels. The ferries are nearly silent and produce 70% fewer emissions, allowing passengers to hear the calls of golden monkeys and birds along the riverbanks. Onboard, local guides share stories of the gorges\' ecology and the significance of the Yangtze finless porpoise, which has been spotted more frequently in recent months.\n\n## Riverside Lodges and Farm Stays\nFor those wanting to immerse themselves in the landscape, several new eco-lodges have opened in the quieter side valleys. The **Gorge Song Retreat** near Shennongjia, for example, offers cabins built from rammed earth and reclaimed timber, with solar power and rainwater collection. Guests can participate in morning tai chi on a cliffside platform, join local fishermen for sustainable catch-and-release outings, or sample farm-to-table dinners featuring foraged mushrooms and river fish.\n\n## Cultural and Community Focus\nImportantly, these developments are closely tied to local villages. In Maoping Town, the **Three Gorges Folk Heritage Walk** was inaugurated last month, linking restored stilt houses, a woodblock printing workshop, and a traditional medicine garden. Artisans demonstrate embroidery and bamboo weaving, and visitors can try their hand at making fermented tofu — a local specialty.\n\n## Practical Tips for Visitors\n- **Best time to visit**: March to May and September to November for mild weather and clear views.\n- **Getting there**: High-speed trains from Wuhan to Yichang take under two hours; eco-ferries connect Yichang with major gorge towns.\n- **Entry**: No special permits required for the new trails, but some guided walks should be booked 48 hours in advance.\n\nWith these thoughtful additions, the Three Gorges area is proving that world-class natural beauty and responsible tourism can thrive together. Whether you\'re a hiker, a culture enthusiast, or simply seeking tranquility, the gorges now offer a deeper, greener way to explore China\'s most iconic river landscape.',
    coverImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['three gorges', 'eco-tourism', 'yangtze river', 'sustainable travel', 'hiking trails', 'yichang', 'hubei culture'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-09T06:11:42.579Z',
    readTime: 4,
  },
  {
    id: 'news-2026-07-09-03-78iv',
    title: 'Streamlined Travel: Your Guide to the 2026 China Visa Application for Hubei',
    summary: 'Discover the latest updates on China\'s visa process for visiting Hubei in 2026, including simplified online forms, faster processing, and tips for exploring Wuhan and beyond.',
    content: '## A New Era for Travel to Hubei\nAs of early 2026, international travelers planning a trip to Hubei province will find the visa application process more efficient than ever. This year, Chinese authorities have rolled out a fully digitized application system for most tourist visa (L-visa) applicants. The goal is to reduce wait times and enhance the experience for cultural enthusiasts heading to destinations like Wuhan, the Three Gorges, and the ancient town of Fenghuang.\n\n## Step-by-Step Application Process\nApplying for a visa to visit Hubei now follows a clear, online-first workflow. Here’s what you need to know:\n- **Complete the Online Form**: All applicants must fill out the latest version of the visa application form via the official China Online Visa Application (COVA) system. This updated portal includes a dedicated section for travel itineraries, where you can mention specific Hubei attractions, such as the Yellow Crane Tower or Shennongjia Forest.\n- **Prepare Your Documents**: You’ll need a valid passport (with at least six months of validity), a recent passport-sized photo, flight and hotel bookings, and proof of travel insurance. For Hubei-bound trips, a letter of invitation from a local tour operator or hotel is recommended but not always mandatory.\n- **Submit in Person**: As of 2026, most applicants still need to visit a Chinese embassy or visa application service center in their home country. However, the new system offers online appointment scheduling, cutting wait times to an average of three to five business days.\n- **Pay the Fee**: Standard tourist visa fees remain around $140 for U.S. citizens, with slightly lower rates for other nationalities. Expedited processing is available for an extra fee.\n\n## Insider Tips for a Smooth Process\nTravelers heading to Hubei this year should note a few key points:\n- **Plan for Peak Seasons**: Spring (March-May) and autumn (September-November) are popular times to visit Hubei. Apply at least four weeks in advance to avoid delays.\n- **Mention Hubei in Your Itinerary**: Providing a detailed plan, like a 5-day Wuhan itinerary or a Yangtze River cruise, can speed up approval.\n- **Consider a Multiple-Entry Visa**: If you plan to explore other regions like Beijing or Shanghai alongside Hubei, a 10-year multiple-entry visa (available for U.S., Canadian, and some European passport holders) is a great option.\n\n## Why Choose Hubei in 2026?\nWith the streamlined visa process, there’s never been a better time to experience Hubei’s rich culture. This year, Wuhan has launched new cultural festivals, while the Three Gorges region boasts upgraded eco-tourism trails. The simplified application means you can focus on packing your bags, not wrestling with paperwork.\n\nFor the latest updates, check the official Chinese visa website or consult your local visa service center. Hubei is ready to welcome you—are you ready to explore?',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['hubei travel', 'china visa', 'visa application', 'wuhan', 'travel tips', '2026 updates', 'cultural tourism'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-09T06:11:55.638Z',
    readTime: 3,
  },
  {
    id: 'news-2026-07-09-04-j91f',
    title: 'Yichang Tourism Port Updates Entry Regulations for 2026: Easier Access for International Travelers',
    summary: 'Yichang has revised its tourism port entry rules, introducing 24-hour transit visa-free and streamlined procedures for cruise passengers, making it a gateway to the Three Gorges.',
    content: '## New Entry Rules at Yichang Tourism Port\n\nAs of early 2026, Yichang tourism port — the primary waterway gateway for travelers exploring the Three Gorges region — has updated its entry regulations to better accommodate international visitors. The new rules, announced by local port authorities this month, aim to simplify the arrival process for cruise passengers and independent tourists alike.\n\n### Key Changes for Travelers\n- **24-Hour Transit Visa-Free**: International travelers transiting through Yichang port to a third country can now enjoy a 24-hour visa-free stay, allowing them to explore the city\'s riverside attractions, such as the Three Gorges Dam, without obtaining a separate visa.\n- **Streamlined Cruise Clearance**: For passengers arriving on Yangtze River cruises, the port has introduced an express lane that reduces customs and immigration processing time to under 15 minutes, a significant improvement over previous wait times.\n- **Digital Entry Cards**: Visitors can now fill out entry cards online up to 48 hours before arrival via the official Yichang Tourism Port app, available in English, Chinese, and Japanese.\n\n### Benefits for Culture Enthusiasts\nYichang is the starting point for many tours of the Three Gorges, a UNESCO World Heritage site famous for its dramatic limestone cliffs and ancient temples. The updated regulations make it easier for culture lovers to combine a visit to Yichang with onward travel to Chongqing or Wuhan. For example, a traveler arriving by river cruise from Shanghai can now spend a full day in Yichang visiting the Three Gorges Dam Museum or hiking the Xiling Gorge trail before continuing their journey.\n\n### Practical Tips\n- **Visa Types**: Most nationalities still require a valid Chinese visa for stays exceeding 24 hours, but the transit exemption covers citizens of 54 countries, including the U.S., UK, Australia, and most EU nations.\n- **Port Location**: Yichang Tourism Port is located on Binjiang Road, just a 20-minute taxi ride from Yichang East Railway Station, making it convenient for onward land travel.\n- **Upcoming Events**: The port is also preparing for the 2026 Three Gorges International Cruise Season, which kicks off in April, with enhanced services for large groups.\n\nFor the latest updates, travelers are advised to check the Yichang Tourism Port official website or consult their cruise operator before departure.',
    coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['yichang', 'three gorges', 'visa policy', 'travel regulations', 'cruise travel', 'hubei tourism', 'port entry'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-09T06:12:05.831Z',
    readTime: 3,
  },
  {
    id: 'news-2026-07-09-05-2z7a',
    title: 'Wuhan’s Quantum Leap: New Lab Expands China’s Computing Frontier in 2026',
    summary: 'Wuhan’s quantum computing research reaches a milestone with a state-of-the-art laboratory expansion, offering international visitors a rare glimpse into cutting-edge science and tech culture in Hubei.',
    content: '## Wuhan’s Quantum Computing Scene Heats Up\n\nThis year, Wuhan has cemented its reputation as a rising hub for quantum technology. According to the latest reports from the Wuhan National Laboratory for Optoelectronics (WNLO), a major expansion of its quantum computing research facilities was completed in early 2026. The new wing, located on the Optics Valley Avenue in the city’s East Lake High-tech Zone, houses several advanced quantum processors and cryogenic systems used to develop next-generation quantum bits, or qubits.\n\n## What’s New in the Lab?\n\nThe upgraded laboratory now includes:\n- **A dedicated quantum error-correction testbed** – one of the few in central China, aimed at making quantum computers more stable for practical use.\n- **A photonic quantum computing platform** – leveraging Wuhan’s strength in optics, this system uses light particles to perform calculations at unprecedented speeds.\n- **Collaborative spaces for international researchers** – the lab has hosted visiting scientists from Europe and Southeast Asia this spring, reflecting Wuhan’s growing openness in tech exchange.\n\nThese developments build on earlier breakthroughs, such as the 2024 demonstration of a 66-qubit superconducting processor developed in partnership with local universities. As of mid-2026, researchers at WNLO are testing a new 100-qubit chip, aiming for commercial applications in drug discovery and logistics optimization by 2028.\n\n## Why It Matters for Visitors\n\nFor travelers interested in science and innovation, Wuhan offers unique opportunities this year:\n- **Optics Valley Science Museum** – now features a permanent quantum computing exhibit, including a working model of a quantum chip and interactive demonstrations. Open to the public, with English-language guides available on weekends.\n- **Lab tours** – the WNLO offers limited guided tours for international visitors (advance booking required). Check their website for monthly open-house dates.\n- **Quantum-themed tech talks** – several cafes and co-working spaces in the Optics Valley district host monthly meetups where local researchers discuss quantum trends in plain language – great for networking or learning.\n\n## A Glimpse into Hubei’s Tech Future\n\nWuhan’s quantum push is part of a broader regional strategy to attract global tech talent and investment. The new lab is equipped with a dedicated visitor center that showcases the history of quantum mechanics and its potential impact on everyday life – from secure communications to smarter energy grids. While the technology remains complex, the city is making an effort to demystify it for non-specialists, with bilingual signage and simplified explanations throughout the facility.\n\nWhether you’re a tech enthusiast or simply curious about where the future is headed, Wuhan’s quantum computing scene offers a fascinating window into one of the 21st century’s most transformative fields. Plan your visit this year to see science in action.',
    coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['wuhan', 'quantum computing', 'optics valley', 'technology', 'science', 'hubei', 'innovation'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-09T06:12:14.495Z',
    readTime: 4,
  },
  {
    id: 'news-2026-07-09-06-wcal',
    title: 'Hubei\'s High-Speed Rail Revolution: Cutting-Edge Tech Connects the Province Like Never Before',
    summary: 'China Railway\'s latest high-speed rail innovations in Hubei are slashing travel times and enhancing passenger comfort, making the province a seamless hub for international travelers in 2026.',
    content: '## A Leap Forward in Rail Technology\n\nHubei province has emerged as a testing ground for China Railway\'s next-generation high-speed rail technology. As of early 2026, the newly upgraded **Wuhan–Shiyan High-Speed Railway** now operates trains capable of reaching 400 km/h on select stretches, thanks to advanced traction systems and lighter composite materials. This cuts the journey from Wuhan to Shiyan to just under 90 minutes—a boon for travelers eager to explore the Wudang Mountains or the ancient city of Xiangyang.\n\n## Smart Stations and Seamless Connectivity\n\nTwo major stations—**Wuhan East Railway Station** and **Yichang North Station**—have been retrofitted with AI-powered crowd management and facial recognition ticketing this year. International visitors can now breeze through gates using their passport data linked to digital tickets purchased via the 12306 app. The stations also feature multilingual information kiosks and real-time train tracking in English, French, and Japanese.\n\n## What This Means for Travelers\n\n- **Faster Routes**: The Wuhan–Yichang corridor now runs express services every 15 minutes during peak hours, making a day trip to the Three Gorges region effortless.\n- **Green Technology**: New trains use regenerative braking systems that recover 20% more energy, aligning with Hubei\'s push for eco-tourism.\n- **Onboard Comfort**: First-class carriages now feature noise-canceling partitions, adjustable ambient lighting, and USB-C charging ports at every seat—upgrades rolled out in a pilot program this spring.\n\n## Behind the Engineering\n\nEngineers from the China Railway Science and Technology Innovation Center in Wuhan have developed a new **ballastless track system** that reduces vibration by 30%, allowing smoother rides through Hubei\'s hilly terrain. The system also cuts maintenance downtime, ensuring more reliable schedules for international tourists planning multi-city itineraries.\n\n## Looking Ahead\n\nBy late 2026, a direct high-speed link between Wuhan and the Shennongjia Forest region is expected to open, opening up the UNESCO-listed biodiversity hotspot to rail travelers for the first time. Combined with the existing visa-free transit policy for 24-hour stops in Wuhan, Hubei\'s rail network is positioning itself as a gateway to central China for global explorers.',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['hubei', 'high-speed-rail', 'wuhan', 'technology', 'travel-infrastructure', 'china-railway', 'innovation'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-09T06:12:24.911Z',
    readTime: 3,
  },
  {
    id: 'news-2026-07-09-07-noi9',
    title: 'Bridging Past and Future: Wuhan’s Urban Renewal Breathes New Life into Historic Districts',
    summary: 'Discover how Wuhan is blending modern urban renewal with heritage preservation, turning century-old streets like Tanhualin and Jianghan Road into vibrant cultural hubs for travelers in 2026.',
    content: '## A City Reimagined: Heritage Meets Innovation\n\nAs of early 2026, Wuhan is making headlines for its ambitious approach to urban renewal — one that prioritizes the preservation of its rich architectural and cultural heritage. Rather than sweeping away the old, the city is carefully restoring historic districts and integrating them into the fabric of modern life, creating unique spaces where travelers can experience centuries of history side-by-side with contemporary creativity.\n\n## Tanhualin: An Open-Air Museum of Life\n\nPerhaps the most celebrated example is **Tanhualin**, a historic neighborhood that dates back to the Ming dynasty. Once a quiet alley of crumbling brick houses, Tanhualin has been revitalized this year through a community-driven preservation model. The narrow lanes are now lined with galleries, artisan workshops, boutique tea houses, and independent bookstores — all housed in restored buildings that retain their original brick-and-wood facades. Visitors can wander freely, watching local artists paint murals on old walls or sipping tea in a courtyard that was once a merchant’s home. The district has become a living museum, not a static exhibit.\n\n## Jianghan Road: The Cosmopolitan Past Revived\n\nFurther downtown, the **Jianghan Road Historic District** is undergoing a sensitive facelift. Known for its eclectic collection of early 20th-century European-style buildings — including neoclassical banks, art deco hotels, and Gothic churches — the area was once the heart of Wuhan’s international concessions. The latest renewal project, completed in late 2025, has restored the facades to their original splendor while transforming interiors into modern cafes, concept stores, and cultural centers. The result is a pedestrian-friendly promenade that feels both timeless and contemporary — a favorite spot for photographers and history buffs alike.\n\n## Key Preservation Principles in Action\n\nThe city’s approach focuses on several core strategies:\n\n- **Structural authenticity**: Original materials and techniques are used wherever possible, with modern reinforcements hidden from view.\n- **Adaptive reuse**: Old buildings are given new purposes — a former bank becomes a gallery, a warehouse turns into a co-working space.\n- **Community involvement**: Local residents and business owners are consulted to ensure that renewal serves the people who live and work there.\n- **Green integration**: Walking and cycling paths are prioritized, with green spaces added to reduce urban heat and improve air quality.\n\n## What This Means for Travelers\n\nFor international visitors, these preserved districts offer a rare chance to walk through layers of Wuhan’s history — from imperial China to the treaty port era and into the 21st century. Guided walking tours in English are now widely available, and many sites offer QR-code audio guides with stories about the buildings and the people who lived in them. Whether you’re an architecture enthusiast, a photographer, or simply a curious traveler, Wuhan’s renewed historic neighborhoods are a must-see destination in 2026.\n\n## Looking Ahead\n\nAccording to the latest reports, several more historic areas — including the **Lihuangpi Road** and **Hankow Bund** — are slated for similar treatment over the next two years. Wuhan is proving that urban renewal does not have to mean erasing the past; instead, it can be a bridge between generations, preserving the soul of a city while making it more livable and enchanting for all who visit.',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['wuhan', 'tanhualin', 'jianghan road', 'historic preservation', 'urban renewal', 'architecture', 'heritage tourism'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-09T06:12:33.846Z',
    readTime: 4,
  },
  {
    id: 'news-2026-07-09-08-srn2',
    title: 'Enshi Yulu Green Tea: The Ancient Craft of Hubei’s Jade Dew Leaves',
    summary: 'Discover the centuries-old craftsmanship behind Enshi Yulu, a steamed green tea from Hubei that is gaining global recognition for its unique flavor and traditional production methods.',
    content: '## A Taste of Hubei’s Heritage\n\nFor tea lovers and cultural explorers alike, Enshi Yulu (恩施玉露) is a hidden gem from the mountainous region of Enshi Tujia and Miao Autonomous Prefecture in Hubei. Known as “Jade Dew” for its bright green liquor and delicate leaf shape, this steamed green tea dates back to the Tang Dynasty (618–907 AD) and is one of the few remaining Chinese teas still made using the ancient steaming technique—a method that predates the more common pan-firing process.\n\n## The Craft: Steaming Over Firing\n\nUnlike most Chinese green teas, which are pan-fired to stop oxidation, Enshi Yulu is steamed for about 30 seconds at high temperature. This technique, introduced from Japan centuries ago but preserved uniquely in Enshi, locks in the tea’s natural chlorophyll and amino acids, resulting in a vibrant jade color, a clean vegetal aroma, and a sweet, umami-rich taste. As of 2026, local tea masters in Enshi continue to follow a strict 8-step process:\n\n- **Plucking**: Only one bud and one or two tender leaves are handpicked before Qingming Festival (early April).\n- **Steaming**: Fresh leaves are steamed in bamboo baskets over boiling water.\n- **Cooling & Rolling**: Leaves are quickly cooled, then hand-rolled into slender, needle-like shapes.\n- **Drying**: The tea is dried over charcoal fires in bamboo trays, a step that imparts a subtle smokiness.\n\nThis year, the Enshi Yulu Craftsmanship Training Center reported a 20% increase in apprentices learning the traditional method, as younger generations embrace the heritage.\n\n## Where to Experience Enshi Yulu\n\nFor travelers planning a visit to Hubei, the Enshi Grand Canyon area offers tea-themed tours. Many family-run farms in villages like **Bamai** and **Longfeng** welcome visitors to watch the steaming process and taste fresh Yulu straight from the bamboo basket. In Wuhan, the **Hubei Provincial Museum’s Tea Culture Hall** features a dedicated Enshi Yulu exhibit, including antique steaming tools and a tasting bar.\n\n## Why It Matters Today\n\nEnshi Yulu’s revival is part of a broader cultural renaissance in Hubei. International tea competitions in 2025 awarded the tea multiple gold medals, and specialty tea shops in Tokyo, London, and New York now stock it. For the traveler, sipping Enshi Yulu is not just about flavor—it’s a direct link to a thousand-year-old tradition that thrives in the misty hills of central China.\n\nWhether you’re a tea connoisseur or a curious culture seeker, Enshi Yulu offers a rare window into Hubei’s living history.',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['enshi yulu', 'green tea', 'hubei tea culture', 'traditional craftsmanship', 'enshi', 'teatourism'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-09T06:12:45.784Z',
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
