import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'my-mri-lib',
  description: 'My MRI library',
}

function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      {children}
    </SidebarProvider>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="fixed flex h-14 w-full shrink-0 items-center border-b px-4 bg-background">
                <div className="flex items-center gap-2">
                  <SidebarTrigger className="-ml-1" />
                  <Separator orientation="vertical" className="mr-2 h-4" />
                  <BreadcrumbNav />
                </div>
              </header>
              <div className="pt-16">
                {children}
              </div>
            </SidebarInset>
          </SidebarProvider>
        </ClientLayout>
      </body>
    </html>
  )
}
