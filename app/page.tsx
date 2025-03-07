import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* 导航栏 */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            MRI-Library
          </Link>
          <div className="space-x-4">
            <Link href="/login">
              <Button variant="ghost">登录</Button>
            </Link>
            <Link href="/register">
              <Button>注册</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="container mx-auto px-4 pt-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            欢迎使用 MRI-Library
          </h1>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            我的MRI图书馆
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            这是一个强大的MRI知识管理工具，帮助您更好地管理您的MRI知识。
          </p>
          <div className="space-x-4">
            <Link href="/register">
              <Button size="lg" className="text-lg px-8">
                立即开始
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="text-lg px-8">
                已有账号
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}