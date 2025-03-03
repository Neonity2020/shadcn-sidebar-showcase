import { FileItem } from "@/components/file-list"

export const sampleFiles: FileItem[] = [
  {
    id: "1",
    name: "文档",
    type: "folder",
    size: 0,
    modified: new Date("2023-12-15T10:30:00"),
    path: "/文档"
  },
  {
    id: "2",
    name: "图片",
    type: "folder",
    size: 0,
    modified: new Date("2023-12-10T14:20:00"),
    path: "/图片"
  },
  {
    id: "3",
    name: "项目",
    type: "folder",
    size: 0,
    modified: new Date("2024-01-05T09:15:00"),
    path: "/项目"
  },
  {
    id: "4",
    name: "工作报告.docx",
    type: "file",
    size: 2500000,
    modified: new Date("2024-02-20T16:45:00"),
    path: "/工作报告.docx"
  },
  {
    id: "5",
    name: "预算表.xlsx",
    type: "file",
    size: 1800000,
    modified: new Date("2024-02-15T11:30:00"),
    path: "/预算表.xlsx"
  },
  {
    id: "6",
    name: "会议记录.pdf",
    type: "file",
    size: 3200000,
    modified: new Date("2024-02-10T13:20:00"),
    path: "/会议记录.pdf"
  },
  {
    id: "7",
    name: "产品演示.pptx",
    type: "file",
    size: 5500000,
    modified: new Date("2024-01-25T15:10:00"),
    path: "/产品演示.pptx"
  },
  {
    id: "8",
    name: "项目计划.txt",
    type: "file",
    size: 45000,
    modified: new Date("2024-02-05T10:05:00"),
    path: "/项目计划.txt"
  },
  {
    id: "9",
    name: "公司标志.png",
    type: "file",
    size: 850000,
    modified: new Date("2023-12-20T09:30:00"),
    path: "/公司标志.png"
  },
  {
    id: "10",
    name: "用户手册.pdf",
    type: "file",
    size: 4200000,
    modified: new Date("2024-01-15T14:40:00"),
    path: "/用户手册.pdf"
  }
] 