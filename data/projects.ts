export interface Projects {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'building' | 'paused';
  progress: number;
  directories?: string[];
  projectUrl: string;
}

export const projects: Projects[] = [
  { id: 1, title: "MRI-Techniques", description: "磁共振技术", status: "building", progress: 50, projectUrl: "https://www.baidu.com" },
  { id: 2, title: "MRI-Diagnosis", description: "磁共振诊断", status: "building", progress: 50, projectUrl: "https://www.baidu.com" },
  { id: 3, title: "MRI-Principles", description: "磁共振原理", status: "building", progress: 50, projectUrl: "https://www.baidu.com" },
]