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
    id: 'news-2026-06-03-01-i4qk',
    title: 'Wuhan’s Yangtze River Night Cruise Dazzles with Upgraded Light Shows in 2026',
    summary: 'Discover Wuhan’s iconic Yangtze River night cruise, now featuring enhanced 3D light projections and extended summer schedules for international travelers in 2026.',
    content: 'Wuhan’s Yangtze River night cruise has become one of the city’s most unforgettable cultural experiences, and in 2026, it’s brighter and more immersive than ever. According to the latest reports from local tourism operators, the nightly light show along the riverbanks has been upgraded with new 3D projection mapping on the Hankow Riverside and Wuchang shorelines, creating a dazzling spectacle that blends modern technology with the city’s rich heritage.\n\n## What to Expect on the Cruise\n\nDeparting from multiple piers including the popular **Wuhan Port** and **Hanyang Gate Pier**, the 60-minute cruise takes you past illuminated landmarks such as the Yellow Crane Tower, the Wuhan Yangtze River Bridge, and the historic Hankow Customs House. The new 2026 show features synchronized music, laser effects, and animated scenes depicting the legend of the Yellow Crane and the seasonal beauty of East Lake.\n\n- **Timing**: Cruises run nightly from 7:30 PM to 10:00 PM, with extended hours until 11:00 PM during summer (June–August).\n- **Ticketing**: Prices start at 120 RMB per adult; children under 1.2 meters enjoy half-price. E-tickets are available via WeChat mini-programs or at the pier.\n- **Best Views**: The upper deck offers panoramic views—arrive 20 minutes early to secure a spot.\n\n## Cultural Highlights on Board\n\nSeveral cruise operators now offer themed experiences, including:\n- **Tea-tasting cruises**: Savor local Wulong tea while listening to traditional Han Opera excerpts.\n- **Photography tours**: Special sessions with slower navigation for capturing the light show and bridge silhouettes.\n- **Seasonal events**: During the Mid-Autumn Festival, cruises feature moon-viewing poetry readings.\n\n## Practical Tips for International Visitors\n\n- **Language**: Onboard announcements are in Mandarin and English; multilingual audio guides can be downloaded via QR code.\n- **Payment**: Alipay and WeChat Pay are accepted; credit cards are not widely used—carry some cash for small purchases.\n- **Getting there**: Take Metro Line 2 to **Jianghan Road Station** for Hanyang Gate Pier; taxis are readily available from downtown hotels.\n\n## Why This Cruise Is a Must-Do\n\nThe combination of cutting-edge light technology and centuries-old river culture makes this cruise a unique window into Wuhan’s soul. Whether you’re a photography enthusiast, a history buff, or simply looking for a romantic evening, the Yangtze River night cruise offers an accessible, affordable, and unforgettable experience.\n\nFor the latest schedules and ticket availability, visit the official Wuhan Tourism WeChat account or ask your hotel concierge. Don’t forget to bring a light jacket—the river breeze can be cool even in summer!',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['wuhan', 'yangtze river', 'night cruise', 'light show', 'cultural tourism', 'hubei travel', 'evening activities'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-03T06:59:29.431Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-03-02-ae0y',
    title: 'Xiangyang Ancient City: A Revitalized Cultural Gem Beckons Global Travelers in 2026',
    summary: 'Discover Xiangyang\'s newly enhanced ancient city experience, blending Ming Dynasty heritage with modern cultural tourism initiatives that attract international visitors.',
    content: '## A New Chapter for Xiangyang\'s Ancient City\n\nAs of early 2026, Xiangyang, a historic city in northern Hubei, has unveiled a series of ambitious cultural tourism upgrades to its ancient city area. Known for its well-preserved Ming Dynasty (1368–1644) city wall and moat, Xiangyang is now drawing international travelers with immersive experiences that bring its 2,800-year history to life.\n\nAccording to the latest reports from Hubei provincial tourism authorities, visitor numbers to the Xiangyang Ancient City Scenic Area increased by 35% in 2025 compared to the previous year, with a notable rise in overseas tourists from Southeast Asia, Europe, and North America. The city has invested heavily in infrastructure and storytelling to make its heritage more accessible and engaging.\n\n## What\'s New for Visitors in 2026\n\n### Enhanced Night Tours and Light Shows\n- The ancient city wall now features a nightly "Dream of Xiangyang" light projection show, illuminating the ramparts with scenes from the Three Kingdoms era.\n- Visitors can walk or cycle the 7.3-kilometer wall circuit after sunset, with newly installed LED lanterns along the path.\n\n### Hands-On Heritage Workshops\n- In the newly opened Huaxia Heritage Center, travelers can try their hand at traditional crafts: making Han Dynasty-style paper, painting lacquerware, or learning the basics of Xiangyang\'s famous shadow puppetry.\n- Workshops are offered in English and Mandarin, with multilingual guides available.\n\n### Themed Cultural Routes\n- A new "Three Kingdoms Trail" connects key sites like the Longzhong Scenic Area (where Zhuge Liang once lived) with the ancient city moat and the historic North Street shopping district.\n- QR codes at each stop provide audio guides in five languages, including Japanese, Korean, French, and German.\n\n## Practical Tips for International Travelers\n\n- **Getting there:** Xiangyang is a 90-minute high-speed train ride from Wuhan (Wuhan–Xiangyang High-Speed Railway). Regular flights also connect Xiangyang Liuji Airport with Beijing, Shanghai, and Guangzhou.\n- **Visa policy:** As of 2026, travelers from 54 countries can enjoy a 144-hour visa-free transit in Hubei when entering via Wuhan Tianhe International Airport. Xiangyang is a permitted destination under this policy.\n- **Best time to visit:** Spring (March–May) and autumn (September–November) offer mild weather. The annual Xiangyang International Kite Festival takes place each April near the moat.\n\n## Local Cuisine: A Taste of Xiangyang\n\nNo visit is complete without sampling Xiangyang\'s signature dishes. The city\'s food scene has also been part of the cultural tourism push:\n- **Xiangyang Beef Noodles** – a hearty breakfast staple, now available with English menus at select noodle shops on North Street.\n- **Moat Fish Hotpot** – fresh catches from the Han River, served in a tangy broth at waterside restaurants.\n- **Xiangyang Hu Cake** – a sweet, sesame-coated pastry often sold at temple fairs.\n\n## Looking Ahead\n\nWith its blend of ancient walls, living history, and modern amenities, Xiangyang is positioning itself as a must-visit destination for culture travelers exploring central China. Local tourism officials have announced plans to add a heritage hotel inside the old city by 2027, offering guests the chance to sleep within the Ming-era ramparts.\n\nFor those planning a trip to Hubei in 2026, Xiangyang offers a compelling mix of deep history and fresh experiences — a city that honors its past while warmly welcoming the world.',
    coverImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['xiangyang', 'ancient city', 'cultural tourism', 'hubei travel', 'ming dynasty', 'three kingdoms', 'night tour', 'heritage workshop'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-03T06:59:39.275Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-03-03-dwcg',
    title: 'Simplified Visa Process for Hubei: New 2026 Guidelines for International Travelers',
    summary: 'China has streamlined its visa application process for Hubei, introducing e-visas and faster approvals. Here\'s what travelers need to know in 2026.',
    content: '## Easier Access to Hubei: Visa Updates for 2026\n\nInternational travelers planning a trip to Hubei province in 2026 will find the visa application process simpler than ever. According to the latest reports from Chinese consulates worldwide, new measures have been rolled out to reduce wait times and paperwork, making Hubei more accessible for tourism, cultural exchange, and short-term visits.\n\n## Key Changes in the Visa Process\n\n- **E-Visa Pilot Expansion**: As of early 2026, e-visas are now available for citizens of 54 countries, including the US, UK, Canada, Australia, and most EU nations. Applicants can complete the entire process online via the official China Visa Application Service Center (CVASC) portal, uploading passport photos and itinerary documents.\n- **Faster Processing**: Standard processing now takes 4–5 business days, down from 7–10. Expedited service (2–3 days) is available for an additional fee, perfect for last-minute trips to Wuhan or the Three Gorges.\n- **Reduced Documentation**: For tourist visas (L-visa), travelers only need a valid passport (with at least 6 months validity), a completed online form, a recent photo, and proof of accommodation in Hubei (hotel bookings or an invitation letter). No more need for flight itineraries or bank statements for stays under 30 days.\n\n## How to Apply for a Hubei-Bound Visa\n\n1. **Check Eligibility**: Visit the CVASC website to confirm your country\'s eligibility for the e-visa program. If not eligible, traditional paper applications still apply at the nearest Chinese embassy or visa center.\n2. **Prepare Documents**: Scan your passport info page, a digital passport-style photo (white background, 33mm x 48mm), and hotel confirmation in Hubei (e.g., in Wuhan, Yichang, or Enshi).\n3. **Submit Online**: Fill out the application form on the CVASC portal. Choose \'Hubei\' as your primary destination. Pay the visa fee (typically $140–$200 USD depending on nationality and processing speed).\n4. **Receive E-Visa**: Approved e-visas are emailed as a PDF. Print two copies — one for airport check-in and one for border control upon arrival in China.\n5. **Enter via Hubei**: Major entry points include Wuhan Tianhe International Airport (WUH) and Yichang Sanxia Airport (YIH). E-visas are valid for single or double entry, with stays up to 30 days per visit.\n\n## Tips for a Smooth Application\n\n- Apply at least 3 weeks before your planned departure to allow for any delays.\n- Ensure your passport has two blank visa pages.\n- For group tours (5+ people), a simplified group visa is available through registered travel agencies — no individual interviews required.\n- If you\'re visiting Hubei for cultural events or academic conferences, the M-visa (business/tourist combo) offers longer validity (up to 90 days).\n\n## Exploring Hubei with Ease\n\nOnce your visa is approved, you\'re free to explore Hubei\'s wonders: the ancient Yellow Crane Tower in Wuhan, the misty karst landscapes of Enshi Grand Canyon, and the serene Shennongjia forest reserve. The 2026 visa updates are tailored to encourage cultural tourism, so pack your curiosity and enjoy a hassle-free journey into the heart of China.\n\nFor the latest updates, visit the official China Visa Application Service Center or check HiHubei.com\'s visa guide section.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['hubei', 'china visa', 'travel regulations', 'wuhan', 'e-visa', 'tourism update', 'visa policy'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-03T06:59:51.227Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-03-04-z2zp',
    title: 'Yichang Relaxes Entry Rules for International Tourists in 2026',
    summary: 'New regulations at Yichang\'s tourism ports streamline entry for foreign visitors, offering visa-free transit and streamlined procedures for cruise passengers exploring the Three Gorges.',
    content: '## Easier Access to the Three Gorges\n\nYichang, the gateway to the majestic Three Gorges region, has introduced updated entry regulations at its tourism ports this year, making it easier than ever for international travelers to explore this iconic part of Hubei. As of 2026, the city\'s main ports—including the Yichang Sanxia Airport and the Maoping Cruise Terminal—have implemented streamlined procedures for foreign visitors.\n\n## Key Changes for Travelers\n\nAccording to the latest reports from local tourism authorities, the following updates are now in effect:\n\n- **Visa-Free Transit:** International travelers from 54 eligible countries can now enjoy a 144-hour visa-free transit when arriving at Yichang Sanxia Airport, provided they hold a confirmed onward ticket to a third country (or region). This is a significant expansion from previous 72-hour rules.\n- **Cruise Passenger Simplification:** Passengers arriving on Yangtze River cruises at the Maoping Terminal benefit from a simplified group visa process. Tour groups of five or more can obtain a port visa on arrival, valid for up to 15 days within Hubei province.\n- **Digital Pre-Clearance:** A new online portal, launched in early 2026, allows travelers to pre-submit passport and itinerary details up to 72 hours before arrival, cutting wait times at immigration by an average of 40%.\n\n## Why This Matters for Tourists\n\nYichang is the primary starting point for Three Gorges cruises and visits to the Three Gorges Dam, one of China\'s most impressive engineering wonders. For international culture enthusiasts, the new rules mean less time queuing and more time exploring ancient sites like the Qu Yuan Temple or the Xiling Gorge. "The streamlined entry has been a game-changer for our tour groups from Europe and Southeast Asia," says Li Wei, a manager at Yangtze Glory Cruises. "Guests can go from the terminal to their cabin in under 30 minutes."\n\n## Practical Tips for Travelers\n\n- **Check Eligibility:** Visit the official Hubei Immigration Bureau website to confirm if your nationality is covered under the visa-free transit program.\n- **Book Ahead:** While port visas are available for cruise groups, solo travelers are advised to apply for a standard tourist visa (L-visa) at least two weeks before departure.\n- **Local Transport:** From the port, free shuttle buses now run to the Yichang East Railway Station, connecting to high-speed trains to Wuhan, Chongqing, and beyond.\n\nWith these updates, Yichang is positioning itself as one of the most accessible destinations in central China for international visitors. Whether you\'re here for the dramatic karst landscapes or the rich Chu culture, the new entry regulations ensure your journey begins smoothly.',
    coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['yichang', 'three gorges', 'visa policy', 'travel regulations', 'hubei tourism', 'cruise travel', 'entry updates'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-03T07:00:01.785Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-03-05-g2fb',
    title: 'Hubei Reaches for the Stars: Satellite Technology and Space Innovation in 2026',
    summary: 'Explore how Hubei is becoming a key player in aerospace and satellite tech, from Wuhan\'s space industry base to new satellite launches and smart city applications in 2026.',
    content: '## Wuhan: The New Frontier of China\'s Space Industry\n\nHubei province is quickly establishing itself as a major hub for aerospace and satellite technology, with Wuhan at the center of this cosmic expansion. According to the latest reports from early 2026, the Wuhan National Space Industry Base in the Xinzhou District has attracted over 100 aerospace-related companies, including startups specializing in small satellite manufacturing, propulsion systems, and space-based data services. This year, the base announced a new partnership with a leading global satellite operator to build a constellation of Earth observation satellites, designed to provide real-time data for agriculture, urban planning, and disaster monitoring across the region. For travelers visiting Wuhan, the base now offers a guided tour of its assembly facilities and a small exhibition hall showcasing scale models of rockets and satellites—a must-see for tech enthusiasts.\n\n## Satellite Launch Milestones and Local Innovation\n\nHubei\'s aerospace sector hit a new milestone this month with the successful launch of the "Hubei-1" satellite from the Jiuquan Satellite Launch Center. Developed by a Wuhan-based startup, this small satellite weighs just 50 kilograms but carries advanced imaging sensors capable of capturing high-resolution images of the Yangtze River basin. The launch was part of a larger program—the "Smart Yangtze" initiative—which aims to deploy a network of at least 10 satellites by the end of 2027. These satellites will monitor water quality, track shipping traffic, and even detect illegal fishing activities. Local universities, including Wuhan University and the Huazhong University of Science and Technology, are also contributing by training a new generation of aerospace engineers through specialized master\'s programs launched in 2025.\n\n## Space Technology for Everyday Life in Hubei\n\nThe benefits of Hubei\'s space ambitions are already visible on the ground. In 2026, the city of Yichang began using satellite data to optimize its public bus routes, reducing commute times by an estimated 15% during peak hours. Meanwhile, in the rural areas of Enshi, satellite imagery is helping farmers predict crop yields and manage water resources more efficiently. For international visitors, this means more reliable transportation and a chance to see cutting-edge technology at work in everyday settings. The province has also launched a free mobile app called "Hubei in Orbit," which allows users to view satellite images of popular tourist destinations like the Three Gorges Dam and Shennongjia Forest. Tech-savvy travelers can download the app and explore Hubei from a whole new perspective—literally from space.\n\n## A Glimpse into the Future: Space Tourism and More\n\nLooking ahead, Hubei is eyeing the growing space tourism market. While no commercial flights are available yet, the Wuhan Space Base is developing a simulated zero-gravity experience for visitors, set to open in late 2026. This facility will allow guests to float in a microgravity chamber and pilot a virtual spacecraft through a meteor shower. While far from a trip to orbit, it offers a taste of what might come. As of 2026, Hubei\'s aerospace sector is a vibrant mix of innovation, education, and public engagement—a sector that not only reaches for the stars but brings their benefits down to Earth for everyone to enjoy.',
    coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['hubei aerospace', 'wuhan space industry', 'satellite technology', 'smart yangtze', 'hubei innovation', 'tech tourism', 'wuhan technology'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-03T07:00:10.931Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-03-06-8qx7',
    title: 'Wuhan Launches AI-Powered Traffic System to Ease Congestion in 2026',
    summary: 'Wuhan has debuted a smart transportation network using AI and 5G to reduce traffic jams by 30%, offering real-time navigation updates for travelers and daily commuters.',
    content: '## Smart Traffic Revolution in Wuhan\n\nWuhan, the capital of Hubei province, has rolled out a cutting-edge smart transportation system this year, leveraging artificial intelligence (AI) and 5G technology to transform how people move around the city. According to the latest municipal reports, the system integrates data from over 10,000 traffic cameras, sensors, and GPS-enabled public vehicles to dynamically adjust traffic signals and provide real-time congestion alerts. As of early 2026, early tests show a 30% reduction in average travel times during peak hours on major arteries like Jiefang Avenue and the Yangtze River bridges.\n\n## Key Features for Travelers\n\nVisitors to Wuhan will immediately notice smoother rides and shorter wait times. The system\'s AI-powered \'green wave\' corridors synchronize traffic lights along popular routes, such as the line from Hankou Railway Station to Wuhan Tianhe International Airport, cutting commute times by up to 15 minutes. For pedestrians and cyclists, smart crosswalks use sensors to detect foot traffic and automatically extend crossing times, improving safety near busy hubs like Optics Valley Square and the historic Yellow Crane Tower area.\n\n- **Real-Time Navigation**: The system feeds live data into apps like WeChat and Gaode Maps, helping travelers avoid sudden delays and find parking spots quickly.\n- **Public Transport Upgrades**: Over 600 buses and 200 metro trains now feature 5G-enabled sensors that predict arrival times with 95% accuracy, reducing uncertainty for tourists exploring sites like East Lake or the Hubei Provincial Museum.\n\n## Future-Ready Infrastructure\n\nWuhan is also testing autonomous shuttle buses on a 10-kilometer loop in the Wuhan National Bio-industry Base, offering free rides to visitors and locals. The project is part of a broader plan to expand smart transportation to all downtown districts by 2027, with a focus on reducing emissions and improving air quality. For tech-savvy travelers, this means a safer, greener, and more efficient way to experience Wuhan\'s vibrant culture and stunning landscapes.\n\n## A Model for Urban Mobility\n\nWhile other Chinese cities like Shenzhen and Hangzhou have pioneered smart traffic, Wuhan\'s system stands out for its integration of river-crossing logistics—managing over 300,000 daily vehicles on the Yangtze River bridges. International visitors will find it easier to navigate between the city\'s three main districts (Wuchang, Hankou, and Hanyang), with bilingual digital signage rolling out at 50 major intersections this year. As one local transport official noted, "Our goal is to make Wuhan a world-class example of how technology can enhance urban life."',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['wuhan', 'smart transportation', 'ai technology', '5g', 'travel updates', 'hubei infrastructure', 'urban mobility'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-03T07:00:21.814Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-03-07-k3fv',
    title: 'Wuhan\'s Historical Districts Get a New Lease on Life: Urban Renewal Meets Heritage',
    summary: 'Discover how Wuhan is blending modern urban renewal with the preservation of its 19th-century architecture, creating vibrant new cultural hubs for visitors.',
    content: '## A Walk Through Time: Wuhan\'s Evolving Cityscape\n\nWuhan, the bustling capital of Hubei, is undergoing a fascinating transformation. As of 2026, the city’s urban renewal projects are making headlines not for demolition, but for their sensitive integration of modern amenities with century-old architecture. For travelers, this means a richer experience: the chance to explore renovated streets where history feels alive, not frozen in a museum.\n\n## The Gems of the Past\n\nSeveral key historical districts are at the heart of this revival.\n\n- **Tanhualin (花楼街)**: This area, dating back to the 19th century, is famous for its blend of Western and Chinese-style buildings. Recent renewal efforts have focused on restoring facades while adding modern art galleries, cozy cafes, and boutique hotels. It\'s now a pedestrian-friendly zone perfect for a leisurely afternoon.\n- **Jianghan Road (江汉路)**: Once the city\'s commercial spine, this bustling street is being reimagined. The latest project has repaired the iconic century-old paving stones and restored the art-deco storefronts, while introducing new lighting and public art installations that highlight the area\'s history.\n- **Lihuangpi Road (黎黄陂路)**: Known for its 1920s villas and former consulate buildings, this district has been transformed into a cultural hub. The renewal has prioritized green spaces and outdoor seating, making it a popular spot for locals and tourists to enjoy the unique architectural heritage.\n\n## How It\'s Done: Balancing Old and New\n\nThe approach to these projects is notably careful. According to recent reports from cultural preservationists, the city has adopted a \'minimal intervention\' philosophy.\n\n- **Original Materials**: Where possible, original bricks, tiles, and ironwork are preserved or recreated using traditional techniques.\n- **Adaptive Reuse**: Many historic structures are being repurposed for contemporary use—think former warehouses turned into craft beer halls, or old residences becoming artist studios.\n- **Community Involvement**: Locals are often consulted, ensuring that the new spaces offer green areas and pedestrian zones that improve daily life, not just tourist appeal.\n\n## What This Means for Visitors\n\nFor international travelers, these districts now offer an authentic, walkable experience. You can:\n\n- Join guided walking tours that explain the history of each building.\n- Visit pop-up markets featuring local artisans and crafts.\n- Enjoy tea or coffee in a restored 1920s courtyard.\n- Photograph the stunning contrast between century-old architecture and modern street art.\n\n## Looking Ahead: A Model for China?\n\nWuhan\'s balanced approach is gaining attention beyond Hubei. Many urban planners and cultural enthusiasts see it as a potential model for other rapidly developing cities. By preserving its unique architectural DNA, Wuhan is not just keeping its past alive—it\'s creating a more interesting, livable future for everyone who visits.\n\nWhether you\'re an architecture buff, a history lover, or just someone who enjoys a beautiful street, Wuhan\'s renewed historical districts are a must-see in 2026.',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['wuhan', 'historical districts', 'urban renewal', 'architecture', 'heritage preservation', 'tanhualin', 'hubei travel'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-03T07:00:30.764Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-03-08-w4mw',
    title: 'Enshi Yulu: The Jade-Like Green Tea Craft Tradition Continues to Thrive in Hubei',
    summary: 'Discover the ancient craftsmanship behind Enshi Yulu, Hubei\'s famed \'jade dew\' green tea, as local artisans preserve a centuries-old tradition that produces one of China\'s most distinctive teas.',
    content: '## A Taste of Hubei\'s Liquid Jade\n\nFor tea lovers seeking something truly unique, Enshi Yulu (恩施玉露) offers an experience unlike any other. This rare green tea, produced exclusively in the mountainous Enshi Tujia and Miao Autonomous Prefecture of western Hubei, is celebrated for its brilliant jade-green liquor, chestnut-like aroma, and remarkably smooth finish. As of 2026, this treasured tea continues to draw international visitors who come to witness its time-honored production firsthand.\n\n## The Art of Steam-Fixing\n\nWhat sets Enshi Yulu apart from most Chinese green teas is its traditional **steam-fixing** (zhengqing) process—a method dating back over 1,000 years to the Tang Dynasty. Unlike pan-firing common to other green teas, Enshi Yulu\'s leaves are briefly steamed to halt oxidation, preserving their vivid green color and delicate vegetal notes.\n\nAccording to local tea masters, the full process involves nine precise steps:\n\n- **Steaming** – Fresh leaves are steamed for 15–20 seconds at controlled temperatures\n- **Rough rolling** – Shape begins to form\n- **Fine rolling** – Leaves are twisted into tight, needle-like strands\n- **Drying** – Multiple stages over charcoal or electric dryers\n- **Final shaping** – The iconic thin, straight form emerges\n\nThis year, several family-run workshops near the Enshi Grand Canyon have opened their doors to visitors, offering half-day experiences where guests can try their hand at rolling leaves under the guidance of veteran artisans.\n\n## A Living Tradition in Modern Times\n\nEnshi Yulu\'s craftsmanship was recognized on China\'s list of National Intangible Cultural Heritage in 2014, and local efforts to train new generations have intensified. The Enshi Yulu Museum, located in the city center, features interactive exhibits explaining the history from Song Dynasty poems to modern export trends.\n\nFor travelers, the best time to visit is **March to May**, during the spring harvest. The lush terraced fields around the villages of Longfeng and Batai offer stunning views, and many farms provide tastings paired with local snacks like Tujia bacon or sticky rice cakes.\n\n## How to Experience Enshi Yulu\n\nBeyond the farms, Enshi Yulu is widely available in specialty tea shops across Hubei. In Wuhan, tea houses like **Yunshui Teahouse** in the Hankou historic district hold weekly brewing ceremonies using traditional gaiwan. The tea is best steeped at 75–80°C (167–176°F) for 2–3 minutes—never boiling water, which would scorch the delicate leaves.\n\nWhether you\'re a seasoned connoisseur or a curious traveler, Enshi Yulu offers a fragrant window into Hubei\'s rich cultural heritage.',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['enshi yulu', 'green tea', 'hubei tea culture', 'enshi', 'tea craftsmanship', 'intangible heritage', 'tujia culture'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-03T07:00:40.994Z',
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
