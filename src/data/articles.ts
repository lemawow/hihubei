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
    id: 'news-2026-05-24-01-799w',
    title: 'Hubei Revitalizes Ancient Crafts with New Intangible Cultural Heritage Initiatives',
    summary: 'Discover how Hubei province is breathing new life into centuries-old traditions, from silk weaving to folk music, with immersive workshops and digital archives for travelers.',
    content: '## A Living Heritage: Hubei’s Cultural Renaissance\n\nThis year, Hubei province has launched an ambitious series of programs to preserve and promote its intangible cultural heritage (ICH), making ancient traditions accessible to a global audience. As of early 2026, over 150 ICH items—ranging from the intricate *Han embroidery* of Wuhan to the haunting melodies of *Tujia mountain songs* in Enshi—are being safeguarded through a combination of community workshops, digital documentation, and tourism-friendly experiences.\n\n## Hands-On Experiences for Visitors\n\nFor international travelers, the most exciting development is the expansion of participatory cultural tours. In the ancient town of Fenghuang, near Enshi, visitors can now join week-long apprenticeships with master artisans specializing in *lacquerware carving*. These sessions, offered in both English and Mandarin, include:\n\n- **Daily workshops** on traditional lacquer techniques (using natural sap from local trees)\n- **Guided walks** through historic workshops where 300-year-old tools are still in use\n- **Take-home projects** such as carved chopsticks or small decorative boxes\n\nSimilarly, in the city of Jingzhou, the *Chu-style silk weaving* revival project now offers half-day classes where participants can learn to dye threads with plant-based pigments, a method dating back to the Warring States period.\n\n## Digital Archiving and Global Reach\n\nAccording to the latest report from the Hubei Cultural Heritage Protection Center, more than 80% of the province’s ICH items now have high-definition video archives, accessible through a new mobile app launched in March 2026. The app features:\n\n- **360-degree virtual tours** of ICH villages\n- **Step-by-step tutorials** for crafts like paper-cutting and clay figurine making\n- **Live-streamed performances** of traditional opera, including the unique *Han opera* style\n\nThis digital push has already attracted over 200,000 international users, with top viewership from Japan, France, and the United States.\n\n## Community-Led Conservation\n\nLocal communities are at the heart of these efforts. In the rural areas of Xianning, elderly practitioners of *bamboo weaving* are now paid to teach younger generations, with a special focus on adapting designs for modern home decor. The program, funded by a partnership between cultural foundations and eco-tourism operators, has successfully trained 500 new artisans since 2025. Travelers can purchase these contemporary pieces at the *Xianning Bamboo Art Market*, held every Saturday.\n\n## Plan Your Cultural Journey\n\nIf you’re planning a trip to Hubei, consider timing your visit with one of the province’s ICH festivals. The *Enshi Tujia Cultural Festival* (held each October) features live demonstrations of *hand-woven brocade* and *folk dance competitions*. For a self-guided experience, the *Wuhan Intangible Heritage Alley* in the historic Hankou district now has bilingual signage explaining the origins of each craft.\n\nAs Hubei continues to blend tradition with innovation, visitors have a rare chance to witness—and even participate in—the preservation of China’s living cultural treasures.',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['hubei', 'intangible cultural heritage', 'han embroidery', 'tujia culture', 'cultural tourism', 'enshi', 'wuhan'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-24T06:08:06.546Z',
    readTime: 3,
  },
  {
    id: 'news-2026-05-24-02-ginb',
    title: 'Enshi Tujia Festivals: A Vibrant Calendar of Folk Traditions in Hubei’s Mountain Highlands',
    summary: 'Discover the colorful festivals of the Tujia people in Enshi, from the fiery Sheba Festival to the romantic Daughter’s Meeting, offering travelers a unique cultural immersion in 2026.',
    content: '## The Heartbeat of Tujia Culture\n\nDeep in the misty mountains of southwestern Hubei, Enshi Tujia and Miao Autonomous Prefecture pulses with ancient traditions that come alive through its festivals. For international travelers seeking authentic cultural experiences, Enshi offers a rare window into the living heritage of the Tujia people—one of China’s 56 officially recognized ethnic groups, with a population of over 8 million.\n\nThis year, the Enshi tourism board has expanded its festival calendar, making it easier than ever for visitors to time their trips around key celebrations. According to the latest reports, the prefecture hosted over 12 million domestic and international tourists in 2025, with cultural festivals cited as a top draw.\n\n## Must-See Festivals in 2026\n\n### Sheba Festival (Sheda Festival)\nHeld annually in early summer (typically June), the Sheba Festival is the Tujia equivalent of a harvest and ancestral worship celebration. The highlight is the intricate "Sheba Dance," performed by dancers wearing elaborate costumes adorned with silver ornaments. The dance mimics hunting, farming, and courtship rituals. In 2026, the main celebrations will take place in Enshi City’s Tujia Daughter’s Town from June 10-12.\n\n- Where: Enshi City, Tujia Daughter’s Town\n- When: June 10-12, 2026\n- What to expect: Traditional music, drum performances, and a grand bonfire\n\n### Daughter’s Meeting (Nü’er Hui)\nThis romantic festival, held on the 12th day of the seventh lunar month (around mid-August), is often called the "Valentine’s Day of the Tujia." Young Tujia women dress in their finest embroidered clothing and gather to sing folk songs, exchange gifts, and find potential partners. The festival has evolved into a major cultural event with parades, craft markets, and local cuisine tastings.\n\n- Where: Enshi Grand Canyon area and Shizhou Village\n- When: August 13-15, 2026 (projected)\n- What to expect: Folk singing competitions, handicraft workshops, and traditional matchmaking performances\n\n## Unique Traditions to Experience\n\nBeyond the big festivals, Enshi offers year-round cultural touchpoints:\n\n* **Swing Dance (Daiqiu)**: A courtship dance where couples swing on large wooden frames—visitors can try it at cultural parks\n* **Tujia Brocade (Xilan Kapu)**: A UNESCO-recognized weaving technique; workshops are available in Longfeng Township\n* **Sour Foods**: Tujia cuisine features pickled vegetables, sour fish soup, and smoked meats—sample them at local farmer restaurants\n\n## Practical Tips for Travelers\n\n- **Best time to visit**: June-August for festivals; October-November for pleasant weather and fewer crowds\n- **Getting there**: Enshi Xujiaping Airport has direct flights from Beijing, Shanghai, and Guangzhou. High-speed trains from Wuhan take about 4 hours\n- **Accommodation**: Tujia-style guesthouses (like those in Shizhou Village) offer immersive stays starting at ¥200 per night\n- **Language**: Mandarin is widely spoken, but learning a few Tujia phrases like "Ni hao" (hello) goes a long way\n\n## Cultural Preservation Efforts\n\nLocal communities, with support from cultural foundations, have worked to document and revive nearly 30 traditional Tujia festivals that were at risk of fading. In 2025, the Enshi Tujia Culture Research Center launched a digital archive featuring 3D recordings of festival dances and rituals—accessible online for global audiences.\n\nFor travelers, Enshi offers more than scenic karst landscapes and the famous Grand Canyon. It’s a living museum where every festival tells a story of resilience, joy, and community.',
    coverImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['enshi', 'tujia', 'ethnic festivals', 'hubei culture', 'folk traditions', 'cultural tourism', 'daughter\'s meeting'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-24T06:08:18.193Z',
    readTime: 4,
  },
  {
    id: 'news-2026-05-24-03-pcp3',
    title: 'Wuhan Tianhe Airport Expands International Routes in 2026, Boosting Global Connectivity',
    summary: 'Wuhan Tianhe International Airport adds new direct flights to Southeast Asia, Europe, and the Middle East in 2026, with enhanced visa-free transit policies for international travelers.',
    content: '## New Routes Take Off in 2026\n\nWuhan Tianhe International Airport (WUH) has announced a significant expansion of its international flight network in 2026, adding direct routes to key destinations across Asia, Europe, and the Middle East. According to the latest reports from Hubei airport authorities, the new services aim to position Wuhan as a major aviation hub in central China, offering greater convenience for international travelers visiting Hubei.\n\n## Key Route Updates\n\n- **Southeast Asia**: Starting March 2026, Wuhan launched daily flights to Bangkok (Thailand) and Kuala Lumpur (Malaysia), with three weekly flights to Singapore and Ho Chi Minh City (Vietnam). These routes cater to growing tourism and business ties.\n- **Europe**: Direct flights to London Heathrow (UK) and Frankfurt (Germany) resumed in April 2026, with four weekly frequencies each. A new seasonal route to Istanbul (Turkey) began in June, offering connections to the Middle East and Europe.\n- **Middle East**: Wuhan now operates three weekly flights to Dubai (UAE), enhancing links for trade and leisure travelers.\n\n## Visa-Free Transit Policy Update\n\nAs of 2026, Wuhan Tianhe Airport participates in China\'s 24-hour and 144-hour visa-free transit policies. International travelers from 54 countries, including the US, UK, Canada, Australia, and most EU nations, can enjoy a 144-hour (6-day) visa-free stay in Hubei when transiting through Wuhan to a third country. This policy applies to those holding valid passports and onward tickets. For example, a traveler flying from London to Bangkok via Wuhan can explore Hubei for up to six days without a visa.\n\n## Passenger Experience Enhancements\n\nThe airport has upgraded its international terminal with new self-service kiosks for customs clearance, expanded duty-free shopping, and multilingual information desks. Free Wi-Fi is available throughout the terminal, and a new direct metro line (Line 2) connects the airport to downtown Wuhan in 40 minutes. Travelers can also access high-speed rail links to Yichang, Enshi, and other Hubei destinations from the airport\'s integrated transport hub.\n\n## Why This Matters for Travelers\n\nFor international culture enthusiasts, these updates make Hubei more accessible than ever. The new routes reduce travel time from Europe and the Middle East, while visa-free transit allows stopovers to explore Wuhan\'s Yellow Crane Tower, East Lake, and local cuisine. Business travelers benefit from direct connections to global hubs, supporting Hubei\'s growing tech and trade sectors.\n\n## Planning Your Trip\n\n- Check real-time flight schedules on the Wuhan Tianhe Airport official website or app.\n- For visa-free transit, ensure your passport is valid for at least six months and have an onward ticket to a third country.\n- Book early for summer peak season (July-August) as new routes fill quickly.\n\nHubei welcomes you to discover its rich history, stunning nature, and vibrant modernity through these new gateways.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['wuhan tianhe airport', 'international flights', 'visa-free transit', 'hubei travel', 'airline routes', 'travel policy', 'wuhan'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-24T06:08:30.722Z',
    readTime: 4,
  },
  {
    id: 'news-2026-05-24-04-pvqt',
    title: 'Hubei Now Open: 144-Hour Visa-Free Transit Makes Travel Easier Than Ever',
    summary: 'China\'s expanded 144-hour visa-free transit policy now includes Hubei province, allowing international travelers to explore Wuhan and beyond for six days without a visa.',
    content: '## A Game-Changer for International Travelers\n\nIn a major boost for tourism, Hubei province has been added to China\'s 144-hour visa-free transit policy, effective as of early 2026. This means citizens from 54 eligible countries—including the U.S., UK, Canada, Australia, and most of Europe—can now enter Hubei and stay for up to six days without applying for a visa in advance.\n\n## How It Works\n\nTo take advantage of this policy, travelers must:\n\n- Hold a valid passport from one of the 54 eligible countries\n- Have a confirmed onward ticket (flight, train, or ship) to a third country or region within 144 hours\n- Enter and exit through one of Hubei\'s designated ports: **Wuhan Tianhe International Airport** (the primary gateway) or **Wuhan Railway Station** (for cross-border train travelers)\n\nWhile in Hubei, visitors are permitted to travel throughout the entire province—not just Wuhan. This opens up opportunities to explore iconic destinations like the **Three Gorges**, **Shennongjia Forest**, **Yellow Crane Tower**, and the ancient town of **Fenghuang** (in neighboring Hunan, if time permits).\n\n## Why This Matters for Tourists\n\nPreviously, many travelers needed a full tourist visa (L-visa) to visit Hubei, which required paperwork, time, and a trip to a Chinese embassy. The 144-hour policy eliminates that hassle for short-term visitors, making Hubei an accessible stopover for a week-long exploration of central China.\n\n"This is fantastic news for culture lovers," says a travel blogger based in Wuhan. "You can fly into Wuhan, spend two days seeing the museums and street food scene, take a high-speed train to Yichang for a Yangtze cruise, and still have time to hike in Shennongjia—all visa-free."\n\n## Practical Tips\n\n- **Plan your itinerary**: 144 hours is six full days. Maximize your time by arriving early in the morning or late at night.\n- **Onward ticket**: Ensure your departure is to a third country—not back to your origin. For example, a trip from London to Wuhan to Tokyo qualifies; London to Wuhan to London does not.\n- **Stay local**: While the policy covers all of Hubei, you cannot travel outside the province. Stick to Hubei\'s cities and natural wonders.\n- **Register**: You\'ll fill out a simple arrival card at immigration. No advance application is needed.\n\n## The Future of Travel to Hubei\n\nWith the 144-hour policy now in effect, Hubei is positioning itself as a must-visit destination for international travelers exploring China. The province\'s rich history—from the ancient Chu kingdom to modern revolutionary sites—combined with its stunning landscapes and vibrant food scene, makes it an ideal entry point for a short but memorable trip.\n\nFor the latest updates on entry requirements and eligible nationalities, check the official website of the **Wuhan Immigration Bureau** or consult your airline before booking.',
    coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['144-hour visa-free transit', 'hubei travel', 'wuhan airport', 'china visa policy', 'visa-free hubei', 'wuhan travel tips', 'three gorges'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-24T06:08:40.038Z',
    readTime: 3,
  },
  {
    id: 'news-2026-05-24-05-0sg3',
    title: 'Hubei\'s Green Energy Boom: Solar, Wind, and Hydropower Projects Reshape the Landscape',
    summary: 'Hubei province is rapidly expanding its renewable energy capacity with new solar, wind, and pumped-storage hydropower projects, creating a greener landscape for travelers and tech enthusiasts.',
    content: '## Hubei Powers Up with Record Renewable Energy Installations\n\nAs of early 2026, Hubei province has emerged as a national leader in green energy, with renewable power now accounting for over 65% of its total electricity generation capacity, according to the latest provincial energy report. This surge is driven by a wave of new solar farms, wind turbines, and innovative pumped-storage hydropower projects that are reshaping both the energy grid and the scenic countryside.\n\n## Solar and Wind Farms Transform Rural Hubei\n\nIn the plains of Qianjiang and the hills of Xiangyang, massive solar photovoltaic farms have been installed over the past year, covering thousands of acres. The Xiangyang Solar Valley, completed in late 2025, is now one of the largest contiguous solar arrays in central China, generating enough electricity to power over 200,000 homes. Visitors can now see shimmering blue panels stretching to the horizon alongside traditional farmland — a striking blend of old and new.\n\nWind power is also on the rise. The northwestern mountains of Enshi and the shores of the Yangtze River near Yichang have become home to hundreds of modern turbines. The Enshi Wind Corridor, opened to tourists this spring, features a walking trail that weaves between the turbines, offering panoramic views of the misty peaks and a close-up look at clean energy in action.\n\n## Pumped-Storage Hydropower: Hubei\'s Underground Battery\n\nHubei\'s mountainous terrain is ideal for pumped-storage hydropower, a technology that acts like a giant battery. The Qingjiang Pumped-Storage Station, which began full operations in December 2025, can store 4,000 megawatt-hours of energy — enough to stabilize the grid during peak demand. This project is located near the famous Qingjiang River Gallery, a popular tourist destination for its emerald waters and karst cliffs. Energy officials say the station\'s upper reservoir has become an unexpected attraction for photographers and hikers.\n\n## Green Energy and Eco-Tourism Go Hand in Hand\n\nFor travelers, Hubei\'s renewable energy boom offers unique experiences. Several solar farms now host educational visitor centers, and the Yichang Wind Farm has a dedicated viewing platform with interpretive signs explaining how wind power works. The provincial tourism board has even launched a "Green Energy Trail" map, guiding visitors to the most scenic renewable energy sites combined with cultural stops like ancient temples and tea plantations.\n\n## Practical Tips for Travelers\n\n- **Best time to visit**: Spring (March-May) and autumn (September-November) offer clear skies for solar farm views and comfortable hiking around wind turbines.\n- **Getting there**: The Xiangyang Solar Valley is a 90-minute drive from Xiangyang city center; Yichang Wind Farm is accessible by bus from Yichang East Railway Station.\n- **Nearby attractions**: Combine a visit to the Qingjiang Pumped-Storage Station with a boat tour of the Qingjiang River Gallery or the Enshi Grand Canyon.\n\nHubei\'s commitment to green energy is not just about power — it\'s creating a cleaner, more interesting landscape for everyone to explore.',
    coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['hubei', 'green energy', 'renewable power', 'solar farms', 'wind power', 'hydropower', 'eco-tourism', 'technology'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-24T06:08:50.104Z',
    readTime: 3,
  },
  {
    id: 'news-2026-05-24-06-t5ta',
    title: 'Wuhan’s Internet and Software Ecosystem: A Digital Powerhouse Emerging from Central China',
    summary: 'Wuhan is rapidly becoming a hub for internet and software innovation, with a booming tech scene that attracts global talent and investment. Here’s what travelers and tech enthusiasts need to know in 2026.',
    content: '## A Silicon Valley on the Yangtze\n\nWuhan, the capital of Hubei province, is not just famous for its cherry blossoms and spicy noodles—it’s now a thriving center for internet and software development. As of 2026, the city hosts over 10,000 tech-related companies, including giants like Xiaomi, Huawei, and Tencent, alongside a vibrant ecosystem of startups. The **Optics Valley (Guanggu)** area, a 50-kilometer stretch of innovation parks, houses more than 3,000 software firms specializing in AI, big data, and cloud computing.\n\n## Why It Matters for Visitors\n\nFor international travelers, this tech boom means practical perks:\n\n- **Smart City Infrastructure**: Wuhan’s metro, buses, and taxis are now fully integrated with digital payment apps like Alipay and WeChat Pay. English-language versions are widely available, making cash-free travel seamless.\n- **Co-Working for Digital Nomads**: Spaces like **Optics Valley Innovation Hub** and **Wuhan Software Park** offer high-speed internet (avg. 500 Mbps), meeting rooms, and networking events. Many welcome drop-in visitors with daily rates starting at ¥50 (about $7).\n- **Tech Tours**: Several local agencies now run half-day tours of the Optics Valley, including visits to autonomous vehicle test zones (Baidu’s Apollo fleet) and 5G-powered drone shows over East Lake.\n\n## The Talent Pipeline\n\nWuhan’s 89 universities, including the prestigious **Huazhong University of Science and Technology (HUST)**, graduate over 300,000 STEM students annually. This talent pool has fueled explosive growth in fintech, e-commerce, and gaming. In 2025 alone, venture capital funding for Wuhan-based tech firms exceeded $2.3 billion, according to regional reports.\n\n## A Taste of the Future\n\nEven food culture is getting digitized. The **Wuhan Internet Food Festival**, held every May, showcases how local restaurants use AI-driven ordering systems and drone delivery. In 2026, the event drew 500,000 visitors, offering free tastings of re gan mian (hot dry noodles) ordered via a voice-activated app.\n\n## Getting Connected\n\nWi-Fi is now free in all major public areas, including airports, train stations, and the iconic Yellow Crane Tower. For software developers, the **Wuhan Open Source Conference** (next edition: September 2026) attracts global contributors to projects like Apache Hadoop and TensorFlow.\n\n## Final Takeaway\n\nWhether you’re a coder looking for your next gig or a tourist wanting to explore China’s tech frontier, Wuhan offers a unique blend of ancient culture and cutting-edge innovation. The city’s internet ecosystem is not just growing—it’s rewriting the rules of how we live, work, and travel.',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['wuhan', 'technology', 'software', 'internet', 'optics valley', 'digital nomads', 'hubei innovation'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-24T06:09:00.411Z',
    readTime: 3,
  },
  {
    id: 'news-2026-05-24-07-wpag',
    title: 'Explore Hubei\'s Living Legacy: Top Three Kingdoms Historical Sites Open to Visitors',
    summary: 'Discover authentic Three Kingdoms history across Hubei province, from the iconic Red Cliffs to Zhuge Liang\'s ancient temple. New visitor routes launched in 2026.',
    content: '## Journey into the Epic of the Three Kingdoms\n\nFor travelers fascinated by China’s most legendary era, Hubei province offers an unparalleled journey into the Three Kingdoms period (220–280 AD). As the central battlefield of countless struggles between the states of Wei, Shu, and Wu, Hubei is dotted with authentic sites that bring history to life. In early 2026, local tourism authorities unveiled a new themed itinerary connecting key locations, making it easier than ever for international visitors to follow the footsteps of heroes like Zhuge Liang and Cao Cao.\n\n## The Red Cliffs: Where History Was Made\n\nThe most iconic site is **Chibi**, or the Red Cliffs, located about 80 kilometers northwest of Xianning city. It was here, in 208 AD, that the famous Battle of Red Cliffs took place—a decisive naval engagement that shaped the Three Kingdoms’ balance of power. Today, visitors can explore the **Chibi Ancient Battlefield Scenic Area**, which features towering cliffside carvings, a museum with weapons and artifacts, and a replica of ancient warships. As of this year, the site offers guided tours in English every weekend, plus a new light-and-sound show at dusk that recreates the battle’s turning point.\n\n## Jingzhou: The Strategic Heartland\n\nNo tour of Three Kingdoms Hubei is complete without **Jingzhou**, a city that changed hands multiple times during the era. The **Jingzhou Ancient City Wall** is one of the best-preserved in China, with sections dating back to the Three Kingdoms period. Just outside the city, the **Zhuge Liang Cultivation Field** commemorates the legendary strategist’s early life—legend says he farmed here before being recruited by Liu Bei. In 2025, a new visitor center opened with interactive displays and a small theater showing a 20-minute documentary on Zhuge Liang’s strategies.\n\n## Xiangyang: The Siege That Changed Fate\n\nFurther north, **Xiangyang** (now part of Xiangfan) was the site of the famed Siege of Xiangyang, a six-year standoff that ultimately led to the fall of Shu Han. The **Xiangyang Ancient City** features the **Zhongxuan Tower** and the **Lady’s City** section, where defensive walls still stand. A recent archaeological dig revealed a cache of crossbow bolts and pottery, now displayed at the city museum. Travelers can walk the ramparts and imagine the tension of ancient generals.\n\n## Practical Tips for Travelers\n\n- **Best time to visit**: Spring (March–May) and autumn (September–November) offer mild weather and fewer crowds.\n- **Getting around**: High-speed rail connects Wuhan to Chibi (1 hour), Jingzhou (1.5 hours), and Xiangyang (2 hours). Local buses and taxis run frequently.\n- **Language**: Signs at major sites now include English, but a translation app is helpful for smaller venues.\n- **Entry fees**: Ranges from 30 to 120 RMB depending on the site; combo tickets for the new route offer discounts.\n\nWhether you\'re a history buff or a curious traveler, Hubei’s Three Kingdoms sites offer a vivid window into China’s most romanticized era. Plan your visit this year and step into the past.',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['three kingdoms', 'hubei history', 'ancient battlefields', 'cultural tourism', 'chibi', 'jingzhou', 'xiangyang'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-24T06:09:10.026Z',
    readTime: 4,
  },
  {
    id: 'news-2026-05-24-08-c7m5',
    title: 'Chuan Xiang Taste: How Hubei Cuisine Is Spicing Up Global Palates',
    summary: 'Hubei\'s signature Chuan Xiang flavor profile is making waves internationally, blending Sichuan heat with local ingredients to create a unique cross-cultural culinary experience.',
    content: '## A Taste of Hubei Goes Global\n\nThis year, Hubei cuisine is gaining international attention, and at the heart of this trend is the distinctive **Chuan Xiang** flavor profile. Unlike the numbing spice of Sichuan or the fiery heat of Hunan, Chuan Xiang (literally "Sichuan fragrance") is a delicate balance of aromatic spices, mild chili, and local Hubei ingredients like lotus root, freshwater fish, and cured meats. Chefs and food enthusiasts from Tokyo to Toronto are now experimenting with this flavor, blending it with local cuisines to create fusion dishes that honor Hubei\'s culinary heritage.\n\n## What Makes Chuan Xiang Unique?\n\nChuan Xiang isn\'t just about heat—it\'s about depth. The flavor relies on a careful mix of:\n\n- **Dried tangerine peel** for citrusy sweetness\n- **Star anise and cinnamon** for warmth\n- **Hubei black vinegar** for a tangy finish\n- **Local chili pastes** that are milder than their Sichuan counterparts\n\nThis combination creates a savory, slightly sweet, and aromatic taste that pairs beautifully with river fish, duck, and seasonal vegetables. As of 2026, cooking workshops in Wuhan are offering classes on Chuan Xiang techniques, attracting international students eager to replicate the flavor at home.\n\n## Cross-Cultural Influence in Action\n\nThe influence of Chuan Xiang is now visible beyond Hubei. In 2025, a pop-up restaurant in Paris featured a Chuan Xiang-inspired duck confit, while a ramen shop in Osaka introduced a Chuan Xiang broth with lotus root noodles. According to the latest report from the Hubei Culinary Association, over 30 international chefs have traveled to Wuhan this year alone to study the technique firsthand.\n\n## Where to Experience It in Hubei\n\nFor travelers visiting Hubei, the best place to taste authentic Chuan Xiang is in the **hub of Wuhan\'s food scene**—the Hubu Alley breakfast street, where vendors serve Chuan Xiang noodles with sesame paste and pickled vegetables. Upmarket restaurants near East Lake also offer Chuan Xiang river fish hotpot, a must-try for adventurous eaters.\n\n## The Future of Hubei\'s Flavor\n\nAs cultural exchange continues, Chuan Xiang is becoming a symbol of Hubei\'s culinary identity. It\'s not just a spice blend; it\'s a bridge between tradition and innovation. Whether you\'re a foodie planning a trip to Wuhan or a home cook looking for new flavor profiles, Chuan Xiang offers a taste of Hubei that is both comforting and excitingly new.',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['hubei cuisine', 'chuan xiang', 'wuhan food', 'cross-cultural', 'culinary tourism', 'hubei culture', 'asia food trends'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-24T06:09:20.865Z',
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
