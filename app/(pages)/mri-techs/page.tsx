"use client"

import { useState } from 'react'

export default function MRITechniquesPage() {
  const [activeTab, setActiveTab] = useState('SE')
  
  return (
        <div className="min-h-screen bg-gray-50">
          {/* 头部 */}
          <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto py-6 px-4">
              <h1 className="text-3xl font-bold text-gray-900">MRI成像技术解析</h1>
              <p className="mt-2 text-gray-600">探索现代医学影像MRI的核心技术原理与应用</p>
            </div>
          </header>

          {/* 主要内容区 */}
          <main className="max-w-7xl mx-auto py-8 px-6">
          <h2 className="text-2xl text-gray-900 py-4">Section I. 加权成像</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* T1加权成像 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-blue-600">T1加权成像</h2>
                <div className="mt-4 flex gap-4">
                  <div className="flex-1">
                    <p className="text-gray-700">▪ 原理：测量纵向磁化恢复</p>
                    <p className="text-gray-700">▪ 特点：解剖结构清晰显示</p>
                    <p className="text-gray-700">▪ 应用：脑组织解剖观察</p>
                  </div>
                  <div className="flex-1">
                    <img 
                      src="/project-images/T1WI.jpeg" 
                      alt="T1加权示例"
                      className="rounded-lg w-full aspect-[3/4] object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* T2加权成像 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-blue-600">T2加权成像</h2>
                <div className="mt-4 flex gap-4">
                  <div className="flex-1">
                    <p className="text-gray-700">▪ 原理：检测横向磁化衰减</p>
                    <p className="text-gray-700">▪ 特点：对水肿敏感</p>
                    <p className="text-gray-700">▪ 应用：病理变化检测</p>
                  </div>
                  <div className="flex-1">
                    <img 
                      src="/project-images/T2WI.jpeg" 
                      alt="T2加权示例"
                      className="rounded-lg w-full aspect-[3/4] object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* FLAIR加权成像 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-green-600">FLAIR加权成像</h2>
                <div className="mt-4 flex gap-4">
                  <div className="flex-1">
                    <p className="text-gray-700">▪ 原理：抑制脑脊液信号</p>
                    <p className="text-gray-700">▪ 特点：病变边界清晰</p>
                    <p className="text-gray-700">▪ 应用：脑白质病变检测</p>
                  </div>
                  <div className="flex-1 relative overflow-hidden group">
                    <img 
                      src="/project-images/flair-left.jpg" 
                      alt="FLAIR加权示例"
                      className="rounded-lg w-full aspect-[3/4] object-cover absolute top-0 left-0 z-5 group-hover:opacity-0 transition-opacity duration-300"
                    />
                    <img 
                      src="/project-images/flair-right.jpg" 
                      alt="FLAIR加权示例（标注）"
                      className="rounded-lg w-full aspect-[3/4] object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <p className="text-xs text-center text-gray-600 mt-2">悬停显示图片标注 - 灰白质分界清晰</p>
                  </div>
                </div>
              </div>

              {/* DWI扩散加权成像 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-purple-600">DWI扩散加权成像</h2>
                <div className="mt-4 flex gap-4">
                  <div className="flex-1">
                    <p className="text-gray-700">▪ 原理：测量分子布朗运动</p>
                    <p className="text-gray-700">▪ 特点：高度敏感于细胞密度</p>
                    <p className="text-gray-700">▪ 应用：急性脑梗死诊断；肿瘤鉴别诊断</p>
                  </div>
                  <div className="flex-1">
                    <img 
                      src="/project-images/dwi.jpeg" 
                      alt="DWI加权示例"
                      className="rounded-lg w-full aspect-[3/4] object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* SWI磁敏感加权成像 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-red-600">SWI磁敏感加权成像</h2>
                <div className="mt-4 flex gap-4">
                  <div className="flex-1">
                    <p className="text-gray-700">▪ 原理：利用磁敏感性差异</p>
                    <p className="text-gray-700">▪ 特点：静脉血管高对比</p>
                    <p className="text-gray-700">▪ 应用：微出血、血管畸形</p>
                  </div>
                  <div className="flex-1">
                    <img 
                      src="/project-images/swi.jpeg" 
                      alt="SWI加权示例"
                      className="rounded-lg w-full aspect-[3/4] object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* 更多技术区块... */}
              
            </div>

            {/* 技术对比表格 */}
            <section className="mt-12 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">技术参数对比</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">序列类型</th>
                      <th className="text-left py-3 px-4">TR范围</th>
                      <th className="text-left py-3 px-4">TE范围</th>
                      <th className="text-left py-3 px-4">组织对比</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4">T1WI</td>
                      <td className="py-3 px-4">400-600ms</td>
                      <td className="py-3 px-4">10-20ms</td>
                      <td className="py-3 px-4">解剖结构</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">T2WI</td>
                      <td className="py-3 px-4">2000-5000ms</td>
                      <td className="py-3 px-4">80-120ms</td>
                      <td className="py-3 px-4">病理改变</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">FLAIR</td>
                      <td className="py-3 px-4">8000-10000ms</td>
                      <td className="py-3 px-4">120-140ms</td>
                      <td className="py-3 px-4">白质病变</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">DWI</td>
                      <td className="py-3 px-4">3000-5000ms</td>
                      <td className="py-3 px-4">60-100ms</td>
                      <td className="py-3 px-4">细胞密度</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">SWI</td>
                      <td className="py-3 px-4">20-50ms</td>
                      <td className="py-3 px-4">10-20ms</td>
                      <td className="py-3 px-4">血管结构</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section II: 脉冲序列家族 */}
            <h2 className="text-2xl text-gray-900 py-8 mt-8">Section II. 脉冲序列家族</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  <button 
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'SE' 
                        ? 'border-blue-500 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                    onClick={() => setActiveTab('SE')}
                  >
                    自旋回波(SE)序列
                  </button>
                  <button 
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'GRE' 
                        ? 'border-blue-500 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                    onClick={() => setActiveTab('GRE')}
                  >
                    梯度回波(GRE)序列
                  </button>
                  <button 
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'EPI' 
                        ? 'border-blue-500 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                    onClick={() => setActiveTab('EPI')}
                  >
                    平面回波(EPI)序列
                  </button>
                </nav>
              </div>

              {/* SE序列内容 */}
              <div className={`mt-6 ${activeTab === 'SE' ? '' : 'hidden'}`}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">基本原理</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li>• 90°射频脉冲 + 180°重聚脉冲</li>
                      <li>• 完全补偿B0不均匀性</li>
                      <li>• 信噪比高，图像质量好</li>
                      <li>• 扫描时间较长</li>
                    </ul>
                    <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-4">主要变体</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li>• 快速自旋回波(FSE/TSE)</li>
                      <li>• 反转恢复序列(IR)</li>
                      <li>• FLAIR序列</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <img 
                      src="/project-images/se-diagram.jpeg" 
                      alt="SE序列示意图"
                      className="rounded-lg w-full object-cover shadow-sm"
                    />
                    <p className="text-sm text-gray-500 text-center">SE序列时序图与信号形成示意</p>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">临床应用</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900">常规扫描</h4>
                      <p className="text-gray-600 mt-2">基础T1WI、T2WI成像，解剖结构显示</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900">特殊应用</h4>
                      <p className="text-gray-600 mt-2">FLAIR序列脑白质病变检查</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900">优化方向</h4>
                      <p className="text-gray-600 mt-2">并行采集技术缩短扫描时间</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* GRE序列内容 */}
              <div className={`mt-6 ${activeTab === 'GRE' ? '' : 'hidden'}`}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">基本原理</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li>• 小翻转角激发</li>
                      <li>• 梯度场重聚</li>
                      <li>• 扫描速度快</li>
                      <li>• 对磁敏感性高</li>
                    </ul>
                    <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-4">主要变体</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li>• 快速低角度激发(FLASH)</li>
                      <li>• 平衡式稳态进动(bSSFP)</li>
                      <li>• 磁敏感加权成像(SWI)</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <img 
                      src="/project-images/gre-diagram.jpeg" 
                      alt="GRE序列示意图"
                      className="rounded-lg w-full object-cover shadow-sm"
                    />
                    <p className="text-sm text-gray-500 text-center">GRE序列时序图与信号形成示意</p>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">临床应用</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900">动态增强</h4>
                      <p className="text-gray-600 mt-2">高时间分辨率灌注成像</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900">血管成像</h4>
                      <p className="text-gray-600 mt-2">TOF血管造影，SWI微出血显示</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900">心脏成像</h4>
                      <p className="text-gray-600 mt-2">心肌运动与灌注评估</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* EPI序列内容 */}
              <div className={`mt-6 ${activeTab === 'EPI' ? '' : 'hidden'}`}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">基本原理</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li>• 单次激发多行采集</li>
                      <li>• 超快速成像技术</li>
                      <li>• 时间分辨率极高</li>
                      <li>• 易受磁敏感伪影影响</li>
                    </ul>
                    <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-4">主要变体</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li>• 单发EPI</li>
                      <li>• 分段EPI</li>
                      <li>• 并行采集EPI</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <img 
                      src="/project-images/epi-diagram.jpeg" 
                      alt="EPI序列示意图"
                      className="rounded-lg w-full object-cover shadow-sm"
                    />
                    <p className="text-sm text-gray-500 text-center">EPI序列时序图与k空间填充示意</p>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">临床应用</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900">功能成像</h4>
                      <p className="text-gray-600 mt-2">fMRI脑功能激活研究</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900">扩散成像</h4>
                      <p className="text-gray-600 mt-2">DWI、DTI脑白质纤维束成像</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900">灌注成像</h4>
                      <p className="text-gray-600 mt-2">PWI脑组织灌注评估</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          {/* 相关链接 */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">相关资源</h2>
            <div className="space-y-4">
              <a 
                href="https://radiopaedia.org/cases/153576" 
                className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-lg font-medium text-blue-600">RadioPaedia.org</h3>
                <p className="text-gray-600 mt-1">丰富的影像病例和学习资源</p>
              </a>
            
              <a 
                href="https://www.radiologyinfo.org/en/info/mri_of_the_body" 
                className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-lg font-medium text-blue-600">放射学信息资源</h3>
                <p className="text-gray-600 mt-1">详细的MRI扫描原理与临床应用指南</p>
              </a>
              
              <a 
                href="https://www.ismrm.org/education/" 
                className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-lg font-medium text-blue-600">ISMRM教育资源</h3>
                <p className="text-gray-600 mt-1">国际磁共振医学会提供的专业培训材料</p>
              </a>
              
              <a 
                href="https://www.mriquestions.com/" 
                className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-lg font-medium text-blue-600">MRI问答库</h3>
                <p className="text-gray-600 mt-1">常见MRI技术问题解答与实践指导</p>
              </a>
            </div>
          </div>
          </main>
        </div>
  )
}
