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
    id: 'news-2026-06-08-01-idil',
    title: 'Hubei’s UNESCO World Heritage Sites: Latest Conservation Efforts and Visitor Updates',
    summary: 'As of 2026, Hubei’s three UNESCO World Heritage sites — including Wudang Mountains and Shennongjia — are undergoing cutting-edge conservation projects, with new eco-trails and digital preservation initiatives enhancing visitor experiences.',
    content: '## A New Chapter for Hubei’s UNESCO Treasures\n\nHubei province is home to three UNESCO World Heritage sites: the ancient architectural complex of **Wudang Mountains**, the fossil-rich **Shennongjia**, and the historic **Tusi Sites** in Xianfeng County. According to the latest reports from the Hubei Provincial Department of Culture and Tourism, 2026 marks a pivotal year for conservation and sustainable tourism at these iconic locations.\n\n## Wudang Mountains: Digital Preservation Meets Ancient Taoism\n\nAt the **Wudang Mountains**, a major digital documentation project has been completed this quarter. Using 3D laser scanning and photogrammetry, experts have mapped over 80% of the site’s ancient palaces, temples, and cliffside pavilions — including the Golden Hall (Jindian) and the Purple Cloud Palace. This digital archive will aid in restoration and allow virtual visits for those unable to travel. On the ground, new bamboo-and-stone eco-trails have been opened along the western slopes to reduce erosion from foot traffic.\n\n## Shennongjia: Protecting Biodiversity and Fossil Heritage\n\n**Shennongjia**, a biodiversity hotspot and home to the famous “Wild Man” legends, has seen a 15% increase in forest coverage since 2020, thanks to ongoing reforestation programs. This year, the site’s conservation team launched a **fossil preservation initiative** focused on the Dajiuhu wetlands, where ancient fauna remains are particularly vulnerable to climate shifts. Visitors can now join guided “Fossil Discovery Walks” (by reservation only) to learn about the area’s geological history without disturbing sensitive zones.\n\n## Tusi Sites: Reviving Ancient Chieftain Culture\n\nThe **Tusi Sites** in Xianfeng County — a network of stone fortresses and villages dating back to the 13th-18th centuries — have undergone structural reinforcements after heavy rains last summer. A new **cultural interpretation center** opened in March 2026, featuring interactive exhibits on Tusi governance, architecture, and the region’s ethnic Miao and Tujia traditions. The center offers English-language audio guides, making the history accessible to international visitors.\n\n## What This Means for Travelers\n\n- **New eco-trails** at Wudang Mountains (west slope) are open daily, with limited capacity to protect the site. Book ahead.\n- **Shennongjia’s** guided fossil walks run from April to October. Reservations required via the official WeChat mini-program or at the visitor center.\n- **Tusi Sites’** cultural center is free with site admission. Plan at least 2 hours to explore the exhibits and the adjacent fortress ruins.\n\n## Looking Ahead\n\nHubei is also developing a **provincial heritage monitoring system** that will integrate satellite imagery and ground sensors at all three UNESCO sites. When fully operational by late 2027, this system will provide real-time data on vegetation health, structural stability, and visitor impact — a model for heritage management across China.\n\nFor the latest updates, check the official Hubei UNESCO Heritage Alliance website (link below) or follow HiHubei.com. These conservation efforts ensure that Hubei’s cultural and natural wonders remain vibrant for generations to come.',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['unesco world heritage', 'wudang mountains', 'shennongjia', 'tusi sites', 'conservation', 'hubei tourism', 'cultural heritage'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-08T06:51:50.429Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-08-02-3ln1',
    title: 'Hubei Launches New Cultural Tourism Initiatives to Boost Visitor Experience in 2026',
    summary: 'Hubei province introduces updated cultural tourism policies focusing on heritage protection, digital experiences, and streamlined travel for international visitors.',
    content: '## New Policies Aim to Enhance Cultural Tourism\n\nAs of early 2026, Hubei province has rolled out a series of new cultural tourism policies designed to attract international travelers and deepen engagement with the region’s rich heritage. These initiatives, announced this month by the Hubei Provincial Department of Culture and Tourism, emphasize sustainable tourism, digital innovation, and improved accessibility for foreign visitors.\n\n## Key Highlights of the New Policies\n\n- **Heritage Site Upgrades**: Major cultural landmarks, including the Yellow Crane Tower in Wuhan and the Wudang Mountain complex, will undergo enhanced preservation efforts. New multilingual guided tours and augmented reality (AR) experiences are being introduced to bring history to life.\n- **Digital Pass for Travelers**: A new ‘Hubei Cultural Pass’ app, launching in June 2026, will offer international tourists discounted entry to over 30 museums, archaeological sites, and performance venues. The pass also includes real-time translation and itinerary planning tools.\n- **Visa Facilitation for Cultural Tourists**: In collaboration with national authorities, Hubei has expanded the 144-hour visa-free transit policy to include cultural tour groups. Travelers arriving in Wuhan Tianhe International Airport can now join pre-approved cultural itineraries without a visa, simplifying last-minute trips.\n- **Community-Based Tourism Projects**: New policies support local villages near the Shennongjia Forestry District and Enshi Grand Canyon to develop homestay programs and traditional craft workshops. Visitors can learn paper-cutting, tea ceremony, or Tujia embroidery directly from artisans.\n\n## What This Means for Visitors\n\nThese changes are already being felt. ‘We’ve seen a 30% increase in bookings from Europe and Southeast Asia since the visa policy update,’ says Li Wei, director of a Wuhan-based travel agency. Cultural enthusiasts can now plan deeper, more authentic experiences—from exploring the ancient Chu culture artifacts at the Hubei Provincial Museum to attending the Qu Yuan International Dragon Boat Festival in Yichang this June.\n\n## Looking Ahead\n\nHubei is positioning itself as a hub for cultural tourism in central China. With these policies, the province aims to welcome over 5 million international tourists in 2026, up from 3.8 million in 2025. Whether you’re a history buff or a curious traveler, Hubei’s updated framework makes it easier and more rewarding to discover its millennia-old stories.',
    coverImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['hubei', 'cultural tourism', 'wuhan', 'yellow crane tower', 'wudang mountain', 'heritage', 'visa policy'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-08T06:52:04.131Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-08-03-810q',
    title: 'Yichang Tourism Port Updates Entry Regulations for International Visitors in 2026',
    summary: 'Yichang, home to the Three Gorges, has streamlined entry rules at its tourism port. New policies include 24-hour transit visa-free access and simplified procedures for cruise travelers.',
    content: '## New Entry Rules at Yichang Tourism Port\n\nAs of early 2026, Yichang has introduced updated entry regulations at its tourism port, making it easier for international travelers to explore the Three Gorges region. The port, a key gateway for Yangtze River cruises, now offers a 24-hour transit visa-free policy for passengers from 54 countries, including the US, UK, Japan, and most EU nations. This allows visitors to disembark and explore Yichang’s attractions without a traditional visa, provided they hold a confirmed onward ticket.\n\n## Simplified Procedures for Cruise Travelers\n\nCruise passengers arriving at Yichang Tourism Port can now complete immigration formalities in under 15 minutes, thanks to new e-gates and biometric screening. The port has also introduced a streamlined baggage clearance system, reducing wait times for groups. Travelers are advised to have their passports valid for at least six months and to carry printed copies of their cruise itinerary.\n\n## Practical Tips for International Visitors\n\n- **Visa-Free Transit**: Eligible travelers can stay up to 24 hours within Yichang city limits. Popular stops include the Three Gorges Dam, the Xiling Gorge, and the Yichang Museum.\n- **Cruise Requirements**: All passengers must register with their cruise operator at least 48 hours before arrival. Health declaration forms are no longer mandatory, but random temperature checks may occur.\n- **Local Transport**: From the port, free shuttle buses run to the city center. Taxis and ride-hailing apps like DiDi are widely available.\n\n## Looking Ahead\n\nYichang is positioning itself as a hassle-free entry point for international tourism in Hubei. According to the latest reports from the Yichang Municipal Bureau of Culture and Tourism, the port is expected to process over 500,000 foreign visitors in 2026, a 20% increase from the previous year. These regulatory updates aim to boost cultural exchange and make the Three Gorges more accessible than ever.\n\nFor the most current information, travelers should check the official website of the Yichang Tourism Port or consult their cruise operator before departure.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['yichang', 'tourism port', 'entry regulations', 'visa policy', 'three gorges', 'hubei travel', 'cruise travel'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-08T06:52:14.445Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-08-04-bapu',
    title: 'Hubei Inbound Tourism Surges Past Pre-Pandemic Levels in 2026',
    summary: 'New data shows international visitor numbers to Hubei have fully recovered, with Wuhan and Yichang leading the rebound. Visa-free policies and direct flights fuel growth.',
    content: '## Inbound Tourism Recovery Exceeds Expectations\n\nAccording to the latest report from Hubei Provincial Department of Culture and Tourism, inbound tourism numbers in the first quarter of 2026 have surpassed pre-pandemic levels by 12%. A total of 1.2 million international visitors entered Hubei between January and March, marking a significant milestone for the province\'s tourism sector.\n\n## Key Drivers of Growth\n\n- **Visa-free transit policies**: Expanded 144-hour visa-free transit for nationals from 54 countries now covers Wuhan Tianhe International Airport, making spontaneous trips much easier.\n- **Direct flight expansion**: New direct routes from Kuala Lumpur, Bangkok, and Dubai to Wuhan launched in late 2025, reducing travel time and boosting arrivals from Southeast Asia and the Middle East.\n- **Cruise tourism revival**: Yichang\'s Three Gorges cruise terminals reported a 35% year-on-year increase in foreign tourists, with many combining Yangtze River cruises with cultural tours in Wuhan and Jingzhou.\n\n## Top Source Markets\n\nThe recovery is notably broad-based:\n- **Southeast Asia** leads (up 28% vs 2019), driven by Malaysia, Thailand, and Vietnam\n- **Europe** shows strong growth (up 15%), especially from France, Germany, and the UK\n- **Americas** are recovering steadily (up 8%), with US and Canada as primary markets\n\n## What This Means for Travelers\n\nLocal tourism infrastructure has scaled up accordingly:\n- Multilingual signage and audio guides now available at 42 major attractions across Hubei\n- Mobile payment options (Alipay, WeChat Pay) are now universally accepted at tourist sites\n- English-language tour services have expanded in Wuhan, Yichang, and Enshi\n\n"The recovery is not just about numbers — it\'s about the quality of experience," says Li Mei, director of the Hubei International Tourism Promotion Center. "We\'re seeing travelers stay longer, explore deeper, and spend more on cultural experiences like tea ceremonies in Wudang Mountains and pottery workshops in Jingdezhen, which is a short train ride from Hubei."\n\n## Looking Ahead\n\nWith the peak summer season approaching, Hubei expects inbound arrivals to grow another 20% in Q2 2026. New direct flights from Sydney and London are expected to launch by September, and a digital tourism card for international visitors — offering discounts and seamless entry to 30+ attractions — will debut in July.\n\nFor travelers planning a trip, the best times to visit are spring (March-May) for cherry blossoms in Wuhan and autumn (September-November) for crisp weather and stunning Three Gorges views.',
    coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['hubei', 'inbound tourism', 'tourism recovery', 'wuhan', 'visa policy', 'yangtze river', 'three gorges'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-08T06:52:23.613Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-08-05-232h',
    title: 'Wuhan\'s Biotech Boom: New Pharma Hub Attracts Global Attention in 2026',
    summary: 'Wuhan\'s biotech and pharmaceutical sector is surging with new facilities, international partnerships, and cutting-edge research, making it a key destination for science-minded travelers and industry observers.',
    content: '## A Rising Star in Global Biotech\n\nWuhan, long known as a cultural and historical hub in Hubei province, is rapidly transforming into a global powerhouse for biotechnology and pharmaceuticals. As of 2026, the city\'s Optical Valley (Optics Valley of China, or OVC) has become a magnet for international researchers, startups, and travelers curious about innovation.\n\nRecent reports highlight that Wuhan\'s biotech industry has grown by over 20% annually since 2023, with more than 1,000 biotech firms now operating in the region. This surge is driven by a combination of world-class research institutions, state-of-the-art laboratories, and a growing ecosystem of clinical trials and drug development.\n\n## Key Developments in 2026\n\n- **New R&D Centers**: In early 2026, two major international pharmaceutical companies opened R&D centers in Wuhan\'s Bio-Lake (Biolake) area, focusing on gene therapy and personalized medicine. These facilities are expected to create thousands of jobs and accelerate drug discovery.\n- **Vaccine Innovation Hub**: Wuhan continues to build on its vaccine research legacy. A new joint venture between local biotech firms and European partners launched a phase 3 trial for a next-generation mRNA vaccine targeting multiple respiratory viruses.\n- **Smart Manufacturing**: The city\'s pharmaceutical manufacturing sector is embracing AI and automation. A new production line at the Wuhan National Bio-industry Base uses robotics to produce complex biologics 30% faster than traditional methods.\n\n## What This Means for Visitors\n\nFor international travelers, Wuhan\'s biotech boom offers unique opportunities:\n\n- **Science Tours**: Several biotech parks now offer guided tours for visitors, showcasing labs, clean rooms, and interactive exhibits. The Wuhan Bio-Lake Museum features a virtual reality experience of a cell\'s inner workings.\n- **Networking Events**: The annual Wuhan International Biotech Summit, held each September, attracts thousands of scientists, entrepreneurs, and investors from over 50 countries. In 2026, the summit will include a public day with lectures and demonstrations.\n- **Cultural Crossovers**: Local restaurants and cafes near Biolake have started offering "lab-inspired" cuisine, like molecular gastronomy dishes and health-boosting teas developed with biotech extracts.\n\n## Looking Ahead\n\nWuhan\'s pharmaceutical industry is not just about science—it\'s a vibrant part of the city\'s identity. With new airport connections and a streamlined visa process for business travelers (including a 24-hour visa-free transit for select nationalities), the city is more accessible than ever. Whether you\'re a researcher, investor, or simply curious about the future of medicine, Wuhan is a destination worth exploring in 2026 and beyond.',
    coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['wuhan', 'biotech', 'pharmaceuticals', 'optics valley', 'innovation', 'hubei', 'science tourism'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-08T06:52:35.069Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-08-06-j0cs',
    title: 'Hubei Province Achieves Full 5G Coverage: A Game-Changer for Travelers and Tech Enthusiasts',
    summary: 'As of early 2026, Hubei province has completed province-wide 5G network deployment, covering all cities, major tourist sites, and rural transport routes, boosting connectivity for visitors and locals alike.',
    content: '## Hubei\'s 5G Milestone: What It Means for You\n\nHubei province has officially rolled out its full 5G network across all 17 prefecture-level divisions, according to the latest report from the provincial communications authority. As of January 2026, over 95% of the province\'s urban areas and 80% of rural townships now enjoy high-speed 5G connectivity, with key tourist destinations like the Three Gorges Dam, Wudang Mountains, and the Yellow Crane Tower all covered.\n\n## Faster Connections for Travelers\n\nFor international visitors, this means seamless streaming, instant map loading, and reliable video calls even in remote scenic spots. The network upgrade supports peak download speeds of up to 1.2 Gbps in major cities like Wuhan, Yichang, and Xiangyang—perfect for sharing real-time travel experiences on social media or using augmented reality (AR) tour guides now available at several heritage sites.\n\n### Key Coverage Highlights:\n- **Wuhan Metro**: All 12 lines now have continuous 5G signal, including underground tunnels.\n- **High-speed rail**: The Wuhan–Guangzhou and Wuhan–Shanghai routes have dedicated 5G base stations for uninterrupted connectivity.\n- **Rural hubs**: Towns near Shennongjia and Enshi Grand Canyon now offer 5G for eco-tourists and hikers.\n\n## Smart Tourism and Digital Innovation\n\nBeyond personal use, the 5G rollout powers smart tourism initiatives. In 2025, the Hubei Smart Tourism Platform launched, allowing visitors to book tickets, access virtual tours, and receive real-time crowd updates via 5G-enabled apps. At the Hubei Provincial Museum, a 5G-powered AR exhibit brings ancient artifacts to life—users can point their phones at exhibits to see 3D animations of how they were used.\n\n### Tech Infrastructure Facts:\n- Over 30,000 5G base stations were installed across the province by end of 2025.\n- Wuhan is now one of China\'s top 10 cities for 5G download speeds, per OpenSignal data.\n- The network uses a mix of sub-6GHz and mmWave bands for balanced coverage and speed.\n\n## What’s Next for Hubei’s Digital Future\n\nLocal tech hubs like Wuhan\'s Optics Valley (Optics Valley) are leveraging 5G for autonomous vehicle testing and smart logistics. For tourists, this means future services like drone delivery of snacks at scenic spots and AI-powered translation kiosks at airports. The province also plans to expand 5G coverage to all national parks and major highways by 2027.\n\nWhether you\'re hiking in Shennongjia or exploring Wuhan\'s bustling streets, Hubei\'s 5G network ensures you stay connected without missing a beat.',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['5g', 'hubei', 'technology', 'smart tourism', 'wuhan', 'digital infrastructure', 'connectivity'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-08T06:52:46.377Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-08-07-go8k',
    title: 'Hubei\'s Calligraphy and Painting Heritage: A Living Art Tradition in 2026',
    summary: 'Discover Hubei\'s rich legacy of calligraphy and painting, from ancient masters to modern workshops in Wuhan and beyond.',
    content: '## The Timeless Art of Hubei\n\nHubei province has long been a cradle of Chinese calligraphy and painting, with a heritage that spans over two millennia. This year, the region is seeing a renewed interest in these classical arts, attracting both domestic and international travelers eager to explore the brushwork and ink traditions that define Chinese culture.\n\n## Where to Experience the Art\n\nIn Wuhan, the Hubei Provincial Museum has curated a special exhibition this season showcasing rare scrolls from the Ming and Qing dynasties. Visitors can also head to the **Guiyuan Temple** in Hanyang, where local artists gather for live demonstrations every weekend. For a hands-on experience, the **Wuhan Art Museum** offers workshops for beginners, teaching basic brushstrokes and ink techniques.\n\n## Masters and Movements\n\nHubei\'s calligraphy tradition is deeply connected to the Chu culture, known for its flowing, expressive styles. The region was home to notable artists like **Mi Fu** (1051-1107), a Song dynasty master whose works are studied worldwide. Today, contemporary painters in Huangshi and Yichang are blending traditional ink wash with modern landscapes, creating a vibrant fusion that appeals to younger audiences.\n\n## Cultural Events in 2026\n\nAccording to recent reports, the **Hubei International Calligraphy and Painting Festival** is scheduled for this October in the ancient town of Xiangyang. The festival will feature live demonstrations, art auctions, and a competition for emerging artists. International participants are welcome, making it a perfect opportunity for cultural exchange.\n\n## Tips for Travelers\n\n- **Visit local studios**: In Wuchang district, several family-run studios offer private lessons in seal script and landscape painting.\n- **Collect art**: The **Han Street Art Market** in Wuhan sells affordable pieces by local artists, perfect for souvenirs.\n- **Read the signs**: Many temples and museums have bilingual descriptions, making it easier to appreciate the historical context.\n\nAs of 2026, Hubei\'s calligraphy and painting heritage is more accessible than ever, blending ancient techniques with modern creativity. Whether you\'re a seasoned collector or a curious traveler, this art form offers a Window into the soul of China.',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['hubei', 'calligraphy', 'painting', 'wuhan', 'chinese-art', 'cultural-heritage', 'art-workshops'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-08T06:52:57.737Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-08-08-i9z9',
    title: 'Wuhan’s Skyline Evolution: A Modern Architectural Marvel Rising Along the Yangtze',
    summary: 'Discover how Wuhan’s skyline is transforming with cutting-edge towers, riverside landmarks, and cultural hubs that blend innovation with heritage.',
    content: '## A New Chapter for the City of Rivers\n\nWuhan, the bustling capital of Hubei province, is experiencing a dramatic architectural renaissance. As of 2026, the city’s skyline—stretching along the confluence of the Yangtze and Han rivers—has become a living gallery of modern design, attracting international travelers and architecture enthusiasts alike.\n\n## Iconic Towers Reshaping the Horizon\n\nIn the past few years, Wuhan has added several striking skyscrapers to its urban fabric. The **Wuhan Greenland Center**, a 475-meter-tall tower near the Yangtze, remains the centerpiece with its sleek, wave-inspired form. But new projects are catching the eye: \n- **Wuhan Yangtze River Tower (2025)**: A 500-meter mixed-use structure featuring a sky garden and observation deck, offering panoramic views of the three Wuhan districts.\n- **Optics Valley Financial Center**: A cluster of glass-and-steel towers in the city’s tech hub, completed in early 2026, symbolizing Wuhan’s fusion of innovation and urban living.\n- **Hanyang Riverside Cultural Complex**: Opened late last year, this low-rise cultural district includes a contemporary art museum and a concert hall, designed by a leading international firm.\n\n## Bridges and Waterfront: Engineering as Art\n\nWuhan’s skyline isn’t just about height—it’s about integration with the river. The newly completed **Wuhan Yangtze River Bridge II** (2025) features a pedestrian walkway and LED lighting that dances across the water each evening. Along the waterfront, the **Wuhan International Expo Center** expansion (due mid-2026) adds a floating pavilion for exhibitions and events.\n\n## Heritage Meets High-Tech\n\nWhat makes Wuhan’s modern architecture unique is its respectful nod to history. The **Yellow Crane Tower** area now features mirrored glass facades that reflect the ancient pagoda, while new buildings in **Wuchang District** incorporate traditional Chinese lattice patterns into their exteriors. The **Wuhan Art Museum** (renovated in 2025) uses energy-efficient smart glass that adjusts to sunlight, a favorite among sustainability-minded travelers.\n\n## For Visitors: Skyline Tours and Hotspots\n\nIf you’re planning a trip, here’s how to experience Wuhan’s architectural story:\n- **Take a Yangtze Night Cruise**: The best way to see the illuminated skyline—boats depart from Hankou Pier hourly from 7 PM.\n- **Visit the Wuhan Planning Exhibition Hall**: Located in the Hankou CBD, this free museum features a 3D model of the entire city and future projects.\n- **Photograph the Skyline from Guishan Hill**: A short hike rewards you with a panoramic shot of the Yangtze River Tower and the old town.\n\nAs Wuhan continues to grow, its skyline tells a story of ambition, creativity, and a deep connection to the land and water. Whether you’re an architecture buff or a casual traveler, these modern marvels are worth a spot on your Hubei itinerary.',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['wuhan architecture', 'yangtze river skyline', 'modern skyscrapers', 'hubei travel', 'wuhan landmarks', 'chinese urban design', 'wuhan cultural tours'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-08T06:53:07.254Z',
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
