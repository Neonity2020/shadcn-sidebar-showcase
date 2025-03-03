import { BlogPost } from "@/components/blog-post"

export default function BlogPostPage() {
  return (
    <BlogPost
      title="使用Next.js和Tailwind CSS构建现代博客"
      description="本文将介绍如何使用Next.js和Tailwind CSS构建一个现代化的博客网站，包括响应式设计、深色模式支持和SEO优化。"
      date="2023-10-15"
      readingTime="8分钟阅读"
      author={{
        name: "张小明",
        avatar: "https://i.pravatar.cc/150?img=32",
        role: "前端开发工程师"
      }}
      tags={["Next.js", "Tailwind CSS", "React", "前端开发"]}
      coverImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
    >
      <h2>引言</h2>
      <p>
        在当今数字时代，拥有一个个人博客或技术博客已经成为开发者展示技能、分享知识的重要方式。
        而构建一个现代化、美观且功能丰富的博客网站，Next.js和Tailwind CSS是一个强大的组合。
        Next.js提供了服务器端渲染、静态生成和API路由等功能，而Tailwind CSS则提供了高度可定制的设计系统。
      </p>

      <h2>为什么选择Next.js和Tailwind CSS？</h2>
      <p>
        Next.js是一个基于React的框架，它提供了许多开箱即用的功能，使得构建现代Web应用变得简单高效：
      </p>
      <ul>
        <li>服务器端渲染(SSR)和静态站点生成(SSG)，提升性能和SEO</li>
        <li>基于文件系统的路由，简化导航结构</li>
        <li>API路由，轻松创建后端API</li>
        <li>内置图像优化，提升加载速度</li>
        <li>增量静态再生成(ISR)，保持内容新鲜</li>
      </ul>

      <p>
        而Tailwind CSS是一个功能类优先的CSS框架，它提供了低级实用工具类，使得创建自定义设计变得简单：
      </p>
      <ul>
        <li>无需编写自定义CSS，加速开发过程</li>
        <li>高度可定制，适应任何设计需求</li>
        <li>响应式设计变得简单直观</li>
        <li>暗黑模式支持，提升用户体验</li>
        <li>通过PurgeCSS优化生产构建，减小文件大小</li>
      </ul>

      <h2>项目设置</h2>
      <p>
        首先，我们需要创建一个新的Next.js项目并安装Tailwind CSS。打开终端并运行以下命令：
      </p>
      <pre><code>{`npx create-next-app@latest my-blog
cd my-blog
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`}</code></pre>

      <p>
        接下来，配置Tailwind CSS。编辑tailwind.config.js文件：
      </p>
      <pre><code>{`// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
}`}</code></pre>

      <h2>创建博客布局</h2>
      <p>
        一个好的博客需要清晰的布局结构。我们可以创建以下组件：
      </p>
      <ul>
        <li>Header：包含导航菜单和主题切换</li>
        <li>Footer：包含版权信息和社交媒体链接</li>
        <li>Layout：包装所有页面的主布局</li>
        <li>BlogCard：博客文章预览卡片</li>
        <li>BlogPost：完整的博客文章页面</li>
      </ul>

      <h2>实现深色模式</h2>
      <p>
        Tailwind CSS提供了内置的深色模式支持。我们可以使用next-themes库来实现主题切换：
      </p>
      <pre><code>{`npm install next-themes`}</code></pre>

      <p>
        然后创建一个ThemeProvider组件：
      </p>
      <pre><code>{`// components/ThemeProvider.tsx
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}`}</code></pre>

      <h2>添加MDX支持</h2>
      <p>
        MDX是一种强大的格式，它允许在Markdown中使用JSX。这对于创建丰富的博客内容非常有用：
      </p>
      <pre><code>{`npm install @next/mdx @mdx-js/loader @mdx-js/react`}</code></pre>

      <p>
        配置Next.js以支持MDX文件：
      </p>
      <pre><code>{`// next.config.mjs
import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

export default withContentlayer(nextConfig)`}</code></pre>

      <h2>SEO优化</h2>
      <p>
        良好的SEO对于博客至关重要。我们可以使用Next.js的内置Head组件来添加元标签：
      </p>
      <pre><code>{`// components/SEO.tsx
import Head from 'next/head'

interface SEOProps {
  title: string
  description: string
  ogImage?: string
  canonicalUrl?: string
}

export function SEO({ title, description, ogImage, canonicalUrl }: SEOProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourblog.com'
  const imageUrl = ogImage ? \`\${siteUrl}\${ogImage}\` : \`\${siteUrl}/og-image.jpg\`
  const canonical = canonicalUrl ? \`\${siteUrl}\${canonicalUrl}\` : siteUrl

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  )
}`}</code></pre>

      <h2>部署博客</h2>
      <p>
        Next.js应用可以轻松部署到Vercel平台，它由Next.js的创建者开发：
      </p>
      <ol>
        <li>将代码推送到GitHub仓库</li>
        <li>在Vercel上创建一个新项目</li>
        <li>连接GitHub仓库</li>
        <li>配置环境变量（如果需要）</li>
        <li>点击部署</li>
      </ol>

      <h2>结论</h2>
      <p>
        使用Next.js和Tailwind CSS构建现代博客网站是一个高效且愉快的过程。这个组合提供了强大的功能和灵活性，
        使您能够创建一个独特、高性能且用户友好的博客平台。无论您是想要展示个人项目、分享技术知识还是建立专业形象，
        这个技术栈都能满足您的需求。
      </p>
      <p>
        随着Web技术的不断发展，保持博客的现代化和优化是一个持续的过程。定期更新依赖项、关注性能指标并根据用户反馈
        进行改进，将确保您的博客始终处于最佳状态。
      </p>
    </BlogPost>
  )
} 