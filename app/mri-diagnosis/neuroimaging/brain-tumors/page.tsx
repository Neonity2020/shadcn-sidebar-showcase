import React from 'react';
import Link from 'next/link';
import { Brain, Dna, ShieldPlus } from 'lucide-react';

const brainTumorTypes = [
  {
    name: '星形细胞瘤家族',
    types: [
      { 
        name: '多形性黄色星形细胞瘤 (PXA)', 
        link: '/mri-dictionary/pxa',
        description: '罕见的星形细胞肿瘤，多见于儿童和年轻成人，常位于颞叶和顶叶'
      },
      { 
        name: '弥漫性胶质瘤', 
        link: '/mri-diagnosis/neuroimaging/brain-tumors/diffuse-glioma',
        description: '浸润性生长的胶质细胞肿瘤，包括星形细胞瘤、少突胶质细胞瘤等'
      }
    ]
  },
  {
    name: '血管性肿瘤',
    types: [
      { 
        name: '血管母细胞瘤', 
        link: '/mri-diagnosis/neuroimaging/brain-tumors/hemangioblastoma',
        description: '罕见的血管性肿瘤，常见于小脑、脊髓和脑干'
      },
      { 
        name: '海绵状血管瘤', 
        link: '/mri-diagnosis/neuroimaging/brain-tumors/cavernoma',
        description: '由异常血管团簇组成的血管畸形，常见于大脑皮质和脑干'
      }
    ]
  },
  {
    name: '神经系统肿瘤',
    types: [
      { 
        name: '神经节细胞瘤', 
        link: '/mri-diagnosis/neuroimaging/brain-tumors/gangliocytoma',
        description: '由成熟神经节细胞组成的罕见肿瘤，多发生在颞叶'
      },
      { 
        name: '脊髓肿瘤', 
        link: '/mri-diagnosis/neuroimaging/brain-tumors/spinal-tumor',
        description: '发生在脊髓内或周围的肿瘤，可分为髓内和髓外两类'
      }
    ]
  }
];

export default function BrainTumorKnowledgeMap() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">脑肿瘤疾病谱知识地图</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        {brainTumorTypes.map((category, index) => (
          <div 
            key={index} 
            className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              {index === 0 && <Brain className="w-8 h-8 text-blue-500 mr-3" />}
              {index === 1 && <Dna className="w-8 h-8 text-green-500 mr-3" />}
              {index === 2 && <ShieldPlus className="w-8 h-8 text-purple-500 mr-3" />}
              <h2 className="text-2xl font-semibold text-gray-800">{category.name}</h2>
            </div>
            
            <div className="space-y-4">
              {category.types.map((tumor, tumorIndex) => (
                <Link 
                  key={tumorIndex} 
                  href={tumor.link} 
                  className="block hover:bg-gray-50 p-3 rounded-lg transition-colors"
                >
                  <h3 className="text-lg font-medium text-blue-700 mb-1">{tumor.name}</h3>
                  <p className="text-sm text-gray-600">{tumor.description}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-gray-600">
        <p className="italic">
          温馨提示：本知识地图仅供医学专业参考，不作为最终诊断依据。
          每种肿瘤的诊断都需要专业医生进行综合评估。
        </p>
      </div>

      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">相关参考资料</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <a 
              href="/books/neuroimaging" 
              className="text-blue-600 hover:underline"
            >
              《神经影像学》 - 权威医学影像学参考书
            </a>
          </li>
          <li>
            <a 
              href="https://www.mriwiki.cn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline"
            >
              MRI Wiki - MRI太微笔记
            </a>
          </li>
          <li>
            <a 
              href="https://radiopaedia.org/articles/brain-tumours" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline"
            >
              Radiopaedia - 脑肿瘤影像学资料库
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
