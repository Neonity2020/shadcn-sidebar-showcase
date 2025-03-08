import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function MDXPage() {
  return (
    <div className="py-1">
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-gradient text-3xl font-bold mb-4">MDX 示例页面</h1>
        <p className="text-base mb-6">这是一个 MDX 示例页面，您可以通过访问 <code className="bg-muted px-1.5 py-0.5 rounded text-sm">/content/mdx-example</code> 来查看 MDX 文件的渲染效果。</p>
        
        <div className="mt-6 space-y-6">
          <div className="card-hover-effect bg-card/50 p-4 rounded-lg border border-border/40 backdrop-blur-sm">
            <div className="flex items-center mb-3">
              <div className="w-1 h-5 bg-chart-1 rounded-full mr-2"></div>
              <h2 className="text-xl font-semibold">MDX 组件示例</h2>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mt-4 flex items-center">
                <span className="w-1 h-4 bg-chart-2 rounded-full mr-2"></span>
                这是一个 H3 标题
              </h3>
              <p className="text-base leading-relaxed">这是一个段落示例，展示了 MDX 组件的样式。段落可以包含<strong>加粗</strong>和<em>斜体</em>文本。</p>
              <blockquote className="border-l-4 border-chart-4 pl-3 italic py-2 my-3">
                这是一个引用块示例，展示了引用的样式效果。
              </blockquote>
              <pre className="bg-muted p-3 rounded-lg overflow-x-auto border border-chart-5/10">
                <code className="text-sm">console.log('这是代码示例');</code>
              </pre>
            </div>
          </div>
          
          <div className="flex justify-end mt-4">
            <Button variant="outline" size="sm" className="group border-chart-2/30 hover:border-chart-2/60">
              查看更多示例
              <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 