export interface Book {
  id: number;
  title: string;
  cover: string;
  description: string;
  status: 'completed' | 'reading' | 'paused';
  progress: number;
  directories?: string[];
  downloadUrl: string;
}

export const books: Book[] = [
  { 
    id: 1, 
    title: "Brain Imaging", 
    cover: "/covers/1.jpg",
    status: "reading", 
    description: "奥斯本脑影像", 
    progress: 75,
    directories: ["解剖", "影像", "病理"],
    downloadUrl: "https://pan.baidu.com/s/1pVmRGWXyES7A589J8z_COg?pwd=45yj"
  },
  { 
    id: 2, 
    title: "神经影像学", 
    cover: "/covers/2.jpg",
    status: "completed", 
    description: "神经影像学", 
    progress: 100,
    directories: ["解剖", "影像", "病理"],
    downloadUrl: "https://example.com/download/2"
  },
  { 
    id: 3, 
    title: "Diagnostic Imaging Brain", 
    cover: "/covers/3.jpg",
    status: "paused", 
    description: "Diagnostic Imaging Brain", 
    progress: 20,
    directories: ["解剖", "影像", "病理"],
    downloadUrl: "https://example.com/download/3"
  },
  { 
    id: 4,
    title: "MRI脑部扫描",
    cover: "/covers/4.jpg",
    status: "reading",
    description: "阿尔茨海默症早期诊断研究",
    progress: 60,
    directories: ["影像", "报告", "数据分析"],
    downloadUrl: "https://pan.baidu.com/s/2bVmRGWXyES7A589J8z_COg?pwd=78xj"
  },
  { 
    id: 5,
    title: "CT血管造影",
    cover: "/covers/5.jpg",
    status: "paused",
    description: "脑血管3D重建分析",
    progress: 15,
    directories: ["血管影像", "三维模型", "诊断报告"],
    downloadUrl: "https://example.com/download/5"
  },
  { 
    id: 6,
    title: "PET-CT融合成像",
    cover: "/covers/6.jpg",
    status: "completed",
    description: "肿瘤代谢活性研究",
    progress: 100,
    directories: ["代谢数据", "解剖定位", "病例分析"],
    downloadUrl: "https://pan.baidu.com/s/3cVmRGWXyES7A589J8z_COg?pwd=92km"
  },
  { 
    id: 7,
    title: "功能磁共振(fMRI)",
    cover: "/covers/7.jpg",
    status: "reading",
    description: "脑功能网络连接研究",
    progress: 45,
    directories: ["任务态数据", "静息态数据", "统计分析"],
    downloadUrl: "https://example.com/download/7"
  },
  { 
    id: 8,
    title: "弥散张量成像",
    cover: "/covers/8.jpg",
    status: "paused",
    description: "白质纤维束追踪分析",
    progress: 10,
    directories: ["DTI数据", "纤维追踪", "可视化"],
    downloadUrl: "https://pan.baidu.com/s/4dVmRGWXyES7A589J8z_COg?pwd=63hn"
  },
  { 
    id: 9,
    title: "超声多普勒",
    cover: "/covers/9.jpg",
    status: "reading",
    description: "颈动脉斑块血流动力学分析",
    progress: 80,
    directories: ["超声影像", "血流数据", "风险评估"],
    downloadUrl: "https://example.com/download/9"
  }
];
