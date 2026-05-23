import { useState, useEffect } from 'react'
import { ExternalLink, RefreshCw, AlertCircle } from 'lucide-react'

interface Article {
  id: string
  title: string
  date: string
  content: string
  keywords: string[]
  category: string
  sourceUrl: string
}

const ALL = '全部'
const API_URL = '/api/articles'

const CAT_LABEL: Record<string, string> = {
  '文旅': 'Culture & Tourism',
  '签证': 'Visa & Travel',
  '科技': 'Tech & Innovation',
  '文化': 'Deep Culture',
}

const FALLBACK: Article[] = [
  {
    id: 'welcome',
    title: 'Welcome to HiHubei — Your Gateway to Hubei, China',
    date: new Date().toISOString(),
    content: 'HiHubei brings you the latest news and stories from Hubei province, covering culture, tourism, technology, and travel policies. Stay informed about what makes Hubei a unique destination.',
    keywords: ['Hubei', 'welcome', 'travel', 'culture'],
    category: '文旅',
    sourceUrl: 'https://hihubei.com',
  },
]


function formatDateFull(iso: string) {
  try {
    return new Date(iso).toLocaleDateString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    })
  } catch { return iso }
}

export default function ArticlesSection() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [active, setActive] = useState(ALL)

  useEffect(() => {
    let dead = false
    async function load() {
      try {
        setLoading(true)
        setError(null)
        const r = await fetch(API_URL, { signal: AbortSignal.timeout(12000) })
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        const data: Article[] = await r.json()
        if (!dead) setArticles(data.length > 0 ? data : FALLBACK)
      } catch (e: any) {
        if (!dead) {
          setError('Could not load live news.')
          setArticles(FALLBACK)
        }
      } finally {
        if (!dead) setLoading(false)
      }
    }
    load()
    return () => { dead = true }
  }, [])

  const cats = [ALL, ...[...new Set(articles.map(a => a.category))].filter(Boolean)]
  const filtered = active === ALL ? articles : articles.filter(a => a.category === active)

  return (
    <section id="articles" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─── Header ─── */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Hubei News</h2>
          <p className="text-gray-500 text-sm flex items-center gap-2">
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            {loading ? 'Loading...' : `Latest articles from around the web`}
            {error && <span className="text-amber-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{error}</span>}
          </p>
        </div>

        {/* ─── Category tabs ─── */}
        <div className="flex flex-wrap gap-1.5 mb-8 border-b border-gray-200 pb-3">
          {cats.map(c => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition ${
                active === c
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              {c === ALL ? 'All' : c}
            </button>
          ))}
        </div>

        {/* ─── News list ─── */}
        <div className="space-y-8">
          {filtered.map((article) => (
            <article
              key={article.id}
              className="border-b border-gray-100 pb-8 last:border-0"
              itemScope
              itemType="https://schema.org/NewsArticle"
            >
              {/* Schema.org metadata (hidden, for AI/SEO) */}
              <meta itemProp="headline" content={article.title} />
              <meta itemProp="datePublished" content={article.date} />
              <meta itemProp="url" content={article.sourceUrl} />

              {/* ── Date ── */}
              <time
                dateTime={article.date}
                className="block text-xs text-gray-400 font-mono mb-1.5"
                itemProp="datePublished"
              >
                {formatDateFull(article.date)}
              </time>

              {/* ── Title ── */}
              <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-2">
                <a
                  href={article.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors inline-flex items-start gap-1.5"
                  itemProp="url"
                >
                  {article.title}
                  <ExternalLink className="w-3.5 h-3.5 mt-1 shrink-0 text-gray-300" />
                </a>
              </h3>

              {/* ── Content / body ── */}
              <div
                className="text-sm text-gray-600 leading-relaxed mb-3"
                itemProp="description"
              >
                {article.content.length > 300
                  ? article.content.slice(0, 500) + '...'
                  : article.content}
              </div>

              {/* ── Keywords ── */}
              {article.keywords.length > 0 && (
                <div className="flex flex-wrap gap-1.5 items-center" itemProp="keywords">
                  {article.keywords.map(kw => (
                    <span
                      key={kw}
                      className="inline-block px-2 py-0.5 text-[11px] font-medium bg-gray-100 text-gray-600 rounded"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              )}

              {/* ── Category badge ── */}
              {article.category && (
                <div className="mt-2">
                  <span className="inline-block text-[10px] uppercase tracking-wider font-semibold text-gray-400">
                    {CAT_LABEL[article.category] || 'News'} · <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Source</a>
                  </span>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* ── Empty ── */}
        {filtered.length === 0 && !loading && (
          <p className="text-center text-gray-400 py-12">No articles in this category.</p>
        )}

        {/* ── Loading skeleton ── */}
        {loading && (
          <div className="space-y-8 animate-pulse">
            {[1,2,3].map(i => (
              <div key={i} className="border-b border-gray-100 pb-8">
                <div className="h-3 bg-gray-200 rounded w-32 mb-3" />
                <div className="h-5 bg-gray-200 rounded w-full mb-2" />
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-3" />
                <div className="h-3 bg-gray-200 rounded w-full mb-1" />
                <div className="h-3 bg-gray-200 rounded w-2/3" />
              </div>
            ))}
          </div>
        )}

        {/* ── AI-visible JSON-LD ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: 'HiHubei News',
              description: 'Latest news about Hubei province, China — culture, tourism, technology, and travel policies.',
              mainEntity: filtered.map(a => ({
                '@type': 'NewsArticle',
                headline: a.title,
                datePublished: a.date,
                url: a.sourceUrl,
                keywords: a.keywords.join(', '),
                articleSection: a.category,
              })),
            }),
          }}
        />
      </div>
    </section>
  )
}
