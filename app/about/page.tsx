import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
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
      <main className="container mx-auto px-4 pt-32 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            关于 MRI-Library
          </h1>

          {/* 使命愿景 */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">我们的使命</h2>
            <p className="text-gray-600 mb-6">
              我们致力于为医疗专业人士提供一个强大的MRI知识管理平台，通过技术创新推动医疗知识的传播与共享。
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">我们的愿景</h2>
            <p className="text-gray-600">
              成为全球最专业的MRI知识管理平台，为医疗行业提供最优质的知识服务。
            </p>
          </section>

          {/* 核心价值 */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">核心价值</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">专业</h3>
                <p className="text-gray-600">
                  提供专业的MRI知识内容，确保信息的准确性和可靠性。
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">创新</h3>
                <p className="text-gray-600">
                  持续创新，为用户提供更好的知识管理体验。
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">协作</h3>
                <p className="text-gray-600">
                  促进医疗专业人士之间的知识共享与协作。
                </p>
              </div>
            </div>
          </section>

          {/* 团队介绍 */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">我们的团队</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">医疗专家团队</h3>
                <p className="text-gray-600">
                  由经验丰富的MRI专家组成，确保内容的专业性和准确性。
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">技术团队</h3>
                <p className="text-gray-600">
                  专业的技术团队，致力于提供最佳的用户体验。
                </p>
              </div>
            </div>
          </section>

          {/* 联系我们 */}
          <section className="text-center mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">联系我们</h2>
            <p className="text-gray-600 mb-6">
              如果您有任何问题或建议，欢迎随时与我们联系。
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8">
                联系我们
              </Button>
            </Link>
          </section>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-white border-t mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">关于我们</h3>
              <p className="text-gray-600">
                MRI-Library 致力于为医疗专业人士提供优质的MRI知识管理解决方案。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">快速链接</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-gray-900">
                    关于我们
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                    联系我们
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
                    隐私政策
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">联系方式</h3>
              <ul className="space-y-2 text-gray-600">
                <li>邮箱：contact@mri-library.com</li>
                <li>电话：+86 123 4567 8900</li>
                <li>地址：北京市朝阳区xxx街道xxx号</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-600">
            <p>© {new Date().getFullYear()} MRI-Library. 保留所有权利。</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
