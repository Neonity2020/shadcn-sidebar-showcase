import { BlogPost } from "@/components/blog-post"
import { useMDXComponents } from "@/mdx-component"
import { MDXRemote } from "next-mdx-remote/rsc"
import { readFile } from "fs/promises"
import path from "path"

export default async function BlogPostPage() {
  const filePath = path.join(process.cwd(), "app/content/blog/nextjs-tailwind-blog.mdx")
  const source = await readFile(filePath, "utf8")

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
      <MDXRemote 
        source={source} 
        components={useMDXComponents({})} 
      />
    </BlogPost>
  )
} 