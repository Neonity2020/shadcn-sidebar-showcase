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
    title: "MRI at a Glance",
    cover: "/covers/4.jpg",
    status: "reading",
    description: "MRI at a Glance MRI知识速览",
    progress: 60,
    directories: ["MRI原理", "MRI技术", "MRI诊断"],
    downloadUrl: "https://pan.baidu.com/s/2bVmRGWXyES7A589J8z_COg?pwd=78xj"
  },
  { 
    id: 5,
    title: "Duke Review",
    cover: "/covers/5.jpg",
    status: "reading",
    description: "杜克Review",
    progress: 15,
    directories: ["病例", "影像", "原理"],
    downloadUrl: "https://example.com/download/5"
  },
  { 
    id: 6,
    title: "MRI from Picture to Proton",
    cover: "/covers/6.jpg",
    status: "completed",
    description: "从图片到质子 - 通俗易懂学习磁共振成像原理",
    progress: 100,
    directories: ["成像原理"],
    downloadUrl: "https://pan.baidu.com/s/3cVmRGWXyES7A589J8z_COg?pwd=92km"
  },
  { 
    id: 7,
    title: "腹部盆腔MRI（第4版）",
    cover: "/covers/7.jpg",
    status: "reading",
    description: "腹部盆腔MRI（第4版）",
    progress: 45,
    directories: ["腹部", "盆腔", "MRI"],
    downloadUrl: "https://example.com/download/7"
  },
  { 
    id: 8,
    title: "HUMAN SECTIONAL ANATOMY (4th Edition)",
    cover: "/covers/8.jpg",
    status: "paused",
    description: "人体断层解剖学（第4版）",
    progress: 10,
    directories: ["解剖", "影像"],
    downloadUrl: "https://pan.baidu.com/s/4dVmRGWXyES7A589J8z_COg?pwd=63hn"
  },
  { 
    id: 9,
    title: "HANDBOOK OF MRI Pulse Sequences",
    cover: "/covers/9.jpg",
    status: "reading",
    description: "MRI脉冲序列手册",
    progress: 80,
    directories: ["脉冲序列", "成像原理"],
    downloadUrl: "https://example.com/download/9"
  }
];
