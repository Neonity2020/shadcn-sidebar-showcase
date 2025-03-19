"use client";

import Image from "next/image";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { zhCN } from "date-fns/locale";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: number;
  createdAt: Date;
  bilibiliId?: string;
}

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Link href={`/content/videos/${video.id}`} className="group">
      <div className="relative aspect-video rounded-lg overflow-hidden">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={video.bilibiliId ? true : false}
          unoptimized={video.bilibiliId ? true : false}
        />
        <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
          {video.duration}
        </div>
      </div>
      <div className="mt-3">
        <h3 className="font-semibold line-clamp-2">{video.title}</h3>
        <div className="text-sm text-gray-600 mt-1">
          <span>{video.views.toLocaleString()} 次观看</span>
          <span className="mx-1">•</span>
          <span>
            {formatDistanceToNow(video.createdAt, {
              addSuffix: true,
              locale: zhCN,
            })}
          </span>
        </div>
      </div>
    </Link>
  );
} 