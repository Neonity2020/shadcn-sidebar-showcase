"use client"

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
import { books } from "@/data/books"
import { BookCard } from "@/components/book-card"
import { AppSidebar } from "@/components/app-sidebar"

export default function Page() {
  const [currentBook, setCurrentBook] = useState(1);
  const pageSize = 3;
  const totalPages = Math.ceil(books.length / pageSize);

  const currentBooks = books.slice(
    (currentBook - 1) * pageSize,
    currentBook * pageSize
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
                  <BreadcrumbLink href="/">首页</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>最近在读</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {currentBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          
          <div className="mt-8 flex justify-center">
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentBook(page)}
                  className={`h-10 w-10 rounded-lg text-sm font-medium transition-colors ${
                    currentBook === page 
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