# HiHubei 网站部署指南

## 手动部署到 Cloudflare Pages

### 1. 安装 Cloudflare Wrangler CLI
```bash
npm install -g wrangler
# 或者使用本地安装
npm install wrangler --save-dev
```

### 2. 登录 Cloudflare
```bash
npx wrangler login
```

### 3. 构建项目
```bash
npm run build
```

### 4. 部署到 Cloudflare Pages
```bash
npx wrangler pages deploy dist --project-name=hihubei
```

### 5. 配置自定义域名 (可选)
部署后，在 Cloudflare Pages 控制台中：
1. 选择 hihubei 项目
2. 进入 "设置" > "自定义域名"
3. 添加 hihubei.com 域名
4. 按照提示配置 DNS 记录

## 自动部署 (GitHub Actions)

创建 `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      deployments: write
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: hihubei
          directory: dist
          gitHubToken: ${{ secrets.GITHUB_TOKEN }}
```

## 环境变量配置

如果需要环境变量，创建 `.env` 文件：
```env
VITE_API_URL=https://api.hihubei.com
VITE_GOOGLE_MAPS_KEY=your_key_here
```

## 监控和日志

部署后，可以在 Cloudflare Pages 控制台中：
- 查看部署日志
- 监控网站性能
- 设置环境变量
- 配置重定向规则

## 故障排除

### 构建失败
- 检查 TypeScript 错误：`npx tsc --noEmit`
- 检查依赖：`npm ci` 重新安装

### 部署失败
- 检查 Wrangler 登录状态：`npx wrangler whoami`
- 检查项目权限

### 网站无法访问
- 检查 DNS 配置
- 检查 Cloudflare Pages 项目状态
- 查看部署日志中的错误信息