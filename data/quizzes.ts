export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number | number[];
  explanation: string;
  category?: string;
  type: 'single' | 'multiple';
}

export interface QuizGroup {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  groups: QuizGroup[];
}

export const mriQuiz: Quiz = {
  id: "mri-basic",
  title: "MRI基础知识测验",
  description: "测试你对MRI基础知识的掌握程度",
  groups: [
    {
      id: "mri-basic-1",
      title: "MRI基础物理原理",
      description: "测试你对MRI基础物理原理的理解",
      questions: [
        // 基础物理原理
        {
          id: 1,
          question: "MRI扫描中使用的主要磁场强度通常是多少特斯拉？",
          options: ["1.5T", "3T", "7T", "9.4T"],
          correctAnswer: [0, 1],
          explanation: "1.5T和3T是最常用的临床MRI磁场强度。1.5T提供了良好的图像质量和安全性，而3T虽然分辨率更高，但成本更高且可能产生更多伪影。7T和9.4T主要用于研究目的。",
          category: "MRI常识",
          type: "multiple"
        },
        {
          id: 2,
          question: "MRI成像的基本原理是什么？",
          options: ["X射线吸收", "核磁共振", "超声波反射", "放射性衰变"],
          correctAnswer: 1,
          explanation: "MRI利用核磁共振原理，通过外加磁场使人体内的氢原子核产生共振，然后接收共振信号进行成像。这与X射线、超声波等其他成像方式完全不同。",
          category: "MRI成像原理",
          type: "single"
        },
        // 图像类型
        {
          id: 3,
          question: "在MRI中，T1加权图像主要反映什么？",
          options: ["水含量", "脂肪含量", "铁含量", "钙含量"],
          correctAnswer: 1,
          explanation: "T1加权图像主要反映组织中的脂肪含量。在T1加权图像中，脂肪组织呈现高信号（亮），而水呈现低信号（暗）。这种对比对于观察解剖结构特别有用。",
          category: "图像类型",
          type: "single"
        },
        {
          id: 4,
          question: "T2加权图像最适合观察什么？",
          options: ["骨骼", "脂肪", "水肿", "钙化"],
          correctAnswer: 2,
          explanation: "T2加权图像对水含量变化非常敏感，因此最适合观察水肿、炎症等病理变化。水肿区域在T2加权图像上呈现高信号。",
          category: "图像类型",
          type: "single"
        },
        // 造影剂
        {
          id: 5,
          question: "MRI扫描中最常用的造影剂是什么？",
          options: ["钆", "碘", "钡", "铁"],
          correctAnswer: 0,
          explanation: "钆（Gadolinium）是MRI最常用的造影剂。它通过改变局部组织的弛豫时间来增强对比度。碘和钡主要用于CT扫描，而铁基造影剂使用较少。",
          category: "造影剂",
          type: "single"
        },
        {
          id: 6,
          question: "钆造影剂的主要作用机制是什么？",
          options: ["吸收X射线", "改变T1弛豫时间", "产生声波", "释放放射性"],
          correctAnswer: 1,
          explanation: "钆造影剂通过改变组织的T1弛豫时间来增强对比度。它缩短了周围组织的T1时间，使得这些区域在T1加权图像上呈现高信号。",
          category: "造影剂",
          type: "single"
        },
        // 安全考虑
        {
          id: 7,
          question: "MRI检查中最重要的安全考虑是什么？",
          options: ["辐射防护", "磁场安全", "噪音防护", "温度控制"],
          correctAnswer: 1,
          explanation: "MRI检查中最重要的是磁场安全。强磁场可能影响金属植入物，吸引铁磁性物体，因此需要严格的安全筛查和防护措施。",
          category: "安全考虑",
          type: "single"
        },
        {
          id: 8,
          question: "以下哪种情况是MRI检查的绝对禁忌症？",
          options: ["怀孕", "装有心脏起搏器", "幽闭恐惧症", "金属假牙"],
          correctAnswer: 1,
          explanation: "装有心脏起搏器是MRI检查的绝对禁忌症，因为强磁场可能影响起搏器的功能。其他选项可能是相对禁忌症或需要特殊考虑。",
          category: "安全考虑",
          type: "single"
        }
      ]
    },
    {
      id: "mri-basic-2",
      title: "MRI临床应用",
      description: "测试你对MRI临床应用的认识",
      questions: [
        {
          id: 11,
          question: "在脑卒中诊断中，MRI相比CT的主要优势是什么？",
          options: ["扫描速度更快", "对早期缺血更敏感", "成本更低", "辐射剂量更小"],
          correctAnswer: 1,
          explanation: "MRI对早期脑缺血更敏感，可以在症状出现后数小时内就显示缺血区域。",
          category: "临床应用",
          type: "single"
        },
        {
          id: 12,
          question: "以下哪种MRI序列最适合观察脑出血？",
          options: ["T1加权", "T2加权", "FLAIR", "SWI"],
          correctAnswer: 3,
          explanation: "SWI（磁敏感加权成像）对出血非常敏感，可以显示微小的出血灶。",
          category: "临床应用",
          type: "single"
        },
        {
          id: 13,
          question: "MRI在脊柱检查中的主要优势是什么？",
          options: ["扫描速度快", "可以显示神经根", "成本低", "不需要造影剂"],
          correctAnswer: 1,
          explanation: "MRI可以清晰显示神经根和脊髓，对诊断椎间盘突出和脊髓病变特别有用。",
          category: "临床应用",
          type: "single"
        },
        {
          id: 14,
          question: "在关节检查中，MRI最适合观察哪些结构？",
          options: ["骨骼", "软骨", "空气", "钙化"],
          correctAnswer: 1,
          explanation: "MRI对软骨组织有很好的显示能力，可以清晰显示软骨损伤和退变。",
          category: "临床应用",
          type: "single"
        },
        {
          id: 15,
          question: "以下哪种情况最适合使用MRI进行筛查？",
          options: ["肺癌", "乳腺癌", "结肠癌", "肝癌"],
          correctAnswer: 1,
          explanation: "MRI在乳腺癌筛查中特别有用，尤其是对于致密型乳腺的女性。",
          category: "临床应用",
          type: "single"
        },
        {
          id: 16,
          question: "MRI在心脏检查中的主要应用是什么？",
          options: ["观察钙化", "评估心肌功能", "显示冠状动脉", "测量血压"],
          correctAnswer: 1,
          explanation: "MRI可以评估心肌收缩功能、心肌灌注和心肌活力。",
          category: "临床应用",
          type: "single"
        },
        {
          id: 17,
          question: "在肝脏检查中，MRI相比CT的优势是什么？",
          options: ["扫描速度更快", "对脂肪肝更敏感", "成本更低", "不需要屏气"],
          correctAnswer: 1,
          explanation: "MRI可以更准确地评估肝脏脂肪含量，对脂肪肝的诊断更有优势。",
          category: "临床应用",
          type: "single"
        },
        {
          id: 18,
          question: "MRI在盆腔检查中的主要优势是什么？",
          options: ["扫描速度快", "软组织对比度好", "成本低", "不需要造影剂"],
          correctAnswer: 1,
          explanation: "MRI具有优异的软组织对比度，特别适合观察盆腔器官的病变。",
          category: "临床应用",
          type: "single"
        },
        {
          id: 19,
          question: "以下哪种MRI技术最适合评估肿瘤？",
          options: ["T1加权", "T2加权", "DWI", "MRA"],
          correctAnswer: 2,
          explanation: "DWI（弥散加权成像）对肿瘤特别敏感，可以评估肿瘤的恶性程度。",
          category: "临床应用",
          type: "single"
        },
        {
          id: 20,
          question: "MRI在血管检查中的主要应用是什么？",
          options: ["显示钙化", "评估血流", "测量血压", "观察血栓"],
          correctAnswer: 1,
          explanation: "MRI可以评估血流速度和方向，对血管病变的诊断很有帮助。",
          category: "临床应用",
          type: "single"
        }
      ]
    },
    {
      id: "mri-basic-3",
      title: "MRI高级成像技术",
      description: "测试你对MRI高级成像技术和复杂临床应用的理解",
      questions: [
        {
          id: 21,
          question: "在扩散张量成像（DTI）中，FA（Fractional Anisotropy）值反映了什么？",
          options: ["水分子扩散的方向性", "组织密度", "血流速度", "代谢活性"],
          correctAnswer: 0,
          explanation: "FA值反映了水分子扩散的方向性，值越高表示扩散越具有方向性。在DTI中，FA值常用于评估白质纤维束的完整性。",
          category: "高级成像技术",
          type: "single"
        },
        {
          id: 22,
          question: "以下哪些是灌注加权成像（PWI）的主要应用？",
          options: ["评估脑血流灌注", "观察脑组织代谢", "测量脑脊液流动", "显示脑白质病变"],
          correctAnswer: [0, 1],
          explanation: "PWI主要用于评估脑血流灌注和组织代谢情况，对脑卒中、肿瘤等疾病的诊断和预后评估有重要价值。",
          category: "高级成像技术",
          type: "multiple"
        },
        {
          id: 23,
          question: "在磁共振波谱（MRS）中，NAA峰主要代表什么？",
          options: ["乳酸", "胆碱", "N-乙酰天门冬氨酸", "肌酸"],
          correctAnswer: 2,
          explanation: "NAA（N-乙酰天门冬氨酸）峰主要反映神经元的完整性，其降低通常提示神经元损伤或死亡。",
          category: "高级成像技术",
          type: "single"
        },
        {
          id: 24,
          question: "以下哪种MRI技术最适合评估心肌活力？",
          options: ["T1 mapping", "T2 mapping", "延迟增强", "灌注成像"],
          correctAnswer: 2,
          explanation: "延迟增强MRI是评估心肌活力的金标准，可以准确显示心肌梗死和瘢痕组织。",
          category: "高级成像技术",
          type: "single"
        },
        {
          id: 25,
          question: "在功能MRI（fMRI）中，BOLD效应主要反映什么？",
          options: ["脑血流变化", "脑组织密度", "脑脊液流动", "脑白质完整性"],
          correctAnswer: 0,
          explanation: "BOLD（血氧水平依赖）效应主要反映脑血流和血氧水平的变化，是fMRI的基础。",
          category: "高级成像技术",
          type: "single"
        },
        {
          id: 26,
          question: "以下哪些因素会影响MRI图像的信噪比（SNR）？",
          options: ["磁场强度", "线圈类型", "扫描时间", "患者体型"],
          correctAnswer: [0, 1, 2, 3],
          explanation: "MRI图像的信噪比受多个因素影响，包括磁场强度、线圈类型、扫描时间和患者体型等。",
          category: "高级成像技术",
          type: "multiple"
        },
        {
          id: 27,
          question: "在动脉自旋标记（ASL）成像中，标记脉冲的作用是什么？",
          options: ["增加图像对比度", "标记动脉血", "减少运动伪影", "提高分辨率"],
          correctAnswer: 1,
          explanation: "ASL通过标记动脉血来评估脑血流灌注，是一种无创的灌注成像技术。",
          category: "高级成像技术",
          type: "single"
        },
        {
          id: 28,
          question: "以下哪种MRI技术最适合评估肝脏纤维化？",
          options: ["T1 mapping", "T2 mapping", "弹性成像", "灌注成像"],
          correctAnswer: 2,
          explanation: "MRI弹性成像可以评估肝脏的硬度，对肝脏纤维化的诊断和分期有重要价值。",
          category: "高级成像技术",
          type: "single"
        },
        {
          id: 29,
          question: "在磁敏感加权成像（SWI）中，相位图主要反映什么？",
          options: ["组织密度", "磁场不均匀性", "血流速度", "代谢活性"],
          correctAnswer: 1,
          explanation: "SWI的相位图主要反映局部磁场的不均匀性，对显示出血、钙化等病变特别敏感。",
          category: "高级成像技术",
          type: "single"
        },
        {
          id: 30,
          question: "以下哪些是定量MRI（qMRI）的主要应用？",
          options: ["组织特性定量", "血流测量", "代谢物浓度", "温度测量"],
          correctAnswer: [0, 1, 2, 3],
          explanation: "qMRI可以定量测量组织的各种特性，包括T1、T2值、血流、代谢物浓度和温度等。",
          category: "高级成像技术",
          type: "multiple"
        }
      ]
    }
  ]
};
