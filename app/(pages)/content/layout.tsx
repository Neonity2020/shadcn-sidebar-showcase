import { ReactNode } from "react"

interface ContentLayoutProps {
  children: ReactNode
}

export default function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        {/* 顶部装饰 - 优化渐变颜色效果 */}
        <div className="absolute inset-0 h-[320px] bg-gradient-to-b from-chart-1/15 via-chart-2/10 to-transparent bg-[length:200%_200%] animate-[gradient_8s_ease_infinite]" />
        <div className="absolute inset-0 h-[320px] bg-gradient-to-tr from-transparent via-chart-4/5 to-chart-5/10 bg-[length:200%_200%] animate-[gradient_12s_ease-in-out_infinite]" />
        
        {/* 装饰图形 */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-chart-2/10 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-chart-1/10 rounded-full blur-3xl opacity-60" />
        
        {/* 内容区域 - 缩小外边距和内边距 */}
        <div className="relative z-10 container mx-auto px-1 sm:px-1 max-w-5xl py-4 sm:py-6">
          <div className="bg-card/80 rounded-xl shadow-sm border border-border/40 backdrop-blur-sm transition-all duration-300 hover:shadow-md">
            <div className="p-3 sm:p-4 md:p-6">
              {children}
            </div>
          </div>
          
          {/* 底部装饰 */}
          <div className="mt-4 text-center text-sm text-muted-foreground">
            <p>探索更多精彩内容</p>
          </div>
        </div>
      </div>
    </div>
  )
}
