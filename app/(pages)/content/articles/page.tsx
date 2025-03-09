import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import matter from 'gray-matter'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: '文章列表',
  description: '浏览所有可用的医学影像学文章',
}

// 获取文章元数据
function getArticles() {
  const articlesDirectory = path.join(process.cwd(), 'app/(pages)/content/articles')
  const filenames = fs.readdirSync(articlesDirectory)
  
  const articles = filenames
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
        author: data.author || '',
        category: data.category || '',
        tags: data.tags || [],
      }
    })
    .sort((a, b) => {
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
      return 0
    })
  
  return articles
}

// 获取所有标签
function getAllTags(articles: any[]): string[] {
  const tagsSet = new Set<string>()
  
  articles.forEach(article => {
    if (article.tags && Array.isArray(article.tags)) {
      article.tags.forEach((tag: string) => tagsSet.add(tag))
    }
  })
  
  return Array.from(tagsSet).sort()
}

export default function ArticlesPage({
  searchParams,
}: {
  searchParams: { tag?: string; page?: string }
}) {
  const allArticles = getArticles()
  const allTags = getAllTags(allArticles)
  
  // 处理标签过滤
  const selectedTag = searchParams.tag || ''
  const filteredArticles = selectedTag 
    ? allArticles.filter(article => 
        article.tags && article.tags.includes(selectedTag)
      )
    : allArticles
  
  // 处理分页
  const currentPage = parseInt(searchParams.page || '1', 10)
  const articlesPerPage = 9
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage)
  
  // 验证页码是否有效
  if (currentPage < 1 || (currentPage > totalPages && totalPages > 0)) {
    notFound()
  }
  
  // 获取当前页的文章
  const startIndex = (currentPage - 1) * articlesPerPage
  const endIndex = startIndex + articlesPerPage
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex)
  
  // 生成分页链接
  const generatePageLink = (pageNum: number, tag?: string) => {
    const params = new URLSearchParams()
    if (pageNum > 1) params.set('page', pageNum.toString())
    if (tag) params.set('tag', tag)
    
    const queryString = params.toString()
    return queryString ? `?${queryString}` : ''
  }
  
  return (
    <div className="container mx-auto py-6 px-2 sm:px-4">
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">文章列表</h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">探索医学影像学领域的最新研究和知识</p>
      </div>
      
      {/* 标签过滤器 */}
      <div className="mb-6 bg-gray-50 dark:bg-gray-800/50 p-3 rounded-xl border border-gray-100 dark:border-gray-700">
        <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">按标签筛选</h2>
        <div className="flex flex-wrap gap-1.5">
          <Link 
            href="/content/articles"
            className={`px-2.5 py-1 rounded-full text-sm font-medium transition-all ${
              !selectedTag 
                ? 'bg-blue-600 text-white shadow-sm' 
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
            }`}
          >
            全部
          </Link>
          
          {allTags.map(tag => (
            <Link 
              key={tag} 
              href={`/content/articles?tag=${encodeURIComponent(tag)}`}
              className={`px-2.5 py-1 rounded-full text-sm font-medium transition-all ${
                selectedTag === tag 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
              }`}
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
      
      {/* 文章列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedArticles.map(article => (
          <Link 
            key={article.slug} 
            href={`/content/articles/${article.slug}`}
            className="block group h-full"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1">
              <div className="p-4 flex-grow flex flex-col">
                <div className="flex items-center mb-3">
                  {article.category && (
                    <span className="px-2.5 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  )}
                  {article.date && (
                    <span className="text-gray-500 dark:text-gray-400 text-xs ml-auto">
                      {new Date(article.date).toLocaleDateString('zh-CN', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  )}
                </div>
                
                <h2 className="text-lg font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {article.title}
                </h2>
                
                {article.description && (
                  <p className="text-gray-600 dark:text-gray-300 mb-3 line-clamp-3 flex-grow text-sm">
                    {article.description}
                  </p>
                )}
                
                <div className="flex items-center mt-auto pt-3 border-t border-gray-100 dark:border-gray-700">
                  {article.author && (
                    <div className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center text-xs text-gray-600 dark:text-gray-300 mr-1.5">
                        {article.author.charAt(0)}
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-300">
                        {article.author}
                      </span>
                    </div>
                  )}
                  
                  <span className="ml-auto text-blue-600 dark:text-blue-400 text-xs font-medium group-hover:underline flex items-center">
                    阅读更多
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
              
              {article.tags && article.tags.length > 0 && (
                <div className="px-4 pb-3">
                  <div className="flex flex-wrap gap-1.5">
                    {article.tags.slice(0, 3).map((tag: string, index: number) => (
                      <span 
                        key={`${tag}-${index}`} 
                        className="px-1.5 py-0.5 bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded-md text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                    {article.tags.length > 3 && (
                      <span className="px-1.5 py-0.5 bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded-md text-xs">
                        +{article.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
      
      {filteredArticles.length === 0 && (
        <div className="text-center py-8">
          <p className="text-xl text-gray-500 dark:text-gray-400">
            {selectedTag ? `没有找到标签为"${selectedTag}"的文章` : '暂无文章'}
          </p>
        </div>
      )}
      
      {/* 分页控件 */}
      {totalPages > 1 && (
        <div className="mt-10 flex justify-center">
          <nav className="flex items-center space-x-1.5">
            {/* 上一页按钮 */}
            <Link
              href={generatePageLink(currentPage - 1, selectedTag)}
              className={`px-3 py-1.5 rounded-md border ${
                currentPage === 1
                  ? 'bg-gray-50 text-gray-400 cursor-not-allowed dark:bg-gray-800 dark:text-gray-500 dark:border-gray-700'
                  : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors'
              }`}
              aria-disabled={currentPage === 1}
              tabIndex={currentPage === 1 ? -1 : undefined}
              onClick={e => currentPage === 1 && e.preventDefault()}
            >
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                上一页
              </span>
            </Link>
            
            {/* 页码按钮 */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => {
              // 显示当前页、第一页、最后一页，以及当前页附近的页码
              if (
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1)
              ) {
                return (
                  <Link
                    key={page}
                    href={generatePageLink(page, selectedTag)}
                    className={`px-3 py-1.5 rounded-md border ${
                      currentPage === page
                        ? 'bg-blue-600 text-white border-blue-600 dark:bg-blue-700 dark:border-blue-700'
                        : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700'
                    }`}
                    aria-current={currentPage === page ? 'page' : undefined}
                  >
                    {page}
                  </Link>
                )
              }
              
              // 显示省略号
              if (
                (page === 2 && currentPage > 3) ||
                (page === totalPages - 1 && currentPage < totalPages - 2)
              ) {
                return (
                  <span
                    key={page}
                    className="px-3 py-1.5 text-gray-500 dark:text-gray-400"
                  >
                    ...
                  </span>
                )
              }
              
              return null
            })}
            
            {/* 下一页按钮 */}
            <Link
              href={generatePageLink(currentPage + 1, selectedTag)}
              className={`px-3 py-1.5 rounded-md border ${
                currentPage === totalPages
                  ? 'bg-gray-50 text-gray-400 cursor-not-allowed dark:bg-gray-800 dark:text-gray-500 dark:border-gray-700'
                  : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors'
              }`}
              aria-disabled={currentPage === totalPages}
              tabIndex={currentPage === totalPages ? -1 : undefined}
              onClick={e => currentPage === totalPages && e.preventDefault()}
            >
              <span className="flex items-center">
                下一页
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}
