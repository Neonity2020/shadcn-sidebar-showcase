import React from 'react';
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Bone, 
  HeartPulse, 
  Stethoscope, 
  Dna, 
  ShieldPlus 
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'MRI诊断学大纲 | 医学影像库',
  description: '全面的MRI诊断学系统分类大纲，涵盖神经系统、骨骼肌肉系统、胸部系统、腹部系统和生殖系统',
  keywords: ['MRI', '医学影像', '诊断学', '放射学']
};

const systemIcons = {
  "神经系统": Brain,
  "骨骼肌肉系统": Bone,
  "胸部系统": HeartPulse,
  "腹部系统": Stethoscope,
  "生殖系统": Dna
} as const;

export default function MRIDiagnosisOutline() {
  const systemCategories = [
    {
      name: "神经系统",
      subsystems: [
        { name: "脑部", topics: ["脑肿瘤", "脑血管疾病", "脑外伤", "脑炎"], link: "/mri-diagnosis/neuroimaging" },
        { name: "脊髓", topics: ["脊髓肿瘤", "脊髓压迫", "脊髓炎"], link: "/mri-diagnosis/neuroimaging" },
      ]
    },
    {
      name: "骨骼肌肉系统",
      subsystems: [
        { name: "关节", topics: ["关节炎", "关节损伤", "关节畸形"], link: "/mri-diagnosis/musculoskeletal" },
        { name: "脊柱", topics: ["椎间盘突出", "脊柱侧弯", "脊柱肿瘤"], link: "/mri-diagnosis/musculoskeletal" },
        { name: "软组织", topics: ["肌肉损伤", "肌腱炎", "脂肪肿瘤"], link: "/mri-diagnosis/musculoskeletal" }
      ]
    },
    {
      name: "胸部系统",
      subsystems: [
        { name: "肺部", topics: ["肺癌", "肺炎", "肺栓塞"], link: "/mri-diagnosis/chest" },
        { name: "心脏", topics: ["心肌梗塞", "心脏瓣膜疾病", "心肌炎"], link: "/mri-diagnosis/chest" }
      ]
    },
    {
      name: "腹部系统",
      subsystems: [
        { name: "肝脏", topics: ["肝肿瘤", "肝硬化", "肝脓肿"], link: "/mri-diagnosis/abdomen" },
        { name: "肾脏", topics: ["肾肿瘤", "肾结石", "肾囊肿"], link: "/mri-diagnosis/abdomen" },
        { name: "胰腺", topics: ["胰腺炎", "胰腺肿瘤"], link: "/mri-diagnosis/abdomen" }
      ]
    },
    {
      name: "生殖系统",
      subsystems: [
        { name: "女性生殖系统", topics: ["子宫肿瘤", "卵巢囊肿", "子宫内膜异位症"], link: "/mri-diagnosis/reproduction" },
        { name: "男性生殖系统", topics: ["前列腺肿瘤", "睾丸肿瘤"], link: "/mri-diagnosis/reproduction" }
      ]
    }
  ];

  return (
    <div className="container mx-auto p-6 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
            <ShieldPlus className="inline-block mr-3 text-blue-600" size={40} />
            MRI影像诊断
          </h1>
          <p className="text-xl text-gray-600">
            全面系统的医学影像诊断分类指南
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {systemCategories.map((category, index) => {
            const SystemIcon = systemIcons[category.name as keyof typeof systemIcons];
            return (
              <Link 
                key={index} 
                href={category.subsystems[0].link} 
                className="block"
              >
                <Card 
                  className="
                    bg-white 
                    border-2 border-transparent 
                    hover:border-blue-300 
                    shadow-lg 
                    hover:shadow-2xl 
                    transition-all 
                    duration-300 
                    ease-in-out 
                    transform 
                    hover:-translate-y-2
                    cursor-pointer
                  "
                >
                  <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <SystemIcon className="text-blue-600" size={24} />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">
                      {category.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {category.subsystems.map((subsystem, subIndex) => (
                      <div key={subIndex} className="mb-4">
                        <h3 className="text-lg font-medium mb-2">{subsystem.name}</h3>
                        <div className="flex flex-wrap gap-2">
                          {subsystem.topics.map((topic, topicIndex) => (
                            <Badge key={topicIndex} variant="secondary">{topic}</Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
} 