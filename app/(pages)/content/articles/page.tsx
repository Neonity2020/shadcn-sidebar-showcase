import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import matter from 'gray-matter'

// 文章元数据接口
interface ArticleMetadata {
  slug: string
  title: string
  description: string
  date: string
  category: string
}

// 获取所有文章元数据
async function getArticlesMetadata(): Promise<ArticleMetadata[]> {
  const articlesDirectory = path.join(process.cwd(), 'app/(pages)/content/articles')
  const filenames = fs.readdirSync(articlesDirectory)
  
  const articlesMetadata = filenames
    .filter(filename => filename.endsWith('.mdx'))
    .map(filename => {
      const filePath = path.join(articlesDirectory, filename)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContent)
      
      return {
        slug: filename.replace(/\.mdx$/, ''),
        title: data.title || '无标题',
        description: data.description || '',
        date: data.date || '',
        category: data.category || '未分类'
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  return articlesMetadata
}

// 文章目录页面组件
export default async function ArticlesPage() {
  const articles = await getArticlesMetadata()
  
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">医学文章</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map(article => (
          <Link 
            key={article.slug}
            href={`/content/articles/${article.slug}`}
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{article.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">{article.date}</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs rounded-full">
                {article.category}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 