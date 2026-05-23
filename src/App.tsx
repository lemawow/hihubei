import { useState } from 'react'
import {
  MapPin, Globe, Menu, X, ChevronRight, ExternalLink,
  Mail, MapPinned, ArrowRight
} from 'lucide-react'
import ArticlesSection from './components/ArticlesSection'

interface City {
  name: string
  description: string
  image: string
}

interface Activity {
  title: string
  icon: string
  description: string
}

interface LinkItem {
  name: string
  url: string
  emoji: string
  description: string
}

const cities: City[] = [
  { name: '武汉', description: '湖北省会，长江与汉江交汇处', image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop' },
  { name: '宜昌', description: '三峡大坝所在地，长江三峡起点', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop' },
  { name: '襄阳', description: '历史文化名城，三国故事发生地', image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop' },
  { name: '恩施', description: '土家族苗族自治州，自然风光秀丽', image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop' },
  { name: '神农架', description: '世界自然遗产，原始森林保护区', image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&auto=format&fit=crop' },
  { name: '武当山', description: '道教圣地，世界文化遗产', image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop' },
]

const activities: Activity[] = [
  { title: '三峡游轮之旅', icon: '🚢', description: '乘坐豪华游轮游览长江三峡' },
  { title: '武当山道教文化体验', icon: '⛰️', description: '学习太极拳，体验道教文化' },
  { title: '恩施土家族民俗体验', icon: '🎭', description: '参与土家族传统节日和舞蹈' },
  { title: '神农架生态探险', icon: '🌲', description: '原始森林徒步和野生动物观察' },
  { title: '武汉美食之旅', icon: '🍜', description: '品尝热干面、豆皮等湖北特色美食' },
  { title: '黄鹤楼文化之旅', icon: '🏯', description: '登黄鹤楼，欣赏长江美景' },
]

const relatedLinks: LinkItem[] = [
  { name: 'HelloXinjiang', url: 'https://helloxinjiang.com', emoji: '🏜️', description: '新疆旅游' },
  { name: 'HelloLhasa', url: 'https://hellolhasa.com', emoji: '🏔️', description: '拉萨旅游' },
  { name: 'HelloYichang', url: 'https://helloyichang.com', emoji: '🌊', description: '宜昌旅游' },
  { name: 'HelloTibet', url: 'https://hellotibet.com', emoji: '⛰️', description: '西藏旅游' },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentYear] = useState(new Date().getFullYear())

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="nav-glass fixed top-0 left-0 right-0 z-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">鄂</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">HiHubei</h1>
                <p className="text-xs text-gray-500">湖北文化旅游</p>
              </div>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#destinations" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">目的地</a>
              <a href="#activities" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">活动</a>
              <a href="#articles" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">文章</a>
              <a href="#contact" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">联系</a>
              <a href="mailto:info@hihubei.com" className="btn-primary text-sm py-2 px-5">
                <Mail size={16} />
                联系我们
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <a href="#destinations" className="block py-2 text-gray-600 hover:text-primary-600 font-medium" onClick={() => setMobileMenuOpen(false)}>目的地</a>
              <a href="#activities" className="block py-2 text-gray-600 hover:text-primary-600 font-medium" onClick={() => setMobileMenuOpen(false)}>活动</a>
              <a href="#articles" className="block py-2 text-gray-600 hover:text-primary-600 font-medium" onClick={() => setMobileMenuOpen(false)}>文章</a>
              <a href="#contact" className="block py-2 text-gray-600 hover:text-primary-600 font-medium" onClick={() => setMobileMenuOpen(false)}>联系</a>
              <a href="mailto:info@hihubei.com" className="block text-center btn-primary mt-4">
                联系我们
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient min-h-[90vh] flex items-center section-padding pt-24">
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
              <span className="text-white/90 text-sm font-medium">🏯 湖北欢迎您</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              发现湖北之美
              <span className="block text-primary-200 text-3xl md:text-4xl lg:text-5xl mt-4">
                探索千年楚文化
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-primary-100 max-w-3xl mx-auto leading-relaxed">
              从长江三峡到武当仙境，从武汉都市到恩施秘境，湖北拥有丰富的自然景观和深厚的文化底蕴。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#destinations" className="btn-accent">
                开始探索
                <ArrowRight size={20} />
              </a>
              <a href="mailto:info@hihubei.com" className="btn-secondary bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                获取免费门票
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-primary-600 bg-primary-50 rounded-full px-4 py-1.5 mb-4">
              🌍 探索目的地
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">探索湖北目的地</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              湖北拥有丰富多样的旅游目的地，从现代都市到自然奇观，从历史古迹到民俗文化。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <div key={city.name} className="card group overflow-hidden p-0">
                <div className="h-48 overflow-hidden">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{city.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{city.description}</p>
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <MapPin size={14} className="mr-1" />
                    <span>湖北省</span>
                  </div>
                  <button className="btn-primary w-full text-sm py-2.5">
                    了解更多
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="section-padding" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)' }}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-primary-600 bg-primary-50 rounded-full px-4 py-1.5 mb-4">
              🎯 特色活动
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">特色旅游活动</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              体验湖北独特的文化和自然活动，创造难忘的旅行回忆。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="card hover:border-primary-200">
                <div className="text-4xl mb-4">{activity.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✨ NEW: Articles Section */}
      <ArticlesSection />

      {/* Promo Banner */}
      <section className="promo-banner section-padding">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold text-white/90 bg-white/20 rounded-full px-4 py-1.5 mb-4">
              🎫 限时活动
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">免费领取湖北景点门票</h2>
            <p className="text-white/90 text-lg mb-8">
              每人最多可领取5张景点门票，发送邮件即可申请，先到先得！
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:info@hihubei.com" className="btn-primary bg-white text-primary-700 hover:bg-gray-100 shadow-lg text-base">
                <Mail size={18} />
                发送邮件申请
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-primary-600 bg-primary-50 rounded-full px-4 py-1.5 mb-4">
              🔗 相关推荐
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">更多旅游目的地</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {relatedLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card text-center hover:border-primary-200 group"
              >
                <div className="text-3xl mb-3">{link.emoji}</div>
                <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-1">
                  {link.name}
                </h3>
                <p className="text-gray-500 text-xs">{link.description}</p>
                <ExternalLink size={14} className="mx-auto mt-2 text-gray-300 group-hover:text-primary-400 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">鄂</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">HiHubei</h3>
                  <p className="text-gray-400 text-xs">湖北文化旅游</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                致力于推广湖北文化旅游，为游客提供最优质的旅游体验和服务。
              </p>
              <div className="flex space-x-4">
                <a href="mailto:info@hihubei.com" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <Mail size={18} />
                </a>
                <a href="https://hihubei.com" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <Globe size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">快速链接</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#destinations" className="hover:text-primary-400 transition-colors">目的地</a></li>
                <li><a href="#activities" className="hover:text-primary-400 transition-colors">特色活动</a></li>
                <li><a href="#articles" className="hover:text-primary-400 transition-colors">旅游文章</a></li>
                <li><a href="#contact" className="hover:text-primary-400 transition-colors">联系我们</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">联系方式</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start space-x-3">
                  <Mail size={16} className="mt-0.5 text-primary-400 flex-shrink-0" />
                  <span>info@hihubei.com</span>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPinned size={16} className="mt-0.5 text-primary-400 flex-shrink-0" />
                  <span>湖北省武汉市</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Globe size={16} className="mt-0.5 text-primary-400 flex-shrink-0" />
                  <span>www.hihubei.com</span>
                </li>
              </ul>
            </div>

            {/* Related */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">相关网站</h4>
              <ul className="space-y-3 text-sm">
                {relatedLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                      {link.emoji} {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} HiHubei 湖北文化旅游. 保留所有权利.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              使用 React 19 + TypeScript + Vite 构建
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
