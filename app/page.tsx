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
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

interface Project {
  id: number
  name: string
  status: string
  description: string
  progress: number
  directories: string[]
  downloadUrl: string
}

// 修改模拟项目数据
const projects: Project[] = [
  { 
    id: 1, 
    name: "电商平台", 
    status: "进行中", 
    description: "基于Next.js的全栈电商解决方案", 
    progress: 75,
    directories: ["src", "public", "components", "pages"],
    downloadUrl: "https://pan.baidu.com/s/1jC9lRkNi5QwZ-rcH17mGQQ?pwd=8945"
  },
  { 
    id: 2, 
    name: "数据分析", 
    status: "已完成", 
    description: "实时数据可视化仪表盘", 
    progress: 100,
    directories: ["analytics", "dashboard", "reports"],
    downloadUrl: "https://example.com/download/2"
  },
  { 
    id: 3, 
    name: "移动应用", 
    status: "规划中", 
    description: "跨平台React Native应用", 
    progress: 20,
    directories: ["mobile", "assets", "screens"],
    downloadUrl: "https://example.com/download/3"
  }
]

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>项目列表</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className="rounded-xl border bg-muted/50 p-6">
                <img 
                  src={`/project-images/${project.id}.jpg`} 
                  alt={project.name}
                  className="mb-4 aspect-video rounded-lg bg-muted object-cover"
                />
                <h3 className="mb-2 text-lg font-semibold">{project.name}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${
                    project.status === "已完成" ? "text-chart-2" : 
                    project.status === "进行中" ? "text-chart-1" : "text-muted-foreground"
                  }`}>
                    {project.status}
                  </span>
                  <div className="h-2 w-24 rounded-full bg-muted">
                    <div 
                      className="h-full rounded-full bg-chart-3 transition-all" 
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                {/* 新增项目摘要区域 */}
                <div className="mt-4 space-y-3 border-t pt-4">
                  <div className="flex flex-wrap gap-4 text-sm">
                    {/* 项目目录 */}
                    <div className="flex-1 min-w-[200px]">
                      <h4 className="font-medium mb-2 text-muted-foreground">项目目录</h4>
                      <ul className="space-y-1.5">
                        {project.directories?.map((dir, i) => (
                          <li key={i} className="flex items-center text-muted-foreground">
                            <span className="mr-2">📁</span>
                            {dir}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 下载地址 */}
                    <div className="flex-1 min-w-[200px]">
                      <h4 className="font-medium mb-2 text-muted-foreground">下载地址</h4>
                      <a 
                        href={project.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1.5 rounded-md bg-accent text-accent-foreground hover:bg-accent/80 transition-colors"
                      >
                        <span className="mr-2">⬇️</span>
                        立即下载
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* 分页组件 */}
          <div className="mt-8 flex justify-center">
            <div className="flex gap-2">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className="h-10 w-10 rounded-lg bg-muted text-sm font-medium hover:bg-muted/70"
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 