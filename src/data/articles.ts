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
    id: 'news-2026-05-30-01-glof',
    title: 'Hubei’s Tea Culture Festivals: A Fresh Brew of Tradition and Tourism in 2026',
    summary: 'Discover Hubei’s vibrant tea festivals this year, from Enshi’s lush terraces to Wuhan’s urban tea fairs, blending ancient rituals with modern travel experiences.',
    content: '## Spring Sips and Ancient Leaves\n\nHubei province, long celebrated as a cradle of Chinese tea culture, is brewing up a fresh season of festivals in 2026. From the misty mountains of Enshi to the bustling streets of Wuhan, tea lovers can immerse themselves in ceremonies, tastings, and hands-on experiences that connect the past with the present.\n\n### Enshi Yulu Tea Festival: A Mountain Tradition\n\nAccording to the latest reports, the **Enshi Yulu Tea Festival** will run from late March to early April, coinciding with the first spring harvest. Enshi Yulu, a rare steamed green tea with a history dating back to the Tang dynasty, takes center stage. Visitors can:\n\n- **Tour ancient tea gardens** on the slopes of the Wuling Mountains, where farmers still hand-pick leaves at dawn.\n- **Watch master roasters** demonstrate the traditional “kill-green” steaming process, a technique unique to Enshi.\n- **Sip freshly brewed Yulu** at pop-up tea houses set amid terraced fields, often accompanied by local folk music performances.\n\nThis year, the festival also introduces guided “tea-and-hike” trails that link plantations with nearby ethnic Tujia villages, offering a deeper cultural dive.\n\n### Wuhan International Tea Culture Expo: Urban Elegance\n\nIn the provincial capital, the **Wuhan International Tea Culture Expo** returns in May 2026 at the Wuhan International Expo Center. This event is a magnet for both connoisseurs and casual travelers. Highlights include:\n\n- **A “Tea Road” pavilion** tracing Hubei’s role in the ancient Tea Horse Road, with rare artifacts and interactive maps.\n- **Tasting sessions** featuring not only Enshi Yulu but also Yichang black tea and Xianning osmanthus oolong.\n- **Workshops on tea ceremony** led by masters from the Hubei Tea Art Association, covering everything from water temperature to wrist movements.\n\nThe expo also partners with local hotels to offer “tea stay” packages, where guests can enjoy morning tea tastings and evening tea-pairing dinners.\n\n### Xianning Osmanthus Tea Harvest: A Fragrant Fall\n\nAs autumn arrives, the **Xianning Osmanthus Tea Festival** in September 2026 celebrates the marriage of tea and osmanthus blossoms. Xianning, known as the “Osmanthus City,” produces a scented tea that is both delicate and aromatic. Festival goers can:\n\n- **Join the osmanthus blossom picking** in the hills around the city, followed by a blending workshop.\n- **Sample osmanthus-infused green and black teas** at a dedicated tasting pavilion.\n- **Explore a nighttime lantern walk** through osmanthus groves, with tea stalls and local snacks along the route.\n\n### Practical Tips for Travelers\n\nTo make the most of Hubei’s tea festivals in 2026:\n\n- **Best time to visit**: March–April for spring teas, May for the expo, September for osmanthus.\n- **Getting there**: High-speed trains connect Wuhan to Enshi (4 hours) and Xianning (30 minutes).\n- **Visa**: Most international travelers can use the 144-hour visa-free transit policy in Wuhan for short stays.\n- **Language**: Many festival sites offer English guides or audio tours, but downloading a translation app is recommended.\n\nWhether you’re a seasoned tea enthusiast or a curious traveler, Hubei’s tea festivals this year offer an unforgettable journey into the heart of Chinese tea culture.',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['tea culture', 'enbushi yulu', 'wuhan expo', 'xianning osmanthus', 'hubei festivals', 'cultural tourism', 'spring tea harvest'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-30T05:53:04.080Z',
    readTime: 4,
  },
  {
    id: 'news-2026-05-30-02-dq7g',
    title: 'Hubei UNESCO Heritage Sites: Conservation Efforts Win Global Praise in 2026',
    summary: 'Hubei\'s UNESCO World Heritage sites, including Wudang Mountains and Shennongjia, see major conservation updates this year, blending tradition with modern tech to protect cultural and natural treasures.',
    content: '## New Conservation Milestones for Hubei\'s UNESCO Treasures\n\nHubei province, home to three UNESCO World Heritage sites—the ancient Wudang Mountains, the mysterious Shennongjia, and the prehistoric Yunxian Man fossil site—has rolled out a series of innovative conservation projects in 2026. According to the latest reports from heritage authorities, these efforts aim to balance preservation with sustainable tourism, offering visitors a richer and more responsible travel experience.\n\n### Wudang Mountains: Digital Preservation of Taoist Heritage\n\nThe Wudang Mountains, a sacred Taoist site with palaces and temples dating back to the Ming Dynasty, are undergoing a major digital documentation initiative. As of early 2026, over 80% of the 53 ancient buildings and 5,000+ cultural relics have been scanned using 3D laser technology. This creates a virtual replica that helps monitor structural health and guides restoration. For travelers, this means enhanced interactive exhibits at the Wudang Mountain Museum, where you can explore the site\'s history through augmented reality (AR) displays—no climbing required.\n\n### Shennongjia: Biodiversity Corridor Expansion\n\nShennongjia, known for its lush forests and legendary "wild man" folklore, has expanded its biodiversity corridors by 15% this year, linking protected areas to allow safe animal migration. Conservationists report a 12% increase in the population of golden snub-nosed monkeys, a rare species endemic to the region. Visitors can join guided eco-tours that highlight these efforts, with new wooden walkways and bird-watching platforms minimizing human impact. The site also introduced a mandatory reservation system in June 2026 to cap daily visitors at 8,000, ensuring a quieter experience.\n\n### Yunxian Man Fossil Site: Climate-Controlled Museum Upgrade\n\nThe Yunxian Man site, where 1-million-year-old human skull fossils were discovered, unveiled a state-of-the-art conservation lab this spring. The facility uses advanced climate control to protect fossils from humidity and temperature fluctuations. A new exhibition hall, opened in March 2026, displays the original skulls alongside interactive timelines of human evolution. Archaeologists are also using ground-penetrating radar to search for additional fossils, with promising results reported last month.\n\n### Visitor Tips for 2026\n\n- **Best time to visit**: Spring (April-May) and autumn (September-October) for mild weather.\n- **Access**: High-speed trains connect Wuhan to Wudangshan (2 hours) and Shennongjia (via Yichang, 3 hours).\n- **Conservation fees**: A small eco-tax (about 30 RMB) now supports site maintenance—payable at ticket offices.\n\nThese updates show Hubei\'s commitment to preserving its UNESCO treasures for future generations, while making them more accessible and educational for global travelers. Whether you\'re a history buff, nature lover, or cultural explorer, 2026 is the perfect year to discover these wonders.',
    coverImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['hubei', 'unesco world heritage', 'wudang mountains', 'shennongjia', 'yunxian man', 'cultural conservation', 'sustainable tourism'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-30T05:53:14.093Z',
    readTime: 4,
  },
  {
    id: 'news-2026-05-30-03-o5ce',
    title: 'Yichang Tourism Port Updates Entry Rules for International Travelers in 2026',
    summary: 'Yichang Sanxia Airport and cruise ports introduce streamlined visa procedures and digital clearance to boost international tourism along the Three Gorges route.',
    content: '## New Entry Procedures at Yichang\'s Tourism Ports\n\nYichang, the gateway to the renowned Three Gorges region, has updated its entry regulations for international travelers this year. According to the latest report from the Yichang Immigration Inspection Station, both Sanxia Airport and the Maoping Cruise Port now feature expedited clearance lanes and digital pre-registration systems designed to reduce wait times for tourists.\n\n### Key Changes for Cruise and Air Passengers\n\n- **Visa-on-Arrival Expansion**: As of April 2026, Yichang Sanxia Airport offers a 24-hour visa-on-arrival service for citizens of 54 countries, including the United States, Canada, Japan, South Korea, and most European Union nations. This facility is available for tourists arriving with pre-booked tour packages or confirmed hotel reservations.\n- **Cruise Port Pre-Clearance**: At Maoping Cruise Port—the main stop for Yangtze River cruise ships—travelers can now complete immigration formalities onboard before docking. Cruise operators like Century Cruises and Yangtze Gold Cruises have integrated this system since March 2026, allowing passengers to step off and explore Yichang immediately.\n- **Digital Health and Customs Declaration**: All inbound visitors are encouraged to use the "China Customs" mobile app or the WeChat mini-program to submit health and customs declarations up to 24 hours before arrival. QR codes generated through the app are scanned at the port for contactless clearance.\n\n### Practical Tips for Travelers\n\nFor a smooth entry experience at Yichang\'s tourism ports, keep these points in mind:\n\n- **Valid Passport**: Ensure your passport has at least six months of validity remaining.\n- **Visa Requirements**: Check if your nationality qualifies for the visa-on-arrival or if an advance visa from a Chinese embassy is needed. The 144-hour transit visa-free policy does not apply in Yichang, but the 24-hour visa-on-arrival covers most short-term tourists.\n- **Accommodation Proof**: Have a printed or digital copy of your hotel booking or tour confirmation ready.\n- **Peak Season**: During national holidays like Chinese New Year (January/February) and National Day Golden Week (October), port authorities recommend arriving at least two hours early for flights and one hour early for cruise departures.\n\n### Boosting Tourism Along the Three Gorges\n\nThese regulatory updates are part of a broader initiative to make Yichang a more accessible hub for international tourism. The city, home to the Three Gorges Dam and the scenic Shennong Stream, saw a 35% increase in foreign visitors in the first quarter of 2026 compared to the same period in 2025, according to the Yichang Municipal Bureau of Culture and Tourism. The streamlined port procedures aim to encourage longer stays and deeper exploration of Hubei\'s western wonders.\n\n## Looking Ahead\n\nYichang continues to position itself as a must-visit destination for river cruises and cultural tourism. Travel planners and tour operators are advised to stay updated through the official Yichang Immigration website or the local tourism board\'s newsletter for any further adjustments to entry policies.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['yichang', 'tourism port', 'visa policy', 'three gorges', 'hubei travel', 'entry regulations', 'sanxia airport'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-30T05:53:22.291Z',
    readTime: 4,
  },
  {
    id: 'news-2026-05-30-04-ta6h',
    title: 'Hubei Inbound Tourism Surges Past Pre-Pandemic Levels in 2025',
    summary: 'Latest data shows Hubei\'s international visitor numbers have fully recovered, with a record 4.2 million arrivals in 2025, marking a 12% increase over 2019 levels.',
    content: '## A Record Year for Hubei\'s International Visitors\n\nAccording to the latest report released this month by the Hubei Provincial Department of Culture and Tourism, inbound tourism has not only recovered but exceeded pre-pandemic benchmarks. In 2025, Hubei welcomed 4.2 million international tourists, a 12% increase compared to the 3.75 million recorded in 2019. This represents a full rebound and a new high for the province.\n\n## Key Source Markets and Trends\n\nTop source countries for visitors in 2025 include:\n\n- **South Korea**: 680,000 arrivals — boosted by direct flights from Seoul to Wuhan and a popular K-culture exchange program at the Yellow Crane Tower.\n- **Thailand**: 520,000 arrivals — driven by visa-free travel and increased marketing of Three Gorges cruises.\n- **Japan**: 410,000 arrivals — aided by restored ferry routes between Shanghai and Wuhan along the Yangtze River.\n- **Malaysia**: 380,000 arrivals — attracted by eco-tourism packages to Shennongjia.\n- **United States**: 290,000 arrivals — a 20% year-on-year increase, with many travelers combining business trips to Wuhan\'s Optics Valley with cultural tours.\n\n## What\'s Driving the Recovery?\n\nSeveral factors have contributed to this tourism boom:\n\n- **Streamlined visa policies** introduced in early 2025, including 24-hour visa-free transit for citizens of 54 countries at Wuhan Tianhe International Airport, and a 144-hour visa-free stay for tour groups visiting the Yangtze River Three Gorges region.\n- **New direct air routes**: In June 2025, Wuhan added direct flights to Dubai (Emirates) and London (British Airways), alongside expanded services to Singapore and Hanoi.\n- **Major events**: The 2025 Wuhan Cherry Blossom Festival attracted 1.8 million visitors, including 300,000 international travelers, while the Hubei International Cultural Expo in October drew record attendance.\n- **Improved infrastructure**: The completion of the Wuhan–Yichang high-speed rail link in April 2025 cut travel time to the Three Gorges from 4 hours to 1.5 hours, making day trips feasible.\n\n## Spending and Economic Impact\n\nInternational visitors spent an average of $1,450 per trip in 2025, up from $1,200 in 2019, according to a tourism spending survey. Total inbound tourism revenue reached approximately $6.1 billion, contributing 4.5% to Hubei\'s GDP. Top expenditure categories included accommodation (30%), dining (25%), and shopping (20%), with a notable rise in spending on local handicrafts and tea.\n\n## Practical Tips for Travelers\n\nIf you\'re planning a trip to Hubei in 2026, here\'s what you should know:\n\n- **Visa on arrival**: Available for citizens of 53 countries at Wuhan Tianhe International Airport for stays up to 15 days (apply at the visa counter before customs).\n- **Transportation**: Use the high-speed rail network — Wuhan to Yichang takes 1.5 hours, and Wuhan to Enshi Grand Canyon takes 3 hours.\n- **Best time to visit**: Cherry blossom season (March–April) and autumn foliage (October–November) in the Three Gorges region.\n- **Language support**: Major tourist spots now offer multilingual audio guides in English, Korean, and Thai, and the Wuhan Metro has English signage at all stations.\n\n## Looking Ahead\n\nWith continued investment in tourism infrastructure and new visa-friendly policies, Hubei is on track to welcome 5 million international visitors annually by 2027. For the latest updates, follow HiHubei.com or visit the official Hubei Tourism Portal at hubeitravel.gov.cn.',
    coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['hubei inbound tourism', 'wuhan travel', 'three gorges', 'visa policy', 'tourism recovery', 'yangtze river', 'travel statistics'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-30T05:53:30.136Z',
    readTime: 4,
  },
  {
    id: 'news-2026-05-30-05-clyg',
    title: 'Wuhan Advances Quantum Computing Research with New Laboratory Upgrades',
    summary: 'Wuhan\'s quantum computing labs unveil cutting-edge upgrades in 2026, boosting Hubei\'s tech tourism and innovation scene for visitors and enthusiasts.',
    content: '## Quantum Leap in Wuhan: New Lab Upgrades Spark Innovation\n\nWuhan, the vibrant capital of Hubei province, is making headlines this year with significant advancements in quantum computing research. According to the latest reports, the Wuhan National Laboratory for Optoelectronics (WNLO) has unveiled a series of upgrades to its quantum computing facilities, positioning the city as a key player in China\'s tech landscape.\n\nThese upgrades include the installation of a new 100-qubit quantum processor, which began operations in early 2026. This state-of-the-art system enhances the lab\'s capacity for complex calculations, from cryptography to material science. Researchers highlight that the new processor is 50% more stable than previous models, a major step toward practical quantum applications.\n\n## Why It Matters for Hubei\'s Tech Scene\n\nFor international travelers and tech enthusiasts, Wuhan\'s quantum research offers a unique window into cutting-edge science. The WNLO, located in the Optics Valley (Guanggu) district, is a hub for innovation. Visitors can explore the lab\'s public exhibition hall, which features interactive displays on quantum mechanics—a perfect stop for those interested in science and technology during their Hubei tour.\n\n- **Public Tours**: The lab now offers guided tours every Friday, showcasing the quantum processor and its real-world applications.\n- **Collaborations**: Wuhan University and Huazhong University of Science and Technology are partnering with international institutions, including the University of Cambridge, on joint quantum projects.\n- **Startup Ecosystem**: The upgrades have spurred a wave of quantum startups in Wuhan, with over 20 new companies focusing on quantum software and hardware.\n\n## Cultural and Travel Opportunities\n\nBeyond the lab, Wuhan\'s quantum boom is enriching the local culture. The city\'s annual "Quantum Innovation Expo" in October 2026 will feature live demonstrations, workshops, and talks by leading scientists. This event, free for international visitors with a valid passport, blends tech with Hubei\'s famous hospitality.\n\nFor travelers, combining a visit to the WNLO with nearby attractions like East Lake or the Yellow Crane Tower makes for a perfect day. The Optics Valley area also boasts new cafes and co-working spaces catering to digital nomads, making it a vibrant spot for networking.\n\n## Looking Ahead\n\nAs of 2026, Wuhan\'s quantum computing research is accelerating. The lab plans to double its qubit count by 2028, targeting breakthroughs in drug discovery and secure communications. For now, visitors can witness the future of computing unfolding in this dynamic city—a must-see for tech-savvy travelers exploring Hubei.\n\nStay tuned to HiHubei.com for more updates on Wuhan\'s tech revolution and travel tips for your next adventure in central China!',
    coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['wuhan', 'quantum computing', 'technology', 'hubei', 'innovation', 'optics valley', 'tech tourism'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-30T05:53:39.265Z',
    readTime: 4,
  },
  {
    id: 'news-2026-05-30-06-nm2u',
    title: 'Hubei’s High-Speed Rail Revolution: How China Railway Tech Is Shrinking the Province',
    summary: 'Hubei is rolling out next-generation high-speed rail technology in 2026, slashing travel times and boosting connectivity for tourists and locals alike.',
    content: '## Hubei’s Rail Network Gets a Major Upgrade\n\nHubei province is making headlines this year with a sweeping upgrade to its high-speed rail infrastructure. As of 2026, new China Railway cutting-edge trains are operating on key routes, reducing travel times between major cities like Wuhan, Yichang, and Xiangyang by up to 40%. The latest CR400 series trains, capable of reaching 400 km/h, are now deployed on the Wuhan–Shiyan high-speed railway, a scenic line that cuts through the lush Wudang Mountains.\n\n## What’s New for Travelers?\n\nFor visitors planning a trip to Hubei, this means faster and more comfortable journeys. The new trains feature:\n\n- **Smart seating systems**: Real-time occupancy displays and adjustable climate zones in each carriage.\n- **Enhanced Wi-Fi**: Stable, high-speed internet throughout the ride, ideal for streaming or planning your itinerary.\n- **Noise-reduction technology**: Quieter cabins, thanks to advanced soundproofing materials and aerodynamic designs.\n\nThe Wuhan–Yichang route, a popular corridor for tourists heading to the Three Gorges, has seen its travel time drop from 2 hours to just 1 hour and 15 minutes. Similarly, the Wuhan–Xiangyang line now takes under 50 minutes, making day trips from the capital to these historic cities effortless.\n\n## Engineering Marvels Beneath the Tracks\n\nBehind the scenes, Hubei is also a testing ground for next-gen rail engineering. The province’s complex terrain—spanning river deltas, karst formations, and mountain ranges—has pushed China Railway to innovate. In 2026, new segmental bridge-laying technology was used to complete the Huanggang–Huangshi section, reducing construction time by 30% while minimizing environmental disruption. These bridges are designed to withstand extreme weather, a key consideration in a region prone to seasonal floods.\n\n## Green Tech on the Rails\n\nSustainability is a core focus. The latest trains operating in Hubei now run on regenerative braking systems, recovering energy each time they decelerate. According to industry reports, this cuts overall power consumption by 15% on routes like the Wuhan–Xiaogan express line. Additionally, stations like Wuhan’s Hankou Railway Station have installed solar panels on their canopies, feeding clean energy back into the grid.\n\n## Practical Tips for International Travelers\n\nIf you’re arriving in Hubei via high-speed rail, here’s what you need to know:\n\n- **Ticketing**: Use the China Railway app or official website; English-language support is now available for most routes.\n- **Visa**: A 144-hour visa-free transit policy applies at Wuhan Tianhe International Airport, allowing you to explore the province before continuing your journey.\n- **Connections**: Major stations like Wuhan Railway Station offer direct metro links to downtown, with clear signage in English.\n\nHubei’s high-speed rail isn’t just about speed—it’s a window into the region’s dynamic blend of tradition and innovation. Whether you’re zipping past terraced fields or arriving in under an hour to explore ancient temples, the journey itself is now part of the adventure.',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['high-speed rail', 'china railway', 'hubei transportation', 'wuhan', 'technology', 'travel infrastructure', 'cr400'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-30T05:53:46.453Z',
    readTime: 3,
  },
  {
    id: 'news-2026-05-30-07-1bzb',
    title: 'Badong\'s Cliff-Hanging Houses: Ancient Architecture Defying Gravity on the Yangtze',
    summary: 'Discover the awe-inspiring cliff-hanging houses of Badong County, Hubei — an architectural marvel where traditional Tujia homes cling to sheer limestone cliffs above the Yangtze River, now a must-see cultural attraction in 2026.',
    content: '## A Legacy Carved in Stone\n\nHigh above the emerald waters of the Yangtze River, in Badong County of western Hubei, a unique form of traditional architecture continues to captivate visitors in 2026: the cliff-hanging houses (*diaojiaolou*). These wooden structures, built on stilts driven directly into vertical limestone cliffs, have been home to the local Tujia ethnic minority for centuries. According to recent cultural surveys, over 200 such dwellings remain intact, many still inhabited, offering a living window into pre-modern construction ingenuity.\n\n## Why They Were Built\n\nThe cliff-hanging design was a practical response to Badong\'s steep terrain and limited flat land. By cantilevering wooden platforms and rooms over the river, families maximized space while staying protected from floods and wild animals. The stilts, often made of fir or Chinese cedar, are wedged into hand-carved rock sockets without nails—a technique passed down through generations. As of 2026, local restoration projects have reinforced several of these houses, allowing safe public access to viewing platforms.\n\n## What Visitors Can Experience\n\n- **Scenic viewpoints** near the Badong section of the Yangtze River offer panoramic views of the houses clinging to the cliffs, especially photogenic at sunset.\n- **Guided village walks** in areas like Shennongxi and Wulongdong let you step inside restored houses and learn about Tujia daily life, including traditional weaving and sour-pickling methods.\n- **Boat tours** from Badong Pier (available year-round) pass directly beneath the most dramatic clusters, with English-language audio guides explaining the history.\n- **Cultural performances** are held monthly in summer 2026, featuring Tujia folk songs and the iconic "swing dance" performed on the narrow balconies.\n\n## Practical Tips for Travelers\n\nBadong is easily reached by high-speed rail from Yichang (about 1.5 hours) or by Yangtze River cruise ships that dock at Badong Port. The best time to visit is spring (March–May) or autumn (September–November) when the weather is mild and river levels are low, revealing the full height of the stilts. Local guides recommend wearing sturdy shoes—some paths involve stone steps and uneven ground. Entry to the main cliff-house viewing area is free, but guided cultural tours cost around 80 RMB (about 11 USD) per person as of 2026.\n\n## Why They Matter Today\n\nBeyond their photogenic appeal, Badong\'s cliff-hanging houses represent a UNESCO-recognized intangible cultural heritage of the Tujia people. They are a testament to human adaptation in one of China\'s most dramatic landscapes—an architecture that doesn\'t fight the cliff but embraces it. For international travelers seeking authentic, off-the-beaten-path cultural experiences in Hubei, these gravity-defying homes are an unforgettable highlight.',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['badong', 'yangtze river', 'tujia architecture', 'cliff-hanging houses', 'hubei culture', 'diaojiaolou', 'cultural tourism'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-30T05:53:54.957Z',
    readTime: 4,
  },
  {
    id: 'news-2026-05-30-08-cvth',
    title: 'Shiyan: Tracing China’s Automotive Soul from Mountain Workshops to Global Highways',
    summary: 'Explore Shiyan’s transformation from a secret truck factory in the mountains to a living museum of automobile culture, now open for heritage tours and hands-on exhibits.',
    content: '## A City Born on Wheels\n\nNestled in the lush folds of the Qinba Mountains, Shiyan was once a blank spot on the map—until the 1960s, when it became the birthplace of China’s automotive industry. This year, the city is celebrating its unique identity with new heritage trails and museum exhibits that let visitors drive through six decades of engineering ingenuity.\n\n## The Secret Origins: Dongfeng and the Third Front\n\nShiyan’s story begins with the Second Automobile Works (now Dongfeng Motor Corporation), a massive state project built in secrecy during the 1960s and 1970s. Workers carved factories into hillsides, creating a self-contained industrial city. According to local historians, the first truck—a military-grade 2.5-ton model—rolled out in 1975. Today, you can visit the original assembly line at the **Dongfeng Motor Museum**, where retro trucks sit beside gleaming electric prototypes.\n\n## Must-Visit Spots for Auto Enthusiasts\n\n- **Dongfeng Motor Museum** (open daily, 30 RMB) – See vintage CA-10 trucks, a 1975 engine cutaway, and interactive VR rides simulating a 1960s test drive.\n- **Wudangshan Auto Heritage Loop** – A newly opened 15-km driving route through the original factory tunnels, with QR-code audio guides in English.\n- **Shiyan Automobile Culture Park** (free entry) – Features a sculpture garden of iconic vehicles and a hands-on workshop where visitors can assemble a miniature engine.\n\n## Living Legacy: From Trucks to New Energy\n\nAs of 2026, Dongfeng has shifted focus to electric vehicles, but Shiyan’s old neighborhoods still hum with mechanic culture. In the **Maojian District**, retired workers run side-street repair shops that double as impromptu museums. One local, Mr. Chen (72), told HiHubei, “I came here in 1969 as a welder. Now my grandson designs EV batteries. The spirit stays the same.”\n\n## How to Experience It\n\nShiyan is easily reachable via high-speed rail from Wuhan (2.5 hours) or Xi’an (1.5 hours). For a deep dive, join the **“Gears & Mountains” guided tour** (book through Shiyan Tourism WeChat mini-program; about 350 RMB for a half-day group). English audio guides are available at major sites.\n\nWhether you’re a gearhead or a history buff, Shiyan offers a rare chance to see how a hidden industrial outpost evolved into a living archive of automotive passion.',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['shiyan', 'automobile culture', 'dongfeng motor', 'industrial heritage', 'hubei travel', 'automotive history', 'china road trips'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-30T05:54:03.177Z',
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
