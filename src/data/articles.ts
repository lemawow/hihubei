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
    id: 'news-2026-06-14-01-hpbl',
    title: 'Three Gorges Area Emerges as Eco-Tourism Powerhouse with New Trails and Sustainable Stays',
    summary: 'New eco-friendly hiking routes, carbon-neutral cruises, and community-run lodges are transforming the Three Gorges region into a top destination for sustainable travel in 2026.',
    content: '## Green Trails and Giant Pandas: A New Era for the Three Gorges\n\nThe Three Gorges area—long famous for its dramatic cliffs and Yangtze River cruises—is undergoing a remarkable green transformation. As of early 2026, the region has unveiled a network of eco-tourism trails that allow visitors to explore the lush, mountainous terrain on foot, far from the tourist crowds. The “Gorges Green Loop” is the centerpiece: a 120-kilometer path connecting Shennongjia, Badong, and Xiling Gorge, winding through cloud forests, karst peaks, and newly protected panda habitats.\n\n## Sustainable Cruising and Zero-Waste Villages\n\nRiver cruises, the traditional way to experience the gorges, are also getting an eco-upgrade. Several major operators have introduced hybrid-electric vessels that reduce noise and emissions by 60%. Meanwhile, in the Xiling Gorge area, local villages like Sandouping have launched zero-waste guesthouses. Travelers can stay in restored farmhouses, eat farm-to-table meals, and join guided foraging walks with local rangers. “We want visitors to feel the power of the river without leaving a trace,” says a community guide in Zigui County.\n\n## What Travelers Can Expect in 2026\n\n- **New hiking seasons**: The Gorges Green Loop is open year-round, but spring (March–May) and autumn (September–November) offer the best weather and wildflower blooms.\n- **Wildlife viewing**: The Shennongjia section now has dedicated viewing platforms for golden snub-nosed monkeys and clouded leopards.\n- **Carbon offset programs**: River cruise tickets include an optional carbon offset fee that funds reforestation along the Yangtze tributaries.\n- **Local craft workshops**: In Badong, visitors can learn traditional bamboo weaving and tea-processing from Miao and Tujia ethnic minority families.\n\n## How to Plan Your Eco-Trip\n\nThe Three Gorges area is easily reached from Yichang (high-speed rail from Wuhan in under 2 hours). For the full eco-experience, book a 5-day package that combines a hybrid cruise with two nights in a community lodge. English-speaking guides are available through the official Hubei Eco-Tourism platform. As of 2026, the region aims to welcome 2 million eco-conscious travelers annually, offering a rare blend of dramatic scenery and low-impact adventure.\n\nWhether you’re a seasoned hiker or a slow traveler seeking authentic cultural connections, the Three Gorges eco-tourism developments promise a journey that’s both epic and responsible.',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['three gorges', 'eco-tourism', 'yangtze river', 'shennongjia', 'hiking trails', 'sustainable travel', 'hubei'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-14T06:48:12.239Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-14-02-53zo',
    title: 'Yichang Cruise Tourism Booms with New Routes and Smart Upgrades in 2026',
    summary: 'Yichang\'s cruise industry is surging with new Yangtze itineraries, smart ship tech, and enhanced international services, making it a top gateway for river tourism.',
    content: '## Record-Breaking Season on the Yangtze\n\nYichang, the iconic gateway to the Three Gorges, is experiencing a cruise tourism renaissance in 2026. According to the latest reports from local tourism operators, the city’s ports have welcomed over 1.2 million passengers on Yangtze River cruises in the first half of this year alone—a 35% increase compared to the same period in 2025. This surge is driven by new international routes and upgraded onboard experiences.\n\n## New Smart Cruise Ships Debut\n\nThis spring, two next-generation cruise ships, the *Yangtze Discovery* and *Gorge Harmony*, began operations from Yichang’s Three Gorges Cruise Center. These vessels feature AI-powered navigation for smoother sailing through the locks, plus smart cabins with voice-controlled lighting and panoramic windows. Each ship offers 200 luxury suites, a rooftop infinity pool, and interactive cultural workshops where passengers can learn Hubei-style paper-cutting and tea ceremony.\n\n## Expanded Itineraries for International Travelers\n\nCruise operators have introduced three new multi-day itineraries in 2026:\n- **Yichang to Chongqing (5 days)**: Highlighting the Three Gorges, Shennong Stream, and Fengdu Ghost City.\n- **Yichang to Wuhan (3 days)**: A cultural route stopping at Jingzhou Ancient City and the Yellow Crane Tower.\n- **Yichang to Shanghai (10 days)**: A grand eastbound journey covering all major Yangtze ports, now offered with English-speaking guides and halal/Kosher meal options.\n\nThese routes are particularly popular with European and Southeast Asian travelers, who appreciate the all-inclusive packages that cover shore excursions, onboard entertainment, and luggage handling.\n\n## Visa-Free Transit Extended\n\nTo boost international cruise tourism, China’s 144-hour visa-free transit policy now applies to Yichang Sanxia Airport for passengers arriving from 54 countries. Cruise lines have partnered with the airport to offer seamless “air-to-cruise” transfers, allowing travelers to start their river adventure within hours of landing.\n\n## Eco-Friendly Initiatives\n\nYichang has also launched a “Green Cruise” certification program this year. All cruise ships docking at the port must use shore-side electricity instead of diesel generators, reducing emissions by 40%. Passengers can join tree-planting excursions along the riverbanks as part of a new carbon-offset program.\n\n## What’s Next?\n\nLocal industry insiders predict that by late 2026, Yichang will handle over 3 million cruise passengers annually. With new themed cruises—including a photography-focused voyage in autumn and a Lunar New Year celebration cruise—Yichang is solidifying its status as the heart of Yangtze river tourism.\n\nFor travelers seeking an immersive blend of nature, history, and modern comfort, Yichang’s cruise scene has never been more inviting.',
    coverImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['yichang', 'yangtze river', 'cruise tourism', 'three gorges', 'smart ships', 'visa-free transit', 'hubei travel'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-14T06:48:23.367Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-14-03-grme',
    title: 'China-France Visa Facilitation Opens New Doors for Hubei Travelers in 2026',
    summary: 'New mutual visa policies between China and France make it easier for Hubei residents to visit France and for French tourists to explore Hubei, boosting cultural exchange and travel.',
    content: '## Easier Travel Between Hubei and France\n\nGreat news for travelers and culture enthusiasts! As of early 2026, China and France have implemented a mutual visa facilitation agreement that significantly simplifies travel procedures. For residents of Hubei province, this means faster visa processing, reduced paperwork, and longer validity periods for multiple-entry visas to France. French citizens, in turn, enjoy streamlined access to explore Hubei’s rich heritage.\n\nAccording to the latest reports from the Wuhan Municipal Foreign Affairs Office, Hubei residents can now apply for French visas with a simplified checklist — no need for extensive financial proofs or invitation letters for short-term tourism. Processing times have been cut to just 48 hours for standard applications submitted through the France-Visa Centre in Wuhan.\n\n## Key Benefits for Hubei Travelers\n\n- **Fast-track processing**: Visas for tourism, family visits, or business are processed within two working days.\n- **Longer validity**: Multiple-entry visas now valid for up to five years, allowing frequent trips without reapplication.\n- **Fewer documents**: No need for hotel bookings or flight itineraries at the time of application; a basic travel plan suffices.\n\nFor French tourists, the reciprocal policy means visa-free entry for up to 15 days for groups organized by approved travel agencies in Hubei, making it easier to discover destinations like the Three Gorges, Wudang Mountains, and the Yellow Crane Tower.\n\n## Boosting Cultural and Economic Ties\n\nThis visa facilitation is part of a broader push to strengthen people-to-people exchanges. Hubei has long been a cultural bridge between China and France — Wuhan is home to one of China’s largest French-speaking communities, and the province hosts annual France-Hubei cultural festivals. The new policy is expected to increase two-way tourist traffic by 30% in 2026, according to tourism analysts.\n\nFrench travelers are particularly drawn to Hubei’s UNESCO World Heritage sites, such as the ancient Wudang Mountains and the Shennongjia forest area. Meanwhile, Hubei residents are flocking to France for wine tours in Bordeaux, art exhibitions in Paris, and lavender fields in Provence.\n\n## Practical Tips for Applying\n\nIf you’re a Hubei resident planning a trip to France:\n- Visit the France-Visa Centre in Wuhan (address: 568 Jianshe Avenue, Jianghan District) for biometrics and application submission.\n- Apply at least two weeks before your intended departure, though rush service is available.\n- Check the official website of the French Consulate in Wuhan for the latest form updates.\n\nFor French visitors heading to Hubei, contact your local China Travel Service or any authorized agency to arrange a group tour under the new visa-waiver program.\n\n## What’s Next?\n\nThis visa policy is set to evolve further — discussions are underway to extend the validity to 10 years and include more categories like student exchanges. For now, Hubei and France are closer than ever, inviting travelers to explore, connect, and create unforgettable memories.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['visa policy', 'china-france', 'hubei-travel', 'wuhan', 'france-visa-centre', 'cultural-exchange', 'tourism-update'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-14T06:48:34.572Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-14-04-wxj7',
    title: 'New Streamlined Entry Procedures for Foreign Tourists at Hubei Cruise Ports',
    summary: 'Hubei\'s major cruise ports now offer faster visa-free transit and simplified customs clearance for international travelers, making Yangtze River cruising more accessible than ever.',
    content: '## Smoother Sailing for International Visitors\n\nAs of early 2026, foreign tourists arriving at Hubei\'s cruise ports—including the newly upgraded **Wuhan Port** and **Yichang Port** (the gateway to the Three Gorges)—can enjoy significantly simplified entry procedures. The changes are designed to make Yangtze River cruising more convenient for global travelers.\n\n## Key Updates for Cruise Passengers\n\n- **24-Hour Visa-Free Transit**: All foreign nationals holding valid passports and onward tickets (to a third country or region) can now enjoy 24-hour visa-free transit at Hubei cruise ports. This applies to passengers on international cruise itineraries that include a stop in Hubei. For those wanting to explore longer, a **144-Hour Visa-Free Transit** is available for citizens of 54 eligible countries, allowing a six-day stay in Wuhan and surrounding cities.\n\n- **Simplified Customs Clearance**: New biometric e-gates have been installed at both Wuhan and Yichang ports. Cruise passengers simply scan their passport and have their fingerprint taken—no separate entry card required. The entire process takes under 10 minutes per person.\n\n- **Group Visa on Arrival**: Tour groups of 5 or more travelers arriving via cruise can now apply for a **Group Visa on Arrival** at the port. This must be arranged in advance through a licensed travel agency, but it eliminates the need for individual visa applications.\n\n## Practical Tips for Travelers\n\n- **Documents Required**: Ensure your passport is valid for at least 6 months from the date of entry. Have your cruise ticket and hotel booking confirmation printed or easily accessible on your phone.\n- **Best Ports for First-Time Visitors**: **Yichang Port** is the most popular entry point for Three Gorges cruises, while **Wuhan Port** serves as the main hub for city tours and connections to high-speed rail.\n- **Language Assistance**: English-speaking guides and translation apps are available at port information desks. Download a translation app like Pleco before your trip.\n\n## Why This Matters for Travelers\n\nHubei is the heart of Yangtze River cruising. The new procedures mean less time in lines and more time exploring the **Three Gorges**, **Shennongjia**, and historic sites like the **Yellow Crane Tower**. Cruise lines have already reported a 30% increase in international bookings since these changes took effect this year.\n\nWhether you\'re a seasoned cruiser or a first-time visitor to China, Hubei\'s cruise ports now offer one of the most welcoming entry experiences along the Yangtze.',
    coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['hubei', 'cruise port', 'visa policy', 'yangtze river', 'wuhan', 'yichang', 'travel tips'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-14T06:48:45.742Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-14-05-tikd',
    title: 'Wuhan’s Bridge Empire: Engineering Marvels Spanning the Yangtze River',
    summary: 'Discover how Wuhan has become a global leader in bridge engineering, with over a dozen Yangtze River crossings showcasing cutting-edge design and construction.',
    content: '## A City of Bridges\n\nWuhan, often called the ‘City of Bridges,’ is home to more than a dozen Yangtze River crossings—an unparalleled concentration of bridge engineering anywhere in the world. As of 2026, the city boasts 14 bridges spanning the mighty Yangtze, with two more under construction. These structures are not just transportation links; they are architectural landmarks that define Wuhan’s skyline and showcase China’s engineering prowess.\n\n## Milestone Achievements\n\n### The First of Its Kind\n\nThe Wuhan Yangtze River Bridge, completed in 1957, was the first bridge ever built across the Yangtze. This double-deck road-and-rail structure remains a vital artery, carrying both vehicles and trains. Its pioneering design set the stage for modern bridge building in China.\n\n### Record-Breaking Spans\n\n- **Wuhan Erqi Yangtze River Bridge** (2011): A cable-stayed bridge with a main span of 616 meters, one of the longest in the world at the time of completion. Its distinctive ‘two masts’ design symbolizes Wuhan’s resilience.\n- **Wuhan Yangsigang Yangtze River Bridge** (2019): A suspension bridge with a main span of 1,700 meters—the longest in the world for a single-deck road bridge. Its sleek, modern lines make it a favorite for photographers.\n- **Shuangliu Yangtze River Bridge** (2024): The latest addition, featuring a hybrid cable-stayed and suspension system that allows for a 1,200-meter main span while reducing material use by 20%.\n\n## Engineering Innovations\n\nWuhan’s bridges are built to withstand extreme conditions. Recent projects use:\n\n- **High-performance concrete** that resists corrosion from the humid river environment.\n- **Earthquake-resistant bearings** that can absorb tremors up to magnitude 8 on the Richter scale.\n- **Smart monitoring systems** that track structural health in real-time, alerting engineers to potential issues before they become problems.\n\n## Visitor Experience\n\nFor travelers, these bridges offer more than just a way across the river. The **Wuhan Yangtze River Bridge** has a pedestrian walkway with panoramic views of the Yellow Crane Tower and the river. The **Yangsigang Bridge** features a glass-bottomed observation deck—perfect for thrill-seekers. Night cruises pass beneath the illuminated arches, providing a spectacular perspective on the city’s engineering achievements.\n\n## Future Plans\n\nAccording to the latest municipal reports, Wuhan plans to complete two additional bridges by 2028, including a ‘smart bridge’ with integrated solar panels and wireless charging lanes for electric vehicles. This continued innovation solidifies Wuhan’s reputation as a global hub for bridge engineering.\n\nWhether you’re an engineering enthusiast or a casual traveler, Wuhan’s bridges offer an unforgettable glimpse into human ingenuity.',
    coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['wuhan', 'yangtze river', 'bridge engineering', 'infrastructure', 'technology', 'hubei travel', 'architecture'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-14T06:48:55.880Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-14-06-9y8y',
    title: 'Scan, Explore, Experience: Hubei’s Smart Travel Revolution Transforms Tourism in 2026',
    summary: 'From AI-guided tours at ancient sites to seamless digital check-ins across the province, Hubei is rolling out cutting-edge smart travel tech that makes exploring easier and more immersive than ever.',
    content: '## A New Era for Travelers in Hubei\n\nImagine standing before the Yellow Crane Tower in Wuhan, pointing your phone at the ancient structure, and instantly seeing a 3D reconstruction of how it looked during the Tang Dynasty. This is now a reality in Hubei, thanks to the province\'s ambitious push into digital tourism and smart travel technology. As of early 2026, over 30 major scenic spots across Hubei—including the Wudang Mountains, Shennongjia, and the Three Gorges—have integrated AI-powered guide systems, facial recognition entry, and real-time crowd management tools.\n\n## AI-Powered Guides and Augmented Reality\n\nOne of the most popular innovations is the "Smart Hubei" mini-program, available on WeChat and other platforms. Travelers can scan QR codes at attractions to access multilingual AI guides that offer historical context, suggest optimal walking routes, and even overlay augmented reality (AR) scenes onto real-world views. At the Hubei Provincial Museum, for example, visitors can point their phones at the famed Sword of Goujian and watch an AR animation of its forging process. According to the latest reports, these AR features have boosted visitor engagement by more than 40% since their launch last year.\n\n## Seamless Connectivity and Digital Payments\n\nFor international travelers, Hubei has streamlined the digital experience. Free public Wi-Fi now covers all major tourist hubs, including Wuhan Railway Station, Tianhe International Airport, and the East Lake Greenway. The province has also partnered with Alipay and WeChat Pay to offer instant, no-registration payment options for foreign credit cards—a huge step forward for visitors unfamiliar with Chinese payment apps. Additionally, smart lockers at key transit points allow luggage storage and retrieval using only a QR code, freeing visitors to explore hands-free.\n\n## Real-Time Crowd Control and Safety\n\nSmart travel isn\'t just about convenience—it\'s about safety and sustainability. Using data from thousands of sensors and ticketing systems, Hubei’s tourism authorities now provide real-time crowd density maps on public screens and mobile apps. This helps travelers avoid peak hours at popular spots like the Enshi Grand Canyon or Wuhan’s bustling Jianghan Road. The system also alerts staff if an area becomes too crowded, ensuring a comfortable experience for everyone.\n\n## What’s Next?\n\nLooking ahead, Hubei plans to expand its smart tourism network to include smaller cultural villages and natural reserves by the end of 2026. Pilot programs for AI-driven language translation devices and holographic tour guides are already being tested in Enshi and Yichang. For any traveler eager to explore China’s heartland with cutting-edge technology at their fingertips, Hubei has never been more accessible.',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['hubei digital tourism', 'smart travel technology', 'wuhan', 'wudang mountains', 'three gorges', 'augmented reality', 'travel tech'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-14T06:49:06.353Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-14-07-ra5r',
    title: 'Hubei Opera Revives: How Traditional Chinese Theater Finds New Life in 2026',
    summary: 'Discover the resurgence of Hubei opera and traditional Chinese theater, from Wuhan\'s historic stages to modern adaptations captivating international audiences in 2026.',
    content: '## A Living Heritage: Hubei Opera in the Spotlight\n\nFor travelers and culture enthusiasts visiting Hubei in 2026, the region\'s opera traditions are experiencing a remarkable revival. Hubei opera, known locally as *Hanju* or *Hubei Xiqu*, blends singing, martial arts, and elaborate costumes into a storytelling art form that dates back centuries. This year, several historic theaters in Wuhan—including the iconic Tanhua Lin Grand Theater—have launched immersive performances designed for international audiences, with English subtitles and guided pre-show talks explaining the symbolism behind each gesture and mask.\n\n## Where to Experience Traditional Theater\n\nVisitors can catch live performances at these key venues this season:\n\n- **Tanhua Lin Grand Theater (Wuhan)**: Famous for its restored Ming Dynasty-style architecture, hosting weekly shows of classic Hubei opera excerpts.\n- **Wuhan Theater**: A modern venue offering experimental fusions of Hubei opera with contemporary dance and digital projection.\n- **Jingzhou Ancient City Cultural Stage**: Open-air performances during spring and autumn festivals, set against historic city walls.\n\n## What Makes Hubei Opera Unique\n\nUnlike Beijing opera, Hubei opera emphasizes distinct regional dialects and folk melodies. Key elements include:\n\n- **Highly stylized movements**: Each hand gesture and footstep carries specific meaning, often derived from martial arts or daily life in ancient Hubei.\n- **Vibrant costume codes**: Colors indicate character traits—red for loyalty, black for fierceness, gold for divinity.\n- **Narrative focus**: Stories often draw from Hubei folklore, such as the legend of Qu Yuan from Zigui County or the Three Kingdoms tales set in Chibi.\n\n## Modern Innovations Attracting New Audiences\n\nAs of early 2026, Hubei\'s cultural authorities have partnered with local tech companies to create augmented reality (AR) programs that overlay translations and historical context onto live performances. Young performers are also blending traditional arias with electronic music, drawing crowds at Wuhan\'s 403 International Art Center. These innovations have boosted attendance by an estimated 40% among under-35 audiences since 2024.\n\n## Tips for International Visitors\n\n- **Best time to visit**: March–May or September–November when outdoor festivals and special opera events are frequent.\n- **Language support**: Many major venues now offer headsets with English, French, and Japanese translations.\n- **Workshops**: The Hubei Opera Academy in Wuhan runs 2-hour beginner workshops where you can learn basic gestures and try on costumes—book online in advance.\n\nHubei opera is more than a performance; it\'s a gateway to understanding the province\'s soul. Whether you\'re a seasoned theater-goer or a curious traveler, this living tradition offers a colorful, moving experience that resonates far beyond the stage.',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['hubei opera', 'traditional theater', 'wuhan culture', 'hanju', 'chinese opera', 'cultural heritage', 'hubei travel'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-14T06:49:17.195Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-14-08-7qfb',
    title: 'Yellow Crane Tower: Ancient Poems That Still Inspire Travelers to Wuhan Today',
    summary: 'Discover the timeless poetry of Yellow Crane Tower, from Cui Hao’s Tang dynasty masterpiece to Li Bai’s farewell verses, and how these ancient works continue to shape cultural tourism in Hubei.',
    content: '## A Poetic Icon of Hubei\n\nPerched on the banks of the Yangtze River in Wuhan, Yellow Crane Tower (黄鹤楼) has been a muse for Chinese poets for over a millennium. As of 2026, the tower remains one of Hubei’s most visited cultural landmarks, drawing travelers who want to walk in the footsteps of literary giants. According to the latest cultural tourism reports, the site sees over 2 million visitors annually, many of whom come specifically to experience the poetic atmosphere that inspired some of China’s most famous verses.\n\n## Cui Hao’s Masterpiece: The Poem That Stopped Li Bai\n\nThe most celebrated poem about Yellow Crane Tower was written by Cui Hao during the Tang dynasty (circa 730 AD). Titled simply “Yellow Crane Tower” (黄鹤楼), it begins:\n\n> *The sage on yellow crane was gone amid clouds white.*\n> *To what avail is Yellow Crane Tower left here?*\n\nLegend has it that when the great poet Li Bai visited the tower and saw Cui Hao’s poem inscribed on the wall, he reportedly sighed, “The scene before my eyes cannot be described — Cui Hao’s poem has stolen them all.” This story is still shared by tour guides today, adding a layer of literary intrigue for visitors.\n\n## Li Bai’s Farewell at Yellow Crane Tower\n\nLi Bai himself wrote several poems connected to the tower, the most famous being “Seeing Meng Haoran Off at Yellow Crane Tower” (黄鹤楼送孟浩然之广陵). This parting poem captures the melancholic beauty of the Yangtze River:\n\n> *My friend has left the west where the Yellow Crane towers*\n> *For River Town veiled in green willows and late spring flowers.*\n\nThis work is often recited by students across China, and at the tower, you can find calligraphy displays and stone inscriptions of the poem. For international travelers, English translations are available at the on-site museum and via audio guides.\n\n## Modern-Day Poetry Events\n\nThis year, the Yellow Crane Tower Park launched a new “Poetry Recitation Evening” series every Saturday from April to October. Visitors can hear live performances of classical poems, sometimes accompanied by traditional Chinese music. The park has also installed QR codes on key viewing platforms, linking to recordings of poems in Mandarin and English — a useful feature for non-Chinese speakers.\n\n## Tips for the Poetry-Loving Traveler\n\n- **Best time to visit**: Early morning (7–8 AM) for fewer crowds and misty views over the Yangtze, just as the poets described.\n- **Must-see**: The “Poem Corridor” on the fifth floor, where 20 famous verses about the tower are carved into stone.\n- **Souvenir**: Calligraphy scrolls of Cui Hao’s poem are sold at the gift shop — a popular keepsake.\n\nWhether you’re a literature buff or a casual traveler, the poetry of Yellow Crane Tower offers a timeless window into China’s cultural soul.',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['yellow crane tower', 'wuhan', 'ancient chinese poetry', 'tang dynasty', 'cui hao', 'li bai', 'cultural tourism'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-14T06:49:28.147Z',
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
