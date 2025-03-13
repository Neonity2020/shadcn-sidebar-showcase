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
      definition: `扩散加权成像(Diffusion Weighted Imaging)，是一种基于水分子布朗运动原理的MRI成像技术。其基本原理如下：

  1. 物理基础：利用水分子随机热运动（布朗运动）的特性
  2. 成像原理：
      - 通过施加特定的扩散敏感梯度场
      - 当水分子自由扩散时，信号衰减明显
      - 当水分子扩散受限时，信号衰减减少
  3. 临床应用：
      - 急性脑梗死早期诊断（细胞毒性水肿导致水分子扩散受限）
      - 脑肿瘤鉴别诊断
      - 脑脓肿与肿瘤的鉴别
      - 多发性硬化等脱髓鞘疾病的评估
  4. 图像特点：
      - 扩散受限区域呈高信号
      - 常与ADC图结合使用进行诊断`,
      category: '扫描序列',
      relatedReadings: [
        {
          title: 'DWI成像原理详解',
          url: 'content/articles/principles-of-DWI'
        },
        {
          title: 'DWI在急性脑梗死中的应用',
          url: 'content/articles/dwi-stroke'
        },
        {
          title: '扩散加权成像的临床应用',
          url: 'content/articles/dwi-applications'
        }
      ]
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
      definition: `磁敏感加权成像(Susceptibility Weighted Imaging)，是一种基于磁敏感效应的MRI成像技术。其基本原理如下：

1. 磁敏感效应：
   - 磁性物质在磁场中会产生磁化
   - 磁化强度与磁性物质的浓度和磁性物质的磁化率有关
2. 成像原理：
   - 通过施加特定的磁敏感梯度场
   - 当磁性物质存在时，磁化强度会发生变化
   - 通过测量磁化强度的变化，可以生成磁敏感加权图像
3. 临床应用：
   - 检测磁敏感性差异
   - 诊断和评估血管病变
   - 鉴别血管源性和非血管源性病变
   - 评估血管畸形和血管炎
   - 指导介入治疗
   - 监测治疗效果
   - 评估肿瘤的血管生成特征
   `,
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
    {
      term: 'HGBL (Hemangioblastoma), 血管母细胞瘤',
      definition: `血管母细胞瘤是一种罕见的中枢神经系统血管性肿瘤，常见于小脑、脊髓和脑干。MRI上具有以下特征：

        1. T1WI：
           - 肿瘤本身呈等或稍低信号
           - 周围血管丰富区域可呈高信号
        
        2. T2WI：
           - 肿瘤实质呈高信号
           - 常见囊实性成分
           - 周围血管网络清晰可见
        
        3. 增强扫描：
           - 肿瘤实质和血管网络明显强化
           - 边界清晰
        
        4. 典型特征：
           - 常伴有囊肿和实性成分
           - 周围可见扩张的血管网络
           - 多发于小脑和脊髓
           - 与von Hippel-Lindau综合征相关`,
      category: '脑肿瘤',
      relatedReadings: [
        {
          title: '血管母细胞瘤MRI诊断特点',
          url: '/mri-diagnosis/neuroimaging/brain-tumors/hemangioblastoma/'
        },
        {
          title: 'von Hippel-Lindau综合征',
          url: 'https://ghr.nlm.nih.gov/condition/von-hippel-lindau-syndrome'
        }
      ]
    },
    {
      term: 'VHL (Von Hippel-Lindau Syndrome)',
      definition: `Von Hippel-Lindau综合征是一种遗传性疾病，主要影响中枢神经系统。该综合征的特点包括：

        1. 多发血管母细胞瘤
        2. 脑膜瘤
        3. 视网膜血管瘤
        4. 胰腺囊肿和囊腺瘤
        5. 肾脏囊肿和肾癌`,
      category: '脑肿瘤',
      relatedReadings: [
        {
          title: 'Von Hippel-Lindau综合征',
          url: 'https://ghr.nlm.nih.gov/condition/von-hippel-lindau-syndrome'
        },
        {
          title: 'Von Hippel-Lindau综合征',
          url: '/content/articles/von-hippel-lindau-syndrome/'
        }
      ]
    },
    {
      term: 'GRAPPA (GeneRalized Autocalibrating Partially Parallel Acquisition)',
      definition: `**广义自校准部分并行采集技术**，是一种常用的MRI并行成像技术，由西门子公司开发。其主要特点包括：

### 基本原理
- 利用多通道线圈接收信号
- 在k空间中进行数据重建
- 通过自校准信号线(ACS线)获取线圈灵敏度信息
        
### 技术特点
- 在k空间中进行数据重建，而非图像空间
- 使用滑动块算法计算缺失的k空间数据
- 不需要单独采集线圈灵敏度图
        
### 临床优势
- 显著缩短扫描时间
- 减少运动伪影
- 提高时间分辨率
- 适用于多种序列，如EPI、TSE等
        
### 与SENSE的区别
1. GRAPPA在**k空间**进行重建，SENSE在**图像空间**进行重建
2. GRAPPA对折叠伪影的敏感性较低
3. GRAPPA在低信噪比情况下表现更好

> 注：GRAPPA技术是目前临床上最常用的并行成像技术之一`,
      category: '并行成像技术',
      relatedReadings: [
        {
          title: 'GRAPPA并行成像技术原理',
          url: 'content/articles/grappa-principles'
        },
        {
          title: 'MRI并行成像技术比较',
          url: 'content/articles/parallel-imaging-comparison'
        }
      ]
    },
    {
      term: 'SENSE (SENSitivity Encoding)',
      definition: `**灵敏度编码**，是一种由飞利浦公司开发的MRI并行成像技术。其主要特点包括：

### 基本原理
- 利用多通道线圈的空间灵敏度差异
- 在图像空间中进行数据重建
- 通过解折叠算法恢复完整图像
        
### 技术特点
- 需要预先获取线圈灵敏度图
- 在图像空间进行重建计算
- 通过求解线性方程组消除图像折叠
        
### 临床优势
1. 减少扫描时间
2. 提高空间分辨率
3. 减少磁敏感伪影
4. 降低SAR值（特定吸收率）
        
### 限制因素
* 对线圈灵敏度图准确性要求高
* 在低信噪比情况下可能引入噪声
* 加速因子增加会导致几何因子(g-factor)增加，降低图像质量

---

SENSE技术的加速因子计算公式：
\`R = FOV/rFOV\`
其中：
- R: 加速因子
- FOV: 完整视野
- rFOV: 减小的视野`,
      category: '并行成像技术',
      relatedReadings: [
        {
          title: 'SENSE并行成像技术原理',
          url: 'content/articles/sense-principles'
        },
        {
          title: '并行成像技术在临床中的应用',
          url: 'content/articles/parallel-imaging-applications'
        }
      ]
    },
    {
      term: 'NODDI (Neurite Orientation Dispersion and Density Imaging)',
      definition: `**神经突方向离散度和密度成像**，是一种先进的扩散MRI技术，用于评估脑组织微结构。其主要特点包括：

### 基本原理
- 基于多壳层扩散加权成像数据
- 采用生物物理模型分析水分子扩散特性
- 将组织分为三个主要成分：细胞内、细胞外和脑脊液

### 技术参数
- 需要多个b值的扩散加权图像（通常至少两个非零b值）
- 典型采集方案：b=0, 700-1000, 2000-2500 s/mm²
- 多方向扩散梯度（推荐≥60个方向）

### 主要指标
1. **NDI (Neurite Density Index)**: 神经突密度指数
   - 反映轴突和树突的体积分数
   - 值域：0-1，值越高表示神经突密度越大

2. **ODI (Orientation Dispersion Index)**: 方向离散度指数
   - 反映神经突方向的分散程度
   - 值域：0-1，值越高表示方向分散度越大
   - 0表示高度平行，1表示完全随机分布

3. **ISO (Isotropic Volume Fraction)**: 各向同性体积分数
   - 反映自由水（如脑脊液）的比例
   - 值域：0-1，值越高表示自由水成分越多

### 临床应用
- 神经发育和老化研究
- 神经退行性疾病（如阿尔茨海默病、帕金森病）评估
- 多发性硬化等脱髓鞘疾病的监测
- 脑外伤后微结构变化的评估
- 精神疾病（如精神分裂症、抑郁症）的研究

### 优势与局限性
**优势**：
- 提供比传统DTI更详细的组织微结构信息
- 能区分神经突密度和方向离散度的变化
- 对交叉纤维区域有更好的表现

**局限性**：
- 采集时间较长
- 数据处理复杂
- 模型假设可能在某些病理状态下不完全适用`,
      category: '扩散成像技术',
      relatedReadings: [
        {
          title: 'NODDI成像技术原理',
          url: '/content/articles/noddi-principles'
        },
        {
          title: 'NODDI在神经系统疾病中的应用',
          url: '/content/articles/noddi-applications'
        },
        {
          title: '扩散MRI高级技术比较',
          url: '/content/articles/advanced-diffusion-mri'
        }
      ]
    },
    {
      term: 'DSI (Diffusion Spectrum Imaging)',
      definition: `**扩散谱成像**，是一种高级扩散MRI技术，能够详细描绘复杂的神经纤维结构。其主要特点包括：

### 基本原理
- 基于q空间成像理论
- 通过采集多个方向、多个b值的扩散加权图像
- 重建水分子扩散的概率密度函数（PDF）
- 能够解析复杂的纤维交叉区域

### 技术参数
- 需要大量扩散方向（通常>200个方向）
- 多个b值（通常5-10个不同b值）
- 典型最大b值：8000-10000 s/mm²
- 采集时间较长（约20-30分钟）

### 主要特点
1. **高角度分辨率**：
   - 能够分辨交叉角度小至30-45°的纤维束
   - 可识别复杂的纤维构型（交叉、分叉、扇形排列等）

2. **模型无关性**：
   - 不依赖于特定的数学模型假设
   - 直接测量扩散位移概率分布

3. **定量指标**：
   - 生成扩散方向分布函数（ODF）
   - 提供纤维方向、数量和体积分数等信息

### 临床应用
- 精确的白质纤维束追踪
- 复杂脑区（如脑干、基底节区）的神经通路研究
- 神经外科手术规划
- 神经发育和退行性疾病研究
- 脑网络连接组学研究

### 优势与局限性
**优势**：
- 提供最高的角度分辨率
- 能够解析复杂的纤维交叉区域
- 不依赖于特定模型假设

**局限性**：
- 采集时间极长
- 对运动伪影敏感
- 需要高性能梯度系统
- 数据处理和存储要求高
- 临床实用性受限`,
      category: '扩散成像技术',
      relatives: ['DTI', 'HARDI', 'DKI', 'NODDI'],
      relatedReadings: [
        {
          title: '扩散谱成像原理',
          url: '/content/articles/dsi-principles'
        },
        {
          title: '高级扩散成像技术比较',
          url: '/content/articles/advanced-diffusion-techniques'
        },
        {
          title: '扩散谱成像在神经外科中的应用',
          url: '/content/articles/dsi-neurosurgery'
        }
      ]
    },
    {
      term: 'DKI (Diffusion Kurtosis Imaging)',
      definition: `**扩散峰度成像**，是一种扩展的扩散MRI技术，通过测量水分子扩散分布的非高斯特性来提供组织微结构的信息。其主要特点包括：

### 基本原理
- 扩展了传统DTI的数学模型
- 量化水分子扩散分布偏离高斯分布的程度（峰度）
- 峰度反映了组织微环境的复杂性和非均质性

### 技术参数
- 需要至少3个b值（通常包括b=0, 1000, 2000 s/mm²）
- 多方向扩散梯度（通常≥30个方向）
- 采集时间适中（约8-15分钟）

### 主要指标
1. **平均峰度（Mean Kurtosis, MK）**：
   - 反映整体组织复杂性
   - 对微结构变化敏感
   - 值域通常为0-3，值越高表示组织越复杂

2. **轴向峰度（Axial Kurtosis, AK）**：
   - 平行于主扩散方向的峰度
   - 反映轴突内部结构复杂性

3. **径向峰度（Radial Kurtosis, RK）**：
   - 垂直于主扩散方向的峰度
   - 与髓鞘完整性相关

4. **各向异性峰度（Kurtosis Anisotropy, KA）**：
   - 反映峰度的方向依赖性

### 临床应用
- 脑卒中早期评估
- 肿瘤分级和鉴别诊断
- 神经退行性疾病（如阿尔茨海默病、帕金森病）评估
- 精神疾病研究
- 创伤性脑损伤评估
- 脱髓鞘疾病监测

### 优势与局限性
**优势**：
- 比传统DTI提供更多微结构信息
- 对灰质和白质均有良好表现
- 对早期病理变化更敏感
- 采集时间和处理要求适中

**局限性**：
- 信噪比要求较高
- 对运动伪影敏感
- 数学模型复杂度增加
- 临床解释尚未完全标准化`,
      category: '扩散成像技术',
      relatives: ['DTI', 'HARDI', 'DSI', 'NODDI'],
      relatedReadings: [
        {
          title: '扩散峰度成像原理',
          url: '/content/articles/dki-principles'
        },
        {
          title: 'DKI在脑肿瘤评估中的应用',
          url: '/content/articles/dki-brain-tumors'
        },
        {
          title: '扩散峰度成像临床应用指南',
          url: '/content/articles/dki-clinical-guide'
        }
      ]
    }
  ]