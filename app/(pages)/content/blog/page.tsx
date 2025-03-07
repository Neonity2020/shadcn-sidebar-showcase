import { BlogList } from "@/components/blog-list"

// 模拟博客文章数据
const posts = [
  {
    title: "使用Next.js和Tailwind CSS构建现代博客",
    description: "本文将介绍如何使用Next.js和Tailwind CSS构建一个现代化的博客网站，包括响应式设计、深色模式支持和SEO优化。",
    date: "2023-10-15",
    readingTime: "8分钟阅读",
    slug: "/content/blog/nextjs-tailwind-blog",
    tags: ["Next.js", "Tailwind CSS", "React", "前端开发"],
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "React Server Components详解",
    description: "深入了解React Server Components的工作原理、优势以及如何在Next.js应用中有效使用它们来提升性能。",
    date: "2023-11-05",
    readingTime: "12分钟阅读",
    slug: "/content/blog/react-server-components",
    tags: ["React", "Server Components", "Next.js", "性能优化"],
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "使用Shadcn UI构建美观的用户界面",
    description: "探索如何使用Shadcn UI组件库快速构建美观、一致且可访问的用户界面，提高开发效率。",
    date: "2023-12-10",
    readingTime: "10分钟阅读",
    slug: "/content/blog/shadcn-ui-guide",
    tags: ["UI设计", "Shadcn UI", "组件库", "Tailwind CSS"],
    coverImage: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2080&auto=format&fit=crop"
  },
  {
    title: "TypeScript高级类型技巧",
    description: "掌握TypeScript高级类型系统，包括条件类型、映射类型、类型推断和实用工具类型的使用方法。",
    date: "2024-01-20",
    readingTime: "15分钟阅读",
    slug: "/content/blog/typescript-advanced-types",
    tags: ["TypeScript", "类型系统", "前端开发"],
    coverImage: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2074&auto=format&fit=crop"
  },
  {
    title: "现代CSS布局技术",
    description: "探索现代CSS布局技术，包括Flexbox、Grid、容器查询和CSS变量，以创建灵活且响应式的网页布局。",
    date: "2024-02-15",
    readingTime: "9分钟阅读",
    slug: "/content/blog/modern-css-layout",
    tags: ["CSS", "Web设计", "响应式设计", "Flexbox", "Grid"],
    coverImage: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Next.js 14新特性解析",
    description: "深入了解Next.js 14的新特性和改进，包括服务器操作、部分预渲染和改进的开发体验。",
    date: "2024-03-05",
    readingTime: "11分钟阅读",
    slug: "/content/blog/nextjs-14-features",
    tags: ["Next.js", "Web开发", "前端框架"],
    coverImage: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop"
  }
]

export default function BlogPage() {
  return (
    <div className="space-y-10 pb-20">
      <div className="container mx-auto pt-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">博客文章</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          探索我们的技术文章、教程和见解，帮助您提升开发技能和知识
        </p>
      </div>
      
      <BlogList posts={posts} />
    </div>
  )
} 