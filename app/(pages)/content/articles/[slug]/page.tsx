import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { MDXComponents } from '@/mdx-component'
import matter from 'gray-matter'
import { Metadata } from 'next'
import Image from '@/components/image'

// 定义页面参数类型
interface PageProps {
  params: {
    slug: string
  }
}

// 生成静态路径
export async function generateStaticParams() {
  const articlesDirectory = path.join(process.cwd(), 'app/(pages)/content/articles')
  const filenames = fs.readdirSync(articlesDirectory)
  
  return filenames
    .filter(filename => filename.endsWith('.mdx'))
    .map(filename => ({
      slug: filename.replace(/\.mdx$/, '')
    }))
}

// 生成元数据
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = await Promise.resolve(params.slug)
  const filePath = path.join(process.cwd(), `app/(pages)/content/articles/${slug}.mdx`)
  
  // 检查文件是否存在
  if (!fs.existsSync(filePath)) {
    return {
      title: '文章未找到'
    }
  }
  
  // 读取文件内容
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContent)
  
  return {
    title: data.title || '无标题',
    description: data.description || '',
    keywords: data.keywords || [],
    authors: data.author ? [{ name: data.author }] : [],
    category: data.category || '',
    openGraph: {
      title: data.title,
      description: data.description,
      type: 'article',
      publishedTime: data.date,
      modifiedTime: data.lastUpdated,
      tags: data.tags
    }
  }
}

// 文章页面组件
export default async function ArticlePage({ params }: PageProps) {
  const slug = await Promise.resolve(params.slug)
  const filePath = path.join(process.cwd(), `app/(pages)/content/articles/${slug}.mdx`)
  
  // 检查文件是否存在
  if (!fs.existsSync(filePath)) {
    notFound()
  }
  
  // 读取文件内容
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(fileContent)
  
  return (
    <div className="container mx-auto py-10">
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
        <div className="flex items-center text-sm text-gray-500 mb-8">
          {data.date && <span className="mr-4">发布日期: {data.date}</span>}
          {data.author && <span className="mr-4">作者: {data.author}</span>}
          {data.category && (
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full">
              {data.category}
            </span>
          )}
        </div>
        <MDXRemote 
          source={content} 
          components={{
            ...MDXComponents,
            Image
          }}
          options={{
            parseFrontmatter: true,
          }}
        />
        {data.tags && data.tags.length > 0 && (
          <div className="mt-8 pt-4 border-t">
            <h3 className="text-lg font-semibold mb-2">标签:</h3>
            <div className="flex flex-wrap gap-2">
              {data.tags.map((tag: string) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 