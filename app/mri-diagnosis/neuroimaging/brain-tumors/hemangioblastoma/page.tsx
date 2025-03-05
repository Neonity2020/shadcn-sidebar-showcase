'use client'

import React, { useState } from 'react';

// Tooltip 组件
const Tooltip = ({ 
  children, 
  content, 
  position = 'top' 
}: { 
  children: React.ReactNode, 
  content: string, 
  position?: 'top' | 'bottom' | 'left' | 'right' 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionStyles = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 translate-y-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 -translate-x-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 translate-x-2'
  };

  return (
    <div 
      className="relative inline-block group"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div 
          className={`
            absolute z-50 
            bg-gradient-to-br from-blue-800 to-blue-600 
            text-white text-sm 
            px-5 py-4 
            rounded-xl 
            shadow-2xl 
            border border-blue-700
            ${positionStyles[position]}
            transition-all duration-300 ease-in-out
            max-w-md
            w-96
            animate-fade-in
            before:content-[''] 
            before:absolute 
            before:border-[6px] 
            before:border-transparent
            ${
              position === 'top' 
                ? 'before:border-t-blue-800 before:top-full before:left-1/2 before:-translate-x-1/2'
                : position === 'bottom'
                ? 'before:border-b-blue-800 before:bottom-full before:left-1/2 before:-translate-x-1/2'
                : position === 'left'
                ? 'before:border-l-blue-800 before:left-full before:top-1/2 before:-translate-y-1/2'
                : 'before:border-r-blue-800 before:right-full before:top-1/2 before:-translate-y-1/2'
            }
          `}
        >
          <div className="flex items-start space-x-3">
            <svg 
              className="w-6 h-6 mt-1 text-blue-200 flex-shrink-0" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" 
                clipRule="evenodd" 
              />
            </svg>
            <span className="font-medium leading-relaxed text-base text-left flex-grow">
              {content}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default function HemangioblastomaPage() {
  const diagnosticPoints = [
    {
      title: '影像学特征',
      content: [
        'MRI检查：',
        '- T1加权像：肿瘤通常呈等或低信号',
        '- T2加权像：肿瘤呈高信号',
        '- 强化扫描：典型的"蜂窝状"或"簇状"强化模式',
        '- 周围常伴随囊肿形成'
      ]
    },
    {
      title: '解剖学定位',
      content: [
        '常见发生部位：',
        '- 脊髓',
        '- 小脑',
        '- 脑干',
        '- 脊髓锥体区'
      ]
    },
    {
      title: '典型影像学特征',
      content: [
        '- 肿瘤边界清晰',
        '- 肿瘤内可见丰富血管网络',
        '- 周围组织无明显浸润',
        '- 囊实性病变'
      ]
    },
    {
      title: '鉴别诊断',
      content: [
        '需与以下疾病鉴别：',
        '- 血管瘤',
        '- 转移性脑肿瘤',
        '- 血管周细胞瘤'
      ]
    },
    {
      title: '特殊提示',
      content: [
        '- 与von Hippel-Lindau综合征密切相关',
        '- 部分病例可能为多发性病变'
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        血管母细胞瘤诊断要点
      </h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {diagnosticPoints.map((section, index) => (
          <div 
            key={index} 
            className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-4">{section.title}</h2>
            <ul className="space-y-2 text-gray-700">
              {section.content.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start">
                  <svg 
                    className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                  <span>
                    {item.includes('von Hippel-Lindau综合征') ? (
                      <Tooltip 
                        content="Von Hippel-Lindau综合征是一种罕见的遗传性疾病，由VHL基因突变引起。患者易发生多发性良性和恶性肿瘤，包括血管母细胞瘤、肾细胞癌、嗜铬细胞瘤等。这种综合征常常导致中枢神经系统和其他器官的肿瘤发生。"
                        position="right"
                      >
                        <span className="cursor-help">{item}</span>
                      </Tooltip>
                    ) : (
                      item
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center text-gray-600 italic">
        <p>温馨提示：本页面仅供医学专业参考，不作为最终诊断依据</p>
      </div>

      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">参考文献</h3>
        <ul className="space-y-2 text-gray-700">
          <li>
            <a 
              href="https://radiopaedia.org/articles/hemangioblastoma" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline"
            >
              Radiopaedia - 血管母细胞瘤影像学特征
            </a>
          </li>
          <li>
            <a 
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5535451/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline"
            >
              NCBI - 血管母细胞瘤的诊断与治疗
            </a>
          </li>
          <li>
            <a 
              href="https://rarediseases.org/rare-diseases/von-hippel-lindau-disease/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline"
            >
              罕见疾病组织 - Von Hippel-Lindau综合征
            </a>
          </li>
          <li>
            <a 
              href="https://medlineplus.gov/genetics/condition/von-hippel-lindau-syndrome/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline"
            >
              美国国立医学图书馆 - Von Hippel-Lindau综合征
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
