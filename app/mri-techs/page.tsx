import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function MRITechniquesPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* 更新后的面包屑导航 */}
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
          <div className="flex items-center gap-2">
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">首页</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>MRI成像技术</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        {/* 原有内容保持不动 */}
        <div className="min-h-screen bg-gray-50">
          {/* 头部 */}
          <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto py-6 px-4">
              <h1 className="text-3xl font-bold text-gray-900 py-4">MRI成像技术解析</h1>
              <p className="mt-2 text-gray-600">探索现代医学影像MRI的核心技术原理与应用</p>
            </div>
          </header>

          {/* 主要内容区 */}
          <main className="max-w-7xl mx-auto py-8 px-4">
          <h2 className="text-2xl text-gray-900">Section I. 加权成像</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* T1加权成像 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-blue-600">T1加权成像</h2>
                <div className="mt-4 space-y-3">
                  <p className="text-gray-700">▪ 原理：测量纵向磁化恢复</p>
                  <p className="text-gray-700">▪ 特点：解剖结构清晰显示</p>
                  <p className="text-gray-700">▪ 应用：脑组织解剖观察</p>
                  <img 
                    src="/placeholder-t1.png" 
                    alt="T1加权示例"
                    className="mt-4 rounded-lg w-full h-48 object-cover"
                  />
                </div>
              </div>

              {/* T2加权成像 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-blue-600">T2加权成像</h2>
                <div className="mt-4 space-y-3">
                  <p className="text-gray-700">▪ 原理：检测横向磁化衰减</p>
                  <p className="text-gray-700">▪ 特点：对水肿敏感</p>
                  <p className="text-gray-700">▪ 应用：病理变化检测</p>
                  <img 
                    src="/placeholder-t2.png" 
                    alt="T2加权示例"
                    className="mt-4 rounded-lg w-full h-48 object-cover"
                  />
                </div>
              </div>

              {/* 更多技术区块... */}
            </div>

            {/* 技术对比表格 */}
            <section className="mt-12 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">技术参数对比</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">序列类型</th>
                      <th className="text-left py-3 px-4">TR范围</th>
                      <th className="text-left py-3 px-4">TE范围</th>
                      <th className="text-left py-3 px-4">组织对比</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4">T1WI</td>
                      <td className="py-3 px-4">400-600ms</td>
                      <td className="py-3 px-4">10-20ms</td>
                      <td className="py-3 px-4">解剖结构</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">T2WI</td>
                      <td className="py-3 px-4">2000-5000ms</td>
                      <td className="py-3 px-4">80-120ms</td>
                      <td className="py-3 px-4">病理改变</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          {/* 相关链接 */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">相关资源</h2>
            <div className="space-y-4">
              <a 
                href="https://radiopaedia.org/cases/153576" 
                className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-lg font-medium text-blue-600">RadioPaedia.org</h3>
                <p className="text-gray-600 mt-1">丰富的影像病例和学习资源</p>
              </a>
            
              <a 
                href="https://www.radiologyinfo.org/en/info/mri_of_the_body" 
                className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-lg font-medium text-blue-600">放射学信息资源</h3>
                <p className="text-gray-600 mt-1">详细的MRI扫描原理与临床应用指南</p>
              </a>
              
              <a 
                href="https://www.ismrm.org/education/" 
                className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-lg font-medium text-blue-600">ISMRM教育资源</h3>
                <p className="text-gray-600 mt-1">国际磁共振医学会提供的专业培训材料</p>
              </a>
              
              <a 
                href="https://www.mriquestions.com/" 
                className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-lg font-medium text-blue-600">MRI问答库</h3>
                <p className="text-gray-600 mt-1">常见MRI技术问题解答与实践指导</p>
              </a>
            </div>
          </div>
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
