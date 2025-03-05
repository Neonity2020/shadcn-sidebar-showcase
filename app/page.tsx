export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 antialiased">
      {/* 头部区域 - 增加渐变背景和更好的间距 */}
      <header className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/banner.jpg"
            alt="Banner background"
            className="w-full h-full object-cover opacity-50 filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center sm:text-left space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-lg">MRI 学习平台</h1>
          <p className="mt-4 text-lg sm:text-xl text-blue-100 font-medium tracking-wide drop-shadow-md">探索磁共振成像的奥秘，提升专业技能</p>
        </div>
      </header>

      {/* 主要内容区 - 优化间距和响应式布局 */}
      <main className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* 卡片样式统一优化 */}
          {[
            { href: "/mri-bookshelf", icon: "book", title: "我的MRI书架", desc: "管理和阅读您收藏的MRI学习资料", color: "blue" },
            { href: "/mri-dictionary", icon: "dictionary", title: "MRI 词典", desc: "专业术语解释与知识库", color: "blue" },
            { href: "/mri-techs", icon: "tech", title: "技术解析", desc: "深入理解MRI成像原理", color: "green" },
            { href: "/projects", icon: "project", title: "项目管理", desc: "追踪研究项目进展", color: "purple" },
            { href: "/dashboard", icon: "dashboard", title: "在读看板", desc: "查看数据统计与分析", color: "amber" }
          ].map(({ href, icon, title, desc, color }) => (
            <a 
              key={href}
              href={href} 
              className={`group block p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:border-${color}-300 border border-transparent`}
            >
              <div className={`h-12 w-12 rounded-full bg-${color}-100 text-${color}-600 flex items-center justify-center mb-4 transition-transform group-hover:rotate-6`}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {/* 这里可以根据 icon 类型添加不同的 SVG 路径 */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className={`text-xl font-semibold text-gray-900 group-hover:text-${color}-600 transition-colors`}>{title}</h2>
              <p className="mt-2 text-gray-600">{desc}</p>
            </a>
          ))}
        </div>

        {/* 特色内容区 - 改进布局和响应式设计 */}
        <div className="mt-12 sm:mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center sm:text-left">特色内容</h2>
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2">
            {/* 最新更新卡片 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
              <h3 className="text-lg font-semibold mb-4 text-blue-700 flex items-center justify-between">
                最新更新
                <span className="text-sm text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">查看全部</span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                  <span className="h-2 w-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                  <div>
                    <span>新增<a href="/mri-dictionary/fsbb" className="text-blue-600 hover:underline">FSBB</a>序列技术详解</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                  <span className="h-2 w-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                  <div>
                    <span>更新<a href="/mri-techs" className="text-blue-600 hover:underline">T1/T2/FLAIR/SWI/DWI 加权成像对比</a></span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                  <span className="h-2 w-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span>添加多个临床病例诊断要点</span>
                    </div>
                    <ul className="ml-4 mt-2 space-y-1 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                        <div>
                          <a href="/mri-diagnosis/neuroimaging/brain-tumors/hemangioblastoma/" className="text-blue-600 hover:underline">血管母细胞瘤</a>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                        <div>
                          <a href="/mri-diagnosis/neuroimaging/brain-tumors/glioma/" className="text-blue-600 hover:underline">胶质瘤</a>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                        <div>
                          <a href="/mri-diagnosis/neuroimaging/brain-tumors/meningioma/" className="text-blue-600 hover:underline">脑膜瘤</a>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                        <div>
                          <a href="/mri-diagnosis/neuroimaging/brain-tumors/pituitary-adenoma/" className="text-blue-600 hover:underline">垂体腺瘤</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                  <span className="h-2 w-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                  <div>
                    <span>新增<a href="/mri-dictionary/swi" className="text-blue-600 hover:underline">SWI</a>序列技术详解</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* 学习路径卡片 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
              <h3 className="text-lg font-semibold mb-4 text-green-700 flex items-center justify-between">
                学习路径
                <span className="text-sm text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">开始学习</span>
              </h3>
              <ul className="space-y-6">
                <li className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors">
                  <span className="h-2 w-2 rounded-full bg-green-500 flex-shrink-0"></span>
                  <span>基础物理原理</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors">
                  <span className="h-2 w-2 rounded-full bg-green-500 flex-shrink-0"></span>
                  <span>序列参数优化</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors">
                  <span className="h-2 w-2 rounded-full bg-green-500 flex-shrink-0"></span>
                  <span>临床应用实践</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}