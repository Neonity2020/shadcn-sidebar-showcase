"use client";

import { books } from "@/data/books";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
  // 计算各种状态的书籍数量
  const totalBooks = books.length;
  const readingBooks = books.filter(book => book.status === 'reading').length;
  const completedBooks = books.filter(book => book.status === 'completed').length;
  const pausedBooks = books.filter(book => book.status === 'paused').length;
  
  // 获取所有在读书籍
  const readingBooksList = books.filter(book => book.status === 'reading');
  
  // 轮播状态
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === readingBooksList.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, [readingBooksList.length]);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
        <div className="rounded-xl bg-muted/50 p-4 flex flex-col items-center justify-center">
          <h3 className="text-lg md:text-xl font-bold">总书籍</h3>
          <p className="text-2xl md:text-3xl font-bold text-primary">{totalBooks}</p>
        </div>
        <div className="rounded-xl bg-muted/50 p-4 flex flex-col items-center justify-center">
          <h3 className="text-lg md:text-xl font-bold">阅读中</h3>
          <p className="text-2xl md:text-3xl font-bold text-blue-500">{readingBooks}</p>
        </div>
        <div className="rounded-xl bg-muted/50 p-4 flex flex-col items-center justify-center">
          <h3 className="text-lg md:text-xl font-bold">已完成</h3>
          <p className="text-2xl md:text-3xl font-bold text-green-500">{completedBooks}</p>
        </div>
        <div className="rounded-xl bg-muted/50 p-4 flex flex-col items-center justify-center">
          <h3 className="text-lg md:text-xl font-bold">已暂停</h3>
          <p className="text-2xl md:text-3xl font-bold text-yellow-500">{pausedBooks}</p>
        </div>
      </div>
      
      {/* 在读书籍轮播栏 */}
      <div className="rounded-xl bg-muted/50 p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4">正在阅读</h2>
        <div className="relative overflow-hidden">
          <div className="flex gap-2 md:gap-4 items-center justify-center">
            {readingBooksList.map((book, index) => (
              <div 
                key={book.id} 
                className={`transition-all duration-500 ${
                  index === currentIndex ? "scale-100 opacity-100" : "hidden md:block md:scale-90 md:opacity-60"
                }`}
              >
                <div className="relative w-36 h-48 md:w-48 md:h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src={`/covers/${book.id}.jpg`} 
                    alt={book.title} 
                    fill 
                    className="object-cover"
                    style={{ zIndex: 0 }}
                  />
                </div>
                <div className="mt-2 text-center">
                  <h3 className="text-sm md:text-base font-semibold">{book.title}</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2 md:h-2.5 mt-2">
                    <div 
                      className="bg-blue-600 h-2 md:h-2.5 rounded-full" 
                      style={{ width: `${book.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">{book.progress}%</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* 导航点 */}
          <div className="flex justify-center mt-2 md:mt-4 gap-1 md:gap-2">
            {readingBooksList.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

