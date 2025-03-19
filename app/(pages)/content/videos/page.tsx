import { Metadata } from "next";
import { VideoCard } from "@/components/video-card";

export const metadata: Metadata = {
  title: "视频库",
  description: "浏览所有视频内容",
};

export default async function VideosPage() {
  // 示例视频数据
  const videos = [
    {
      id: "1",
      title: "磁敏感加权成像——钙化与血",
      thumbnail: "/thumbnails/video1-preview.jpeg",
      duration: "15:30",
      views: 2500,
      createdAt: new Date("2024-03-15"),
      bilibiliId: "BV1B34y127XL",
    },
    {
      id: "2",
      title: "磁振影像学MRI磁化率加权影像SWI",
      thumbnail: "/thumbnails/video2-preview.jpeg",
      duration: "20:45",
      views: 1800,
      createdAt: new Date("2024-03-14"),
      bilibiliId: "BV1pv411C7zY",
    },
    {
      id: "3",
      title: "Web开发最佳实践",
      thumbnail: "/thumbnails/web-dev.jpg",
      duration: "25:20",
      views: 3200,
      createdAt: new Date("2024-03-13"),
    },
    {
      id: "4",
      title: "移动应用设计技巧",
      thumbnail: "/thumbnails/mobile-design.jpg",
      duration: "18:15",
      views: 2100,
      createdAt: new Date("2024-03-12"),
    },
    {
      id: "5",
      title: "云计算基础教程",
      thumbnail: "/thumbnails/cloud-computing.jpg",
      duration: "22:30",
      views: 2800,
      createdAt: new Date("2024-03-11"),
    },
    {
      id: "6",
      title: "数据安全与隐私保护",
      thumbnail: "/thumbnails/data-security.jpg",
      duration: "16:45",
      views: 1900,
      createdAt: new Date("2024-03-10"),
    },
    {
      id: "7",
      title: "区块链技术解析",
      thumbnail: "/thumbnails/blockchain.jpg",
      duration: "19:20",
      views: 2400,
      createdAt: new Date("2024-03-09"),
    },
    {
      id: "8",
      title: "物联网应用开发",
      thumbnail: "/thumbnails/iot.jpg",
      duration: "21:15",
      views: 1700,
      createdAt: new Date("2024-03-08"),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">视频库</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
} 