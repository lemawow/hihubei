import { useState, useEffect } from 'react'
import { ExternalLink, Clock, Calendar, RefreshCw, AlertCircle } from 'lucide-react'

interface Article {
  id: string
  title: string
  summary: string
  content: string
  coverImage: string
  category: string
  tags: string[]
  author: string
  publishDate: string
  readTime: number
  sourceUrl: string
}

const ALL_CATEGORIES = '全部'
const API_URL = '/api/articles'
const CATEGORY_EMOJI: Record<string, string> = {
  '文旅': '🏯',
  '签证': '🛂',
  '科技': '🔬',
  '文化': '📖',
}

// Fallback articles when API is unavailable
const FALLBACK_ARTICLES: Article[] = [
  {
    id: 'fallback-1',
    title: 'Welcome to HiHubei — Discover Hubei Province',
    summary: 'Explore the beauty of Hubei province, from the Three Gorges to Wudang Mountain.',
    content: '# Welcome to HiHubei\n\nDiscover the best of Hubei province.',
    coverImage: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop',
    category: '文旅',
    tags: ['Hubei', 'welcome'],
    author: 'HiHubei',
    publishDate: new Date().toISOString(),
    readTime: 2,
    sourceUrl: 'https://hihubei.com',
  },
]

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  const now = new Date()
  const diff = now.getTime() - d.getTime()
  const hours = Math.floor(diff / 3600000)
  if (hours < 1) return 'Just now'
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  if (days < 7) return `${days}d ago`
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}


export default function ArticlesSection() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORIES)

  useEffect(() => {
    let cancelled = false

    async function loadArticles() {
      try {
        setLoading(true)
        setError(null)
        const resp = await fetch(API_URL, { signal: AbortSignal.timeout(10000) })
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`)
        const data: Article[] = await resp.json()
        if (!cancelled) {
          setArticles(data.length > 0 ? data : FALLBACK_ARTICLES)
        }
      } catch (e: any) {
        if (!cancelled) {
          console.warn('Articles API unavailable, using fallback:', e.message)
          setError('Could not load live news. Showing sample articles.')
          setArticles(FALLBACK_ARTICLES)
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadArticles()
    return () => { cancelled = true }
  }, [])

  const categories = [ALL_CATEGORIES, ...[...new Set(articles.map(a => a.category))].filter(Boolean)]
  const filtered = activeCategory === ALL_CATEGORIES
    ? articles
    : articles.filter(a => a.category === activeCategory)

  return (
    <section id="articles" className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hubei News & Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Latest updates on Hubei's culture, tourism, technology, and travel policies
          </p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="inline-flex items-center gap-1 text-xs text-gray-400">
              <RefreshCw className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} />
              {loading ? 'Loading...' : 'Live'}
            </span>
            {error && (
              <span className="inline-flex items-center gap-1 text-xs text-amber-500">
                <AlertCircle className="w-3 h-3" />
                {error}
              </span>
            )}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-200'
                  : 'bg-white text-gray-600 hover:bg-sky-50 hover:text-sky-700 border border-gray-200'
              }`}
            >
              {cat !== ALL_CATEGORIES && CATEGORY_EMOJI[cat] ? `${CATEGORY_EMOJI[cat]} ` : ''}
              {cat}
            </button>
          ))}
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((article, index) => (
            <a
              key={article.id + "-" + index}
              href={article.sourceUrl || '#'}
              target={article.sourceUrl ? '_blank' : undefined}
              rel={article.sourceUrl ? 'noopener noreferrer' : undefined}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Cover Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Category Badge */}
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full">
                  {article.category && CATEGORY_EMOJI[article.category]
                    ? `${CATEGORY_EMOJI[article.category]} ${article.category}`
                    : '📰 News'}
                </span>
                {article.sourceUrl && (
                  <span className="absolute top-3 right-3 bg-black/40 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {article.tags.slice(0, 2).map(tag => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider text-sky-500 font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-sky-600 transition-colors leading-snug">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-gray-500 mb-3 line-clamp-2 flex-1 leading-relaxed">
                  {article.summary}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-[11px] text-gray-400 pt-2 border-t border-gray-100">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {formatDate(article.publishDate)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime} min read
                  </span>
                </div>

                {/* Source */}
                <div className="text-[10px] text-gray-400 mt-1.5 truncate">
                  {article.author && !article.author.includes('HiHubei') ? article.author : article.sourceUrl?.replace(/https?:\/\/(www\.)?/, '').split('/')[0] || 'HiHubei'}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && !loading && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No articles found for this category.</p>
          </div>
        )}

        {/* Loading skeleton */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
                <div className="h-44 bg-gray-200" />
                <div className="p-4 space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-1/3" />
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-2/3" />
                  <div className="h-3 bg-gray-200 rounded w-full" />
                  <div className="h-3 bg-gray-200 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
