import { Metadata } from "next";
import { VideoUploadForm } from "@/components/video-upload-form";

export const metadata: Metadata = {
  title: "上传视频",
  description: "上传新的视频内容",
};

export default function UploadPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">上传视频</h1>
        <VideoUploadForm />
      </div>
    </div>
  );
} 