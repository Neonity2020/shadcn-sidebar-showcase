import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { MDXComponents } from '@/components/mdx-component'
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

// 定义标题项的接口
interface Heading {
  level: number;
  text: string;
  id: string;
}

// 生成一致的ID
function generateId(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/[\(\)]/g, ''); // 移除括号
}

function extractHeadings(content: string): Heading[] {
  const headingRegex = /^(#{2,4})\s+(.+)$/gm;
  const headings: Heading[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length; // 获取#的数量，表示标题级别
    const text = match[2].trim();
    const id = generateId(text);

    headings.push({ level, text, id });
  }

  return headings;
}

// 目录组件
function TableOfContents({ headings }: { headings: Heading[] }) {
  if (headings.length === 0) return null;

  return (
    <nav className="toc text-sm">
      <ul className="space-y-2">
        {headings.map((heading, index) => (
          <li 
            key={index} 
            className={`
              ${heading.level === 2 ? 'font-medium' : 'text-gray-600 dark:text-gray-400'} 
              ${heading.level > 2 ? `ml-${(heading.level - 2) * 3}` : ''}
              hover:text-blue-600 dark:hover:text-blue-400 transition-colors
            `}
          >
            <a 
              href={`#${heading.id}`} 
              className="block py-1 border-l-2 border-transparent hover:border-blue-500 pl-2 toc-item"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
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
  
  // 提取标题以生成目录
  const headings = extractHeadings(content)
  
  // 处理特殊字符，确保ID生成一致
  const processedHeadings = headings.map(heading => {
    // 确保ID生成与MDX组件中的逻辑一致
    const id = generateId(heading.text);
    return { ...heading, id };
  });
  
  return (
    <div className="container mx-auto py-10">
      <div className="relative flex flex-col lg:flex-row gap-8">
        {/* 主要内容区域 */}
        <div className="prose dark:prose-invert max-w-none lg:w-3/4">
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
        
        {/* 右侧悬浮目录 */}
        {processedHeadings.length > 0 && (
          <div className="lg:w-1/4">
            <div className="sticky top-24 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm mt-16 lg:mt-24">
              <h2 className="text-xl font-bold mb-4">目录</h2>
              <TableOfContents headings={processedHeadings} />
            </div>
          </div>
        )}
      </div>

      {/* 添加平滑滚动和锚点高亮的客户端脚本 */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // 确保在DOM完全加载后执行
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initTOC);
            } else {
              initTOC();
            }

            function initTOC() {
              // 延迟执行以确保React组件已完全渲染
              setTimeout(() => {
                // 为所有标题添加可见的锚点链接
                document.querySelectorAll('.prose h2, .prose h3, .prose h4').forEach(heading => {
                  // 检查标题是否已有ID，如果没有则添加
                  if (!heading.id) {
                    const text = heading.textContent || '';
                    const id = text
                      .toLowerCase()
                      .replace(/\\s+/g, '-')
                      .replace(/[^\\w\\-]+/g, '')
                      .replace(/[\\(\\)]/g, ''); // 移除括号
                    heading.id = id;
                  }
                });
                
                // 平滑滚动到锚点
                document.querySelectorAll('.toc-item').forEach(link => {
                  link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const href = link.getAttribute('href');
                    if (!href) return;
                    
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                      // 移除所有高亮
                      document.querySelectorAll('.toc-item').forEach(item => {
                        item.classList.remove('active', 'border-blue-500', 'text-blue-600', 'font-medium');
                      });
                      
                      // 添加高亮到当前项
                      link.classList.add('active', 'border-blue-500', 'text-blue-600', 'font-medium');
                      
                      // 获取目标元素的位置
                      const rect = targetElement.getBoundingClientRect();
                      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                      const targetTop = rect.top + scrollTop;
                      
                      // 平滑滚动到目标位置
                      window.scrollTo({
                        top: targetTop - 80, // 添加一些偏移以避免标题被固定导航栏遮挡
                        behavior: 'smooth'
                      });
                      
                      // 更新URL
                      history.pushState(null, '', href);
                    }
                  });
                });
                
                // 滚动监听以高亮当前可见的标题
                const observerOptions = {
                  root: null,
                  rootMargin: '-80px 0px -70% 0px', // 调整可见区域，使标题进入视口上部时触发
                  threshold: 0
                };
                
                const headingObserver = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      const id = entry.target.id;
                      
                      // 移除所有高亮
                      document.querySelectorAll('.toc-item').forEach(item => {
                        item.classList.remove('active', 'border-blue-500', 'text-blue-600', 'font-medium');
                      });
                      
                      // 添加高亮到当前项
                      const currentItem = document.querySelector(\`.toc-item[href="#\${id}"]\`);
                      if (currentItem) {
                        currentItem.classList.add('active', 'border-blue-500', 'text-blue-600', 'font-medium');
                      }
                    }
                  });
                }, observerOptions);
                
                // 监听所有标题元素
                document.querySelectorAll('.prose h2, .prose h3, .prose h4').forEach(heading => {
                  headingObserver.observe(heading);
                });
                
                // 初始检查URL中是否有锚点，如果有则滚动到对应位置
                if (window.location.hash) {
                  const targetId = window.location.hash.substring(1);
                  const targetElement = document.getElementById(targetId);
                  
                  if (targetElement) {
                    setTimeout(() => {
                      const rect = targetElement.getBoundingClientRect();
                      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                      const targetTop = rect.top + scrollTop;
                      
                      window.scrollTo({
                        top: targetTop - 80,
                        behavior: 'smooth'
                      });
                      
                      // 高亮对应的目录项
                      const tocItem = document.querySelector(\`.toc-item[href="#\${targetId}"]\`);
                      if (tocItem) {
                        tocItem.classList.add('active', 'border-blue-500', 'text-blue-600', 'font-medium');
                      }
                    }, 500); // 延迟更长时间以确保页面已完全加载
                  }
                }
              }, 500);
            }
          `
        }}
      />
    </div>
  )
} 