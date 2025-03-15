export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export const mriQuiz: Quiz = {
  id: "mri-basic",
  title: "MRI基础知识测验",
  description: "测试你对MRI基础知识的掌握程度",
  questions: [
    // 基础物理原理
    {
      id: 1,
      question: "MRI扫描中使用的主要磁场强度通常是多少特斯拉？",
      options: ["1.5T", "3T", "7T", "9.4T"],
      correctAnswer: 0,
      explanation: "1.5T是最常用的临床MRI磁场强度，它提供了良好的图像质量和安全性。3T虽然分辨率更高，但成本更高且可能产生更多伪影。7T和9.4T主要用于研究目的。",
      category: "基础物理"
    },
    {
      id: 2,
      question: "MRI成像的基本原理是什么？",
      options: ["X射线吸收", "核磁共振", "超声波反射", "放射性衰变"],
      correctAnswer: 1,
      explanation: "MRI利用核磁共振原理，通过外加磁场使人体内的氢原子核产生共振，然后接收共振信号进行成像。这与X射线、超声波等其他成像方式完全不同。",
      category: "基础物理"
    },
    // 图像类型
    {
      id: 3,
      question: "在MRI中，T1加权图像主要反映什么？",
      options: ["水含量", "脂肪含量", "铁含量", "钙含量"],
      correctAnswer: 1,
      explanation: "T1加权图像主要反映组织中的脂肪含量。在T1加权图像中，脂肪组织呈现高信号（亮），而水呈现低信号（暗）。这种对比对于观察解剖结构特别有用。",
      category: "图像类型"
    },
    {
      id: 4,
      question: "T2加权图像最适合观察什么？",
      options: ["骨骼", "脂肪", "水肿", "钙化"],
      correctAnswer: 2,
      explanation: "T2加权图像对水含量变化非常敏感，因此最适合观察水肿、炎症等病理变化。水肿区域在T2加权图像上呈现高信号。",
      category: "图像类型"
    },
    // 造影剂
    {
      id: 5,
      question: "MRI扫描中最常用的造影剂是什么？",
      options: ["钆", "碘", "钡", "铁"],
      correctAnswer: 0,
      explanation: "钆（Gadolinium）是MRI最常用的造影剂。它通过改变局部组织的弛豫时间来增强对比度。碘和钡主要用于CT扫描，而铁基造影剂使用较少。",
      category: "造影剂"
    },
    {
      id: 6,
      question: "钆造影剂的主要作用机制是什么？",
      options: ["吸收X射线", "改变T1弛豫时间", "产生声波", "释放放射性"],
      correctAnswer: 1,
      explanation: "钆造影剂通过改变组织的T1弛豫时间来增强对比度。它缩短了周围组织的T1时间，使得这些区域在T1加权图像上呈现高信号。",
      category: "造影剂"
    },
    // 安全考虑
    {
      id: 7,
      question: "MRI检查中最重要的安全考虑是什么？",
      options: ["辐射防护", "磁场安全", "噪音防护", "温度控制"],
      correctAnswer: 1,
      explanation: "MRI检查中最重要的是磁场安全。强磁场可能影响金属植入物，吸引铁磁性物体，因此需要严格的安全筛查和防护措施。",
      category: "安全考虑"
    },
    {
      id: 8,
      question: "以下哪种情况是MRI检查的绝对禁忌症？",
      options: ["怀孕", "装有心脏起搏器", "幽闭恐惧症", "金属假牙"],
      correctAnswer: 1,
      explanation: "装有心脏起搏器是MRI检查的绝对禁忌症，因为强磁场可能影响起搏器的功能。其他选项可能是相对禁忌症或需要特殊考虑。",
      category: "安全考虑"
    },
    // 临床应用
    {
      id: 9,
      question: "MRI在以下哪个部位的检查中优势最明显？",
      options: ["骨骼", "肺部", "中枢神经系统", "胃肠道"],
      correctAnswer: 2,
      explanation: "MRI在中枢神经系统（脑和脊髓）的检查中优势最明显，因为它能提供优异的软组织对比度，且没有电离辐射。",
      category: "临床应用"
    },
    {
      id: 10,
      question: "功能性MRI（fMRI）主要用于研究什么？",
      options: ["解剖结构", "脑功能活动", "血流灌注", "代谢变化"],
      correctAnswer: 1,
      explanation: "fMRI主要用于研究脑功能活动，通过检测血氧水平依赖（BOLD）效应来显示大脑不同区域的活动情况。",
      category: "临床应用"
    }
  ]
};
