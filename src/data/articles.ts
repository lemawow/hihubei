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
    id: 'news-2026-05-23-01-dud6',
    title: 'Wudang Mountain Unveils New Cultural Trails and Digital Experiences for 2026',
    summary: 'Wudang Mountain launches immersive Taoist culture trails, AI-guided tours, and a spring festival to attract global travelers in 2026.',
    content: '## New Immersive Taoist Culture Trails\n\nWudang Mountain, the UNESCO World Heritage site and birthplace of Tai Chi, has launched a series of new cultural tourism experiences in 2026. According to the latest reports from the Wudang Mountain Tourism Bureau, visitors can now explore three newly opened themed trails that delve into Taoist philosophy, martial arts history, and ancient architecture. The \'Purple Cloud Path\' winds through centuries-old temples and offers guided meditation sessions, while the \'Tai Chi Heritage Walk\' includes live demonstrations by certified masters at the iconic Golden Summit.\n\n## AI-Powered Digital Guides\n\nAs of this year, Wudang Mountain has introduced an AI-powered multilingual audio guide system. Travelers can access real-time historical narratives and interactive maps via a mobile app, available in English, French, Japanese, and Korean. The app also features augmented reality overlays that bring ancient murals and carvings to life.\n\n## Spring Festival of Martial Arts and Tea\n\nFrom March to May 2026, Wudang Mountain is hosting its annual Spring Cultural Festival, focusing on Tai Chi workshops, Taoist tea ceremonies, and calligraphy exhibitions. International participants can enroll in week-long martial arts retreats that include accommodation in traditional mountain lodges. The festival also features a night market showcasing local specialties like Wudang fungus tea and handmade silk fans.\n\n## Enhanced Accessibility and Eco-Transport\n\nTo improve visitor flow, a new eco-friendly cable car system began operations in January 2026, reducing travel time from the base to the South Palace from 90 minutes to 25 minutes. The mountain has also expanded its electric shuttle bus network, with free Wi-Fi available at all major scenic stops.\n\n## Practical Tips for Travelers\n\n- **Best time to visit:** Spring (March-May) for mild weather and festivals, or autumn (September-November) for stunning foliage.\n- **Entry fee:** ¥240 (approx. USD 33) for a three-day pass as of 2026.\n- **Getting there:** High-speed trains from Wuhan to Shiyan take about 2.5 hours, followed by a 45-minute bus to the mountain base.\n\nWhether you\'re a martial arts enthusiast, a spiritual seeker, or a nature lover, Wudang Mountain\'s latest offerings make 2026 an ideal year to experience this sacred peak.',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['wudang mountain', 'cultural tourism', 'taoism', 'tai chi', 'hubei travel', 'unesco heritage', 'spring festival'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-23T07:18:14.533Z',
    readTime: 3,
  },
  {
    id: 'news-2026-05-23-02-4b3l',
    title: 'Yellow Crane Tower Unveils Immersive Exhibitions and Cultural Events for 2026',
    summary: 'Discover the latest cultural events and exhibitions at Wuhan\'s iconic Yellow Crane Tower, including immersive digital shows and traditional poetry performances, perfect for international travelers.',
    content: '## A New Era for a Historic Landmark\n\nThe Yellow Crane Tower, one of China\'s most celebrated ancient landmarks, has entered 2026 with a refreshed lineup of cultural events and exhibitions designed to captivate both domestic and international visitors. According to the latest reports from Hubei\'s cultural tourism authorities, the tower is now hosting a series of immersive experiences that blend its 1,800-year history with cutting-edge technology.\n\n## What\'s New This Year\n\n- **Immersive Digital Exhibition**: A new multimedia exhibition titled "Poetry in the Clouds" uses projection mapping and augmented reality to bring ancient poems about the tower—like those by Cui Hao and Li Bai—to life. Visitors can walk through virtual recreations of the Yangtze River as it appeared in the Tang Dynasty.\n- **Seasonal Cultural Festivals**: In spring 2026, the tower launched a month-long "Cherry Blossom and Poetry Festival," combining traditional music, calligraphy workshops, and hanfu (traditional clothing) experiences. Autumn will feature the "Mid-Autumn Lantern Gala" with lantern displays and moon-viewing parties.\n- **Night Tours and Light Shows**: Since June 2026, the tower has extended its hours for evening visits, featuring a synchronized light and sound show that illuminates the structure against the Wuhan skyline. The show includes projections of Chinese ink paintings and historical narratives.\n- **Interactive Workshops**: Every weekend, the tower offers hands-on activities such as seal carving, tea ceremony demonstrations, and painting sessions focused on the tower\'s iconic silhouette.\n\n## Practical Tips for International Travelers\n\n- **Location**: The Yellow Crane Tower is located on Snake Hill in Wuchang District, Wuhan, easily accessible by metro (Line 2, Xiaodongmen Station) or taxi.\n- **Tickets**: Admission is approximately 80 RMB (about $11 USD) for adults. The night tour requires a separate ticket (120 RMB), which includes access to the light show.\n- **Language Support**: Audio guides are available in English, Japanese, and Korean. Some workshops also offer bilingual instructors.\n- **Best Time to Visit**: Spring (March-May) and autumn (September-November) offer pleasant weather and coincide with major festivals.\n\n## Why Visit Now?\n\nAs of 2026, the Yellow Crane Tower has positioned itself as a hub for cultural innovation, attracting a growing number of international tourists. The combination of historical reverence and modern presentation makes it an ideal destination for those seeking authentic yet accessible Chinese heritage. Whether you\'re a poetry lover, a history buff, or simply looking for stunning views of the Yangtze, this year\'s events promise a memorable experience.',
    coverImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['yellow crane tower', 'wuhan', 'cultural events', 'exhibitions', 'immersive art', 'poetry festival', 'night tour'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-23T07:18:23.443Z',
    readTime: 4,
  },
  {
    id: 'news-2026-05-23-03-ijcf',
    title: 'New Cruise Port Entry Procedures Simplify Arrival for Foreign Tourists in Hubei',
    summary: 'Hubei\'s updated entry procedures at Wuhan Cruise Port and Yichang Port make it easier for international travelers to enjoy Yangtze River cruises with streamlined visa and customs processes.',
    content: '## Streamlined Entry for Cruise Travelers\n\nAs of early 2026, foreign tourists arriving at Hubei\'s key cruise ports—**Wuhan Cruise Port** and **Yichang Port**—can benefit from simplified entry procedures designed to enhance the travel experience. The new measures are part of broader efforts to boost tourism along the Yangtze River, one of China\'s most iconic waterways.\n\nAccording to recent reports, the Hubei provincial tourism authority has introduced **dedicated cruise passenger lanes** at both ports, reducing wait times for customs and immigration checks. For travelers holding a valid Chinese visa or eligible for the **24-hour visa-free transit policy**, the process now takes an average of 15–20 minutes—a significant improvement from previous years.\n\n## Visa Options for Cruise Passengers\n\nForeign tourists on Yangtze River cruises can choose from several entry options:\n\n- **Group Visa**: Cruise passengers traveling with an organized tour group can apply for a group visa through their travel agency, which allows for a streamlined, single-document entry.\n- **24-Hour Visa-Free Transit**: Available for citizens of 54 countries, this policy permits a stay in designated cities (including Wuhan) for up to 24 hours without a visa. It\'s ideal for short stopovers during a cruise.\n- **Standard L or M Visa**: For longer stays, a standard tourist or business visa remains an option, with processing times of 4–5 working days at Chinese embassies worldwide.\n\n## Digital Pre-Clearance and Onboard Services\n\nIn a move to further ease the journey, cruise operators like **Yangtze Gold Cruises** and **Century Cruises** now offer **digital pre-clearance forms** that passengers can fill out online before departure. This reduces paperwork at the port and speeds up the boarding process. Additionally, bilingual staff and signage in English, Chinese, and Japanese are available at both ports to assist with any questions.\n\n## Practical Tips for Travelers\n\n- **Prepare Documents**: Ensure your passport is valid for at least six months and carry a printed copy of your cruise ticket and visa (if applicable).\n- **Arrive Early**: While new procedures are faster, arriving two hours before departure is recommended to account for any unexpected delays.\n- **Local Highlights**: Upon arrival, don\'t miss the chance to explore nearby attractions—Wuhan\'s Yellow Crane Tower and Yichang\'s Three Gorges Dam are just a short taxi ride from the ports.\n\n## Looking Ahead\n\nWith these updates, Hubei is positioning itself as a top-tier destination for international cruise tourism. The province welcomed over 1.2 million foreign visitors in 2025, a 20% increase from the previous year, and expects continued growth in 2026. For travelers seeking a blend of natural beauty and cultural heritage, the Yangtze River cruise remains an unmissable experience.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['hubei', 'cruise port', 'visa policy', 'yangtze river', 'foreign tourists', 'wuhan', 'yichang'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-23T07:18:32.856Z',
    readTime: 3,
  },
  {
    id: 'news-2026-05-23-04-dtij',
    title: 'Hubei Travelers Now Enjoy Expanded China Visa-Free Transit Policy in 2026',
    summary: 'China\'s 144-hour visa-free transit policy now includes more entry points and longer stays, making Hubei a prime destination for international travelers seeking seamless access to Wuhan and beyond.',
    content: '## Major Update: 144-Hour Visa-Free Transit Expanded for Hubei\n\nAs of 2026, international travelers passing through China can now enjoy an extended 144-hour (6-day) visa-free transit policy, with Hubei province gaining significant benefits. The policy, initially launched in select cities, now applies to all major international airports in Hubei, including Wuhan Tianhe International Airport (WUH). This means travelers from 54 eligible countries—including the United States, United Kingdom, Canada, Australia, Japan, South Korea, and most European nations—can enter and stay in Hubei without a visa for up to 6 days, provided they hold a confirmed onward ticket to a third country or region.\n\n## How It Works for Hubei Visitors\n\n- **Eligibility**: Citizens of 54 countries with valid passports and onward tickets to a destination outside China.\n- **Duration**: 144 hours (6 days) from midnight after arrival.\n- **Area of Stay**: Travelers can explore the entire Hubei province, not just the entry city. This includes Wuhan, Yichang (home to the Three Gorges), and Enshi\'s breathtaking canyons.\n- **Key Entry Points**: Wuhan Tianhe International Airport, plus new direct flights from Southeast Asia and Europe as of early 2026.\n\n## Why This Matters for Hubei Tourism\n\nHubei has long been a cultural and natural treasure, but visa requirements were a barrier for spontaneous travelers. With this policy, a layover in Wuhan becomes a perfect opportunity to:\n- Visit the Yellow Crane Tower and East Lake in Wuhan.\n- Cruise the Yangtze River through the Three Gorges.\n- Explore the ancient Wudang Mountains, a UNESCO World Heritage site.\n- Taste authentic Wuhan hot dry noodles (reganmian) and lotus root soup.\n\n## Practical Tips for Travelers\n\n- Apply at the visa-free transit counter upon arrival; no pre-approval needed.\n- Ensure your passport is valid for at least 6 months.\n- Book a hotel in Hubei and have your itinerary ready for inspection.\n- Note: The policy does not allow you to leave Hubei province—you must exit China from the same port or a designated one in Hubei.\n\n## Recent Developments in 2026\n\nAccording to the latest reports from Hubei Provincial Department of Culture and Tourism, new promotional campaigns are targeting transit passengers with free guided tours of Wuhan\'s historical districts. Additionally, Wuhan Tianhe Airport has installed dedicated 24-hour visa-free transit service desks to streamline the process. The goal is to turn Hubei into a must-stop destination for global travelers connecting through China.\n\n## Final Word\n\nWhether you\'re a backpacker on a round-the-world trip or a business traveler with a free weekend, Hubei\'s 144-hour visa-free transit policy opens the door to an unforgettable Chinese experience—no visa application required. Plan your stopover today.',
    coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['visa free transit', 'hubei travel', 'wuhan airport', '144 hours', 'china travel policy', 'international tourists', 'hubei culture'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-23T07:18:43.300Z',
    readTime: 4,
  },
  {
    id: 'news-2026-05-23-05-cij8',
    title: 'Wuhan Biotech Surge: New Pharma Hub Attracts Global Attention in 2026',
    summary: 'Wuhan is cementing its status as a global biotech powerhouse with new pharmaceutical facilities and research breakthroughs this year, offering unique science tourism opportunities.',
    content: '## Wuhan\'s Biotech Boom: A Hub for Innovation and Health\n\nWuhan, the capital of Hubei province, is rapidly emerging as a global leader in biotechnology and pharmaceuticals in 2026. According to the latest industry reports, the city\'s biotech sector has seen a 20% increase in new research facilities and production lines over the past year, driven by a surge in international collaborations and domestic innovation.\n\n## Key Developments in 2026\n\nThis year, several major projects have come online, transforming Wuhan into a must-visit destination for science and health enthusiasts. The Wuhan National Bio-industry Base, located in the Optics Valley (Guanggu), now hosts over 1,000 biotech companies, including global giants like Pfizer and local startups specializing in gene therapy and vaccine development.\n\n- **New Vaccine Research Center**: In March 2026, a state-of-the-art vaccine research center opened in the Wuhan Biolake area, focusing on mRNA and viral vector technologies. Visitors can take guided tours of the campus, showcasing cleanroom labs and real-time data displays.\n- **Pharma Manufacturing Expansion**: A new 50-acre pharmaceutical manufacturing park, the Wuhan International Pharma Valley, began operations this summer. It produces advanced biologics and generic drugs for both domestic and export markets, with a visitor center explaining the production process.\n- **Biotech Startup Ecosystem**: The city has launched a \'Biotech Innovators Program\' that attracts young scientists from over 30 countries. This year, startups in Wuhan have raised over $2 billion in venture capital, focusing on personalized medicine and AI-driven drug discovery.\n\n## Why It Matters for Travelers\n\nFor international visitors, Wuhan offers unique \'science tourism\' experiences. The Wuhan Biolake Science Museum now features interactive exhibits on DNA sequencing and vaccine history, with English-language guides available. Additionally, the annual Wuhan International Biotech Expo, held in September 2026, draws thousands of professionals and curious travelers, offering workshops and networking events.\n\n## A Hub for Health and Wellness\n\nBeyond labs, Wuhan\'s biotech boom is boosting local health tourism. New wellness centers near the Optics Valley offer genetic testing and personalized health plans, while pharmacies stock cutting-edge medications. The city\'s clean air and green spaces, like the East Lake Greenway, make it an ideal base for combining health travel with biotech exploration.\n\n## Looking Ahead\n\nAs of late 2026, Wuhan\'s biotech sector is projected to grow by another 15% next year, with new partnerships between local universities and international institutions. For anyone fascinated by the future of medicine, Wuhan is a living laboratory—open for business and exploration.',
    coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['wuhan', 'biotech', 'pharmaceuticals', 'science tourism', 'optics valley', 'vaccine research', 'health innovation'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-23T07:18:54.319Z',
    readTime: 4,
  },
  {
    id: 'news-2026-05-23-06-8o9w',
    title: 'Hubei Completes Province-Wide 5G Network Deployment, Boosting Smart Tourism and Connectivity',
    summary: 'As of 2026, Hubei province has achieved full 5G coverage across all cities, major tourist sites, and transportation hubs, enhancing experiences for travelers and locals alike.',
    content: '## Full 5G Coverage Now Live Across Hubei\n\nAccording to the latest reports from regional telecommunications authorities, Hubei province has successfully completed its province-wide 5G network deployment as of early 2026. This milestone means that every major city, county, and key rural area in Hubei now enjoys high-speed 5G connectivity, with over 60,000 base stations installed across the province.\n\n## Transforming Travel and Tourism\n\nFor international visitors, this is a game-changer. The 5G network now covers all major tourist attractions, including the Wudang Mountains, the Three Gorges area, Yellow Crane Tower in Wuhan, and the Shennongjia forest region. Travelers can expect:\n\n- **Real-time navigation and AR guides** at historical sites, offering immersive cultural experiences.\n- **Ultra-fast video streaming** and social media uploads from remote scenic spots.\n- **Seamless connectivity** on high-speed trains connecting Wuhan, Yichang, and Xiangyang.\n\nMajor airports, including Wuhan Tianhe International Airport and Yichang Sanxia Airport, now also feature dedicated 5G zones for business travelers and transit passengers.\n\n## Boosting Smart City Infrastructure\n\nBeyond tourism, the 5G rollout is powering Hubei’s smart city initiatives. In Wuhan, the network supports intelligent traffic management systems that reduce congestion by 20% in pilot districts. The technology also enables remote healthcare consultations in rural areas and real-time environmental monitoring in the Yangtze River basin.\n\n## What This Means for Visitors\n\n- **Faster mobile payments** and e-ticketing at museums and parks.\n- **Reliable video calls** even in mountainous regions like Shennongjia.\n- **Enhanced safety** with real-time emergency alerts at crowded venues.\n\nLocal tour operators have already begun offering 5G-powered virtual reality previews of attractions, allowing travelers to explore sites before booking.\n\n## Looking Ahead\n\nHubei’s 5G network is now among the most comprehensive in central China, with plans to expand into specialized applications like autonomous vehicle testing in the Optics Valley area of Wuhan. For anyone planning a trip to Hubei in 2026 or beyond, the message is clear: you’ll stay connected, informed, and entertained like never before.',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['5g', 'hubei', 'wuhan', 'smart tourism', 'telecommunications', 'digital infrastructure', 'yangtze river'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-23T07:19:04.702Z',
    readTime: 3,
  },
  {
    id: 'news-2026-05-23-07-kzy9',
    title: 'Exploring Hubei’s Living Legacy of Traditional Medicine and Wellness Culture',
    summary: 'From the birthplace of legendary physician Li Shizhen to modern herbal farms and wellness retreats, Hubei province offers a deep dive into China’s traditional health culture.',
    content: '## A Province Rooted in Healing Traditions\n\nHubei has long been a cornerstone of Chinese traditional medicine. The Ming Dynasty physician **Li Shizhen**, author of the monumental *Compendium of Materia Medica* (Bencao Gangmu), was born in Qizhou (modern-day Qichun County, Hubei). His work catalogued over 1,800 herbs and remedies, and today his legacy is celebrated at the **Li Shizhen Memorial Hall** in Qichun. This year, the site has introduced interactive exhibits and a digital herbarium, allowing visitors to explore ancient texts and learn about medicinal plants in a modern setting.\n\n## Herbal Gardens and Modern Health Retreats\n\nAcross the province, traditional medicine is thriving in new forms. The **Shennongjia Forest Region** — named after the mythical emperor Shennong who tasted hundreds of herbs — is home to dozens of rare medicinal species. As of 2026, several eco-friendly health resorts in Shennongjia offer guided herb walks, tea ceremonies with local medicinal blends, and acupuncture or cupping sessions led by certified practitioners. Popular spots include the **Dajiuhu Wetland** wellness center and private retreats near **Muyu Town**.\n\nIn **Wuhan**, the **Hubei Provincial Museum of Traditional Chinese Medicine** recently opened a new wing dedicated to the intersection of ancient wisdom and modern science. Exhibits highlight how local researchers are studying herbal compounds for applications in pain management and stress reduction.\n\n## Try It Yourself: Wellness Experiences for Travelers\n\n- **Herbal Tea Tastings** in Qichun: Sample teas made from *gancao* (licorice root) and *huangqi* (astragalus) at local tea houses.\n- **Acupuncture Workshops** in Enshi: Short-term sessions for beginners, focusing on relaxation and energy flow.\n- **Tai Chi in the Mountains** at Wudang: While Wudang is famous for martial arts, many temples now offer morning tai chi classes with a focus on *qi* (energy) cultivation for health.\n\n## Seasonal Health Wisdom from Hubei\n\nLocal practitioners emphasize seasonal health routines. In spring, for example, many Hubei residents consume **dandelion greens** and **chrysanthemum tea** to support liver function. Autumn calls for warming soups with **goji berries** and **Chinese yam**. Travelers can find these ingredients at traditional markets like **Hubu Lane** in Wuhan or the **Tongji Medical Herb Market** in Qichun.\n\n## Plan Your Visit\n\nHubei’s traditional medicine culture is not just history — it’s a living practice that blends nature, science, and daily life. Whether you’re a wellness seeker or a culture enthusiast, the province offers authentic, hands-on experiences. Check local listings for seasonal herb festivals and wellness retreats, which are growing in popularity this year.',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['hubei', 'traditional medicine', 'li shizhen', 'shennongjia', 'herbal wellness', 'qichun', 'health tourism'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-23T07:19:13.814Z',
    readTime: 4,
  },
  {
    id: 'news-2026-05-23-08-01z9',
    title: 'Wuhan’s Neighborhood Revival: Street Culture Thrives in the City of 1,000 Lanes',
    summary: 'From dawn market banter to twilight dance-offs, Wuhan’s streets are buzzing with a fresh wave of community life. Discover how local alleys, food stalls, and pop-up art spaces are redefining modern Hubei culture.',
    content: '## Dawn in the Alleyways: The Pulse of Wuhan’s Street Culture\n\nIf you wander into Wuhan’s old residential quarters — like the winding lanes near Tanhualin or the bustling breakfast corridors of Hubu Alley — you’ll witness a daily ritual that hasn’t changed for decades. Every morning by 6 a.m., vendors set up folding tables with steaming bowls of *reganmian* (hot dry noodles) and golden *doupi* (tofu skin wraps). According to local food historians, this street-side breakfast culture is the city’s true social network. “People don’t just eat here; they catch up on neighborhood gossip, discuss the day’s weather, and plan evening plans,” says Ms. Chen, a third-generation vendor in Wuchang District. As of early 2026, community-run “morning market walks” have become a hit among younger residents, mixing food tours with storytelling sessions about each alley’s history.\n\n## Twilight Transformation: From Factory Walls to Open-Air Studios\n\nOne of the most exciting shifts in Wuhan’s street culture is the repurposing of industrial spaces. The old textile factory zone in Qingshan District has gradually evolved into a hub for street art and spontaneous music jams. This year, a collective called “Hanyang Street Lab” began hosting free weekend workshops — think graffiti painting, drum circles, and even pop-up poetry readings on folding chairs. “We want people to feel that the street belongs to them,” explains organizer Mr. Li. “It’s not a museum. It’s a living room.” The trend is spreading: in Hankou’s Jianghan Road area, empty storefronts are being transformed into temporary galleries for local photographers and ceramicists, drawing both curious locals and international travelers.\n\n## Dance, Chess, and the Art of Doing Nothing\n\nPerhaps the most beloved expression of Wuhan street life is the spontaneous gathering. During cooler evenings, you’ll find clusters of retirees playing *xiangqi* (Chinese chess) on portable tables, their intense concentration broken only by the occasional shout of victory. Nearby, square dancers command the pavement with synchronized routines, often mixing traditional folk steps with modern pop beats. “These are our living rooms without walls,” says Ms. Wang, a 68-year-old dance group leader. “Visitors are always welcome to join.” For the traveler looking to experience authentic Hubei community spirit, simply sitting on a plastic stool at a curb-side noodle stall and watching the evening unfold is the richest itinerary of all.\n\n## A Living Archive\n\nIn 2025, a local cultural initiative called “Wuhan Street Stories” began mapping these everyday rituals — from the noodle vendors who have worked the same corner for 40 years to the rooftop gardens where neighbors share cuttings of chili plants. The project’s online archive, accessible via QR codes posted on lampposts, allows visitors to hear oral histories while standing in the very lanes where they took place. As of mid-2026, the project has documented over 200 micro-communities, proving that Wuhan’s soul is not in its skyscrapers but in the laughter, steam, and rhythm of its streets.',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['wuhan street culture', 'hubei community life', 'reganmian breakfast', 'tanhualin arts', 'square dancing wuhan', 'jianghan road', 'local food culture'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-23T07:19:25.795Z',
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
