"use client"

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
import { useState } from "react"
import { Book, books } from "@/data/books"

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;
  const totalPages = Math.ceil(books.length / pageSize);

  const currentProjects = books.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

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
                  <BreadcrumbPage>最近在读</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {currentProjects.map((book) => (
              <div key={book.id} className="rounded-xl border bg-muted/50 p-6">
                <img 
                  src={`/project-images/${book.id}.jpg`} 
                  alt={book.title}
                  className="mb-4 aspect-video rounded-lg bg-muted object-cover"
                />
                <h3 className="mb-2 text-lg font-semibold">{book.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{book.description}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${
                    book.status === "completed" ? "text-chart-2" : 
                    book.status === "reading" ? "text-chart-1" : "text-muted-foreground"
                  }`}>
                    {book.progress}%
                  </span>
                  <div className="h-2 w-24 rounded-full bg-muted">
                    <div 
                      className="h-full rounded-full bg-chart-3 transition-all" 
                      style={{ width: `${book.progress}%` }}
                    />
                  </div>
                </div>

                <div className="mt-4 space-y-3 border-t pt-4">
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex-1 min-w-[200px]">
                      <h4 className="font-medium mb-2 text-muted-foreground">项目目录</h4>
                      <ul className="space-y-1.5">
                        {book.directories?.map((dir, i) => (
                          <li key={i} className="flex items-center text-muted-foreground">
                            <span className="mr-2">📁</span>
                            {dir}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex-1 min-w-[200px]">
                      <h4 className="font-medium mb-2 text-muted-foreground">下载地址</h4>
                      <a 
                        href={book.downloadUrl}
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
          
          <div className="mt-8 flex justify-center">
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`h-10 w-10 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === page 
                      ? "bg-accent text-accent-foreground" 
                      : "bg-muted hover:bg-muted/70"
                  }`}
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