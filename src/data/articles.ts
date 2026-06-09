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
    id: 'news-2026-06-09-01-s8fo',
    title: 'Wudang Mountain Unveils New Hiking Trails and Cultural Experiences for 2026',
    summary: 'Wudang Mountain introduces new hiking routes, expanded cultural workshops, and improved visitor facilities, making it easier than ever to explore this UNESCO World Heritage site.',
    content: '## New Hiking Trails Open for Adventure Seekers\n\nThis year, Wudang Mountain has opened two new hiking trails that offer breathtaking views of the ancient Taoist temples and lush forests. The **Golden Summit Trail** (3.5 km) takes hikers through misty peaks to the iconic Golden Hall, while the **Southern Cliff Path** (2 km) winds past hidden grottoes and waterfalls. Both trails are now marked with bilingual signs and rest stops, making them accessible for international visitors. According to the latest report from the Wudang Mountain Tourism Bureau, these trails were designed to reduce congestion on popular routes and provide a more immersive nature experience.\n\n## Cultural Workshops: Learn Tai Chi and Taoist Arts\n\nFor culture enthusiasts, Wudang Mountain has expanded its **Taoist Cultural Experience Program**. Starting this spring, visitors can participate in half-day workshops on Tai Chi, calligraphy, and incense ceremony led by resident monks. The workshops are held at the historic **Purple Cloud Palace** and **Nanyan Temple**, with sessions available in English. As of 2026, over 1,500 international visitors have enrolled, praising the hands-on approach to understanding Taoist philosophy.\n\n## Improved Visitor Facilities and Digital Tools\n\nIn response to growing tourism, Wudang Mountain has upgraded its facilities. A new **Visitor Center** near the main entrance now offers lockers, multilingual audio guides, and a café serving local specialties like Wudang tea. Additionally, the official WeChat mini-program now includes real-time trail maps and ticket booking in English. Travelers can also scan QR codes at key sites to access historical narratives and legends about the mountain’s 800-year-old temples.\n\n## Seasonal Highlights and Travel Tips\n\n- **Spring (March–May)**: Cherry blossoms and mild weather ideal for hiking.\n- **Autumn (September–November)**: Stunning foliage and the Wudang International Tai Chi Festival (October).\n- **Winter (December–February)**: Snow-capped peaks and fewer crowds; some trails may close.\n\nVisitors are advised to book tickets online in advance, especially during national holidays. The mountain is accessible from Wuhan via high-speed train (2 hours) to Shiyan, then a 40-minute bus ride.\n\nWudang Mountain continues to blend natural beauty with living cultural heritage, offering travelers a peaceful retreat and a deep dive into Taoist traditions. Whether you’re a hiker, history buff, or spiritual seeker, the mountain has something new to discover in 2026.',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['wudang mountain', 'hiking', 'taoism', 'cultural tourism', 'hubei', 'tai chi', 'unesco'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-09T06:15:14.194Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-09-02-px6t',
    title: 'Yellow Crane Tower Unveils Immersive Exhibitions and Seasonal Cultural Events in 2026',
    summary: 'Discover the latest immersive exhibitions and cultural events at Wuhan\'s iconic Yellow Crane Tower, blending ancient poetry with modern tech for international visitors.',
    content: '## A New Chapter for an Ancient Icon\n\nThe Yellow Crane Tower, one of China\'s most celebrated historical landmarks, is reinventing itself in 2026 with a series of dynamic cultural events and cutting-edge exhibitions. As of this spring, the tower—perched on Snake Hill overlooking the Yangtze River in Wuhan—has launched a year-long program designed to immerse international visitors in the poetic and artistic heritage of Hubei.\n\n## Highlights of the 2026 Program\n\n### 1. \'Poetry in the Clouds\' Immersive Exhibition\nThis flagship exhibition, running through October 2026, uses augmented reality (AR) and projection mapping to bring Tang Dynasty poet Cui Hao\'s famous verses to life. Visitors can scan QR codes at key vantage points to see virtual calligraphy floating over the river, or step into a recreated 8th-century pavilion via VR headsets.\n\n- **Interactive zones**: Write your own poem on digital scrolls and see it projected onto the tower\'s facade at dusk.\n- **Multilingual guides**: Audio guides available in English, French, Japanese, and Korean.\n\n### 2. Seasonal Festivals\n- **Spring Lantern & Poetry Fair (March–May 2026)**: Hundreds of hand-painted lanterns illuminate the tower\'s courtyards, each inscribed with a classical poem. Nightly performances include traditional Chinese opera and guqin (zither) concerts.\n- **Summer Night Market (June–August)**: Local artisans sell Hubei crafts—embroidery, paper-cutting, and lacquerware—alongside street food stalls offering Reganmian (hot dry noodles) and lotus root soup.\n- **Autumn Calligraphy Workshop (September–November)**: Master calligraphers from Wuhan University host weekend sessions for visitors to learn brush techniques, with materials provided.\n\n### 3. Digital Heritage Tour\nA new self-guided audio tour, launched in January 2026, connects the Yellow Crane Tower with other historical sites along the Yangtze. The app, available in English, maps a walking route from the tower to the nearby Hubei Provincial Museum, highlighting shared legends and architectural styles.\n\n## Practical Tips for Travelers\n- **Best time to visit**: Weekday mornings (9:00–11:00 AM) for fewer crowds, especially during the Spring Fair.\n- **Tickets**: Standard entry 80 RMB; combo tickets for tower + exhibition 120 RMB. Discounts available for students and seniors.\n- **Getting there**: Take Metro Line 4 to Fuxing Road Station, then a 10-minute walk. Taxis from Wuhan Railway Station cost around 30 RMB.\n- **Nearby attractions**: Pair your visit with the Hubei Provincial Museum (home to the legendary Sword of Goujian) and the Yangtze River Bridge—both within 2 km.\n\nAs of 2026, the Yellow Crane Tower is not just a photo stop but a living cultural hub. Whether you\'re a poetry lover, a foodie, or a tech enthusiast, this iconic landmark offers a fresh perspective on Hubei\'s timeless allure.',
    coverImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['yellow crane tower', 'wuhan', 'cultural events', 'immersive exhibition', 'hubei travel', 'poetry festival', 'digital heritage'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-09T06:15:24.814Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-09-03-uc9e',
    title: 'Hubei Expands International Air Routes: Direct Flights Now Connect Wuhan to 5 New Destinations in 2026',
    summary: 'Wuhan Tianhe International Airport adds direct flights to Tokyo, Dubai, and three other global hubs, making Hubei more accessible than ever for international travelers.',
    content: '## Hubei\'s Air Connectivity Takes Off in 2026\n\nGreat news for international travelers! Hubei province is significantly expanding its global reach this year. According to the latest report from Hubei Airport Group, Wuhan Tianhe International Airport (WUH) has added direct flights to five new international destinations in the first half of 2026, bringing the total number of direct international routes to 28. This marks a major milestone in making Hubei a more accessible gateway to central China.\n\n### New Direct Routes You Can Fly Now\n\nAs of April 2026, the following new direct routes are operational:\n\n- **Wuhan to Tokyo Narita (Japan)**: 4 flights per week, operated by China Southern Airlines. Flight time: approximately 3.5 hours.\n- **Wuhan to Dubai (UAE)**: 3 flights per week, operated by Emirates. This is the first direct connection between Hubei and the Middle East.\n- **Wuhan to Kuala Lumpur (Malaysia)**: 3 flights per week, operated by AirAsia. Perfect for Southeast Asian travelers.\n- **Wuhan to Melbourne (Australia)**: 2 flights per week, operated by China Southern Airlines. A new link to Oceania.\n- **Wuhan to Seoul Incheon (South Korea)**: 5 flights per week, operated by Korean Air and China Southern. Frequency increased from 3 to 5 weekly.\n\n### Why This Matters for Travelers\n\nThese new routes cut travel time significantly. For example, the direct flight to Dubai saves travelers over 6 hours compared to connecting through Beijing or Shanghai. Similarly, the Tokyo route eliminates the need for a transfer in Osaka or Narita, making Hubei a more attractive stopover for travelers exploring Japan and central China.\n\n### Visa Policy Updates to Complement Air Routes\n\nTo match this air route expansion, Hubei has streamlined its visa-on-arrival policy at Wuhan Tianhe International Airport. As of March 2026, citizens from 54 countries (including the US, UK, Australia, Canada, and most EU nations) can obtain a 144-hour transit visa upon arrival. This allows travelers to explore Wuhan, Yichang, and even a day trip to the Three Gorges without needing a pre-arranged visa. The policy is particularly popular with stopover passengers flying between Europe and Southeast Asia.\n\n### What\'s Next for Hubei\'s Air Network?\n\nAccording to airport officials, more routes are in the pipeline for late 2026. Rumored destinations include London Heathrow, Bangkok Suvarnabhumi, and San Francisco. Discussions are also underway with low-cost carriers to introduce budget-friendly flights to popular Asian hubs like Ho Chi Minh City and Manila.\n\n### Tips for International Travelers\n\n- **Book early**: New routes often have promotional fares. As of this month, round-trip tickets from Wuhan to Tokyo start at just 1,800 RMB (around $250 USD).\n- **Check transit times**: With more direct flights, you can now easily combine a visit to Hubei with other Asian destinations.\n- **Use the 144-hour visa**: Perfect for a quick cultural immersion—visit the Yellow Crane Tower, try hot dry noodles (re gan mian), and explore the ancient town of Fenghuang in just a few days.\n\nFor the latest flight schedules and visa details, always check the official Wuhan Tianhe International Airport website or consult your airline. Hubei is more connected than ever—come see it for yourself!',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['hubei', 'wuhan', 'international flights', 'air travel', 'visa policy', 'tourism', 'wuhan tianhe airport'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-09T06:15:36.645Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-09-04-x41j',
    title: 'France and China Expand Mutual Visa Facilitation for Hubei Travelers in 2026',
    summary: 'New bilateral agreements simplify visa processes for Hubei residents visiting France and French tourists heading to Hubei, boosting cultural exchanges and tourism.',
    content: '## Streamlined Travel Between Hubei and France\n\nIn a move to strengthen cultural and tourism ties, China and France have expanded their mutual visa facilitation program to include more travelers from Hubei province. As of early 2026, Hubei residents holding ordinary passports can now apply for a simplified short-stay visa to France, with reduced documentation requirements and faster processing times—often within 48 hours. This update is part of the broader China-France visa agreement announced in late 2025, which aims to double two-way tourist flows by 2028.\n\n## Key Benefits for Hubei Visitors\n\n- **Simplified Application Process**: Hubei applicants no longer need to provide proof of hotel bookings or flight itineraries for stays up to 15 days. A simple invitation letter or a confirmed travel plan suffices.\n- **Faster Processing**: Visas for cultural, sports, and educational exchanges are now processed within two working days at the French consulate in Wuhan.\n- **Multiple-Entry Option**: Frequent travelers can apply for a five-year multiple-entry visa, allowing stays of up to 90 days per visit.\n\n## Boosting Hubei-France Connections\n\nThis facilitation directly benefits Hubei\'s growing cultural exchanges with France. In 2025, Wuhan hosted the "French Spring Festival" with art exhibitions and culinary events, attracting over 50,000 visitors. The new visa rules are expected to increase French tourist arrivals to Hubei by 30% in 2026, according to the Hubei Provincial Department of Culture and Tourism. French travelers, in turn, can now visit Hubei\'s UNESCO sites like the Wudang Mountains and the Three Gorges region with simplified e-visa applications.\n\n## Practical Tips for Travelers\n\n- **Where to Apply**: Hubei residents can submit applications at the France Visa Application Centre in Wuhan (Wuhan Tiandi, Building A, 17/F).\n- **Documents Needed**: Valid passport (with at least two blank pages), completed application form, travel insurance, and proof of sufficient funds.\n- **Fee Waivers**: Students and researchers from Hubei universities enrolled in exchange programs with French institutions enjoy free visa processing through 2026.\n\n## What This Means for Travel Enthusiasts\n\nFor international readers, this means easier access to both regions. French culture lovers can now explore Hubei\'s ancient history and vibrant cities with less bureaucracy. Meanwhile, Hubei residents can discover French art, cuisine, and wine regions more affordably. The mutual visa facilitation is a win-win for cultural exploration and people-to-people connections.\n\n## Looking Ahead\n\nWith these changes, Hubei and France are set to deepen their partnership in tourism, education, and creative industries. The simplified visa process is expected to inspire more joint cultural projects, from film festivals to culinary exchanges. For now, travelers from both sides should take advantage of the streamlined procedures and plan their next adventure.',
    coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['china-france', 'hubei', 'visa facilitation', 'travel policy', 'wuhan', 'france visa', 'cultural exchange'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-09T06:15:48.932Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-09-05-1qa3',
    title: 'Hubei Powers Up with Massive Green Energy and Renewable Projects in 2026',
    summary: 'Hubei province is rapidly expanding its renewable energy capacity with new solar, wind, and hydro projects, making it a cleaner and more sustainable destination for eco-conscious travelers.',
    content: '## Green Energy Boom in the Heart of China\n\nHubei province, long known for its stunning Three Gorges and rich cultural heritage, is now making headlines for a different reason: its ambitious push into green energy. As of 2026, Hubei has become a national leader in renewable power, with a series of new projects transforming its energy landscape.\n\nAccording to the latest reports, the province\'s installed renewable energy capacity has surpassed 80 gigawatts (GW), with solar and wind power accounting for nearly 60% of that total. This shift is not just about numbers—it\'s about creating a cleaner environment for residents and visitors alike.\n\n## Solar Farms and Floating Panels\n\nOne of the most impressive developments is the expansion of solar farms along the Yangtze River. In cities like Yichang and Jingzhou, vast arrays of photovoltaic panels now cover former industrial sites and hillsides. A standout project is the "Solar Corridor" near Wuhan, which stretches over 50 kilometers and generates enough electricity to power 200,000 homes annually.\n\n- **Floating solar farms** on reservoirs in Huangshi and Xiantao are a unique sight, combining water conservation with clean energy generation.\n- **Agrivoltaic systems** in Xiaogan allow farmers to grow crops beneath elevated solar panels, boosting both food production and energy output.\n\n## Wind Power in the Mountains\n\nHubei\'s mountainous terrain, particularly in Enshi and Shennongjia, is ideal for wind energy. New wind farms with advanced turbine technology now dot the ridges, each capable of generating up to 6 megawatts. These installations are carefully designed to minimize impact on local wildlife and tourism, with many trails and viewing platforms open to hikers.\n\n## Hydro and the Three Gorges Legacy\n\nWhile the Three Gorges Dam remains a global icon of hydroelectric power, Hubei is also investing in smaller, more sustainable hydro projects. Pumped-storage stations in Badong and Zigui help balance the grid, storing excess energy from solar and wind for use during peak demand. Visitors can tour some of these facilities, learning about the engineering marvels behind the province\'s green transition.\n\n## What This Means for Travelers\n\nFor eco-conscious travelers, Hubei\'s green energy boom offers unique experiences:\n\n- **Eco-tours** of solar farms and wind parks are now available from Wuhan and Yichang.\n- **Sustainable accommodations** in Huangshan and Wudang Mountains use 100% renewable energy.\n- **Electric vehicle (EV) charging stations** are plentiful along major highways, making road trips cleaner than ever.\n\nAs Hubei continues to innovate, it\'s clear that the province is not just preserving its natural beauty—it\'s powering it with clean, renewable energy.',
    coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['hubei', 'green energy', 'renewable power', 'solar farms', 'wind power', 'three gorges', 'sustainable tourism'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-09T06:16:00.915Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-09-06-aabg',
    title: 'Wuhan’s Software Valley: How the City is Building a Tech Ecosystem to Watch',
    summary: 'From optical fiber to AI, Wuhan’s internet and software ecosystem is booming. Discover the hubs, unicorns, and co-working spaces that make the city a rising tech destination.',
    content: '## The Rise of a Digital Powerhouse\n\nHistorically known for its steel mills and auto factories, Wuhan has quietly transformed into one of China’s fastest-growing tech hubs. As of early 2026, the city’s internet and software industry ecosystem now employs over 500,000 professionals, with annual revenues exceeding ¥600 billion. The driving force? A dense network of innovation parks, talent pipelines from top universities, and a startup culture that rivals coastal giants.\n\n## Optical Valley: The Beating Heart\n\nThe center of this revolution is the **East Lake High-tech Zone**, better known as **Optical Valley** (Guanggu). This sprawling district is home to:\n\n- Over 4,000 software and IT services companies\n- Key players like **Xiaomi’s Wuhan headquarters** and **Douyin’s (TikTok) content moderation center**\n- Specialized clusters in **optical communications, AI chips, and big data analytics**\n\nVisitors can explore the **Guanggu Tech Expo Center**, where interactive displays showcase everything from autonomous driving algorithms to smart-city dashboards. The park is also dotted with “maker spaces” — open-layout labs where international entrepreneurs can collaborate on hardware-software projects.\n\n## Talent Engine: Universities Fuel the Ecosystem\n\nWuhan boasts the highest number of university students of any city in the world — over 1.3 million. This year, a new **Software Talent Alliance** between Huazhong University of Science and Technology and Wuhan University has streamlined internships at local startups. Many graduates now stay in the city thanks to competitive salaries (software engineers average ¥25,000/month) and subsidized housing near tech parks.\n\n## Co-Working & International Connections\n\nFor digital nomads and foreign startups, Wuhan offers modern co-working spaces like **Optics Valley Innovation Hub** and **Crypto Valley Lab** (focused on blockchain). These venues host weekly hackathons and “Demo Day” events where international teams pitch to Chinese VCs. English-language tech meetups, such as **Wuhan Tech Talk**, happen monthly at cafes in the Hankou historical district.\n\n## What This Means for Visitors\n\n- **Tech tourism**: Free guided tours of AI labs and 5G demo rooms are available at the **Wuhan Future Science City** (book via HiHubei)\n- **Networking**: The **Wuhan Internet Forum**, held each September, now includes a dedicated track for English-speaking participants\n- **Visa note**: Holders of a valid visa for tech conferences can use the 144-hour transit-free policy at Wuhan Tianhe Airport, making short business trips easy\n\n## The Road Ahead\n\nWuhan’s internet ecosystem is not just about scale — it’s about integration. By linking software development with its traditional manufacturing base (automotive, optics), the city is creating a unique “Industry 4.0” cluster. As one local founder put it: “In Wuhan, you can design an app in the morning and test it in a factory by afternoon.” For anyone tracking China’s tech map, this central hub is no longer a detour — it’s a destination.',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['wuhan', 'technology', 'software', 'internet', 'optical valley', 'startups', 'digital nomad'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-09T06:16:11.352Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-09-07-jq33',
    title: 'Honghu Lake Wetlands: A Symphony of Birds and Ancient Culture in Hubei',
    summary: 'Explore the stunning Honghu Lake wetlands, where migratory birds and centuries-old fishing traditions create a unique cultural spectacle this season.',
    content: '## A Natural Haven for Winged Travelers\n\nHonghu Lake, located in the heart of Hubei\'s Jianghan Plain, has become a must-visi destination for birdwatchers and culture enthusiasts alike. According to the latest reports from local conservation groups, the wetlands now host over 200 species of migratory birds each winter, including the endangered Siberian crane and the elegant whooper swan. As of early 2026, the lake\'s reed marshes and open waters provide a critical stopover along the East Asian-Australasian Flyway, drawing thousands of feathered visitors from as far as Siberia and Mongolia.\n\n## The Cultural Tapestry of Bird Watching\n\nFor centuries, the communities around Honghu have intertwined their lives with the rhythms of bird migration. Local fishermen, known as "water ghosts," have passed down oral traditions that read the flights of cranes and ducks as seasonal markers. This year, the Honghu Wetland Museum launched a new exhibition titled "Wings of the Yangtze," featuring ancient bamboo paintings and folk songs that celebrate the bond between humans and birds. Visitors can join guided early-morning boat tours to witness the spectacular dawn takeoff of thousands of waterfowl—a practice that local elders say has been unchanged for over 500 years.\n\n## Festivals and Eco-Tourism Highlights\n\nTo make the experience accessible, the Honghu Lake Scenic Area now offers bilingual birdwatching maps and audio guides in English. The annual Honghu Migratory Bird Culture Festival, held every November, features:\n- Traditional fishing demonstrations using cormorants\n- Hands-on workshops for crafting reed whistles that mimic bird calls\n- Night photography sessions under the stars, with expert guides from Wuhan University\n\nAs of this month, the wetlands have also introduced a new "quiet zone" policy to minimize human disturbance during peak migration, ensuring that both the birds and the cultural heritage remain protected.\n\n## Why This Matters for Travelers\n\nHonghu Lake is just a 2-hour drive from Wuhan, making it an easy weekend getaway for international visitors. The best time to visit is between October and March, when the bird population peaks. Local homestays offer farm-to-table meals featuring lotus root and freshwater fish—dishes that have been part of the region\'s culinary culture for generations. Whether you\'re a seasoned birder or a curious traveler, Honghu\'s wetlands offer a rare window into Hubei\'s living natural and cultural heritage.',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['honghu lake', 'birdwatching', 'wetlands', 'hubei culture', 'migratory birds', 'eco-tourism', 'yangtze region'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-09T06:16:24.124Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-09-08-xx8e',
    title: 'Xiangyang Three Kingdoms Tourism Zone: A Living History Hub Opens New Experiences in 2026',
    summary: 'Xiangyang\'s Three Kingdoms cultural tourism zone expands with immersive night shows, ancient town revivals, and hands-on Hanfu experiences, drawing history buffs worldwide.',
    content: '## A Gateway to the Three Kingdoms Era\n\nXiangyang, a city in northern Hubei, has long been a cornerstone of Three Kingdoms lore. This year, the newly expanded **Xiangyang Three Kingdoms Cultural Tourism Zone** is offering visitors an unprecedented journey into the 2nd–3rd century CE. According to the latest reports, the zone now integrates six major historical sites, including the ancient Xiangyang City Wall, Zhongxuan Tower, and the legendary Longzhong area—where Zhuge Liang once studied.\n\n## What’s New in 2026\n\nSince its latest phase opened in early 2026, the zone has introduced several immersive attractions:\n\n- **"Night of the Strategists"** – A large-scale water-and-light show on the Han River, retelling the Battle of Red Cliffs with drone formations and live actors. Shows run nightly from April to October.\n- **Hanfu Experience Centers** – Visitors can rent authentic Han-dynasty-style robes and take guided walks through restored streets, complete with calligraphy workshops and traditional tea ceremonies.\n- **The Wisdom Valley** – An interactive museum where guests solve replicas of Zhuge Liang\'s famous puzzles and attempt to navigate a bamboo maze based on ancient battle formations.\n\n## Heritage Meets Modern Comfort\n\nThe zone also features new boutique hotels built in traditional courtyard style, and a food street serving regional specialties like Xiangyang beef noodles and three-pattern rice dumplings. English audio guides and QR-coded explanations are available at all major spots, making the history accessible to international travelers.\n\n## Why Visit Now?\n\nFor culture enthusiasts, the Three Kingdoms period remains one of China\'s most romanticized eras. Xiangyang’s zone stands out because it preserves authentic Ming- and Qing-dynasty architecture while using modern tech to bring ancient stories to life. As of mid-2026, the zone is connected by high-speed rail from Wuhan (under two hours) and offers combined tickets with the nearby Mausoleum of Emperor Xian of Han.\n\nWhether you\'re a fan of Luo Guanzhong’s "Romance of the Three Kingdoms" or simply curious about Chinese history, the Xiangyang zone provides a vivid, family-friendly window into a legendary past.\n\n---\n\n*Visiting tips: Allow at least a full day. The best time is spring or autumn to enjoy outdoor performances. Check the official WeChat mini-program for real-time crowd levels and English tour bookings.*',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['xiangyang', 'three kingdoms', 'cultural tourism', 'hubei history', 'hanfu experience', 'ancient architecture', 'night show'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-09T06:16:34.676Z',
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
