import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Privacy() {
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
      <main className="container mx-auto px-4 pt-32 flex-grow mb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            隐私政策
          </h1>

          <div className="bg-white p-8 rounded-lg shadow-sm space-y-8">
            {/* 简介 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">简介</h2>
              <p className="text-gray-600">
                本隐私政策说明了 MRI-Library 如何收集、使用、披露、处理和保护您在使用我们的服务时提供的信息。我们非常重视您的隐私，并致力于保护您的个人信息。
              </p>
            </section>

            {/* 信息收集 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">信息收集</h2>
              <p className="text-gray-600 mb-4">
                我们收集的信息包括但不限于：
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>个人基本信息（姓名、邮箱地址、电话号码等）</li>
                <li>账户信息（用户名、密码等）</li>
                <li>使用数据（访问时间、使用频率等）</li>
                <li>设备信息（IP地址、浏览器类型等）</li>
                <li>MRI相关数据（您上传的MRI图像、诊断报告等）</li>
              </ul>
            </section>

            {/* 信息使用 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">信息使用</h2>
              <p className="text-gray-600 mb-4">
                我们使用收集的信息用于：
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>提供和改进我们的服务</li>
                <li>处理您的请求和查询</li>
                <li>发送服务通知和更新</li>
                <li>防止欺诈和确保安全</li>
                <li>遵守法律法规要求</li>
              </ul>
            </section>

            {/* 信息共享 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">信息共享</h2>
              <p className="text-gray-600">
                我们不会将您的个人信息出售或出租给第三方。仅在以下情况下，我们可能会共享您的信息：
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mt-4">
                <li>获得您的明确同意</li>
                <li>遵守法律法规要求</li>
                <li>保护我们的合法权益</li>
                <li>与授权合作伙伴共享必要信息</li>
              </ul>
            </section>

            {/* 信息安全 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">信息安全</h2>
              <p className="text-gray-600">
                我们采取多种安全措施保护您的个人信息，包括但不限于：
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mt-4">
                <li>使用加密技术传输和存储数据</li>
                <li>定期更新安全措施</li>
                <li>限制员工访问权限</li>
                <li>定期进行安全审计</li>
              </ul>
            </section>

            {/* 用户权利 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">用户权利</h2>
              <p className="text-gray-600 mb-4">
                您对个人信息拥有以下权利：
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>访问和查看您的个人信息</li>
                <li>更正或更新您的个人信息</li>
                <li>删除您的个人信息</li>
                <li>撤回同意授权</li>
                <li>导出您的个人信息</li>
              </ul>
            </section>

            {/* 政策更新 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">政策更新</h2>
              <p className="text-gray-600">
                我们可能会不时更新本隐私政策。更新后的政策将在网站上公布，并标注更新时间。建议您定期查看本政策以了解任何变更。
              </p>
            </section>

            {/* 联系我们 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">联系我们</h2>
              <p className="text-gray-600 mb-4">
                如果您对本隐私政策有任何疑问或建议，请通过以下方式联系我们：
              </p>
              <div className="space-y-2 text-gray-600">
                <p>邮箱：privacy@mri-library.com</p>
                <p>电话：+86 123 4567 8900</p>
                <p>地址：北京市朝阳区xxx街道xxx号</p>
              </div>
            </section>
          </div>
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
