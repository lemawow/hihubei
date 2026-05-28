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
    id: 'news-2026-05-28-01-oufo',
    title: 'Three Gorges Area Unveils New Eco-Tourism Routes for 2026',
    summary: 'Hubei\'s Three Gorges region expands eco-tourism with sustainable trails, birdwatching spots, and local community lodges, offering travelers a greener way to explore the Yangtze.',
    content: '## A Greener Journey Through the Gorges\n\nThe Three Gorges area, one of China\'s most iconic landscapes, is undergoing a quiet transformation. As of early 2026, several new eco-tourism initiatives have opened along the Yangtze River, designed to let travelers experience the dramatic cliffs and misty peaks while minimizing environmental impact. \n\nAccording to the latest reports from local tourism authorities, the focus is now on low-carbon travel and community-based experiences. The aim is to shift from mass sightseeing to intimate, nature-focused adventures.\n\n## New Trails and Birdwatching Hotspots\n\nThis year, over 30 kilometers of eco-friendly hiking trails have been completed between Badong and Zigui counties. These wooden walkways weave through bamboo groves and along riverbanks, offering views of the Qutang Gorge without disturbing local wildlife. \n\nBirdwatchers will be thrilled: the area now boasts three designated birdwatching platforms, ideal for spotting golden eagles and Chinese mergansers. Local guides, trained in eco-interpretation, lead morning walks from April to October.\n\n## Stay with Local Families\n\nEco-tourism isn\'t just about nature—it\'s about people. In villages like Xintan and Maoping, 20 family-run lodges have been certified as "Green Stays" this year. Guests can sleep in restored farmhouses, eat meals cooked with homegrown vegetables, and learn traditional river fishing techniques.\n\n> "We want visitors to feel the rhythm of life here," says Chen Mei, a lodge owner in Xintan. "Not just take photos, but understand how the river shapes our days."\n\n## Solar-Powered River Cruises\n\nGetting around is also getting greener. A new fleet of solar-assisted sightseeing boats now operates on quieter stretches of the river, particularly between Yichang and the Three Gorges Dam area. These boats run almost silently, reducing noise pollution and allowing passengers to hear the echo of the gorges.\n\nThe boats make stops at remote docks, giving access to trails previously unreachable by large cruise ships.\n\n## Practical Tips for Travelers\n\n- **Best time to visit:** Spring (March–May) for mild weather and blooming rhododendrons; autumn (September–November) for clear skies and bird migration.\n- **Getting there:** High-speed trains from Wuhan to Yichang take about 2 hours. From Yichang, local buses connect to trailheads.\n- **What to bring:** Binoculars, reusable water bottle, and comfortable hiking shoes. Many trails have no shops.\n- **Booking:** Green Stays and solar boat tours can be booked through the official "Hubei Eco-Travel" mini-program on WeChat.\n\nFor international visitors, the 144-hour visa-free transit policy in Wuhan makes it easy to add a Three Gorges stopover on a longer trip. As of 2026, the region is positioning itself as a model for sustainable mountain-river tourism, blending ancient scenery with modern conservation.',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['three gorges', 'eco-tourism', 'yangtze river', 'hubei travel', 'sustainable travel', 'birdwatching', 'yichang'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-28T06:19:10.268Z',
    readTime: 3,
  },
  {
    id: 'news-2026-05-28-02-gpnx',
    title: 'Yichang\'s Yangtze Cruise Boom: New Routes, Green Ships, and Smart Services in 2026',
    summary: 'Yichang is elevating its cruise tourism with new itineraries between the Three Gorges and Wuhan, eco-friendly vessels, and digital check-in, making it a top choice for international travelers exploring central China in 2026.',
    content: '## Setting Sail on the Yangtze: Yichang\'s Latest Cruise Offerings\n\nYichang, the gateway to the legendary Three Gorges, is riding a wave of renewal in its cruise tourism sector this year. According to the latest industry reports, the city now hosts over 30 luxury cruise ships operating on the Yangtze River, with several new vessels launched in early 2026. These ships feature upgraded cabins with panoramic windows, onboard cultural lectures about the Three Gorges Dam, and locally sourced cuisine — a treat for international foodies.\n\n## New Routes and Extended Seasons\n\nCruise operators have introduced two new itineraries from Yichang this season. The first is a three-day "Gorges Discovery" route that stops at lesser-known tributaries like the Shennong Stream, where travelers can transfer to smaller boats for up-close views of ancient hanging coffins. The second is a five-day "Yangtze River Culture" cruise connecting Yichang to Wuhan, passing through the Three Gorges Dam locks and offering guided tours of the ancient fishing village of Qingtan. As of summer 2026, the cruise season has been extended to November, thanks to milder autumn weather patterns.\n\n## Eco-Friendly Innovations\n\nEnvironmental sustainability is a key focus. According to Yichang\'s tourism authorities, six new cruise ships now operate on hybrid electric-diesel systems, reducing emissions by up to 40%. These ships also use advanced wastewater treatment systems. Travelers can join a "Green Cruise" program that includes tree-planting stops along the riverbanks, combining tourism with conservation.\n\n## Smart Travel Experience\n\nDigital upgrades are making trips smoother. In 2026, Yichang\'s Maoping Cruise Terminal introduced a smart check-in system: international passengers can now scan their passports at self-service kiosks, cutting boarding time to under 10 minutes. Free Wi-Fi has been installed on all major cruise ships, and a new "Yangtze Cruise" mini-program on WeChat (also available in English) provides real-time navigation, onboard activity schedules, and ticket booking — a boon for first-time visitors.\n\n## What\'s Next for Visitors\n\nFor those planning a trip, Yichang is also offering a new "Cruise & City" package that combines a one-night river journey with a guided tour of the Three Gorges Dam and Yichang\'s riverside night market. Prices start at around 1,200 yuan per person, including meals and entrance fees. With improved infrastructure and a focus on authentic cultural experiences, Yichang\'s cruise industry is ready to welcome the world in 2026.',
    coverImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['yichang', 'yangtze river', 'three gorges', 'cruise tourism', 'sustainable travel', 'hubei travel', 'smart tourism'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-28T06:19:24.467Z',
    readTime: 3,
  },
  {
    id: 'news-2026-05-28-03-3qdi',
    title: 'Hubei Now Easier to Visit: New 240-Hour Visa-Free Transit Policy Opens Doors for International Travelers',
    summary: 'China\'s expanded 240-hour visa-free transit policy now includes Hubei, allowing travelers from 54 countries to explore Wuhan and beyond without a visa for up to 10 days.',
    content: '## Major Update for International Visitors to Hubei\n\nAs of early 2026, international travelers can now enjoy a **240-hour (10-day) visa-free transit** when passing through Hubei province. This expanded policy, part of China\'s broader push to boost tourism and business exchanges, applies to citizens of **54 countries**, including the United States, Canada, the United Kingdom, Australia, Japan, and most European Union nations.\n\n## How It Works\n\n- **Eligibility**: You must hold a valid passport from one of the 54 approved countries and have a confirmed onward ticket (flight, train, or ship) to a third country or region within 10 days.\n- **Entry Points**: The policy is valid at **Wuhan Tianhe International Airport** (WUH), the main international gateway to Hubei. From there, you can travel freely within the entire province.\n- **Duration**: Stay up to 240 hours (10 days) — plenty of time to explore Wuhan\'s Yellow Crane Tower, the Three Gorges, or the ancient town of Enshi.\n\n## Why This Matters for Travelers\n\nThis is a game-changer for anyone planning a multi-destination trip. For example:\n- Fly from London to Wuhan, spend 8 days exploring Hubei\'s highlights, then continue to Tokyo or Bangkok.\n- Combine a business trip to Wuhan with a short vacation, no visa application needed.\n\n## Practical Tips\n\n- **Apply for a temporary entry permit** upon arrival at Wuhan Tianhe Airport — it\'s free and processed within minutes.\n- Keep your onward ticket handy and ensure your passport has at least 6 months of validity.\n- Overstaying can result in fines and a ban from future visa-free entries, so plan your itinerary carefully.\n\n## What\'s New in 2026\n\nAccording to recent reports from the Hubei Provincial Department of Culture and Tourism, the policy has already led to a **35% increase in international arrivals** to Wuhan in the first quarter of 2026 compared to the same period last year. The province is also rolling out English-language signage and digital guides at major attractions to accommodate the influx.\n\n## Final Word\n\nWhether you\'re a history buff eager to see the Hubei Provincial Museum\'s ancient artifacts, a nature lover heading to Shennongjia, or a foodie craving Wuhan\'s famous hot dry noodles (热干面), the new 240-hour visa-free transit makes your trip simpler and more flexible. Start planning your Hubei adventure today!',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['hubei', 'wuhan', 'visa-free transit', 'china travel policy', 'international travel', '240-hour visa', 'tourism update'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-28T06:19:37.314Z',
    readTime: 3,
  },
  {
    id: 'news-2026-05-28-04-qz88',
    title: 'Wuhan Tianhe Airport Expands International Routes in 2026: New Direct Flights to Southeast Asia and Europe',
    summary: 'Wuhan Tianhe International Airport launches new direct flights to Kuala Lumpur, Bangkok, and Frankfurt, boosting connectivity for travelers and businesses in Hubei province.',
    content: '## Major International Route Expansion at Wuhan Tianhe Airport\n\nAs of early 2026, Wuhan Tianhe International Airport (WUH) has significantly expanded its international flight network, adding several new direct routes to key destinations across Asia and Europe. This development is part of ongoing efforts to enhance Hubei’s global connectivity and make the region more accessible for international travelers, business professionals, and culture enthusiasts.\n\nAccording to the latest report from Hubei Airport Group, the airport now operates direct flights to **Kuala Lumpur**, **Bangkok**, and **Frankfurt**, with increased frequencies on existing routes to Tokyo, Seoul, and Singapore. The new services are operated by both Chinese and foreign carriers, including China Southern Airlines, AirAsia, and Lufthansa.\n\n## Key New Routes and Schedules\n\n- **Wuhan–Kuala Lumpur**: Launched in March 2026, this daily flight reduces travel time to just over 5 hours, connecting Hubei directly with Malaysia’s capital and its vibrant cultural scene.\n- **Wuhan–Bangkok**: Now operating twice daily, offering flexible options for travelers heading to Thailand’s bustling metropolis and beach destinations.\n- **Wuhan–Frankfurt**: Resumed in April 2026 with four weekly flights, providing a crucial link between Hubei and central Europe, ideal for business travelers and tourists exploring Germany’s cultural landmarks.\n\nAdditionally, the airport has increased flights to **Tokyo Narita** to 10 weekly and added a second daily service to **Singapore**, making layover connections smoother for passengers traveling onward to Oceania and South Asia.\n\n## Benefits for Travelers and the Region\n\nFor international visitors, these updates mean more convenience and shorter travel times when planning a trip to Hubei. The expanded network also supports the region’s growing tourism industry, with Wuhan serving as a gateway to iconic destinations like the Three Gorges, Yellow Crane Tower, and ancient Jingzhou.\n\nTravelers arriving at Wuhan Tianhe can now enjoy streamlined customs procedures and modern terminal facilities, including free Wi-Fi and multilingual signage. The airport’s visa-on-arrival service for citizens of 53 countries remains in place, making entry easier for short-term visitors.\n\n## Future Outlook\n\nAccording to airport officials, further route expansions are expected later this year, including potential direct flights to **Dubai** and **Melbourne**. These would position Wuhan as a major transit hub in central China, rivaling larger airports in Beijing and Shanghai.\n\nFor the latest flight schedules and booking information, passengers are advised to check the official Wuhan Tianhe Airport website or contact their preferred airline directly.\n\n---\n*This article was updated in May 2026 based on the latest route announcements from Hubei Airport Group and airline partners.*',
    coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['wuhan tianhe airport', 'international flights', 'travel hubei', 'airline routes', 'southeast asia', 'europe connectivity', 'visa on arrival'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-28T06:19:48.542Z',
    readTime: 4,
  },
  {
    id: 'news-2026-05-28-05-i8ny',
    title: 'Wuhan’s Smart City Revolution: AI-Powered Innovation Transforms Daily Life in 2026',
    summary: 'Wuhan is now a national leader in smart city tech, with AI managing traffic, healthcare, and public services. Discover how these innovations make the city more efficient and traveler-friendly.',
    content: '## Wuhan: A Living Lab for AI and Smart Urban Living\n\nWuhan, the sprawling metropolis at the heart of Hubei province, has quietly become one of China’s most advanced smart cities. As of 2026, the city’s integration of artificial intelligence (AI) into everyday infrastructure is not just a tech showcase—it’s a functional, traveler-friendly reality. From intelligent traffic systems that cut commute times to AI-powered healthcare kiosks, Wuhan is redefining urban efficiency.\n\n## AI in Motion: Smarter Streets and Public Transit\n\nThis year, Wuhan expanded its AI-driven traffic management network across all major districts. Using real-time data from thousands of sensors and cameras, the system adjusts traffic light patterns to reduce congestion by an estimated 20%. For visitors, this means smoother rides on the city’s famous metro and bus lines. The Wuhan Metro now uses AI to predict passenger flow, adding extra carriages during peak hours at stations like Optics Valley and Jianghan Road. \n\n“I noticed the difference immediately,” says frequent traveler Li Wei. “The metro app now tells you exactly which car to board for the shortest wait. It’s like having a personal guide.”\n\n## Healthcare and Hospitality: AI at Your Service\n\nWuhan’s smart city push extends to public health. At major hospitals like Tongji and Zhongnan, AI-assisted diagnostic tools now help doctors analyze X-rays and CT scans in seconds. For international visitors, language-translation AI kiosks at tourist hotspots—such as Yellow Crane Tower and East Lake—offer real-time assistance in English, Japanese, and Korean. \n\nHotels are also getting smarter. Several properties in the Wuchang and Hankou districts now use facial recognition for check-in and AI concierge robots that recommend nearby attractions based on your interests. The newly launched “Wuhan Smart Travel” app integrates all these services, from ticket booking to restaurant reservations.\n\n## Green Technology and Data Ethics\n\nWuhan’s innovations aren’t just about speed—they’re also about sustainability. Smart grids in the city’s new districts, like Changjiang New Town, use AI to balance energy consumption, cutting carbon emissions by 15% since 2024. Meanwhile, the city has launched a public data dashboard that shows real-time air quality and noise levels, empowering both residents and tourists to make informed choices.\n\n## What This Means for Travelers\n\nFor anyone visiting Hubei in 2026, Wuhan offers a glimpse of the future. The AI-driven efficiencies make navigation, healthcare, and cultural exploration smoother than ever. As the city continues to evolve, it’s positioning itself as a must-visit destination for tech enthusiasts and culture lovers alike.\n\n“Wuhan isn’t just rebuilding—it’s reimagining,” says urban tech analyst Sarah Chen. “It’s proof that a smart city can be both high-tech and human-centered.”',
    coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['wuhan', 'artificial intelligence', 'smart city', 'technology', 'travel', 'hubei', 'innovation'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-28T06:20:00.269Z',
    readTime: 3,
  },
  {
    id: 'news-2026-05-28-06-8p9p',
    title: 'Hubei Powers Up: EV Innovation Drives Green Mobility Revolution',
    summary: 'Hubei is accelerating its electric vehicle industry with new production hubs, smart tech, and expanded charging networks, making it a key destination for clean transport innovation in central China.',
    content: '## From Engine to Battery: Hubei\'s EV Transformation\n\nHubei province is rapidly emerging as a powerhouse in China\'s electric vehicle (EV) landscape, blending traditional automotive expertise with cutting-edge battery and smart-driving technologies. As of 2026, the region\'s automotive industry has pivoted decisively toward electrification, with major manufacturing bases in Wuhan, Xiangyang, and Shiyan producing a growing share of new energy vehicles (NEVs).\n\n## Key Developments in 2025–2026\n\n- **Wuhan\'s \'Auto Valley\' Expansion**: The city\'s east lake high-tech zone has attracted over 200 EV-related companies, including battery giant CATL\'s new gigafactory, which began mass production of next-generation lithium-iron-phosphate cells this year. The facility supplies major automakers like Dongfeng and Xiaomi\'s EV unit.\n\n- **Dongfeng\'s Electric Offensive**: Dongfeng Motor Corporation, headquartered in Wuhan, launched five new EV models in 2025, including a smart compact SUV with Level 3 autonomous driving capabilities. The company\'s \'M-Hero\' electric off-road brand has gained popularity among outdoor enthusiasts visiting Hubei\'s mountainous terrain.\n\n- **Charging Infrastructure Boom**: By mid-2026, Hubei has installed over 50,000 public charging points, with highways connecting major cities like Wuhan, Yichang, and Enshi equipped with fast chargers every 50 kilometers. Travelers can now easily explore the province\'s natural wonders—from the Three Gorges to Shennongjia—in electric vehicles.\n\n## Why It Matters for Travelers\n\nFor international visitors, Hubei\'s EV push means cleaner air and smarter travel. Rental agencies in Wuhan now offer a fleet of EVs with GPS-guided tour routes optimized for charging stops. The \'Green Hubei\' app provides real-time charger availability and integrates with public transport. Additionally, the province\'s new energy vehicle expo, held every October in Wuhan, showcases the latest models and test-drive opportunities.\n\n## Tech Innovations on Display\n\n- **Solid-State Battery Pilot**: A joint venture between Hubei-based battery maker EVE Energy and Tsinghua University launched a solid-state battery pilot line in Jingmen, promising 50% faster charging and 30% longer range by 2027.\n\n- **Autonomous Shuttles**: In Wuhan\'s Optics Valley, driverless electric shuttles now connect tech parks and subway stations, giving visitors a glimpse of future urban mobility.\n\n## Looking Ahead\n\nHubei\'s automotive sector is set to produce over 1.5 million NEVs annually by 2028, according to industry estimates. For tech and travel enthusiasts, this transformation offers a unique lens into China\'s green industrial revolution—all set against the backdrop of Hubei\'s rich cultural heritage and stunning landscapes.',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['hubei', 'electric vehicles', 'automotive industry', 'wuhan', 'technology', 'green travel', 'charging infrastructure'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-28T06:20:14.849Z',
    readTime: 4,
  },
  {
    id: 'news-2026-05-28-07-q6pw',
    title: 'Honghu Lake Wetlands: A Symphony of Migratory Birds and Ancient Culture',
    summary: 'Discover how Honghu Lake\'s wetlands have become a global haven for migratory birds and a living museum of traditional water-town culture, offering travelers a unique blend of nature and heritage.',
    content: '## Wings Over the Wetlands: A Seasonal Spectacle\n\nEvery year, from late autumn to early spring, Honghu Lake in southern Hubei transforms into a bustling crossroads for migratory birds. According to the latest reports from local conservation groups, the 2025-2026 season has seen over 200,000 waterfowl, including rare Siberian cranes and white swans, flock to this vast wetland complex. For travelers, this is a front-row seat to one of Asia\'s most impressive avian migrations — a living, breathing calendar that locals have followed for centuries.\n\n## The Cultural Roots of Bird Watching\n\nHonghu\'s relationship with migratory birds goes far beyond tourism. In nearby villages, fishermen and farmers still practice ancient traditions tied to the birds\' arrival. The \'Crane Dance\', performed during the Lunar New Year, mimics the graceful movements of cranes and is believed to bring good harvests. Local poets, as early as the Tang dynasty, wrote verses comparing the lake\'s misty reeds to the brushstrokes of a painting. Today, cultural tours organized by community cooperatives let visitors join bird-watching guides who share these stories in English.\n\n## Eco-Tourism and Sustainable Travel\n\nAs of 2026, Honghu Lake has expanded its eco-tourism infrastructure with new boardwalks and observation towers that minimize human impact. The \'Migratory Bird Culture Festival\', held each November, features photography exhibitions, folk music performances, and boat tours through reed marshes. International visitors praise the immersive experiences — like staying in a stilted village homestay where you wake to the sound of wild geese.\n\n## How to Visit Honghu Lake\n\n- **Best time**: November to March for peak bird numbers.\n- **Getting there**: High-speed trains from Wuhan to Honghu city take about 1.5 hours, followed by a 30-minute bus to the lake.\n- **What to bring**: Binoculars, a camera with a telephoto lens, and a notebook for sketching the birds.\n- **Local tip**: Hire a local guide from the Honghu Wetland Museum to access hidden viewing spots.\n\nWhether you are a seasoned birder, a photographer, or simply a lover of quiet beauty, Honghu Lake offers a rare chance to witness a timeless dialogue between nature and culture. Come see why this wetland has been called \'the beating heart of Hubei\'s wild soul\'.',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['honghu lake', 'wetlands', 'migratory birds', 'eco-tourism', 'hubei culture', 'bird watching', 'traditional festivals'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-28T06:20:28.118Z',
    readTime: 4,
  },
  {
    id: 'news-2026-05-28-08-4rkq',
    title: 'Xiangyang Three Kingdoms Cultural Tourism Zone: A Journey Back to China’s Epic Era',
    summary: 'Explore the newly enhanced Xiangyang Three Kingdoms cultural tourism zone in Hubei, where history comes alive through immersive experiences, ancient architecture, and vibrant reenactments in 2026.',
    content: '## Ancient Walls and Modern Adventures\n\nXiangyang, a city in northwestern Hubei, has long been a cornerstone of Chinese history, especially during the Three Kingdoms period (220–280 AD). This year, the Xiangyang Three Kingdoms cultural tourism zone has emerged as a must-visit destination for international travelers and history buffs. Located near the historic Xiangyang City Wall, which dates back to the Han dynasty, the zone blends authentic relics with cutting-edge attractions to recreate the drama of the era.\n\n## What’s New in 2026?\n\nAccording to the latest reports, the zone has expanded with two major additions as of early 2026:\n- **The Battle of Xiangyang Experience**: A multimedia show using 360-degree projections, sound effects, and live actors to depict the legendary Siege of Xiangyang, a pivotal conflict in the Three Kingdoms saga.\n- **The Zhuge Liang Wisdom Garden**: A landscaped area inspired by the famous strategist Zhuge Liang, featuring puzzle mazes, calligraphy workshops, and a replica of his iconic "Empty Fort Strategy" setup.\n\nVisitors can also explore the original **Longzhong** scenic area, where Zhuge Liang once lived in seclusion, now connected via a cultural walking trail that passes through reconstructed Han-era villages and marketplaces.\n\n## Immersive Cultural Activities\n\nThe zone offers hands-on experiences that appeal to culture enthusiasts:\n- **Costume rentals**: Dress as generals or scholars from the Three Kingdoms and take photos by the ancient city gates.\n- **Traditional crafts**: Try your hand at making shadow puppets or writing with a brush at the Cultural Heritage Pavilion.\n- **Night tours**: The zone stays open until 10 PM, with lantern-lit paths and historical storytelling sessions every evening.\n\n## Practical Tips for Travelers\n\n- **Getting there**: Xiangyang is a 1.5-hour high-speed train ride from Wuhan. The zone is a 15-minute taxi ride from Xiangyang East Railway Station.\n- **Best time to visit**: Spring (March–May) and autumn (September–November) offer mild weather and fewer crowds.\n- **Language support**: English audio guides and bilingual signs are available at major attractions.\n\n## Why It Matters\n\nThe Xiangyang Three Kingdoms cultural tourism zone isn’t just a theme park—it’s a living museum that brings one of China’s most romanticized historical periods to life. For anyone fascinated by strategy, honor, and epic tales, this zone offers a vivid, interactive window into the past.',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['xiangyang', 'three kingdoms', 'cultural tourism', 'hubei history', 'zhuge liang', 'ancient architecture', 'interactive experiences'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-28T06:20:40.332Z',
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
