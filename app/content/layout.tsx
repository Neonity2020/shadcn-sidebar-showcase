import { ReactNode } from "react"

interface ContentLayoutProps {
  children: ReactNode
}

export default function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        {/* 顶部装饰 */}
        <div className="absolute inset-0 h-[250px] bg-gradient-to-b from-primary/10 to-transparent" />
        
        {/* 内容区域 */}
        <div className="z-1 px-4">
          {children}
        </div>
      </div>
    </div>
  )
}
