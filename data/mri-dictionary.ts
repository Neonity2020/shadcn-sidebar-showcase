export interface DictionaryEntry {
  term: string
  definition: string
  category: string
  relatives?: string[]
  relatedReadings?: {
    title: string
    url: string
  }[]
  image?: string
}

export const dictionaryData: DictionaryEntry[] = [
  {
    term: 'T1加权像',
    definition: '一种基本的MRI扫描序列，主要用于显示解剖结构。脂肪在T1加权像中呈现高信号（亮），而水呈现低信号（暗）。',
    category: '扫描序列',
    image: '/project-images/T1WI.jpeg',
    relatedReadings: [
      {
        title: 'T1加权成像的基本原理',
        url: '/articles/t1-weighted-imaging'
      }
    ]
  },
    {
      term: 'T2加权像',
      definition: '另一种基本的MRI扫描序列，主要用于显示病理改变。水在T2加权像中呈现高信号（亮），而脂肪呈现中等信号。',
      category: '扫描序列',
      image: '/project-images/T2WI.jpeg',
      relatedReadings: [
        {
          title: 'T2加权成像的基本原理',
          url: '/articles/t2-weighted-imaging'
        }
      ]
    },
    {
      term: 'FLAIR',
      definition: 'Fluid Attenuated Inversion Recovery（液体衰减翻转回波）的缩写。这是一种特殊的MRI序列，通过抑制脑脊液的信号来提高病变的显示。在该序列中，正常脑脊液呈现暗信号，而病变组织则保持较高信号，特别适合显示靠近脑脊液的病变。',
      category: '扫描序列'
    },
    {
      term: 'DWI',
      definition: '扩散加权成像，用于检测水分子扩散运动的受限程度。',
      category: '扫描序列'
    },
    {
      term: 'FSBB (Flow Sensitive Black Blood)',
      definition: `血流敏感黑血成像技术，是佳能（原东芝医疗）公司开发的一种特殊MRI序列。该技术通过在T2*加权序列中施加运动探测梯度（Motion Probing Gradients，MPGs），能够同时利用T2*磁敏感效应和体素内不相干运动（IVIM）失相位效应生成图像对比。
      
      其主要特点是：

        1. 可以显著提升血管对比度，同时避免了明显的T2*衰减
        2. 特别适合显示低速血流的血管结构
        3. 相比传统TOF技术，对流速缓慢或湍流血流的成像效果更好
        4. 临床应用广泛，包括创伤性脑损伤、中风、出血、神经退行性疾病、血管畸形等多种疾病的诊断`,
      category: '血管成像序列',
      relatedReadings: [
        {
          title: '血流敏感黑血成像技术',
          url: 'https://pheonix-blog.netlify.app/fsbb'
        },
        {
          title: 'FSBB序列',
          url: '/mri-dictionary/fsbb/'
        }
      ]
    },
    {
      term: 'SWI',
      definition: '磁敏感加权成像，用于检测磁敏感性差异。',
      category: '扫描序列',
      relatedReadings: [
        {
          title: 'SWI序列',
          url: '/mri-dictionary/swi/'
        }
      ]
    },

    {
      term: 'PXA (多形性黄色星形细胞瘤)',
      definition: `多形性黄色星形细胞瘤是一种罕见的星形细胞肿瘤，在MRI上具有以下特征：

        1. T1WI：多呈等或稍低信号
        2. T2WI：呈高信号，可见囊变区域
        3. 增强扫描：实性部分明显强化
        4. 特点：
           - 多位于大脑表浅部位
           - 常见于颞叶和顶叶
           - 边界清晰
           - 可有囊变和钙化
           - 常伴有软脑膜受累`,
      category: '脑肿瘤',
      relatedReadings: [
        {
          title: '多形性黄色星形细胞瘤MRI诊断要点',
          url: '/mri-dictionary/pxa/'
        },
        {
          title: '多形性黄色星形细胞瘤',
          url: 'https://www.mriwiki.cn/#%E5%A4%9A%E5%BD%A2%E6%80%A7%E9%BB%84%E8%89%B2%E6%98%9F%E5%BD%A2%E7%BB%86%E8%83%9E%E7%98%A4:%E5%A4%9A%E5%BD%A2%E6%80%A7%E9%BB%84%E8%89%B2%E6%98%9F%E5%BD%A2%E7%BB%86%E8%83%9E%E7%98%A4%20%E2%80%9C%E5%9B%8A%E8%8A%82%E5%A5%97%E2%80%9D%20cortical%20The-Basics-of-MRI%20Home'
        }
      ]
    },
    // 可以添加更多词条
  ]