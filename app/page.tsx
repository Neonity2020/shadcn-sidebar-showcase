"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
      {/* 导航栏 */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            MRI-Library
          </Link>
          
          {/* 桌面端导航 */}
          <div className="hidden md:flex space-x-4">
            <Link href="/login">
              <Button variant="ghost">登录</Button>
            </Link>
            <Link href="/register">
              <Button>注册</Button>
            </Link>
          </div>

          {/* 移动端菜单按钮 */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* 移动端抽屉菜单 */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link
                href="/login"
                className="block w-full text-center py-2 text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                登录
              </Link>
              <Link
                href="/register"
                className="block w-full text-center py-2 text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                注册
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* 主要内容 */}
      <main className="container mx-auto px-4 pt-32 flex-grow">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            欢迎使用 MRI-Library
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            我的MRI图书馆
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
            这是一个强大的MRI知识管理工具，帮助您更好地管理您的MRI知识。
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/register" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8">
                立即开始
              </Button>
            </Link>
            <Link href="/login" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8">
                已有账号
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-white border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">关于我们</h3>
              <p className="text-sm sm:text-base text-gray-600">
                MRI-Library 致力于为医疗专业人士提供优质的MRI知识管理解决方案。
              </p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">快速链接</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm sm:text-base text-gray-600 hover:text-gray-900">
                    关于我们
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm sm:text-base text-gray-600 hover:text-gray-900">
                    联系我们
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm sm:text-base text-gray-600 hover:text-gray-900">
                    隐私政策
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">联系方式</h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li>邮箱：contact@mri-library.com</li>
                <li>电话：+86 123 4567 8900</li>
                <li>地址：北京市朝阳区xxx街道xxx号</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t text-center text-sm sm:text-base text-gray-600">
            <p>© {new Date().getFullYear()} MRI-Library. 保留所有权利。</p>
          </div>
        </div>
      </footer>
    </div>
  )
}