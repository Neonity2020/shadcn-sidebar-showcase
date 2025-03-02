export type Case = {
  id: number;
  title: string;
  category: string;
  description: string;
  details: string;
  imageUrl: string;
}

export const categories = ['全部', '神经系统', '心血管', '肌肉骨骼'];

export const casesData: Case[] = [
  {
    id: 1,
    title: "7T MRI清晰显示豆纹动脉",
    category: "神经系统",
    description: "7T MRI显示的豆纹动脉",
    details: "使用7T MRI清晰显示豆纹动脉",
    imageUrl: "/images/vascular/7T_lenticulostriate-artery.jpeg"
  },
  // ... 其他案例
];
