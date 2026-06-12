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
    id: 'news-2026-06-12-01-hu0x',
    title: 'Xiangyang Ancient City Blends History with Modern Cultural Tourism in 2026',
    summary: 'Discover how Xiangyang\'s 2,800-year-old ancient city is reinventing itself with immersive historical experiences, night tours, and new cultural festivals, drawing international travelers to Hubei.',
    content: '## A Living Museum: Xiangyang’s Ancient City Walls Come Alive\n\nXiangyang, a city in northern Hubei with a history spanning over 2,800 years, is making headlines this year for its ambitious cultural tourism development. According to the latest reports, the ancient city—famous for its well-preserved Ming dynasty city walls and its role in the classic novel *Romance of the Three Kingdoms*—has launched a series of new attractions and events designed to immerse visitors in its storied past.\n\nAs of spring 2026, the city walls, which stretch for more than 7 kilometers along the Han River, now feature nightly light shows that project historical scenes onto the ancient stones. Tourists can also rent traditional Hanfu costumes and join guided lantern-lit walks along the battlements, a favorite activity for international visitors seeking authentic Chinese heritage.\n\n## New Festivals and Interactive Experiences\n\nThis year, Xiangyang introduced the "Three Kingdoms Cultural Festival," a month-long event (running through October 2026) that includes reenactments of famous battles, calligraphy workshops, and storytelling sessions by local historians. The festival has already attracted cultural enthusiasts from Japan, South Korea, and Europe.\n\nIn addition, the newly restored "Zhongxuan Tower" now houses a multimedia exhibition that lets visitors explore the city’s evolution from a Warring States fortress to a thriving trade hub. Interactive VR stations allow guests to "walk" through markets of the Tang dynasty.\n\n## Practical Tips for Travelers\n\n- **Getting there**: Xiangyang is a 1.5-hour high-speed train ride from Wuhan. The city’s airport also offers direct flights from Shanghai, Beijing, and Guangzhou.\n- **Best time to visit**: Spring (March–May) and autumn (September–November) offer mild weather for exploring the ancient city on foot.\n- **Don’t miss**: The Xiangyang Museum, which recently opened a new wing dedicated to ancient bronze artifacts unearthed in the region.\n\nLocal authorities have also improved English signage and introduced a free mobile audio guide app in multiple languages, making it easier than ever for international tourists to navigate the ancient city.\n\n## A Gateway to Deeper Hubei\n\nXiangyang’s cultural tourism boost is part of a broader trend in Hubei province to promote lesser-known historical sites alongside major attractions like the Three Gorges and Wudang Mountains. For travelers looking to experience China’s ancient past without the crowds of Xi’an or Beijing, Xiangyang offers a more intimate, immersive journey.\n\nWhether you’re a history buff, a Three Kingdoms fan, or simply someone who loves walking through centuries-old streets, Xiangyang’s evolving cultural scene promises a memorable adventure in 2026 and beyond.',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['xiangyang', 'hubei', 'cultural tourism', 'ancient city', 'three kingdoms', 'hanfu', 'travel'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-12T06:49:17.812Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-12-02-67wd',
    title: 'Wuhan’s Art Scene Heats Up: New Galleries and Street Art Revitalize the City',
    summary: 'From cutting-edge contemporary galleries in converted factories to bold murals lighting up alleyways, Wuhan’s art scene is drawing global attention in 2026.',
    content: '## The Rise of Wuhan’s Creative District\n\nWuhan’s art scene has quietly exploded over the past year, with the city now boasting over 20 dedicated contemporary galleries. The epicenter is the **Tanhualin Art District**, a historic neighborhood of winding lanes that has transformed into a hub for painters, sculptors, and digital artists. According to the Wuhan Cultural Tourism Bureau, visitor numbers to the district’s galleries have jumped 35% in 2026 compared to 2025, fueled by a surge in international tourism.\n\n## Must-Visit Galleries and Exhibition Spaces\n\nIf you’re planning a trip, here are the spaces making headlines this season:\n- **Hubei Museum of Art** – The province’s flagship venue just opened a new wing dedicated to new media art, featuring immersive installations by local artists like Zhang Xiaogang and rising star Li Ran.\n- **Hi Art Space** – Located in a former textile factory in Wuchang, this gallery showcases cutting-edge work from Central China’s emerging talents, with monthly openings that draw crowds of young collectors.\n- **K11 Art Mall** – Not just a shopping center, its “Art Space” on the top floor runs curated exhibitions of international contemporary art, from Chinese ink painting reimagined to VR-based sculptures.\n\n## Street Art and Public Installations\n\nBeyond the galleries, Wuhan’s streets have become a canvas. The annual **Wuhan Mural Festival**, now in its third edition, has painted over 50 large-scale murals across the city. This year’s theme, “River of Dreams,” features works by artists from Japan, Italy, and Brazil that celebrate the Yangtze River’s cultural legacy. The **Wuhan Art Night**, held every first Saturday of the month, sees galleries stay open until midnight with live music, artist talks, and pop-up performances.\n\n## Why It Matters for Travelers\n\nFor international visitors, Wuhan offers an intimate alternative to Beijing’s 798 or Shanghai’s West Bund. The art scene here is still emerging, meaning smaller crowds and more direct access to artists. Many galleries offer free entry and English-language guides. As of July 2026, a new direct flight from Paris to Wuhan has made it even easier for European art lovers to explore.\n\n## Practical Tips\n- **Getting around**: The Tanhualin area is best explored on foot or by bike; the metro station “Xiaodongmen” (Line 7) is a 10-minute walk away.\n- **Best time to visit**: Spring (March–May) and autumn (September–November) offer the most gallery openings and outdoor festivals.\n- **Local tip**: Head to **Donghu Creative City** on the east lake for a cluster of studios inside repurposed warehouses, plus lakeside cafés popular with artists.',
    coverImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['wuhan', 'contemporary art', 'galleries', 'tanhualin', 'cultural tourism', 'street art', 'hubei'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-12T06:49:29.442Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-12-03-u0q8',
    title: 'How to Apply for a China Travel Visa to Visit Hubei in 2026',
    summary: 'A step-by-step guide for international travelers on applying for a China travel visa, with tips specific to visiting Hubei province.',
    content: '## Overview of the China Travel Visa for Hubei\n\nAs of 2026, international travelers planning to explore Hubei province—home to the Three Gorges, Wuhan\'s bustling riverside, and ancient towns like Xiangyang—must obtain a valid China travel visa (L-visa) before arrival. The process has been streamlined in recent years, with online applications and faster processing times, making it easier than ever to plan your trip.\n\n## Step-by-Step Application Process\n\n### 1. Determine Your Visa Type\nMost tourists apply for the **L-visa**, which allows for single or multiple entries. For visits to Hubei, a single-entry visa is usually sufficient, but if you plan to combine Hubei with other provinces (e.g., Beijing or Shanghai), consider a multiple-entry option.\n\n### 2. Prepare Required Documents\n- **Valid passport** with at least 6 months\' validity and two blank pages.\n- **Completed visa application form** (available online via the Chinese Visa Application Service Center website).\n- **Recent passport photo** (48mm x 33mm, white background).\n- **Proof of travel arrangements**: round-trip flight bookings and hotel reservations in Hubei (e.g., Wuhan, Yichang, or Enshi).\n- **Travel itinerary** detailing your planned activities in Hubei (optional but recommended).\n\n### 3. Submit Your Application\nApplications are submitted through the **Chinese Visa Application Service Center (CVASC)** in your home country. As of 2026, most centers accept online submissions followed by an in-person appointment for biometrics (fingerprints and photo). Processing times range from 4 to 7 business days, with express service available for an extra fee.\n\n### 4. Visa Fees and Validity\n- **Single-entry visa**: approximately $140 USD (varies by nationality).\n- **Multiple-entry visa (6 or 12 months)**: $200–$300 USD.\n- Visas are typically valid for entry within 3 months of issue.\n\n## Tips for Visiting Hubei\n\n- **Wuhan Tianhe International Airport** is the main entry point, with direct flights from major Asian cities like Tokyo, Seoul, and Bangkok.\n- **Transit without a visa**: If you\'re flying through Wuhan with a layover of 24–72 hours, you may qualify for the 24-hour transit visa exemption—perfect for a quick taste of hot dry noodles (re gan mian) at a local breakfast stall.\n- **Hubei\'s highlights**: Don\'t miss the Three Gorges Dam, Yellow Crane Tower, and the Shennongjia forest area. Many travelers combine Hubei with a Yangtze River cruise.\n\n## Recent Updates for 2026\n\nAccording to the latest reports, China has expanded its **visa-free transit policy** to include more nationalities, making it easier for travelers from 54 countries (including the US, UK, and Australia) to visit Hubei for up to 144 hours if they hold a confirmed onward ticket. This is ideal for a short city break in Wuhan or a quick tour of the Three Gorges.\n\nFor longer stays, the standard L-visa application remains straightforward. The Chinese embassy in your country also offers an **online tracking system** to monitor your application status.\n\n## Final Advice\n\n- Apply at least 4 weeks before your trip to avoid delays.\n- Double-check your hotel addresses in Hubei—some rural areas like Enshi Grand Canyon may require precise location details.\n- For group tours, your travel agency can often handle the entire visa process for you.\n\nWith these steps, you\'ll be ready to explore Hubei\'s rich culture, stunning landscapes, and legendary cuisine in 2026!',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['visa', 'travel policy', 'hubei', 'wuhan', 'china travel', 'application process', 'tourism'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-12T06:49:41.481Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-12-04-0kw8',
    title: 'New Yichang Tourism Port Entry Rules Ease Travel for International Visitors in 2026',
    summary: 'Yichang, home to the Three Gorges Dam, has updated its port entry regulations to simplify visa procedures and boost tourism, making it easier for global travelers to explore Hubei.',
    content: '## Smoother Entry for Global Travelers\n\nYichang, the gateway to the Three Gorges Dam and the stunning Yangtze River Gorges, has rolled out updated tourism port entry regulations as of early 2026. The new rules aim to streamline visa processes and enhance the visitor experience for international tourists arriving at Yichang Sanxia Airport and the Yichang Yangtze River Cruise Port.\n\nAccording to the latest reports from the Yichang Bureau of Culture and Tourism, the city now offers a 24-hour visa-free transit policy for nationals from 54 countries, including the United States, Canada, the United Kingdom, Japan, and South Korea. This allows travelers en route to a third country to stay in Yichang for up to one day without a visa—perfect for a quick visit to the Three Gorges Dam or a stroll along the Yichang Riverside.\n\n## Key Updates for Cruise and Air Travelers\n\n- **Cruise Port Entry**: Foreign tourists arriving on Yangtze River cruises at Yichang Port can now apply for a temporary port visa on arrival. The process takes approximately 30 minutes, and travelers must present a valid passport, a confirmed cruise itinerary, and a hotel reservation in Yichang.\n- **Airport Arrivals**: Yichang Sanxia Airport has introduced e-gate systems for faster customs clearance. Passport holders from 40 countries can use automated kiosks for self-service immigration, reducing wait times to under 10 minutes.\n- **Group Visa Exemption**: Tour groups of five or more organized by registered travel agencies can now enter Yichang without a visa for up to 15 days, provided they stay with the group and follow a pre-approved itinerary.\n\n## Why This Matters for Travelers\n\nYichang is not just a transit hub—it\'s a cultural treasure. The updated regulations encourage longer stays. "We want visitors to see beyond the dam," says Li Wei, a tourism official in Yichang. "From the ancient Qu Yuan Temple to the scenic Xiling Gorge, Yichang has so much to offer."\n\nInternational tourists can now combine a cruise through the Three Gorges with a land visit to local tea plantations or the historic Yichang Old Street. The new rules also support the growing trend of independent travel, with simplified procedures for solo backpackers and small groups.\n\n## Practical Tips for Entry\n\n- **Documents Required**: Valid passport (minimum 6 months validity), return or onward ticket, and proof of accommodation.\n- **Port Visa Fee**: Approximately 160 RMB for a single-entry tourist visa (subject to change).\n- **Best Time to Visit**: Spring (March-May) and autumn (September-November) offer mild weather and clear views of the gorges.\n\nWith these updates, Yichang positions itself as a more accessible destination for global explorers. Whether you\'re here for the engineering marvel of the Three Gorges Dam or the serenity of the Yangtze River, the new regulations make your journey smoother than ever.',
    coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['yichang', 'hubei', 'visa policy', 'tourism port', 'entry regulations', 'three gorges dam', 'yangtze river cruise'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-12T06:49:54.892Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-12-05-ywiy',
    title: 'Wuhan Optics Valley Unveils Next-Gen Photonics and AI Breakthroughs in 2026',
    summary: 'Wuhan\'s Guanggu (Optics Valley) is making global headlines with cutting-edge photonic chips and AI-driven manufacturing, solidifying its status as a must-visit tech hub for travelers and innovators alike.',
    content: '## A New Dawn for Photonic Computing\n\nWuhan Optics Valley, known globally as Guanggu, has announced a major leap in photonic chip technology this year. Researchers at the valley\'s core lab have successfully demonstrated a silicon-photonic processor that operates at speeds 10 times faster than traditional electronic chips while consuming only a fraction of the energy. According to the latest reports, this breakthrough could revolutionize data centers and 5G/6G networks worldwide, making Guanggu a pivotal stop for tech enthusiasts touring Hubei.\n\n## AI-Powered Manufacturing Goes Mainstream\n\nIn 2026, Optics Valley has also rolled out a new generation of AI-driven robotics for precision manufacturing. Several factories in the zone now deploy autonomous systems that can adapt to real-time production changes, reducing waste by nearly 40%. Visitors to the Wuhan National Laboratory for Optoelectronics can observe these robots in action during public open days — a rare glimpse into the future of smart industry.\n\n## Why Travelers Should Care\n\n- **Interactive Exhibits**: The Optics Valley Science & Technology Museum now features hands-on demos of photonic circuits and AI tools. Perfect for families and tech-curious tourists.\n- **Startup Safari**: The valley\'s incubators host over 500 startups. Guided tours (in English) are available every Saturday, showcasing everything from drone delivery to quantum sensors.\n- **Scenic Tech Walk**: A new elevated walkway connects key labs and parks, with QR codes explaining innovations in real time. Ideal for Instagram-worthy shots of futuristic architecture.\n\n## Global Collaborations on the Rise\n\nHubei\'s Optics Valley has also strengthened ties with international universities this year, including joint research projects with MIT and the University of Tokyo. This has led to an influx of foreign researchers and entrepreneurs, giving the area a vibrant, multicultural vibe that travelers often find surprising.\n\n## Visiting Guanggu in 2026\n\nWuhan Tianhe Airport offers direct flights from over 50 international cities. Once in Wuhan, Metro Line 2 takes you directly to Optics Valley Square in under 40 minutes. The valley itself is pedestrian-friendly, with plenty of cafes and co-working spaces where you can soak in the atmosphere of China\'s \'Light Valley.\'\n\nWhether you\'re an engineer or a curious traveler, Wuhan Optics Valley in 2026 is a living showcase of how technology is reshaping our world — without the jargon.',
    coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['wuhan', 'optics valley', 'guanggu', 'photonics', 'ai', 'technology', 'hubei tourism'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-12T06:50:06.461Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-12-06-pluf',
    title: 'Hubei’s Chip Revolution: Inside the Province’s Fast-Growing Semiconductor Hub',
    summary: 'Hubei is emerging as a key player in China’s semiconductor industry, with new chip fabrication plants and R&D centers transforming cities like Wuhan and Xiangyang into tech destinations.',
    content: '## A New Silicon Valley in Central China\n\nHubei province is rapidly establishing itself as a powerhouse in semiconductor and chip manufacturing, drawing international attention from tech enthusiasts and industry watchers. As of early 2026, the region has become home to some of China’s most advanced chip fabrication facilities, with clusters of innovation sprouting around Wuhan’s East Lake High-Tech Zone—often called the "Optics Valley of China." This area, already famous for optical communications and lasers, now hosts multiple fabs producing 28nm to 14nm process chips, catering to automotive electronics, AI accelerators, and IoT devices.\n\n## Key Players and Facilities\n\n- **Yangtze Memory Technologies Co. (YMTC)** in Wuhan continues to ramp up production of 3D NAND flash memory chips, with its latest 232-layer design entering volume manufacturing this year. Visitors can book guided tours of the YMTC innovation center to see chip packaging demonstrations and historical exhibits on memory storage evolution.\n- **Xiangyang Semiconductor Park** in northern Hubei has attracted over 30 chip design and packaging companies. The park offers an interactive showroom where travelers can observe chip testing equipment and learn about the region’s role in the global supply chain.\n- **Wuhan’s IC Training Valley** has opened a new public education center in 2025, offering hands-on workshops for international visitors—from wafer fabrication simulations to chip design basics using open-source tools.\n\n## Why Travelers Should Care\n\nHubei’s tech boom isn’t just for engineers. The province now offers tech-themed itineraries blending science with culture:\n\n- **Wuhan Semiconductor Museum** (opened June 2025) features a giant periodic table wall and vintage chip collections from the 1970s to today. Free entry with English audio guides.\n- **Quarterly Open Fab Days** at selected facilities allow visitors to see cleanroom environments through glass corridors—no hazmat suit required.\n- **Chip-themed cafés** have popped up near fab zones, serving wafer-shaped cookies and espresso with circuit-board latte art.\n\n## Future Outlook\n\nAccording to the latest Hubei Tech Development Report, the province’s semiconductor output is projected to exceed ¥120 billion by late 2026, with talent recruitment programs attracting engineers from across Asia. For travelers, this means more English-friendly tours, expanded public exhibits, and even a new "Chip Trail" app launching next month—guiding users through historical sites, modern fabs, and tech museums via augmented reality.\n\nWhether you’re a gadget geek, a supply chain analyst, or simply curious about modern China, Hubei’s semiconductor story offers a glimpse into the future of computing—right in the heart of ancient Chu culture.',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['hubei', 'semiconductor', 'chip manufacturing', 'wuhan', 'technology', 'optics valley', 'yangtze memory'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-12T06:50:17.034Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-12-07-os1o',
    title: 'Discovering Qu Yuan: The Soul of Dragon Boat Festival in Hubei\'s Ancient Heartland',
    summary: 'Explore the origins of Dragon Boat Festival in Hubei province, where poet Qu Yuan’s legacy comes alive with new cultural experiences for travelers in 2026.',
    content: '## The Poet Who Shaped a Festival\n\nFor international travelers and culture enthusiasts, the Dragon Boat Festival (端午节) is one of China\'s most vibrant celebrations. But few know its deepest roots lie in **Hubei province**, the homeland of the poet-statesman **Qu Yuan** (c. 340–278 BCE). According to historical records, Qu Yuan, a loyal minister of the ancient Chu state (centered in modern-day Hubei), drowned himself in the Miluo River as a protest against corruption. Legend says local villagers raced boats to save him and threw sticky rice dumplings (zongzi) into the water to distract fish from his body—giving birth to the traditions we celebrate today.\n\n## Experiencing the Legacy in 2026\n\nThis year, Hubei is amplifying its cultural offerings for Dragon Boat Festival (estimated to fall on June 19, 2026). The **Zigui County** in western Hubei—Qu Yuan\'s birthplace—hosts one of China\'s most authentic commemorations. Travelers can visit the **Qu Yuan Temple**, a serene complex overlooking the Yangtze River, where calligraphy workshops and poetry recitals are held throughout the festival week. Local guides in Zigui now offer \'Qu Yuan Heritage Walks,\' tracing the poet\'s footsteps through ancient Chu ruins and lush gorges.\n\n## Zongzi and Boat Races: A Culinary & Sporting Journey\n\nBeyond history, the festival is a feast for the senses. Hubei\'s signature **zongzi** differ from southern varieties: they are often filled with red bean paste or preserved pork, wrapped in fragrant reed leaves. In cities like **Yichang** and **Wuhan**, riverside communities hold dragon boat races with ornately painted boats. The latest trend in 2026 includes \'eco-friendly\' boats made from bamboo and recycled materials—a nod to Qu Yuan\'s environmental philosophy. For the adventurous, Hubei\'s tourism board has launched a \'Dragon Boat Experience\' package, allowing visitors to paddle alongside local teams on the clear waters of the Qingjiang River.\n\n## Why Hubei Matters Now\n\nAs of 2026, Zigui has been recognized by UNESCO as part of a global network of \'Poetry Cities\', with new bilingual signage and QR-code audio guides in English, French, and Japanese. This makes it easier than ever for international visitors to immerse themselves in the story of Qu Yuan—a tale of loyalty, art, and the enduring bond between a people and their river. Whether you\'re tasting zongzi at a Wuhan night market or watching dragon boats slice through the Miluo River, Hubei invites you to celebrate a tradition that has pulsed for over 2,000 years.',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['qu yuan', 'dragon boat festival', 'hubei culture', 'zongzi', 'zigui county', 'yichang', 'chinese poetry'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-12T06:50:28.959Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-12-08-vurv',
    title: 'New Chu State Artifact Exhibition Opens in Hubei, Showcasing Ancient Kingdom\'s Glory',
    summary: 'A major exhibition of Chu State artifacts in Jingzhou reveals new findings from recent excavations, offering international travelers a deep dive into one of China\'s most influential ancient civilizations.',
    content: '## A Window into the Chu Kingdom\n\nThis spring, the Jingzhou Museum in Hubei province unveiled a landmark exhibition titled \'Echoes of the Chu Kingdom,\' featuring over 300 recently unearthed artifacts from the Warring States period (475–221 BCE). The Chu State, which flourished in present-day Hubei for over 800 years, is celebrated for its unique bronze casting, intricate lacquerware, and sophisticated silk weaving. According to the latest reports, the exhibition includes a never-before-seen set of bronze ritual vessels from a noble tomb discovered near the city of Yicheng in 2025.\n\n## Highlights for Culture Enthusiasts\n\nFor international visitors, the exhibition offers a rare glimpse into Chu\'s distinctive aesthetic, which set it apart from other ancient Chinese states. Key artifacts include:\n- **Bronze Ding Vessels**: Ornately decorated with phoenix motifs, symbolizing Chu\'s mythical origins.\n- **Lacquer Coffins**: Vibrant red and black designs, showcasing advanced preservation techniques.\n- **Jade Bi Discs**: Carved with cloud patterns, reflecting Chu\'s spiritual beliefs.\n\n\'These pieces reveal a civilization that valued artistic expression as much as military power,\' says Dr. Li Wei, lead curator at the museum. \'The phoenix, for example, was a Chu symbol of rebirth—quite different from the dragon of northern states.\'\n\n## Where to See Chu Artifacts in Hubei\n\nAs of 2026, travelers can explore Chu State heritage at several key sites:\n- **Jingzhou Museum**: The primary exhibition runs until October 2026. Open Tuesday–Sunday, 9 AM–5 PM. Entry is 60 CNY (approximately $8 USD).\n- **Hubei Provincial Museum (Wuhan)**: Home to the famous Sword of Goujian, a Chu-era blade still sharp after 2,500 years.\n- **Mawangdui Tomb Site (Changsha)**: While technically in Hunan, this Chu-era site is a short train ride from Wuhan and features stunning silk paintings.\n\n## Practical Tips for Visitors\n\nTo make the most of your trip:\n- **Book guided tours**: English-language audio guides are available at Jingzhou Museum for 30 CNY.\n- **Combine with other sites**: Pair your museum visit with a trip to the ancient Chu capital ruins at Jinan City (near Jingzhou), where ongoing excavations are open to the public on weekends.\n- **Try Chu cuisine**: Local restaurants in Jingzhou serve \'Chu-style\' dishes like steamed fish with pickled vegetables, inspired by archaeological records.\n\n## Why Chu Matters Today\n\nThe Chu State\'s influence extends beyond artifacts. Its poetry, particularly the works of Qu Yuan (commemorated during the Dragon Boat Festival), remains a cornerstone of Chinese literature. For culture enthusiasts, exploring Chu civilization offers a richer understanding of Hubei\'s role as a cultural crucible—long before it became a modern hub.\n\nPlan your visit this year to experience the legacy of a kingdom that once rivaled the Qin Empire in power and creativity.',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['chu state', 'hubei history', 'jingzhou museum', 'ancient artifacts', 'warring states', 'bronze vessels', 'cultural tourism'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-12T06:50:40.425Z',
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
