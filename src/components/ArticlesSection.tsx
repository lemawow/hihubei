import { useState } from 'react'
import { Calendar, Clock, Tag, ArrowUpRight } from 'lucide-react'
import { getLatestArticles, getCategories, type Article } from '../data/articles'

export default function ArticlesSection() {
  const [activeCategory, setActiveCategory] = useState<string>('全部')
  const allArticles = getLatestArticles(9)
  const categories = ['全部', ...getCategories()]

  const filteredArticles =
    activeCategory === '全部'
      ? allArticles
      : allArticles.filter(a => a.category === activeCategory)

  return (
    <section id="articles" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-primary-600 bg-primary-50 rounded-full px-4 py-1.5 mb-4">
            📰 旅游文章
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            探索湖北故事
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            最新湖北旅游攻略、美食推荐、文化探秘——内容自动更新，带您发现不一样的湖北。
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary-600 text-white shadow-md shadow-primary-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
              }`}
            >
              {cat === '全部' ? '📋 全部' : cat === '美食' ? '🍜 美食' : cat === '文化' ? '🏯 文化' : cat === '攻略' ? '🗺️ 攻略' : cat === '景点' ? '🏔️ 景点' : cat === '新闻' ? '📰 新闻' : cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-400">
            <p className="text-lg">暂无该分类的文章，将在下次更新中补充</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 mb-4">
            💡 文章内容由 AI 自动生成 · 定期更新湖北旅游最新资讯
          </p>
        </div>
      </div>
    </section>
  )
}

function ArticleCard({ article, index }: { article: Article; index: number }) {
  const [imgLoaded, setImgLoaded] = useState(false)
  const date = new Date(article.publishDate)
  const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`

  return (
    <a
      href={`#article-${article.id}`}
      className="card overflow-hidden group block cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={e => {
        e.preventDefault()
        // In a real app, this would navigate to a full article page
        // For now, open a modal or show expanded content
        alert(`📖 ${article.title}\n\n${article.content.substring(0, 200)}...\n\n完整阅读功能即将推出`)
      }}
    >
      {/* Cover Image */}
      <div className="relative h-48 overflow-hidden -mx-6 -mt-6 mb-4 rounded-t-xl">
        <div className={`absolute inset-0 bg-gray-100 ${imgLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`} />
        <img
          src={article.coverImage}
          alt={article.title}
          className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
        />
        {/* Category badge */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full text-gray-700 shadow-sm">
          {getCategoryEmoji(article.category)} {article.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col h-[calc(100%-12rem)]">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors leading-snug">
          {article.title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
          {article.summary}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-gray-400 pt-3 border-t border-gray-100 mt-auto">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {dateStr}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {article.readTime} 分钟
          </span>
        </div>

        {/* Tags */}
        {article.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {article.tags.slice(0, 3).map(tag => (
              <span
                key={tag}
                className="inline-flex items-center gap-0.5 bg-gray-50 text-gray-500 text-xs px-2 py-0.5 rounded-full"
              >
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Read more */}
        <div className="mt-3 flex items-center text-sm font-medium text-primary-600 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
          阅读全文
          <ArrowUpRight size={14} className="ml-1" />
        </div>
      </div>
    </a>
  )
}

function getCategoryEmoji(category: string): string {
  const map: Record<string, string> = {
    '美食': '🍜',
    '文化': '🏯',
    '攻略': '🗺️',
    '景点': '🏔️',
    '新闻': '📰',
  }
  return map[category] || '📖'
}
