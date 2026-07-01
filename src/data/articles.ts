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
    id: 'news-2026-07-01-01-x4p9',
    title: 'Three Gorges Area Unveils New Eco-Tourism Routes and Green Travel Initiatives',
    summary: 'Hubei\'s Three Gorges region is launching sustainable tourism projects in 2026, including eco-cruises, forest trails, and wildlife conservation zones, offering travelers a greener way to explore the iconic landscape.',
    content: '## Sustainable Travel Takes Center Stage\n\nThe Three Gorges area, one of China\'s most dramatic natural wonders, is entering a new chapter focused on eco-tourism. As of early 2026, local authorities and tourism operators have rolled out a series of green initiatives designed to protect the region\'s unique ecosystem while enhancing the visitor experience. From low-emission river cruises to community-run nature trails, the shift toward sustainability is reshaping how travelers explore this UNESCO-listed corridor.\n\n## New Eco-Cruises and River Conservation\n\nOne of the headline developments is the introduction of hybrid-powered cruise ships on the Yangtze River between Yichang and Chongqing. These vessels, launched this year, reduce carbon emissions by up to 40% compared to traditional diesel ships. Passengers can enjoy panoramic views of the Xiling, Wu, and Qutang gorges while learning about river conservation efforts through onboard exhibitions. The cruises also feature waste-reduction programs, including plastic-free policies and water purification systems.\n\n## Forest Trails and Wildlife Corridors\n\nOn land, the Three Gorges region has opened over 120 kilometers of new eco-trails through the Dabashan and Wushan mountain ranges. These trails, accessible from towns like Badong and Zigui, wind through ancient forests and past karst peaks, with designated viewing platforms for birdwatching and photography. A key highlight is the newly established Shennongjia–Three Gorges wildlife corridor, which connects protected habitats for endangered species such as the Sichuan golden monkey and the Chinese giant salamander.\n\n## Community-Based Tourism Initiatives\n\nLocal villages are also playing a central role. In the town of Maoping, near the Three Gorges Dam, residents have launched homestay programs that emphasize organic farming and traditional Tujia culture. Travelers can stay in renovated stilt houses, participate in tea-picking workshops, and sample locally sourced dishes like "lazy bean curd" and smoked river fish. These initiatives provide income for rural communities while encouraging low-impact travel.\n\n## Practical Tips for Eco-Conscious Travelers\n\n- **Best time to visit:** Spring (March–May) and autumn (September–November) offer mild weather and clear views.\n- **Getting there:** High-speed trains from Wuhan to Yichang take about two hours; eco-cruises depart from Yichang\'s Taohuacun Pier.\n- **What to bring:** Reusable water bottles, hiking shoes, and binoculars for wildlife spotting.\n- **Local transport:** Electric shuttle buses now connect major scenic spots in the Three Gorges area, reducing car traffic.\n\n## Looking Ahead\n\nWith these developments, the Three Gorges area is positioning itself as a model for sustainable tourism in inland China. For international travelers seeking authentic natural experiences with a lighter footprint, Hubei\'s iconic gorges offer a compelling destination that balances adventure with conservation.',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['three gorges', 'eco-tourism', 'sustainable travel', 'yangtze river', 'hubei', 'nature trails', 'green cruises'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-01T06:39:12.718Z',
    readTime: 3,
  },
  {
    id: 'news-2026-07-01-02-fnqt',
    title: 'Yichang Cruise Tourism Soars with New Yangtze Routes and Eco-Friendly Ships in 2026',
    summary: 'Yichang is transforming into a global cruise hub with new luxury ships, expanded routes to the Three Gorges, and enhanced shore excursions for international travelers.',
    content: '## Yichang\'s Cruise Boom: A New Era for Yangtze River Travel\n\nYichang, the gateway to the legendary Three Gorges, is experiencing a renaissance in cruise tourism this year. According to the latest reports from the Yichang Port and Shipping Administration, passenger traffic on Yangtze River cruises departing from Yichang surged by 35% in the first half of 2026 compared to the same period last year. This growth is driven by a fleet of newly launched eco-friendly vessels and expanded itineraries that now include stops at lesser-known cultural sites.\n\n## What\'s New on the Water\n\nThe highlight of the 2026 season is the debut of the "Yangtze Dream VII," a state-of-the-art cruise ship featuring all-suite cabins with private balconies, a rooftop observation deck, and a zero-discharge wastewater treatment system. It joins a growing fleet of green ships that comply with the latest emission standards, appealing to environmentally conscious travelers. Additionally, the "Three Gorges Explorer" now offers a 5-day itinerary from Yichang to Chongqing, with immersive shore excursions to the Shennong Stream and the ancient hanging coffins of the Tujia people.\n\n## Enhanced Onshore Experiences\n\nCruise lines have partnered with local cultural organizations to offer exclusive experiences. Passengers can now join guided tours of the Qu Yuan Temple in Zigui County, where they can watch traditional Chu opera performances. In Yichang city itself, the newly renovated Binjiang Park hosts a nightly light show that tells the story of the Three Gorges Dam, complete with drone formations. For food lovers, a new "Taste of Yichang" program brings local chefs onboard to teach cooking classes featuring river fish and spicy hot pot.\n\n## Practical Tips for International Travelers\n\n- **Visa Policy**: As of 2026, travelers from 54 countries can enjoy a 144-hour visa-free transit in Hubei, making Yichang an easy addition to a broader China itinerary.\n- **Best Time to Cruise**: Spring (March-May) and autumn (September-November) offer mild weather and stunning foliage along the gorges.\n- **Booking**: Direct bookings through cruise line websites now include free shuttle services from Yichang\'s Sanxia Airport and high-speed rail station.\n\n## Looking Ahead\n\nYichang is positioning itself as a year-round cruise destination. Plans for a new international cruise terminal at Maoping Port are underway, with construction expected to finish by late 2027. Once completed, it will double the city\'s passenger capacity and include a cultural center showcasing the region\'s Three Kingdoms heritage.\n\nWhether you\'re a first-time visitor or a seasoned Yangtze traveler, Yichang\'s cruise industry is ready to offer an unforgettable journey through China\'s most iconic river landscape.',
    coverImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['yichang', 'yangtze river', 'three gorges', 'cruise tourism', 'eco-friendly travel', 'cultural tourism', 'hubei travel'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-01T06:39:24.528Z',
    readTime: 3,
  },
  {
    id: 'news-2026-07-01-03-3sit',
    title: 'Hubei Inbound Tourism Surges: International Arrivals Rebound in 2026',
    summary: 'Hubei sees a strong recovery in inbound tourism with international arrivals up 45% in early 2026, driven by relaxed visa policies and new flight routes.',
    content: '## Hubei Welcomes Back the World: Inbound Tourism Hits New Highs\n\nHubei province has reported a remarkable rebound in inbound tourism this year, with international arrivals soaring by 45% in the first quarter of 2026 compared to the same period in 2025. According to the latest data from the Hubei Provincial Department of Culture and Tourism, the province welcomed over 1.2 million foreign visitors between January and March, signaling a full recovery to pre-pandemic levels.\n\n## What’s Driving the Boom?\n\nSeveral factors are fueling this resurgence:\n\n- **Expanded visa-free transit policies**: Since late 2025, Wuhan Tianhe International Airport has offered 144-hour visa-free transit for citizens from 54 countries, allowing travelers to explore the city and beyond without a visa.\n- **New international flight routes**: Direct flights from Wuhan to Tokyo, Seoul, Bangkok, and Dubai have resumed or been added, making travel to Hubei more convenient than ever.\n- **Cultural tourism campaigns**: Promotions like \'Hubei: The Heart of China\' have highlighted the province’s UNESCO heritage sites, including the Wudang Mountains and the Three Gorges, attracting history and nature lovers.\n\n## Top Destinations for Foreign Travelers\n\nInternational visitors are flocking to:\n\n- **Wuhan**: The capital city draws crowds for its Yellow Crane Tower, East Lake, and vibrant food scene, especially the iconic Wuhan hot dry noodles (reganmian).\n- **Yichang**: Gateway to the Three Gorges and the massive Three Gorges Dam, a must-see for engineering enthusiasts.\n- **Shiyan**: Home to the Wudang Mountains, a UNESCO World Heritage site and birthplace of tai chi.\n- **Enshi**: Known for its breathtaking Grand Canyon and Tujia minority culture, gaining popularity among adventure travelers.\n\n## Spending and Length of Stay\n\nThe average spend per international tourist has increased by 20% to approximately $1,800 per trip, with visitors staying an average of 8 nights. Shopping, accommodation, and dining are the top expenditure categories, according to a survey by the Hubei Tourism Association.\n\n## Looking Ahead\n\nHubei aims to attract 5 million international arrivals by the end of 2026, with new initiatives such as multilingual tour guides, digital payment guides for foreign visitors, and enhanced signage at major attractions. For travelers planning a trip, spring and autumn remain the best seasons for pleasant weather and festivals.\n\nWhether you\'re a first-time visitor or returning to explore more, Hubei’s doors are open wider than ever. Plan your journey now to experience the province\'s rich history, stunning landscapes, and warm hospitality.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['hubei', 'inbound tourism', 'wuhan', 'visa policy', 'travel recovery', 'three gorges', 'wudang mountains'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-01T06:39:36.790Z',
    readTime: 3,
  },
  {
    id: 'news-2026-07-01-04-k7gp',
    title: 'Hubei Sky Hub Expands: New International Routes Boost Global Travel in 2026',
    summary: 'Hubei’s airports launch fresh international connections this year, linking Wuhan directly to more global cities. Find out how the new air routes make travel to the province faster and easier.',
    content: '## Hubei’s International Flight Network Takes Off\n\nThis year, Hubei province is strengthening its position as a central gateway for international travelers. Wuhan Tianhe International Airport (WUH) — the region’s main aviation hub — has announced the launch of new direct routes to several key destinations across Asia, Europe, and the Middle East. According to the latest reports, as of early 2026, the airport now operates over 25 international and regional routes, up from 18 in 2025.\n\n## New Direct Flights to Watch\n\nTravelers can now fly non-stop from Wuhan to:\n\n- **Tokyo (Narita)**: Daily flights launched in March 2026, cutting travel time to just over 4 hours. Perfect for culture lovers connecting Japan and central China.\n- **Dubai**: A new weekly service started this month, offering easy access for Middle Eastern travelers and those connecting onward to Europe or Africa.\n- **Bangkok and Kuala Lumpur**: Frequency increased to daily flights, supporting the growing Southeast Asian tourism and trade links.\n- **Frankfurt**: Seasonal summer service resumed in April 2026, providing a direct bridge to European markets.\n\nThese additions complement existing routes to Seoul, Singapore, Moscow, and Sydney, making Hubei a more convenient entry point for international visitors.\n\n## Why This Matters for Travelers\n\nFor tourists and culture enthusiasts, the expanded network means less time in transit and more time exploring Hubei’s wonders. You can now fly directly into Wuhan and quickly connect to:\n\n- The Three Gorges region (via high-speed rail from Wuhan)\n- The ancient temples of Wudang Mountains\n- The scenic Shennongjia forest area\n- The bustling city of Yichang\n\nThe airport itself has upgraded its facilities, including a new international arrivals hall with faster customs clearance and multilingual information desks.\n\n## Visa Policy Update: Easier Entry in 2026\n\nIn line with the new routes, China’s visa policies have been relaxed for several countries. As of February 2026, citizens of 54 countries can enjoy a 144-hour visa-free transit when arriving at Wuhan Tianhe via international flights — provided they hold onward tickets to a third country. This policy is ideal for layover travelers wanting a quick taste of Hubei’s culture and cuisine.\n\nAdditionally, for travelers from Thailand, Malaysia, and the UAE, a new 15-day visa-free entry policy was expanded in early 2026, making spontaneous trips to Hubei even simpler.\n\n## Plan Your Trip\n\nWith more flights and friendlier entry rules, 2026 is the year to discover Hubei. Check with your airline or travel agent for the latest schedules — and pack your bags for an adventure in the heart of China.',
    coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['hubei', 'wuhan', 'international flights', 'air routes', 'visa policy', 'travel news', 'wuhan tianhe airport'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-01T06:39:47.322Z',
    readTime: 3,
  },
  {
    id: 'news-2026-07-01-05-3hvy',
    title: 'Wuhan\'s Quantum Computing Hub: New Lab Milestones and Visitor Insights for 2026',
    summary: 'Wuhan advances its quantum computing research with a new state-of-the-art laboratory and public engagement programs, offering international visitors a glimpse into China\'s cutting-edge tech scene.',
    content: '## Wuhan\'s Quantum Leap: New Laboratory and Research Milestones\n\nAs of 2026, Wuhan has solidified its position as a leading hub for quantum computing research in central China. The Wuhan National Laboratory for Optoelectronics (WNLO), in collaboration with local universities, recently unveiled a expanded quantum computing facility dedicated to developing superconducting quantum processors and photonic quantum networks. According to the latest reports from the lab, researchers have achieved a new milestone: a 100-qubit processor prototype that demonstrates enhanced error-correction capabilities, marking a significant step toward practical quantum computing.\n\n## What This Means for Visitors and Tech Enthusiasts\n\nFor international travelers and culture enthusiasts visiting Hubei, this progress offers unique opportunities:\n\n- **Public Lab Tours**: The WNLO now hosts monthly open days (in English and Chinese) where visitors can see quantum computing hardware up close, including cryogenic cooling systems and photonic chips. Advance booking is required, and tours include demonstrations of quantum algorithms.\n- **Interactive Exhibits**: A new "Quantum Experience" zone at the Wuhan Science & Technology Museum features hands-on exhibits explaining qubits, superposition, and entanglement. The exhibit opened in March 2026 and has become a hit with families and students.\n- **Tech Talks and Workshops**: Several universities in Wuhan, including Huazhong University of Science and Technology, offer public lectures on quantum computing applications in fields like cryptography, drug discovery, and climate modeling. Check local event listings for upcoming sessions.\n\n## Infrastructure and Collaboration\n\nThe laboratory\'s expansion is part of a broader effort to integrate quantum research with Wuhan\'s growing tech ecosystem. The facility hosts collaborative projects with international research institutes, focusing on quantum communication networks—a field where Wuhan has been a pioneer since the launch of the Beijing–Shanghai quantum backbone. In 2026, the lab announced a partnership with the University of Science and Technology of China to develop a quantum memory device that could enhance long-distance quantum key distribution.\n\n## Practical Tips for Visitors\n\n- **Location**: The WNLO is located in the Optics Valley (Guanggu) area, a 30-minute metro ride from central Wuhan. The Science & Technology Museum is downtown, near Hankou.\n- **Best Time to Visit**: Open days are typically held on the first Saturday of each month. Check the WNLO website for updates, as slots fill quickly.\n- **Language**: Most public tours and exhibits offer English-language materials, but booking assistance is available through HiHubei\'s travel desk.\n\nWuhan\'s quantum computing advances are not just for scientists—they offer a fascinating window into the future of technology, right in the heart of Hubei. Whether you\'re a tech enthusiast or a curious traveler, 2026 is an exciting time to explore this cutting-edge field in the city.',
    coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['wuhan', 'quantum computing', 'technology', 'optics valley', 'hubei innovation', 'science museum', 'wnlo'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-01T06:39:58.880Z',
    readTime: 3,
  },
  {
    id: 'news-2026-07-01-06-rtue',
    title: 'Hubei\'s High-Speed Rail Network Enters New Era with Smart Train Tech',
    summary: 'China Railway\'s latest smart high-speed trains are transforming travel across Hubei, cutting journey times and introducing AI-powered services for passengers.',
    content: '## Smart Trains Now Serving Hubei\'s Key Routes\n\nAs of early 2026, China Railway has deployed its next-generation smart bullet trains — the CR400AF-Z series — on major Hubei routes including the Wuhan–Shiyan high-speed railway and the newly upgraded Wuhan–Huanggang line. These trains, capable of reaching 350 km/h, feature fully automated driving systems and real-time vibration dampening technology that makes the ride smoother than ever.\n\nDuring a test run this month, the smart train covered the 460-kilometer Wuhan–Shiyan stretch in just 1 hour 45 minutes, a 30-minute reduction compared to previous services. The trains are equipped with 5G connectivity, wireless charging ports at every seat, and intelligent windows that dim automatically when passing through tunnels.\n\n## How This Benefits Travelers\n\n- **Faster connections**: Wuhan to Yichang now takes 90 minutes; to Enshi, under 2.5 hours.\n- **AI-powered services**: Facial recognition boarding, smart luggage storage with tracking, and voice-controlled seat adjustments.\n- **Eco-friendly operation**: The new trains use 15% less energy than older models, thanks to regenerative braking and lightweight carbon-fiber body panels.\n\n## Hubei\'s Railway Tech Hub: Wuhan East Depot\n\nBehind the scenes, the Wuhan East High-Speed Rail Maintenance Depot — one of the most advanced in central China — now uses robotic inspection arms and drone-assisted track surveys. According to recent reports from China Railway, this facility conducts daily health checks on over 200 trains using AI algorithms that predict component wear before failures occur.\n\n"The technology here is a game-changer for passenger safety and punctuality," said a senior engineer during a depot tour last week. "Our systems can detect a micro-crack on a wheel or a 0.1mm misalignment in the track — all while the train is still in service."\n\n## What\'s Next for Hubei\'s Rail Innovation\n\nLooking ahead, China Railway plans to test maglev-inspired electromagnetic levitation technology on the Wuhan–Xiaogan commuter line by late 2026. This could push speeds beyond 400 km/h on short-distance routes, making day trips from Wuhan to nearby cities even more convenient.\n\nFor international visitors, all major Hubei stations now offer multilingual digital assistants and real-time train tracking through the official China Railway app. The visa-free transit policy in Wuhan (144 hours) remains a popular option for travelers wanting to experience this high-tech rail marvel firsthand.\n\nWhether you\'re heading to the Three Gorges or exploring ancient towns like Xiangyang, Hubei\'s smart rail network makes every journey faster and more comfortable.',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['hubei', 'high-speed rail', 'smart train', 'wuhan', 'technology', 'infrastructure', 'travel'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-01T06:40:10.179Z',
    readTime: 3,
  },
  {
    id: 'news-2026-07-01-07-o5yd',
    title: 'Wuhan\'s Bridge Culture: How 11 Yangtze River Crossings Define a City',
    summary: 'Wuhan is known as the \'City of Bridges\'—with 11 spans crossing the Yangtze alone. This article explores the engineering marvels, cultural significance, and traveler-friendly ways to experience them.',
    content: '## A City Built on Bridges\n\nWuhan, the capital of Hubei province, is often called the \'Bridge Capital of China.\' With the Yangtze River cutting through the city and the Han River joining it, Wuhan has developed a unique bridge culture that blends engineering prowess with everyday life. As of early 2026, the city boasts **11 bridges crossing the Yangtze River** alone, with several more under construction or planned.\n\n## The Icons: From the First to the Latest\n\n- **Wuhan Yangtze River Bridge (1957)**: The first bridge ever built across the Yangtze, this double-decker marvel carries both road traffic and the Beijing-Guangzhou railway. Its iconic pagoda-style towers make it a must-photograph spot.\n- **Second Wuhan Yangtze River Bridge (1995)**: A sleek cable-stayed bridge that set the standard for modern designs.\n- **Wuhan Tianxingzhou Yangtze River Bridge (2022)**: The newest addition, a six-lane highway bridge with a stunning illuminated night display.\n- **Yangsigang Yangtze River Bridge (2019)**: Once the world\'s longest steel suspension bridge (1,700-meter main span), this is a favorite for cycling and pedestrian walks.\n\n## More Than Just Crossings\n\nWuhan\'s bridges are not just functional—they are cultural landmarks. Locals and tourists alike gather at sunset to watch the bridges light up, creating a shimmering reflection on the Yangtze. The **Wuhan Yangtze River Bridge** has a pedestrian walkway where you can stroll from Hanyang to Wuchang, a 30-minute walk with panoramic river views. \n\nBridge-hopping has become a popular weekend activity. According to recent travel blogs, a \'bridge tour\' by ferry or bike along the riverbanks is a top recommendation for first-time visitors. The best vantage points include **Yellow Crane Tower** (overlooking the first bridge) and **Jiangtan Park** (for the skyline).\n\n## Cultural Symbolism\n\nIn local folklore, bridges represent connection and reunion—a theme echoed in Wuhan\'s identity as a meeting point of north and south, east and west. The character \'桥\' (bridge) appears in street names, parks, and even local snacks like \'bridge-shaped\' pastries sold near the river.\n\n## Practical Tips for Travelers\n\n- **Best time to visit**: Spring (March–May) and autumn (September–November) for clear skies and mild temperatures.\n- **Getting around**: Metro Line 5 and Line 8 cross the river via tunnels, but walking or cycling over the bridges is the real experience.\n- **Photography**: The bridges are most photogenic during blue hour (just after sunset), especially the Yangsigang Bridge with its color-changing LED lights.\n\nWuhan\'s bridge culture is a living museum of Chinese engineering and a testament to the city\'s resilience. Whether you\'re an architecture buff or a casual traveler, these spans over the Yangtze offer a unique lens into Hubei\'s past, present, and future.',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['wuhan', 'yangtze river', 'bridge culture', 'architecture', 'travel hubei', 'urban exploration', 'chinese engineering'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-01T06:40:22.966Z',
    readTime: 4,
  },
  {
    id: 'news-2026-07-01-08-gi9e',
    title: 'Mulan Mountain: Where Ancient Legends Inspire Modern Tourism in Hubei',
    summary: 'Discover the legendary birthplace of China’s iconic female warrior, Hua Mulan, and how this scenic mountain in Hubei is blending ancient folklore with sustainable tourism in 2026.',
    content: '## A Legendary Birthplace\n\nDeep in the northern reaches of Wuhan, Mulan Mountain (木兰山) has long been celebrated as the legendary birthplace of Hua Mulan, the fearless female warrior immortalized in Chinese ballads and global cinema. According to local lore, Mulan trained here in martial arts before disguising herself as a man to take her father’s place in the army. As of 2026, the mountain remains a living testament to her story, where ancient temples and stone pathways echo with tales of courage and filial piety.\n\n## Tourism Development: A New Chapter\n\nThis year, Mulan Mountain has seen a surge in tourism development aimed at preserving its cultural heritage while offering immersive experiences for international visitors. The latest reports highlight three key initiatives:\n\n- **The Mulan Cultural Trail**: A newly expanded 8-kilometer hiking path that passes through 12 historical sites, including the Mulan Temple and the General’s Rock, where visitors can scan QR codes for augmented reality reenactments of Mulan’s adventures.\n- **Eco-Lodge Village**: Opened in early 2026, a cluster of eco-friendly lodges near the base offers overnight stays with traditional Hubei cooking classes and night-time storytelling sessions by local elders.\n- **Seasonal Festivals**: The annual Mulan Cultural Festival, held each October, now features international folk dance troupes and a lantern parade, drawing over 50,000 visitors in 2025.\n\n## Nature and Spirituality\n\nBeyond the legend, Mulan Mountain is a haven for nature lovers. Its 78 peaks are cloaked in mist for much of the year, with ancient ginkgo and pine trees lining the trails. The mountaintop Mulan Temple, originally built during the Tang Dynasty (618–907 AD), remains an active site for Taoist and Buddhist worship. Visitors this spring can join a guided meditation session at dawn, followed by a vegetarian lunch sourced from local farms.\n\n## Getting There and Practical Tips\n\nMulan Mountain is just a 90-minute drive from Wuhan city center, with direct buses departing from Hankou Railway Station. The best visiting months are March to May (when azaleas bloom) and September to November (for crisp autumn air). English-language audio guides are now available at the main ticket office, and a new visa-free transit policy for Wuhan (up to 144 hours) makes it easy for international travelers to add Mulan to their Hubei itinerary.\n\n## A Living Legend\n\nAs tourism development continues, Mulan Mountain remains a place where history isn’t just told—it’s felt. Whether you’re tracing the footsteps of a warrior or simply soaking in the mountain’s serene beauty, this corner of Hubei offers a journey through time.',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['mulan mountain', 'hua mulan', 'wuhan tourism', 'hubei culture', 'ancient legends', 'hiking trails', 'sustainable tourism'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-01T06:40:35.624Z',
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
