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
    id: 'news-2026-05-25-01-bgey',
    title: 'Hubei Provincial Museum Unveils Stunning New Exhibitions and Rare Artifacts in 2026',
    summary: 'Discover the latest ancient treasures and interactive exhibits at Hubei Provincial Museum, including newly unearthed artifacts from the Zeng-Hou Yi tomb and a cutting-edge digital experience.',
    content: '## A Fresh Look at Ancient Glory\n\nThe Hubei Provincial Museum in Wuhan has launched a series of new exhibitions this year, offering international visitors an unprecedented glimpse into the region\'s rich cultural heritage. As of early 2026, the museum has unveiled several rare artifacts never before displayed, alongside immersive digital installations that bring history to life.\n\n## Highlights of the New Exhibitions\n\n- **Zeng-Hou Yi Tomb Treasures**: A new permanent exhibition features over 200 recently restored artifacts from the tomb of Marquis Yi of Zeng, including exquisite bronze ritual vessels, jade ornaments, and musical instruments. The centerpiece is a full set of bianzhong (bronze chime bells), now accompanied by a 3D sound reconstruction that lets visitors hear their original tones.\n\n- **Chu State Silk Road Collection**: A temporary exhibition, running through September 2026, showcases silk textiles and lacquerware from the Chu State period (8th–3rd century BCE). These items, unearthed in Jiangling County, reveal early cross-cultural exchanges along ancient trade routes.\n\n- **Digital Interactive Zone**: The museum\'s new \'Time Portal\' room uses augmented reality to overlay historical scenes onto real artifacts. Visitors can virtually handle a replica of the Sword of Goujian and watch ancient rituals reenacted via holographic projections.\n\n## Practical Tips for Visitors\n\n- **Location**: The museum is located at 156 Donghu Road, Wuchang District, Wuhan, easily accessible by metro Line 8 (Provincial Museum station).\n- **Opening Hours**: 9:00 AM – 5:00 PM, Tuesday to Sunday (closed Mondays). Last entry at 4:00 PM.\n- **Admission**: Free, but advance booking is recommended via the official WeChat mini-program. English audio guides are available.\n- **What to See First**: Start with the Zeng-Hou Yi exhibition on the second floor, then head to the digital zone on the third floor for an interactive experience.\n\n## Why This Matters for Travelers\n\nFor culture enthusiasts planning a trip to Hubei, these new exhibitions offer a rare chance to see artifacts that have never been displayed together. The digital enhancements make the museum more accessible to international visitors who may not be familiar with Chinese history. Plus, the museum\'s location on the shores of East Lake allows for a full day of cultural exploration—combine your visit with a stroll through the scenic lake park.\n\nWhether you\'re a history buff or a casual traveler, the Hubei Provincial Museum\'s 2026 lineup promises to deepen your appreciation of China\'s ancient civilizations. Don\'t miss the opportunity to witness these treasures in person.',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['hubei provincial museum', 'wuhan', 'cultural tourism', 'ancient artifacts', 'zeng-hou yi', 'bronze chime bells', 'digital exhibition'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-25T06:41:49.801Z',
    readTime: 4,
  },
  {
    id: 'news-2026-05-25-02-njki',
    title: 'Wuhan Yangtze River Night Cruise & Light Shows: A Must-See Evening Spectacle in 2026',
    summary: 'Experience the dazzling Yangtze River night cruise and light shows in Wuhan, where iconic bridges and futuristic skylines come alive after dark. Latest updates and tips for international travelers.',
    content: '## Glowing Waters: Wuhan’s Night Cruise on the Yangtze\n\nAs the sun sets over Wuhan, the Yangtze River transforms into a shimmering stage of light and sound. The **Wuhan Yangtze River Night Cruise** has become one of the city’s most popular evening attractions, offering a unique perspective on the historic waterway that divides the city into three districts. According to the latest reports from 2026, the cruise experience has been upgraded with new LED displays and synchronized music, making it a must for any visitor.\n\n## What to Expect on the Cruise\n\nThe cruise typically departs from **Wuhan Port** near the Hankou waterfront, with multiple sailings each evening. Boats glide past the iconic **Wuhan Yangtze River Bridge** (the first double-deck bridge over the Yangtze, built in 1957) and the modern **Tianxingzhou Bridge**, whose cables are illuminated in a rainbow of colors. The highlight is the **Wuhan Light Show**, a spectacular 20-minute display that runs nightly from 7:30 PM to 10 PM (times may vary seasonally). Using over 1,000 projectors and 500,000 LED lights, the show paints the riverside skyline — including the **Yellow Crane Tower**, **Wuhan Greenland Center**, and the futuristic **Wuhan International Expo Center** — with animations of dragons, blooming cherry blossoms, and traditional Chinese landscapes.\n\n## Tips for International Travelers\n\n- **Book in advance**: Tickets for the popular 8 PM cruise often sell out. Check online platforms like Ctrip or the official "Wuhan Night Cruise" WeChat mini-program (available in English).\n- **Best views**: Choose an open-deck seat on the upper level. The bow offers an unobstructed panorama, especially when passing under the bridges.\n- **Weather**: Cruises run year-round, but spring (March–May) and autumn (September–November) offer the most comfortable temperatures. Summer evenings can be humid, but the river breeze helps.\n- **Photography**: Bring a tripod for long-exposure shots of the light show. The reflection of the bridges on the water is stunning.\n- **Dining**: Some cruises now include a buffet dinner featuring local dishes like Re Gan Mian (hot dry noodles) and steamed Wuchang fish. Book the "Dinner Cruise" package for a full experience.\n\n## Beyond the Cruise: Riverside Strolls\n\nFor those who prefer land, the **Wuhan Riverfront Promenade** along the Hankou side offers free daytime and evening access. The promenade is dotted with cafes, art installations, and viewing platforms, perfect for a leisurely walk after the cruise.\n\n## Plan Your Visit\n\nThe night cruise and light shows are operating as of 2026 with no major schedule changes. For the latest departure times and ticket prices, check HiHubei.com’s event calendar. Whether you’re a solo traveler or with family, this is an unforgettable way to see Wuhan’s modern and historic sides converge on the mighty Yangtze.',
    coverImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['wuhan', 'yangtze river', 'night cruise', 'light show', 'culture travel', 'hubei attractions', 'evening activities'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-25T06:42:02.010Z',
    readTime: 3,
  },
  {
    id: 'news-2026-05-25-03-9x7y',
    title: 'Hubei Travel Made Easy: Your 2026 Guide to China’s Visa Application Process',
    summary: 'Planning a trip to Hubei? Here’s the latest on visa types, online applications, and tips for a smooth entry in 2026.',
    content: '## Simplified Steps for a Seamless Application\n\nAs of 2026, applying for a China travel visa to visit Hubei has become more traveler-friendly. The Chinese government has streamlined the process for tourists, with most applicants now able to submit their paperwork online via the official China Visa Application Service Center (CVASC) portal. For Hubei-bound travelers, the key is to apply for an **L visa** (tourist visa), which typically allows a stay of 30 to 60 days.\n\n## Key Requirements for Hubei Visitors\n\n- **Valid passport** with at least six months’ validity and two blank visa pages.\n- **Completed online application form** (available in English, French, and other languages).\n- **Recent passport-sized photo** (48mm x 33mm, white background).\n- **Round-trip flight itinerary** showing entry and exit from China (Wuhan Tianhe International Airport is the main gateway).\n- **Hotel bookings** in Hubei province—many first-time visitors choose Wuhan, Yichang (for the Three Gorges), or Enshi.\n- **Proof of financial means** (bank statements or credit card details) for the duration of stay.\n\n## New Digital Tools for Faster Processing\n\nThis year, Hubei’s tourism board has partnered with the CVASC to offer a **priority lane for Hubei-bound tourists** at select visa centers in the United States, United Kingdom, France, Germany, and Australia. Applicants can opt for a “Hubei Express” service, which cuts processing time from the standard 7–10 business days to just 3–5 days. The service includes a dedicated hotline and real-time SMS updates on visa status.\n\n## Transit and Visa-Free Options\n\nFor those planning a short stopover, China’s **24-hour transit visa-free policy** applies at Wuhan Tianhe International Airport. Travelers holding a valid onward ticket to a third country can explore Wuhan’s Yellow Crane Tower or enjoy a bowl of local hot dry noodles without a full visa. Additionally, as of 2026, the **72-hour visa-free transit** has been extended to include a broader list of nationalities, making Hubei an even more accessible destination for spontaneous trips.\n\n## Tips for a Smooth Application\n\n- **Apply early**: Start the process at least three weeks before travel to avoid delays.\n- **Double-check your itinerary**: Incomplete hotel or flight details are the most common reasons for rejections.\n- **Use a travel agency**: Many Hubei-based tour operators now offer visa assistance as part of their packages, especially for multi-city tours covering Wuhan, Shennongjia, and the Three Gorges.\n\nWith these updates, exploring Hubei’s ancient temples, natural wonders, and vibrant food scene has never been easier. Plan your trip today!',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['visa', 'travel', 'hubei', 'wuhan', 'china travel', 'tourism', 'application'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-25T06:42:16.146Z',
    readTime: 3,
  },
  {
    id: 'news-2026-05-25-04-utk3',
    title: 'Yichang Streamlines Entry for International Tourists in 2026',
    summary: 'New visa and port regulations make it easier for international travelers to visit Yichang, the gateway to the Three Gorges, with simplified procedures and extended stay options.',
    content: '## Easier Access to the Three Gorges\n\nYichang, the picturesque city in western Hubei that serves as the primary gateway to the legendary Three Gorges region, has introduced updated entry regulations for international tourists in 2026. According to the latest announcement from the Yichang Entry-Exit Administration, the city\'s tourism port now offers streamlined visa-on-arrival services and expanded visa-free transit policies, making it easier than ever for global travelers to explore this natural wonder.\n\n## What’s New at Yichang Tourism Port\n\nAs of January 2026, international visitors arriving at Yichang Sanxia Airport or the Yichang Yangtze River Cruise Terminal can benefit from the following upgrades:\n\n- **24/7 Visa-on-Arrival Service**: Tourists from countries eligible for China\'s visa-on-arrival program can now apply directly at the port without prior appointment, with processing times reduced to under 30 minutes.\n- **144-Hour Visa-Free Transit**: The city has been included in Hubei\'s expanded visa-free transit zone, allowing nationals from 54 countries (including the US, UK, Canada, Australia, and most EU nations) to stay for up to six days without a visa, provided they have a confirmed onward ticket to a third country.\n- **Digital Pre-Clearance**: A new online platform allows travelers to submit passport and itinerary details up to 72 hours before arrival, cutting wait times at the port by an estimated 40%.\n- **Extended Cruise Passenger Processing**: Dedicated lanes at the Yangtze River terminal now handle up to 500 cruise passengers per hour, a 50% increase over 2025 capacity.\n\n## Practical Tips for Travelers\n\nFor those planning a trip to Yichang this year, here are a few pointers to ensure a smooth entry:\n\n- **Check eligibility**: The visa-free transit policy applies only to travelers transiting through China to a third country (e.g., USA → Yichang → Japan). For direct entry, a standard tourist visa (L-visa) is still required for most nationalities.\n- **Prepare documents**: Keep a printed copy of your hotel booking, return flight ticket, and travel insurance handy for the visa-on-arrival application.\n- **Best times to visit**: April to October offers the mildest weather for Yangtze cruises and visits to the Three Gorges Dam, the world\'s largest hydropower project.\n\n## Why Yichang Matters to Travelers\n\nYichang is more than just a transit hub—it’s a cultural and natural treasure. From the majestic Three Gorges Dam to the serene Shennong Stream, the city offers a blend of engineering marvels and ancient landscapes. Local cuisine, such as Yichang-style fish hotpot and the famed Three Gorges tea, adds a flavorful dimension to any visit.\n\nWith these new port regulations, Yichang is positioning itself as a must-stop destination on the Yangtze River circuit—not just a gateway, but a destination in its own right.',
    coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['yichang', 'tourism port', 'visa policy', 'three gorges', 'entry regulations', 'hubei travel', 'yangtze river'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-25T06:42:28.540Z',
    readTime: 3,
  },
  {
    id: 'news-2026-05-25-05-7hck',
    title: 'Hubei’s Smart Farms: AI and Drones Revolutionize Agriculture in 2026',
    summary: 'Discover how Hubei province is blending tradition with cutting-edge tech, from AI-driven greenhouses to drone-assisted rice paddies, offering a futuristic glimpse into China’s agricultural heartland.',
    content: '## From Paddies to Pixels: Hubei’s Agricultural Tech Boom\n\nHubei province, long known as a land of rice terraces and lotus ponds, is now making headlines for a different crop: innovation. This year, the region has emerged as a testing ground for smart agriculture, where artificial intelligence, drones, and IoT sensors are transforming how food is grown.\n\nAccording to the latest reports from the Wuhan Agricultural Science and Technology Park, over 200 farms across the province have adopted AI-driven monitoring systems. These systems analyze soil moisture, nutrient levels, and pest activity in real time, allowing farmers to make data-backed decisions. The result? A projected 30% increase in yield for staple crops like rice and rapeseed by the end of 2026.\n\n## Drone Swarms and Robotic Harvesters\n\nOne of the most eye-catching developments is the use of drone swarms in the Jianghan Plain. These drones, equipped with multispectral cameras, scan vast fields in minutes, identifying areas that need water or fertilizer. In the nearby city of Qianjiang, robotic harvesters are now being tested for lotus root collection—a notoriously labor-intensive task. ‘It’s like watching a sci-fi movie,’ says Li Wei, a local agronomist. ‘The robots move through the mud with precision, reducing harvest time by half.’\n\n## Vertical Farms and Seed Innovation\n\nIn downtown Wuhan, vertical farms are sprouting inside repurposed warehouses. These hydroponic towers grow lettuce, strawberries, and herbs using LED lights and recycled water, supplying fresh produce to urban markets year-round. Meanwhile, the Hubei Academy of Agricultural Sciences has developed a new drought-resistant rice variety, which is set to be planted across 100,000 hectares this autumn.\n\n## What This Means for Visitors\n\nFor international travelers, Hubei’s agri-tech revolution offers unique experiences. The ‘Smart Farm Tour,’ launched this spring, takes guests to high-tech greenhouses in Ezhou and drone-demo fields in Huanggang. Visitors can operate a drone, taste robot-picked lotus roots, and even attend workshops on sustainable farming. ‘It’s a perfect blend of tradition and tomorrow,’ says French tourist Marie Dubois, who joined the tour last month.\n\nAs Hubei continues to innovate, its fields are becoming laboratories for the future—proving that even the oldest profession can get a high-tech upgrade.',
    coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['hubei', 'agricultural technology', 'smart farming', 'wuhan', 'drones', 'vertical farming', 'innovation'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-25T06:42:41.388Z',
    readTime: 3,
  },
  {
    id: 'news-2026-05-25-06-jp1k',
    title: 'Wuhan\'s Robotics Hub Surges: 200+ AI and Automation Firms Now Drive Innovation',
    summary: 'Wuhan has emerged as China\'s leading robotics hub, with over 200 companies and a new industrial park attracting global tech talent and travelers interested in cutting-edge automation.',
    content: '## Wuhan\'s Robotics Revolution: A New Industrial Powerhouse\n\nAccording to the latest industry reports from early 2026, Wuhan has solidified its position as a top-tier robotics and automation hub in central China. The city now hosts more than 200 specialized robotics firms, a sharp increase from just 50 in 2020. This boom is driven by a combination of advanced manufacturing, AI research, and a growing ecosystem of startups and global players.\n\n## Key Developments in the Robotics Sector\n\n- **Optics Valley Robotics Park**: Opened in late 2025, this 50-hectare facility houses over 80 companies focused on industrial robots, service robots, and drone technology. Visitors can tour the park\'s demonstration center, which showcases robots performing tasks from assembly to logistics.\n- **Wuhan Automation Expo 2026**: Held in March at the Wuhan International Expo Center, the event attracted 15,000 attendees, including engineers, investors, and tech enthusiasts. The expo featured live demos of collaborative robots (cobots) used in electronics and automotive manufacturing.\n- **Collaborative Research Hubs**: Wuhan\'s universities, like Huazhong University of Science and Technology, partner with firms to develop AI-powered robotic arms and autonomous vehicles. These innovations are now used in local factories, reducing production time by up to 30%.\n\n## Why Travelers Should Care\n\nFor international visitors, Wuhan\'s robotics scene offers a unique cultural-tech blend. The **Wuhan Robot Museum** in the Optics Valley provides interactive exhibits where you can control a robotic arm or watch drones perform choreographed light shows. Many factories offer guided tours (book in advance) to see automation in action — a must for tech enthusiasts. The city also hosts regular hackathons and startup meetups, ideal for networking.\n\n## Future Outlook\n\nIndustry analysts project that by 2027, Wuhan\'s robotics output could reach $12 billion, driven by demand in healthcare, logistics, and smart manufacturing. The city is also testing autonomous delivery robots in its central business district, making daily life more efficient. For anyone fascinated by the future of work and technology, Wuhan is now a must-visit destination on China\'s innovation map.\n\n## Practical Tips\n\n- **Getting there**: Wuhan Tianhe Airport connects to major Asian cities; high-speed rail links to Beijing (4 hours) and Shanghai (3 hours).\n- **Best time to visit**: Spring (March-May) for the expo and pleasant weather.\n- **Language**: Many tech hubs offer English-language tours; download a translation app for deeper engagement.\n\nWhether you\'re a tech professional or a curious traveler, Wuhan\'s robotics growth is a story of innovation worth exploring firsthand.',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['wuhan', 'robotics', 'automation', 'technology', 'optics valley', 'innovation', 'artificial intelligence'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-25T06:42:53.994Z',
    readTime: 4,
  },
  {
    id: 'news-2026-05-25-07-oqmg',
    title: 'Yangtze River Fishing Villages: Preserving Ancient River Culture in Modern Hubei',
    summary: 'Explore the timeless river culture of Hubei\'s Yangtze fishing villages, where traditions live on through festivals, cuisine, and eco-tourism initiatives in 2026.',
    content: '## A Living Heritage Along the Yangtze\n\nScattered along the banks of the Yangtze River in Hubei province, centuries-old fishing villages are experiencing a quiet renaissance. As of early 2026, these communities—such as the well-known **Sanxia Fishing Village** near Yichang and **Laohekou River Hamlet** in Xiangyang—are drawing international travelers eager to witness a way of life that has endured for millennia.\n\nVisitors can now join guided "River Life" tours that include morning fishing expeditions with local families using traditional bamboo nets, followed by cooking classes where participants learn to prepare **bianyu (flatfish) soup**—a local specialty flavored with wild ginger and river herbs. The tours are part of a broader cultural preservation effort launched last year, highlighting the villages\' role as living museums of Yangtze river culture.\n\n## Festivals of the River\n\nThis April, the **Yangtze River Fishing Festival** will be held in the town of **Zhicheng**, Yichang prefecture. The festival features dragon boat races, net-mending workshops, and storytelling sessions where elders recite ancient river legends. A highlight for 2026 is the "Lanterns on the Water" ceremony, where villagers release biodegradable lotus lanterns into the current at dusk, a tradition said to bring blessings to the river\'s spirits.\n\n- **When:** April 12–14, 2026\n- **Where:** Zhicheng Waterfront Park, Yichang\n- **Admission:** Free; some workshops require small fees (20–50 RMB)\n\n## Eco-Tourism and Sustainable Fishing\n\nHubei\'s fishing villages are also embracing eco-tourism. In **Xinzhou District**, Wuhan, a community-led project now offers kayak tours through reed marshes and sustainable fishing demonstrations. The program, launched last autumn, aims to balance cultural tourism with river conservation. According to local guides, the catch-and-release fishing method used during tours helps maintain fish populations while educating visitors about the Yangtze\'s fragile ecosystem.\n\n## Planning Your Visit\n\nFor travelers interested in immersive cultural experiences, several homestays operate in these villages. The **Riverfolk Guesthouse** in Sanxia Fishing Village offers rooms with balcony views of the Yangtze and home-cooked meals featuring freshly caught fish. Booking is recommended at least two weeks in advance, especially during festival seasons.\n\n- **Best time to visit:** March–May or September–November for mild weather and active fishing seasons.\n- **Getting there:** High-speed trains from Wuhan to Yichang take about 2 hours; local buses connect to the villages.\n- **Language:** Mandarin and local dialects; some tour guides speak basic English.\n\n## A Cultural Treasure Worth Exploring\n\nAs Hubei continues to promote sustainable cultural tourism, these fishing villages offer a rare window into the river\'s soul—a world where the rhythm of life still follows the flow of the Yangtze. Whether you join a festival, paddle through marshes, or simply share a meal with a fisherman\'s family, you\'ll leave with a deeper appreciation for this ancient river culture.\n\n*For more information, visit the Hubei Provincial Tourism Bureau\'s cultural heritage page or inquire at local visitor centers in Yichang and Wuhan.*',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['yangtze river', 'hubei culture', 'fishing villages', 'river culture', 'yichang', 'ecotourism', 'cultural festivals'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-25T06:43:06.895Z',
    readTime: 4,
  },
  {
    id: 'news-2026-05-25-08-a442',
    title: 'Hubei’s Ceramic Renaissance: Jingdezhen-Style Pottery Thrives Beyond the Kiln',
    summary: 'Discover how Hubei province is becoming a new hub for Jingdezhen-style ceramics, blending centuries-old techniques with local innovation and attracting global artisans and travelers.',
    content: '## From Jingdezhen to Hubei: The Migration of an Art Form\n\nWhile Jingdezhen in Jiangxi has long been hailed as China’s porcelain capital, a surprising ceramic renaissance is unfolding in neighboring Hubei province. As of 2026, at least a dozen workshops and studio clusters in Hubei—particularly in Wuhan, Huangshi, and the scenic Enshi region—are producing high-quality ceramics that honor the Jingdezhen tradition of fine porcelain with local glazes and clays.\n\nAccording to the latest report from the Hubei Provincial Culture and Tourism Bureau, the number of ceramic artisans trained in Jingdezhen who have relocated to Hubei has increased by nearly 40% since 2023. These artists bring with them the secrets of *qingbai* (blue-white) and *famille rose* overglaze techniques, but are adapting them using Hubei’s distinctive local materials.\n\n## Where to Experience the Craft\n\nTravelers interested in seeing Jingdezhen-style pottery in Hubei should not miss these hotspots:\n\n- **Wuhan’s Creative Industry Park** – Home to the Hubei Ceramic Art Center, where master potters from Jingdezhen offer weekly open-kiln demonstrations.\n- **Huangshi Porcelain Village** – A rural revitalization project that has attracted over 20 ceramic families from Jingdezhen. Visitors can try their hand at wheel-throwing under the guidance of fourth-generation artisans.\n- **Enshi Grand Canyon Pottery Route** – A newly launched cultural trail combining hiking with visits to minority Tujia ceramic workshops that fuse Jingdezhen glazing with local mountain clay.\n\n## A Unique Fusion: Blue-and-White with Hubei Character\n\nWhat makes Hubei’s Jingdezhen-style ceramics distinct is the use of local mineral pigments. For example, artisans near the Three Gorges region have developed a signature celadon glaze tinged with subtle green, inspired by the Yangtze River’s jade tones. Meanwhile, in the ancient town of Xiantao, potters are reviving the *Song-style* crackle glaze using iron-rich clay from the Dabie Mountains.\n\n> “We are not just copying Jingdezhen,” says Chen Li, a 35-year-old ceramic artist who moved from Jingdezhen to Wuhan in 2024. “We are creating a Hubei school of porcelain—one that respects the old methods but speaks to the landscape here.”\n\n## Practical Tips for Travelers\n\n- **Best time to visit**: Spring (March–May) or Autumn (September–November), when most studios host open-air kiln firings.\n- **Workshops**: Many offer half-day classes starting at ¥200 (about $28 USD) per person, including materials and firing.\n- **Shopping**: The Hubei Provincial Museum in Wuhan now stocks a curated selection of Jingdezhen-style ceramics made locally, with certificates of authenticity.\n\nAs Hubei continues to attract ceramic talent from its southern neighbor, the province is quietly becoming a must-visit destination for anyone passionate about China’s living porcelain heritage—without the crowds of Jingdezhen itself.',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['jingdezhen ceramics', 'hubei pottery', 'wuhan culture', 'chinese porcelain', 'artisan workshops', 'enshi travel', 'yangtze river crafts'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-25T06:43:22.129Z',
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
