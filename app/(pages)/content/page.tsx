import { MDXComponents } from '@/components/mdx-component'

export default function MDXPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="prose dark:prose-invert max-w-none">
        <h1>MDX 示例页面</h1>
        <p>这是一个 MDX 示例页面，您可以通过访问 <code>/content/mdx-example</code> 来查看 MDX 文件的渲染效果。</p>
        
        <div className="mt-8">
          <h2>自定义 MDX 组件示例</h2>
          <MDXComponents />
        </div>
      </div>
    </div>
  )
} 