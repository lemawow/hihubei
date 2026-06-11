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
    id: 'news-2026-06-11-01-mn8w',
    title: 'Hubei Provincial Museum Unveils New Exhibitions with Rare Artifacts in 2026',
    summary: 'The Hubei Provincial Museum in Wuhan has launched new exhibitions showcasing rare bronze vessels, ancient musical instruments, and recently excavated artifacts from the Zeng state.',
    content: '## New Treasures on Display\n\nThe Hubei Provincial Museum in Wuhan has opened a series of new exhibitions this year, featuring over 200 recently restored artifacts and several pieces never before shown to the public. The centerpiece of the new displays is a collection of intricately carved bronze ritual vessels from the Warring States period (475–221 BCE), unearthed during excavations in Suizhou in 2025.\n\n## Highlights of the Exhibition\n\n- **Zeng State Bronzes**: Visitors can now admire a set of sixteen bronze *ding* (tripod cauldrons) with detailed dragon motifs, believed to have been used in royal ceremonies. These pieces are exceptionally well-preserved, with some still showing traces of original gold inlay.\n- **Musical Instruments Revival**: A new interactive section allows guests to hear digital recreations of ancient bell chimes, including a replica of the famous Marquis Yi of Zeng bells. The museum partnered with Wuhan Conservatory of Music to create an immersive sound experience.\n- **Jade and Lacquerware**: A dedicated gallery showcases jade ornaments and lacquerware from the Chu state, including a recently discovered lacquer screen decorated with phoenix and cloud patterns, dating to the 4th century BCE.\n\n## Behind the Restoration\n\nAccording to museum sources, the new exhibitions are the result of a multi-year restoration project. Conservators used advanced imaging technology to clean and stabilize fragile artifacts. One of the most challenging pieces was a bronze water basin with intricate openwork handles, which required six months of careful treatment.\n\n## Practical Info for Visitors\n\nThe new exhibitions are housed in the museum\'s main hall and the newly renovated East Wing. English audio guides and bilingual labels are available for all major displays. The museum is located at 156 Donghu Road, Wuchang District, and is open Tuesday through Sunday from 9:00 AM to 5:00 PM (last entry at 4:00 PM). Admission is free, but advance booking is recommended during peak seasons.\n\n## A Cultural Hub\n\nHubei Provincial Museum remains one of China\'s top museums for ancient bronzes and Chu culture. The new exhibitions solidify its reputation as a must-visit destination for anyone interested in the rich history of the Yangtze River region.',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['hubei provincial museum', 'wuhan', 'bronze artifacts', 'zeng state', 'ancient chinese music', 'cultural tourism', 'chu culture'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-11T06:56:22.109Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-11-02-9t2s',
    title: 'Wuhan’s Yangtze River Night Cruise Dazzles with New Light Shows in 2026',
    summary: 'Discover the upgraded Yangtze River night cruise experience in Wuhan, featuring immersive light shows, cultural performances, and new itineraries for 2026.',
    content: '## A New Dawn for Wuhan’s Yangtze Night Cruise\n\nWuhan’s iconic Yangtze River night cruise has undergone a spectacular upgrade this year, offering international travelers an unforgettable journey through the heart of Hubei province. As of 2026, the cruise now features an extended route that glides past the city’s most illuminated landmarks, from the historic Yellow Crane Tower to the modern Wuhan Yangtze River Bridge.\n\n## Immersive Light Shows and Cultural Performances\n\nThe centerpiece of the experience is a synchronized light show that spans both riverbanks. Using cutting-edge projection mapping technology, the city’s skyline transforms into a canvas of moving art, depicting scenes from ancient Chu culture, modern Wuhan life, and natural wonders like the Three Gorges. The show runs nightly from 7:30 PM to 9:00 PM, with an additional late-night session on weekends.\n\n- **New for 2026:** A live traditional Chinese music performance has been added to select cruises, featuring guzheng and erhu players on deck.\n- **Interactive elements:** Passengers can use a dedicated mobile app to trigger special light effects on the bridges as the cruise passes underneath.\n\n## Practical Tips for Travelers\n\n- **Boarding points:** The main terminal is at Wuhan Port (江汉路), with a secondary dock near the Hankow Customs House. Tickets start at ¥120 for a standard 90-minute cruise.\n- **Best time to go:** April to October offers the warmest evenings and clearest skies. Booking in advance is recommended for weekend departures.\n- **Photography:** Bring a tripod for long-exposure shots of the illuminated bridges – the Wuhan Yangtze River Bridge looks especially stunning from the water.\n\n## What International Visitors Say\n\nRecent reviews on travel platforms highlight the cruise as a “must-do” for anyone visiting central China. “The combination of ancient poetry projected on modern skyscrapers is breathtaking,” wrote a traveler from France. “It’s like watching the city tell its own story,” added a visitor from Australia.\n\n## A Growing Attraction\n\nAccording to recent tourism data, the Yangtze River night cruise has seen a 20% increase in international visitors since the start of 2026, thanks in part to China’s expanded visa-free transit policies. The city is also promoting the cruise as part of a “Waterfront Lights” package that includes dinner at a riverside restaurant and a visit to the newly renovated Wuhan Art Museum.\n\nWhether you’re a first-time visitor or a returning traveler, the Wuhan Yangtze River night cruise offers a fresh perspective on one of China’s most dynamic cities. Don’t miss the chance to see the river of poetry come alive after dark.',
    coverImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['wuhan', 'yangtze river', 'night cruise', 'light show', 'cultural tourism', 'hubei', 'travel tips'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-11T06:56:34.484Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-11-03-jes9',
    title: 'Wuhan Tianhe Airport Expands Global Reach with New International Routes in 2026',
    summary: 'Discover the latest international flight updates from Wuhan Tianhe Airport, including new routes to Southeast Asia and Europe, boosting Hubei\'s connectivity for global travelers.',
    content: '## New Routes and Increased Connectivity\n\nWuhan Tianhe International Airport (WUH) has announced significant expansions to its international flight network as of early 2026, making it easier than ever for global travelers to explore Hubei province. According to the latest reports from airport authorities, new direct flights have been launched to key destinations in Southeast Asia and Europe, enhancing Wuhan\'s role as a central hub for air travel in central China.\n\nThis year, passengers can enjoy direct services to **Bangkok, Thailand**, with daily flights operated by China Southern Airlines, offering seamless connections to one of Asia\'s most popular tourist destinations. Additionally, a new route to **Kuala Lumpur, Malaysia**, has been introduced, with four weekly flights, catering to both leisure and business travelers. For those heading to Europe, **Frankfurt, Germany**, now has three weekly non-stop flights, providing a gateway to the continent and beyond.\n\n## Boosting Tourism and Business Travel\n\nThe expansion is part of a broader effort to revitalize international tourism and trade in Hubei. Wuhan, known for its rich history and vibrant culture, including the iconic Yellow Crane Tower and the scenic East Lake, is now more accessible to international visitors. The airport has also upgraded its facilities, including new immigration counters and digital check-in kiosks, to handle increased passenger flow efficiently.\n\n- **Southeast Asia Routes**: Daily flights to Bangkok, four weekly to Kuala Lumpur, and three weekly to Singapore (starting March 2026).\n- **European Routes**: Three weekly flights to Frankfurt, with plans to add a route to Paris later this year.\n- **Regional Connections**: Enhanced frequencies to Tokyo and Seoul, now with two daily flights each.\n\n## Visa-Free Transit and Travel Tips\n\nFor international travelers, Wuhan Tianhe Airport now offers a **24-hour visa-free transit** policy for passengers holding valid tickets to a third country. This makes it convenient for layovers to explore the city\'s culinary scene, such as sampling hot dry noodles (re gan mian) or visiting the Hubei Provincial Museum.\n\nTravelers are advised to check visa requirements for their specific destinations, as China\'s visa policies have seen updates this year. The airport\'s website and mobile app provide real-time flight information and travel advisories in multiple languages.\n\n## Future Outlook\n\nWith these updates, Wuhan is positioning itself as a key aviation hub in central China. The airport plans to introduce more long-haul routes to North America and Africa by late 2026, further solidifying its global connectivity. Whether you\'re a culture enthusiast or a business traveler, Wuhan Tianhe Airport is your gateway to the heart of Hubei.\n\nStay tuned to HiHubei.com for more travel updates and tips!',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['wuhan tianhe airport', 'international flights', 'hubei travel', 'flight routes', 'visa-free transit', 'southeast asia', 'europe flights'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-11T06:56:48.091Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-11-04-zpr8',
    title: 'Hubei Opens Wider: 144-Hour Visa-Free Transit Now Easier for International Travelers',
    summary: 'China\'s expanded 144-hour visa-free transit policy now includes more entry points in Hubei, allowing travelers from 54 countries to explore Wuhan and beyond without a visa.',
    content: '## Big News for Travelers: Hubei Joins the 144-Hour Visa-Free Club\n\nAs of early 2026, international travelers passing through Hubei can take advantage of China’s updated 144-hour visa-free transit policy. This means eligible visitors from 54 countries — including the United States, Canada, the United Kingdom, Australia, Japan, and most EU nations — can now explore Wuhan and surrounding areas for up to six days without applying for a visa in advance.\n\n## How It Works\n\nThe policy applies to passengers transiting through any of Hubei’s designated entry ports, including:\n- **Wuhan Tianhe International Airport** (the main hub)\n- **Wuhan High-Speed Railway Station** (newly added in 2025 for select international routes)\n\nTo qualify, travelers must:\n- Hold a valid passport from one of the 54 eligible countries\n- Have a confirmed onward ticket to a third country or region (not the country of origin) within 144 hours\n- Enter and exit through the same port (e.g., fly into Wuhan Tianhe and fly out from the same airport)\n\nOnce cleared, visitors can freely explore the entire Hubei province — not just Wuhan. This opens up incredible opportunities to visit:\n- **Yellow Crane Tower** and the scenic East Lake in Wuhan\n- The ancient **Wudang Mountains**, a UNESCO World Heritage site\n- The Three Gorges region along the Yangtze River\n- The historic city of **Jingzhou** and its well-preserved city walls\n\n## Why This Matters for Travelers\n\nPreviously, Hubei was not included in the 144-hour visa-free transit zone — travelers had to enter through cities like Shanghai or Beijing. Now, with direct international flights to Wuhan from destinations such as Paris, London, Dubai, and Tokyo, the province is positioning itself as a convenient gateway to central China.\n\n> "This policy change is a game-changer for travelers who want to experience authentic Chinese culture without the hassle of a visa," says a travel consultant at HiHubei.com. "You can land in Wuhan, spend a few days exploring the food and history, then hop on a flight to Southeast Asia or beyond."\n\n## Practical Tips for First-Timers\n\n- **Plan your itinerary carefully**: You must leave China within 144 hours — no extensions.\n- **Keep your documents ready**: Airlines and immigration officers will check your onward ticket.\n- **Explore beyond Wuhan**: Use the high-speed rail network to visit Yichang (Three Gorges) or Xiangyang (ancient walled city).\n- **Check your nationality**: The list of 54 eligible countries is available on the official China visa website or through your airline.\n\n## Looking Ahead\n\nThe 144-hour visa-free transit policy is part of China’s broader effort to boost tourism and business travel post-pandemic. For Hubei, it’s a chance to welcome more international visitors to its rich blend of natural beauty, history, and modern urban life. Whether you’re a culture enthusiast or a business traveler, this policy makes a stop in Hubei easier than ever.',
    coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['144-hour visa-free transit', 'hubei travel policy', 'wuhan airport', 'china visa policy 2026', 'international travel hubei', 'wuhan transit'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-11T06:57:00.934Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-11-05-en47',
    title: 'Hubei Reaches for the Stars: Satellite Tech and Space Innovation Soar in 2026',
    summary: 'From smart satellite manufacturing to space tourism tie-ins, Hubei is making headlines in aerospace technology this year.',
    content: '## Blasting Off: Hubei\'s Aerospace Ambitions Take Shape\n\nThis year, Hubei province has solidified its reputation as a rising hub for aerospace and satellite technology. While often celebrated for its ancient history and natural wonders, Hubei is now capturing global attention with cutting-edge space innovations that are reshaping the region\'s identity.\n\nAccording to the latest reports from industry insiders, the Wuhan National Space Industry Base—located in the Xinzhou District—has become a magnet for satellite manufacturing startups. As of early 2026, the base hosts over 50 companies specializing in small satellite design, remote sensing, and launch vehicle components. This cluster is driving down costs and speeding up production, making Hubei a key player in China\'s commercial space sector.\n\n## Satellites with a Purpose: From Agriculture to Tourism\n\nOne of the most exciting developments is the deployment of Hubei\'s first constellation of Earth observation satellites. Launched in partnership with local universities, these satellites provide real-time data for agriculture, urban planning, and environmental monitoring. For travelers, this means more accurate weather forecasts and better insights into Hubei\'s stunning landscapes—from the misty peaks of the Wudang Mountains to the vast wetlands of Honghu Lake.\n\n- **Smart Farming**: Satellite imagery helps farmers in Jianghan Plain optimize irrigation and pest control.\n- **Cultural Heritage**: High-resolution images assist in the preservation of ancient sites like the Yellow Crane Tower.\n- **Disaster Response**: Rapid mapping supports flood monitoring along the Yangtze River.\n\n## Space Tourism on the Horizon?\n\nHubei is also exploring the intersection of aerospace and tourism. The Wuhan Space Museum, which opened last year, features interactive exhibits on rocket science and satellite technology. Plans are underway for a "space experience zone" near the East Lake, where visitors can try simulated zero-gravity flights and view actual satellite launches via live feeds. While tickets to orbit remain a distant dream, the province is betting on immersive attractions to draw sci-fi enthusiasts and tech lovers.\n\n## What This Means for Visitors\n\nFor international travelers, Hubei\'s aerospace boom offers unique opportunities. Guided tours of the Wuhan National Space Industry Base are now available by appointment, allowing guests to see satellite assembly lines up close. The base also hosts an annual Space Innovation Expo every October, featuring talks, workshops, and even a model rocket competition.\n\nMoreover, the province\'s investment in satellite tech means better navigation apps and more reliable internet connectivity in remote tourist spots, such as the Shennongjia forest area. As a result, visitors can expect smoother travel experiences and richer digital content about Hubei\'s hidden gems.\n\n## The Future Looks Up\n\nAs of 2026, Hubei is not just a land of ancient wonders—it\'s a launchpad for tomorrow\'s technology. Whether you\'re a space buff, a tech entrepreneur, or a curious traveler, the province\'s aerospace developments are worth watching. With continued innovation and a welcoming attitude toward global visitors, Hubei is proving that the sky is no longer the limit.',
    coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['hubei aerospace', 'satellite technology', 'wuhan technology', 'space tourism', 'innovation hubei', 'scienceandtech'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-11T06:57:14.416Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-11-06-ozzk',
    title: 'Wuhan\'s Smart Transportation Revolution: AI-Powered Traffic and Autonomous Buses Transform City Travel',
    summary: 'Discover how Wuhan is deploying AI-driven traffic management, autonomous buses, and smart parking to make city travel faster, greener, and more convenient for residents and visitors alike.',
    content: '## Smart Traffic Lights That Think for Themselves\n\nWuhan, the sprawling capital of Hubei province, has taken a giant leap into the future of urban mobility. As of early 2026, the city\'s smart transportation system now covers over 80% of major arterial roads. Using real-time data from thousands of sensors and cameras, AI-powered traffic lights adjust signal timings on the fly—cutting average commute times by 15% and reducing congestion at 200 key intersections. For travelers renting cars or taking taxis, this means fewer frustrating delays and a smoother ride across the Yangtze River bridges.\n\n## Autonomous Buses: Ride the Future on Line 599\n\nOne of the most eye-catching innovations is the autonomous bus service on Route 599, which started full commercial operation this year. These electric, AI-driven minibuses navigate a 12-kilometer loop through the Optics Valley (Guanggu) district—home to hundreds of tech companies. Free to ride for the first month of launch, the buses now cost just 1 yuan (about $0.14). They feature voice-activated information screens, contactless payment, and a dedicated safety attendant onboard. For international visitors, this is a safe, affordable, and futuristic way to explore the city\'s innovation hub.\n\n## Smart Parking and Integrated Apps\n\nFinding a parking spot in Wuhan\'s busy commercial areas used to be a headache. Now, the city\'s smart parking system—integrated with the "Wuhan Commute" app—shows real-time availability for over 50,000 parking spaces across 300 lots. The app also combines metro schedules, bike-sharing locations, and bus arrivals into one platform, with an English-language interface rolling out later this year. Tourists can plan door-to-door trips without needing a local SIM card, as the app works offline via cached maps.\n\n## Eco-Friendly Traffic Management\n\nBeyond convenience, Wuhan\'s smart transportation is tackling air quality. In 2025, the city launched a pilot program that uses AI to reroute traffic away from high-pollution zones during peak smog hours. Trucks and high-emission vehicles are guided onto designated green corridors. This has already reduced nitrogen dioxide levels by 8% in downtown areas. Bicycle lanes have also been expanded to 1,200 kilometers, with smart bike-share docks that automatically redistribute bikes based on demand.\n\n## What This Means for Visitors\n\nFor anyone planning a trip to Wuhan, these upgrades make getting around easier than ever. The Metro Line 11 now offers contactless payment with foreign credit cards, and smart kiosks at major stations provide multi-language directions. Whether you\'re heading to the Yellow Crane Tower or the Hubei Provincial Museum, expect shorter wait times, clearer signage, and a glimpse of China\'s smart-city future.',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['wuhan', 'smart transportation', 'autonomous buses', 'ai traffic lights', 'optics valley', 'hubei tech', 'urban mobility'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-11T06:57:28.991Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-11-07-bx7z',
    title: 'Badong\'s Cliff-Hanging Houses: Ancient Wisdom Meets Modern Tourism on the Yangtze',
    summary: 'Discover the breathtaking cliff-hanging houses of Badong along the Yangtze River—a living heritage of Tujia architecture now drawing global travelers with new cultural tours.',
    content: '## A Vertical Village Defying Gravity\n\nPerched precariously on the sheer limestone cliffs of the Yangtze River Gorges, the cliff-hanging houses of Badong County in western Hubei continue to captivate visitors in 2026. These traditional stilted wooden structures, known locally as *diaojiaolou*, have been home to Tujia ethnic minority families for centuries. Built directly into the rock face using interlocking beams and stone foundations—no nails required—they represent a pinnacle of pre-modern engineering adapted to extreme terrain.\n\nThis year, a surge in cultural tourism has put these architectural marvels in the spotlight. According to the latest reports from Hubei\'s cultural heritage authorities, several ancient clusters along the Yangtze\'s upper reaches have been restored and opened for public visits, offering a rare glimpse into a way of life that harmonizes human dwelling with nature\'s verticality.\n\n## What Makes Them Unique?\n\nThe houses are not single structures but entire hamlets stacked along the cliffside, connected by narrow stone stairways and wooden catwalks. Each home features:\n\n- **Stilts** anchored into rock crevices, elevating living quarters above seasonal flood levels.\n- **Overhanging balconies** with panoramic views of the Yangtze River and surrounding gorges.\n- **Roofs of grey tiles** and walls of fir wood, designed to withstand humid summers and chilly mist from the river.\n- **Multi-generational layouts**, with ground floors for livestock or storage and upper floors for family life.\n\n## Tourism Access in 2026\n\nBadong County has recently introduced a dedicated "Cliff Village Cultural Walk" that connects three restored hamlets: *Shennongxi*, *Wuxia* (one of the Three Gorges), and the lesser-known *Dongkou* village. The route includes guided tours in English and Mandarin, explaining the history of the Tujia people and their sustainable building techniques.\n\nTo reach the houses, travelers can take a Yangtze River cruise from Yichang to Badong (approximately 4 hours), then a short bus ride to the trailhead. As of 2026, the Badong section of the river has also added a new glass-floored observation deck—dubbed "Sky Terrace"—that extends over the cliff edge, providing a safe but thrilling vantage point for photography.\n\n## Preservation Meets Modern Living\n\nWhile some houses remain inhabited by elderly Tujia residents, many have been converted into boutique guesthouses and tea houses. Visitors can now stay overnight in a renovated cliff house, waking to mist rolling over the Yangtze. Local artisans sell handwoven brocades and sour-plum wine, staples of Tujia culture.\n\nFor international travelers, the best time to visit is spring (March–May) or autumn (September–November) when temperatures are mild and river levels reveal the full height of the cliffs. Badong\'s cliff-hanging houses are more than a photo opportunity—they are a testament to human resilience and a must-see for anyone exploring the cultural riches of Hubei.',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['badong', 'yangtze river', 'cliff-hanging houses', 'tujia architecture', 'hubei culture', 'three gorges', 'cultural tourism'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-11T06:57:43.161Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-11-08-ug6n',
    title: 'Shiyan: The Birthplace of China’s Automotive Industry Revs Up for Heritage Tourism',
    summary: 'Discover how Shiyan, once a remote mountain town, became the cradle of China’s auto industry and is now turning its manufacturing legacy into a unique cultural tourism experience.',
    content: '## From Mountain Workshop to Motor City\n\nNestled in the rugged mountains of northwestern Hubei, Shiyan might seem an unlikely birthplace for an automotive empire. Yet this city, which as recently as the 1960s was a sparsely populated cluster of villages, transformed into the heart of China’s commercial vehicle industry. The story begins with the Second Automobile Works (now Dongfeng Motor Corporation), which set up operations here in 1969, chosen for its strategic inland location. Within two decades, Shiyan earned the nickname "Motor City" and became a powerhouse of truck manufacturing.\n\nToday, the city is leveraging its rich industrial heritage to attract a new kind of visitor. According to the latest Shiyan Municipal Tourism Bureau data, the city welcomed over 1.2 million cultural tourists in 2025, with a 30% year-on-year increase expected in 2026. The biggest draw? The newly expanded **Shiyan Automobile Heritage Park**.\n\n## What to See: The Automobile Heritage Experience\n\n- **Dongfeng Museum Complex:** Located on the original factory site, this museum showcases over 200 vintage vehicles, including the first heavy-duty truck produced by Dongfeng in 1975. Visitors can walk through the original assembly line, preserved exactly as it was in the 1980s.\n- **Factory Tunnel Tours:** During the Cold War era, parts of the factory were built inside mountains for security. These tunnels, stretching over 3 kilometers, are now open for guided tours — a spine-tingling journey through industrial history.\n- **Test Track Rides:** For adrenaline seekers, the heritage park offers passenger rides in restored vintage trucks on a 1.5-kilometer test track. It’s a bumpy, noisy, and utterly authentic experience.\n\n## A Living Culture of the Road\n\nBeyond the museums, Shiyan’s automobile culture permeates daily life. The city’s **May 1 Automobile Culture Festival** (held annually since 2020) features vintage car parades, truck customization competitions, and street food stalls serving "engineer’s noodles" — a local dish invented by factory workers in the 1970s. This year’s festival, scheduled for May 1-5, 2026, will include a special exhibition on the history of China’s long-haul trucking routes.\n\n## Getting There & Practical Tips\n\nShiyan is easily accessible by high-speed rail from Wuhan (about 2.5 hours) or Xi’an (1.5 hours). The Automobile Heritage Park is a 20-minute taxi ride from Shiyan East Railway Station. English-language guided tours are available upon request — book at least 48 hours in advance through the park’s official WeChat mini-program. Entrance is 80 RMB (about $11 USD), with discounts for students and seniors.\n\nFor culture enthusiasts, Shiyan offers a rare chance to see how a single industry shaped a city’s identity — from its architecture and cuisine to the pride of its people. Whether you’re a car nut or a history buff, this is a destination that truly runs on stories.',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['shiyan', 'automobile culture', 'dongfeng motor', 'industrial heritage', 'hubei tourism', 'vintage cars', 'cultural tourism'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-11T06:57:59.277Z',
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
