export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 头部区域 - 增加渐变背景和更好的间距 */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">MRI 学习平台</h1>
          <p className="mt-4 text-lg sm:text-xl text-blue-100">探索磁共振成像的奥秘，提升专业技能</p>
        </div>
      </header>

      {/* 主要内容区 - 优化间距和响应式布局 */}
      <main className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* MRI 词典卡片 - 改进卡片样式和交互效果 */}
          <a 
            href="/mri-dictionary" 
            className="group block p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
          >
            <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">MRI 词典</h2>
            <p className="mt-2 text-gray-600">专业术语解释与知识库</p>
          </a>

          {/* MRI 技术卡片 - 应用相同的样式改进 */}
          <a 
            href="/mri-techs" 
            className="group block p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
          >
            <div className="h-12 w-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors">技术解析</h2>
            <p className="mt-2 text-gray-600">深入理解MRI成像原理</p>
          </a>

          {/* 项目管理卡片 - 应用相同的样式改进 */}
          <a 
            href="/projects" 
            className="group block p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
          >
            <div className="h-12 w-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">项目管理</h2>
            <p className="mt-2 text-gray-600">追踪研究项目进展</p>
          </a>

          {/* 站点看板卡片 - 新增卡片 */}
          <a 
            href="/dashboard" 
            className="group block p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
          >
            <div className="h-12 w-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">在读看板</h2>
            <p className="mt-2 text-gray-600">查看数据统计与分析</p>
          </a>
        </div>

        {/* 特色内容区 - 改进布局和响应式设计 */}
        <div className="mt-12 sm:mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center sm:text-left">特色内容</h2>
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-4 text-blue-700">最新更新</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                  <span className="h-2 w-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                  <span>新增<a href="/mri-dictionary/fsbb" className="text-blue-600 hover:underline">FSBB</a>序列技术详解</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                  <span className="h-2 w-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                  <span>更新T1/T2加权成像对比</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                  <span className="h-2 w-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                  <span>添加多个临床案例分析</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-4 text-green-700">学习路径</h3>
              <ul className="space-y-4">
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