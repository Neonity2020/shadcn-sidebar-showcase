import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRightIcon } from 'lucide-react';

const NeuroimagingPage: React.FC = () => {
  const imagingTechniques = [
    {
      name: "磁共振成像 (MRI)",
      description: "使用强磁场和无线电波创建人体内部详细图像",
      applications: ["脑部结构分析", "肿瘤检测", "神经系统疾病诊断"],
      link: "/mri-diagnosis/neuroimaging/mri"
    },
    {
      name: "计算机断层扫描 (CT)",
      description: "使用X射线创建身体横截面图像",
      applications: ["脑部出血", "骨骼异常", "急性神经系统疾病"],
      link: "/mri-diagnosis/neuroimaging/ct"
    },
    {
      name: "功能性磁共振成像 (fMRI)",
      description: "测量大脑活动和血液流动变化",
      applications: ["认知功能研究", "神经网络映射", "脑功能异常分析"],
      link: "/mri-diagnosis/neuroimaging/fmri"
    }
  ];

  const clinicalApplications = [
    {
      name: "神经退行性疾病诊断",
      link: "/mri-diagnosis/neuroimaging/neurodegenerative"
    },
    {
      name: "脑肿瘤检测",
      link: "/mri-diagnosis/neuroimaging/brain-tumor"
    },
    {
      name: "脑血管疾病评估",
      link: "/mri-diagnosis/neuroimaging/cerebrovascular"
    },
    {
      name: "精神疾病研究",
      link: "/mri-diagnosis/neuroimaging/mental-health"
    },
    {
      name: "神经系统发育异常分析",
      link: "/mri-diagnosis/neuroimaging/developmental-disorders"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-primary">
        神经影像学：先进的脑部成像技术
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <Link href="/mri-diagnosis/neuroimaging/overview" className="block">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>技术概述</CardTitle>
              <ChevronRightIcon className="text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                神经影像学是一种非侵入性技术，通过先进的成像方法可视化和分析大脑结构、功能和病理变化。
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/mri-diagnosis/neuroimaging/techniques" className="block">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>主要成像技术</CardTitle>
              <ChevronRightIcon className="text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div>
                {imagingTechniques.map((technique, index) => (
                  <div key={index} className="mb-4 hover:bg-accent/5 p-2 rounded-lg">
                    <h3 className="font-semibold">{technique.name}</h3>
                    <p className="text-sm text-muted-foreground">{technique.description}</p>
                    <div className="mt-2">
                      {technique.applications.map((app, appIndex) => (
                        <Badge key={appIndex} variant="secondary" className="mr-2 mb-1">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/mri-diagnosis/neuroimaging/clinical-applications" className="block">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>临床应用领域</CardTitle>
              <ChevronRightIcon className="text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                {clinicalApplications.map((application, index) => (
                  <li key={index} className="mb-2">
                    {application.name}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Link>

        <Link href="/mri-diagnosis/neuroimaging/research-frontiers" className="block">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>研究前沿</CardTitle>
              <ChevronRightIcon className="text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                神经影像学正在快速发展，结合人工智能和机器学习技术，为精准医疗和个性化治疗提供重要支持。
              </p>
              <div className="mt-4 space-y-2">
                <Badge variant="outline">人工智能诊断</Badge>
                <Badge variant="outline">精准医疗</Badge>
                <Badge variant="outline">个性化治疗</Badge>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default NeuroimagingPage;
