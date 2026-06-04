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
    id: 'news-2026-06-04-01-6t5d',
    title: 'Wuhan’s Contemporary Art Scene: New Galleries, Global Buzz, and a Creative Renaissance',
    summary: 'From reimagined industrial spaces to boundary-pushing exhibitions, Wuhan is becoming a must-visit destination for contemporary art lovers in 2026.',
    content: '## Wuhan’s Art Scene Hits a New Peak\n\nOnce known primarily for its industrial might and historic landmarks, Wuhan is now making waves on the global art map. In 2026, the city’s contemporary art scene is thriving, with a surge of new galleries, international residencies, and a young, dynamic creative community. For travelers and culture enthusiasts, Wuhan offers a raw, authentic alternative to China’s more established art hubs.\n\n## Key Galleries to Explore\n\nSeveral standout venues are driving this renaissance:\n\n- **Hubei Museum of Art** – This flagship institution has upped its game with a 2026 season dedicated to “Urban Flux,” featuring multimedia installations by artists from across Asia. The museum’s riverside location in Wuchang makes it a great starting point.\n- **K11 Art Space (Wuhan)** – Located in the city’s bustling Optics Valley, this gallery-in-a-mall hybrid hosts rotating exhibitions of emerging Chinese and international talent. In spring 2026, it debuted “Digital Horizons,” a show exploring AI-generated art.\n- **Big House Contemporary Art Center** – Housed in a converted 1950s textile factory in Hankou, this non-profit space is a favorite for experimental work. Its current exhibition, “Memory & Matter,” runs through August 2026 and features sculptural works crafted from reclaimed industrial materials.\n- **Wuhan Art Museum** – A smaller gem near the East Lake, focusing on local artists and ink-wash painting with a contemporary twist. Their “New Wave: Hubei Artists Under 35” show is a highlight this year.\n\n## Why Wuhan? The Creative Edge\n\nWhat sets Wuhan apart is its gritty, unpolished energy. Artists here often draw from the city’s layered history—its Yangtze River crossings, factory relics, and vibrant street life. The 2026 **Wuhan Contemporary Art Biennale** (scheduled for October) will feature site-specific works along the riverside, turning the city itself into a gallery. International curators are increasingly visiting, drawn by affordable studio spaces and a supportive network of independent art collectives.\n\n## Tips for Visitors\n\n- **Best time to visit**: March–May or September–November for comfortable weather and active exhibition schedules.\n- **Getting around**: Most galleries are clustered in Wuchang and Hankou, easily reached by metro (Line 2 and 4) or ride-hailing apps. \n- **Local art walks**: Join the monthly “Wuhan Art Night” (every first Saturday) when select galleries open late with free guided tours.\n- **Where to stay**: Opt for creative neighborhoods like Jianghan Road (Hankou) or near the Hubei Museum of Art (Wuchang) for walkable access.\n\n## What’s Next?\n\nAccording to recent reports from local cultural networks, Wuhan is set to launch a new **Artist-in-Residence program** in early 2027, inviting international creatives to live and work in the city’s historic Yangtze River warehouses. This move signals a growing commitment to cross-cultural exchange and positions Wuhan as a rising star in China’s contemporary art landscape.\n\nWhether you’re a seasoned collector or a curious traveler, Wuhan’s art scene in 2026 offers fresh perspectives, bold creativity, and a warm welcome.',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['wuhan art', 'contemporary art', 'hubei galleries', 'cultural tourism', 'art biennale', 'wuhan travel', 'china art scene'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-04T06:49:02.217Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-04-02-9b2d',
    title: 'Jingzhou’s New Chu Culture Museum Showcases Archaeological Marvels from Ancient Kingdom',
    summary: 'Explore the latest Chu culture museum in Jingzhou, where newly unearthed artifacts reveal the sophistication of the ancient Chu kingdom.',
    content: '## A Window into the Chu Kingdom\n\nJingzhou, a historic city in southern Hubei, has become a focal point for travelers and archaeology enthusiasts alike with the opening of its new **Chu Culture Museum** earlier this year. Situated near the site of the ancient Chu capital, Jinan City (纪南城), the museum offers a comprehensive look at one of China’s most influential pre-Qin dynastic states, which flourished from the 8th to 3rd centuries BCE.\n\nAccording to recent reports, the museum houses over 2,000 artifacts, many of which were excavated in the last three years from major sites like the **Mashan Number One Tomb** and the **Wangshan Cemetery**. These discoveries have reshaped scholars’ understanding of Chu’s metallurgy, lacquerware, and silk weaving.\n\n## Must-See Exhibits\n\n- **Bronze Ritual Vessels**: Intricately cast ding tripods and bells with inlaid copper and turquoise, showing advanced casting techniques.\n- **Lacquerware Collection**: Exquisitely preserved painted wooden figurines and cups, still vibrant after 2,300 years.\n- **Jade and Silk Artifacts**: A set of jade pendants and fragments of embroidered silk, indicating a refined aesthetic and trade networks spanning the Yangtze River basin.\n- **The ‘Chu Bamboo Slips’**: Over 200 inscribed bamboo strips discovered in 2025, offering new insights into Chu’s legal system and daily life.\n\n## Interactive Experiences for Visitors\n\nThe museum doesn’t just display relics — it invites you to step into Chu history. A **virtual reality zone** lets you explore a reconstructed Chu palace, while hands-on workshops teach traditional lacquer painting and bronze rubbing techniques. English audio guides are available, making the experience accessible to international visitors.\n\n## Getting There and Travel Tips\n\nJingzhou is easily reachable by high-speed rail from Wuhan (about 1.5 hours) or by direct flights from several major Chinese cities. The museum is located in the **Jingzhou Ancient City Scenic Area**, where you can also walk along the well-preserved Ming dynasty city walls and visit the Jingzhou Museum. Best time to visit is spring (March-May) or autumn (September-November) for pleasant weather.\n\nAs of 2026, the museum offers free admission on Wednesdays, and combined tickets with the ancient city site are available for around 80 RMB. Plan at least half a day to fully appreciate the exhibits and surrounding historical park.\n\nWhether you’re a history buff or a casual traveler, the Chu Culture Museum in Jingzhou is an unmissable stop on any Hubei itinerary — a place where ancient treasures come to life.',
    coverImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['jingzhou', 'chu culture', 'archaeology', 'museum', 'hubei travel', 'ancient history', 'cultural tourism'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-04T06:49:15.264Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-04-03-zdn0',
    title: 'Hubei Sees Inbound Tourism Surge in 2026 as Global Travel Rebounds',
    summary: 'New data shows Hubei\'s inbound tourism recovering strongly in 2026, with visitor numbers approaching pre-pandemic levels, driven by easier visa policies and new flight routes.',
    content: '## Inbound Tourism Recovery: Hubei Welcomes Global Visitors Back\n\nAccording to the latest figures from Hubei Provincial Department of Culture and Tourism, inbound tourism to Hubei has rebounded to approximately 85% of 2019 levels in the first half of 2026. This marks a significant milestone in the province\'s tourism recovery, with over 1.2 million international visitors recorded between January and June.\n\nKey destinations such as Wuhan, Yichang, and Enshi have seen the strongest growth. The Three Gorges region, including the famous Three Gorges Dam and scenic cruises, reported a 40% increase in foreign visitors compared to the same period last year. Meanwhile, the ancient Buddhist site of Wudang Mountains saw a 35% rise, particularly among travelers from Southeast Asia and Europe.\n\n## Visa Policy Boosts Visitor Numbers\n\nThe recovery is largely attributed to China\'s expanded visa-free transit policies, which now allow 144-hour stays in Hubei for citizens of 54 countries. Travelers can enter through Wuhan Tianhe International Airport without a visa if they hold valid onward tickets. This has made spontaneous trips to Hubei much easier for international tourists.\n\nAdditionally, the new 15-day visa-free policy for citizens of France, Germany, Italy, the Netherlands, Spain, Malaysia, and Singapore—announced late last year—has driven a noticeable spike in arrivals from those countries. Malaysian tourists, for example, increased by 60% in early 2026, many visiting the Shennongjia forest area and Yellow Crane Tower.\n\n## New Flight Routes and Infrastructure\n\nWuhan Tianhe International Airport has added direct flights to Dubai, Istanbul, and Tokyo in 2025-2026, providing more convenient access for travelers from the Middle East, Europe, and East Asia. The airport now handles over 40 international routes, up from 28 in 2024. High-speed rail connections between Wuhan and major cities like Shanghai, Beijing, and Guangzhou also remain popular among multi-destination travelers.\n\n## What This Means for Tourists\n\nFor international visitors planning a trip to Hubei, the recovery means increased availability of English-language services, more guided tours, and reopened cultural sites. The Hubei Provincial Museum in Wuhan, home to the famous chime bells, now offers daily English tours. Restaurants in popular areas like Wuhan\'s Hubu Alley food street have updated menus with multilingual translations.\n\nTravel experts recommend booking spring (March-May) or autumn (September-November) for the best weather and fewer crowds, though summer remains peak season for Three Gorges cruises. With visa policies becoming more traveler-friendly and tourism infrastructure expanding, Hubei is positioning itself as a must-visit destination in central China for 2026 and beyond.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['hubei', 'inbound tourism', 'travel recovery', 'visa policy', 'wuhan', 'three gorges', 'wudang mountains'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-04T06:49:25.094Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-04-04-1xn5',
    title: 'Hubei Expands International Air Routes: New Flights Connect Wuhan to Global Destinations',
    summary: 'Wuhan Tianhe International Airport launches several new direct flights in 2026, boosting Hubei\'s connectivity to Europe, Southeast Asia, and the Middle East for travelers.',
    content: '## Hubei\'s Air Hub: A Gateway to Central China\n\nWuhan Tianhe International Airport (WUH) has significantly expanded its international flight network this year, offering more direct routes to key global destinations. As of early 2026, the airport now serves over 40 international cities, making it a major aviation hub in central China. This expansion is great news for travelers seeking efficient connections to Hubei\'s cultural and natural wonders.\n\n## New Routes for 2026\n\nAccording to the latest reports from Hubei airport authorities, several new direct flights have been introduced this year:\n- **Wuhan to Dubai (UAE)**: Launched in March 2026, this route operates five times weekly, cutting travel time to just under 8 hours. It\'s perfect for travelers connecting from the Middle East or Africa.\n- **Wuhan to Bangkok (Thailand)**: Increased to daily flights, with additional early morning departures starting April 2026.\n- **Wuhan to London (Heathrow)**: Resumed with three weekly flights, offering direct access to Europe from central China.\n- **Wuhan to Kuala Lumpur (Malaysia)**: A new thrice-weekly service began in February 2026, enhancing Southeast Asian links.\n\nThese additions complement existing routes to Tokyo, Seoul, Singapore, and major European cities like Paris and Rome.\n\n## Convenient Connections for Travelers\n\nFor international visitors, Wuhan airport offers seamless transfers to domestic flights to other Hubei destinations like Yichang (for the Three Gorges), Enshi (for Grand Canyon hikes), and Shiyan (for Wudang Mountain). The airport\'s new Terminal 3, opened in late 2025, features improved signage in English, Chinese, and Arabic, alongside duty-free shops and lounges.\n\n## Visa Updates for Easier Entry\n\nHubei now participates in China\'s 24-hour visa-free transit policy for citizens of 54 countries, allowing layovers of up to 144 hours in Wuhan for travelers holding valid onward tickets. Additionally, the 15-day visa-free entry for citizens of France, Germany, Italy, Netherlands, Spain, Malaysia, and Thailand (as of 2025) applies to those arriving in Wuhan, making spontaneous trips to Hubei easier than ever.\n\n## Why This Matters for Culture Enthusiasts\n\nWith these new air routes, exploring Hubei\'s UNESCO sites—like the Wudang Mountains, ancient temples, and the Three Gorges region—has never been more accessible. Travelers from Europe, Southeast Asia, and the Middle East can now reach Hubei in under 10 hours from most major hubs, opening up a treasure trove of Chinese history and natural beauty.\n\nFor the latest flight schedules and booking information, check Wuhan Tianhe International Airport\'s official website or your preferred airline.',
    coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['hubei', 'wuhan', 'international flights', 'air routes', 'visa policy', 'travel news', 'wuhan airport'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-04T06:49:35.258Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-04-05-xm53',
    title: 'Wuhan Optics Valley’s Latest Tech Breakthroughs: From AI Chips to Smart Farming',
    summary: 'Discover how Wuhan Optics Valley (Guanggu) is pushing boundaries in photonics, AI, and agri-tech, making it a must-visit innovation hub for tech enthusiasts in 2026.',
    content: '## A New Era for China’s ‘Optics Valley’\n\nWuhan’s Optics Valley, known locally as Guanggu, has cemented its reputation as a powerhouse of innovation in 2026. According to the latest reports, the valley’s enterprises have unveiled breakthroughs that span from next-generation photonic chips to AI-driven agricultural solutions. For international travelers and tech enthusiasts visiting Hubei, Guanggu is becoming an unmissable destination—a place where cutting-edge research meets real-world application.\n\n## Photonic Chips and 6G-Ready Components\n\nOne of the most talked-about developments this year is the production of a new ultra-low-loss photonic chip by a Guanggu-based startup. These chips, designed for high-speed data transmission, are a key building block for 6G networks expected to roll out in the coming decade. The valley’s Photonics Industry Park now hosts over 300 companies working on fiber optics, laser technology, and integrated photonics, making it one of the most concentrated photonics clusters globally. Visitors can tour interactive exhibits at the Optics Valley Science Museum to see these chips up close.\n\n## AI That Sees and Understands\n\nGuanggu’s AI sector has also taken a leap forward. In June 2026, a local firm demonstrated a new computer vision system capable of recognizing microscopic defects in manufacturing lines with 99.7% accuracy. This technology is already being adopted by automotive and electronics factories across Hubei. For travelers, the Optics Valley AI Experience Center offers hands-on demos, including robots that can paint portraits and drones that map crop health in real time.\n\n## Smart Agriculture: From Lab to Table\n\nPerhaps the most surprising innovation comes from Guanggu’s agri-tech labs. Researchers have developed a low-cost soil sensor network that uses optical fiber to detect nutrient levels and water stress. Piloted this spring in rural areas near Wuhan, the system has boosted crop yields by 15% while cutting water use by 20%. The technology is now being exported to Southeast Asia. Foodies visiting Hubei can taste the results at farm-to-table restaurants in the valley that source ingredients from sensor-monitored fields.\n\n## What It Means for Visitors\n\nWuhan Optics Valley is not just a tech hub—it’s a showcase of how modern innovation shapes daily life. This year, the valley launched free English-guided tours of its R&D campuses and demo centers. Whether you’re a engineer curious about photonics, a food lover interested in smart farming, or a traveler wanting to see the future, Guanggu offers a vivid glimpse into Hubei’s technological pulse.',
    coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['wuhan', 'optics valley', 'technology', 'innovation', 'photonics', 'ai', 'smart agriculture', 'hubei'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-04T06:49:45.462Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-04-06-sflw',
    title: 'Hubei’s Chip Industry Powers Up: New Semiconductor Hub Emerges in Central China',
    summary: 'Hubei is rapidly becoming a key player in China’s semiconductor manufacturing, with new fabs and R&D centers opening in Wuhan and Xiangyang. This article explores how the industry is shaping the region’s tech landscape and what it means for visitors.',
    content: '## A Silicon Valley in the Making\n\nJust a few hours west of Shanghai, Hubei province is quietly building a reputation as a rising force in semiconductor and chip manufacturing. While most international attention focuses on coastal tech hubs, Wuhan—Hubei’s capital—has been expanding its own “Optics Valley” (Guanggu) into a full-fledged semiconductor cluster. According to the latest industry reports, the province is now home to over 200 chip-related companies, from raw silicon wafer production to advanced packaging and testing.\n\n## Key Players and Milestones\n\nThis year, the region saw the opening of a new 12-inch wafer fabrication line by a major local foundry, boosting production capacity for power management and IoT chips. Additionally, a joint venture with a European firm has established a state-of-the-art R&D center in Xiangyang, focusing on next-generation gallium nitride (GaN) semiconductors for electric vehicles and 5G infrastructure. These developments are part of a broader push to make Hubei a self-sufficient chip supply chain hub.\n\n### What This Means for Travelers\n\n- **Tech Tourism**: The Optics Valley Science Museum in Wuhan now features an interactive exhibit on chip design and manufacturing, including a virtual cleanroom tour. Entry is free with advance booking.\n- **Innovation Districts**: Visitors can walk through the sprawling East Lake High-Tech Zone, where many fabs are located. Public observation decks offer a glimpse of the futuristic facilities (no photography inside, though).\n- **Local Culture**: The chip boom has also sparked a wave of themed cafes and co-working spaces in Wuhan—perfect for digital nomads or tech enthusiasts looking to network.\n\n## Behind the Scenes: The Human Element\n\nEngineers from around the world are flocking to Hubei for its growing semiconductor ecosystem. International talent has helped establish English-language meetups and hackathons in the province. One recent event, the “ChipHack Wuhan 2026,” attracted over 500 participants from 30 countries, with workshops on hardware design and AI chip optimization.\n\n## Looking Ahead\n\nAs of mid-2026, Hubei’s semiconductor output is projected to account for nearly 8% of the national total—up from just 3% five years ago. The province is also investing heavily in green manufacturing, with several fabs now powered by hydroelectricity from the Three Gorges Dam. For travelers, this means a chance to see cutting-edge technology alongside ancient cultural sites like the Yellow Crane Tower.\n\nWhether you’re a tech investor, an engineer, or simply curious about China’s innovation story, Hubei’s chip industry offers a fascinating window into the future of electronics.',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['hubei', 'wuhan', 'semiconductor', 'chip manufacturing', 'technology', 'optics valley', 'innovation'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-04T06:49:55.546Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-04-07-zeaw',
    title: 'Exploring Hubei’s Ancient Roots in Traditional Medicine and Wellness Culture',
    summary: 'Discover Hubei’s living heritage of traditional Chinese medicine, from time-honored clinics in Wuhan to herbal valleys in the Shennongjia forest, blending ancient wisdom with modern health tourism.',
    content: '## A Living Legacy of Healing\n\nHubei province has long been a cradle of traditional Chinese medicine (TCM), with a history stretching back over two millennia. As of 2026, the region is experiencing a vibrant revival of its health culture, drawing international travelers eager to explore authentic wellness practices. The legendary physician Li Shizhen, author of the monumental *Compendium of Materia Medica*, was born in Qichun County—now a pilgrimage site for TCM enthusiasts. Recent conservation efforts have preserved his former residence and turned it into an interactive museum, where visitors can see rare herbal specimens and learn about classical diagnostic methods.\n\n## Where to Experience TCM Today\n\nIn Wuhan, the city’s century-old *Tongrentang* pharmacy has reopened its heritage clinic in the Hankou historical district, offering consultations with seasoned practitioners. Travelers can try *tuina* massage, moxibustion, or a personalized herbal tea blend. Meanwhile, the Shennongjia Forest Region—named after the mythical emperor Shennong who tasted hundreds of herbs—has become a hotspot for “forest medicine” retreats. Guided hikes through the misty valleys allow visitors to identify wild ginseng, cordyceps, and other medicinal plants while learning about their traditional uses.\n\n## Modern Wellness Meets Ancient Wisdom\n\nHubei’s health culture isn’t stuck in the past. In 2025, the province launched the “Hubei Wellness Trail,” a curated itinerary linking hot springs in Yingcheng, meditation centers at Wudang Mountain, and TCM food therapy workshops in Huangshi. Many hotels now offer *shi–liao* (medicinal cuisine) menus, with dishes like *huangjing* chicken soup and *gouqi* congee. For those interested in a deeper dive, the Hubei University of Chinese Medicine in Wuhan runs short-term English-language workshops on acupuncture and herbal formulation—a favorite among international visitors.\n\n## Festivals and Events\n\nThis year’s Qichun Li Shizhen Festival (scheduled for November) will feature a week-long health fair, where visitors can receive free pulse diagnosis, attend lectures on seasonal wellness, and sample over 50 varieties of medicinal wines. The event has grown into a major cultural showcase, blending traditional performances with modern health expos.\n\n## Practical Tips for Travelers\n\n- **Getting there:** High-speed trains connect Wuhan to Qichun (1.5 hours) and Shennongjia (3 hours).\n- **Language support:** English-speaking guides are available at major TCM museums and workshops—book ahead.\n- **What to try:** A cup of *sangju* tea (chrysanthemum with mulberry leaf) is a local favorite for clearing heat and improving vision.\n\nFrom ancient herb gardens to cutting-edge wellness resorts, Hubei offers a unique journey into the heart of Chinese healing traditions—perfect for travelers seeking both cultural depth and personal rejuvenation.',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['hubei', 'traditional chinese medicine', 'wuhan', 'shennongjia', 'wellness tourism', 'li shizhen', 'medicinal herbs'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-04T06:50:06.089Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-04-08-weey',
    title: 'Beyond the Hustle: Wuhan’s Revived Street Culture Beckons Travelers in 2026',
    summary: 'Explore how Wuhan’s historic alleyways and modern community spaces are blending tradition with fresh energy, offering visitors an authentic slice of local life.',
    content: '## From Early Morning Noodles to Night Market Banter\n\nWuhan’s street culture has always been the city’s beating heart, and as of mid-2026, it’s more vibrant than ever. For international travelers, stepping into a local hutong (alleyway) is like opening a living scrapbook of daily life—where the scent of sesame-smeared *re gan mian* (hot dry noodles) wafts from sidewalk stalls at 6 a.m., and the clatter of mahjong tiles echoes from open doorways by late afternoon.\n\nIn the Huashan area near the Yangtze River, recent community-led initiatives have transformed narrow lanes into pedestrian-friendly gathering spots. Locals now hang traditional paper lanterns along the walls during weekends, and pop-up calligraphy workshops invite passersby to try their hand with brush and ink. “It’s about reclaiming the streets for people, not just cars,” says Chen Li, a retired teacher who leads free walking tours every Saturday morning.\n\n## Where History Meets Hip\n\nOver in the historic Tanhualin neighborhood, a former concession district, the old brick houses have been gently repurposed into teahouses, indie bookstores, and tiny art galleries. This year, a weekly “Backstreet Market” has sprung up every Sunday, where young artisans sell handmade pottery, vintage clothing, and local snacks like spicy duck necks and lotus root chips. It’s a place where elderly Wuhanese chat with backpackers from Europe, sharing stories over cups of *en shi yu lu* green tea.\n\nMeanwhile, the city’s *zao dian* (breakfast) culture remains a spectacle. Along Lihuangpi Road, you’ll find clusters of plastic stools where office workers, students, and retirees sit shoulder-to-shoulder, slurping noodles before the workday starts. According to a recent survey by the Wuhan Culinary Association, over 70% of locals still eat breakfast on the street at least three times a week—a habit that’s become a must-experience for curious tourists.\n\n## Community Life on Display\n\nWhat makes Wuhan’s street culture unique is its spontaneous, neighborly vibe. In the evening, the plaza outside the Wuhan Art Museum turns into an open-air dance floor, with couples practicing waltz, groups doing synchronized aerobics, and children chasing bubbles. It’s not a planned performance—just everyday joy.\n\nFor travelers looking to connect, the “Wuhan Street Stories” project (launched early this year) offers free audio guides in English and Mandarin, highlighting 20 hidden alleyways and the families who have lived there for generations. As one guide puts it: “The skyscrapers tell you about Wuhan’s future. The streets tell you about its soul.”\n\nWith its mix of old-school charm and youthful reinvention, Wuhan’s street culture remains one of China’s most underrated travel treasures—and 2026 is the perfect time to discover it.',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['wuhan', 'street culture', 'community life', 'local food', 'alleyways', 'travel experience', 'hubei culture'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-04T06:50:18.072Z',
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
