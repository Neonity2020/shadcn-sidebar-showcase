"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function VideoUploadForm() {
  const router = useRouter();
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUploading(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      // TODO: 实现视频上传逻辑
      // 这里需要连接到后端API
      await new Promise((resolve) => setTimeout(resolve, 2000)); // 模拟上传
      
      router.push("/content/videos");
    } catch (error) {
      console.error("上传失败:", error);
    } finally {
      setIsUploading(false);
      setProgress(0);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          视频文件
        </label>
        <input
          type="file"
          name="video"
          accept="video/*"
          required
          className="mt-1 block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          视频标题
        </label>
        <input
          type="text"
          name="title"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          视频描述
        </label>
        <textarea
          name="description"
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {isUploading && (
        <div className="space-y-2">
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-600">上传中... {progress}%</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isUploading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
      >
        {isUploading ? "上传中..." : "上传视频"}
      </button>
    </form>
  );
} 