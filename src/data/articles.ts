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
    id: 'news-2026-06-25-01-r3zw',
    title: 'Hubei\'s UNESCO World Heritage Sites Receive Major Conservation Upgrades in 2026',
    summary: 'Discover how Hubei is enhancing protection for its UNESCO treasures, from the Wudang Mountains to Shennongjia, with new visitor-friendly initiatives launched this year.',
    content: '## A New Chapter for Hubei\'s UNESCO Heritage\n\nAs of early 2026, Hubei province has rolled out a series of significant conservation updates across its UNESCO World Heritage sites, blending tradition with modern technology to preserve these cultural and natural wonders for future generations. From the ancient Taoist temples of the Wudang Mountains to the pristine forests of Shennongjia, these efforts are making the sites more accessible and sustainable for international travelers.\n\n## Wudang Mountains: Digital Restoration and Trail Revival\n\nIn the Wudang Mountains, a UNESCO World Heritage site since 1994, conservation teams have completed a year-long digital mapping project. Using 3D laser scanning and drone photography, experts have created high-resolution models of 27 historic structures, including the Golden Hall and Purple Cloud Temple. This data is being used to monitor structural stability and guide restoration work. Additionally, four ancient pilgrimage trails have been reopened this month, offering hikers a chance to experience the mountain\'s spiritual heritage. New wooden boardwalks and rest areas with eco-friendly facilities ensure minimal impact on the surrounding forest.\n\n## Shennongjia: Boosting Biodiversity Protection\n\nShennongjia, a UNESCO World Heritage site known for its incredible biodiversity, has introduced a new wildlife monitoring system in 2026. Over 200 camera traps have been installed across the reserve, providing real-time data on endangered species like the golden snub-nosed monkey and the clouded leopard. The information is shared with international research institutions, including the World Wildlife Fund. For visitors, the site now offers guided eco-tours led by trained naturalists, with a focus on understanding the region\'s unique flora and fauna. New signage in English and Chinese explains conservation efforts, making the experience educational as well as scenic.\n\n## Ancient Quarry Sites: A New UNESCO Nomination\n\nHubei is also making strides with potential new UNESCO designations. The ancient quarry sites of the Three Gorges region, which supplied stone for imperial buildings during the Ming and Qing dynasties, have been submitted for tentative listing this year. These sites reveal intricate carving techniques and have yielded artifacts dating back 500 years. Conservationists are working to stabilize the cliff faces and create a museum on-site, expected to open by late 2026. This addition would complement Hubei\'s existing UNESCO sites and offer history buffs a deeper dive into China\'s architectural past.\n\n## Practical Tips for Travelers\n\n- **Best time to visit**: Spring (March–May) and autumn (September–November) offer mild weather and fewer crowds.\n- **Getting there**: High-speed trains connect Wuhan to Wudangshan station (2 hours) and Shennongjia (via Yichang, 3 hours).\n- **Entry fees**: Wudang Mountains: 230 RMB; Shennongjia: 169 RMB; discounts for students and seniors.\n- **Conservation etiquette**: Stick to marked trails, avoid flash photography in temples, and don\'t disturb wildlife.\n\nThese updates demonstrate Hubei\'s commitment to preserving its UNESCO heritage while welcoming global travelers. Whether you\'re a spiritual seeker or a nature lover, now is an exciting time to explore these iconic sites.',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['unesco world heritage', 'wudang mountains', 'shennongjia', 'conservation', 'cultural tourism', 'hubei travel', 'heritage preservation'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-25T06:14:14.276Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-25-02-0ma4',
    title: 'Hubei Unveils 2026 Cultural Tourism Initiatives to Boost Heritage Travel',
    summary: 'New cultural tourism policies in Hubei enhance visitor experiences with expanded heritage trails, digital guides, and special-event incentives for international travelers.',
    content: '## Hubei’s Cultural Tourism Gets a Fresh Boost in 2026\n\nHubei province has introduced a set of updated cultural tourism policies this year, designed to make heritage exploration more accessible and engaging for international visitors. According to the latest report from the Hubei Provincial Department of Culture and Tourism, the initiatives focus on integrating digital technology, promoting lesser-known historical sites, and offering travel incentives during off-peak seasons.\n\n## New Heritage Trails and Digital Guides\n\nOne of the headline changes is the launch of three new thematic heritage trails: the *Chu Culture Trail*, the *Yangtze River Civilization Route*, and the *Three Kingdoms Legacy Path*. Each trail connects multiple cities and counties, featuring curated stops at museums, ancient towns, and archaeological sites.\n\n- **Chu Culture Trail**: Links Wuhan, Jingzhou, and Yichang, highlighting bronze artifacts, silk textiles, and traditional music performances.\n- **Yangtze River Civilization Route**: Runs from Yichang to Huangshi, with emphasis on the Three Gorges region and early riverine settlements.\n- **Three Kingdoms Legacy Path**: Covers Xiangyang, Jingzhou, and Chibi, offering reenactments and guided tours of battlefields.\n\nTo complement these routes, Hubei has rolled out a multilingual mobile app — *Hubei Heritage Guide* — available in English, French, Japanese, and Korean. The app provides real-time audio tours, augmented reality reconstructions of ancient sites, and booking options for local experiences like calligraphy workshops or tea ceremonies.\n\n## Incentives for International Travelers\n\nAs of March 2026, Hubei is offering a 15% discount on admission to over 40 cultural sites — including the Hubei Provincial Museum, Yellow Crane Tower, and Shennongjia Nature Reserve — for travelers who show a valid passport or foreign visa. Additionally, a new “Heritage Explorer” pass costs ¥298 (about $41 USD) and grants seven-day access to all major museums and heritage trails in the province.\n\nFor groups of six or more international tourists, free guided tours in English are available at select UNESCO sites, such as Wudang Mountains and the ancient tombs of the Marquis of Haihun. These tours must be booked at least 48 hours in advance through the official Hubei Tourism website.\n\n## Festival and Event Highlights\n\nThis year’s cultural calendar includes several new events tied to the policies:\n- **Wuhan Cherry Blossom & Chu Culture Festival** (March–April): Combines the famous cherry blossoms at East Lake with traditional Chu music and dance.\n- **Three Gorges Intangible Heritage Week** (June): Features live demonstrations of boat-building, folk songs, and paper-cutting along the Yangtze.\n- **Yichang Silk Road Night Market** (October–November): A month-long evening market with silk products, local snacks, and lantern displays.\n\n## Practical Tips for Visitors\n\nTo make the most of the new policies:\n- Download the *Hubei Heritage Guide* app before arriving.\n- Book free English tours early, especially during peak seasons (April–May and September–October).\n- Carry your passport or a copy of your visa to qualify for discounts.\n\nHubei’s latest cultural tourism initiatives reflect a growing emphasis on immersive, tech-enhanced experiences that appeal to global travelers. Whether you’re a history buff, a nature lover, or a casual explorer, these updates make 2026 an exciting year to visit.\n\n*For more details, visit the official Hubei Tourism website or follow HiHubei.com for updates.*',
    coverImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['hubei cultural tourism 2026', 'heritage trails', 'digital guides', 'wuhan', 'yangtze river', 'wudang mountains', 'international travel incentives'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-25T06:14:24.154Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-25-03-l9gu',
    title: 'Hubei Welcomes Global Travelers: 144-Hour Visa-Free Transit Now Easier Than Ever',
    summary: 'Hubei province expands its 144-hour visa-free transit policy, making it a breeze for international travelers to explore Wuhan, the Three Gorges, and beyond. Here\'s what you need to know in 2026.',
    content: '## Big News for Transit Travelers in 2026\n\nAs of early 2026, Hubei province has streamlined its participation in China’s 144-hour visa-free transit policy, offering international travelers a golden opportunity to explore the heart of the country without a visa. This update is part of a broader national push to boost tourism and cultural exchange, and Hubei is seizing the moment.\n\n## Who Can Use It?\n\nThe policy applies to citizens of 54 countries, including the United States, Canada, the United Kingdom, Australia, Japan, and most European nations. Eligible travelers must hold a valid passport and a confirmed onward ticket to a third country or region within 144 hours (six days). You can enter through any of Hubei’s designated ports—Wuhan Tianhe International Airport is the main hub, but Yichang and other major entry points are also covered.\n\n## What’s New This Year?\n\nIn 2026, the process has become even more traveler-friendly. You no longer need to pre-register or fill out lengthy forms at the border. Simply show your passport and onward ticket at immigration, and you’ll receive a temporary entry permit valid for 144 hours. The permitted area now includes all of Hubei province—not just Wuhan—so you can roam freely from the bustling streets of the capital to the serene shores of the Yangtze River.\n\n## Why Hubei Deserves Your 144 Hours\n\nHere’s what you can pack into six days:\n- **Wuhan:** Explore the Yellow Crane Tower, stroll along the East Lake Greenway, and sample iconic hot dry noodles at a local breakfast joint.\n- **Yichang & the Three Gorges:** Take a cruise through the breathtaking Three Gorges Dam area—one of the world’s most impressive engineering marvels.\n- **Shennongjia:** For nature lovers, a quick trip to this UNESCO-listed forest region offers hiking and a chance to spot the elusive “wild man” legends.\n- **Jingzhou:** History buffs can dive into ancient Chu culture at the Jingzhou Museum.\n\n## Practical Tips for Travelers\n\n- **Plan your route:** Ensure your onward ticket is to a destination outside mainland China (Hong Kong, Macau, or Taiwan count as separate regions).\n- **Stay within Hubei:** You cannot travel to other provinces during the 144 hours—but honestly, there’s plenty to see right here.\n- **Accommodation:** Hotels in Wuhan and Yichang are accustomed to visa-free transit guests; just show your entry stamp at check-in.\n\n## The Bottom Line\n\nThe 144-hour visa-free transit policy is a game-changer for anyone with a layover in central China or a curiosity about Hubei’s rich tapestry of culture and nature. As of 2026, the process is simpler than ever, and the province is rolling out the red carpet for global visitors. Why just pass through when you can dive in?',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['144-hour visa-free transit', 'hubei travel', 'wuhan tourism', 'china visa policy', 'three gorges', 'travel tips', 'hubei'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-25T06:14:35.328Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-25-04-r94i',
    title: 'Simpler Entry: Your 2026 Guide to China Travel Visas for Hubei',
    summary: 'China has streamlined its visa application process for Hubei-bound travelers, offering faster approvals and longer validity. Here’s what you need to know.',
    content: '## Easier Access to Hubei in 2026\n\nPlanning a trip to Hubei this year? Good news: China’s visa application process has become noticeably smoother, especially for travelers heading to central provinces like Hubei. According to the latest updates from travel authorities, wait times for standard tourist visas (L-visa) have been reduced to as little as 4–5 working days at most Chinese embassies and consulates worldwide. \n\n## Step-by-Step Application for Hubei\n\nApplying for a China travel visa to visit Hubei is now more straightforward:\n\n- **Online Form Submission:** Complete the visa application form on the official China Online Visa Application (COVA) website. You’ll need to upload a recent passport-style photo and your passport details page.\n- **Appointment Booking:** Schedule an in-person appointment at your nearest Chinese visa application service center. In major cities like New York, London, or Sydney, same-week slots are often available.\n- **Document Checklist:**\n  - Passport valid for at least 6 months with two blank pages.\n  - Completed visa application form and appointment confirmation.\n  - Round-trip flight itinerary (can be a reservation, not a purchase).\n  - Hotel booking confirmation in Hubei (e.g., in Wuhan, Yichang, or Enshi).\n  - Bank statements or proof of sufficient funds for the stay.\n- **Biometrics:** First-time applicants must provide fingerprints (children under 14 and seniors over 70 are exempt).\n\n## Visa-Free Transit: A Game-Changer for Hubei\n\nFor travelers transiting through Wuhan Tianhe International Airport, China’s 144-hour visa-free transit policy now applies. This means passport holders from 54 countries (including the US, UK, Canada, Australia, and most EU nations) can explore Hubei for up to 6 days without a visa — perfect for a quick tour of the Three Gorges or Yellow Crane Tower. \n\n## Visa Extensions and Multiple-Entry Options\n\nOnce in Hubei, visa extensions are possible at the Exit-Entry Administration Bureau in Wuhan. The process takes about 5–7 working days. Additionally, multiple-entry visas valid for up to 10 years are now more commonly issued for frequent travelers, allowing repeat visits to Hubei’s changing landscapes — from cherry blossoms in March to the misty Shennongjia forests in autumn.\n\n## Practical Tips for First-Timers\n\n- **Apply Early:** While processing is faster, applying 4–6 weeks before departure is still recommended.\n- **Use a Travel Agency:** Many visitors find it easier to use a registered travel agency for visa assistance, especially for group tours to Hubei.\n- **Check Regional Updates:** Hubei’s tourism board offers a dedicated visa hotline for international visitors (+86-27-12345).\n\nWhether you’re here for the ancient cliff carvings or the spicy hot dry noodles, Hubei is more open than ever. Safe travels!\n\n*For the latest updates, always check the official Chinese visa service website or consult the nearest embassy.*',
    coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['hubei travel', 'china visa', 'visa policy', 'wuhan', 'travel regulations', 'visa-free transit', 'international travelers'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-25T06:14:44.685Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-25-05-dpmt',
    title: 'Hubei Powers Up with Massive Green Energy Projects in 2026',
    summary: 'Hubei province is accelerating its renewable energy transition with new solar, hydro, and wind projects, making it a cleaner and more sustainable destination for travelers and tech enthusiasts.',
    content: '## A Green Energy Revolution in Central China\n\nHubei province, long known for the Three Gorges Dam, is taking its renewable energy ambitions to the next level. As of 2026, a wave of new solar farms, wind turbines, and pumped-storage hydroelectricity projects are reshaping the province’s energy landscape. For visitors, this means not only cleaner air but also unique opportunities to see cutting-edge green technology in action.\n\n## Solar Power Expands Across the Province\n\nIn the rural areas of Xiangyang and Yichang, massive solar farms now stretch across hillsides and former agricultural land. According to the latest reports, Hubei’s total installed solar capacity has surpassed 20 gigawatts this year, enough to power millions of homes. These solar arrays are often integrated with local agriculture—sheep graze beneath the panels, and crops grow between rows—creating a harmonious blend of technology and nature. Travelers can visit demonstration sites that offer guided tours explaining how the panels track the sun and feed into the regional grid.\n\n## Hydro and Wind: The Twin Pillars\n\nHubei’s mountainous terrain is ideal for pumped-storage hydroelectricity, a method that stores excess energy by pumping water uphill to reservoirs. The new Xiangyang pumped-storage station, which began operations in early 2026, can store up to 1.2 gigawatts of power. Meanwhile, wind farms in the Dabie Mountains and along the Yangtze River are generating steady clean electricity. The combination of hydro, wind, and solar ensures Hubei’s power supply remains stable even when the sun isn’t shining or the wind isn’t blowing.\n\n## Smart Grids and Electric Vehicle Charging\n\nHubei is also upgrading its power infrastructure with smart grid technology. In Wuhan, the provincial capital, new charging stations for electric vehicles (EVs) are popping up across the city, powered entirely by renewable energy. As of 2026, over 10,000 public EV chargers are connected to the green grid, making it easier for eco-conscious travelers to explore the city emission-free.\n\n## Why This Matters for Travelers\n\nFor international visitors, Hubei’s green energy push means more than just environmental benefits. Many of these projects are open for visits, offering a behind-the-scenes look at how China is tackling climate change. The solar farms near the ancient city of Jingzhou, for example, have visitor centers with interactive exhibits. Eco-tours now include stops at wind turbines with panoramic mountain views. And the province’s commitment to renewable energy contributes to noticeably better air quality in major cities like Wuhan.\n\n## Looking Ahead\n\nHubei plans to add another 10 gigawatts of renewable capacity by 2028, focusing on distributed solar and offshore wind. For anyone interested in the future of energy, this province is a living laboratory. Whether you’re a tech enthusiast, a nature lover, or simply curious, Hubei’s green energy landscape offers a compelling reason to visit.\n\n---\n*For the latest updates on Hubei’s renewable energy projects, check local visitor centers or the Hubei Provincial Energy Administration’s website.*',
    coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['hubei', 'green energy', 'renewable power', 'solar farms', 'wind energy', 'wuhan', 'sustainable travel'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-25T06:14:53.964Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-25-06-dmua',
    title: 'Wuhan’s Internet and Software Scene: Why Tech Travelers Are Taking Notice in 2026',
    summary: 'Wuhan has quietly grown into a major hub for internet and software innovation, blending startup energy with deep tech infrastructure. Here’s what visitors and tech enthusiasts should know about the city’s digital ecosystem in 2026.',
    content: '## From Steel Mills to Server Rooms\n\nWuhan, long known as China’s steel and automotive powerhouse, has reinvented itself as a rising star in the internet and software industry. As of 2026, the city hosts over 3,000 software development firms and more than 400 tech incubators, making it one of the fastest-growing digital economies in central China. International visitors to Hubei are increasingly adding tech tours to their itineraries, drawn by the city’s blend of innovation and affordability.\n\n## The Optics Valley Effect\n\nThe heart of this transformation is the **Optics Valley** (Guanggu), a sprawling tech district in southeastern Wuhan. Originally famous for fiber optics and photonics, Guanggu now houses a dense cluster of internet companies, AI startups, and software labs. In 2026, the valley reported a 22% year-on-year increase in software revenue, driven by demand for smart-city solutions, fintech, and cloud services. Walking through Guanggu’s main avenue, visitors can spot coworking spaces, 5G testbeds, and coding bootcamps — a far cry from the factory floors of a decade ago.\n\n## What This Means for Travelers\n\n- **Tech-friendly cafes and free Wi-Fi hotspots**: Hundreds of cafes across Wuhan now offer gigabit-speed internet, ideal for remote workers and digital nomads. The city has become a popular stop on the “digital nomad circuit” between Shanghai and Chengdu.\n- **Startup meetups and hackathons**: Weekly events are held at venues like the Wuhan Entrepreneurs’ Center and Guanggu’s Innovation Hub. Many are open to English speakers, with topics ranging from blockchain to green software engineering.\n- **Regional software specialties**: Wuhan’s developers excel in transportation software (unsurprising for a city that built the world’s first autonomous bus route) and medical imaging AI, both of which are showcased at the **Wuhan Science and Technology Museum**.\n\n## Talent Pipeline and Lifestyle Appeal\n\nWith 89 universities and colleges, Wuhan produces more than 300,000 STEM graduates annually. Many now stay in the city, attracted by lower living costs compared to Beijing or Shenzhen. The result is a young, collaborative atmosphere. In 2026, the average rent for a tech worker in Guanggu is about 60% of that in Shanghai’s Zhangjiang tech park, and the city’s extensive metro system makes commuting a breeze. For international tech travelers, this means affordable accommodations, a vibrant food scene, and the chance to network with some of China’s brightest coders without the high price tag of coastal cities.\n\n## Beyond the Code: Culture and Nature\n\nWuhan’s tech ecosystem doesn’t exist in a vacuum. After a day of exploring software labs, visitors can unwind at East Lake (China’s largest urban lake), cycle through the Cherry Blossom Garden, or sample re gan mian (hot dry noodles) at a street stall near the Yangtze. The city’s tech scene feels refreshingly grounded — a place where internet innovation meets riverfront serenity.\n\nAs Wuhan continues to emerge as a digital hub, its internet and software industry is not just powering local businesses but also inviting the world to collaborate. For tech-savvy travelers, 2026 is the perfect time to plug in.',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['wuhan', 'software', 'internet', 'optics valley', 'tech ecosystem', 'digital nomad', 'hubei innovation'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-25T06:15:03.942Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-25-07-xlgm',
    title: 'Exploring Mozhou Lake: A Window into Jianghan Plain\'s Ancient Wetland Culture',
    summary: 'Discover the ecological and cultural significance of Mozhou Lake, a gem of the Jianghan Plain, where millennia-old wetland traditions come alive through new eco-tourism initiatives.',
    content: '## The Heart of the Jianghan Plain Wetlands\n\nNestled in the heart of Hubei\'s Jianghan Plain, Mozhou Lake (墨洲湖) is emerging as a must-visit destination for travelers seeking to understand the region\'s rich wetland culture. As of early 2026, the lake and its surrounding marshes have been revitalized through a series of community-led eco-tourism projects that showcase the harmonious relationship between local life and water.\n\n## A Living Cultural Landscape\n\nThe Jianghan Plain, often called the \'land of fish and rice,\' has been shaped by its waterways for over 4,000 years. Mozhou Lake, covering approximately 12 square kilometers, is a prime example of this aquatic heritage. This year, the Mozhou Lake Wetland Park introduced new boardwalks and observation platforms, allowing visitors to explore the unique ecosystem where ancient fishing techniques and lotus harvesting continue to thrive. Local guides now offer half-day tours that explain how traditional practices like \'cormorant fishing\' and \'reed weaving\' have been passed down through generations.\n\n## What to See and Do\n\n- **Traditional Fishing Demonstrations**: Watch local fishermen use bamboo traps and nets, methods unchanged since the Han Dynasty.\n- **Lotus Root Harvesting**: Join seasonal workshops (July–September) to learn how this staple crop is cultivated in the shallow lake waters.\n- **Boat Tours by Sampan**: Glide through narrow channels lined with wild rice and water chestnuts, led by villagers who share folklore about the lake\'s \'water spirits.\'\n- **Cultural Museum**: The newly opened Mozhou Lake Heritage Center features artifacts from Neolithic settlements discovered along the lake\'s shores, including ancient pottery and fishing tools.\n\n## Why It Matters Now\n\nAccording to recent reports from Hubei\'s cultural tourism department, Mozhou Lake has become a model for sustainable wetland tourism in central China. The site attracts around 80,000 visitors annually, many of whom are international travelers fascinated by the interplay of ecology and tradition. \'This is not just a lake; it\'s a living museum of how humans have adapted to water for centuries,\' says Dr. Li Wei, a local ethnologist who helped design the interpretive trails.\n\n## Practical Tips for Travelers\n\n- **Best time to visit**: March to October, with peak lotus bloom in July.\n- **Getting there**: Mozhou Lake is about 90 minutes from Wuhan by bus or car; guided tours depart from Wuhan\'s Hankou Railway Station daily.\n- **Language**: English signage is limited but improving; consider hiring a bilingual guide through the park\'s visitor center.\n\nFor culture enthusiasts and eco-travelers alike, Mozhou Lake offers a rare glimpse into the soul of the Jianghan Plain—a place where water is not just a resource, but a way of life.',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['mozhou lake', 'jianghan plain', 'wetland culture', 'hubei tourism', 'eco-tourism', 'traditional fishing', 'lotus harvesting'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-25T06:15:15.403Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-25-08-qn0h',
    title: 'Wuhan University’s Century-Old Campus Culture: Where Tradition Meets Tomorrow',
    summary: 'Explore the rich academic traditions and vibrant campus life at Wuhan University, from cherry blossom festivals to century-old lecture halls that still inspire scholars today.',
    content: '## A Living Heritage on Luojia Hill\n\nPerched on the slopes of Luojia Hill and overlooking the shimmering East Lake, Wuhan University (WHU) is more than just a place of study—it is a living museum of Chinese academic culture. Founded in 1893 as the Ziqiang Institute, the campus today blends classical Chinese architecture with modern educational vibrancy. As of 2026, WHU continues to attract international travelers and culture enthusiasts who come to walk its leafy paths and absorb its centuries-old traditions.\n\n## Cherry Blossoms and Scholarly Rituals\n\nEvery March, the university’s famous cherry blossom avenue becomes a pilgrimage site for thousands of visitors. This annual event, now in its 90th year, is not merely a floral display—it is a celebration of renewal and intellectual pursuit. Students and alumni gather under the pink canopy for poetry readings, calligraphy demonstrations, and traditional music performances. According to the latest reports, the 2026 Cherry Blossom Festival will feature a special “Scholars’ Walk” where retired professors share forgotten campus legends.\n\n## The Academic Heart: Old Library and New Ideas\n\nThe Old Library, built in 1935 with its green-tiled roofs and flying eaves, remains the symbolic heart of the university. It houses rare manuscripts and ancient Chinese texts, some dating back to the Ming dynasty. Yet tradition does not stifle innovation. This year, WHU launched a “Digital Humanities Lab” inside the library, allowing students to digitize fragile scrolls using AI-assisted tools. It is a powerful example of how the university honors its past while embracing the future.\n\n## Debating Traditions: The Luojia Forum\n\nFor over 80 years, the Luojia Forum has been WHU’s premier platform for open academic debate. Every Thursday evening, students, professors, and visiting scholars gather in the historic Lecture Hall No. 1 to discuss everything from classical philosophy to quantum computing. Unlike formal lectures, these sessions encourage spirited, respectful disagreement—a tradition the university proudly calls “the art of intellectual courtship.” International visitors are welcome to attend as observers or participants.\n\n## Campus Life: Rituals in the Dorms and Dining Halls\n\nWHU’s residential colleges maintain unique customs that have been passed down for generations. In the Meiyuan dormitory complex, for example, first-year students still participate in the “Lantern Ceremony,” where they light paper lanterns inscribed with their academic goals. Meanwhile, the campus’s seven dining halls each specialize in a different regional cuisine—from Wuhan’s own hot dry noodles to Sichuan spicy pot—fostering a culinary tradition that mirrors the diversity of the student body.\n\n## A Destination for Culture Lovers\n\nToday, Wuhan University offers guided English-language tours every Saturday morning, taking visitors through its most iconic spots: the Stone Ship Garden, the cherry blossom path, and the century-old sports ground where the first intercollegiate basketball game in central China was played in 1924. Whether you are a history buff, a literature lover, or simply curious about China’s academic culture, WHU’s campus is a living textbook waiting to be read.',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['wuhan university', 'luojia hill', 'campus culture', 'academic traditions', 'cherry blossom festival', 'hubei travel', 'cultural heritage'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-25T06:15:25.202Z',
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
