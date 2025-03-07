"use client"

import { useState } from "react"
import { books } from "@/data/books"
import { BookCard } from "@/components/book-card"

export default function Page() {
  const [currentBook, setCurrentBook] = useState(1);
  const pageSize = 3;
  const totalPages = Math.ceil(books.length / pageSize);

  const currentBooks = books.slice(
    (currentBook - 1) * pageSize,
    currentBook * pageSize
  );

  return (
        
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {currentBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          
          <div className="mt-8 flex justify-center">
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentBook(Math.max(1, currentBook - 1))}
                disabled={currentBook === 1}
                className={`h-10 px-4 rounded-lg text-sm font-medium transition-colors ${
                  currentBook === 1
                    ? "bg-muted text-muted-foreground cursor-not-allowed"
                    : "bg-muted hover:bg-muted/70"
                }`}
              >
                上一页
              </button>

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

              <button
                onClick={() => setCurrentBook(Math.min(totalPages, currentBook + 1))}
                disabled={currentBook === totalPages}
                className={`h-10 px-4 rounded-lg text-sm font-medium transition-colors ${
                  currentBook === totalPages
                    ? "bg-muted text-muted-foreground cursor-not-allowed"
                    : "bg-muted hover:bg-muted/70"
                }`}
              >
                下一页
              </button>
            </div>
          </div>
        </div>

  )
} 