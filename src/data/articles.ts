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
    id: 'news-2026-06-27-01-ael4',
    title: 'Hubei Revives Ancient Traditions: Intangible Cultural Heritage Preservation Efforts Surge in 2026',
    summary: 'Discover how Hubei province is breathing new life into its intangible cultural heritage—from Qingquan embroidery to dragon boat festivals—offering travelers immersive experiences in 2026.',
    content: '## A Living Legacy: Hubei\'s Intangible Cultural Heritage Gets a Modern Boost\n\nHubei province, long celebrated for its natural wonders like the Three Gorges and Shennongjia, is now making headlines for its dynamic efforts to preserve intangible cultural heritage (ICH). As of 2026, local initiatives are transforming ancient crafts, performing arts, and rituals into vibrant, accessible experiences for both locals and international visitors.\n\nAccording to the latest cultural reports, over 100 ICH items across Hubei have received renewed support through workshops, digital archives, and tourism integration. This year, the province launched a series of "Living Heritage" programs in cities like Wuhan, Yichang, and Jingzhou, where travelers can witness masters at work.\n\n### Spotlight on Qingquan Embroidery and Clay Sculpture\n\nOne standout is **Qingquan embroidery** from Huanggang, a silk-thread technique dating back to the Song dynasty. In 2026, a dedicated ICH center opened in Huanggang, offering daily demonstrations and hands-on classes. Visitors can now learn the intricate "double-sided embroidery" method directly from artisans. Similarly, **Huangpi clay sculpture**—known for its expressive folk figures—has seen a revival, with new exhibitions at the Wuhan Art Museum drawing crowds this spring.\n\n### Dragon Boat Festivals Go Digital\n\nHubei is the birthplace of the Dragon Boat Festival (Duanwu), honoring poet Qu Yuan. This year, organizers are blending tradition with technology: live-streamed races from Zigui County (Qu Yuan\'s hometown) reached 2 million online viewers in June 2026. On-site, visitors can join workshops on making zongzi (sticky rice dumplings) and learn the ancient art of dragon boat carving—a craft now taught at local schools.\n\n### Practical Tips for Travelers\n\n- **Visit the Hubei Intangible Cultural Heritage Museum** in Wuhan (opened late 2025): features rotating exhibits on shadow puppetry, Han opera, and tea-making traditions.\n- **Book a workshop**: Many sites offer English-friendly sessions. Check the official "Hubei Heritage" WeChat mini-program for schedules.\n- **Best time to go**: Spring (April-May) for embroidery festivals; June for Dragon Boat events; autumn for folk music performances.\n\n### A Sustainable Model for Cultural Tourism\n\nLocal communities are at the heart of these efforts. In Enshi, Tujia minority weaving cooperatives now sell directly to tourists via village markets, preserving patterns passed down for centuries. Meanwhile, Wuhan\'s Hankow Liyuan (a historic garden) hosts weekly performances of **Han Opera**, a UNESCO-recognized ICH form, with subtitles in English and Japanese.\n\nAs Hubei proves, preserving intangible heritage isn\'t about freezing the past—it\'s about letting traditions evolve. For travelers, this means richer, more authentic encounters with Chinese culture. Whether you\'re stitching silk in Huanggang or watching a dragon boat race in Zigui, Hubei\'s heritage is alive and waiting.',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['hubei intangible cultural heritage', 'qingquan embroidery', 'dragon boat festival', 'hubei cultural tourism', 'wuhan museums', 'han opera', 'enshi tujia weaving'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-27T05:58:04.489Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-27-02-gy4h',
    title: 'Enshi Tujia Festivals 2026: Sheba Day, Sister Fest & Ancient Traditions Thrive',
    summary: 'Discover the vibrant Tujia ethnic festivals in Enshi, Hubei—from the fiery Sheba Day to the romantic Sister Fest. A cultural calendar for 2026 travelers.',
    content: '## Enshi: Heart of Tujia Heritage\n\nDeep in the mountains of southwestern Hubei, Enshi Tujia and Miao Autonomous Prefecture is a living museum of ethnic traditions. Home to over 2 million Tujia people, this region bursts with festivals that have survived for centuries. As of 2026, local communities are actively reviving ancient rituals, making this the perfect time for cultural travelers to visit.\n\n## Sheba Day (February–March): Fire, Dance & Ancestors\n\nSheba Day is the Tujia New Year—a movable feast tied to the lunar calendar. This year, celebrations begin in late February. The highlight is the **bonfire dance** (摆手舞, *baishouwu*), where hundreds of villagers in embroidered costumes circle flames, moving to the rhythm of gongs and drums. It\'s a prayer for harvest and a tribute to ancestors. Visitors can join in at villages like **Xuan\'en County** or **Lichuan City**, where locals welcome guests to learn the steps.\n\n> *"The dance is not just performance—it\'s our connection to the past,"* says local elder Tian Mei, 68, who has led Sheba rituals for four decades.\n\n## Sister Fest (July–August): Love & Handicrafts\n\nFor a more intimate experience, the **Sister Fest** (女儿会) transforms Enshi into a matchmaking fair. Young Tujia women wear their finest silver jewelry and hand-embroidered jackets, singing folk songs to attract suitors. The festival also showcases **Tujia embroidery** (土家织锦), a UNESCO-recognized craft. In July 2026, the main event takes place in **Enshi Grand Canyon Scenic Area**, with workshops where travelers can try weaving under master artisans.\n\n## Year-Round Traditions\n\n- **Tujia Diao脚楼 (stilt houses)**: These wooden homes, built without nails, are still inhabited in villages like **Pengjiazhai**.\n- **Oil-tea soup (油茶汤)**: A savory breakfast staple—fried tea leaves with rice, peanuts, and ginger. Try it at local homestays.\n- **Mountain songs**: Tujia call-and-response singing, often improvised, can be heard during any festival.\n\n## Getting There & Tips\n\nEnshi is accessible by high-speed rail from Wuhan (4 hours) or Yichang (2 hours). The best time for festivals is **March–August**. For Sister Fest, book accommodation early—the event draws thousands. Most villages have basic English signage, but a translation app helps. \n\nAs of 2026, Enshi\'s tourism bureau has launched a **"Festival Passport"**—stamp-collecting for travelers who attend three or more events, redeemable for local crafts. It\'s a fun way to dive into Tujia culture while supporting local artisans.',
    coverImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['enshi', 'tujia', 'ethnic festivals', 'sheba day', 'sister fest', 'hubei culture', 'folk traditions'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-27T05:58:16.816Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-27-03-8l73',
    title: 'Hubei Sky Hub: Wuhan Adds 10 New International Routes in 2026',
    summary: 'Wuhan Tianhe International Airport is expanding its global reach with new direct flights to Europe, Southeast Asia, and the Middle East, making Hubei more accessible than ever for international travelers.',
    content: '## Hubei\'s Air Network Takes Off in 2026\n\nWuhan, the capital of Hubei province, is rapidly transforming into a major aviation gateway in central China. According to the latest reports from Hubei Airport Group, Wuhan Tianhe International Airport (WUH) has added 10 new international routes in the first half of 2026, bringing the total number of direct overseas destinations to over 45.\n\n## New Direct Flights to Explore\n\nTravelers can now fly non-stop from Wuhan to:\n\n- **Europe**: London Heathrow (daily), Paris Charles de Gaulle (4x weekly), Frankfurt (3x weekly)\n- **Southeast Asia**: Bangkok (12x weekly), Singapore (daily), Kuala Lumpur (4x weekly), Hanoi (3x weekly)\n- **Middle East**: Dubai (4x weekly), Doha (3x weekly)\n- **East Asia**: Tokyo Narita (daily), Seoul Incheon (daily), Osaka (4x weekly)\n\nThis summer, China Southern Airlines and Hainan Airlines have launched seasonal services to Bali and Phuket, catering to leisure travelers from Hubei.\n\n## Visa-Free Transit Now Easier\n\nA major update for international visitors: Wuhan now offers a 144-hour visa-free transit policy for citizens of 54 countries. This means travelers flying through Wuhan can explore the city and surrounding areas for up to 6 days without a visa. The policy applies to passengers holding valid onward tickets to a third country.\n\n## Why Hubei is Worth the Layover\n\nWuhan is not just a transit hub—it\'s a destination. With direct flights arriving, travelers can easily visit:\n\n- **Yellow Crane Tower**: The iconic Tang Dynasty pavilion overlooking the Yangtze River\n- **East Lake**: China\'s largest urban lake, perfect for cycling and boating\n- **Hubei Provincial Museum**: Home to the ancient chime bells of Marquis Yi of Zeng\n- **Wuhan Yangtze River Bridge**: A stunning example of mid-20th century engineering\n\n## What\'s Next?\n\nBy the end of 2026, Hubei plans to launch direct flights to Istanbul, Sydney, and San Francisco, further cementing its role as a central China aviation hub. Airports in Yichang and Xiangyang are also expanding their international terminals to handle the growing demand.\n\nFor real-time flight schedules and visa information, check the official Wuhan Tianhe Airport website or consult your airline.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['wuhan tianhe airport', 'hubei flights', 'china travel', 'visa-free transit', 'international routes', 'wuhan travel', 'air travel china'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-27T05:58:29.249Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-27-04-bgil',
    title: 'New China-France Visa Deal Opens Easier Travel for Hubei Visitors',
    summary: 'A new mutual visa facilitation agreement between China and France makes it easier for Hubei residents to visit France, and for French tourists to explore Hubei.',
    content: '## Easier Travel Between Hubei and France\n\nAs of early 2026, a new mutual visa facilitation agreement between China and France is simplifying travel for residents of Hubei province and French citizens alike. The policy, which rolled out this year, aims to boost cultural exchange and tourism between the two regions.\n\n## What the Agreement Means for Hubei Travelers\n\nUnder the updated framework, Hubei residents applying for a French visa can now benefit from:\n\n- **Faster processing times:** Visa applications from Hubei are now processed within 48 hours for standard tourist visits.\n- **Reduced documentation:** Applicants no longer need to provide proof of hotel bookings or detailed itineraries for short stays (up to 15 days).\n- **Multi-year validity:** Frequent travelers from Hubei can apply for visas valid for up to five years, allowing multiple entries.\n- **Streamlined biometrics:** Biometric data collected in Wuhan is now valid for five years, reducing repeat visits to the visa center.\n\nThe new rules apply to all visa categories, including tourism, business, and cultural exchange. French consular services in Wuhan have expanded their capacity to handle the expected increase in applications, adding additional appointment slots each week.\n\n## Benefits for French Visitors to Hubei\n\nFrench citizens visiting Hubei also enjoy reciprocal benefits:\n\n- **Visa-free transit:** French tourists transiting through Wuhan Tianhe International Airport to a third country can stay up to 144 hours without a visa.\n- **Simplified application:** French nationals applying for Chinese visas in Paris or Marseille can now submit simplified documentation for trips to Hubei.\n- **Extended stays:** Cultural exchange participants from France can now stay in Hubei for up to 180 days on a single visa.\n\n## Why This Matters for Travelers\n\nThis mutual facilitation is a game-changer for Hubei\'s tourism sector. French travelers are increasingly drawn to Hubei\'s UNESCO World Heritage sites, including the Wudang Mountains and the ancient buildings of the Jianghan Plain. Meanwhile, Hubei residents can now more easily explore France\'s cultural landmarks, from the Louvre to the lavender fields of Provence.\n\nLocal tour operators in Wuhan have already reported a 30% increase in inquiries about France travel packages since the policy was announced. Similarly, French travel agencies are promoting new itineraries that highlight Hubei\'s cuisine, Yangtze River cruises, and the Three Gorges region.\n\n## Practical Tips for Applicants\n\n- **Apply early:** Despite faster processing, demand is high. Submit applications at least two weeks before travel.\n- **Use the Wuhan center:** The France Visa Application Center in Wuhan (near Hankou Railway Station) is the primary hub for Hubei residents.\n- **Check eligibility:** The multi-year visa is available for those with a proven travel history to Schengen countries.\n\nFor the latest updates, visit the official France-Visas website or consult the Wuhan visa center directly.',
    coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['china-france visa', 'hubei travel', 'wuhan', 'visa facilitation', 'france tourism', 'hubei culture', 'travel policy'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-27T05:58:39.611Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-27-05-zukp',
    title: 'Hubei Reaches for the Stars: Satellite Tech and Aerospace Innovation in 2026',
    summary: 'Discover how Hubei is becoming a key player in satellite and aerospace tech—from Wuhan\'s space labs to new launch services, this is a frontier for science travelers.',
    content: '## Hubei\'s Space Ambitions Take Flight\n\nHubei is making headlines in the aerospace world this year, with major strides in satellite technology and space research centered in Wuhan. The province is not just a hub for terrestrial travel—it\'s becoming a launchpad for innovation beyond the atmosphere.\n\nAccording to the latest reports, the Wuhan National Laboratory for Optoelectronics has been developing advanced small satellite platforms designed for Earth observation and environmental monitoring. These satellites, weighing under 100 kilograms, are being built with cutting-edge optical sensors that can track deforestation, urban growth, and even crop health across the Yangtze River basin.\n\n## Satellite Launch Support and Ground Stations\n\nHubei now hosts a growing network of ground control stations in the suburbs of Wuhan and near the city of Yichang. In early 2026, these stations successfully supported the deployment of three new low-orbit communication satellites, part of a constellation aimed at providing high-speed internet to remote areas of the province. The ground stations are open for limited public tours, offering visitors a behind-the-scenes look at how satellite data is received and processed.\n\n## What This Means for Travelers and Tech Enthusiasts\n\n- **Visit Wuhan\'s Aerospace Museum**: Opened in late 2025, this interactive museum near East Lake features full-scale satellite models, virtual reality rocket launches, and exhibits on Hubei\'s role in China\'s space program.\n- **Science and Innovation Tours**: Several travel agencies in Wuhan now offer half-day tours to the optical valley (Optics Valley) to see labs and startups working on space-grade photonics and laser communication.\n- **Stargazing Events**: The Hubei Astronomical Society, in partnership with local universities, hosts monthly public stargazing nights at the satellite ground station in Huangpi District—bring binoculars for a view of passing satellites!\n\n## Collaboration with Universities and Startups\n\nHubei is fostering a new generation of space entrepreneurs. Huazhong University of Science and Technology (HUST) announced a partnership with a local startup to develop reusable suborbital vehicles for scientific experiments. Test flights are expected to begin as early as 2027. This collaboration makes Wuhan a growing destination for international researchers and space enthusiasts looking to network and learn.\n\n## Looking Ahead\n\nWhile Hubei may not yet have its own spaceport, the province is positioning itself as a critical hub for satellite design, ground control, and data analysis. For anyone fascinated by space technology, a trip to Wuhan in 2026 offers a rare glimpse into the future of aerospace—right here on Earth.',
    coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['hubei', 'wuhan', 'aerospace', 'satellite', 'technology', 'space innovation', 'optics valley'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-27T05:58:52.151Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-27-06-e029',
    title: 'Wuhan’s Smart Transportation Revolution: AI-Powered Transit and Green Mobility in 2026',
    summary: 'Wuhan is transforming its urban mobility with AI-driven traffic management, autonomous buses, and a smart metro system — making travel smoother for residents and visitors alike.',
    content: '## Wuhan’s Smart Transportation Revolution: AI-Powered Transit and Green Mobility in 2026\n\nWuhan, the sprawling capital of Hubei province, is rapidly emerging as a leader in smart transportation. As of early 2026, the city has integrated cutting-edge technologies that are reshaping how locals and tourists navigate this dynamic metropolis of over 11 million people.\n\n### AI-Powered Traffic Management\n\nAt the heart of Wuhan’s smart transport system is a citywide AI platform that optimizes traffic flow in real time. Over 10,000 intersections are now equipped with sensors and cameras connected to a central control hub. According to the latest reports, this system has reduced average commute times by 18% since its full rollout in late 2025. For travelers, this means less time stuck in traffic and more time exploring landmarks like the Yellow Crane Tower or East Lake.\n\n### Autonomous Buses and Smart Metro\n\nWuhan has also launched the first fleet of autonomous electric buses on dedicated routes in the Optics Valley (Guanggu) area — a major tech hub. These 12-seater buses operate without a driver, using LiDAR and 5G connectivity to navigate busy streets safely. Meanwhile, the Wuhan Metro, one of China’s longest, now features AI-based passenger flow prediction. This technology adjusts train frequencies during peak hours and alerts riders about crowding via a revamped mobile app, available in English.\n\n### Green and Shared Mobility\n\nSustainability is a key focus. The city has expanded its bike-sharing network to 150,000 e-bikes and bicycles, all integrated with public transit payment systems. Smart parking lots in downtown areas guide drivers to available spots via a live app, cutting down on circling and emissions. For eco-conscious visitors, this makes exploring Wuhan’s street food alleys or Han Street easier than ever.\n\n### What This Means for Visitors\n\nWhether you’re hopping on a driverless bus in Guanggu or using the smart metro to reach Wuhan University’s cherry blossoms, the city’s transportation upgrades are designed with user experience in mind. Real-time multilingual signage, contactless payments, and free Wi-Fi on most lines make getting around intuitive. As Wuhan continues to innovate, it’s positioning itself as a must-visit destination for tech-savvy travelers.\n\n*For the latest updates on Wuhan’s smart transport, check the official Wuhan Metro app or visit HiHubei.com.*',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['wuhan', 'smart transportation', 'ai traffic management', 'autonomous buses', 'wuhan metro', 'green mobility', 'technology'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-27T05:59:03.619Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-27-07-cb9g',
    title: 'Wuhan\'s Old Meets New: Historic Districts Get a Fresh Lease on Life in 2026',
    summary: 'Wuhan is blending heritage preservation with modern urban renewal, transforming historic districts into vibrant cultural hubs for visitors and locals alike.',
    content: '## A City Reimagining Its Past\n\nWuhan, often celebrated as a city of innovation and industry, is also a treasure trove of history. As of early 2026, the city\'s urban renewal efforts are taking a thoughtful turn, focusing not just on shiny skyscrapers but on the careful restoration of its historic neighborhoods. The goal? To preserve the soul of Wuhan while making it more accessible and engaging for international travelers and culture enthusiasts.\n\n## Spotlight on Tanhualin: An Artistic Revival\n\nOne of the most exciting projects is the continued revitalization of **Tanhualin**, a century-old street known for its eclectic mix of Western and Chinese architecture. This year, the district has seen a wave of new art galleries, boutique cafes, and handcraft shops tucked into its winding alleys. The local government, in partnership with cultural foundations, has restored several historic buildings—like the former Swedish Church and the old missionary houses—into community art spaces. Visitors can now explore interactive exhibits on Wuhan\'s treaty-port history, attend live painting workshops, or simply stroll along the cobblestone paths, which have been repaved using traditional techniques to maintain authenticity.\n\n## Jianghan Road: A Pedestrian Paradise with History\n\nMeanwhile, **Jianghan Road**, one of Wuhan\'s most famous commercial streets, is undergoing a sensitive upgrade. The 2026 plan includes:\n\n- **Preservation of Art Deco facades** from the 1920s and 1930s, with new energy-efficient lighting that highlights their intricate details at night.\n- **New pedestrian zones** that limit vehicle access, making it a safer and more pleasant experience for walkers.\n- **Storytelling signboards** in both Chinese and English, offering QR codes linking to audio guides about the street\'s evolution from a colonial-era business hub to a modern shopping destination.\n\nThis balanced approach ensures that the street retains its nostalgic charm while meeting the needs of today\'s visitors.\n\n## Why It Matters for Travelers\n\nFor international tourists, these renewals mean a richer, more immersive experience. Instead of just seeing old buildings from a distance, you can now step inside restored structures, sample local crafts, and learn about Wuhan\'s layered history—from its ancient roots as a river trade center to its role in modern China\'s cultural tapestry. The city is also introducing new walking tours that connect these districts, with bilingual guides available through the official Wuhan Tourism WeChat mini-program.\n\n## Looking Ahead\n\nAs Wuhan continues to grow, its commitment to blending the old with the new sets an example for urban development worldwide. Whether you\'re a history buff, an architecture lover, or a casual traveler, these preserved districts offer a genuine glimpse into the city\'s past—and a vibrant, walkable present. Plan your visit this year to see history come alive.',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['wuhan', 'historical districts', 'urban renewal', 'heritage preservation', 'tanhualin', 'jianghan road', 'cultural tourism'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-27T05:59:15.266Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-27-08-1eqp',
    title: 'Enshi Yulu: Hubei\'s Steamed Green Tea Tradition Captivates Global Palates',
    summary: 'Discover the ancient craftsmanship behind Enshi Yulu, Hubei\'s prized steamed green tea, and how its unique \'fish-scale\' leaves and nutty flavor are winning over international tea lovers in 2026.',
    content: '## A Steamed Legacy from the Mountains of Hubei\n\nDeep in the misty highlands of southwestern Hubei, the ancient craft of Enshi Yulu (恩施玉露) green tea continues to thrive. As of early 2026, this rare steamed green tea—one of the few remaining in China—is experiencing a renaissance among international travelers and tea connoisseurs. Unlike the more common pan-fired green teas, Enshi Yulu is steamed, a method that dates back to the Tang Dynasty (618–907 AD) and preserves the leaf\'s vivid green color and fresh, umami-rich flavor.\n\n## The Art of \'Fish-Scale\' Leaves\n\nWhat sets Enshi Yulu apart is its meticulous production process. Skilled artisans in Enshi Prefecture still follow a 12-step manual technique passed down through generations. The signature feature is the needle-thin, tightly rolled leaves that resemble fish scales—hence the local nickname "yulu" (jade dew). This year, local workshops have opened their doors to visitors, offering hands-on experiences in steaming, rolling, and drying the leaves over charcoal fires. The entire process, from plucking to packaging, takes up to 10 hours for a single batch.\n\n### Why Tea Lovers Are Flocking to Enshi\n- **Unique Flavor Profile**: The steaming method locks in chlorophyll and amino acids, resulting in a smooth, sweet taste with a distinct nutty and vegetal finish, similar to Japanese sencha but with a softer body.\n- **Terroir**: Grown at altitudes of 800–1,200 meters, the tea bushes absorb the mineral-rich mist of the Wuling Mountains, adding a crisp, clean minerality.\n- **Health Benefits**: Rich in catechins and L-theanine, Enshi Yulu is prized for its calming yet alerting effect—a perfect mid-morning brew.\n\n## Visiting the Tea Gardens in 2026\n\nFor culture enthusiasts, Enshi has become a must-visit destination. The Enshi Grand Canyon and nearby tea villages—such as Longfengba and Baiyangping—now offer guided tours from March to October. According to the latest reports, the Enshi Tea Culture Festival, held each April, features tea-tasting competitions, traditional music, and demonstrations of the "three-pour" gongfu ceremony specifically for yulu. International visitors can easily reach Enshi via direct flights from Wuhan, Guangzhou, or Shanghai.\n\n## Where to Taste Authentic Enshi Yulu\n\nWhile you can find Enshi Yulu in specialty tea shops across China, the freshest leaves are still sold directly from family-run farms in Enshi. In 2026, several cooperative brands have started exporting to Europe and North America, but the most immersive experience remains sipping a freshly brewed cup while overlooking the terraced gardens. Look for leaves that are uniform in size, glossy green, and slightly downy—a sign of premium quality.\n\nWhether you are a seasoned tea hunter or a curious traveler, Enshi Yulu offers a taste of Hubei\'s living history. Its craftsmanship, unchanged for centuries, is a testament to the region\'s deep cultural roots and its openness to the world.',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['enshi yulu', 'hubei tea', 'green tea', 'tea craftsmanship', 'enshi prefecture', 'chinese tea culture', 'travel hubei'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-27T05:59:27.829Z',
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
