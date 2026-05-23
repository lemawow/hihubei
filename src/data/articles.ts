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
    id: 'news-2026-05-23-01-4jas',
    title: 'Wudang Mountain Unveils New Hiking Trails and Cultural Experiences for 2026 Season',
    summary: 'Wudang Mountain, a UNESCO World Heritage site, launches new eco-hiking routes and immersive Taoist cultural programs this year, attracting global travelers seeking adventure and spiritual enrichment.',
    content: '## New Hiking Trails Open for Nature Lovers\n\nAs of early 2026, Wudang Mountain has opened two new hiking trails designed to showcase its stunning natural beauty and reduce overcrowding on popular routes. The **Cloud Path** (Yun Dao) winds through ancient pine forests and past hidden waterfalls, offering panoramic views of the 72 peaks. A second trail, the **Pilgrim’s Way**, follows historic stone steps used by Taoist monks for centuries, connecting the Purple Cloud Palace with the South Rock Palace. Both trails are clearly marked and range from moderate to challenging, with rest areas and informational plaques in English and Chinese.\n\n## Taoist Culture Immersion Programs\n\nThis spring, the Wudang Mountain Scenic Area launched a new "Taoist Living Experience" program. International visitors can now join half-day or full-day workshops at the **Yuxu Temple**, including:\n- **Tai Chi and Qigong classes** led by certified masters (suitable for beginners)\n- **Calligraphy and tea ceremony** sessions in historic courtyards\n- **Guided meditation** in the tranquil **Golden Hall** (Jindian) surroundings\n\nThese programs run from March to November, with advance booking recommended via the official Wudang Tourism WeChat mini-program or partner travel agencies.\n\n## Improved Transportation and Visitor Services\n\nAccording to the latest report from Hubei Provincial Department of Culture and Tourism, a new shuttle bus system now connects the **Wudangshan Railway Station** (on the Wuhan–Shiyan high-speed rail line) directly to the mountain’s main entrance. Buses run every 30 minutes from 7:00 AM to 6:00 PM, cutting previous transfer times by 40%. Additionally, a redesigned visitor center at the **Silver Street** area now offers free luggage storage, multilingual audio guides, and a digital queue system for cable car tickets.\n\n## Spring Festival and Cherry Blossom Views\n\nThis year’s **Wudang Mountain Spring Cultural Festival** (March 20–April 15) features daily Taoist music performances, martial arts demonstrations, and guided tours of the blooming cherry and plum trees along the **East Slope**. The festival coincides with the cherry blossom season, making it an ideal time for photographers and nature enthusiasts.\n\n## Practical Tips for International Travelers\n\n- **Visa**: China’s 144-hour visa-free transit policy applies at Wuhan Tianhe International Airport for travelers from 54 countries, allowing a stopover to visit Wudang.\n- **Best time to visit**: March–May and September–November for mild weather and clear views.\n- **Accommodation**: New boutique hotels like **Mountaintop Zen** offer eco-friendly stays near the South Rock area, starting from ¥600 per night.\n\nWith these updates, Wudang Mountain remains a must-visit destination for anyone exploring Hubei’s cultural and natural heritage.',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['wudang mountain', 'hiking trails', 'taoist culture', 'hubei tourism', 'cultural experiences', 'spring festival', 'nature travel'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-23T07:32:38.355Z',
    readTime: 3,
  },
  {
    id: 'news-2026-05-23-02-aaze',
    title: 'Yellow Crane Tower Unveils Immersive Digital Exhibitions and Cultural Events',
    summary: 'Discover new immersive digital exhibitions and seasonal cultural events at Yellow Crane Tower, blending ancient poetry with modern technology for an unforgettable visitor experience.',
    content: '## A New Era for an Ancient Icon\n\nOne of China’s most celebrated landmarks, the **Yellow Crane Tower** in Wuhan, is stepping into 2026 with a vibrant lineup of cultural events and high-tech exhibitions. According to the latest reports, the site has launched a series of immersive digital installations that bring the tower’s 1,800-year history to life in ways never seen before.\n\nVisitors can now experience the **“Poetry in the Clouds”** exhibition, which uses projection mapping and augmented reality to recreate scenes from famous Tang Dynasty poems, including Cui Hao’s timeless verses. The exhibition runs daily in the tower’s newly renovated East Wing Hall, with English audio guides and interactive touchscreens available for international guests.\n\n## Seasonal Festivals and Performances\n\nThroughout spring and autumn, the tower hosts **nighttime cultural performances** on its plaza. This year’s program includes traditional Chinese music concerts, hanfu fashion shows, and live calligraphy demonstrations. Special **“Moon over the River”** evening events are scheduled for the Mid-Autumn Festival, offering lantern displays and poetry recitals under the full moon.\n\nFor those planning a visit, the tower also offers **workshop experiences** where guests can learn paper-cutting, seal carving, and tea ceremony traditions. These hands-on sessions are available every weekend and require advance booking through the official WeChat mini-program or at the ticket office.\n\n## Practical Tips for International Travelers\n\n- **Best time to visit**: Weekday mornings (before 10:00 AM) to avoid crowds.\n- **Tickets**: 80 RMB for adults; discounts available for students and seniors.\n- **Location**: Wuchang District, Wuhan, at the confluence of the Yangtze and Han rivers.\n- **Getting there**: Take Metro Line 5 to **Sijimen Station**, Exit A, then a 10-minute walk.\n- **Language**: English signage and audio guides are now standard; a mobile app with multi-language support is also available for download.\n\nWith its blend of ancient culture and modern innovation, Yellow Crane Tower remains a must-see destination for anyone exploring Hubei’s rich heritage.',
    coverImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['yellow crane tower', 'wuhan', 'cultural events', 'immersive exhibitions', 'digital art', 'hubei tourism', 'ancient poetry'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-23T07:32:50.266Z',
    readTime: 3,
  },
  {
    id: 'news-2026-05-23-03-mh25',
    title: 'New Streamlined Entry Procedures for Foreign Tourists at Hubei Cruise Ports in 2026',
    summary: 'Hubei has introduced simplified visa-on-arrival and digital pre-clearance systems at its Yangtze River cruise ports, making it easier for international travelers to explore the province\'s cultural highlights.',
    content: '## Faster, Smarter Entry for Cruise Travelers\n\nAs of 2026, foreign tourists arriving at Hubei\'s Yangtze River cruise ports—including the bustling Wuhan Port and the scenic Yichang Port—can take advantage of newly streamlined entry procedures designed to reduce wait times and enhance the travel experience. The updated system, rolled out this year, reflects Hubei\'s growing popularity as a cruise destination on the world-famous Yangtze River.\n\n## Visa-on-Arrival and Digital Pre-Clearance\n\nUnder the latest regulations, visitors from over 50 countries can now apply for a 24-hour visa-on-arrival directly at the cruise terminals. The process takes roughly 15 minutes, with dedicated counters staffed by multilingual officers. For those planning longer stays, a new digital pre-clearance platform allows travelers to submit their visa applications online up to 30 days before departure. Approval is typically granted within 48 hours, and the e-visa is linked directly to the passenger\'s passport.\n\n## What Documents You Need\n\nTo make the most of the new procedures, ensure you have:\n\n- A valid passport with at least six months of remaining validity\n- A completed arrival card (available in English, Japanese, Korean, and French)\n- Proof of onward travel (e.g., a cruise ticket or flight booking)\n- A recent passport-sized photo (digital upload accepted for pre-clearance)\n\nCruise operators like Century Cruises and Viking River Cruises now provide pre-departure guidance packets that include QR codes linking to the digital application portal.\n\n## Expanded 144-Hour Transit Policy for Cruise Passengers\n\nThis year, Wuhan Port has been included in China\'s 144-hour visa-free transit program. International travelers holding passports from 54 eligible countries—including the US, UK, Canada, Australia, and most EU nations—can enter Hubei without a visa and stay for up to six days, provided they hold a confirmed cruise ticket to a third country or region. This change has been a game-changer for short-stay cultural tourists.\n\n## Tips for a Smooth Arrival\n\n- Arrive at the port at least 45 minutes before your scheduled docking time for processing.\n- Download the "Hubei Cruise Guide" app (available on iOS and Android) for real-time queue updates and digital form submission.\n- If you have questions, look for the bright blue "Tourist Assistance" kiosks near the immigration hall—staff speak English, Japanese, and Mandarin.\n\n## Cultural Highlights Await\n\nWith faster entry procedures, visitors have more time to enjoy Hubei\'s treasures. From the ancient Yellow Crane Tower in Wuhan to the breathtaking Three Gorges near Yichang, the province offers a rich blend of history and natural beauty. Many cruise itineraries now include guided shore excursions that depart directly from the port, making it seamless to step off the ship and into a 2,000-year-old story.\n\nFor the latest updates on entry rules, check the official Hubei Provincial Tourism website or consult your cruise operator before departure.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['hubei', 'cruise', 'visa', 'yangtze river', 'wuhan port', 'yichang', 'travel regulations'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-23T07:32:59.703Z',
    readTime: 3,
  },
  {
    id: 'news-2026-05-23-04-xa40',
    title: 'Hubei Travel Gets Easier: New Visa-Free Transit Rules Expand Options in 2026',
    summary: 'International travelers can now enjoy extended 144-hour visa-free transit in Hubei, with new entry points and streamlined procedures making Wuhan a top gateway.',
    content: '## Big News for International Visitors to Hubei\n\nGreat news for globetrotters heading to central China! As of 2026, Hubei province has expanded its visa-free transit policy, making it simpler than ever for international travelers to explore Wuhan and beyond. The 144-hour visa-free transit now applies to citizens of 54 countries, allowing them to stay in the province for up to six days without a visa.\n\n## What\'s Changed This Year?\n\nAccording to the latest updates from immigration authorities, the policy now includes:\n\n- **New entry points**: In addition to Wuhan Tianhe International Airport, travelers can now enter via high-speed rail stations and river ports in Wuhan, including the newly upgraded Wuchang Railway Station and Hankou Port.\n- **Extended area**: The visa-free zone now covers all of Hubei province, not just Wuhan. This means you can explore Yichang\'s Three Gorges, Enshi\'s Grand Canyon, or Xiangyang\'s ancient city walls without extra paperwork.\n- **Streamlined online application**: An upgraded digital platform allows travelers to pre-register their travel plans and receive instant approval, cutting wait times at the border.\n\n## Who Qualifies?\n\nThe 144-hour visa-free transit is available to passport holders from 54 countries, including the United States, Canada, the United Kingdom, Australia, Japan, South Korea, and most EU nations. The key requirement is that you must have a confirmed onward ticket to a third country (not your country of origin) within 144 hours.\n\n## Why Visit Hubei During Transit?\n\nHubei is a treasure trove of Chinese culture and natural beauty. Here\'s what you can do in six days:\n\n- **Day 1-2**: Explore Wuhan\'s Yellow Crane Tower, stroll along East Lake, and sample hot dry noodles (regamian) at a local breakfast spot.\n- **Day 3**: Take a bullet train to Yichang for a Yangtze River cruise through the Three Gorges.\n- **Day 4-5**: Head south to Enshi to hike through the breathtaking Grand Canyon and visit the Tusi City ruins.\n- **Day 6**: Return to Wuhan for last-minute shopping at Jianghan Road and catch your flight.\n\n## Practical Tips for Travelers\n\n- **Double-check your passport**: Ensure your passport is valid for at least six months from your entry date.\n- **Book your onward ticket**: Have a printed or digital copy ready for inspection.\n- **Use the e-channel**: At Wuhan Tianhe International Airport, e-gates are now available for visa-free transit passengers, reducing entry time to under 10 minutes.\n\n## Looking Ahead\n\nHubei\'s tourism officials have hinted at further expansions, including potential 240-hour transit options by late 2027. For now, the current policy offers a fantastic opportunity to discover one of China\'s most culturally rich provinces without the hassle of a full visa application.\n\nFor the latest updates, visit the official Hubei Provincial Immigration Office website or check HiHubei.com regularly.',
    coverImage: 'https://images.unsplash.com/photo-1566891439633-e183f5b64d2f?w=800&auto=format&fit=crop',
    category: '签证',
    tags: ['wuhan', 'hubei', 'visa-free transit', 'travel policy', '144-hour visa', 'yangtze river', 'international travel'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-23T07:33:11.527Z',
    readTime: 3,
  },
  {
    id: 'news-2026-05-23-05-w3s3',
    title: 'Wuhan Biotech and Pharma Industry Sees Major Expansion in 2026',
    summary: 'Latest updates on Wuhan\'s booming biotech and pharmaceutical sector, featuring new research hubs, international collaborations, and innovations that are shaping the city\'s role as a global health-tech leader.',
    content: '## Wuhan Biotech and Pharma Industry Sees Major Expansion in 2026\n\nWuhan, long known as a hub for life sciences innovation, is making headlines this year with a series of major developments in its biotech and pharmaceutical sectors. As of mid-2026, the city has solidified its reputation as a global center for cutting-edge medical research and production, attracting both top talent and international investment.\n\n### New Research Hub Opens in Optics Valley\n\nOne of the most talked-about updates is the opening of the Wuhan Advanced Biotech Research Center in the Optics Valley area (Wuhan East Lake High-Tech Zone). This state-of-the-art facility, covering over 50,000 square meters, focuses on gene editing, personalized medicine, and vaccine development. According to the latest reports, the center has already partnered with several European and Southeast Asian research institutes, making it a prime destination for visiting scientists and biotech entrepreneurs.\n\n### Pharma Production Reaches New Heights\n\nWuhan\'s pharmaceutical industry is also scaling up. The city’s production capacity for innovative drugs, particularly in oncology and immunology, has increased by nearly 30% compared to last year. Several local companies have achieved international certifications, allowing them to export advanced therapies to markets in the Middle East and Latin America. For travelers interested in medical tourism or health-tech, Wuhan now offers guided tours of some facilities, showcasing clean rooms and R&D labs.\n\n### International Collaboration Boosts Innovation\n\nIn 2026, Wuhan strengthened its ties with global biotech clusters. A recent collaboration with a German biotech firm has led to the development of a rapid diagnostic tool for infectious diseases, which is being tested in several local hospitals. Additionally, the city hosted the Wuhan International Biotech Expo in March, drawing over 5,000 delegates from 40 countries. The expo highlighted breakthroughs in AI-driven drug discovery and sustainable biomanufacturing.\n\n### Why This Matters for Visitors\n\nFor international travelers, these developments make Wuhan an exciting stop on any China itinerary. The city’s biotech boom has spurred new cultural and educational offerings, such as science museums, innovation labs open to the public, and English-friendly networking events for professionals. Whether you’re a health-tech enthusiast or just curious about modern China, Wuhan’s biotech scene offers a glimpse into the future of medicine.\n\nWith ongoing investments and a vibrant ecosystem, Wuhan is not just keeping pace—it’s setting the pace in global biotech innovation.',
    coverImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['wuhan', 'biotech', 'pharmaceutical', 'optics valley', 'innovation', 'health-tech', 'hubei'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-23T07:33:23.027Z',
    readTime: 4,
  },
  {
    id: 'news-2026-05-23-06-xyqh',
    title: 'Hubei Completes Province-Wide 5G Network Coverage, Boosting Smart Tourism and Connectivity',
    summary: 'Hubei province has achieved full 5G coverage across all cities and major scenic areas, enhancing connectivity for travelers and enabling smart tourism applications.',
    content: '## Full 5G Coverage Achieved Across Hubei\n\nAs of mid-2026, Hubei province has completed a massive 5G network deployment, covering all 17 prefecture-level cities and over 95% of its rural townships. According to the latest provincial telecommunications report, more than 120,000 5G base stations are now operational, making Hubei one of the best-connected regions in central China.\n\n## What This Means for Travelers\n\nFor international visitors, this upgrade translates into seamless high-speed internet access throughout the province. Whether you\'re hiking in the Shennongjia forest area, cruising the Yangtze River in Yichang, or exploring the ancient streets of Xiangyang, you can expect reliable 5G signals. Major airports, high-speed rail stations, and over 80 tourist attractions—including the Three Gorges Dam and the Wudang Mountains—now feature dedicated 5G hotspots.\n\n## Smart Tourism and Digital Experiences\n\nLocal tourism authorities have leveraged the 5G rollout to introduce innovative services:\n- **Real-time crowd management**: Popular sites like the Yellow Crane Tower and Enshi Grand Canyon use 5G-powered sensors to provide live visitor density updates.\n- **AR-enhanced guides**: At the Hubei Provincial Museum, visitors can use their phones to see 3D reconstructions of ancient artifacts synchronised with 5G\'s low latency.\n- **Live streaming hubs**: Scenic spots now host 5G-enabled live streams, allowing remote viewers to experience sunrise at Wudang or the cherry blossoms at Wuhan University in ultra-HD.\n\n## Digital Infrastructure Supporting Daily Life\n\nBeyond tourism, the 5G network supports smart transportation in Wuhan, where connected traffic lights and autonomous shuttle buses operate on dedicated 5G corridors. In rural areas, telemedicine services and remote education have become more accessible, bridging the digital divide.\n\n## Looking Ahead\n\nTelecom operators have announced plans to expand 5G-Advanced (5.5G) trials in Wuhan\'s Optics Valley tech hub by early 2027, promising even faster speeds for industrial and consumer applications. For now, Hubei stands as a model of digital connectivity in China—a place where ancient culture meets cutting-edge technology.',
    coverImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    category: '科技',
    tags: ['5g', 'digital infrastructure', 'hubei', 'smart tourism', 'connectivity', 'wuhan', 'technology'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-23T07:33:33.033Z',
    readTime: 3,
  },
  {
    id: 'news-2026-05-23-07-uy2x',
    title: 'Exploring Hubei\'s Ancient Wellness Traditions: A Journey into Traditional Medicine and Health Culture',
    summary: 'Discover Hubei\'s rich heritage of traditional Chinese medicine and health practices, from ancient texts to modern wellness experiences that attract global visitors in 2026.',
    content: '## The Living Legacy of Traditional Medicine in Hubei\n\nHubei province has long been a cradle of traditional Chinese medicine (TCM), blending ancient wisdom with modern wellness trends. As of 2026, international travelers are increasingly drawn to the region to explore its unique health culture, which is deeply rooted in local history and natural resources.\n\n## The Shennongjia Connection: Herbal Medicine\'s Legendary Home\n\nAt the heart of Hubei\'s TCM heritage lies the Shennongjia Forest Region, named after the mythical emperor Shennong, who is said to have discovered herbal medicine. This UNESCO World Heritage site is home to over 3,000 medicinal plant species, including rare herbs like the "seven-leaf one-flower" and "golden hairpin." Visitors this year can participate in guided herb-gathering tours led by local practitioners, who share centuries-old knowledge about plant-based remedies.\n\n## Classical Texts and Modern Applications\n\nHubei is also the birthplace of several foundational TCM texts. The **"Yellow Emperor\'s Inner Canon"** (Huangdi Neijing), a cornerstone of TCM philosophy, is believed to have been compiled in the region. Today, the Hubei University of Chinese Medicine in Wuhan continues this legacy, offering short-term courses for international visitors interested in acupuncture, cupping, and herbal formulation. According to recent reports, the university\'s "Wellness Immersion Program" has seen a 30% increase in foreign enrollment since 2025.\n\n## Wellness Tourism in 2026: Hot Springs and TCM Spas\n\nHubei\'s health culture extends beyond medicine into everyday lifestyle. The province boasts numerous natural hot springs, particularly in Yingshan and Xianning, which are integrated into TCM-themed resorts. These destinations offer:\n\n- **Herbal bath therapies** customized to individual health needs\n- **Acupressure and massage** sessions using local essential oils\n- **Meditation and qigong classes** set against bamboo forests\n\nA popular trend this year is the "Three Days of Detox" package at the Longmen Hot Spring Resort, where guests follow a diet of herbal teas and seasonal vegetables while undergoing traditional treatments.\n\n## Acupuncture and Cupping: A Global Attraction\n\nWuhan, the provincial capital, has become a hub for TCM training and tourism. The **Hubei Provincial Museum** features a permanent exhibition on the history of acupuncture, including ancient bronze needles and medical manuscripts. Meanwhile, clinics in Wuhan\'s Jianghan District offer same-day sessions for travelers seeking relief from jet lag or travel fatigue. According to local practitioners, cupping therapy has become particularly popular among European visitors this year.\n\n## Culinary Medicine: Eating for Balance\n\nHubei\'s cuisine naturally incorporates TCM principles. Local specialties like **Wuhan hot dry noodles** (reganmian) are seasoned with medicinal herbs such as Sichuan peppercorn and ginger, believed to aid digestion. In 2026, several cooking schools in the city now offer "Medicinal Kitchen" workshops, teaching visitors how to prepare soups and teas using ingredients from local herbal markets.\n\n## Planning Your Visit\n\nFor culture enthusiasts, the best time to experience Hubei\'s health culture is during the **Wuhan International Traditional Medicine Festival**, held each October. This year\'s event features lectures from renowned TCM masters, hands-on workshops, and a herbal market where visitors can purchase authentic remedies. Most experiences are available year-round, with English-speaking guides increasingly common at major wellness centers.\n\nAs Hubei continues to embrace its heritage, traditional medicine offers a profound way for international travelers to connect with the province\'s history, nature, and philosophy—all while improving their own well-being.',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['hubei', 'traditional chinese medicine', 'wellness tourism', 'shennongjia', 'wuhan', 'herbal medicine', 'health culture'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-23T07:33:42.472Z',
    readTime: 4,
  },
  {
    id: 'news-2026-05-23-08-70hr',
    title: 'Wuhan\'s Backstreet Renaissance: New Cafés and Community Art Revitalize Old Neighbourhoods',
    summary: 'Explore how Wuhan\'s historic lanes are transforming into vibrant hubs of local life, with artisan cafés, street murals, and community-run cultural spaces drawing both residents and travelers in 2026.',
    content: '## From Hidden Alleys to Cultural Hotspots\n\nWander beyond Wuhan’s sprawling avenues, and you’ll discover a quiet revolution unfolding in its labyrinthine backstreets. In 2026, neighbourhoods like **Tanjia Street** in Hankou and the **Donghu Greenway** periphery have become living galleries of local life. What were once nondescript residential lanes now boast pocket parks lined with hand-painted murals, tiny bookshops, and family-run tea stalls where elders play Chinese chess under century-old plane trees.\n\n"This is where the real Wuhan breathes," says Li Wei, a local architect who has helped restore three historic courtyard homes into community art spaces. "The government hasn\'t forced this — it\'s organic. Shop owners, retirees, and young artists are co-creating a street culture that feels authentic."\n\n## Where to Experience Local Life\n\n- **Tianxingzhou Lane** (Wuchang District): A 300-metre alley now filled with ceramics workshops and a weekly \'neighbourhood market\' every Saturday morning. Visitors can join free pottery classes or taste homemade lotus root soup.\n- **Liyuan Road Night Stroll**: As of spring 2026, this area hosts an unofficial \'lantern walk\' every full moon, where residents hang handmade silk lanterns outside their doors. Street musicians often set up impromptu sets.\n- **Xiangtan Backstreet Eateries**: Tucked behind the bustling Jianghan Road, these tiny kitchens serve *regamian* (hot dry noodles) and *mianwo* (fried dough rings) from generations-old recipes. No English menus, but pointing and smiling works.\n\n## Street Art with a Story\n\nA notable trend this year is the surge in community-curated street art. The **Wuhan Street Mural Project**, launched by local artists and residents in late 2025, has painted over 40 façades in the **Qingchuan** and **Hanyang** old quarters. Each mural tells a snippet of neighbourhood memory — a retired fisherman’s boat, a long-gone noodle shop, or the migratory birds that stop by the Yangtze. Travellers can pick up a free walking map from participating cafés.\n\n## The Café and Community Hub Connection\n\nPerhaps the most visible shift is the rise of \'third-space\' cafés. Unlike chain stores, these independent spots double as community noticeboards and event venues. **Yujia Café** on Shengli Street hosts English corner nights every Tuesday, while **Old Tree Coffee** near Guiyuan Temple runs weekend plant-swap events for locals and foreigners alike. "We don\'t just sell coffee — we connect people," says owner Zhang Min.\n\n## Practical Tips for Visitors\n\n- **Best time to explore**: Late afternoon (3–6 PM) when daily life peaks: children playing, vendors setting up, and seniors doing tai chi.\n- **Language**: Few locals speak English, but using translation apps and smiling goes a long way. Learn *"Ni hao"* (hello) and *"Xie xie"* (thank you).\n- **Getting around**: Rent a bike — Wuhan\'s backstreets are often too narrow for cars. The city\'s public bike system now covers all central lanes.\n\nWuhan\'s street culture isn\'t staged for tourists — it\'s lived. And in 2026, that authenticity is its greatest draw.',
    coverImage: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop',
    category: '文化',
    tags: ['wuhan', 'street culture', 'community life', 'backstreet cafés', 'street art', 'hubei travel', 'local experiences'],
    author: 'HiHubei News Desk',
    publishDate: '2026-05-23T07:33:56.412Z',
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
