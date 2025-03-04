export interface Book {
  id: number;
  title: string;
  cover: string;
  description: string;
  status: 'completed' | 'reading' | 'paused';
  progress: number;
  directories?: string[];
  downloadUrl: string;
  readingMode?: {
    currentPage: number;
    totalPages: number;
    bookmarks?: {
      page: number;
      note?: string;
      timestamp: string;
    }[];
    lastRead?: string;
    highlights?: {
      page: number;
      content: string;
      color: string;
      timestamp: string;
    }[];
  };
  pageContent?: {
    [pageNumber: number]: {
      text: string;
      keywords?: string[];
      imageDescriptions?: string[];
    };
  };
}

export const books: Book[] = [
  { 
    id: 1, 
    title: "Brain Imaging", 
    cover: "/covers/1.jpg",
    status: "reading", 
    description: "奥斯本脑影像 - 神经系统影像诊断的权威指南", 
    progress: 75,
    directories: [
      "第1章 正常解剖与生理",
      "第2章 先天性畸形",
      "第3章 外伤",
      "第4章 血管性疾病",
      "第5章 感染性疾病",
      "第6章 脱髓鞘疾病",
      "第7章 肿瘤",
      "第8章 代谢性疾病"
    ],
    downloadUrl: "https://pan.baidu.com/s/1NBOqkDZaVhCZZJB11G3wjw?pwd=hsmc",
    readingMode: {
      currentPage: 156,
      totalPages: 208,
      bookmarks: [
        {
          page: 45,
          note: "重要：脑干解剖结构标志",
          timestamp: "2024-03-15T08:30:00Z"
        },
        {
          page: 122,
          note: "血管性疾病的MRI表现特点",
          timestamp: "2024-03-18T15:20:00Z"
        }
      ],
      lastRead: "2024-03-20T10:15:00Z",
      highlights: [
        {
          page: 67,
          content: "弥散加权成像(DWI)在急性脑梗死诊断中的应用",
          color: "#FFE08C",
          timestamp: "2024-03-16T09:45:00Z"
        },
        {
          page: 89,
          content: "多发性硬化的影像学特征及鉴别诊断要点",
          color: "#90CDF4",
          timestamp: "2024-03-17T14:30:00Z"
        }
      ]
    },
    pageContent: {
      1: {
        text: "脑影像学是现代医学诊断的重要工具，通过多种成像技术帮助医生准确定位和评估神经系统疾病。",
        keywords: ["脑影像学", "诊断", "成像技术"]
      },
      45: {
        text: "脑干是神经系统中最关键的区域之一，负责调节呼吸、心跳、血压等基本生命体征。其解剖结构复杂，包括延髓、脑桥和中脑。",
        keywords: ["脑干", "解剖", "生命体征"],
        imageDescriptions: ["脑干横断面解剖图", "脑干主要核团位置示意"]
      },
      67: {
        text: "弥散加权成像(DWI)是磁共振成像中最敏感的急性脑梗死检测序列。通过测量水分子布朗运动，可以在梗死早期快速识别病变区域。",
        keywords: ["DWI", "脑梗死", "磁共振成像"],
        imageDescriptions: ["DWI序列下急性脑梗死病灶"]
      },
      156: {
        text: "血管性疾病是脑部常见的致病原因。MRI可以清晰显示血管畸形、动脉瘤、缺血和出血等多种血管相关病变。本节将详细讨论脑血管疾病的MRI诊断特征和鉴别要点。",
        keywords: ["血管性疾病", "MRI", "血管畸形", "动脉瘤", "缺血", "出血"],
        imageDescriptions: [
          "脑血管MRA重建图，显示主要颅内血管解剖结构", 
          "典型动脉瘤的3D成像，展示不同类型和大小", 
          "缺血性脑卒中的T2加权像和扩散加权像对比", 
          "脑出血的梯度回波像，显示血液分布和周围组织变化"
        ]
      }
    }
  },
  { 
    id: 2, 
    title: "神经影像学", 
    cover: "/covers/2.jpg",
    status: "completed", 
    description: "神经影像学基础与临床实践指南", 
    progress: 100,
    directories: [
      "基础篇",
      "├─ 第1章 神经系统解剖基础",
      "├─ 第2章 神经影像检查方法",
      "├─ 第3章 正常影像解剖",
      "临床篇",
      "├─ 第4章 颅脑创伤",
      "├─ 第5章 脑血管疾病",
      "├─ 第6章 颅内肿瘤",
      "├─ 第7章 脊髓疾病"
    ],
    downloadUrl: "https://example.com/download/2",
    readingMode: {
      currentPage: 320,
      totalPages: 320,
      bookmarks: [
        {
          page: 156,
          note: "脊髓肿瘤的分类与特征",
          timestamp: "2024-02-20T11:20:00Z"
        }
      ],
      lastRead: "2024-03-01T16:45:00Z",
      highlights: [
        {
          page: 245,
          content: "颅内动脉瘤的影像学分型",
          color: "#FEB2B2",
          timestamp: "2024-02-25T13:15:00Z"
        }
      ]
    },
    pageContent: {
      1: {
        text: "神经影像学是现代神经科学和临床诊断的重要分支，通过多种先进成像技术全面展现神经系统的结构和功能。",
        keywords: ["神经影像学", "成像技术", "诊断"]
      },
      156: {
        text: "脊髓肿瘤是神经系统中较为罕见但极其重要的疾病类型。根据肿瘤的起源和位置，可分为髓内和髓外两大类。",
        keywords: ["脊髓肿瘤", "髓内肿瘤", "髓外肿瘤"],
        imageDescriptions: ["脊髓肿瘤MRI横断面图", "不同类型脊髓肿瘤分布示意"]
      },
      245: {
        text: "颅内动脉瘤是血管壁局部扩张的病理性改变，根据形态可分为囊状、梭状和复杂型动脉瘤。MRI对动脉瘤的精确定位和评估至关重要。",
        keywords: ["动脉瘤", "颅内血管", "MRI诊断"],
        imageDescriptions: ["动脉瘤3D重建图", "不同类型动脉瘤形态"]
      }
    }
  },
  { 
    id: 3, 
    title: "Diagnostic Imaging Brain", 
    cover: "/covers/3.jpg",
    status: "paused", 
    description: "脑部影像诊断指南 - 系统性介绍脑部疾病的影像学特征", 
    progress: 20,
    directories: [
      "Section 1: Anatomy and Physiology",
      "Section 2: Pathology",
      "Section 3: Patterns",
      "├─ Pattern 1: Mass",
      "├─ Pattern 2: Hemorrhage",
      "├─ Pattern 3: Non-hemorrhagic Vascular",
      "├─ Pattern 4: CSF Flow Disturbance",
      "└─ Pattern 5: Metabolic"
    ],
    downloadUrl: "https://example.com/download/3",
    readingMode: {
      currentPage: 89,
      totalPages: 450,
      bookmarks: [
        {
          page: 45,
          note: "Review: CSF flow patterns",
          timestamp: "2024-03-10T09:20:00Z"
        }
      ],
      lastRead: "2024-03-12T14:30:00Z",
      highlights: [
        {
          page: 78,
          content: "Differential diagnosis of ring-enhancing lesions",
          color: "#9AE6B4",
          timestamp: "2024-03-11T16:40:00Z"
        }
      ]
    },
    pageContent: {
      1: {
        text: "脑部影像诊断是现代医学中最复杂和最重要的诊断领域之一，涉及多种成像技术和复杂的病理模式识别。",
        keywords: ["脑部影像", "诊断", "成像技术"]
      },
      45: {
        text: "脑脊液（CSF）流动模式对于诊断多种神经系统疾病至关重要。异常的CSF流动可能是多种神经系统疾病的关键指标。",
        keywords: ["脑脊液", "CSF流动", "神经系统疾病"],
        imageDescriptions: ["正常CSF流动示意图", "CSF流动异常MRI图"]
      },
      78: {
        text: "环形强化病变是放射学中常见的复杂病理表现，需要通过多种影像学特征进行鉴别诊断，包括肿瘤、脓肿和血管病变等。",
        keywords: ["环形强化", "肿瘤", "脓肿", "鉴别诊断"],
        imageDescriptions: ["不同类型环形强化病变对比图", "环形强化病变MRI特征"]
      }
    }
  },
  { 
    id: 4,
    title: "MRI at a Glance",
    cover: "/covers/4.jpg",
    status: "reading",
    description: "MRI知识速览 - 简明扼要的MRI基础知识指南",
    progress: 60,
    directories: [
      "Part 1: MRI Basics",
      "├─ 1. Physics of MRI",
      "├─ 2. Safety in MRI",
      "├─ 3. Contrast in MRI",
      "Part 2: Clinical Applications",
      "├─ 4. Brain MRI",
      "├─ 5. Spine MRI",
      "├─ 6. Body MRI",
      "└─ 7. Advanced Applications"
    ],
    downloadUrl: "https://pan.baidu.com/s/1FJSHNPSPk3O8brzq_LmzFA?pwd=n8rb",
    readingMode: {
      currentPage: 120,
      totalPages: 200,
      bookmarks: [
        {
          page: 35,
          note: "MRI安全等级分类",
          timestamp: "2024-03-19T13:40:00Z"
        },
        {
          page: 98,
          note: "扫描序列的选择原则",
          timestamp: "2024-03-20T09:15:00Z"
        }
      ],
      lastRead: "2024-03-20T16:30:00Z",
      highlights: [
        {
          page: 42,
          content: "磁共振成像的基本物理原理",
          color: "#B794F4",
          timestamp: "2024-03-19T14:20:00Z"
        }
      ]
    }
  },
  { 
    id: 5,
    title: "Duke Review",
    cover: "/covers/5.jpg",
    status: "reading",
    description: "杜克影像诊断精要 - 临床案例分析与解读",
    progress: 15,
    directories: [
      "Chapter 1: Case Review Methodology",
      "Chapter 2: Brain Cases",
      "├─ Case 1: Stroke",
      "├─ Case 2: Brain Tumor",
      "├─ Case 3: Multiple Sclerosis",
      "Chapter 3: Spine Cases",
      "├─ Case 4: Disc Herniation",
      "├─ Case 5: Spinal Cord Tumor",
      "Chapter 4: Advanced Imaging"
    ],
    downloadUrl: "https://pan.baidu.com/s/1MK5A3qfjiyc2GE_bi5HRkQ?pwd=7n4m",
    readingMode: {
      currentPage: 45,
      totalPages: 300,
      bookmarks: [
        {
          page: 28,
          note: "脑卒中案例分析方法",
          timestamp: "2024-03-18T10:25:00Z"
        }
      ],
      lastRead: "2024-03-19T11:45:00Z",
      highlights: [
        {
          page: 32,
          content: "急性脑梗死的早期CT和MRI表现",
          color: "#FBD38D",
          timestamp: "2024-03-18T11:30:00Z"
        }
      ]
    }
  },
  { 
    id: 6,
    title: "MRI from Picture to Proton",
    cover: "/covers/6.jpg",
    status: "completed",
    description: "从图片到质子 - 通俗易懂学习磁共振成像原理",
    progress: 100,
    directories: [
      "1. Basic Principles",
      "├─ 1.1 Nuclear Spin",
      "├─ 1.2 Resonance",
      "├─ 1.3 Relaxation",
      "2. Pulse Sequences",
      "├─ 2.1 Spin Echo",
      "├─ 2.2 Gradient Echo",
      "3. Image Formation",
      "├─ 3.1 K-space",
      "├─ 3.2 Image Contrast",
      "4. Advanced Techniques"
    ],
    downloadUrl: "https://pan.baidu.com/s/1GEIiaPN0o4t8Jh8-e7iY2A?pwd=8bcy",
    readingMode: {
      currentPage: 280,
      totalPages: 280,
      bookmarks: [
        {
          page: 65,
          note: "T1/T2弛豫时间的物理本质",
          timestamp: "2024-02-15T14:20:00Z"
        },
        {
          page: 158,
          note: "K空间采样原理",
          timestamp: "2024-02-20T16:35:00Z"
        }
      ],
      lastRead: "2024-03-01T09:30:00Z",
      highlights: [
        {
          page: 112,
          content: "梯度回波序列的优势与局限性",
          color: "#90CDF4",
          timestamp: "2024-02-18T11:25:00Z"
        }
      ]
    }
  },
  { 
    id: 7,
    title: "腹部盆腔MRI（第4版）",
    cover: "/covers/7.jpg",
    status: "reading",
    description: "腹部盆腔MRI诊断指南（第4版）- 系统全面的腹盆腔影像学参考",
    progress: 45,
    directories: [
      "第一部分 基础知识",
      "├─ 第1章 扫描技术",
      "├─ 第2章 正常解剖",
      "第二部分 腹部",
      "├─ 第3章 肝脏",
      "├─ 第4章 胆胰系统",
      "├─ 第5章 脾脏",
      "第三部分 盆腔",
      "├─ 第6章 泌尿系统",
      "├─ 第7章 生殖系统",
      "└─ 第8章 直肠肛管"
    ],
    downloadUrl: "https://example.com/download/7",
    readingMode: {
      currentPage: 180,
      totalPages: 400,
      bookmarks: [
        {
          page: 95,
          note: "肝脏分段解剖",
          timestamp: "2024-03-15T15:40:00Z"
        },
        {
          page: 142,
          note: "胰腺炎的MRI表现",
          timestamp: "2024-03-17T10:20:00Z"
        }
      ],
      lastRead: "2024-03-20T14:15:00Z",
      highlights: [
        {
          page: 156,
          content: "肝细胞癌的增强扫描特点",
          color: "#F687B3",
          timestamp: "2024-03-16T16:30:00Z"
        }
      ]
    }
  },
  { 
    id: 8,
    title: "HUMAN SECTIONAL ANATOMY (4th Edition)",
    cover: "/covers/8.jpg",
    status: "paused",
    description: "人体断层解剖学（第4版）- 影像解剖学必备参考",
    progress: 10,
    directories: [
      "Head and Neck",
      "├─ Brain",
      "├─ Skull Base",
      "├─ Face and Neck",
      "Thorax",
      "├─ Chest Wall",
      "├─ Heart",
      "├─ Lungs",
      "Abdomen and Pelvis",
      "├─ Upper Abdomen",
      "├─ Lower Abdomen",
      "└─ Pelvis"
    ],
    downloadUrl: "https://pan.baidu.com/s/1sFvLwGMMSaCwwFhVMOvDxA?pwd=td44",
    readingMode: {
      currentPage: 48,
      totalPages: 480,
      bookmarks: [
        {
          page: 25,
          note: "颅底重要解剖标志",
          timestamp: "2024-03-05T09:15:00Z"
        }
      ],
      lastRead: "2024-03-08T11:30:00Z",
      highlights: [
        {
          page: 42,
          content: "颈部血管神经鞘的层次关系",
          color: "#9AE6B4",
          timestamp: "2024-03-06T14:20:00Z"
        }
      ]
    }
  },
  { 
    id: 9,
    title: "HANDBOOK OF MRI Pulse Sequences",
    cover: "/covers/9.jpg",
    status: "reading",
    description: "MRI脉冲序列手册 - 全面详实的MRI脉冲序列技术指南",
    progress: 80,
    directories: [
      "Part I: Basic Principles",
      "├─ Chapter 1: RF Excitation",
      "├─ Chapter 2: Gradients",
      "├─ Chapter 3: Signal Detection",
      "Part II: Basic Sequences",
      "├─ Chapter 4: Spin Echo",
      "├─ Chapter 5: Gradient Echo",
      "├─ Chapter 6: Inversion Recovery",
      "Part III: Advanced Techniques",
      "├─ Chapter 7: Fast Imaging",
      "├─ Chapter 8: Flow Effects",
      "└─ Chapter 9: Diffusion and Perfusion"
    ],
    downloadUrl: "https://pan.baidu.com/s/1y6lF2Po6_X56QdONrlUAuQ?pwd=suhy",
    readingMode: {
      currentPage: 520,
      totalPages: 650,
      bookmarks: [
        {
          page: 234,
          note: "EPI序列的原理与应用",
          timestamp: "2024-03-12T13:45:00Z"
        },
        {
          page: 456,
          note: "扩散张量成像技术要点",
          timestamp: "2024-03-15T16:20:00Z"
        }
      ],
      lastRead: "2024-03-20T15:45:00Z",
      highlights: [
        {
          page: 345,
          content: "快速自旋回波序列的回波链优化",
          color: "#B794F4",
          timestamp: "2024-03-14T10:30:00Z"
        },
        {
          page: 478,
          content: "ASL灌注成像的技术原理",
          color: "#FEB2B2",
          timestamp: "2024-03-16T11:25:00Z"
        }
      ]
    }
  }
];
