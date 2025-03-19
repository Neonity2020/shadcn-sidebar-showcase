import { Metadata } from "next";
import { VideoPlayer } from "@/components/video-player";
import { formatDistanceToNow } from "date-fns";
import { zhCN } from "date-fns/locale";

interface VideoPageProps {
  params: {
    slug: string;
  };
}   

// 示例视频数据
const videos = {
  "1": {
    id: "1",
    title: "磁敏感加权成像——钙化与血",
    description: "本视频详细介绍了磁敏感加权成像（SWI）技术在区分钙化和出血方面的应用。通过实际病例分析，展示了SWI在临床诊断中的重要作用。",
    videoUrl: "https://www.bilibili.com/video/BV1B34y127XL",
    thumbnail: "/thumbnails/video1-preview.jpeg",
    duration: "15:30",
    views: 2500,
    createdAt: new Date("2024-03-15"),
    bilibiliId: "BV1B34y127XL",
  },
  "2": {
    id: "2",
    title: "磁振影像学MRI磁化率加权影像SWI",
    description: "本视频详细介绍了磁敏感加权成像（SWI）技术在磁振影像学中的应用。通过实际病例分析，展示了SWI在临床诊断中的重要作用。",
    videoUrl: "https://www.bilibili.com/video/BV1pv411C7zY",
    thumbnail: "/thumbnails/video2-preview.jpeg",
    duration: "20:45",
    views: 1800,
    createdAt: new Date("2024-03-14"),
    bilibiliId: "BV1pv411C7zY",
  },
  "3": {
    id: "3",
    title: "Web开发最佳实践",
    description: "探索现代Web开发中的最佳实践，包括性能优化、安全性考虑、代码组织等方面的实用技巧。",
    videoUrl: "/videos/web-dev-best-practices.mp4",
    thumbnail: "/thumbnails/web-dev.jpg",
    duration: "25:20",
    views: 3200,
    createdAt: new Date("2024-03-13"),
  },
  // ... 其他视频数据
};

export async function generateMetadata({ params }: VideoPageProps): Promise<Metadata> {
  const slug = await Promise.resolve(params.slug);
  const video = videos[slug as keyof typeof videos];
  return {
    title: video?.title || "视频详情",
    description: video?.description || "观看视频内容",
  };
}

export default async function VideoPage({ params }: VideoPageProps) {
  const slug = await Promise.resolve(params.slug);
  const video = videos[slug as keyof typeof videos] || {
    id: slug,
    title: "视频不存在",
    description: "抱歉，您请求的视频不存在。",
    videoUrl: "/videos/example.mp4",
    thumbnail: "/thumbnails/default.jpg",
    duration: "00:00",
    views: 0,
    createdAt: new Date(),
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <VideoPlayer video={video} />
        <div className="mt-6">
          <h1 className="text-2xl font-bold">{video.title}</h1>
          <div className="flex items-center text-gray-600 mt-2">
            <span>{video.views.toLocaleString()} 次观看</span>
            <span className="mx-2">•</span>
            <span>
              {formatDistanceToNow(video.createdAt, {
                addSuffix: true,
                locale: zhCN,
              })}
            </span>
          </div>
          <div className="mt-4 prose max-w-none">
            <p>{video.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
