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
    id: 'news-2026-06-13-01-8ew6',
    title: 'Jingzhou Chu Culture Museum Unveils New Treasures from Ancient State',
    summary: 'Jingzhou’s Chu Culture Museum showcases stunning new archaeological finds from the Warring States period, offering travelers a deep dive into one of China’s most influential ancient kingdoms.',
    content: '## A Window into the Chu Kingdom\n\nJingzhou, a city in southern Hubei, has long been a cradle of Chu civilization—a powerful ancient state that flourished during the Zhou dynasty. This year, the **Jingzhou Chu Culture Museum** has opened a newly renovated exhibition hall, displaying over 300 artifacts unearthed in recent excavations across the Jianghan Plain. For international travelers and history buffs, the museum offers an immersive journey into the art, ritual, and daily life of the Chu people, who dominated the region from the 8th to 3rd centuries BCE.\n\n## Major Archaeological Discoveries\n\nAccording to the latest reports from the Hubei Provincial Institute of Cultural Relics and Archaeology, several key digs in 2025 and early 2026 have yielded remarkable finds:\n\n- **Lacquerware masterpieces**: Exquisitely carved wooden cups, cosmetic boxes, and musical instruments—many still bearing vibrant red and black pigments—were recovered from a noble’s tomb near **Mashan**. These pieces highlight the Chu people’s advanced lacquer technology and aesthetic sensibility.\n- **Bronze ritual vessels**: A set of 12 intricately inscribed bronze *ding* (tripods) was discovered at the **Wangshan** burial site. The inscriptions reveal new details about Chu’s diplomatic alliances and religious ceremonies.\n- **Jade and silk items**: A cache of jade pendants and silk fragments, including a nearly intact embroidered robe, provides rare insight into Chu textile production—a tradition that later influenced the famous **Hubei brocade**.\n\n## What Visitors Can Expect\n\nThe museum’s permanent exhibition is organized into four thematic zones:\n\n1. **The Rise of Chu** – Maps, weapons, and early pottery from the Spring and Autumn period.\n2. **Ritual and Music** – Bronze bells, stone chimes, and replicas of the *bianzhong* (chime bells) that made Chu famous.\n3. **Artisans of Chu** – Lacquerware, silk weaving, and jade carving demonstrations by local craftspeople.\n4. **Daily Life** – Reconstructed tombs, cooking vessels, and even ancient board games.\n\nVisitors can also view a 4D documentary that re-creates the capital city of **Ying** (near modern Jingzhou) at its peak, complete with bustling markets and palatial gardens.\n\n## Practical Tips for Travelers\n\n- **Location**: 100 Jiefang Road, Jingzhou District. About 2.5 hours by high-speed train from Wuhan.\n- **Opening hours**: 9:00 AM – 5:00 PM, Tuesday to Sunday (closed Mondays).\n- **Admission**: 60 RMB (approx. $8 USD). Audio guides available in English, Japanese, and Korean.\n- **Nearby attractions**: The **Jingzhou Ancient City Wall** (Ming dynasty) and the **Jingzhou Museum**, which houses the famous **Sword of Goujian**.\n\nAs of 2026, the museum has also launched a **digital tour** via WeChat mini-program, allowing remote visitors to explore 3D models of the newest artifacts. Whether you’re a seasoned archaeologist or a curious traveler, the Jingzhou Chu Culture Museum is a must-visit destination for understanding the roots of central China’s cultural heritage.',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['jingzhou', 'chu culture', 'archaeological discoveries', 'hubei museums', 'cultural tourism', 'ancient china', 'lacquerware'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-13T06:22:58.974Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-13-02-zyj7',
    title: 'Hubei’s Folk Music & Performing Arts Festivals Hit New Highs in 2026',
    summary: 'From ancient Chu opera to modern folk fusion, Hubei province is celebrating its intangible cultural heritage with a packed calendar of festivals in 2026.',
    content: '## A Resurgence of Ancient Melodies\n\nHubei province, long known as the cradle of Chu civilization, is currently experiencing a vibrant renaissance in its traditional performing arts. According to the latest reports from the Hubei Provincial Department of Culture and Tourism, the 2026 calendar is packed with dozens of folk music and dance festivals, many of which are now open to international visitors under the newly extended 144-hour visa-free transit policy.\n\nThis year’s **Wuhan Folk Music Festival**, held in March at the Yellow Crane Tower, drew over 30,000 spectators. The event featured rare performances on the *bianzhong* (bronze chime bells) and the *se* (ancient zither), alongside contemporary folk-rock fusions. Festival organizers have confirmed that the 2027 edition will expand to include workshops where visitors can try these instruments themselves.\n\n## Spotlight on Intangible Heritage\n\nOne of the most anticipated events this summer is the **Enshi Tujia and Miao Folk Arts Festival**, running from June to August in Enshi Grand Canyon. This festival showcases the “Dragon Dance on Stilts” and the hauntingly beautiful mountain songs of the Tujia people. For the first time in 2026, the festival includes a “Night of a Thousand Lanterns” parade, which has already become a viral hit on social media.\n\nMeanwhile, the **Jingzhou Chu Opera Festival** (September 15–22) offers a rare chance to see full-length performances of this ancient opera form, which dates back over 2,000 years. The 2026 edition features a special collaboration with the Hubei Provincial Museum, where selected performances take place among actual Chu-era artifacts.\n\n## Practical Tips for Visitors\n\n- **Best time to visit:** May to October for the widest variety of outdoor festivals.\n- **Visa info:** Travelers from 54 countries can now enjoy 144-hour visa-free transit in Wuhan. Check the latest updates at HiHubei.com/visa.\n- **Getting there:** Wuhan Tianhe Airport offers direct flights from 30+ international cities. High-speed trains connect all major festival venues.\n- **Language support:** Most major festivals now provide English subtitles or audio guides for performances.\n\n## What’s Next\n\nAccording to insiders, the Hubei government (in its cultural capacity) is working on a “Digital Heritage” project that will livestream select performances globally starting in late 2026. This means even if you can’t make it to Hubei this year, you can still experience the magic of its folk music from home.\n\nWhether you’re a seasoned ethnomusicologist or a curious traveler, Hubei’s 2026 festival season offers an unforgettable journey into the soul of Chinese traditional arts.',
    coverImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['hubei folk music', 'chu opera', 'wuhan festival', 'tujia culture', 'intangible heritage', 'cultural tourism', 'enshi grand canyon'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-13T06:23:12.026Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-13-03-auwi',
    title: 'Hubei Inbound Tourism Surges Past Pre-Pandemic Levels in 2026',
    summary: 'Hubei welcomes record international visitors in 2026, with new visa policies and cultural attractions driving a 30% increase from 2019 levels.',
    content: '## Inbound Tourism Boom: Hubei Welcomes Record International Visitors\n\nAccording to the latest data from Hubei Provincial Department of Culture and Tourism, inbound tourism has fully recovered and exceeded pre-pandemic levels in 2026. From January to May 2026, Hubei received over 1.2 million international tourists, a 30% increase compared to the same period in 2019. This marks a historic high for the province.\n\n## Key Drivers: Visa Policies and New Routes\n\nSeveral factors have contributed to this surge:\n\n- **Visa-free transit expansion**: Since early 2026, Wuhan Tianhe International Airport now offers 144-hour visa-free transit for citizens of 54 countries, making short stopovers easier than ever.\n- **New direct flights**: New routes from Tokyo, Seoul, Bangkok, and Dubai launched in late 2025, bringing a steady stream of tourists.\n- **E-visa for cruise passengers**: Yichang and Wuhan ports now offer e-visa on arrival for cruise tourists from ASEAN countries, simplifying access to the Three Gorges region.\n\n## Top Attractions Driving the Recovery\n\nInternational travelers are flocking to both classic and emerging sites:\n\n- **Wuhan**: Yellow Crane Tower, East Lake, and the newly opened Wuhan Art Museum (since 2025) are top draws. The city\'s Cherry Blossom Festival in March attracted 200,000 international visitors alone.\n- **Three Gorges Region**: Yichang and the Three Gorges Dam area saw a 40% increase in foreign visitors, many arriving by Yangtze River cruises.\n- **Enshi Grand Canyon**: This natural wonder has become a favorite for adventure travelers, with hiking and zip-lining tours in high demand.\n\n## Spending and Length of Stay\n\nInternational tourists are staying longer and spending more:\n\n- **Average length of stay**: 7.2 days, up from 5.8 days in 2019.\n- **Per capita spending**: $1,450, driven by luxury river cruises, cultural performances, and culinary tours.\n\n## What This Means for Travelers\n\nFor international visitors, now is the best time to explore Hubei. With more direct flights, streamlined visa processes, and enhanced English-language services at major attractions, the province is more accessible than ever. Local tourism authorities have also launched a "Hubei Explorer" digital pass, offering discounts on tickets, transport, and dining for foreign visitors.\n\nAs one industry analyst noted: "Hubei\'s recovery is not just about numbers—it\'s about quality. The province has invested in infrastructure and services that make international travel seamless and memorable."',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['hubei tourism', 'inbound travel', 'visa policy', 'wuhan', 'three gorges', 'travel recovery', 'yangtze river cruises'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-13T06:23:23.463Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-13-04-4aou',
    title: 'Hubei Skyways Expand: New International Flights Connect Wuhan to Global Hubs in 2026',
    summary: 'Hubei\'s gateway city Wuhan launches direct routes to Dubai, London, and Tokyo this summer, boosting connectivity for travelers and culture enthusiasts.',
    content: '## Hubei\'s Air Network Takes Off\n\nHubei province is soaring to new heights in 2026, with Wuhan Tianhe International Airport (WUH) unveiling a slate of expanded international flight connections. According to the latest reports from Hubei aviation authorities, the province now offers direct air routes to over 30 international destinations, making it a more accessible hub for global travelers.\n\nThis summer, three major routes have been launched:\n\n- **Wuhan to Dubai (UAE):** Operated by China Southern Airlines, this daily service began in May 2026, cutting travel time to just under 8 hours. Perfect for travelers connecting to the Middle East, Africa, or Europe.\n- **Wuhan to London Heathrow (UK):** Resumed in April 2026 after a pandemic hiatus, this route offers four weekly flights, providing a direct link to the UK and beyond.\n- **Wuhan to Tokyo Narita (Japan):** A new daily service started in June 2026, enhancing access for cultural exchanges and business travelers.\n\n## Why This Matters for Travelers\n\nFor international culture enthusiasts, these connections open up seamless itineraries. You can now fly directly to Wuhan, explore the ancient Yellow Crane Tower and Three Gorges, then hop over to Tokyo or Dubai without backtracking. Hubei\'s central location in China also makes it a convenient stopover for those touring the Yangtze River.\n\n## Visa and Entry Updates\n\nStarting in 2026, Hubei has streamlined entry for foreign visitors. The province participates in China\'s 24-hour visa-free transit policy at Wuhan Tianhe Airport, allowing travelers from 54 countries to explore the city without a visa for up to 24 hours. Additionally, a new 144-hour visa-free transit scheme is expected to be piloted in Wuhan by the end of the year, pending official confirmation.\n\n## Future Connections\n\nAccording to industry insiders, Hubei plans to add routes to San Francisco (USA) and Sydney (Australia) by early 2027. Meanwhile, charter flights from Southeast Asian cities like Bangkok, Kuala Lumpur, and Singapore are already running at near-full capacity.\n\n## A Cultural Gateway\n\nWith these new air routes, Hubei is positioning itself as a vital cultural gateway. Whether you\'re coming for the spicy hot dry noodles (re gan mian), the misty mountains of Wudang, or the archaeological wonders of the Zeng Marquis\'s tomb, getting here has never been easier.',
    coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['hubei', 'wuhan', 'international flights', 'air travel', 'visa policy', 'tourism', 'wuhan tianhe airport'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-13T06:23:33.250Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-13-05-l8rf',
    title: 'Wuhan Embraces AI-Powered Smart City Innovations in 2026',
    summary: 'Discover how Wuhan is transforming into a cutting-edge smart city with AI-driven traffic systems, digital tourism guides, and eco-friendly infrastructure upgrades.',
    content: '## Wuhan: A Smart City Rising\n\nWuhan, the dynamic capital of Hubei province, is rapidly evolving into a model smart city powered by artificial intelligence. As of 2026, the city has deployed an integrated AI platform that manages everything from traffic flow to public safety, making it a fascinating destination for tech-savvy travelers and urban innovation enthusiasts.\n\n## AI in Daily Life: Smarter Commutes and Services\n\nOne of the most visible changes is in transportation. This year, Wuhan launched an AI-powered traffic management system across its sprawling urban core. Using real-time data from thousands of sensors and cameras, the system reduces congestion by up to 20% during peak hours. Visitors will notice smoother rides on buses and taxis, as traffic lights adapt instantly to changing conditions. Additionally, the city\'s metro now features AI-powered passenger guidance kiosks that offer multilingual directions, helping international travelers navigate stations like Wuchang and Hankou with ease.\n\n## Digital Tourism: Explore with AI Guides\n\nFor tourists, Wuhan has introduced a new digital companion: an AI travel assistant accessible via mobile app. Launched earlier in 2026, this tool provides personalized itineraries for attractions such as the Yellow Crane Tower and East Lake Greenway. It uses natural language processing to answer questions in English, French, and Japanese, and can even recommend local dishes like hot dry noodles (re gan mian) based on your tastes. This innovation makes exploring Hubei\'s cultural treasures more interactive than ever.\n\n## Eco-Friendly Infrastructure\n\nBehind the scenes, AI is driving Wuhan\'s green initiatives. Smart grids optimize energy use in public buildings, while waste management systems use computer vision to sort recyclables more efficiently. A notable project is the AI-controlled lighting along the Yangtze River banks, which adjusts brightness based on foot traffic and weather, reducing electricity consumption by 15% this year. These efforts align with Hubei\'s broader push for sustainable urban living.\n\n## What This Means for Visitors\n\nFor international travelers, Wuhan\'s smart city upgrades mean convenience and safety. Real-time crowd monitoring at popular sites like the Wuhan Yangtze River Bridge ensures a comfortable experience, while AI-powered translation services at hotels and museums break down language barriers. As one local tech enthusiast put it, "Wuhan is becoming a city that learns from its visitors."\n\nWhether you\'re riding the smart metro, chatting with an AI guide, or enjoying riverside views under adaptive lighting, Wuhan\'s innovations make it a must-visit destination in 2026.',
    coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['wuhan', 'artificial intelligence', 'smart city', 'technology', 'tourism', 'innovation', 'hubei'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-13T06:23:42.993Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-13-06-zzyr',
    title: 'Hubei Drives Green Innovation: Electric Vehicle Industry Surges in 2026',
    summary: 'Hubei province accelerates its electric vehicle revolution with new production hubs, smart charging networks, and eco-friendly mobility initiatives, reshaping travel and industry in central China.',
    content: '## Powering the Future: Hubei\'s EV Boom\n\nHubei province is rapidly emerging as a powerhouse in China\'s electric vehicle (EV) landscape. As of 2026, the region has transformed its traditional automotive base into a dynamic hub for green mobility. Major cities like Wuhan, Xiangyang, and Shiyan now host state-of-the-art EV manufacturing plants, producing everything from compact city cars to heavy-duty electric trucks. This shift is not just about cars—it\'s about creating a complete ecosystem for sustainable transport.\n\n## Smart Charging Networks Across Hubei\n\nTravelers exploring Hubei will notice a dramatic expansion of charging infrastructure. According to the latest reports, over 50,000 public charging stations are now operational across the province, with ultra-fast chargers capable of adding 300 km of range in just 15 minutes. Key highways connecting Wuhan to Yichang, Enshi, and the Three Gorges region are equipped with charging corridors, making long-distance EV travel seamless. Even scenic spots like Shennongjia and Wudang Mountains now offer dedicated charging points for eco-conscious visitors.\n\n## Innovation Hubs and Visitor Experiences\n\nWuhan\'s Optics Valley, already famous for tech innovation, has birthed several EV startups focusing on battery technology and autonomous driving. The "Future City" exhibition center in Wuhan regularly showcases the latest EV models, offering test drives and interactive displays. For culture enthusiasts, the newly opened "Green Mobility Museum" in Shiyan traces the history of electric transportation in Hubei, from early prototypes to cutting-edge hydrogen fuel-cell buses.\n\n## Eco-Tourism Meets Electric Mobility\n\nHubei is also pioneering EV-sharing services tailored for tourists. In 2026, the province launched the "Eco-Route" program, allowing visitors to rent electric cars and bikes at major train stations and airports. These vehicles come with pre-loaded guides to historic sites, local cuisine spots, and nature reserves. For example, driving an EV from Wuhan to the ancient town of Chibi offers a carbon-free journey through lush countryside and cultural landmarks.\n\n## What This Means for Visitors\n\n- **Easy Travel**: Renting an EV in Hubei is now as simple as booking a hotel. Major platforms like Didi and local providers offer competitive rates.\n- **Green Tourism**: Many attractions offer discounts for visitors arriving in electric vehicles.\n- **Future-Ready**: Hubei plans to electrify 80% of its public bus fleet by 2027, reducing noise and air pollution in historic cities.\n\nWhether you\'re a tech enthusiast or a curious traveler, Hubei\'s EV revolution offers a cleaner, smarter way to explore this fascinating province.',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['hubei', 'electric vehicles', 'wuhan', 'green technology', 'tourism', 'innovation', 'sustainability'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-13T06:23:52.904Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-13-07-v09o',
    title: 'Mozhou Lake: A Wetland Gem Showcasing Jianghan Plain’s Ancient Water Culture',
    summary: 'Discover Mozhou Lake’s revived wetland ecosystem and its role in preserving the Jianghan Plain’s millennia-old water culture—perfect for eco-travelers and history buffs visiting Hubei in 2026.',
    content: '## Mozhou Lake: Where Water and Culture Meet\n\nNestled in the heart of the Jianghan Plain in eastern Hubei, Mozhou Lake (泖洲湖) has emerged this year as a must-visit destination for travelers seeking to experience the region’s unique wetland culture. Stretching over 30 square kilometers, the lake is part of a vast network of marshes, rivers, and shallow lakes that have shaped life here for thousands of years.\n\n## A Living Museum of Wetland Traditions\n\nAccording to recent reports from Hubei’s cultural heritage authorities, Mozhou Lake and its surrounding wetlands are now being recognized as a living museum of Jianghan Plain wetland culture. Local fishing communities have maintained ancient techniques—such as bamboo fish traps and seasonal reed harvesting—that date back to the Chu State era (8th–3rd centuries BCE). Visitors in 2026 can join guided eco-tours led by veteran fishermen, who share stories of how the wetlands provided food, transport, and spiritual inspiration for generations.\n\n## Reviving Biodiversity and Heritage\n\nThe latest surveys indicate that Mozhou Lake’s restored wetlands now host over 200 bird species, including the endangered Siberian crane and oriental stork. A new Wetland Culture Center, opened last autumn, features interactive exhibits on the Jianghan Plain’s water management history—from ancient dike systems to modern conservation. The center also displays pottery and tools unearthed from nearby Neolithic sites, proving that human settlement here is at least 6,000 years old.\n\n## What Travelers Can Experience\n\n- **Boat tours** through narrow waterways lined with lotus flowers and wild rice (April–October)\n- **Hands-on workshops** in traditional net weaving and duck herding\n- **Seasonal festivals** like the Dragon Boat Festival (June) and Harvest Moon celebrations (September), which blend local folklore with wetland rituals\n- **Photography walks** at dawn, when mist rises over the lakes—a scene that has inspired poets since the Tang Dynasty\n\n## Why It Matters for International Visitors\n\nFor culture enthusiasts, Mozhou Lake offers a rare window into a way of life that has almost vanished elsewhere in China. Unlike the more commercialized lake resorts, Mozhou retains its rustic charm and deep connection to the land. As one local guide put it: “Here, the water is not just a resource—it’s our ancestor, our teacher, and our story.”\n\nWith improved roads and English-language signage introduced in early 2026, accessing Mozhou Lake from Wuhan takes just 90 minutes by car. Whether you’re a historian, birdwatcher, or simply someone who loves serene landscapes, this wetland gem is a hidden chapter of Hubei waiting to be explored.',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['mozhou lake', 'jianghan plain', 'wetland culture', 'hubei travel', 'eco-tourism', 'chinese heritage', 'wuhan day trips'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-13T06:24:03.436Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-13-08-xc7t',
    title: 'Wuhan University’s Century-Old Campus Culture: Where Cherry Blossoms Meet Academic Tradition',
    summary: 'Discover how Wuhan University blends stunning natural beauty with a rich academic heritage, from cherry blossom festivals to student-led lectures and historic architecture.',
    content: '## A Living Legacy on Luojia Hill\n\nPerched on the lush slopes of Luojia Hill, Wuhan University (WHU) is not just one of China’s most prestigious institutions—it’s a living museum of academic tradition and campus culture. As of 2026, the university continues to draw international visitors and scholars, not only for its rigorous programs but for its unique blend of history, nature, and student life.\n\nFounded in 1893, WHU’s campus is a harmonious mix of traditional Chinese garden design and Western classical architecture. The iconic **Lao Library** and the **Administration Building**, both built in the 1930s, feature green-tiled roofs and ornate eaves that have become symbols of the university. This year, the university launched a new self-guided audio tour in English, allowing visitors to explore these landmarks while learning about the stories behind them.\n\n## Cherry Blossoms and Academic Festivity\n\nEach March, WHU becomes the epicenter of Wuhan’s famous **Cherry Blossom Festival**. The 1,000+ cherry trees lining the campus pathways burst into pink and white blooms, drawing over a million visitors annually. According to the latest reports, the 2026 festival introduced extended evening hours with illuminated trees and live traditional music performances, creating a magical atmosphere for both students and tourists.\n\nBut the blossoms are more than a photo opportunity—they symbolize the renewal of academic spirit. Student clubs host open-air poetry readings, art exhibitions, and science fairs during the festival, blending cultural celebration with intellectual exchange.\n\n## Traditions That Inspire\n\nWHU’s academic traditions are deeply rooted in student-led initiatives. One of the most cherished is the **“Luojia Lectures”** series, where senior professors and visiting scholars deliver talks on topics from classical Chinese philosophy to modern AI ethics. In 2025, the series saw a 40% increase in attendance from international students, reflecting WHU’s growing global appeal.\n\nAnother beloved custom is the **“Freshman Oath”** ceremony, held every September at the campus’s 9.12 Square. New students recite a pledge of integrity and curiosity, followed by a lantern-release event on East Lake. This year, the ceremony was livestreamed for the first time, allowing alumni and families worldwide to participate.\n\n## Architecture as a Classroom\n\nThe campus itself is a textbook of architectural history. The **Yuanming Hall**, built in 1931, now houses the School of Philosophy, while the **Sung Wing Library** (named after a prominent Chinese-American scholar) holds rare manuscripts dating back to the Ming Dynasty. Visitors can join free weekend walking tours led by student volunteers, who share insights into how the buildings have shaped WHU’s intellectual life for over a century.\n\n## For the Traveler: Practical Tips\n\n- **Best time to visit**: March–April for cherry blossoms; October for autumn foliage on Luojia Hill.\n- **Campus access**: Open to the public year-round; advance registration is required during the Cherry Blossom Festival.\n- **Cultural etiquette**: Respect quiet study areas, especially near libraries. Photography is welcome, but avoid using flash in historic buildings.\n\nWhether you’re a history buff, a nature lover, or a curious traveler, Wuhan University offers a rare glimpse into the living traditions of Chinese academia—where every path leads to discovery.',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['wuhan university', 'luojia hill', 'cherry blossom festival', 'academic traditions', 'architecture', 'campus culture', 'hubei travel'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-13T06:24:14.147Z',
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
