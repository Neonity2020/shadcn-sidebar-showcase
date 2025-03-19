"use client";

import { useEffect, useRef, useState } from "react";

interface Video {
  id: string;
  title: string;
  videoUrl: string;
  thumbnail: string;
  bilibiliId?: string;
}

interface VideoPlayerProps {
  video: Video;
}

export function VideoPlayer({ video }: VideoPlayerProps) {
  // 如果是B站视频，使用iframe嵌入
  if (video.bilibiliId) {
    return (
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
        <iframe
          src={`//player.bilibili.com/player.html?bvid=${video.bilibiliId}&page=1&high_quality=1&danmaku=0`}
          className="w-full h-full"
          allowFullScreen
        />
      </div>
    );
  }

  // 普通视频播放器
  return (
    <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
      <video
        src={video.videoUrl}
        poster={video.thumbnail}
        className="w-full h-full"
        controls
      />
    </div>
  );
} 