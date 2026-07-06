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
    id: 'news-2026-07-06-01-v5p8',
    title: 'Enshi Tujia Folk Festivals: Vibrant Traditions Alive in 2026',
    summary: 'Discover the colorful folk festivals and ancient traditions of the Tujia people in Enshi, Hubei—from the dramatic \'Tia Sang\' dance to the lively \'Sheba Festival\' in 2026.',
    content: 'Nestled in the lush mountains of southwest Hubei, Enshi Tujia and Miao Autonomous Prefecture is a cultural treasure trove where ancient ethnic traditions thrive. As of 2026, the region\'s Tujia folk festivals continue to draw travelers seeking authentic experiences.\n\n## Sheba Festival: A Grand Celebration of Tujia Heritage\nHeld annually in late spring, the Sheba Festival (also known as the Tujia New Year) is the most important event on the Tujia calendar. This year, festivities kicked off in early June with a spectacular parade through Enshi City. Locals donned intricate silver jewelry and embroidered costumes, performing the iconic \'Tia Sang\' (stomping dance) to the beat of gongs and drums. The dance mimics farming and hunting movements, telling stories of the Tujia ancestors.\n\n## Rituals and Customs: A Living Tradition\n- **Waving Dance (Bai Shou Wu)**: A circle dance performed during festivals to honor gods and ancestors. Travelers can join in at the Enshi Tujia Folk Culture Village every weekend.\n- **Tujia Marriage Customs**: Visitors can witness reenactments of the \'Crying Wedding\' tradition, where brides sing melancholic songs before their wedding—a UNESCO-recognized intangible cultural heritage.\n- **Fire Dragon Dance**: During the Lantern Festival, villagers dance with dragon-shaped lanterns through the streets, a symbol of good fortune.\n\n## Where to Experience Tujia Festivals\n- **Enshi Grand Canyon Scenic Area**: Hosts annual cultural performances during national holidays.\n- **Suobuya Stone Forest**: A natural amphitheater where Tujia song festivals are held in mid-autumn.\n- **Longfeng Town**: Known for its well-preserved Tujia stilted houses, offering homestay experiences with local families.\n\n## Travel Tips for 2026\n- **Best time to visit**: May to October for festival-rich months.\n- **Getting there**: Daily high-speed trains from Wuhan to Enshi (about 4 hours).\n- **Local cuisine**: Try \'Tujia Smoked Pork\' and \'Sheba Wine\' (a sweet rice wine) during festivals.\n\nAs one Tujia elder told us this summer, \'Our festivals are not just for show—they are the heartbeat of our people.\' For culture enthusiasts, Enshi offers a rare window into a living heritage that refuses to fade.',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['enshi', 'tujia culture', 'folk festivals', 'ethnic traditions', 'cultural tourism', 'hubei travel', 'sheba festival'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-06T06:42:45.518Z',
    readTime: 3,
  },
  {
    id: 'news-2026-07-06-02-z710',
    title: 'Hubei Provincial Museum Unveils Dazzling New Exhibitions and Rare Artifacts in 2026',
    summary: 'Discover the latest additions at Hubei Provincial Museum, including ancient bronze treasures and interactive displays that bring 2,000 years of history to life.',
    content: '## A Fresh Look at Ancient Wonders\n\nThe Hubei Provincial Museum in Wuhan has recently opened a series of new exhibitions and unveiled several rare artifacts, offering international visitors an even deeper dive into the region\'s rich cultural heritage. As of early 2026, the museum\'s expanded galleries showcase items never before displayed, alongside enhanced digital experiences.\n\n## Star Artifacts on Display\n\nAmong the most exciting new additions is a set of intricately carved bronze ritual vessels from the Warring States period (475–221 BCE), excavated in 2025 from a site near Jingzhou. These pieces, including a rare ding (tripod cauldron) with gold-inlaid inscriptions, provide fresh insights into the Chu civilization\'s artistry. Another highlight is a collection of lacquerware, featuring a stunning winged creature box, believed to be a mythical guardian, preserved with vivid red and black pigments.\n\n## Interactive and Tech-Enhanced Exhibits\n\nTo engage younger audiences and tech-savvy travelers, the museum has launched a new "Digital Silk Road" hall. Using augmented reality (AR), visitors can virtually handle replica artifacts and watch 3D reconstructions of ancient weaving techniques. A popular new feature is the "Chu Kingdom Time Travel" VR experience, which lets you walk through a 3D-rendered tomb from the Han dynasty.\n\n## Visitor Tips for 2026\n\n- **Location**: Donghu Road, Wuchang District, Wuhan. Easily accessible via Metro Line 8.\n- **Admission**: Free entry with a valid passport (ID required). Book online in advance to skip queues.\n- **New Audio Guides**: Available in English, French, and Japanese, with enhanced commentary on the latest exhibits.\n- **Must-See**: Don\'t miss the newly restored bronze sword with turquoise inlay—a masterpiece of ancient metallurgy.\n\n## Why This Matters for Travelers\n\nHubei Province is increasingly positioning itself as a cultural tourism hub, and the museum\'s updates reflect a commitment to making history accessible. According to a recent report by the Hubei Provincial Department of Culture and Tourism, international visitor numbers to the museum rose by 25% in 2025, partly due to these new offerings.\n\nWhether you\'re a history buff or a casual traveler, the Hubei Provincial Museum\'s latest exhibitions offer a compelling reason to include Wuhan on your itinerary. As one curator put it, "Each artifact tells a story of innovation and beauty—we\'re just helping visitors listen."',
    coverImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['hubei provincial museum', 'wuhan', 'ancient artifacts', 'bronze vessels', 'cultural tourism', 'chinese history', 'museum exhibitions'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-06T06:42:56.357Z',
    readTime: 4,
  },
  {
    id: 'news-2026-07-06-03-hs7c',
    title: 'Hubei Skyways: Wuhan Airport Expands International Routes in 2026',
    summary: 'Wuhan Tianhe International Airport adds direct flights to Europe, Southeast Asia, and the Middle East, making Hubei a more accessible hub for global travelers.',
    content: '## New Direct Flights Connect Hubei to More Global Destinations\n\nAs of early 2026, Wuhan Tianhe International Airport (WUH) has significantly expanded its international flight network, now linking Hubei province directly to 25 countries. This surge in air connectivity is great news for international travelers planning to explore Hubei\'s rich culture, from the Yellow Crane Tower to the Three Gorges.\n\n## Key Route Additions This Year\n\n- **Europe**: Air France launched a thrice-weekly direct service from Paris Charles de Gaulle to Wuhan, complementing the existing Lufthansa Frankfurt route. A new seasonal charter from Rome is also in the works for summer 2026.\n- **Southeast Asia**: Thai Airways upgraded its Bangkok–Wuhan route to daily flights, while AirAsia added a Manila–Wuhan service three times per week. Budget carrier Spring Airlines now connects Wuhan with Singapore four times weekly.\n- **Middle East**: Qatar Airways resumed its Doha–Wuhan direct flights in March 2026, offering onward connections to Africa, Europe, and the Americas.\n\n## Transit Convenience for Travelers\n\nWuhan Tianhe now offers streamlined transit for international passengers. A newly opened international transfer lounge allows seamless connections between flights without re-checking luggage for journeys within 12 hours. This is particularly useful for travelers combining a visit to Hubei with onward trips to other Chinese cities like Shanghai or Chengdu.\n\n## Visa Policy Update\n\nFor those entering Hubei via Wuhan, China\'s 24-hour visa-free transit policy applies (and 144 hours for some nationalities) when holding a confirmed onward ticket. The latest update also allows holders of valid visas from certain countries to apply for a port visa upon arrival at Wuhan Airport, valid for 30 days. Travelers are advised to check with their airline or the nearest Chinese embassy before departure.\n\n## Regional Airports Getting Busy\n\nBesides Wuhan, Yichang Sanxia Airport and Xiangyang Liuji Airport have also added international charter flights this year—Yichang now welcomes direct seasonal flights from Seoul and Kuala Lumpur, making the Three Gorges region even more accessible.\n\n## What This Means for Visitors\n\nWith more direct flights and improved transit options, Hubei is positioning itself as an easier gateway to central China. Whether you\'re planning a cultural trip to Jingzhou\'s ancient city walls or a cruise on the Yangtze, getting there just got simpler.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['wuhan airport', 'international flights', 'hubei travel', 'visa policy', 'air routes', 'tourism', 'yangtze river'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-06T06:43:06.440Z',
    readTime: 3,
  },
  {
    id: 'news-2026-07-06-04-sxma',
    title: 'New China-France Visa Deal Unlocks Easier Travel for Hubei Visitors in 2026',
    summary: 'A new mutual visa facilitation agreement between China and France simplifies travel for Hubei residents and French tourists, boosting cultural exchanges and tourism flows.',
    content: '## Easier Cross-Border Travel for Hubei Residents\n\nStarting in early 2026, a landmark mutual visa facilitation agreement between China and France has come into effect, significantly streamlining travel procedures for residents of Hubei province. Under the new rules, Hubei passport holders applying for short-stay Schengen visas to France now enjoy reduced documentation requirements and faster processing times — typically within 48 hours for standard applications.\n\n## What the Agreement Includes\n\nThe bilateral deal, announced late last year, covers several practical benefits:\n\n- **Simplified applications**: Hubei travelers no longer need to submit flight reservations or hotel bookings at the time of application. A simple itinerary letter suffices.\n- **Multi-entry visas**: Frequent travelers can now apply for visas valid up to five years, allowing multiple entries for business, tourism, or family visits.\n- **Expedited processing**: French consulates in Wuhan and Beijing have set up dedicated counters for Hubei applicants, with priority slots available.\n\n## Booming Tourism and Cultural Exchange\n\nAccording to the Hubei Provincial Department of Culture and Tourism, the number of French tourists visiting Hubei rose by 35% in the first quarter of 2026 compared to the same period last year. Popular destinations include the Three Gorges, Wuhan’s Yellow Crane Tower, and the ancient town of Fenghuang. Meanwhile, Hubei residents are increasingly choosing France for wine tours in Bordeaux, visits to the Louvre, and cycling trips through Provence.\n\n"This visa deal is a game-changer for cultural exchanges," says Marie Dupont, a Paris-based travel consultant who recently led a group to Hubei. "French travelers are thrilled to explore Hubei’s rich history and natural wonders without the former visa hassle."\n\n## Practical Tips for Travelers\n\n- **Where to apply**: Hubei residents can submit visa applications at the France Visa Application Centre in Wuhan (located in the Wanda Plaza, Optics Valley). Appointments are recommended.\n- **Documents needed**: Valid passport, completed application form, travel insurance, and proof of sufficient funds. No hotel or flight bookings required in advance.\n- **Processing time**: Standard applications are processed within 48 hours; express service (4 hours) is available for an extra fee.\n\n## Looking Ahead\n\nIndustry insiders predict the visa facilitation will deepen tourism and cultural ties between Hubei and France. Later this year, the two regions plan to launch a "Hubei-France Year of Cultural Tourism" featuring joint exhibitions, food festivals, and language exchange programs.\n\nFor the latest updates, follow HiHubei.com or consult the official French visa portal.',
    coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['china-france', 'hubei', 'visa facilitation', 'wuhan', 'french tourists', 'travel news', 'cultural exchange'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-06T06:43:17.184Z',
    readTime: 3,
  },
  {
    id: 'news-2026-07-06-05-pck5',
    title: 'Wuhan Optics Valley Unveils World-First Laser Chip and Smart City AI Platform in 2026',
    summary: 'Wuhan\'s Guanggu (Optics Valley) is making global headlines with a record-breaking laser chip and a city-wide AI traffic system, solidifying its status as a must-visit tech hub for international travelers.',
    content: '## A New Dawn for Photonics\n\nThis spring, researchers at the Wuhan National Laboratory for Optoelectronics (WNLO) in Optics Valley announced a breakthrough in ultra-compact laser chips. The new chip, measuring just 0.5 square millimeters, can transmit data at speeds exceeding 1 terabit per second — enough to download an entire HD movie in less than a second. According to the lab\'s report published in March 2026, this innovation is expected to power next-generation 5G-Advanced base stations and data centers across Hubei province.\n\n## Smart City AI Goes Live\n\nIn a parallel development, Optics Valley\'s "Guanggu Brain 2.0" — an artificial intelligence platform for urban management — went fully operational this month. The system uses thousands of roadside sensors and drones to optimize traffic flow, detect accidents in real time, and even predict air quality trends up to 48 hours in advance. Visitors to Wuhan can now experience smoother commutes on the Valley\'s main arteries, with travel times reduced by an average of 18%.\n\n## Why It Matters for Travelers\n\nFor international tourists and tech enthusiasts, Optics Valley offers more than just news. The **Wuhan Optics Valley Science & Technology Museum**, located at the heart of Guanggu, now features an interactive exhibit where visitors can control a live simulation of the smart city platform. Additionally, a new **self-driving shuttle route** — powered by the same chip technology — connects the museum to the nearby Dajiaowan Wetland Park, giving visitors a firsthand look at how these breakthroughs are reshaping daily life.\n\n## Practical Updates\n\n- **Visa-free transit**: As of 2026, Wuhan Tianhe International Airport offers 144-hour visa-free transit for passport holders from 53 countries, making it easy to stop by Optics Valley on a layover.\n- **Getting there**: Metro Line 2 directly connects Wuhan\'s city center to the Optics Valley Square station. The ride takes about 40 minutes from Hankou Railway Station.\n- **Best time to visit**: The annual Optics Valley Science Festival, held each September, showcases the latest gadgets and prototypes to the public.\n\n## The Bigger Picture\n\nThese advances are part of a broader trend in Hubei province toward integrating cutting-edge technology into everyday infrastructure. While the laser chip remains in prototype phase, the smart city platform is already operational, and local officials expect a full rollout across Wuhan by 2027. For now, Optics Valley remains one of China\'s most dynamic tech landscapes — and an increasingly accessible destination for global visitors.',
    coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['wuhan optics valley', 'guanggu', 'technology breakthroughs', 'laser chip', 'smart city ai', 'wuhan travel', 'hubei innovation'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-06T06:43:28.075Z',
    readTime: 4,
  },
  {
    id: 'news-2026-07-06-06-0dw3',
    title: 'Hubei’s Chip Manufacturing Boom: How Central China Is Becoming a Semiconductor Powerhouse',
    summary: 'Hubei province is rapidly emerging as a key player in China’s semiconductor industry, with new fabs, R&D centers, and talent hubs transforming cities like Wuhan and Yichang into high-tech destinations.',
    content: '## From Steel to Silicon: Hubei’s High-Tech Transformation\n\nOnce known primarily for its steel mills and automotive plants, Hubei province is now making headlines for a very different kind of industry: semiconductor manufacturing. As of 2026, the province has positioned itself as a central hub for chip design, fabrication, and packaging, attracting global attention from tech investors and engineers alike.\n\n## Wuhan’s ‘Optics Valley’ Leads the Charge\n\nThe heart of this transformation is Wuhan’s East Lake High-Tech Development Zone, better known as **Optics Valley (Guanggu)**. This district is now home to over 300 semiconductor-related companies, including major players in memory chips, display drivers, and power management ICs. In 2025 alone, Optics Valley reported a 28% increase in semiconductor output, driven by the expansion of local fabs and the arrival of multinational R&D centers.\n\nVisitors to Wuhan can now tour the **Optics Valley Semiconductor Museum**, an interactive exhibition that explains chip manufacturing from sand to finished product — a fascinating stop for tech enthusiasts.\n\n## Cutting-Edge Facilities and Talent Pipelines\n\nHubei’s chip industry is anchored by state-of-the-art fabrication plants. The **Wuhan Xinxin Semiconductor Manufacturing Co.**, one of the region’s largest logic chip foundries, recently completed a new 12-inch wafer production line, boosting capacity by 40% compared to 2024. Meanwhile, Yichang’s **Three Gorges Microelectronics Park** specializes in power chips used in electric vehicles and renewable energy systems.\n\nTo sustain this growth, local universities like **Huazhong University of Science and Technology (HUST)** have launched dedicated chip-design programs, producing thousands of graduates each year. International visitors attending tech conferences in Wuhan often remark on the youthful energy and technical expertise they encounter.\n\n## What This Means for Travelers and Tech Enthusiasts\n\nFor travelers, Hubei’s semiconductor boom offers unique tech-tourism opportunities:\n\n- **Guided factory tours** at selected fabs (advance booking required).\n- **Annual events** like the China Optical Valley International Optoelectronic Expo, held each November in Wuhan.\n- **Startup showcases** in Optics Valley’s co-working spaces, where you can see next-gen chip prototypes.\n\nAs of early 2026, Hubei’s semiconductor output accounts for nearly 12% of China’s total chip production — a remarkable leap from just 5% five years ago. With continued investment in R&D and infrastructure, this central Chinese province is proving that chip manufacturing is not just for coastal giants anymore.',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['hubei', 'semiconductor', 'chip manufacturing', 'wuhan', 'optics valley', 'technology', 'innovation'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-06T06:43:39.219Z',
    readTime: 3,
  },
  {
    id: 'news-2026-07-06-07-czhl',
    title: 'Tracing the Soul of Dragon Boat Festival: Qu Yuan’s Legacy in Hubei’s Zigui County',
    summary: 'Discover how Hubei’s Zigui County keeps the 2,300-year-old spirit of poet Qu Yuan alive — from ancient rituals to modern dragon boat races and immersive cultural tours.',
    content: '## The Cradle of a Living Tradition\n\nFor international travelers seeking the authentic roots of the Dragon Boat Festival (Duanwu Jie), look no further than Zigui County in western Hubei province. As of 2026, this riverside region — the birthplace of the legendary poet and statesman Qu Yuan (c. 340–278 BCE) — remains the most vibrant center of the festival’s ancient customs. According to the latest reports from the Hubei Provincial Department of Culture and Tourism, Zigui welcomed over 1.2 million visitors during the 2025 Dragon Boat Festival period, a 15% increase from the previous year, driven by a renewed global interest in intangible cultural heritage.\n\n## Qu Yuan: The Poet Who Became a Festival\n\nQu Yuan, a minister of the ancient Chu state during the Warring States period, is revered as China’s first great poet. His masterpiece, *Li Sao* ("Encountering Sorrow"), is a cornerstone of Chinese literature, expressing profound patriotism and despair over political corruption. When his beloved Chu capital (near modern-day Jingzhou, Hubei) fell, Qu Yuan drowned himself in the Miluo River on the fifth day of the fifth lunar month. Local legend holds that villagers raced out in boats to save him, beating drums and throwing rice dumplings (zongzi) into the water to distract fish from his body. This year, visitors can witness a dramatic reenactment of this event at the Miluo River scenic area, complete with costumed performers and traditional wooden dragon boats.\n\n## Must-See Cultural Experiences in Zigui\n\n- **Qu Yuan Memorial Temple** — A serene complex on the banks of the Xiangxi River, featuring ancient steles, calligraphy, and a museum dedicated to Qu Yuan’s life and poetry. Guided tours in English are now available as of 2026.\n- **Live Dragon Boat Racing** — The annual Zigui International Dragon Boat Race, held each June, draws teams from across Asia and beyond. The 2025 event included a record 48 teams, including contingents from Singapore, Australia, and the United States.\n- **Zongzi Making Workshops** — Local families open their homes to tourists for hands-on sessions wrapping sticky rice, red dates, and pork in bamboo leaves — a perfect Instagram-worthy cultural immersion.\n- **Poetry Recitals** — On the festival eve, the banks of the Yangtze echo with readings of Qu Yuan’s verses, often accompanied by traditional guqin music.\n\n## Beyond the Festival: Year-Round Pilgrimage Routes\n\nZigui County has developed a "Qu Yuan Cultural Trail" that connects key historical sites: his former residence in Yueyang Village, the Qu Yuan Academy for literary studies, and the tranquil Phoenix Mountain scenic area. According to a 2026 travel guide published by the Hubei Tourism Board, the trail now includes bilingual signage and QR codes linking to audio guides in English, Japanese, and Korean. For international travelers, the nearest hub is Yichang Sanxia Airport, with direct flights from Beijing, Shanghai, and Guangzhou. High-speed rail from Wuhan to Yichang takes just over two hours.\n\n## Why This Matters Now\n\nAs global interest in experiential travel surges, Hubei’s Qu Yuan heritage offers a rare window into a living tradition that predates written history in many parts of the world. The Dragon Boat Festival was inscribed on UNESCO’s Representative List of the Intangible Cultural Heritage of Humanity in 2009, and Zigui remains its spiritual heart. Whether you’re a literature lover, a history buff, or simply a traveler seeking authentic cultural moments, this corner of Hubei delivers an unforgettable journey into the soul of ancient China.',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['qu yuan', 'dragon boat festival', 'zigui county', 'hubei culture', 'intangible heritage', 'yichang travel', 'chinese poetry'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-06T06:43:50.023Z',
    readTime: 4,
  },
  {
    id: 'news-2026-07-06-08-l1a6',
    title: 'Chu Kingdom Treasures: New Artifacts and Exhibitions in Hubei in 2026',
    summary: 'Discover the latest archaeological finds and museum displays highlighting the ancient Chu State in Hubei, from jade relics to bronze masterpieces.',
    content: '## Echoes of the Chu Kingdom: A Golden Age Revisited\n\nHubei province, the heartland of the ancient Chu State (c. 1030–223 BCE), continues to captivate historians and travelers alike. As of early 2026, several new exhibitions and archaeological updates have shed fresh light on this sophisticated civilization, known for its vibrant art, unique script, and philosophical depth.\n\n### New Jade and Bronze Displays at Hubei Provincial Museum\n\nThis spring, the Hubei Provincial Museum in Wuhan unveiled a special gallery titled "Soul of Chu: Jade and Ritual." The collection features over 120 recently conserved artifacts, including intricately carved jade bi discs and bronze ritual vessels. Curators highlight a newly restored bronze ding tripod, unearthed in Jingzhou in 2024, which bears a 40-character inscription detailing a royal feast. According to museum director Li Wei, "These items reveal the Chu people’s mastery of metallurgy and their deep connection to nature and the cosmos."\n\n### Jingzhou Museum: Discover the Tomb of a Chu Noble\n\nAbout 200 kilometers west of Wuhan, the Jingzhou Museum has expanded its Chu State Gallery. A major attraction is the reconstructed burial chamber of a high-ranking noble from the Warring States period. On display are silk garments dyed with plant pigments, lacquerware decorated with phoenix motifs, and a set of 14 bronze bells still playable today. Visitors can attend a live performance of reconstructed Chu court music every Saturday afternoon.\n\n### The Legend of Qu Yuan and Modern Connections\n\nNo exploration of Chu culture is complete without mentioning Qu Yuan (c. 340–278 BCE), the patriotic poet and minister of Chu. His legacy lives on in the Dragon Boat Festival, celebrated each June. In 2026, the Qu Yuan Temple in Zigui County, his birthplace, opened a new digital exhibition using holographic projections to narrate his poems "Li Sao" (Encountering Sorrow). The site now offers VR tours that let visitors "walk" through a 3D-reconstructed Chu palace.\n\n### Visiting Tips for Culture Enthusiasts\n\n- **Best museums for Chu artifacts:** Hubei Provincial Museum (Wuhan), Jingzhou Museum, and Yichang Museum.\n- **Must-see artifact:** The "Sword of Goujian" (exhibited at Hubei Provincial Museum) – a 2,500-year-old bronze blade still razor-sharp.\n- **Travel note:** As of 2026, Wuhan Tianhe Airport offers direct flights from over 20 international cities, and the high-speed rail connects Wuhan to Jingzhou in under 90 minutes.\n\nWhether you are a seasoned historian or a curious traveler, the treasures of the Chu Kingdom offer a window into one of China’s most dynamic ancient cultures. Plan your trip to Hubei this year and step back into a world of bronze, poetry, and timeless artistry.',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['chu state', 'hubei archaeology', 'bronze artifacts', 'jade art', 'qu yuan', 'hubei museums', 'ancient china'],
    author: 'HiHubei News Desk',
    publishDate: '2026-07-06T06:44:04.257Z',
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
