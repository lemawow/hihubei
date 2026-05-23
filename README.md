# HiHubei - 湖北文化旅游网站

湖北文化旅游官方网站，使用现代前端技术栈构建。

## 技术栈

- **React 19** - 最新版本的 React
- **TypeScript** - 类型安全的 JavaScript
- **Vite** - 快速构建工具
- **Tailwind CSS** - 实用优先的 CSS 框架

## 功能特性

- 🏞️ 湖北热门目的地展示
- 🎭 特色文化活动体验
- 🎫 免费门票推广系统
- 📱 响应式设计，移动端友好
- 🔗 与其他旅游网站相互导流
- 📞 统一联系方式

## 项目结构

```
hihubei/
├── src/
│   ├── App.tsx          # 主应用组件
│   ├── main.tsx         # 应用入口
│   └── index.css        # 全局样式
├── public/              # 静态资源
├── index.html           # HTML 模板
├── vite.config.ts       # Vite 配置
├── tailwind.config.js   # Tailwind 配置
└── package.json         # 依赖管理
```

## 开发指南

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## 部署到 Cloudflare Pages

1. 安装 Cloudflare Wrangler CLI:
```bash
npm install -g wrangler
```

2. 登录 Cloudflare:
```bash
wrangler login
```

3. 构建项目:
```bash
npm run build
```

4. 部署到 Cloudflare Pages:
```bash
wrangler pages deploy dist --project-name=hihubei
```

## 联系方式

- 邮箱: Hellowebs@qq.com
- 电话: +86 400-123-4567
- 网站: www.hihubei.com

## 相互导流网站

- [HelloXinjiang](https://helloxinjiang.com) - 新疆旅游
- [HelloLhasa](https://hellolhasa.com) - 拉萨旅游  
- [HelloYichang](https://helloyichang.com) - 宜昌旅游
- [HelloTibet](https://hellotibet.com) - 西藏旅游

## 许可证

© 2026 HiHubei 湖北文化旅游. 保留所有权利.