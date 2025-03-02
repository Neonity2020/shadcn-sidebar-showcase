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
  { id: 1, title: "MRI-Techniques", description: "磁共振技术", status: "building", progress: 2, projectUrl: "/mri-techs" },
  { id: 2, title: "MRI-Diagnosis", description: "磁共振诊断", status: "building", progress: 0, projectUrl: "/mri-diagnosis" },
  { id: 3, title: "MRI-Principles", description: "磁共振原理", status: "building", progress: 0, projectUrl: "/mri-principles" },
  { id: 4, title: "MRI-Dictionary", description: "磁共振词典", status: "building", progress: 1, projectUrl: "/mri-dictionary" },
  { id: 5, title: "MRI-Bookshelf", description: "磁共振书架", status: "building", progress: 0, projectUrl: "/mri-bookshelf" },
]