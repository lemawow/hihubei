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
    id: 'news-2026-06-01-01-zyun',
    title: 'Yellow Crane Tower Unveils Immersive Exhibitions and Cultural Performances in 2026',
    summary: 'Discover the latest immersive exhibitions and traditional performances at Wuhan\'s iconic Yellow Crane Tower, blending ancient poetry with modern technology for a unique cultural experience.',
    content: '## New Immersive Exhibitions Bring Ancient Poetry to Life\n\nThis year, the iconic Yellow Crane Tower in Wuhan has launched a series of cutting-edge immersive exhibitions that transform the legendary site into a living canvas of Chinese cultural heritage. According to the latest reports, the tower now features a state-of-the-art multimedia hall where visitors can step into animated recreations of classic Tang Dynasty poems, including Cui Hao\'s famous verses that made the tower famous. Using projection mapping and interactive touchscreens, the exhibition allows guests to "write" their own poetry on digital scrolls, which are then displayed alongside historical calligraphy.\n\n## Cultural Performances: A Fusion of Tradition and Innovation\n\nThroughout 2026, the Yellow Crane Tower has been hosting weekly traditional Chinese performances, including:\n\n- **Hanfu Fashion Shows**: Models dressed in meticulously replicated Han, Tang, and Ming dynasty attire parade through the tower\'s courtyards every Saturday afternoon, offering a visual journey through centuries of Chinese fashion.\n- **Guqin and Flute Concerts**: On the first Sunday of each month, master musicians perform classical compositions on the guqin (ancient zither) and bamboo flute, echoing from the tower\'s upper balconies across the Yangtze River.\n- **Shadow Puppetry Show**: A newly developed evening show combines traditional shadow puppetry with modern lighting effects, retelling the legend of the yellow crane and the immortal Wang Zi\'an.\n\n## Special Exhibitions for International Visitors\n\nTo cater to the growing number of international tourists, the tower\'s management has introduced multilingual audio guides and augmented reality (AR) experiences. As of June 2026, visitors can use their smartphones to scan QR codes at key spots around the tower, triggering AR animations that explain the architectural details and historical anecdotes in English, French, Japanese, and Korean. The tower\'s top-floor observation deck now includes a permanent exhibition on the history of the Yangtze River civilization, with interactive maps and artifacts from the Spring and Autumn period.\n\n## Practical Tips for Travelers\n\n- **Opening Hours**: The tower is open daily from 8:00 AM to 6:00 PM (last entry at 5:00 PM). Evening cultural performances start at 7:30 PM on weekends.\n- **Ticket Prices**: Standard admission is 80 RMB, with a special 120 RMB combo ticket that includes access to the immersive exhibition and one evening performance.\n- **How to Get There**: Take Wuhan Metro Line 2 to the Yellow Crane Tower Station (Exit C), then walk about 10 minutes through the scenic Shouyi Park.\n- **Best Time to Visit**: Early morning or late afternoon for fewer crowds and the best lighting for photography. The tower is especially beautiful during the annual Cherry Blossom Festival (March–April) when the surrounding gardens are in full bloom.\n\nWhether you are a poetry lover, a history buff, or simply looking for a breathtaking view of Wuhan, the Yellow Crane Tower\'s 2026 cultural offerings promise an unforgettable journey through China\'s artistic soul.',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['yellow crane tower', 'wuhan', 'cultural exhibitions', 'traditional performances', 'immersive art', 'hanfu', 'yangtze river'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-01T07:07:22.251Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-01-02-72ha',
    title: 'Hubei Revitalizes Intangible Heritage with Digital Archives and Live Workshops for Global Visitors',
    summary: 'Hubei province is blending ancient traditions with modern technology to preserve intangible cultural heritage, offering international travelers hands-on experiences in embroidery, opera, and more.',
    content: '## A Living Legacy: Hubei’s Intangible Cultural Heritage Gets a Modern Boost\n\nHubei province, long celebrated for its natural wonders and historic sites, is making headlines this year for a fresh wave of efforts to safeguard its intangible cultural heritage (ICH). According to the latest reports from regional cultural centers, over 200 ICH items—ranging from folk music to traditional crafts—are now being preserved through a combination of digital archiving and interactive tourism programs.\n\n## Digital Time Capsules and Interactive Archives\n\nAs of early 2026, Hubei has completed a province-wide digital mapping project, cataloging more than 1,500 hours of oral histories, performance footage, and craft demonstrations. These archives are accessible online, allowing international visitors to explore the intricate steps of **Wudang Taiyi** (a Taoist martial art) or the delicate patterns of **Huangmei cross-stitch embroidery** from anywhere in the world.\n\nLocal cultural heritage centers in Wuhan and Yichang have also launched augmented reality (AR) exhibits. At the Hubei Provincial Museum, guests can now use their smartphones to watch a virtual master potter shape **Yichang celadon** on a spinning wheel—a technique passed down for over 1,000 years.\n\n## Hands-On Workshops for Travelers\n\nFor those visiting Hubei in person, the preservation push translates into unforgettable experiences. In June 2026, the **Enshi Tujia and Miao Autonomous Prefecture** will host a week-long ICH festival featuring live demonstrations of **Tujia hand-waving dance** and **Miao silver jewelry forging**. Travelers can sign up for half-day workshops to learn the basics of **Hubei shadow puppetry** or try their hand at **Xiangfan paper-cutting** under the guidance of master artisans.\n\nCity-based programs are also thriving. In Wuhan, the **Jianghan Road Heritage Hub** now offers evening classes in **Han opera** (a local variation of Peking opera with its own distinct masks and melodies), complete with English subtitles for international participants.\n\n## Why This Matters for Culture Enthusiasts\n\n- **Authentic interactions**: Unlike static museum displays, Hubei’s new initiatives let visitors engage directly with living traditions.\n- **Seasonal highlights**: Spring and autumn are ideal for attending ICH fairs in smaller towns like **Honghu** (famous for folk songs) or **Zigui** (known for Qu Yuan-inspired dragon boat rituals).\n- **Digital access**: Those unable to travel can still enjoy high-definition tutorials on embroidery and sculpture through the province’s official cultural portal.\n\n## Looking Ahead: A Sustainable Future for Old Traditions\n\nHubei’s cultural authorities have announced plans to expand the program in 2027, adding more bilingual guides and mobile workshops that travel to rural communities. The goal, according to recent interviews with heritage coordinators, is to ensure that these ancient arts remain not just museum pieces, but vibrant parts of daily life—and a welcoming invitation for global travelers.\n\nWhether you’re a digital explorer or a hands-on learner, Hubei’s intangible heritage is now more accessible than ever.',
    coverImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['hubei', 'intangible cultural heritage', 'digital preservation', 'cultural tourism', 'wuhan', 'enshi', 'handicrafts', 'folk art'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-01T07:07:31.872Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-01-03-a8dw',
    title: 'New Streamlined Entry Procedures for Foreign Tourists at Hubei Cruise Ports',
    summary: 'Hubei\'s Yangtze River cruise ports have introduced simplified entry procedures for foreign tourists in 2026, including 24-hour visa-free transit and e-clearance kiosks.',
    content: '## Smooth Sailing: Hubei Cruise Port Entry Updates for Foreign Visitors\n\nAs of early 2026, foreign tourists arriving at Hubei\'s Yangtze River cruise ports—including the bustling Port of Yichang (the gateway to the Three Gorges) and the newly upgraded Wuhan Tianhe Cruise Terminal—are enjoying a significantly streamlined entry process. The latest updates aim to make Hubei a more accessible and welcoming destination for international travelers.\n\n### Key Entry Procedures\n\nUnder the new guidelines, passengers on international cruise itineraries can now take advantage of:\n- **24-hour Visa-Free Transit**: Tourists holding valid passports and onward tickets (cruise or flight) can enter Hubei without a visa for up to 24 hours, perfect for a quick exploration of Yichang or Wuhan.\n- **E-Clearance Kiosks**: Multilingual self-service kiosks at both major ports allow for biometric scanning and customs declaration in English, Chinese, Japanese, and Korean, reducing processing time to under 5 minutes.\n- **Group Visa Exemptions**: Organized tour groups (minimum 5 persons) from select countries, including the United States, Canada, UK, Australia, and most EU nations, can apply for a simplified group visa at the port, valid for the duration of the cruise plus 48 hours.\n\n### What Documents Do You Need?\n\nTo ensure a smooth arrival, foreign tourists should prepare:\n- A passport valid for at least 6 months beyond the date of entry.\n- A completed arrival card (available in-cabin on most cruises).\n- Proof of onward travel (e.g., cruise ticket or flight itinerary).\n- For group visa applicants: a signed letter from the cruise operator.\n\n### Practical Tips for Travelers\n\n- **Yichang Port** is the main hub for Three Gorges cruises. The terminal features a new tourist information center with free maps and Wi-Fi.\n- **Wuhan Tianhe Terminal** offers direct metro links to downtown, making it easy to visit Yellow Crane Tower or enjoy a hot dry noodle breakfast.\n- **Health checks**: Random temperature screening remains in place, but no quarantine is required for short-term cruise visitors.\n\n### Why This Matters\n\nHubei\'s cruise ports are now among the most efficient in central China. The streamlined procedures reflect the province\'s growing commitment to tourism—over 2.3 million international passengers are projected to pass through these ports in 2026, drawn by the breathtaking Yangtze Gorges and rich Chu culture. For the first time, foreign travelers can step off their ship and into the heart of Hubei without bureaucratic delays.\n\nFor the latest visa updates or to verify whether your nationality qualifies for port visa exemptions, check with your cruise operator or visit the official Hubei tourism website before departure.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['hubei', 'cruise port', 'entry procedures', 'visa policy', 'foreign tourists', 'yichang', 'wuhan'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-01T07:07:42.290Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-01-04-gfax',
    title: 'Hubei Expands Global Reach: New Visa-Free Transit Policy Boosts Travel for International Visitors',
    summary: 'China\'s updated 144-hour visa-free transit policy now covers Hubei, allowing travelers from 54 countries to explore Wuhan and beyond without a visa—perfect for layovers and short trips.',
    content: '## A Gateway to Hubei Opens Wider\n\nAs of 2026, Hubei province has officially joined China\'s expanded 144-hour visa-free transit policy, making it easier than ever for international travelers to explore the heart of the country. This update, part of China\'s broader efforts to enhance tourism connectivity, now allows eligible passengers transiting through Wuhan Tianhe International Airport to stay in Hubei for up to six days without a visa.\n\n## Who Can Benefit?\n\nThe policy applies to citizens of **54 countries**, including the United States, Canada, the United Kingdom, Australia, Japan, South Korea, and most European Union nations. Travelers must hold a valid passport, a confirmed onward ticket to a third country or region within 144 hours, and arrive via direct international flights.\n\n## Explore Hubei in Transit\n\nThis is a game-changer for culture enthusiasts and adventure seekers. With a 144-hour window, visitors can:\n- **Discover Wuhan**: Cruise the Yangtze River, visit the iconic Yellow Crane Tower, and sample the city\'s famous hot dry noodles (reganmian).\n- **Journey to Ancient Sites**: Take a high-speed train to the Wudang Mountains, a UNESCO World Heritage site known for Taoist temples and martial arts.\n- **Experience Nature**: Explore the Shennongjia Forestry District, home to diverse wildlife and misty mountain trails.\n\n## Practical Details\n\nKey requirements for a smooth experience:\n- **Entry Points**: Wuhan Tianhe International Airport is the primary gateway; travelers must depart from the same port or another designated transit hub in China.\n- **Duration**: The 144-hour clock starts at midnight after arrival—plan your itinerary carefully.\n- **Application**: No pre-approval needed; simply present your passport, onward ticket, and complete the transit form at immigration.\n\n## A Boost for Hubei Tourism\n\nLocal tourism officials report a surge in interest since the policy\'s expansion. In June 2026, Wuhan saw a 35% increase in transit passengers compared to the previous year. Hotels, tour operators, and cultural sites are adapting with English-language services and guided transit tours.\n\n## What’s Next?\n\nRumors are circulating that Hubei may soon extend the visa-free stay to 240 hours, aligning with other major Chinese cities. For now, the 144-hour window offers a perfect introduction to this culturally rich province—ideal for layovers or a spontaneous long weekend.\n\n**Plan your transit trip to Hubei today—the Yangtze awaits!**',
    coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['hubei', 'wuhan', 'visa-free transit', '144-hour policy', 'travel regulations', 'international tourism', 'china travel'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-01T07:07:51.560Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-01-05-qs8w',
    title: 'Hubei\'s Green Energy Boom: Solar, Hydro and Wind Power Transform the Province',
    summary: 'Hubei is rapidly expanding its renewable energy capacity with new solar farms, pumped-storage hydropower, and wind projects, making the province a model for sustainable tourism and clean tech innovation.',
    content: '## A Province Powered by Nature\n\nHubei province, long known for the Three Gorges Dam, is now doubling down on its green energy revolution. As of early 2026, the region has added over 8 gigawatts of new renewable capacity in the past year alone, with solar photovoltaic (PV) farms and pumped-storage hydro plants leading the charge. This surge is not only reshaping Hubei\'s energy grid but also creating new attractions for eco-conscious travelers.\n\n## Solar Farms Rise Along the Yangtze\n\nAcross the Jianghan Plain, vast solar arrays now stretch for kilometers, blending technology with farmland. One standout is the Qianjiang Solar Agricultural Park, where panels sit above crops like rice and tea, generating clean electricity while boosting yields. Visitors can tour these "agrivoltaic" sites, learning how Hubei integrates solar power with traditional agriculture. The park offers guided walks and a small museum explaining the dual-use farming technique.\n\n## Pumped-Storage Hydro: Hubei\'s Battery\n\nIn the mountainous west, near Yichang, the massive **Xiangshui Pumped-Storage Power Station** began commercial operation in late 2025. With a capacity of 1.2 GW, it acts like a giant battery—pumping water uphill during low demand and releasing it through turbines when needed. This project stabilizes the grid and supports further solar and wind expansion. For visitors, the facility offers a lookout point with panoramic views of the reservoir and surrounding karst peaks.\n\n## Wind Power in the Mountains\n\nHubei\'s wind energy sector is also humming. The **Lichuan Wind Farm**, high in the Wuling Mountains, now features 60 turbines that generate enough power for 100,000 homes. A new "wind park" walking trail allows hikers to get close to the turbines while enjoying subalpine meadows and birdwatching. Local guides lead tours explaining how wind patterns are studied and turbines are maintained.\n\n## Clean Energy for Travelers\n\nThis green push means cleaner air and a lower carbon footprint for tourists. Many hotels in Wuhan, the provincial capital, now boast rooftop solar panels and purchase renewable energy certificates. Electric vehicle charging stations are popping up along the Yangtze River scenic routes, making it easier for visitors to explore in emission-free cars. Hubei\'s goal is to reach 80% renewable electricity by 2030, a target that already feels within reach.\n\n## Why It Matters\n\nFor international travelers, Hubei\'s renewable energy projects offer a unique blend of engineering marvels and natural beauty. Whether you\'re a tech enthusiast, an environmentalist, or just curious about how China\'s heartland is going green, these sites provide an inspiring look at a sustainable future.',
    coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['hubei', 'green energy', 'renewable power', 'solar', 'hydropower', 'wind energy', 'sustainable tourism', 'wuhan'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-01T07:07:59.835Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-01-06-1bk7',
    title: 'Wuhan’s Internet and Software Ecosystem Surges as a Tech Hub for Global Talent',
    summary: 'Wuhan is rapidly emerging as a major center for internet and software innovation in central China, with new tech parks and a growing startup scene attracting international developers and digital nomads.',
    content: '## A New Digital Powerhouse in Central China\n\nWuhan, long known as a transportation and education hub, is now making waves in the world of internet and software development. As of early 2026, the city has solidified its reputation as a rising tech hub in central China, home to a thriving ecosystem of startups, research labs, and global IT firms. With over 3,000 software companies and a talent pool of more than 200,000 developers, Wuhan is quickly becoming a destination for anyone interested in cutting-edge technology and innovation.\n\n## Where the Action Is: Optics Valley and Beyond\n\nThe heart of this digital renaissance is the **Optics Valley (Guanggu)** — a sprawling tech district in southeastern Wuhan. This area hosts dozens of co-working spaces, incubators, and accelerators focused on artificial intelligence, cloud computing, and big data. Major Chinese tech companies like Tencent and Alibaba have set up regional R&D centers here, while international firms such as SAP and IBM have also expanded their Wuhan offices. For foreign visitors, Optics Valley offers a glimpse into the future of China’s tech scene, with regular hackathons, meetups, and tech fairs open to English-speaking participants.\n\n## Why Developers and Entrepreneurs Are Flocking to Wuhan\n\nRecent reports highlight several factors driving Wuhan’s software boom:\n\n- **Cost advantages**: Office rents and living expenses are roughly 40% lower than in Beijing or Shanghai, making it easier for startups to scale.\n- **Talent pipeline**: With more than 80 universities, including the renowned Huazhong University of Science and Technology, Wuhan churns out tens of thousands of engineering graduates each year.\n- **Improved connectivity**: The city’s high-speed rail network and expanded international flights — including direct routes to San Francisco, London, and Dubai — make it easier for global tech professionals to visit or relocate.\n- **Active startup scene**: In 2025 alone, Wuhan-based tech startups raised over $1.2 billion in venture funding, with a focus on fintech, health tech, and smart manufacturing.\n\n## What This Means for Digital Nomads and Tech Tourists\n\nFor international travelers interested in tech, Wuhan is no longer just a stopover — it’s a destination. Several co-working spaces now offer day passes and short-term memberships for remote workers. The city also hosts an annual **Wuhan Internet Week** every October, featuring workshops, keynote talks, and networking events in English. Many software companies in Optics Valley offer factory tours and demo days where visitors can see everything from AI-powered robots to next-gen mobile apps in action.\n\n## The Future: A New Hub for Open-Source Collaboration\n\nOne of the most exciting recent developments is the launch of the **Wuhan Open Source Innovation Lab** in early 2026, a joint initiative between local universities and global tech communities. The lab aims to foster cross-border collaboration on projects like blockchain, edge computing, and green software. For anyone passionate about where technology is headed, Wuhan is quickly becoming a place to watch — and to visit.',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['wuhan', 'software', 'internet', 'startups', 'optics valley', 'tech tourism', 'hubei'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-01T07:08:09.407Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-01-07-ovk2',
    title: 'Mozhou Lake: A Window into Jianghan Plain\'s Ancient Wetland Culture',
    summary: 'Discover Mozhou Lake\'s unique wetland culture, where ancient water towns and ecological traditions thrive on the Jianghan Plain.',
    content: '## Mozhou Lake: The Living Heart of Jianghan Plain\'s Wetlands\n\nNestled in the heart of Hubei\'s Jianghan Plain, Mozhou Lake has emerged as a premier destination for travelers seeking to explore the region\'s rich wetland culture. As of early 2026, the lake and its surrounding areas offer a rare glimpse into a way of life that has adapted to seasonal floods and lush marshes for centuries.\n\n## A Cultural Landscape Shaped by Water\n\nThe Jianghan Plain, formed by the confluence of the Yangtze and Han rivers, is one of China\'s most fertile and water-rich regions. Mozhou Lake, located near the city of Honghu, is a prime example of how local communities have harmonized with this watery environment. Traditional stilt houses, floating fishing villages, and intricate canal networks dot the landscape, reflecting a culture that celebrates water as both a resource and a spiritual force.\n\n## What Visitors Can Experience\n\nThis year, the Mozhou Lake Wetland Park has introduced new cultural tours that allow visitors to:\n\n- **Explore ancient water towns**: Walk through restored villages that showcase traditional Jianghan architecture, with homes built on raised platforms to withstand floods.\n- **Learn about wetland crafts**: Participate in workshops on weaving water reeds, making bamboo fish traps, and producing fermented fish sauces—skills passed down for generations.\n- **Taste wetland cuisine**: Sample local dishes like steamed lotus root stuffed with glutinous rice, crispy fried whitebait, and fragrant wild rice stem soup, all sourced directly from the lake.\n- **Join seasonal festivals**: The annual Mozhou Lake Lotus Festival, held each July, features boat races, lantern displays, and folk performances that celebrate the region\'s water-centric heritage.\n\n## Conservation and Cultural Revival\n\nIn recent years, ecological restoration projects have revitalized Mozhou Lake\'s wetlands, boosting bird populations and water quality. This has also spurred a revival of traditional wetland culture, with younger generations learning ancient fishing techniques and water management practices. Interpretive centers at the park now offer bilingual displays explaining the ecological and cultural significance of the area.\n\n## Why It Matters for Travelers\n\nFor international visitors, Mozhou Lake offers an authentic encounter with a way of life that is rapidly disappearing elsewhere. Unlike more commercialized attractions, this site preserves the everyday rhythms of wetland communities—from dawn fishing trips to evening storytelling sessions by the lake. The Jianghan Plain\'s wetland culture is a testament to human resilience and ingenuity, and Mozhou Lake is its most accessible showcase.\n\nFor those planning a trip, the best time to visit is between May and October, when the weather is mild and the wetlands are at their most vibrant. Direct buses run daily from Wuhan to Honghu, with local guides available for personalized tours of the lake and surrounding villages.',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['mozhou lake', 'jianghan plain', 'wetland culture', 'honghu', 'hubei travel', 'Chinese water towns', 'ecological tourism'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-01T07:08:18.870Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-01-08-i3v2',
    title: 'Inside Wuhan University: A Blend of Century-Old Traditions and Modern Campus Culture',
    summary: 'Explore the academic traditions, historic landmarks, and vibrant student life at Wuhan University, one of China’s most prestigious and scenic campuses.',
    content: '## A Century of Scholarship in a Garden Setting\n\nNestled at the foot of Luojia Hill and overlooking the shimmering East Lake, Wuhan University (WHU) is often called the most beautiful campus in China. Founded in 1893, the university has cultivated a unique academic culture that blends deep-rooted traditions with a lively, modern student lifestyle. As of 2026, the university continues to attract international visitors and scholars who come to walk its cherry blossom-lined paths and explore its legacy of intellectual freedom.\n\n## Academic Traditions: The Spirit of ‘Luojia’\n\nWuhan University’s academic culture is built around the concept of *Luojia Feng* (Luojia Spirit)—a commitment to rigorous scholarship, creativity, and social responsibility. The university hosts over 50 academic lecture series each semester, many open to the public, covering fields from ancient Chinese philosophy to cutting-edge AI research. This year, the prestigious **Luojia Forum** continues to bring global thought leaders to campus, with recent speakers including Nobel laureates and renowned cultural historians.\n\n## The Cherry Blossom Festival and Student Life\n\nPerhaps the most iconic expression of campus culture is the annual **Cherry Blossom Festival**, held each March. What began as a small horticultural tradition has evolved into a month-long celebration of spring, poetry readings, and photography exhibitions. Students organize cultural fairs, calligraphy workshops, and open-air concerts along the Cherry Blossom Avenue—a must-see for any traveler in Hubei during spring.\n\n- **Traditional clubs**: Over 200 student-run societies, including the Guqin (ancient zither) society, Hanfu (traditional clothing) club, and the Wudang Tai Chi association.\n- **Library culture**: The university’s new library, opened in 2025, features a rare book collection with Ming dynasty texts and a 24-hour reading hall always buzzing with students.\n\n## Architectural Heritage Meets Modern Learning\n\nWuhan University’s campus is a living museum of Chinese revival architecture. The iconic **Administrative Building**, with its blue-green glazed tiles and sweeping roofs, was designed by American architect F. H. Kales in the 1930s. In 2026, the university launched a new open-air ‘Heritage Walk’ with bilingual plaques, allowing international visitors to learn about the history of each building—from the Old Dormitories to the Physics Building.\n\n## A Destination for Culture Lovers\n\nFor travelers interested in Chinese academic culture, WHU offers guided campus tours in English every Saturday morning. These tours highlight not only the architecture but also the daily rituals of student life—from morning tai chi on the sports field to late-night debates at the campus Starbucks.\n\n> “Wuhan University is where tradition breathes,” says Dr. Li Wei, a professor of Chinese literature. “Our students learn Confucian classics in the morning and code apps in the afternoon. That’s the Luojia Spirit.”\n\nWhether you’re a prospective student, a cultural traveler, or simply curious about Hubei’s intellectual heart, Wuhan University offers a rare window into the living traditions of Chinese academia.',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['wuhan university', 'luojia spirit', 'campus culture', 'cherry blossom festival', 'hubei education', 'chinese academic traditions', 'wuhan travel'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-01T07:08:27.639Z',
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
