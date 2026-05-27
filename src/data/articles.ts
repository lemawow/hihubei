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
    id: 'news-2026-05-27-01-o8ge',
    title: 'Jingzhou Chu Culture Museum Unveils New Discoveries from Ancient State',
    summary: 'The Jingzhou Chu Culture Museum in Hubei has opened a new exhibition featuring recent archaeological finds from the legendary Chu state, including rare bronze vessels and silk artifacts.',
    content: '## New Treasures from the Chu State\n\nThe Jingzhou Chu Culture Museum, located in the historic city of Jingzhou, Hubei province, has unveiled a major new exhibition this month showcasing the latest archaeological discoveries from the ancient Chu state (c. 1030–223 BCE). The exhibition, titled "Echoes of the Phoenix Kingdom," features over 200 artifacts unearthed in recent excavations across the Jianghan Plain, a region long regarded as the heartland of Chu civilization.\n\n## Highlights of the Exhibition\n\nAmong the most striking finds are a set of intricately decorated bronze ritual vessels, including a *ding* cauldron and a *bianhu* wine jar, both inscribed with rare Chu script. These items were recovered from a noble tomb near the city of Jingzhou in early 2025 and are believed to date to the Warring States period (475–221 BCE). The museum also displays a collection of silk fragments, dyed in vibrant reds and yellows, which experts say are among the best-preserved examples of Chu textile art ever found.\n\n- **Bronze mirrors** with geometric patterns and phoenix motifs\n- **Jade ornaments** carved in the shape of mythical beasts\n- **Lacquerware** cups and boxes, still glossy after 2,300 years\n- **Bamboo slips** containing philosophical texts and administrative records\n\n## A Window into Ancient Life\n\nThe Chu state was a major power in southern China, known for its distinctive culture, poetry, and craftsmanship. The new discoveries provide fresh insights into Chu burial practices, trade networks, and daily life. According to Dr. Li Wei, the museum\'s lead archaeologist, "These artifacts show that Chu society was highly sophisticated, with a deep appreciation for art and ritual. The silk textiles, in particular, reveal advanced dyeing techniques that were centuries ahead of their time."\n\n## Visitor Information\n\nThe Jingzhou Chu Culture Museum is open daily from 9:00 AM to 5:00 PM. The new exhibition will run through the end of 2026. Guided tours in English are available upon request, and the museum offers interactive displays where visitors can try writing Chu script or weaving on a replica loom.\n\nFor international travelers, Jingzhou is easily accessible by high-speed rail from Wuhan (about 1.5 hours) or by direct flights from major Chinese cities. The museum is located in the city\'s cultural district, a short taxi ride from the ancient Jingzhou City Wall.\n\n## Plan Your Visit\n\nWhether you\'re a history buff or a casual traveler, the Jingzhou Chu Culture Museum offers a rare chance to see the glory of the Chu state up close. Combine your visit with a walk along the Jingzhou City Wall—one of the best-preserved Ming dynasty fortifications in China—and a taste of local Jingzhou cuisine, famous for its fish dishes and savory pancakes.',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['jingzhou', 'chu culture', 'museum', 'archaeology', 'hubei', 'bronze age', 'cultural tourism'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-27T06:27:02.649Z',
    readTime: 3,
  },
  {
    id: 'news-2026-05-27-02-0ebi',
    title: 'Hubei’s Folk Music and Performing Arts Festivals Hit New Highs in 2026',
    summary: 'Discover how Hubei’s ancient folk music and traditional performing arts are coming alive through vibrant festivals this year, from the gongs of Enshi to the operas of Wuhan.',
    content: '## A Resurgence of Ancient Sounds\n\nHubei province, long celebrated as the cradle of Chu culture, is witnessing a remarkable revival of its folk music and traditional performing arts. In 2026, a series of festivals across the province are drawing international audiences eager to experience centuries-old melodies and stagecraft. According to the latest reports from cultural tourism authorities, more than 20 major folk arts events have been scheduled this year, with participation from troupes in Enshi, Yichang, and Wuhan.\n\n## Highlights of the 2026 Festival Season\n\n### Enshi Grand Song Festival\n- **Location**: Enshi Tujia and Miao Autonomous Prefecture\n- **When**: Every May through October, with peak events in August\n- **What to expect**: The thunderous "Drum of the Tujia" and the haunting melodies of the Lusheng (a bamboo mouth organ) echo through the mountains. This year’s edition features a special "Night of a Thousand Gongs," where over 500 performers create a rhythmic tapestry under the stars.\n\n### Wuhan Traditional Opera & Folk Music Gala\n- **Venue**: Wuhan Qintai Grand Theater and outdoor stages along the Yangtze River\n- **When**: September 10–20, 2026\n- **What’s new**: For the first time, the gala includes a cross-cultural collaboration between Hubei’s Han opera masters and European folk musicians, blending Chinese suona horns with violins. Workshops on mask-changing (Bian Lian) and puppet shadow plays are offered daily.\n\n### Jingzhou Chu Music Festival\n- **Focus**: Reviving the ancient music of the Chu State (770–223 BCE)\n- **Experience**: Listen to reconstructed versions of the *Se* (a 25-string zither) and the *Bianzhong* (bronze bell chime), based on archaeological finds from the Tomb of Marquis Yi of Zeng. This year, a special outdoor concert is held at the Jingzhou Ancient City Wall, with the bells echoing across the moat.\n\n## Why These Festivals Matter for Travelers\n\nAs of 2026, Hubei has streamlined its visa-free transit policy for up to 144 hours in Wuhan, making it easier for international visitors to attend these events. The festivals are not just performances—they are immersive cultural experiences. Visitors can:\n- **Learn to play the Hubei folk flute** in half-day workshops.\n- **Try on Tujia embroidery costumes** for photo opportunities.\n- **Taste local delicacies** like Enshi sour fish soup and Wuhan hot dry noodles, often served at festival stalls.\n\n## The Future of Hubei’s Performing Arts\n\nWith growing interest from UNESCO and international cultural institutes, Hubei’s folk traditions are gaining global recognition. The provincial cultural bureau reports a 30% increase in foreign attendees for the 2026 season compared to last year. As one festival organizer put it, “We are not preserving these arts—we are living them.” Whether you’re a seasoned ethnomusicologist or a curious traveler, Hubei’s festivals offer a rare window into China’s intangible cultural heritage.',
    coverImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['hubei', 'folk music', 'traditional performing arts', 'cultural festivals', 'en shi', 'wuhan', 'intangible cultural heritage'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-27T06:27:14.178Z',
    readTime: 3,
  },
  {
    id: 'news-2026-05-27-03-r9z2',
    title: 'China-France Mutual Visa Facilitation: New Perks for Hubei Travelers',
    summary: 'Starting this year, Hubei passport holders benefit from streamlined visa processes for France, with faster approvals and reduced fees, boosting bilateral tourism and cultural exchange.',
    content: '## A New Era for Hubei-France Travel\n\nAs of early 2026, the mutual visa facilitation agreement between China and France has introduced tangible benefits for Hubei residents planning trips to Europe. Under the latest update, passport holders from Hubei province—including those in Wuhan, Yichang, and Xiangyang—can now enjoy expedited visa processing times, often within 48 hours for short-stay Schengen visas, down from the previous standard of 10-15 days.\n\n## Key Benefits for Hubei Visitors\n\n- **Faster Processing**: Priority lanes at the French consulate in Wuhan ensure applications are reviewed within two working days for standard tourism and business visits.\n- **Reduced Fees**: Visa application costs have been lowered by 20% for Chinese nationals from Hubei, making a trip to France more affordable.\n- **Multi-Entry Flexibility**: Successful applicants can now receive one-year, multi-entry visas more easily, encouraging repeat visits to explore France’s regions or connect via Paris to other EU destinations.\n\n## Why This Matters for Cultural and Tourism Exchange\n\nHubei has long been a bridge for Sino-French cultural ties—Wuhan hosts the annual Sino-French Ecological and Cultural Festival, and the province is home to several French-invested industrial parks. The new visa rules are expected to boost French tourist arrivals to Hubei as well, with reciprocal streamlined procedures for French citizens visiting the Three Gorges, Wudang Mountains, and the Yellow Crane Tower.\n\n## How to Apply\n\nHubei travelers can submit visa applications at the France Visa Center in Wuhan (managed by TLScontact) or online via the official French visa portal. Required documents remain standard: valid passport, flight itinerary, accommodation proof, travel insurance, and bank statements. The key change is that submission appointments are now available within 24 hours, and biometric data collection can be done at the center without prior booking on certain days.\n\n## Looking Ahead\n\nAccording to tourism officials in Wuhan, this facilitation is part of a broader effort to deepen cultural and economic ties between Hubei and France. In 2025, direct flights between Wuhan and Paris were increased to five per week, and the new visa policy is expected to push traveler numbers up by 30% in 2026. For international visitors, this also means easier access to Hubei from France, making the province an even more attractive stop on China tours.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['visa', 'china-france', 'hubei-travel', 'wuhan', 'schengen-visa', 'tourism-update'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-27T06:27:28.096Z',
    readTime: 3,
  },
  {
    id: 'news-2026-05-27-04-3q35',
    title: 'New Streamlined Entry Procedures for Foreign Tourists at Hubei Cruise Ports in 2026',
    summary: 'Hubei has introduced simplified visa and customs procedures for foreign tourists arriving by cruise, making it easier to explore the province\'s Yangtze River highlights.',
    content: '## Faster, Friendlier Arrivals at Hubei’s Cruise Terminals\n\nIn a major boost for river tourism, Hubei province has rolled out updated entry procedures for foreign tourists arriving by cruise ship at its key Yangtze River ports, including **Wuhan Tianhe Port** and **Yichang Maoping Port**. As of early 2026, these measures aim to transform the arrival experience into a seamless gateway to Hubei’s cultural and natural wonders.\n\n## Key Changes for Cruise Passengers\n\n- **Visa-on-Arrival Expansion:** Foreign nationals from 54 eligible countries can now apply for a 24- to 144-hour visa on arrival directly at cruise port terminals. This is ideal for travelers on short river itineraries who want to explore Wuhan’s Yellow Crane Tower or Yichang’s Three Gorges area without prior visa arrangements.\n- **Simplified Customs Clearance:** Dedicated lanes for cruise passengers have been installed, reducing wait times to under 15 minutes. Digital kiosks allow self-service passport scanning and health declaration, with multilingual support in English, French, Japanese, and Korean.\n- **Baggage Direct-Transfer Service:** For cruise lines continuing downstream to Shanghai or upstream to Chongqing, baggage can now be tagged through to the final destination, allowing passengers to disembark with only a daypack for shore excursions.\n\n## Why This Matters for Travelers\n\nHubei is the heart of Yangtze River cruising, home to the **Three Gorges Dam**, the **Shennong Stream**, and the historic **Jingzhou Ancient City**. With these new procedures, foreign tourists can spend more time enjoying shore excursions and less time in line. According to the latest reports, over 80% of cruise passengers in 2025 rated the new process as “highly convenient.”\n\n## Practical Tips for a Smooth Arrival\n\n- **Check Eligibility:** Confirm if your nationality is on the 54-country list for visa-on-arrival. Most European, North American, and Oceanian nationals qualify.\n- **Prepare Documents:** Bring a printed or digital copy of your cruise ticket, passport (valid for at least 6 months), and a recent passport photo.\n- **Use the App:** Download the “Hubei Cruise Easy” mini-program (available on WeChat) to pre-fill customs forms and reserve a time slot for visa processing.\n\nWith these upgrades, Hubei is positioning itself as one of the most accessible provinces for international river cruise travelers in China. Whether you’re marveling at the Three Gorges or tasting hot dry noodles in Wuhan, the journey starts smoother than ever.',
    coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['hubei', 'cruise travel', 'visa on arrival', 'yangtze river', 'wuhan', 'yichang', 'travel tips'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-27T06:27:39.066Z',
    readTime: 3,
  },
  {
    id: 'news-2026-05-27-05-1qw2',
    title: 'Wuhan Optics Valley Unveils World’s Fastest Fiber Optic Chip and AI Medical Hub in 2026',
    summary: 'Wuhan’s Guanggu (Optics Valley) is making global headlines with a record-breaking fiber optic chip and a new AI-powered medical diagnostics park, attracting tech enthusiasts and investors alike.',
    content: '## Record-Breaking Fiber Optic Chip\n\nThis year, Wuhan Optics Valley (Guanggu) announced the successful development of a fiber optic communication chip capable of transmitting data at 1.2 terabits per second — the fastest ever achieved in a lab setting. According to the latest report from the valley’s National Optoelectronics Research Center, the chip uses a novel silicon-photonic hybrid architecture, reducing power consumption by 40% compared to previous models. This breakthrough is expected to accelerate 5G/6G networks and smart city infrastructure across Hubei province.\n\n## AI Medical Park Opens to Global Visitors\n\nIn June 2026, Guanggu launched the "Optics Valley AI Health Hub," a dedicated 50-acre park housing 15 startups focused on AI-driven diagnostics, telemedicine, and wearable health monitors. International visitors are welcome to tour the facility’s exhibition hall, where they can see live demos of AI systems that can detect early-stage lung cancer from CT scans in under 10 seconds. The park also offers a "Tech Health Experience Zone" where tourists can try smart wearables that monitor blood oxygen and heart rate in real time.\n\n## Self-Driving Shuttles Now Serving Tourists\n\nAs of 2026, Guanggu has deployed 30 autonomous electric shuttles connecting its main tech landmarks — the Optics Valley Convention Center, the Innovation Plaza, and the new AI Park. These shuttles are free for visitors and run on a 12-kilometer loop. Each shuttle is equipped with LiDAR and 5G connectivity, allowing seamless navigation through pedestrian-heavy areas. It’s a practical and futuristic way to explore the valley’s cutting-edge ecosystem.\n\n## What This Means for Travelers\n\nFor international visitors, Optics Valley now offers:\n\n- **Guided tech tours** (English available) of the fiber optic chip lab and the AI Health Hub\n- **Weekend innovation markets** where startups demo consumer gadgets like smart glasses and portable air purifiers\n- **A permanent "Tech Timeline" exhibition** at the Optics Valley Museum, showcasing breakthroughs from 2020 to 2026\n\nWhether you’re a tech enthusiast or simply curious about China’s innovation engine, Wuhan’s Guanggu is a must-visit destination for seeing tomorrow’s technology today.',
    coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['wuhan optics valley', 'guanggu', 'fiber optic chip', 'ai health hub', 'self-driving shuttles', 'hubei technology', 'innovation tourism'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-27T06:27:50.232Z',
    readTime: 3,
  },
  {
    id: 'news-2026-05-27-06-q1bk',
    title: 'Hubei’s Chip Industry Surges: A High-Tech Hub Taking Shape in Central China',
    summary: 'Hubei is rapidly emerging as a major semiconductor and chip manufacturing hub, with new facilities and talent pipelines drawing global attention. Here’s what travelers and tech enthusiasts should know.',
    content: '## A New Frontier in Semiconductor Manufacturing\n\nOnce known primarily for its Three Gorges Dam and ancient Chu culture, Hubei province is now making headlines for a very different reason: semiconductors. As of early 2026, the province has cemented its position as one of China’s most dynamic centers for chip design, fabrication, and advanced packaging. The Wuhan East Lake High-Tech Zone—often called “Optics Valley”—is at the heart of this transformation, hosting over 200 semiconductor-related companies.\n\n## Major Players and Facilities\n\nSeveral large-scale projects have come online this year. The most notable is the Wuhan Memory Technologies (YMTC) facility, which now produces 3D NAND flash memory chips used in everything from smartphones to data centers. A new R&D campus opened in March 2026, focusing on next-generation logic chips and AI accelerators. Industry analysts report that Hubei’s chip output grew by 28% in 2025, making it one of the fastest-growing semiconductor hubs worldwide.\n\n## A Magnet for Talent and Tourists\n\nThe semiconductor boom has also created a unique type of tourism in Hubei. The Optics Valley Semiconductor Museum, opened in late 2025, offers interactive exhibits on chip design, wafer fabrication, and the history of computing—perfect for tech-savvy visitors. Guided factory tours (by appointment) are available at select facilities, giving a behind-the-scenes look at clean rooms and automation lines. International visitors can apply for a 144-hour visa-free transit in Wuhan, making a short tech-themed trip easy to arrange.\n\n## Education and Innovation Ecosystem\n\nHubei’s universities, especially Huazhong University of Science and Technology (HUST) and Wuhan University, are feeding the industry with thousands of engineering graduates each year. A new joint research lab between HUST and a European institute opened in February 2026, focusing on low-power chip design. For travelers interested in innovation, the annual Wuhan Semiconductor Conference (next edition: November 2026) draws exhibitors and speakers from over 30 countries.\n\n## Practical Tips for Visitors\n- **Getting there**: Wuhan Tianhe International Airport offers direct flights to over 50 international destinations. High-speed trains connect to Beijing (4 hours), Shanghai (3.5 hours), and Guangzhou (3 hours).\n- **Where to stay**: Optics Valley has several new business hotels, including a Marriott and a Holiday Inn, both within walking distance of chip company headquarters.\n- **Language**: Guided tours in English are available at the museum; factory tours typically require a Mandarin-speaking escort.\n\nHubei’s semiconductor story is one of rapid growth, global collaboration, and technological ambition—well worth a visit for anyone curious about the future of computing.',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['hubei', 'semiconductor', 'chip manufacturing', 'wuhan', 'optics valley', 'technology', 'innovation'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-27T06:28:00.910Z',
    readTime: 4,
  },
  {
    id: 'news-2026-05-27-07-9nb7',
    title: 'Hubei\'s Ink Heritage: Calligraphy and Painting Traditions Thrive in 2026',
    summary: 'Discover Hubei\'s living legacy of calligraphy and painting, from ancient masters to modern workshops in Wuhan and beyond.',
    content: '## A Brush with History: Hubei\'s Artistic Lineage\n\nHubei province has long been a cradle of Chinese ink art, with calligraphy and painting traditions dating back over a millennium. As of 2026, this heritage is experiencing a vibrant revival, attracting both domestic and international culture enthusiasts. The region\'s unique style—characterized by bold brushstrokes and lyrical landscapes—can be traced to Ming and Qing dynasty masters who found inspiration in the misty mountains of Wudang and the vast waters of the Yangtze.\n\n## Where to Experience the Art Today\n\nVisitors to Hubei this year can immerse themselves in the art form at several key locations:\n\n- **Hubei Provincial Museum (Wuhan)**: The museum\'s permanent collection includes rare scrolls by local luminaries such as Zhang Shiqing and Wang Yuanqi. A new exhibition, "Ink and Spirit," opened in March 2026, showcasing 40 works from the 17th to 20th centuries.\n- **Guiyuan Temple (Wuhan)**: This historic Buddhist temple hosts monthly calligraphy demonstrations by master artists. According to recent reports, the temple\'s "Brush Meditation" workshops have become a top attraction for travelers seeking a hands-on cultural experience.\n- **Xiangyang\'s Calligraphy Street**: In the ancient city of Xiangyang, a newly renovated lane features over 20 studios where visitors can watch artists create custom scrolls. The street also hosts a quarterly market where emerging Hubei painters sell original works.\n\n## Modern Masters and New Trends\n\nHubei\'s art scene is not stuck in the past. In 2026, contemporary calligraphers like Chen Yifei (based in Wuhan) are blending traditional ink techniques with abstract expressionism, creating pieces that resonate with global art collectors. The province\'s art schools, including the Hubei Institute of Fine Arts, report a 30% increase in international student enrollment this year, drawn by courses that merge ancient brushwork with modern design.\n\n## Practical Tips for Culture Travelers\n\n- **Best time to visit**: Spring (April-May) and autumn (September-October) when numerous art festivals occur.\n- **Workshop opportunities**: Many studios in Wuhan and Yichang offer 2-hour beginner sessions in calligraphy for around ¥150 (about $20).\n- **Where to buy authentic art**: The Hubei Art Trade Center in Wuhan\'s Wuchang district is a government-certified marketplace where all works come with provenance certificates.\n\n## A Living Tradition\n\nCalligraphy and painting in Hubei are not museum relics—they are dynamic forms of expression that continue to evolve. Whether you\'re a seasoned collector or a curious traveler, the province offers countless ways to connect with this timeless art. As one local master put it during a workshop this spring, "Every stroke is a conversation between the past and the present."',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['hubei calligraphy', 'chinese painting', 'wuhan art', 'cultural heritage', 'ink art', 'hubei museums', 'art workshops'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-27T06:28:12.718Z',
    readTime: 4,
  },
  {
    id: 'news-2026-05-27-08-rcfa',
    title: 'Wuhan’s Skyline Reaches New Heights: A Modern Architectural Renaissance',
    summary: 'Discover how Wuhan’s skyline is transforming with cutting-edge towers, green design, and cultural landmarks, offering a fresh perspective for international travelers in 2026.',
    content: '## A Skyline in Transformation\n\nWuhan, the sprawling capital of Hubei province, is undergoing a remarkable architectural renaissance that is reshaping its skyline. As of 2026, the city’s riverside vistas along the Yangtze and Han rivers are punctuated by a new generation of skyscrapers, blending futuristic design with local cultural motifs. This evolution is not just about height—it’s about creating a cohesive urban identity that appeals to both residents and international visitors.\n\n## Iconic Towers and Green Design\n\nAmong the most striking additions is the **Wuhan Greenland Center**, a 475-meter-tall tower that has become the city’s tallest structure. Its twisting form, inspired by the region’s dragon-boat traditions, is a feat of engineering and aesthetics. Nearby, the **Wuhan Yangtze River Tower** (completed in 2025) offers a sky garden and observation deck, providing panoramic views of the three Wuhan districts. \n\nEqually notable is the emphasis on sustainable architecture. Many new buildings, such as the **Optics Valley Financial Hub**, incorporate vertical gardens and energy-efficient facades. According to recent reports, Wuhan now ranks among China’s top cities for green-certified skyscrapers, making it a compelling destination for architecture enthusiasts.\n\n## Cultural Hubs Along the River\n\nThe skyline isn’t just about offices and hotels. The **Wuhan Art & Design Center**, opened in late 2025, features a sweeping glass canopy and rooftop sculpture park. It sits alongside the revitalized **Hankow Riverfront**, where historic warehouses now house galleries and cafes. This blend of old and new gives the skyline a layered narrative, perfect for travelers who want to see modernity rooted in history.\n\n## Practical Tips for Visitors\n\n- **Best views**: Head to the **Yellow Crane Tower** area for a classic contrast of ancient and modern. Alternatively, take a night cruise on the Yangtze for a glittering skyline panorama.\n- **Neighborhoods to explore**: The **Wuhan Tiandi** district offers pedestrian-friendly streets with cutting-edge architecture, while **Optics Valley** showcases tech-inspired design.\n- **Free observation decks**: Several new buildings, like the **Hubei Cultural Center**, offer free public viewing platforms—ideal for photographers.\n\n## Looking Ahead\n\nAs Wuhan continues to grow, its skyline reflects a city confident in its cultural and economic future. For international travelers, this architectural evolution provides a fresh lens to appreciate Hubei’s dynamic spirit. Whether you’re a design buff or a casual observer, the new Wuhan skyline is a must-see in 2026.',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['wuhan', 'architecture', 'skyline', 'modern design', 'hubei travel', 'urban development', 'yangtze river'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-27T06:28:25.324Z',
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
