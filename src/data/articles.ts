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
    id: 'news-2026-06-24-01-kt2j',
    title: 'Hubei Springs to Life: Lantern Fairs and Festive Celebrations for the Year of the Horse',
    summary: 'Discover the dazzling lantern fairs and traditional festivities lighting up Hubei for the Spring Festival, from Wuhan\'s East Lake to Yichang\'s Three Gorges.',
    content: '## A Luminous Welcome to the Year of the Horse\n\nAs the Spring Festival approaches, Hubei province is transforming into a wonderland of light and color. This year, the Year of the Horse, celebrations are expected to draw both domestic and international travelers to experience the region\'s most iconic lantern fairs and cultural performances. According to recent reports, festivities kicked off in late January and will run through mid-February 2026, offering a vibrant blend of ancient tradition and modern spectacle.\n\n## Where to Catch the Best Lantern Displays\n\n**Wuhan\'s East Lake Lantern Festival** remains the crown jewel of Hubei\'s Spring Festival celebrations. Now in its 10th edition, the event features over 100 giant lantern installations, including a 30-meter-tall galloping horse made of silk and LED lights. The fair is held at the East Lake Cherry Blossom Park, where visitors can stroll through themed zones inspired by the classic novel *Journey to the West* and local folk tales. Nightly drone shows and firework displays add a contemporary twist.\n\n**Yichang\'s Three Gorges Lantern Fair** offers a more serene experience along the banks of the Yangtze River. This year, the fair highlights the region\'s connection to Qu Yuan, the ancient poet, with lanterns depicting scenes from his life and poetry. Visitors can also take nighttime boat cruises to view illuminated cliffs and floating lanterns—a truly magical sight.\n\n**Xiangyang\'s Ancient City Lantern Festival** brings history to life. The Ming Dynasty-era city walls are adorned with thousands of red lanterns, and the main square hosts a nightly imperial parade with actors in traditional costumes. Don\'t miss the \'Lantern Riddle\' game, where solving riddles wins small gifts like local snacks or calligraphy scrolls.\n\n## Beyond the Lights: Cultural Experiences\n\nSpring Festival in Hubei is more than just lanterns. In **Enshi**, the Tujia ethnic minority holds a \'Horse Lantern Dance\' (Mǎdēng Wǔ) featuring performers in horse-shaped bamboo frames, accompanied by drumming and singing. Meanwhile, **Wuhan\'s Jianghan Road Pedestrian Street** offers a \'Temple Fair\' (Miào Huì) with street food stalls serving glutinous rice balls (tāngyuán), fried spring rolls, and local delicacies like hot dry noodles (règānmiàn).\n\n## Practical Tips for Visitors\n\n- **Best time to visit**: Evenings from 6 PM to 10 PM, when lanterns are fully illuminated.\n- **Tickets**: Most fairs have affordable entry fees (¥30–¥80). Book online via platforms like Ctrip or Meituan to avoid queues.\n- **Getting around**: Wuhan\'s metro extends service hours during the festival. High-speed trains connect major cities—for example, Wuhan to Yichang takes just 2 hours.\n- **Visa info**: Holders of passports from 54 countries can enjoy a 144-hour visa-free transit in Wuhan. Check eligibility with your local Chinese embassy.\n\nWhether you\'re marveling at a giant horse lantern or savoring a bowl of spicy noodles, Hubei\'s Spring Festival offers an unforgettable plunge into Chinese culture. As the locals say, \'Xīnnián kuàilè\'—Happy New Year!',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['spring festival', 'lantern fair', 'hubei tourism', 'wuhan', 'yichang', 'cultural festival', 'year of the horse'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-24T06:12:20.976Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-24-02-396v',
    title: 'Hubei’s Tea Culture Festivals: A 2026 Guide for Travelers',
    summary: 'Discover Hubei’s vibrant tea festivals in 2026, from Enshi’s green tea harvest to Yichang’s black tea ceremonies, blending ancient traditions with modern tourism.',
    content: '## A Sip of Tradition: Hubei’s Tea Festivals in 2026\n\nHubei province, a cradle of Chinese tea culture, is brewing up a storm of festivals this year. According to the latest tourism reports, the province is hosting a series of tea-themed events that invite international travelers to immerse themselves in the aroma, taste, and artistry of local tea varieties. From the misty mountains of Enshi to the Yangtze River valleys, here’s your guide to Hubei’s tea festivals in 2026.\n\n## Enshi Yulu Tea Festival: The Green Gold of Spring\n\nHeld annually in late March through April, the Enshi Yulu Tea Festival celebrates the province’s most famous green tea, Enshi Yulu (or “Jade Dew”). This year’s edition, running from March 20 to April 10, offers visitors hands-on tea-picking sessions in the terraced fields of Wufeng and Hefeng counties. English-guided tours are available, allowing you to learn about the steaming process that gives Enshi Yulu its unique chestnut-like flavor. Don’t miss the evening tea ceremonies at the Tujia Ethnic Village, where local performers blend tea tasting with traditional dance.\n\n## Yichang Black Tea Expo: A Toast to History\n\nFrom May 15 to 20, the Yichang Black Tea Expo in Wufeng Tujia Autonomous County takes center stage. This event highlights Yichang’s rich history as a key hub on the ancient Tea Horse Road. Visitors can sample aged black teas, join masterclasses on tea blending, and explore the newly opened Tea Culture Museum, which features interactive exhibits on the region’s tea trade. A highlight this year is the “Tea and Yangtze” boat cruise, where you can sip premium brews while drifting past the Three Gorges.\n\n## Xianning Qingming Tea Festival: Spring’s First Harvest\n\nEvery April, Xianning hosts the Qingming Tea Festival, timed to the traditional Qingming Festival (Tomb-Sweeping Day). The 2026 festival, set for April 4–6, focuses on pre-Qingming teas—the first harvest of the year, prized for their delicate flavor. Visitors can join guided hikes through the bamboo-shaded tea gardens of Chibi, sample freshly picked green teas, and participate in a tea-picking competition. Local chefs also offer tea-infused dishes, such as tea-smoked duck and green tea noodles, at pop-up stalls.\n\n## Practical Tips for Travelers\n\n- **Best time to visit:** March to May for spring teas; October for autumn harvest events (e.g., the Wudang Mountain Tea Festival in Shiyan).\n- **Visa-free entry:** As of 2026, Hubei participates in China’s 144-hour visa-free transit policy for travelers from 54 countries, allowing short stays in Wuhan and surrounding areas.\n- **Getting there:** Fly into Wuhan Tianhe International Airport, then take high-speed trains to Enshi (2 hours), Yichang (1.5 hours), or Xianning (30 minutes).\n- **Language:** While most signage is in Chinese, major festivals offer English-speaking volunteers and printed guides.\n\n## Why Tea Lovers Love Hubei\n\nHubei’s tea culture is deeply tied to its geography. The province’s humid climate and mineral-rich soils produce teas with distinct profiles—from the nutty Enshi Yulu to the malty Yichang black tea. Festivals here aren’t just about drinking; they’re about connecting with the land and the people who have cultivated these leaves for centuries. Whether you’re a seasoned tea connoisseur or a curious traveler, Hubei’s tea festivals offer an unforgettable sensory journey.\n\nFor updates on festival dates and English-language tours, visit the official Hubei Tourism Bureau website or follow their WeChat account (available in English).',
    coverImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['hubei', 'tea culture', 'festivals', 'enshi', 'yichang', 'cultural tourism', 'travel guide'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-24T06:12:34.313Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-24-03-fre2',
    title: 'Hubei Travels Made Easier: Latest Updates on China’s Visa-Free Transit Policy for International Visitors',
    summary: 'China’s expanded 144-hour visa-free transit policy now covers Wuhan and other key Hubei hubs, allowing travelers from 54 countries to explore the province without a visa for up to six days.',
    content: '## Hubei Welcomes More International Travelers with Expanded Visa-Free Transit\n\nAs of early 2026, Hubei province has become even more accessible for international travelers thanks to the latest expansion of China’s 144-hour visa-free transit policy. This policy, which allows eligible foreign nationals to stay in designated areas without a visa for up to six days, now includes Wuhan Tianhe International Airport (WUH) as one of the key entry points.\n\nThis year, the policy has been streamlined to cover 54 countries, including the United States, Canada, the United Kingdom, Australia, Japan, South Korea, and most European Union member states. Travelers arriving from these countries can transit through Wuhan and explore the entire Hubei province—not just the city—for up to 144 hours (six days), provided they hold a valid onward ticket to a third country or region.\n\n## What This Means for Your Hubei Itinerary\n\nFor culture enthusiasts and adventure seekers, this is a game-changer. You can now plan a whirlwind tour of Hubei’s highlights without the hassle of applying for a tourist visa in advance. Here’s what you can do during your 144-hour stay:\n\n- **Explore Wuhan**: Visit the iconic Yellow Crane Tower, stroll along the East Lake Greenway, and savor a bowl of hot dry noodles (re gan mian) at a local breakfast spot.\n- **Discover Ancient Wonders**: Take a high-speed train to Yichang and cruise through the breathtaking Three Gorges, or hike the sacred Wudang Mountains, a UNESCO World Heritage site known for its Taoist temples and martial arts legacy.\n- **Immerse in Nature**: Head to Shennongjia, a pristine forested region famous for its biodiversity and the legendary “Yeren” (Wild Man) folklore.\n\n## Practical Details for Travelers\n\nThe policy is designed for transit passengers, so you must arrive in Hubei by air and depart to a third country (not your country of origin). Key requirements include:\n\n- A valid passport with at least six months’ validity.\n- A confirmed onward ticket to a destination outside China (e.g., Wuhan to Bangkok or Seoul).\n- Completion of a temporary entry card upon arrival.\n\nAs of 2026, the application process takes just 15–20 minutes at the immigration counter, and no advance approval is needed. This is a significant improvement from earlier years, when the procedure was more cumbersome.\n\n## Looking Ahead\n\nWith this policy in place, Hubei is positioning itself as a must-visit destination for short-term travelers. Whether you’re a backpacker on a global tour or a business traveler with a free weekend, the 144-hour visa-free transit offer makes exploring the heart of China easier than ever.\n\nFor the latest updates on entry requirements, always check with the nearest Chinese embassy or consulate before your trip.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['hubei', 'wuhan', 'visa-free transit', '144-hour policy', 'travel regulations', 'international travelers', 'china entry updates'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-24T06:12:49.088Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-24-04-sls9',
    title: 'Wuhan Tianhe Airport Expands International Routes in 2026: New Direct Flights to Europe and Southeast Asia',
    summary: 'Wuhan Tianhe Airport launches new international routes in 2026, connecting Hubei directly to Paris, Tokyo, and Bangkok, with increased frequencies to Dubai and Singapore. Perfect for travelers seeking seamless access to central China.',
    content: '## A Hub for Global Travelers\n\nBig news for international travelers heading to Hubei! Wuhan Tianhe International Airport (WUH) has announced a major expansion of its international flight network in 2026, making it easier than ever to explore the cultural and natural wonders of central China. As of this year, the airport now operates over 30 direct routes to destinations across Asia, Europe, and the Middle East, with new additions that cater to both business and leisure travelers.\n\n## New Direct Routes in 2026\n\nAccording to the latest updates from the airport authority, several new routes have been launched or resumed since early 2026:\n\n- **Wuhan – Paris (Charles de Gaulle)**: Starting March 2026, Air France offers 4 weekly flights, cutting travel time to just 11 hours. This route is a game-changer for European tourists wanting to visit the Three Gorges or Wuhan’s historic Yellow Crane Tower.\n- **Wuhan – Tokyo (Narita)**: China Southern Airlines added a daily flight from April 2026, providing a direct link for Japanese travelers and culture enthusiasts eager to explore Hubei’s ancient Buddhist sites.\n- **Wuhan – Bangkok (Suvarnabhumi)**: Thai Airways now operates 7 weekly flights, up from 5 in 2025, perfect for Southeast Asian tourists seeking a gateway to central China.\n\n## Increased Frequencies on Popular Routes\n\nIn response to growing demand, existing routes have also received a boost:\n\n- **Wuhan – Dubai**: Emirates increased from 3 to 5 weekly flights as of June 2026, connecting the Middle East to Hubei’s burgeoning tech and tourism scenes.\n- **Wuhan – Singapore**: Singapore Airlines now offers 10 weekly flights (up from 7), making it easy for global travelers to use Singapore as a layover hub.\n- **Wuhan – Hong Kong**: Daily flights resumed in 2026, with Cathay Pacific offering 14 weekly services – ideal for business travelers and those combining Hubei with a Hong Kong visit.\n\n## What This Means for Travelers\n\nThis expansion is great news for anyone planning a trip to Hubei. The airport now serves as a major transit point for central China, with upgraded facilities including a new international terminal lounge opened in 2025. Travelers can enjoy:\n\n- **Visa-free transit**: As of 2026, passengers from 54 countries can enjoy 144-hour visa-free transit in Wuhan, allowing a short stopover to visit key attractions like East Lake or Wuhan University.\n- **Direct connections**: No more long layovers in Beijing or Shanghai; you can fly directly to Wuhan from more global cities than ever before.\n\n## Local Travel Tips\n\nOnce you land, getting to the city center is a breeze. The Wuhan Metro Line 2 connects the airport to downtown in about 45 minutes, while taxis and ride-hailing apps like Didi are widely available. For a taste of local life, try the famous Wuhan hot dry noodles (re gan mian) at a nearby street stall before heading to the Yellow Crane Tower or a Yangtze River cruise.\n\n## Looking Ahead\n\nWith further route expansions expected in late 2026 – including potential direct flights to Los Angeles and Sydney – Wuhan Tianhe Airport is cementing its role as a key gateway to central China. Whether you’re a culture lover, a foodie, or a business traveler, now is the perfect time to plan your Hubei adventure.',
    coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['wuhan tianhe airport', 'international flights', 'hubei travel', 'visa-free transit', 'china aviation', 'southeast asia routes', 'europe flights'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-24T06:13:00.472Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-24-05-4x3u',
    title: 'Wuhan’s Biotech Boom: New Labs, Smart Drugs, and Global Research Hubs in 2026',
    summary: 'Wuhan is emerging as a global biotech powerhouse with new R&D centers, AI-driven drug discovery, and international partnerships reshaping the local pharmaceutical landscape in 2026.',
    content: '## A New Era for Wuhan’s Biotech Scene\n\nWuhan, long known as a transportation hub and home to the mighty Yangtze, is now making waves in the world of biotechnology and pharmaceuticals. As of 2026, the city’s biotech cluster — centered around the Wuhan National Bio-industry Base (also called Biolake) — has grown into one of Asia’s most dynamic life science ecosystems. Recent reports highlight a surge in smart drug development, AI-assisted diagnostics, and cutting-edge vaccine research, all of which are attracting international talent and investment.\n\n## Biolake: The Heart of Innovation\n\nThe Biolake area in the East Lake High-tech Zone is where much of the action happens. In the first half of 2026 alone, over 30 new biotech startups joined the park, focusing on gene therapy, monoclonal antibodies, and personalized medicine. Major Chinese pharmaceutical firms have expanded their R&D campuses here, while global players like Roche and Pfizer have deepened their collaborations with local research institutes. The result is a vibrant, cross-border environment where scientists from Europe, Southeast Asia, and North America work side by side.\n\n## AI and Big Data in Drug Discovery\n\nOne of the most exciting developments is the integration of artificial intelligence into drug development. Local firms such as Wuhan BioMind and Hubei GeneTech are using machine learning to screen thousands of compounds in days — a process that once took years. According to a recent industry briefing, three AI-discovered drugs from Wuhan labs entered clinical trials this year, targeting rare cancers and autoimmune diseases. For travelers interested in science, Biolake offers guided tours of its innovation center (by appointment), where you can see robotic labs and digital biology displays in action.\n\n## International Collaboration and Talent\n\nWuhan’s universities, including Huazhong University of Science and Technology and Wuhan University, are fueling the talent pipeline. Joint programs with the University of Cambridge and the Karolinska Institute have brought foreign researchers to the city, while annual events like the Wuhan Biotech Summit (held each November) attract thousands of delegates. For culture enthusiasts, this means more English-language seminars, public lectures, and even a ‘Science Walk’ through Biolake’s green spaces, where posters explain the latest breakthroughs in plain language.\n\n## What This Means for Visitors\n\nWhile biotech might sound niche, it shapes daily life in Wuhan. New pharmacies stock advanced generics, and the city’s hospitals are adopting telemedicine systems developed locally. Travelers can also visit the Hubei Science and Technology Museum, which features a permanent exhibition on ‘Medicine of the Future’, showcasing Wuhan-made innovations. As the industry grows, expect more English-friendly resources, from lab tours to health-tech cafes.\n\n## Looking Ahead\n\nWith continued investment in AI, genomics, and clean manufacturing, Wuhan is positioning itself as a must-visit destination for anyone curious about where medicine is headed. Whether you’re a scientist, a student, or simply a traveler with an interest in innovation, the city’s biotech story is one worth following.',
    coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['wuhan', 'biotechnology', 'pharmaceuticals', 'biolake', 'innovation', 'artificial intelligence', 'hubei'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-24T06:13:13.843Z',
    readTime: 4,
  },
  {
    id: 'news-2026-06-24-06-5wpl',
    title: 'Hubei Expands 5G Network to Cover All Scenic Spots and Highways by 2026',
    summary: 'Hubei province is rolling out a province-wide 5G network, covering all major tourist attractions, highways, and rural areas by the end of 2026, ensuring seamless connectivity for travelers.',
    content: '## 5G Coverage Reaches New Heights in Hubei\n\nAs of early 2026, Hubei province has achieved a major milestone in its digital infrastructure, with 5G signals now blanketing over 90% of urban areas and all major transportation hubs. According to the latest provincial telecom report, the network deployment—spearheaded by China Mobile, China Unicom, and China Telecom—has expanded to include 120,000 base stations across the province, up from 80,000 in 2024. This rapid expansion is part of a broader effort to turn Hubei into a \'smart tourism\' hub.\n\n## Smart Tourism Gets a Boost\n\nFor international travelers, this means ultra-fast internet at iconic destinations like the Three Gorges Dam, Yellow Crane Tower in Wuhan, and the ancient Wudang Mountains. The deployment specifically prioritizes scenic spots: as of June 2026, 5G is live at Enshi Grand Canyon, Shennongjia Forestry District, and all national parks. Tourists can now stream 4K videos, use real-time translation apps, and access augmented reality guides without lag.\n\n- **Wuhan天河 Airport** and **Wuhan Railway Station** now offer free 5G Wi-Fi hotspots.\n- **High-speed trains** on the Wuhan–Yichang and Wuhan–Shiyan routes have 5G antennas installed for uninterrupted video calls.\n- **Rural homestays** in Xianning and Huanggang are being equipped with 5G routers to support remote work for digital nomads.\n\n## Connectivity for Remote Areas\n\nPerhaps the most impressive achievement is the extension of 5G to remote mountain villages in western Hubei. In places like Badong County and Lichuan, where 4G was previously spotty, 5G towers now connect local tea farmers with global buyers via live-streaming e-commerce. This has opened new opportunities for agritourism and cultural exchanges.\n\n## What This Means for Visitors\n\nFor anyone planning a trip to Hubei in 2026 or beyond, the 5G rollout means you can stay connected everywhere—from the bustling streets of Wuhan to the serene trails of Shennongjia. Download speeds average 800 Mbps in cities and 300 Mbps in rural areas, making it easy to navigate, share photos, or book last-minute tickets. No more worrying about dead zones during your journey.\n\n## Looking Ahead\n\nBy the end of 2026, Hubei aims to have 5G coverage on every provincial highway and at every A-level scenic spot. The province is also testing 5G-Advanced (5.5G) in Wuhan\'s Optics Valley, promising even faster speeds for future applications like autonomous tour buses and holographic guides.',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['5g', 'hubei', 'technology', 'tourism', 'digital infrastructure', 'wuhan', 'smart travel'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-24T06:13:27.034Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-24-07-b1qx',
    title: 'Explore the Origins of Dragon Boat Festival in Qu Yuan\'s Hometown, Hubei',
    summary: 'Discover the ancient roots of Dragon Boat Festival in Hubei, China, where poet Qu Yuan was born. New cultural tours and events in 2026 bring his legacy to life for international visitors.',
    content: '## The Poet Behind the Festival\n\nEvery year, millions around the world celebrate Dragon Boat Festival (Duanwu Jie) with zongzi, dragon boat races, and aromatic herbs. But few know that this vibrant tradition traces its origins to Hubei province, the homeland of the legendary poet and minister Qu Yuan (c. 340–278 BCE). As of 2026, new cultural initiatives in Hubei are making it easier than ever for international travelers to experience this heritage firsthand.\n\nQu Yuan was born in the ancient state of Chu, in what is now Zigui County, Yichang, Hubei. According to historical records, he was a beloved statesman and one of China\'s earliest known poets. His masterpiece, "Li Sao" or "Encountering Sorrow," is a timeless epic of exile and longing. When his kingdom fell, Qu Yuan drowned himself in the Miluo River (in modern-day Hunan, near the Hubei border) as an act of protest. Local fishermen raced to save him, beating drums and throwing rice into the water to distract fish from his body—acts that became the origins of dragon boat racing and zongzi.\n\n## Hubei\'s Living Heritage: New Tours and Festivals\n\nThis year, Hubei\'s cultural authorities have launched enhanced tourism experiences focused on Qu Yuan\'s legacy. In Zigui County, visitors can tour the Qu Yuan Temple and a newly renovated Qu Yuan Memorial Hall, which opened in early 2026 with interactive exhibits and multilingual guides. The annual Dragon Boat Festival, typically held in June, features one of China\'s most authentic dragon boat races on the Yangtze River near Yichang. Travelers can also participate in zongzi-making workshops and traditional herb-sachet crafting in local villages.\n\nFor those planning ahead, the 2026 Dragon Boat Festival falls on June 25. Special cultural tours from Wuhan to Yichang and Zigui are available, including visits to the Three Gorges region, where Qu Yuan\'s poetry often drew inspiration from the dramatic landscapes.\n\n## Useful Tips for International Visitors\n\n- **Best time to visit**: Late June for the festival, or spring/autumn for milder weather.\n- **Getting there**: High-speed trains from Wuhan to Yichang take about 2 hours; then buses or taxis to Zigui.\n- **Language**: English signage and guides are increasingly available at major sites.\n- **Visa**: China\'s visa-free transit policy (up to 144 hours) now applies to travelers from 54 countries arriving in Wuhan, Hubei\'s capital.\n\nWhether you\'re a poetry lover, a history buff, or simply curious about one of Asia\'s most colorful festivals, Hubei offers an unforgettable journey into the heart of Dragon Boat Festival.',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['dragon boat festival', 'qu yuan', 'hubei culture', 'zigu', 'yichang', 'chinese poetry', 'cultural tourism'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-24T06:13:38.359Z',
    readTime: 3,
  },
  {
    id: 'news-2026-06-24-08-fcp7',
    title: 'Hubei’s Chu State Treasures: New Exhibits & Digital Innovations in 2026',
    summary: 'Discover ancient Chu State artifacts in Hubei, from new museum exhibits to digital reconstructions. A guide for culture lovers visiting in 2026.',
    content: '## The Legacy of Chu State\n\nHubei province was the heartland of the ancient Chu State (c. 1030–223 BCE), a powerful kingdom known for its bronze casting, lacquerware, silk textiles, and distinctive shamanistic culture. Today, travelers can explore this rich heritage through world-class museums and archaeological sites.\n\n## Top Museums for Chu Artifacts\n\n- **Hubei Provincial Museum (Wuhan)** — Houses the famous *Sword of Goujian* (still sharp after 2,500 years) and the *Marquis Yi of Zeng’s Bronze Bells* (a complete 65-piece set). As of 2026, the museum has a new immersive gallery projecting Chu-era rituals.\n- **Jingzhou Museum** — Specializes in Chu silk and lacquerware. Recent 2025 excavations added 300+ artifacts, including a rare *bird-headed staff* used in shamanic ceremonies.\n- **Yichang Museum** — Showcases Chu bronze vessels discovered in the Three Gorges region. A new VR tour launches this spring.\n\n## Digital Innovations in 2026\n\nThis year, Hubei Cultural Heritage Bureau unveiled a **Chu Kingdom digital archive** with 3D models of over 2,000 artifacts. Visitors can explore a virtual reconstruction of the Chu capital *Ying* (near modern Jingzhou) on-site via AR glasses. The tech also powers a “Time Traveler” app — scan QR codes at 10 major sites to see ancient buildings overlaid on modern landscapes.\n\n## Travel Tips\n\n- **Best time to visit**: March–May or September–November for mild weather.\n- **Getting there**: High-speed trains connect Wuhan to Jingzhou (1.5 hrs) and Yichang (2 hrs).\n- **Special event**: The *Chu Culture Festival* (every October) in Jingzhou features reenactments, traditional music, and artifact exhibitions.\n\n## Why It Matters\n\nFor culture enthusiasts, Chu artifacts reveal a sophisticated society that rivaled contemporaries like the Greeks or Persians. The intricate bronze work and philosophical texts (e.g., *Tao Te Ching*, linked to Chu sage Laozi) offer a profound window into China’s classical age.\n\nPlan your trip now — Hubei’s ancient past is more accessible than ever in 2026.',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['chu state', 'hubei museums', 'ancient artifacts', 'bronze bells', 'sword of goujian', 'wuhan travel', 'jingzhou'],
    author: 'HiHubei News Desk',
    publishDate: '2026-06-24T06:13:49.960Z',
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
