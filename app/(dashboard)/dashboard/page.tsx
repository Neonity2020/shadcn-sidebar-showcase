"use client"

import { useSession } from "next-auth/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react"
import { books } from "@/data/books"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const { data: session } = useSession()
  const [currentBookIndex, setCurrentBookIndex] = useState(0)
  const router = useRouter()

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBookIndex((prevIndex) => (prevIndex + 1) % books.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  const nextBook = () => {
    setCurrentBookIndex((prevIndex) => (prevIndex + 1) % books.length)
  }

  const prevBook = () => {
    setCurrentBookIndex((prevIndex) => (prevIndex - 1 + books.length) % books.length)
  }

  // 处理图书点击，跳转到阅读界面
  const handleBookClick = () => {
    router.push(`/mri-bookshelf?id=${books[currentBookIndex].id}`)
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>欢迎回来，{session?.user?.name || "用户"}</CardTitle>
            <CardDescription>这是您的个人仪表板</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">在这里您可以管理您的所有内容和设置。</p>
            <Button variant="outline" onClick={() => signOut({ callbackUrl: "/" })}>
              退出登录
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>快速统计</CardTitle>
            <CardDescription>您的使用数据</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>总项目数</span>
                <span className="font-semibold">12</span>
              </div>
              <div className="flex justify-between">
                <span>本周活跃天数</span>
                <span className="font-semibold">5</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>最近活动</CardTitle>
            <CardDescription>过去7天的活动记录</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">暂无最近活动</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 图书轮播图组件 */}
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>我的图书馆</CardTitle>
          <CardDescription>浏览您的图书收藏</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute left-0 z-10 bg-white/80 rounded-full shadow-md"
                onClick={prevBook}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <div className="w-full overflow-hidden">
                <div 
                  className="flex flex-col md:flex-row items-center gap-6 p-4 cursor-pointer hover:bg-muted/50 rounded-lg transition-colors"
                  onClick={handleBookClick}
                >
                  <div className="relative w-48 h-64 flex-shrink-0">
                    <Image 
                      src={books[currentBookIndex].cover} 
                      alt={books[currentBookIndex].title}
                      fill
                      className="object-cover rounded-md shadow-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{books[currentBookIndex].title}</h3>
                    <p className="text-gray-600 mb-4">{books[currentBookIndex].description}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">状态:</span>
                        <span className={`text-sm px-2 py-1 rounded-full ${
                          books[currentBookIndex].status === 'completed' ? 'bg-green-100 text-green-800' :
                          books[currentBookIndex].status === 'reading' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {books[currentBookIndex].status === 'completed' ? '已完成' :
                           books[currentBookIndex].status === 'reading' ? '阅读中' : '已暂停'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">进度:</span>
                        <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-blue-500 rounded-full"
                            style={{ width: `${books[currentBookIndex].progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm">{books[currentBookIndex].progress}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 z-10 bg-white/80 rounded-full shadow-md"
                onClick={nextBook}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="flex justify-center mt-4 gap-1">
              {books.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentBookIndex ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentBookIndex(index)}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 