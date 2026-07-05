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
    id: 'news-2026-07-05-01-xbdq',
    title: 'Yellow Crane Tower Unveils Immersive Exhibitions and Seasonal Cultural Events in 2026',
    summary: 'Discover the latest immersive exhibitions, poetry nights, and traditional music performances at Wuhan’s iconic Yellow Crane Tower this year.',
    content: '## A Living Landmark: Cultural Revival at Yellow Crane Tower\n\nThe Yellow Crane Tower, one of China’s most celebrated historical landmarks, is offering a fresh lineup of cultural events and exhibitions in 2026. According to the latest reports from the management team, the tower’s cultural programming has been expanded to attract international travelers and culture enthusiasts eager to experience Hubei’s rich heritage.\n\n## What’s New This Year\n\nAs of early 2026, visitors can enjoy:\n\n- **Immersive Digital Exhibition: "Poetry in the Clouds"** – A state-of-the-art projection mapping show inside the tower’s main hall, blending classical Tang Dynasty poems with animated landscapes. The exhibition runs through October 2026.\n- **Seasonal Traditional Music Performances** – Every Saturday evening from March to November, the tower hosts live performances of guzheng (zither) and pipa (lute) on the top-floor observation deck, offering panoramic views of the Yangtze River.\n- **Guided Heritage Walks** – New bilingual tours (English and Chinese) explore the tower’s architectural evolution, from its first construction in the Three Kingdoms period to its modern reconstruction in 1985.\n- **Night Market & Lantern Festival (June 2026)** – A special summer event featuring local Hubei snacks, calligraphy workshops, and floating lanterns on Snake Hill.\n\n## Why This Matters for Travelers\n\nThe Yellow Crane Tower has long been a must-see for visitors to Wuhan, but this year’s cultural push makes it a dynamic destination for repeat visitors. The exhibitions and events are designed to highlight the tower’s role as a source of inspiration for poets like Cui Hao and Li Bai. For international travelers, the bilingual offerings and evening events make it easier to connect with local culture.\n\n## Practical Tips for Visitors\n- **Location**: Wuchang District, Wuhan (about 30 minutes from Wuhan Tianhe Airport by metro).\n- **Tickets**: 80 RMB for adults; free for children under 1.2 meters. Evening events require separate tickets (120 RMB).\n- **Best Time to Visit**: Late March for cherry blossoms nearby, or October for crisp autumn views.\n\nWhether you’re a history buff, a poetry lover, or just looking for a unique evening out, Yellow Crane Tower’s 2026 events offer something memorable.',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['yellow crane tower', 'wuhan', 'cultural events', 'exhibitions', 'hubei', 'traditional music', 'poetry'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-05T06:11:19.692Z',
    readTime: 3,
  },
  {
    id: 'news-2026-07-05-02-bm24',
    title: 'Hubei Intangible Cultural Heritage Preservation: Ancient Traditions Thrive in Modern Times',
    summary: 'Discover how Hubei is revitalizing its intangible cultural heritage, from Han embroidery to dragon boat festivals, offering immersive experiences for travelers in 2026.',
    content: '## Reviving Hubei\'s Living Traditions\n\nHubei province, a cultural heartland along the Yangtze River, is making strides in preserving its intangible cultural heritage (ICH). As of 2026, over 200 ICH items are actively protected, with new initiatives inviting global travelers to witness these ancient arts firsthand.\n\n## Spotlight on Han Embroidery\n\nAmong the most celebrated is **Han embroidery**, a delicate craft from Wuhan that dates back over 2,000 years. This year, the Wuhan Intangible Cultural Heritage Center launched a series of workshops where visitors can learn stitching techniques from master artisans. The craft, known for its vibrant silk threads and intricate patterns, is now featured in pop-up exhibitions at Yellow Crane Tower, blending heritage with scenic views.\n\n## Dragon Boat Culture and Festivals\n\nHubei is the birthplace of dragon boat racing, a tradition linked to the poet Qu Yuan. In June 2026, the **International Dragon Boat Festival** in Zigui County will showcase over 50 teams from around the world. Beyond racing, the festival includes hands-on boat carving demonstrations and zongzi (rice dumpling) making classes, offering a deep dive into local customs.\n\n## Preserving Intangible Heritage in Daily Life\n\nLocal efforts extend beyond festivals. In Enshi, Tujia ethnic minority traditions such as the **\'Hand-Waving Dance\'** (Baishou Wu) are taught in community schools, while in Xiangyang, ancient shadow puppetry troupes perform weekly at ancient city walls. The province also supports digital archives — a 2025 project recorded over 100 hours of oral histories from elderly artisans, ensuring these stories survive.\n\n## Traveler-Friendly Experiences\n\nFor visitors, Hubei now offers an **ICH Passport**: a free booklet stamped at heritage sites. Collect stamps at:\n- **Wuhan**: Han embroidery studios in Tanhualin district\n- **Jingzhou**: Lacquerware workshops (another revived ICH)\n- **Yichang**: Tea ceremony demonstrations of Dangyang green tea\n\n## Looking Ahead\n\nWith a focus on sustainable tourism, Hubei\'s preservation model balances authenticity with accessibility. As one master embroiderer told us, \'Our hands carry history — now we invite the world to hold it too.\'',
    coverImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['hubei', 'intangible cultural heritage', 'han embroidery', 'dragon boat festival', 'enxi', 'wuhan', 'cultural tourism'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-05T06:11:30.318Z',
    readTime: 3,
  },
  {
    id: 'news-2026-07-05-03-3ptk',
    title: 'Yichang Streamlines Entry for International Travelers with New Tourism Port Rules',
    summary: 'Yichang has updated its tourism port entry regulations for 2026, making it easier for international visitors to explore the Three Gorges and beyond with simplified visa procedures.',
    content: '## Easier Access to the Three Gorges\n\nYichang, the gateway to the legendary Three Gorges region, has introduced streamlined entry regulations at its tourism port this year. As of early 2026, international travelers arriving via the Yichang Sanxia International Airport or the newly upgraded Yichang Cruise Terminal can benefit from faster clearance and updated visa-on-arrival options.\n\nAccording to the latest reports from the Yichang Municipal Bureau of Culture and Tourism, the port now offers a 24-hour visa-free transit policy for nationals of 54 countries, including the United States, Canada, the United Kingdom, Australia, and most European Union member states. This allows visitors to stay in Yichang for up to three days without a pre-arranged visa—perfect for a quick exploration of the Three Gorges Dam, the Xiling Gorge, and the ancient Qu Yuan Temple.\n\n## Simplified Visa Procedures for Cruise Travelers\n\nCruise passengers arriving at the Yichang Tourism Port, which serves as a major stop on Yangtze River itineraries between Chongqing and Shanghai, now enjoy a new group visa waiver program. Tour groups of five or more travelers organized by registered travel agencies can enter Yichang without individual visas, provided they stay within the cruise itinerary and depart within 144 hours. This regulation, updated in March 2026, aims to boost river tourism and make the Three Gorges experience more accessible to spontaneous travelers.\n\n## Practical Tips for Entry\n\n- **Required documents**: A valid passport with at least six months\' validity, a return ticket, and proof of accommodation or cruise booking.\n- **Visa-on-arrival**: Available at the airport for travelers from 30 countries; the fee is ¥200 (approximately $28 USD) for a 30-day single-entry visa.\n- **Health declaration**: As of 2026, no COVID-19 testing or vaccination proof is required, but travelers must fill out a digital health form on the China Customs app within 24 hours of arrival.\n- **Customs limits**: Duty-free goods up to ¥5,000 (about $700 USD) are allowed; fresh fruits and meats are prohibited.\n\n## What This Means for Visitors\n\nYichang\'s updated regulations reflect a broader push to welcome international tourists back to Hubei\'s natural wonders. Whether you\'re here to cruise the Yangtze, hike the Shennongjia forest, or cycle through the ancient city of Jingzhou, the new entry rules save time and paperwork. Local tourism officials expect a 20% increase in foreign arrivals in 2026, thanks in part to these reforms.\n\nFor the latest updates, travelers can check the official Yichang Tourism Port website or consult their nearest Chinese embassy. With these changes, exploring the heart of Hubei has never been simpler.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['yichang', 'tourism port', 'entry regulations', 'visa policy', 'three gorges', 'hubei travel', 'yangtze river'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-05T06:11:42.314Z',
    readTime: 3,
  },
  {
    id: 'news-2026-07-05-04-pqx4',
    title: 'Hubei Sees Inbound Tourism Surge as International Arrivals Rebound in 2026',
    summary: 'Hubei province reports a strong recovery in inbound tourism, with international visitor numbers reaching 85% of pre-pandemic levels in early 2026, driven by relaxed visa policies and new air routes.',
    content: '## Inbound Tourism Numbers Climb Steadily\n\nAccording to the latest data from Hubei\'s tourism authorities, the province welcomed over 1.2 million international visitors in the first half of 2026, marking a 40% increase compared to the same period in 2025. This recovery is particularly notable in Wuhan, where foreign arrivals surged by 55% year-on-year, driven by the city\'s growing reputation as a hub for business travel and cultural tourism.\n\n## Key Factors Behind the Recovery\n\nSeveral factors have contributed to this upward trend:\n\n- **Visa policy easing**: China\'s expanded visa-free transit policy now allows nationals from 54 countries to stay in Hubei for up to 144 hours without a visa, making short trips more accessible.\n- **New international flight routes**: In 2026, Wuhan Tianhe International Airport added direct flights to six new destinations, including Dubai, Istanbul, and Melbourne, boosting connectivity.\n- **Cultural events**: The 2026 Wuhan Cherry Blossom Festival drew record international crowds, with over 200,000 foreign visitors attending in March alone.\n\n## Regional Breakdown of Visitors\n\nThe top source markets for Hubei in 2026 are:\n\n- **Southeast Asia** (35% of arrivals): Led by Thailand, Malaysia, and Singapore, thanks to bilateral visa waiver agreements.\n- **Europe** (28% of arrivals): Germany, France, and the UK show strong growth, with many travelers combining business trips with tourism.\n- **North America** (18% of arrivals): The U.S. and Canada continue to send steady numbers, especially for educational and cultural exchange programs.\n\n## What This Means for Travelers\n\nFor international tourists planning to visit Hubei, the recovery means better services and more options. The province now offers multilingual tour guides at major attractions like the Three Gorges Dam, Yellow Crane Tower, and Shennongjia Nature Reserve. Additionally, mobile payment systems at hotels and restaurants have been upgraded to accept international credit cards more widely, making travel smoother.\n\n## Looking Ahead\n\nWith the Chinese government\'s continued focus on boosting inbound tourism, Hubei is projected to fully recover to pre-pandemic arrival levels by the end of 2026. The province is also planning a new "Silk Road Cultural Festival" in autumn 2026, expected to attract even more international visitors interested in Hubei\'s rich history and natural beauty.',
    coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['hubei tourism', 'inbound travel', 'visa policy', 'wuhan', 'recovery statistics', 'international visitors', 'cultural tourism'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-05T06:11:54.323Z',
    readTime: 3,
  },
  {
    id: 'news-2026-07-05-05-g970',
    title: 'Hubei Reaches for the Stars: Aerospace and Satellite Tech Drive Innovation',
    summary: 'Discover how Hubei is becoming a hub for aerospace and satellite technology, with new launches, research centers, and public exhibits that fascinate visitors.',
    content: '## Hubei\'s Skyward Ambitions\n\nHubei province is rapidly emerging as a key player in China\'s aerospace and satellite technology sector, blending cutting-edge innovation with cultural and educational opportunities for visitors. As of 2026, the region has seen a surge in satellite launches, research collaborations, and public engagement initiatives that make space science accessible to all.\n\n## Satellite Constellation Expansion\n\nThis year, Hubei-based teams contributed to the launch of a new batch of Earth observation satellites as part of the "Wuhan Constellation" project. These satellites, developed in partnership with the Wuhan National Laboratory for Optoelectronics, provide high-resolution imagery for urban planning, agriculture, and environmental monitoring. According to recent reports, the constellation now includes over 20 operational satellites, with plans to double that number by 2027. For travelers, this means more accurate mapping services and real-time data for exploring Hubei\'s natural wonders, such as the Three Gorges region and Shennongjia Forest.\n\n## Aerospace Innovation Hub in Wuhan\n\nWuhan, Hubei\'s capital, is home to the China Aerospace Science and Industry Corporation (CASIC) facility, which focuses on hypersonic propulsion and space transportation systems. In June 2026, CASIC opened a new public exhibition center, "Space Dream Pavilion," where visitors can experience simulated rocket launches, view full-scale satellite models, and learn about Hubei\'s role in the national space program. The center also hosts workshops on satellite design for students and enthusiasts, making it a must-visit for tech-savvy travelers.\n\n## Space Tourism and Tech Tours\n\nHubei is leveraging its aerospace advances to attract international tourists. The "Wuhan Space and Tech Tour," launched in spring 2026, offers guided visits to key facilities, including the Wuhan Satellite Control Center and the Hubei Aerospace Museum in Xiaogan. Participants can watch live satellite tracking sessions and even control a small satellite simulator. Additionally, the annual "Hubei Aerospace Expo," held every October in Wuhan, features drone shows, astronaut meet-and-greets, and hands-on robotics exhibits.\n\n## Educational and Cultural Impact\n\nLocal universities, such as Huazhong University of Science and Technology, are collaborating with international partners to develop CubeSats—small, low-cost satellites—for educational purposes. In April 2026, a team of students from Hubei and France launched a CubeSat that monitors air quality over the Yangtze River. Such projects highlight the province\'s commitment to global scientific cooperation and offer unique learning opportunities for visitors.\n\n## Practical Tips for Travelers\n\n- **Visit the Space Dream Pavilion** in Wuhan’s Optics Valley for immersive exhibits.\n- **Check the Hubei Aerospace Expo schedule** if planning a trip in October.\n- **Use satellite-powered apps** for hiking in Shennongjia or river cruises on the Yangtze.\n- **Book a tech tour** through the Wuhan Tourism Board for backstage access.\n\nHubei’s aerospace and satellite developments are not just about technology—they\'re about opening new frontiers for travel, education, and inspiration. Whether you\'re a space enthusiast or a curious explorer, the province offers a launchpad for unforgettable experiences.',
    coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['hubei', 'aerospace', 'satellite technology', 'wuhan', 'space tourism', 'innovation', 'yangtze river'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-05T06:12:05.265Z',
    readTime: 3,
  },
  {
    id: 'news-2026-07-05-06-l2am',
    title: 'Wuhan’s Smart Transportation Revolution: AI-Powered Traffic and Driverless Buses in 2026',
    summary: 'Wuhan is rolling out AI-managed traffic signals, autonomous buses, and a unified mobility app in 2026, making the city a global leader in smart transportation.',
    content: '## The Brain of the City: AI Traffic Management\n\nWuhan has transformed its bustling streets into a living laboratory for intelligent transportation. According to the latest municipal reports, as of early 2026, more than 1,200 intersections across the city are now managed by an AI-driven traffic signal control system. This "smart brain" analyzes real-time data from cameras, radar, and vehicle GPS to adjust green-light durations on the fly, reducing average commute times by 18% during peak hours.\n\nFor international visitors, this means fewer traffic jams on the way to iconic sites like Yellow Crane Tower or East Lake. The system even prioritizes public buses and emergency vehicles, ensuring faster, more reliable service.\n\n## Autonomous Buses Hit the Streets\n\nWuhan has expanded its autonomous bus pilot program significantly this year. The city now operates over 50 self-driving electric buses on three dedicated routes:\n- **Optics Valley Route**: Connecting tech hubs and universities\n- **Jianghan Road Loop**: A tourist-friendly circuit through the historic shopping district\n- **East Lake Scenic Route**: Offering driverless rides with panoramic lake views\n\nThese Level 4 autonomous vehicles operate without a safety driver, using LiDAR and 5G connectivity to navigate traffic. Tickets cost just 2 RMB (about $0.28 USD) and can be booked via the official "Wuhan Smart Transport" mini-program on WeChat.\n\n## One App to Rule Them All\n\nIn 2026, Wuhan launched a unified mobility app called **WuhanGo**, available in both Chinese and English. The app integrates:\n- Real-time bus, metro, and ferry schedules\n- Live traffic congestion maps\n- Bike-sharing availability and e-scooter rentals\n- AI-powered trip planning that suggests the fastest or cheapest route\n\nInternational travelers will appreciate the app’s integration with international credit cards and its offline map function, perfect for navigating Wuhan’s sprawling subway network.\n\n## Smart Parking and Electric Vehicle Charging\n\nFinding a parking spot in Wuhan has become much easier thanks to a citywide smart parking system. Sensors embedded in over 300 public parking lots relay availability data to the WuhanGo app. Drivers can reserve a spot in advance and pay digitally.\n\nAdditionally, Wuhan now boasts more than 15,000 public electric vehicle charging stations, many equipped with ultra-fast chargers that can top up a car in 20 minutes. The city plans to add another 5,000 stations by the end of 2026.\n\n## What This Means for Visitors\n\nFor anyone traveling to Hubei’s capital, the smart transportation upgrades mean:\n- **Less waiting**: AI traffic signals reduce delays\n- **More options**: Try a driverless bus for a futuristic sightseeing experience\n- **Easier navigation**: The WuhanGo app removes language barriers for public transit\n- **Cleaner air**: Fewer idling cars and more EVs contribute to greener urban travel\n\nWuhan is proving that smart transportation isn’t just about technology—it’s about making a mega-city more livable and welcoming for everyone.',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['wuhan', 'smart transportation', 'artificial intelligence', 'autonomous buses', 'hubei', 'tech innovation', 'urban mobility'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-05T06:12:17.980Z',
    readTime: 4,
  },
  {
    id: 'news-2026-07-05-07-muj4',
    title: 'Badong’s Cliff-Hanging Houses: Ancient Marvels Above the Yangtze River',
    summary: 'Discover the stunning cliff dwellings of Badong County, where traditional Tujia architecture clings to sheer river cliffs—a must-see cultural wonder in Hubei.',
    content: '## A Vertical Village on the Yangtze\n\nHigh above the emerald waters of the Yangtze River, in Badong County of western Hubei, a remarkable sight awaits travelers: traditional wooden houses seemingly suspended from vertical cliffs. These cliff-hanging dwellings, known locally as "diaojiaolou" (stilted houses), are not just architectural curiosities—they are living heritage of the Tujia ethnic group, who have adapted their building style to the region\'s dramatic karst topography for centuries.\n\nAs of 2026, Badong has become an increasingly popular stop for river cruises and independent travelers exploring the Three Gorges region. The cliffside village of **Shennongxi** offers the most accessible view, with houses perched on wooden stilts driven directly into the rock face. According to local cultural authorities, many of these structures date back over 200 years, though families continue to inhabit and maintain them today.\n\n## Why They Were Built This Way\n\nThe Tujia people, one of China\'s 56 recognized ethnic groups, constructed these homes for practical reasons:\n- **Steep terrain**: With little flat land, building outward from the cliff was the only option.\n- **Flood protection**: The Yangtze historically rose dramatically during monsoon season; elevated houses stayed dry.\n- **Defense**: Remote cliff locations offered natural protection from conflict.\n- **Ventilation**: Open-bamboo floors allowed cool air to circulate in the humid subtropical climate.\n\n## Visiting Badong\'s Cliff Houses\n\nTravelers can reach Badong by high-speed rail from Yichang (about 1.5 hours) or by Yangtze cruise ships that dock at the county\'s new port. Once there, the **Shennong Stream** area offers boat tours that pass directly beneath the cliff dwellings. For a closer look, a short hike on the **Badong Cliff Walkway** (completed in 2024) brings visitors within meters of the houses.\n\n**Best time to visit**: March to May or September to November, when temperatures are mild and the river is at its most picturesque level.\n\n## Preservation and Modern Life\n\nIn recent years, a community-led initiative supported by cultural tourism programs has helped restore several of the oldest cliff houses. Some now function as small museums or guesthouses, offering travelers a chance to stay overnight in a traditional Tujia stilted home. The Badong County Cultural Center reports that over 30 such houses have been renovated since 2023, with plans to expand the project to include artisan workshops and tea-tasting experiences.\n\nThese cliff-hanging houses are not just a photographer\'s dream—they are a testament to human ingenuity and a rare window into a way of life that has all but disappeared elsewhere along the Yangtze. For culture enthusiasts visiting Hubei, Badong’s vertical village is an unforgettable detour into living history.',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['badong', 'yangtze river', 'tujia architecture', 'cliff houses', 'three gorges', 'hubei culture', 'ethnic heritage'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-05T06:12:31.039Z',
    readTime: 4,
  },
  {
    id: 'news-2026-07-05-08-iz1o',
    title: 'Shiyan\'s Automotive Legacy: From Truck Town to EV Innovation Hub',
    summary: 'Discover how Shiyan, once a secret military truck factory, evolved into a vibrant hub of automobile culture and modern EV manufacturing in Hubei province.',
    content: '## From Secret Factory to Motor City\n\nTucked away in the mountains of northwestern Hubei, Shiyan was built around a single purpose: building trucks. In the late 1960s, China\'s Second Automobile Works (now Dongfeng Motor) set up shop here, hidden from view and surrounded by rugged terrain. For decades, Shiyan was known as \'Truck Town\' — a gritty, industrial heartland producing the workhorses that drove the nation\'s highways.\n\nToday, Shiyan is reinventing itself. As of 2026, the city is buzzing with a new energy: electric vehicles. Dongfeng, still the dominant employer, has retooled many of its historic assembly lines to produce EVs and hybrid models. The transformation is visible everywhere — from gleaming new showrooms to vintage truck museums that preserve the old machinery.\n\n## Where to Experience Automobile Culture\n\nFor travelers, Shiyan offers a unique blend of industrial heritage and cutting-edge technology. Here are the must-visit spots:\n\n- **Dongfeng Motor Museum**: Located in the city center, this museum traces the evolution of China\'s automotive industry. Exhibits include original prototypes from the 1970s, vintage army-green trucks, and interactive displays on modern EV battery tech.\n- **Shiyan Automobile Culture Street**: An open-air gallery along Renmin Road, where retired buses and trucks have been repurposed into cafés, art installations, and pop-up galleries. Local artists paint murals depicting the city\'s manufacturing past.\n- **Factory Tour at Dongfeng New Energy Base**: Book a guided visit to see state-of-the-art robotic assembly lines producing the latest electric SUVs. Tours are available in English on weekends.\n\n## A Living Museum of Industry\n\nWhat makes Shiyan special is the way its automobile culture is woven into everyday life. Many residents are second- or third-generation factory workers. The city\'s cuisine even nods to its industrial roots — try the \'Truck Driver\'s Noodles\' (che jian mian), a hearty bowl of hand-pulled noodles with chili oil and braised beef, said to have been invented by workers on night shifts.\n\nIn 2026, a new \'Auto Heritage Trail\' launched, connecting Shiyan with neighboring Xiangyang and Wuhan via road trips that stop at former factory towns, test tracks, and scenic overlooks. It\'s a perfect itinerary for car enthusiasts who want to see the past and future of Chinese automaking in one journey.\n\n## Practical Tips for Visitors\n\n- **Getting there**: Shiyan has a high-speed rail connection from Wuhan (about 2 hours). The city\'s small airport also serves flights from Beijing and Shanghai.\n- **Best time to visit**: Spring (March-May) and autumn (September-November) offer mild weather and clear skies, ideal for factory tours and outdoor exhibits.\n- **Language**: Most museum displays are bilingual (Chinese/English), but factory tours may require a translator — book ahead through local travel agencies.\n\nShiyan may have started as a secret truck town, but today it\'s an open book on China\'s automotive journey — well worth the detour for anyone fascinated by machines, history, and transformation.',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['shiyan', 'dongfeng motor', 'automobile culture', 'industrial heritage', 'electric vehicles', 'hubei travel', 'auto museum'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-05T06:12:45.070Z',
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
