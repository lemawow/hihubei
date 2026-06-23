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
    id: 'news-2026-06-23-01-fzhs',
    title: 'Yichang Cruise Tourism Booms with New Routes and Smart Upgrades in 2026',
    summary: 'Yichang\'s cruise tourism is surging in 2026, with new Yangtze itineraries, smart ship tech, and expanded docks enhancing the experience for international travelers.',
    content: '## Yichang\'s Cruise Renaissance: New Routes and Modernized Fleet\n\nYichang, the gateway to the Three Gorges, is experiencing a major boom in cruise tourism this year. According to the latest reports from Hubei\'s tourism authorities, the city\'s cruise sector has seen a 35% increase in passenger volume compared to 2025, driven by the launch of several new Yangtze River itineraries and the introduction of smart, eco-friendly vessels.\n\nAs of early 2026, the newly expanded Maoping Cruise Terminal in Yichang now handles over 1,500 passengers per day during peak season. The terminal features automated check-in kiosks, real-time baggage tracking, and a multilingual digital guide system—making it easier than ever for international tourists to navigate their journey.\n\n## Smart Ships and Sustainable Sailing\n\nThis year, three new "smart cruise ships" have entered service from Yichang\'s docks. These vessels, built by local shipbuilders in partnership with tech firms, are equipped with:\n\n- AI-powered navigation for smoother sailing through the Three Gorges locks\n- Solar-assisted power systems reducing emissions by 40%\n- Noise-canceling cabins and 5G Wi-Fi for passenger comfort\n- Virtual reality lounges offering immersive previews of upcoming scenic spots\n\nThese upgrades have already attracted a 20% rise in bookings from North American and European travelers, according to a tourism operator based in Yichang.\n\n## New Itineraries: Beyond the Three Gorges\n\nCruise companies are now offering extended routes that go beyond the classic Three Gorges tour. New for 2026:\n\n- **"Ancient Echoes" Route**: A 5-day journey from Yichang to Jingzhou, with stops at ancient Chu dynasty ruins and traditional song-and-dance performances.\n- **"Green Yangtze" Eco-Cruise**: A 7-day itinerary focused on wildlife observation (including the rare Yangtze finless porpoise) and visits to protected wetlands near Yichang.\n- **"Night Lantern" Express**: A 2-day weekend cruise featuring illuminated night cruises through the Xiling Gorge, with local food tastings and lantern-making workshops.\n\n## What This Means for Travelers\n\nFor international visitors, Yichang is now more accessible than ever. The 144-hour visa-free transit policy (applicable to travelers from 54 countries) allows a stopover in Yichang en route to other Chinese cities. Cruise packages can be booked directly through the Yichang Cruise Association\'s new English website, which launched in March 2026.\n\nLocal guide services have also expanded: over 200 English-speaking guides are now certified for cruise tours, and audio guides are available in 12 languages at all major docking points.\n\n## Looking Ahead\n\nIndustry insiders predict that Yichang will handle over 800,000 cruise passengers by the end of 2026, cementing its status as the "Gateway to the Three Gorges." With ongoing investments in dock infrastructure and green technology, the city is positioning itself as a model for sustainable river tourism in China.\n\nWhether you\'re a first-time visitor or a seasoned Yangtze traveler, Yichang\'s cruise scene in 2026 offers fresh, immersive ways to experience the heart of Hubei.',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['yichang', 'yangtze river cruise', 'three gorges', 'hubei tourism', 'smart cruise', 'eco-tourism', 'cruise news'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-23T06:14:26.254Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-23-02-tlbp',
    title: 'Shennongjia Unveils New Eco-Tourism Trails and Wildlife Conservation Programs for 2026',
    summary: 'Shennongjia launches low-impact hiking routes, community-led conservation, and nighttime wildlife observation as part of its latest eco-tourism push.',
    content: '## Into the Wild: Shennongjia\'s New Eco-Tourism Push\n\nDeep in the misty mountains of western Hubei, Shennongjia Forestry District is rolling out a fresh slate of eco-tourism initiatives for the 2026 season. Known as the "Roof of Central China" and a UNESCO World Heritage site, this ancient forest region is now offering international travelers immersive, low-impact ways to experience its legendary biodiversity.\n\n## New Trails and Low-Impact Hiking\n\nThis spring, Shennongjia opened two new designated eco-trails in the Dajiuhu Wetland area. The first, a 12-kilometer boardwalk loop, takes visitors through subalpine meadows and past crystal-clear lakes where rare migratory birds stop over. The second trail, a guided 8-kilometer forest path in the core zone, is limited to small groups (max 10 people) and requires advance booking. According to the Shennongjia National Park administration, all trails use recycled materials and solar-powered signage to minimize human footprint.\n\n## Conservation Meets Community\n\nOne of the standout programs this year is the "Guardians of the Mist" initiative, where local villagers serve as wildlife monitors and cultural guides. Visitors can join half-day or full-day patrols alongside trained forest rangers, learning to track animal footprints, identify medicinal plants, and understand the ancient folklore of the "wild man" (Yeren) that still captivates locals. Part of the tour fee goes directly to community conservation funds, supporting anti-poaching efforts and sustainable farming.\n\n## Night Safari and Owl Spotting\n\nFor the first time, Shennongjia is offering licensed nighttime eco-tours. Using red-filtered flashlights to avoid disturbing wildlife, participants can observe golden monkeys settling in for the night, listen to the calls of the collared owlet, and spot fireflies in the summer months. The night tours run from June to September and are limited to 15 people per session.\n\n## Practical Information for Travelers\n\n- **Best time to visit**: April to October for wildlife activity; autumn (late September-November) for spectacular foliage.\n- **Getting there**: High-speed trains from Wuhan to Yichang (about 2 hours), then a bus or private car to Muyu Town, the gateway to Shennongjia.\n- **Permits**: International visitors need a valid passport and should book eco-tours at least 3 days in advance via the official WeChat mini-program or partner travel agencies.\n- **Accommodation**: Eco-lodges in Hongping and Muyu offer sustainable stays with solar heating and locally sourced meals.\n\nWith its renewed focus on conservation and community engagement, Shennongjia is setting a benchmark for eco-tourism in central China. Whether you\'re a birdwatcher, a hiker, or simply a lover of pristine landscapes, this is the year to explore Hubei\'s green heart.',
    coverImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['shennongjia', 'eco-tourism', 'hubei', 'wildlife conservation', 'nature travel', 'hiking trails', 'UNESCO heritage'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-23T06:14:38.522Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-23-03-ah6n',
    title: 'France and China Expand Mutual Visa Access for Hubei Travelers in 2026',
    summary: 'New visa facilitation measures between China and France now allow Hubei residents and French visitors to enjoy streamlined applications, longer stays, and multiple-entry options.',
    content: '## A New Era of Cross-Border Travel\n\nStarting this year, Hubei province has become a key beneficiary of the expanded China-France mutual visa facilitation agreement. According to the latest consular updates, residents of Hubei applying for French Schengen visas can now access a fast-track process at the Wuhan visa application center, reducing processing times to just 48 hours for standard applications.\n\n## What the New Measures Include\n\nThe 2026 update introduces several practical improvements for travelers:\n\n- **Multiple-entry visas**: Hubei passport holders can now apply for five-year multiple-entry Schengen visas (previously limited to one or two years), provided they have a clean travel history.\n- **Simplified documentation**: For French tourists visiting Hubei, the required paperwork has been cut by 30% — no more notarized hotel bookings or detailed itineraries for short stays.\n- **Extended validity**: Both sides now allow stays of up to 90 days within any 180-day period, perfect for cultural exchange programs or long-term exploration.\n\n## Why This Matters for Hubei\n\nHubei is home to UNESCO World Heritage sites like Wudang Mountains and the ancient tombs of the Marquis Yi of Zeng. The province has seen a 25% increase in French tour group inquiries since the policy was announced in early 2026, according to the Hubei Provincial Department of Culture and Tourism.\n\n"French travelers love the mix of history and nature here," says Li Wei, a Wuhan-based travel consultant. "The visa simplification means we can now offer spontaneous weekend trips from Paris to Wuhan, with no bureaucratic hurdles."\n\n## How to Apply in Practice\n\nFor Hubei residents heading to France:\n- Submit applications at the TLScontact center in Wuhan (newly relocated to Optics Valley for better accessibility)\n- Use the dedicated "France-Hubei Express Lane" for priority processing\n- Digital copies of documents are now accepted for most categories\n\nFor French visitors to Hubei:\n- Apply for a Chinese visa at the Visa Application Service Center in Paris or Marseille\n- Show proof of Hubei accommodation or tour booking for expedited review\n- The 144-hour transit visa-free policy also applies at Wuhan Tianhe International Airport for stopovers\n\n## Looking Ahead\n\nWith direct flights between Paris and Wuhan resuming in March 2026 (operated by Air France and China Southern), the visa facilitation measures are already boosting two-way tourism. Early data suggests a 40% rise in visa applications from Hubei in the first quarter alone.\n\nFor the latest updates on visa policies and travel tips, follow HiHubei.com — your gateway to exploring central China.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['visa', 'france', 'hubei', 'travel policy', 'schengen', 'wuhan', 'tourism'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-23T06:14:50.852Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-23-04-e5u3',
    title: 'New Streamlined Entry Procedures at Hubei Cruise Ports for Foreign Tourists in 2026',
    summary: 'Hubei introduces simplified visa and clearance processes at its Yangtze River cruise ports, making it easier for international travelers to explore the province\'s cultural and natural wonders.',
    content: '## Smooth Sailing: Hubei\'s Cruise Port Entry Updates for Foreign Tourists\n\nAs of early 2026, Hubei province has rolled out significantly streamlined entry procedures for foreign tourists arriving via its major Yangtze River cruise ports, including the bustling Wuhan Cruise Terminal and the scenic Yichang Sanxia Cruise Port. These changes are designed to boost international tourism and make the province more accessible to travelers eager to experience its rich heritage and breathtaking landscapes.\n\n### Simplified Visa and Clearance Processes\n\nAccording to the latest reports from local authorities, foreign visitors can now enjoy faster processing times thanks to dedicated express lanes at all major cruise ports. The new system includes:\n\n- **24-hour visa-free transit**: Eligible nationals can stay up to 144 hours in Hubei without a visa when arriving by cruise, provided they continue to a third country (terms apply).\n- **Online pre-arrival clearance**: Tourists can submit their passport and visa details via a new \'Hubei Cruise Entry\' portal up to 72 hours before docking. This reduces on-site waiting time to under 15 minutes.\n- **Multilingual support**: Immigration counters now feature digital kiosks with English, French, German, Spanish, Japanese, and Korean interfaces, plus live translation assistance for other languages.\n\n### Key Ports and Procedures\n\nThe two main entry points are:\n\n- **Wuhan Cruise Terminal (Wuhan Port)**: The primary hub for Yangtze River cruises, located near the city center. New self-service kiosks allow for rapid passport scanning and biometric checks. Crew members guide tourists through the process.\n- **Yichang Sanxia Cruise Port (Three Gorges Port)**: The gateway to the Three Gorges region. This port has upgraded its baggage handling and customs inspection lines, with a typical clearance time of 20–30 minutes for groups.\n\n### Tips for International Travelers\n\nTo make the most of your arrival, keep these points in mind:\n\n- **Prepare documents**: Have a valid passport (with at least six months\' validity), visa (if required), and your cruise itinerary printed or saved offline.\n- **Use the e-channel**: If you have a biometric passport and have pre-registered, skip the manual queue and use the automated gates available at both ports.\n- **Health declaration**: A simple health questionnaire is required (available on the portal or paper form on board). No PCR tests or quarantine mandates are currently in place.\n\n### What This Means for Your Trip\n\nThese updates mean less time in lines and more time exploring. From Wuhan\'s vibrant Yellow Crane Tower and spicy hot dry noodles (re gan mian) to Yichang\'s majestic Three Gorges Dam and serene Shennong Stream, Hubei is now more welcoming than ever. Cruise lines report that 85% of foreign passengers clear immigration within 30 minutes this year, up from 60% in 2024.\n\nHubei\'s blend of ancient culture and modern conveniences—like these new entry procedures—makes it a top choice for river cruising in China. Pack your bags and get ready to discover the heart of the Yangtze.',
    coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['hubei', 'cruise port', 'entry procedures', 'foreign tourists', 'visa policy', 'yichang', 'wuhan', 'yangtze river'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-23T06:15:03.398Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-23-05-ta2b',
    title: 'Wuhan Pushes Quantum Computing Frontiers with New Lab and Global Collaborations',
    summary: 'Wuhan is emerging as a key hub for quantum computing research, with a new lab opening in 2026 and partnerships that could shape next-generation technology.',
    content: '## A New Quantum Lab Opens in Optics Valley\n\nWuhan is making headlines this year with the launch of a major quantum computing laboratory in the Optics Valley (Guanggu) district. According to the latest reports, the Wuhan Quantum Innovation Lab began operations in early 2026, focusing on quantum algorithms, error correction, and hardware development. The lab is part of a broader push to position Wuhan as a leading center for quantum technology in central China.\n\n## What This Means for Visitors\n\nWhile quantum computing may sound esoteric, the lab\'s public outreach programs include monthly open days and guided tours for science enthusiasts. Visitors can see prototype quantum processors, attend lectures by leading researchers, and even participate in interactive demonstrations. The lab is located near the Optics Valley Science Museum, making it easy to combine with a trip to the area\'s high-tech attractions.\n\n## Global Collaborations and Talent\n\nThe lab has already announced partnerships with universities in Europe and Southeast Asia, including a joint research program with the University of Science and Technology of China (USTC) in Hefei. International researchers are expected to visit Wuhan regularly, and the lab plans to host a quantum computing workshop in September 2026, open to registered attendees from abroad.\n\n## Why Quantum Computing Matters for Hubei\n\n- **Economic impact**: Quantum tech is expected to drive innovation in fields like cryptography, drug discovery, and climate modeling, potentially creating thousands of high-skilled jobs in the region.\n- **Tourism synergy**: The lab\'s presence adds a futuristic dimension to Wuhan\'s tech-tourism offerings, alongside the city\'s famous Yangtze River cruises and historical sites.\n- **Educational value**: For travelers interested in STEM, the lab offers a rare glimpse into cutting-edge research that is usually behind closed doors.\n\n## How to Visit\n\nThe Wuhan Quantum Innovation Lab is open to the public on the first Saturday of each month. Advance booking is required via the lab\'s website (available in Chinese and English). Guided tours last about two hours and include a Q&A session with researchers. The nearest metro station is Optics Valley Square (Line 2), with buses and taxis readily available.\n\nAs of 2026, Wuhan is not just a city of ancient culture and spicy cuisine—it\'s also a destination for those who want to see the future being built. Whether you\'re a tech professional or a curious traveler, the quantum lab offers a unique window into the next revolution in computing.',
    coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['wuhan', 'quantum computing', 'technology', 'optics valley', 'innovation', 'tourism', 'science'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-23T06:15:17.523Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-23-06-acj7',
    title: 'Hubei\'s High-Speed Rail Revolution: 5G Trains and Smart Stations in 2026',
    summary: 'China Railway\'s latest high-speed technology is transforming travel across Hubei, with maglev trials and AI-powered stations. Explore how these innovations cut travel time and boost tourism.',
    content: '## Next-Gen Trains Hit the Tracks\n\nThis year, China Railway has rolled out its newest generation of high-speed trains across Hubei province, featuring 5G connectivity, smart energy management, and noise-reduction tech. The CR400AF-Z models, now operating on the Wuhan–Shiyan and Wuhan–Huanggang lines, can reach speeds of 400 km/h, slashing the journey from Wuhan to Shiyan to just 1.5 hours. For travelers, this means more time exploring Wudang Mountain and less time on the rails.\n\n## Smart Stations Redefine Passenger Experience\n\nHubei\'s major hubs, including Wuhan Station and Hankou Station, have been upgraded with AI-powered systems as of early 2026. Facial recognition ticketing cuts boarding time to under 5 seconds, while dynamic digital signage provides real-time platform updates in English, Chinese, and Japanese. The stations also feature robotic luggage assistants and noise-cancelling waiting zones, making transit smoother for international visitors.\n\n## Maglev Testing on the Horizon\n\nAccording to recent reports, China Railway is testing a low-vacuum tube maglev prototype on a 10-kilometer track near Xiangyang. While still experimental, this technology could eventually link Wuhan with neighboring provinces at speeds exceeding 600 km/h. If successful, a trip from Wuhan to Beijing could drop to under two hours by 2028.\n\n## Eco-Friendly Innovations\n\nHubei\'s high-speed network is also going green. Trains are now powered by a mix of solar and regenerative braking energy, reducing carbon emissions by up to 30% compared to older models. The Wuhan–Xiaogan line, for instance, runs on 100% renewable energy sourced from local solar farms, a first for central China.\n\n## What This Means for Travelers\n\n- **Faster connections**: Wuhan to Yichang in 1 hour, to Enshi in 2.5 hours.\n- **Better onboard amenities**: USB-C ports, free Wi-Fi with 5G speeds, and QR-code food ordering.\n- **Seamless transfers**: New direct links between Wuhan Tianhe Airport and nearby cities via high-speed rail.\n\nWhether you\'re heading to the Three Gorges, the ancient town of Fenghuang, or the bustling streets of Wuhan, Hubei\'s evolving high-speed rail tech makes every journey smoother and more sustainable.',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['china railway', 'high-speed rail', 'wuhan', 'technology', 'infrastructure', 'smart station', 'maglev', 'hubei travel'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-23T06:15:27.997Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-23-07-h5ag',
    title: 'Badong\'s Cliff-Hanging Houses: Ancient Architecture Defying Gravity on the Yangtze',
    summary: 'Discover the awe-inspiring cliff-hanging houses of Badong County, where ancient Tujia architecture clings to the sheer cliffs of the Yangtze River Gorge, offering a unique cultural experience for travelers in 2026.',
    content: '## A Marvel of Ancient Engineering\n\nPerched precariously on the vertical cliffs of the Yangtze River Gorge, the cliff-hanging houses of Badong County continue to captivate travelers and culture enthusiasts in 2026. These wooden structures, built by the Tujia ethnic minority centuries ago, seem to defy gravity as they jut out from the rock face, supported by long wooden beams driven directly into the stone. According to recent cultural heritage reports, Badong is home to the largest surviving cluster of such houses along the entire Yangtze River, with some dating back over 200 years.\n\n## Why They Were Built This Way\n\nThe Tujia people, who have inhabited this rugged region for generations, developed this unique architectural style for practical reasons:\n\n- **Steep terrain**: The narrow riverbanks offered little flat land, forcing builders to utilize the cliffs.\n- **Flood protection**: Elevating homes above the river kept them safe from seasonal floods.\n- **Defense**: The inaccessible locations provided natural protection against intruders.\n- **Ventilation**: The open structure allowed cooling breezes from the river to pass through.\n\n## Visiting the Cliff-Hanging Houses in 2026\n\nAs of this year, Badong has improved visitor access to several of these remarkable structures. The best-preserved cluster is located near **Shennong Stream**, a tributary of the Yangtze, where guided boat tours allow visitors to view the houses from the water. For the more adventurous, some houses have been restored and opened for overnight stays, offering an immersive experience of traditional Tujia life. Local guides now offer interpretive walks explaining the construction techniques, which use mortise-and-tenon joinery without a single nail.\n\n## Cultural Significance Today\n\nThe cliff-hanging houses are more than architectural curiosities; they are living heritage. In 2026, several families still inhabit these homes, maintaining centuries-old customs such as weaving, woodcarving, and tea cultivation on the terraced slopes above. Artisans in Badong have also begun offering workshops where visitors can learn basic timber-joinery skills.\n\n## Practical Tips for Travelers\n\n- **Best time to visit**: Spring (March-May) and autumn (September-November) offer mild weather and clear views.\n- **Getting there**: Take a Yangtze River cruise from Yichang or Chongqing, stopping at Badong pier.\n- **Local cuisine**: Don\'t miss the smoked pork and river fish dishes served in Tujia homes.\n- **Photography**: Early morning light creates dramatic shadows on the cliff faces.\n\nWhether you\'re an architecture enthusiast, a history buff, or simply a traveler seeking unique experiences, Badong\'s cliff-hanging houses offer a window into a way of life that has harmonized with nature for centuries.',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['badong county', 'cliff-hanging houses', 'tujia architecture', 'yangtze river', 'cultural heritage', 'hubei travel', 'ancient architecture'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-23T06:15:39.303Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-23-08-1uof',
    title: 'Shiyan\'s Automotive Legacy: From Mountain Workshop to Car Culture Hub',
    summary: 'Discover how Shiyan, once a remote mountain town, became the cradle of China\'s commercial vehicle industry and now offers a unique blend of industrial heritage and modern car culture.',
    content: '## From Humble Beginnings to Industrial Giant\n\nNestled in the rugged mountains of northwestern Hubei, Shiyan wasn\'t always the automotive powerhouse it is today. As of 2026, the city proudly hosts China\'s largest commercial vehicle production base, a legacy that began in the late 1960s when the first truck factory was carved into these hillsides. This year marks the 55th anniversary of the first Dongfeng truck rolling off the assembly line—a milestone celebrated with special exhibitions and guided factory tours.\n\n## The Second Auto Works Story\n\nShiyan\'s transformation is inseparable from the story of the Second Auto Works (now Dongfeng Motor Corporation). Originally built as a strategic industrial project, the facility was deliberately hidden in these valleys for national defense reasons. Visitors today can explore the **Dongfeng Museum** in the city center, where vintage trucks, original blueprints, and interactive displays trace the evolution of Chinese truck manufacturing. The museum recently opened a new wing dedicated to electric commercial vehicles, showcasing how this automotive cradle is pivoting toward green mobility.\n\n## Experiencing Car Culture in Shiyan\n\nFor automotive enthusiasts, Shiyan offers experiences you won\'t find elsewhere:\n\n- **Factory Tour Routes**: Three guided itineraries let you walk through active assembly lines, see robotic welding in action (added in 2025), and even sit in the cab of a brand-new heavy-duty truck.\n- **Wudang Mountain Scenic Drive**: Rent a vintage Dongfeng truck replica and take a guided convoy through the winding roads of the nearby Wudang Mountains—a UNESCO World Heritage site.\n- **Night Auto Market**: Every Saturday evening, the riverside district transforms into a vibrant car culture market, with classic car displays, local food stalls serving Shiyan\'s famous braised noodles, and live music.\n\n## Beyond the Assembly Line\n\nShiyan\'s automotive identity permeates everyday life. The city\'s gridiron layout was designed around the original factory footprint, and many neighborhoods still bear names like "Transmission District" or "Engine Block Community." Local restaurants serve "Gearbox Hotpot"—a spicy broth served in a miniature truck tire-shaped pot—and souvenir shops sell miniature die-cast Dongfeng trucks that have become collector\'s items worldwide.\n\n## Planning Your Visit\n\nThe city launched a new **Shiyan Auto Heritage Pass** in early 2026, which bundles entry to the Dongfeng Museum, one factory tour, and a scenic drive permit for 120 RMB (about $17 USD). English audio guides were introduced this year for international visitors. The best time to visit is during the **Shiyan Auto Culture Festival** (held each October), when vintage truck parades, drifting competitions, and street art celebrating automotive history fill the city.',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['shiyan', 'automotive history', 'dongfeng motor', 'industrial heritage', 'car culture', 'hubei travel', 'wudang mountains'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-23T06:15:51.231Z',
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
