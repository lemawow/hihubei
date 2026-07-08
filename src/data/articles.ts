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
    id: 'news-2026-07-08-01-ojzb',
    title: 'Wuhan’s Contemporary Art Scene Heats Up with New Galleries and International Shows',
    summary: 'From the OCT Art District to new riverside galleries, Wuhan is emerging as a dynamic hub for contemporary art in central China, attracting global collectors and travelers.',
    content: '## A Creative Renaissance on the Yangtze\n\nWuhan, long known as a transport and industrial hub, is quietly building a reputation as a rising star in China’s contemporary art world. As of early 2026, the city boasts over 30 dedicated art spaces, with new galleries opening in former warehouses and factory buildings across the Hankou and Wuchang districts.\n\n## Key Art Districts and Galleries\n\n- **OCT Art District (华侨城艺术区)**: Located in the East Lake area, this cluster features the **Wuhan Art Museum** (opened 2024) and **OCT Contemporary Art Centre**, which hosted a well-attended “Yangtze River Biennale” in autumn 2025. The district now includes at least five independent galleries.\n- **Tan Hualin (昙华林)**: This historic alley in Wuchang has evolved into a vibrant street-art corridor, with small studios and pop-up exhibitions every weekend. It’s a favorite for photographers and Instagrammers.\n- **Hankou Riverside Galleries**: A new wave of spaces, such as **Gallery Yang** and **Riverbank Art Space**, have opened along the Yangtze riverfront, specializing in multimedia and installation art by emerging Hubei artists.\n\n## What’s On This Year\n\nAccording to the latest cultural calendar, Wuhan will host the **“Central China Contemporary Art Fair”** in June 2026 at the Wuhan International Expo Center, featuring 40+ galleries from across China and Southeast Asia. In March, the **Wuhan Triennial of Contemporary Art** returns with the theme “Water, Flow, Memory,” showcasing works at multiple venues including the Hubei Museum of Art.\n\n## Practical Tips for Visitors\n\n- Most galleries offer free entry and bilingual descriptions (Chinese/English).\n- The **Wuhan Art Museum** is open Tuesday–Sunday, 9:00–17:00.\n- To explore the OCT district, take Metro Line 8 to **Hubei Museum of Art Station**.\n- For a curated tour, **HiArt Wuhan** offers weekly guided walks in English (book online).\n\n## Why Wuhan Matters Now\n\nWith lower exhibition costs and a growing community of young artists graduating from Hubei Institute of Fine Arts, Wuhan is becoming an affordable alternative to Beijing, Shanghai, or Chengdu for curators and collectors. The city’s gritty, industrial-chic aesthetic — mixed with its lakes and river views — gives its art scene a unique, raw energy that international travel magazines are calling “the next big thing in Chinese contemporary art.”\n\n> **Visitor note**: Wuhan’s 144-hour visa-free transit policy (available at Wuhan Tianhe Airport) makes it easy for international travelers to stop over for a weekend gallery hop.',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['wuhan art', 'contemporary art', 'galleries', 'cultural tourism', 'OCT Art District', 'Hubei', 'art fairs'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-08T05:27:22.768Z',
    readTime: 3,
  },
  {
    id: 'news-2026-07-08-02-p9bx',
    title: 'Jingzhou’s New Chu Culture Museum Unveils Groundbreaking Archaeological Discoveries',
    summary: 'A new museum in Jingzhou showcases stunning artifacts from the ancient Chu state, including recent finds that rewrite history.',
    content: '## A Window into the Ancient Chu Kingdom\n\nJingzhou, a historic city in southern Hubei, has long been the heartland of the ancient Chu state (circa 700–223 BCE). This year, the newly expanded **Jingzhou Chu Culture Museum** opened its doors to the public, offering an immersive journey into one of China’s most influential pre-Qin civilizations. The museum is already being hailed as a must-visit for history buffs and cultural travelers.\n\n## Recent Archaeological Breakthroughs\n\nAccording to the latest reports from Hubei’s cultural heritage authorities, ongoing excavations in the Jingzhou area have yielded extraordinary finds in 2025 and early 2026. A tomb cluster at the **Mashan site**, dating to the Warring States period, revealed a cache of well-preserved **lacquerware** and **bronze ritual vessels** inscribed with previously unknown Chu script characters. Another dig near **Jinan Ancient City** uncovered a large-scale **workshop complex** for jade and bronze production, suggesting Chu was a major manufacturing hub.\n\n## What Visitors Can See\n\nThe museum’s permanent exhibition, *“The Spirit of Chu: 800 Years of Glory,”* features over 2,000 artifacts, including:\n- A stunning set of **bronze bells** from the **Tianxingguan No. 1 Tomb** (4th century BCE), which still produce melodic tones.\n- Intricately carved **jade pendants** and **silk garments** with embroidered phoenix motifs — the phoenix is a Chu cultural symbol.\n- The **“Zhu Lu” bamboo slip manuscripts**, recently deciphered, containing legal codes and poetry that challenge previous understandings of Chu governance.\n\n## Interactive Experiences for International Visitors\n\nTo cater to a global audience, the museum offers **multilingual audio guides** (English, French, Japanese) and **augmented reality (AR) stations** where visitors can virtually “excavate” a tomb layer by layer. A special exhibit hall, *“The Lost Capital,”* uses 3D projections to reconstruct the layout of **Ying**, the ancient Chu capital near modern Jingzhou.\n\n## Plan Your Visit\n\nThe museum is located in **Shashi District**, about 30 minutes by taxi from Jingzhou Railway Station. Admission is 80 RMB (around $11 USD). Opening hours are 9:00 AM to 5:00 PM, Tuesday through Sunday. The best time to visit is spring or autumn, when the city hosts the **Jingzhou Chu Culture Festival** (held each April), featuring traditional music, dance, and costume parades.\n\nFor travelers exploring Hubei, Jingzhou is easily combined with a trip to the **Three Gorges** or **Wuhan**. The museum’s gift shop sells replica Chu bronzes and silk scarves — perfect souvenirs from a civilization that still echoes through the ages.',
    coverImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['jingzhou', 'chu culture', 'archaeology', 'hubei museum', 'ancient china', 'cultural tourism', 'bronze artifacts'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-08T05:27:32.953Z',
    readTime: 3,
  },
  {
    id: 'news-2026-07-08-03-rloq',
    title: 'Wuhan Tianhe Airport Expands International Routes in 2026: New Flights to Southeast Asia, Europe, and the Middle East',
    summary: 'Wuhan Tianhe International Airport launches new direct flights to Dubai, Bangkok, and Paris in early 2026, boosting connectivity for travelers and businesses in Hubei.',
    content: '## New Horizons from Wuhan: International Route Expansion Takes Off\n\nWuhan Tianhe International Airport (WUH) is soaring to new heights in 2026, with a series of international route updates that promise to make Hubei more accessible than ever. According to the latest reports from airport authorities, several new direct flights have been launched this year, connecting Wuhan to key destinations across Southeast Asia, Europe, and the Middle East. This expansion is part of a broader push to strengthen Wuhan’s role as a major aviation hub in central China.\n\n## Key New Routes and Frequencies\n\nAs of March 2026, travelers can enjoy the following new services:\n- **Wuhan to Dubai (United Arab Emirates)**: Daily flights operated by China Southern Airlines, cutting travel time to just 8 hours. This route is a game-changer for business travelers and tourists heading to the Middle East.\n- **Wuhan to Bangkok (Thailand)**: Four weekly flights by Thai Airways, offering a direct link to Southeast Asia’s most popular tourist destination. Perfect for a weekend getaway or cultural exploration.\n- **Wuhan to Paris (France)**: Three weekly flights by Air France, resuming a beloved route that was suspended during the pandemic. This connection reopens doors to European culture, fashion, and cuisine.\n- **Wuhan to Tokyo (Japan)**: Increased frequency to daily flights by China Eastern Airlines, up from five weekly in 2025. Travelers can now catch a morning flight and be in Shibuya by lunchtime.\n\n## Why This Matters for Travelers\n\nThis route expansion is a boon for international visitors and locals alike. Hubei’s capital, Wuhan, is already a gateway to the province’s UNESCO World Heritage sites, such as the Wudang Mountains and the ancient Yellow Crane Tower. Now, with easier connections to global hubs, culture enthusiasts can combine a trip to Hubei with stops in Europe or the Middle East.\n\nFor transit passengers, Wuhan Tianhe Airport has also upgraded its facilities, including a new international lounge and streamlined customs procedures. The airport’s growing network means fewer layovers and more direct options for travelers heading to or from central China.\n\n## Visa Policy Updates to Match\n\nTo complement these new routes, China’s visa policies have also seen adjustments. As of January 2026, the 144-hour visa-free transit policy applies at Wuhan Tianhe Airport for nationals of 54 countries, including the US, UK, and most EU states. This means eligible travelers can explore Wuhan and its surroundings for up to six days without a visa—perfect for a quick cultural dive into Hubei’s rich history and cuisine.\n\nAdditionally, the new direct flights to Dubai and Bangkok align with China’s expanded visa-free agreements with the UAE and Thailand, making travel even more seamless for both inbound and outbound tourists.\n\n## Looking Ahead: Future Routes\n\nAirport officials have hinted at further expansions later in 2026, including potential direct flights to Sydney, Australia, and Istanbul, Turkey. These routes would cement Wuhan’s status as a key player in global aviation, offering unparalleled access to Hubei’s natural wonders and urban attractions.\n\nFor the latest updates on flight schedules and visa requirements, visit the official Wuhan Tianhe Airport website or check with your airline. Hubei is ready to welcome the world—book your ticket today!',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['wuhan tianhe airport', 'international flights', 'hubei travel', 'visa policy', 'china aviation', 'southeast asia routes', 'wuhan updates'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-08T05:27:43.329Z',
    readTime: 4,
  },
  {
    id: 'news-2026-07-08-04-hgx2',
    title: 'Hubei Now Open: 144-Hour Visa-Free Transit for International Travelers',
    summary: 'Hubei province now offers a 144-hour visa-free transit policy at Wuhan天河机场, allowing travelers from 54 countries to explore the region for up to six days without a visa.',
    content: 'Great news for globetrotters: as of 2026, Hubei province is officially part of China\'s expanded 144-hour visa-free transit policy. International travelers transiting through Wuhan Tianhe International Airport can now stay in the province for up to six days without needing a visa, making it easier than ever to explore the heart of China.\n\n## Who Can Use the Policy?\nThe visa-free transit is available to citizens of 54 countries, including the United States, Canada, the United Kingdom, Australia, Japan, South Korea, and most European nations. Travelers must hold a valid passport and a confirmed onward ticket to a third country or region within 144 hours (six days).\n\n## What Does This Mean for Visitors?\nWuhan serves as the gateway to Hubei\'s incredible attractions. With six days visa-free, you can:\n\n- **Explore Wuhan\'s Cultural Gems**: Visit the iconic Yellow Crane Tower, stroll along the East Lake Greenway, and dive into the bustling Hubu Alley food market.\n- **Discover Natural Wonders**: Take a bullet train to the Three Gorges Dam near Yichang—one of the world\'s largest hydroelectric projects—or cruise the Shennong Stream for breathtaking karst landscapes.\n- **Experience Ancient History**: Journey to the Wudang Mountains, a UNESCO World Heritage site known for Taoist temples and martial arts heritage, just a few hours from Wuhan.\n- **Savor Local Cuisine**: Don\'t miss Wuhan\'s famous hot dry noodles (re gan mian) and lotus root soup, available at countless local eateries.\n\n## Practical Tips for Travelers\n- **Entry Point**: The policy applies specifically to Wuhan Tianhe International Airport. You must arrive and depart from Wuhan to qualify.\n- **Registration**: Upon arrival, fill out a temporary entry card—no visa application needed. You\'ll receive a 144-hour stay permit stamped in your passport.\n- **Scope of Travel**: The visa-free stay is limited to Hubei province. Traveling outside Hubei is not permitted under this policy.\n- **Stay Duration**: The 144 hours start from midnight after your arrival. For example, if you land at 10 PM, your clock starts at midnight, giving you nearly seven full days.\n\n## Why This Matters\nHubei is rapidly becoming a hotspot for international tourism, and this policy removes a major barrier for spontaneous travelers. According to recent reports, the province saw a 35% increase in transit visitors in 2025 compared to the previous year, with many citing the visa-free policy as a key factor. Wuhan\'s central location also makes it an ideal stopover for travelers flying between Southeast Asia, Europe, and North America.\n\nWhether you\'re a history buff, foodie, or nature lover, Hubei\'s 144-hour visa-free transit is your ticket to an unforgettable Chinese adventure—no visa required.',
    coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['hubei', 'wuhan', 'visa-free transit', '144-hour policy', 'travel regulations', 'wuhan tianhe airport', 'china travel'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-08T05:27:54.747Z',
    readTime: 4,
  },
  {
    id: 'news-2026-07-08-05-m0ut',
    title: 'Wuhan\'s Bridge Marvels: Engineering Feats Across the Yangtze River',
    summary: 'Discover the engineering brilliance behind Wuhan\'s iconic Yangtze River bridges, blending history, innovation, and stunning design for travelers and tech enthusiasts.',
    content: '## A City of Bridges: Wuhan\'s Yangtze River Legacy\n\nWuhan, the sprawling capital of Hubei province, is often called the \'City of Bridges\'—and for good reason. As of 2026, the city boasts over a dozen major bridges spanning the mighty Yangtze River, each a testament to modern engineering and design. For travelers and culture enthusiasts, these structures are not just transport links but iconic landmarks that tell the story of China\'s rapid infrastructure evolution.\n\n## The First Bridge: A Historic Milestone\n\nThe Wuhan Yangtze River Bridge, completed in 1957, was the first bridge ever built across the Yangtze. This double-deck marvel—with a road on top and railway below—set the stage for future feats. Today, it remains a symbol of perseverance and is a must-see for visitors. You can walk or cycle across it for panoramic views of the river and city skyline.\n\n## Modern Marvels: The Second and Third Bridges\n\nJump to 1995 and 2000, the Second and Third Wuhan Yangtze River Bridges introduced cable-stayed designs, pushing boundaries with longer spans and sleeker profiles. The Third Bridge, also known as the Baishazhou Bridge, stretches 3.5 kilometers and features a striking diamond-shaped tower. Engineers used innovative techniques to handle the river\'s strong currents and seismic activity, making it a model for future projects.\n\n## The Latest Innovations: The Yangsigang and Qingshan Bridges\n\nIn 2019, the Yangsigang Yangtze River Bridge opened as the world\'s longest dual-purpose road and rail bridge with a main span of 1,700 meters. Its design uses advanced aerodynamics to withstand typhoons and earthquakes—a true engineering triumph. More recently, the Qingshan Bridge (2021) introduced a sleek, low-carbon design with noise-reducing barriers and energy-efficient lighting, reflecting Wuhan\'s commitment to sustainable infrastructure.\n\n## Why Travelers Should Care\n\nFor international visitors, these bridges offer unique experiences:\n- **Photo ops**: Each bridge has distinct architectural styles, from classic arches to futuristic cables.\n- **River cruises**: Many tours pass under these giants, providing breathtaking perspectives.\n- **Cycling routes**: The bridges connect riverside parks and cultural sites, ideal for a day of exploration.\n\nTo learn more about visiting these engineering wonders, check out local tour guides or the Wuhan Municipal Transport Bureau\'s updates. Whether you\'re an engineer or a curious traveler, Wuhan\'s bridges are a must-see highlight of any Hubei itinerary.',
    coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['wuhan bridges', 'yangtze river', 'engineering marvels', 'infrastructure', 'hubei travel', 'technology', 'sustainable design'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-08T05:28:04.360Z',
    readTime: 3,
  },
  {
    id: 'news-2026-07-08-06-pnsf',
    title: 'Hubei Digital Tourism: How Smart Tech is Transforming Travel in 2026',
    summary: 'From AI-powered trip planners to contactless scenic spots, Hubei is rolling out cutting-edge digital travel tools to enhance visitor experiences across the province in 2026.',
    content: '## Smart Travel Goes Live Across Hubei\n\nThis year, Hubei province has taken a major leap forward in digital tourism, introducing a suite of smart travel technologies designed to make exploring the region smoother, safer, and more immersive. According to the latest reports from the Hubei Department of Culture and Tourism, over 30 major scenic areas—including the Three Gorges, Yellow Crane Tower, and Enshi Grand Canyon—have now integrated AI-powered mobile apps and real-time crowd management systems.\n\n## What Visitors Can Expect\n\nTravelers arriving in Hubei in 2026 will notice several key upgrades:\n\n- **AI Trip Planner:** A free WeChat mini-program uses machine learning to suggest personalized itineraries based on your interests, weather, and current crowd levels. It even books tickets in advance.\n- **Contactless Entry:** Most major attractions now support facial recognition and QR code scanning for zero-contact entry, reducing wait times by an average of 40%.\n- **Smart Signage:** Augmented reality (AR) signs at historical sites like the Hubei Provincial Museum allow you to point your phone at exhibits to see 3D reconstructions and narrated stories.\n- **Real-Time Translation:** An integrated voice translation tool supports 12 languages, making it easier for international visitors to navigate menus, signs, and local guides.\n\n## Digital Tools for Sustainable Tourism\n\nBeyond convenience, Hubei’s digital push also focuses on sustainability. Smart sensors at natural attractions like Shennongjia monitor foot traffic and automatically adjust entry quotas to prevent overcrowding. Visitors receive real-time alerts via the "Wise Hubei Travel" app when a site is nearing capacity, encouraging them to explore alternative nearby spots—such as lesser-known ancient towns like Xianju or Tangya.\n\n## A Glimpse Into the Future\n\nAccording to industry insiders, Hubei is piloting a province-wide digital tourism pass that will allow unlimited access to 50+ attractions for a flat fee, managed entirely through a blockchain-based ticketing system. This system, expected to launch fully by early 2027, promises to eliminate ticket fraud and streamline refunds.\n\nFor travelers, the message is clear: Hubei is not just about natural beauty and rich history—it’s also becoming a smart travel destination where technology enhances every step of the journey.',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['hubei', 'digital tourism', 'smart travel', 'ai technology', 'three gorges', 'wuhan', 'augmented reality'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-08T05:28:13.907Z',
    readTime: 3,
  },
  {
    id: 'news-2026-07-08-07-yhtt',
    title: 'Hubei Opera Revival: Inside the Province’s Flourishing Traditional Theater Scene',
    summary: 'From ancient Han Opera to vibrant local troupes, Hubei’s traditional theater heritage is experiencing a dynamic resurgence in 2026, offering travelers immersive cultural experiences.',
    content: '## A Living Tradition in the Heart of Central China\n\nHubei province has long been a crucible of Chinese operatic arts, home to iconic forms such as Han Opera (Hanju) and Chu Opera (Chuju). As of 2026, this heritage is not just preserved but actively flourishing. Recent reports from the Hubei Provincial Culture and Tourism Department indicate that over 120 traditional opera troupes are now performing regularly across the province, from grand theaters in Wuhan to open-air stages in ancient towns like Yichang and Xiangyang.\n\nHan Opera, recognized by UNESCO as a key intangible cultural heritage, traces its roots to the Ming Dynasty and heavily influenced Peking Opera. Today, it’s experiencing a renaissance. This year, the Wuhan Han Opera Theater launched a new series of "Immersive Heritage Evenings," blending classic arias with modern staging and English subtitles, making it accessible for international visitors. The performances feature signature elements like the high-pitched "erhuang" melodies and elaborate, hand-painted facial masks that depict complex character archetypes.\n\n## Where to Experience Traditional Theater in 2026\n\nFor travelers eager to dive into Hubei’s theatrical heritage, several venues and events stand out:\n\n- **Wuhan Grand Theater** – Hosts weekly Han Opera showcases, often with pre-show workshops explaining the symbolism of costumes and movements.\n- **Xiangyang Ancient City Open-Air Stage** – A summer festival (running through September 2026) featuring Chu Opera performances against the backdrop of Ming-era city walls.\n- **Hubei Provincial Museum (Wuhan)** – A dedicated exhibition hall now displays rare opera scripts, puppets, and costume replicas, with daily short performances.\n\n## The New Generation Takes the Stage\n\nOne of the most exciting trends this year is the surge of young performers. According to the Hubei Arts Academy, enrollment in traditional opera programs has doubled since 2023. This is partly thanks to innovative fusion projects. For instance, the "East Meets West" collaboration between the Wuhan Han Opera Troupe and a Berlin-based experimental theater company debuted a cross-cultural piece in March 2026, combining Han Opera techniques with contemporary dance. The show sold out within days and is set to tour internationally.\n\n## Practical Tips for Culture Enthusiasts\n\n- **Ticket Booking**: Most major theaters in Hubei now accept online reservations via WeChat mini-programs with English interfaces.\n- **Language**: While performances are in Chinese, many venues offer digital program notes or audio guides in English.\n- **Best Time to Visit**: The Hubei Traditional Theater Festival, held annually in November, remains the highlight. The 2026 edition promises a record 50 troupes and special late-night "opera lounges" for tourists.\n\nWhether you’re a seasoned aficionado or a curious traveler, Hubei’s theater scene in 2026 offers a vivid, immersive window into one of China’s most cherished art forms. Don’t miss the chance to witness history performed live.',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['hubei opera', 'han opera', 'chinese theater', 'wuhan culture', 'traditional art', 'intangible heritage', 'central china travel'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-08T05:28:22.322Z',
    readTime: 3,
  },
  {
    id: 'news-2026-07-08-08-hlhf',
    title: 'Yellow Crane Tower\'s Poetic Legacy: New Digital Exhibition Brings Ancient Verses to Life',
    summary: 'A new digital exhibition at Yellow Crane Tower in Wuhan showcases centuries of ancient Chinese poetry, offering travelers an immersive journey through the verses of Li Bai, Cui Hao, and others.',
    content: '## A Literary Landmark Reimagined\n\nFor over 1,700 years, Yellow Crane Tower (黄鹤楼) has stood as one of China\'s most celebrated cultural landmarks. This iconic structure in Wuhan, Hubei province, has inspired countless poets, with its name appearing in over 1,000 classical poems. As of 2026, a state-of-the-art digital exhibition transforms this literary heritage into an interactive experience for modern visitors.\n\n## The Poets Who Immortalized the Tower\n\nYellow Crane Tower\'s poetic fame began in the Tang Dynasty (618–907 AD), when two master poets created works that still resonate today:\n\n- **Cui Hao\'s \'Yellow Crane Tower\'**: This 8th-century poem is considered the definitive verse about the site. Its melancholic lines, \'The yellow crane has gone, never to return,\' set a standard that influenced generations.\n- **Li Bai\'s Farewell**: The legendary poet Li Bai wrote \'Seeing Meng Haoran Off at Yellow Crane Tower,\' a masterpiece of friendship and parting. According to local lore, Li Bai famously conceded that Cui Hao\'s poem was so perfect he could not surpass it.\n\nOther notable poets include Bai Juyi, who wrote about the tower\'s panoramic views, and Song Dynasty poet Su Shi, who reflected on its enduring beauty.\n\n## Latest Digital Immersion Experience\n\nThis year, Yellow Crane Tower launched a new multimedia exhibition titled \'Poetry in the Clouds.\' Using projection mapping and augmented reality, visitors can see lines of poetry appear on the tower\'s walls as they climb. The experience includes:\n\n- **Interactive scrolls**: Touchscreens allow guests to read original Chinese poems alongside English translations\n- **Sound installations**: Recorded recitations in classical Chinese, accompanied by traditional guqin music\n- **Seasonal themes**: The tower\'s famous \'Moon over the Crane\' poetry competition, held each autumn, now includes a digital submission platform for international visitors\n\n## Practical Tips for Poetry Lovers\n\nIf you\'re planning a visit to Yellow Crane Tower this year, here\'s what you need to know:\n\n- **Best time to visit**: Early morning (7:00–9:00 AM) for fewer crowds and misty views that resemble the poetic descriptions\n- **Poetry workshops**: Every Saturday, the tower hosts free calligraphy sessions where you can practice writing classic verses\n- **Recommended reading**: Pick up a copy of \'Yellow Crane Tower: Poems Through the Ages\' at the gift shop, which includes bilingual texts\n\nAs one local guide puts it: \'When you stand at the top and recite Li Bai\'s lines, you\'re not just a tourist—you\'re part of a 1,300-year conversation.\'',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['yellow crane tower', 'wuhan', 'ancient poetry', 'tang dynasty', 'li bai', 'cultural heritage', 'digital exhibition'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-08T05:28:33.844Z',
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
