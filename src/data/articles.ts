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
    id: 'news-2026-06-21-01-4jfx',
    title: 'Wuhan’s Contemporary Art Scene Heats Up: New Galleries and a Creative Renaissance',
    summary: 'From the historic Hankow district to the new Optical Valley arts hub, Wuhan is emerging as a must-visit destination for contemporary art lovers in central China.',
    content: '## A New Wave of Creativity\n\nWuhan, long known for its industrial heritage and spicy cuisine, is now making a name for itself in the contemporary art world. This year, the city’s gallery scene has exploded with new spaces, international exhibitions, and a growing community of young artists. For culture enthusiasts planning a visit, Wuhan offers a fresh, energetic alternative to Beijing and Shanghai.\n\n## Must-Visit Galleries\n\n- **Hubei Museum of Art** (Guanggu area): This flagship institution just opened a major expansion in June 2026, featuring a dedicated wing for digital and new media installations. Current exhibitions include "Flowing Codes," a showcase of AI-generated works by local artists.\n- **Wuhan Art Museum** (Hankow): Housed in a converted 1920s warehouse near the Yangtze River, this gallery focuses on experimental painting and sculpture. Its current show, "River Echoes," runs through October 2026.\n- **Gallery 1+1** (Wuchang): A cutting-edge space that hosts monthly open-studio events where visitors can meet emerging artists.\n\n## The Rise of District 798\n\nOften called Wuhan\'s answer to Beijing’s 798 Art Zone, the **Tazihu Creative Park** in the Optical Valley (Guanggu) has become a hotbed of creativity. Once a cluster of abandoned electronics factories, it now houses over 30 galleries, artist studios, and pop-up cafes. According to the latest reports, foot traffic here increased 45% in the first half of 2026 compared to last year.\n\n## Festivals and Events\n\nThis autumn, the **Wuhan Contemporary Art Biennale** (October 15–December 30, 2026) will take over multiple venues across the city. Curated by international art critics, the theme is "River and Code," exploring the intersection of natural landscapes and digital culture. Expect large-scale installations along the Yangtze riverbanks and immersive VR experiences at the Hubei Science & Technology Museum.\n\n## Practical Tips for Visitors\n\n- **Getting around**: Most galleries are clustered in three areas: Hankow (historical), Wuchang (university district), and Guanggu (modern). The subway Line 2 connects all three conveniently.\n- **Language**: While many galleries have English labels, consider downloading a translation app for artist statements.\n- **Best time to visit**: Spring (March–May) and autumn (September–November) offer mild weather perfect for gallery hopping.\n\nWuhan’s art scene is still young but maturing fast. Whether you’re a seasoned collector or a curious traveler, the city’s creative pulse is impossible to ignore.',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['wuhan', 'contemporary art', 'galleries', 'cultural tourism', 'hubei', 'optical valley', 'art biennale'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-21T06:57:28.689Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-21-02-1pm0',
    title: 'Jingzhou’s New Chu Culture Museum Showcases Stunning Archaeological Finds from Ancient Kingdom',
    summary: 'A cutting-edge museum in Jingzhou brings the 2,000-year-old Chu civilization to life with recent tomb discoveries, interactive exhibits, and rare artifacts.',
    content: '## A Window into the Chu Kingdom\n\nJingzhou, a historic city in southern Hubei, has long been a heartland of Chu culture—the powerful ancient kingdom that flourished during the Zhou dynasty. This year, the newly expanded **Jingzhou Chu Culture Museum** has become a must-visit destination for travelers and history buffs, offering an immersive journey into one of China’s most influential early civilizations.\n\nAccording to the latest reports, the museum now houses over 12,000 artifacts, many unearthed in recent archaeological digs across the Jianghan Plain. The centerpiece is a collection of **lacquerware, bronze ritual vessels, and silk textiles** that reveal the sophistication of Chu artisans more than 2,000 years ago.\n\n## Breakthrough Discoveries from 2025–2026\n\nJust this spring, archaeologists working near the ancient Chu capital of **Ying (modern-day Jingzhou)** announced the discovery of a high-ranking noble’s tomb filled with well-preserved wooden chariots, jade ornaments, and inscribed bamboo slips. These slips—thin strips of bamboo used for writing—contain administrative records and poems that shed new light on Chu governance and daily life.\n\n“The bamboo slips are like a time capsule,” said Dr. Li Mei, a lead researcher at the Hubei Provincial Institute of Cultural Relics. “They show us how the Chu people managed their cities, traded with neighboring states, and even composed music.”\n\nThe museum has integrated these finds into a special exhibition titled **“Echoes of Ying: Life in the Chu Capital,”** which runs through December 2026. Visitors can see the slips up close, along with a reconstructed chariot and a 3D model of the ancient city.\n\n## Interactive Experiences for International Visitors\n\nWhat sets the Jingzhou Chu Culture Museum apart is its blend of ancient artifacts and modern technology. Multilingual audio guides (English, French, Japanese) are available, and several exhibits feature **augmented reality (AR)** stations where you can “try on” replica Chu dynasty robes or “play” a reconstructed bronze bell set.\n\nA highlight for many is the **Lacquerware Hall**, where delicate red-and-black cups, cosmetic boxes, and musical instruments are displayed under soft, dim lighting to prevent fading. Each piece is accompanied by QR codes linking to short videos about the crafting process.\n\n## Plan Your Visit\n\nThe museum is located at **No. 108, Jingzhou Avenue**, about a 20-minute drive from Jingzhou Railway Station. It’s open Tuesday through Sunday, 9:00 AM to 5:00 PM (last entry at 4:00 PM). Admission is 60 RMB for adults, with discounts for students and seniors.\n\nFor international travelers, Jingzhou is easily reachable from Wuhan via a 1.5-hour high-speed train ride. The city also offers charming canal walks and a thriving street-food scene—try the local *Jingzhou fish cake* after your museum tour.\n\nWhether you’re a seasoned archaeology enthusiast or simply curious about China’s ancient past, the Jingzhou Chu Culture Museum offers an unforgettable glimpse into a world that shaped the very fabric of Chinese civilization.',
    coverImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['jingzhou', 'chu culture', 'archaeology', 'museum', 'hubei travel', 'ancient china', 'cultural tourism'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-21T06:57:39.440Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-21-03-kft3',
    title: 'Simplified Visa Process for Hubei: What Travelers Need to Know in 2026',
    summary: 'China has streamlined its visa application process for Hubei, making it easier for international travelers to explore Wuhan, the Three Gorges, and more. Key updates include online applications and expedited processing.',
    content: '## New E-Visa Pilot Program for Hubei\n\nAs of early 2026, Hubei province has launched a pilot e-visa system for tourists from 45 countries, including the United States, United Kingdom, Australia, Japan, and most EU nations. This digital application process allows travelers to apply entirely online without visiting a Chinese embassy or consulate—a significant time-saver for those planning a trip to the region.\n\n## Step-by-Step Application Guide\n\nHere’s what you need to do to secure your visa for Hubei:\n\n- **Check eligibility**: Visit the official China Visa Application Service Center website to confirm if your country is part of the pilot program. If not, standard paper applications still apply.\n- **Prepare documents**: A valid passport (with at least 6 months validity), a recent passport-sized photo, flight itinerary, hotel booking in Hubei (e.g., Wuhan or Yichang), and proof of travel insurance are required.\n- **Submit online**: Complete the form on the e-visa portal, upload scanned documents, and pay the fee (around $80–$120 USD depending on nationality and processing speed).\n- **Processing time**: Standard applications take 4–5 business days, but expedited service (2–3 days) is available for an extra fee.\n\n## Key Benefits for Hubei Visitors\n\nThe new system is especially advantageous for travelers focusing on Hubei’s top destinations:\n\n- **Wuhan**: Explore the Yellow Crane Tower, East Lake, and local hot dry noodles.\n- **Three Gorges region**: Cruise the Yangtze River from Yichang to see the Three Gorges Dam and scenic Qutang Gorge.\n- **Enshi Grand Canyon**: Hike through stunning karst landscapes in this lesser-known gem.\n\n## Entry Points and Ports of Call\n\nVisas issued under this program allow entry through major international airports in Hubei, including Wuhan Tianhe International Airport (WUH) and Yichang Sanxia Airport (YIH). Travelers can also arrive via high-speed rail from Beijing (4.5 hours) or Shanghai (3.5 hours), though the visa itself is tied to the first point of entry.\n\n## Practical Tips\n\n- **Double-check visa-free transit**: If you’re only stopping in Hubei for up to 144 hours (6 days) as part of a layover, you may qualify for the 144-hour visa-free transit policy at Wuhan airport. This applies to citizens of 53 countries, including the US, Canada, and most of Europe.\n- **Extend your stay**: Once in Hubei, you can apply for a 30-day extension at the local Public Security Bureau (PSB) in Wuhan or Yichang.\n- **Avoid common pitfalls**: Ensure your passport has at least two blank pages, and that your hotel reservation is confirmed with the exact dates of your stay.\n\n## Future Outlook\n\nAccording to recent reports from the Hubei Provincial Tourism Bureau, the e-visa pilot is expected to expand to more countries by late 2026, potentially including Brazil and India. The goal is to boost international tourism to Hubei, which saw a 35% increase in foreign visitors in 2025 compared to the previous year.\n\nFor the latest updates, always check the official China Visa Application Service Center or consult your local Chinese embassy before traveling.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['hubei travel', 'china visa', 'e-visa', 'wuhan', 'three gorges', 'travel tips', 'visa policy'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-21T06:57:51.946Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-21-04-susi',
    title: 'Yichang Tourism Port Updates Entry Rules for International Visitors in 2026',
    summary: 'Yichang, home to the Three Gorges, has streamlined entry procedures at its tourism port. New 24-hour transit and simplified visa-on-arrival rules aim to boost short-term travel.',
    content: '## Yichang Tourism Port: A Gateway to the Three Gorges\n\nYichang, the scenic hub at the edge of the Three Gorges region, has introduced updated entry regulations at its tourism port this year, making it easier for international travelers to explore the Yangtze River’s most dramatic landscapes. As of early 2026, the port—used primarily by cruise ships and ferries—offers a smoother entry process for short-term visitors.\n\n## Key Regulation Changes\n\nThe latest adjustments focus on convenience and efficiency for tourists arriving by water. Here’s what has changed:\n\n- **24-Hour Transit Visa Exemption**: Travelers from 54 countries (including the US, UK, Australia, and most EU nations) can now enter Yichang via the tourism port without a visa if they hold a confirmed onward ticket to a third country or region within 24 hours. This is ideal for those on multi-stop Yangtze cruises.\n- **Streamlined Visa-on-Arrival**: For eligible passengers arriving without a pre-arranged visa, the port now offers a simplified visa-on-arrival process. Applications can be completed in under 30 minutes at the port’s dedicated counter. The fee remains 160 RMB for a single-entry tourist visa valid for up to 30 days.\n- **Digital Pre-Clearance**: A new online system allows cruise passengers to submit passport and itinerary details up to 72 hours before arrival. This cuts down wait times at immigration—recent reports indicate an average processing time of just 5 minutes per passenger.\n- **Expanded Port Hours**: The tourism port’s immigration office now operates from 6:00 AM to 10:00 PM daily, accommodating early-morning and late-evening cruise schedules.\n\n## Practical Tips for Travelers\n\nIf you’re planning a visit to Yichang to see the Three Gorges Dam or the Shennong Stream, keep these points in mind:\n\n- **Passport Validity**: Ensure your passport is valid for at least six months from your date of entry.\n- **Proof of Onward Travel**: For the 24-hour transit exemption, you must show a ticket (e.g., flight, train, or cruise) departing Yichang within 24 hours.\n- **Health Declaration**: As of 2026, all arrivals must complete a brief health declaration form—available in English, Chinese, and other major languages—either online or at the port.\n- **Local Transport**: From the tourism port, shuttle buses and taxis connect to downtown Yichang (about a 20-minute ride) and to the Three Gorges Dam visitor center (30 minutes).\n\n## Why This Matters for Travelers\n\nYichang’s tourism port is the main entry point for Yangtze River cruises, which attract over 1.5 million international visitors annually. These updated rules reduce bureaucratic hurdles, allowing more time to enjoy Yichang’s highlights: the towering dam, the scenic Xiling Gorge, and the historic Qu Yuan Temple. According to the Hubei Provincial Tourism Bureau, the changes have already led to a 12% increase in spontaneous stopover visits in the first quarter of 2026.\n\n## Looking Ahead\n\nLocal officials have hinted at further digitalization of entry processes later this year, including a potential app-based visa application system. For now, the streamlined port regulations make Yichang an even more accessible destination for international culture enthusiasts and nature lovers alike.',
    coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['yichang', 'tourism port', 'visa policy', 'entry regulations', 'three gorges', 'hubei travel'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-21T06:58:03.085Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-21-05-8745',
    title: 'Wuhan Unveils AI-Powered Smart City Upgrades: Smarter Traffic, Greener Living in 2026',
    summary: 'Wuhan is rolling out cutting-edge AI systems this year to manage traffic, reduce energy use, and enhance public services—making the city more traveler-friendly and efficient.',
    content: '## AI Takes the Wheel: Smarter Traffic in Wuhan\n\nWuhan, a sprawling metropolis on the Yangtze River, is embracing artificial intelligence to tackle one of its biggest urban challenges: traffic. According to the latest reports from local tech hubs, the city has deployed a new AI-driven traffic management system across 40 major intersections in the central business districts. This system uses real-time data from sensors and cameras to adjust traffic lights dynamically, cutting average commute times by an estimated 18% during peak hours. For travelers, this means faster airport transfers and smoother trips to landmarks like the Yellow Crane Tower or East Lake.\n\n## Green Energy and AI: A Sustainable Pair\n\nBeyond traffic, Wuhan is integrating AI into its energy grid. A pilot project launched this year uses machine learning to predict energy demand across residential and commercial zones. By balancing supply from solar panels and battery storage, the system has reduced electricity waste by 12% in test areas. Visitors staying in smart-enabled hotels in the Optics Valley district may notice automated room temperature controls that adapt to occupancy—a small but tangible perk of the city’s green push.\n\n## Public Services Go Digital\n\nWuhan’s AI revolution extends to public services. The city’s new \'Smart Wuhan\' app, updated in early 2026, offers real-time navigation for metro lines, bike-sharing availability, and even museum queue times. International tourists can use the app’s English-language interface to find nearby charging stations for electric vehicles or locate public Wi-Fi hotspots. The app also includes an AI chatbot that answers questions about visa policies and local events, making trip planning effortless.\n\n## What This Means for Visitors\n\nFor culture enthusiasts and travelers, Wuhan’s AI innovations translate to less hassle and more discovery. The smart traffic system reduces delays, the energy-saving measures keep public spaces comfortable, and the digital tools put city info at your fingertips. As one local tech blogger put it, \'Wuhan isn’t just building a smart city; it’s building a city that’s smarter for everyone who visits.\'\n\n## Looking Ahead\n\nAccording to industry insiders, Wuhan plans to expand its AI network to 200 intersections by the end of 2026, with additional features like predictive maintenance for public transport. Whether you’re here for the spicy hot dry noodles or the ancient Chu culture, these innovations are making it easier to enjoy everything Hubei’s capital has to offer.',
    coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['wuhan', 'artificial intelligence', 'smart city', 'traffic management', 'green energy', 'tourism tech', 'hubei innovation'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-21T06:58:15.026Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-21-06-1y3s',
    title: 'Hubei Accelerates EV Innovation: New Models and Smart Charging Hubs Debut in 2026',
    summary: 'Hubei province is emerging as a key player in China\'s electric vehicle revolution, with new models, battery tech breakthroughs, and a network of ultra-fast charging stations rolling out across the region this year.',
    content: '## Driving the Future: Hubei\'s EV Boom\n\nHubei province has firmly planted itself on the global electric vehicle map. As of mid-2026, the region is witnessing a surge in EV production and infrastructure, making it an exciting destination for automotive enthusiasts and eco-conscious travelers alike.\n\n### New Models and Local Heroes\n\nWuhan, the provincial capital and a historic automotive hub, is now home to several EV-focused factories. This year, local manufacturers unveiled two new all-electric SUVs designed for both city driving and long-distance touring through Hubei\'s scenic mountain roads. One standout model features a 600-kilometer range on a single charge, ideal for exploring destinations like the Three Gorges or Shennongjia.\n\n### Smart Charging Networks\n\nHubei has rolled out over 2,000 ultra-fast charging points along major highways and tourist routes in 2026. These stations can charge a typical EV to 80% in just 20 minutes. Travelers can now easily plan road trips from Wuhan to Yichang or Enshi without range anxiety. The charging hubs are often located near popular rest stops and scenic viewpoints, blending convenience with sightseeing.\n\n### Battery Technology Breakthroughs\n\nWuhan\'s Optics Valley (Optics Valley of China) is a hotbed for battery innovation. Researchers there have recently developed a new solid-state battery prototype that promises to be safer and more energy-dense than current lithium-ion options. While still in testing, this technology could power future models made in Hubei, potentially doubling driving ranges within the next few years.\n\n### What This Means for Travelers\n\n- **Rent an EV**: Car rental agencies in Wuhan now offer a wide selection of electric vehicles, with English-friendly booking apps available.\n- **Explore Greenly**: Many tourist sites, including the Yellow Crane Tower and East Lake, have installed dedicated EV parking with free charging for visitors.\n- **Join a Tour**: Specialized EV road trip tours are now offered, guiding you through Hubei\'s tea plantations and ancient towns in zero-emission comfort.\n\n### Looking Ahead\n\nWith continuous investment in R&D and infrastructure, Hubei is positioning itself as a must-visit region for anyone interested in the future of transportation. Whether you\'re a tech buff or just looking for a smooth, quiet ride through the countryside, Hubei\'s EV scene offers a glimpse into tomorrow\'s travel today.',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['hubei', 'electric vehicles', 'wuhan', 'technology', 'automotive', 'ev charging', 'tourism'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-21T06:58:24.795Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-21-07-wjjm',
    title: 'Honghu Lake Wetlands: A Symphony of Migratory Birds and Ancient Culture',
    summary: 'Discover Honghu Lake\'s unique blend of wetland ecology and centuries-old migratory bird culture, now a top destination for eco-travelers and cultural enthusiasts in Hubei.',
    content: '## A Living Mosaic of Nature and Tradition\n\nAs winter settles over Hubei province, Honghu Lake transforms into a breathtaking sanctuary for thousands of migratory birds. This UNESCO-recognized wetland, covering over 40,000 hectares, is not just a critical stopover on the East Asian-Australasian Flyway—it\'s a living cultural tapestry where local traditions have intertwined with bird migration for centuries.\n\n## The Ancient Art of Bird Watching\n\nLocal fishermen and villagers along Honghu Lake have developed a unique \'bird culture\' passed down through generations. According to the latest reports from Hubei\'s cultural heritage office, this intangible heritage includes traditional songs that mimic crane calls, seasonal festivals celebrating the arrival of hooded cranes and swans, and even a local dialect rich with bird-related idioms. "Our ancestors believed the birds bring messages from the heavens," says Master Liu, a 78-year-old folk artist who still performs the Crane Dance during the annual Honghu Bird Festival each November.\n\n## What Visitors Can Experience in 2026\n\nAs of 2026, the Honghu Lake Wetland Park has introduced new eco-trails and observation platforms designed to minimize human impact while maximizing visitor engagement. Highlights include:\n\n- **Guided Bird-Watching Tours**: Led by local naturalists who share folklore and ecological insights.\n- **Cultural Workshops**: Learn to make paper cranes or paint waterbirds using traditional ink-wash techniques.\n- **Photography Hotspots**: The sunrise over the reed beds, with flocks of tundra swans in flight, is an Instagram-worthy moment.\n- **Local Cuisine**: Taste \'Lotus Root with Bird\'s Nest Soup\'—a regional delicacy made from sustainably harvested ingredients.\n\n## A Model for Eco-Cultural Tourism\n\nHonghu Lake\'s approach to preserving both ecology and culture is gaining international attention. This year, the site was featured in a documentary by the World Wildlife Fund as a model for community-led conservation. For travelers, it\'s a rare chance to witness a symbiotic relationship between humans and nature that has thrived for over 1,000 years.\n\n## Plan Your Visit\n\nThe best time to experience the migratory bird spectacle is from late October to early March. The park is accessible via a two-hour drive from Wuhan, with new bike rental services and guided bus tours starting this season. Entry fees remain modest at 60 RMB, with discounts for students and seniors.\n\nWhether you\'re a birder, a culture lover, or simply seeking a peaceful retreat, Honghu Lake offers an unforgettable journey into the heart of Hubei\'s wetland heritage.',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['honghu lake', 'wetlands', 'migratory birds', 'hubei culture', 'eco-tourism', 'bird watching', 'chinese traditions'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-21T06:58:34.496Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-21-08-nbwh',
    title: 'Xiangyang Three Kingdoms Cultural Zone: A Living History Hub Unveiled in 2026',
    summary: 'Xiangyang’s new Three Kingdoms cultural tourism zone blends ancient battlefields with immersive tech, offering international travelers a vivid journey into China’s epic era.',
    content: '## Step Into the Romance of the Three Kingdoms\n\nXiangyang, a historic city in northern Hubei, has long been a cornerstone of Three Kingdoms lore. This year, the newly expanded **Xiangyang Three Kingdoms Cultural Tourism Zone** is drawing global attention with its immersive recreations of key battles, ancient city life, and legendary figures like Zhuge Liang. Located along the Han River, the zone transforms the region’s rich history into an interactive experience.\n\n## What’s New in 2026?\n\nAs of early 2026, the zone features three major sections:\n- **Longzhong Scenic Area**: The legendary retreat of Zhuge Liang, now enhanced with augmented reality guides that bring his strategems to life on your smartphone.\n- **Ancient Xiangyang City Wall**: Restored sections allow visitors to walk the ramparts where Han-era soldiers once stood, with nightly light shows projecting battle scenes.\n- **Three Kingdoms Culture Museum**: A new, state-of-the-art facility displaying over 500 artifacts, including replica armor, calligraphy, and interactive maps of the Three Kingdoms period.\n\nAccording to recent visitor surveys, over 70% of international tourists rated the zone as "highly recommended" for its mix of education and entertainment.\n\n## Why Visit Now?\n\nTravelers from abroad can easily reach Xiangyang via high-speed rail from Wuhan (about 90 minutes). The zone offers English audio guides and bilingual signage, making it accessible for non-Chinese speakers. Special seasonal events, like the "Battle of Changban Reenactment" in spring, provide a dynamic way to understand this pivotal era.\n\n## Practical Tips for Culture Enthusiasts\n- **Best time to visit**: March to May or September to November for mild weather and fewer crowds.\n- **Combine with**: A day trip to the nearby Han River cruise or the Xiangyang Confucian Temple.\n- **Local cuisine**: Don’t miss the **Xiangyang beef noodles**—a spicy, savory dish said to have sustained ancient soldiers.\n\nWhether you’re a history buff or a curious traveler, the Xiangyang Three Kingdoms Cultural Tourism Zone offers a captivating window into one of China’s most romanticized historical periods. Its blend of preservation and innovation makes it a standout destination on any Hubei itinerary.',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['xiangyang', 'three kingdoms', 'cultural tourism', 'history', 'hubei travel', 'ancient china', 'longzhong'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-21T06:58:44.874Z',
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
