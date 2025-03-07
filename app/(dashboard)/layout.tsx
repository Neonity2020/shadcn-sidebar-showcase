import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="fixed flex h-14 w-full shrink-0 items-center justify-between border-b px-4 bg-background">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <BreadcrumbNav />
          </div>
          <div className="flex items-center gap-4">
            {/* 这里可以添加用户头像等组件 */}
          </div>
        </header>
        <div className="pt-16">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 