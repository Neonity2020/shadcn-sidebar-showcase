"use client"

import { useState } from "react"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { 
  ChevronDown, 
  ChevronUp, 
  FileIcon, 
  FolderIcon, 
  MoreHorizontal, 
  Search 
} from "lucide-react"

export type FileItem = {
  id: string
  name: string
  type: "file" | "folder"
  size: number
  modified: Date
  path: string
}

interface FileListProps {
  files: FileItem[]
  onFileClick?: (file: FileItem) => void
  onFolderClick?: (folder: FileItem) => void
}

export function FileList({ 
  files, 
  onFileClick, 
  onFolderClick 
}: FileListProps) {
  const [sortField, setSortField] = useState<keyof FileItem>("name")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const [searchQuery, setSearchQuery] = useState("")

  const toggleSort = (field: keyof FileItem) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  const filteredFiles = files.filter(file => 
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const sortedFiles = [...filteredFiles].sort((a, b) => {
    // 总是将文件夹排在文件前面
    if (a.type !== b.type) {
      return a.type === "folder" ? -1 : 1
    }

    // 根据选定的字段排序
    if (a[sortField] < b[sortField]) {
      return sortDirection === "asc" ? -1 : 1
    }
    if (a[sortField] > b[sortField]) {
      return sortDirection === "asc" ? 1 : -1
    }
    return 0
  })

  const handleRowClick = (file: FileItem) => {
    if (file.type === "folder" && onFolderClick) {
      onFolderClick(file)
    } else if (file.type === "file" && onFileClick) {
      onFileClick(file)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="搜索文件..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50%]">
                <Button 
                  variant="ghost" 
                  onClick={() => toggleSort("name")}
                  className="flex items-center gap-1 font-medium"
                >
                  名称
                  {sortField === "name" && (
                    sortDirection === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                  )}
                </Button>
              </TableHead>
              <TableHead>
                <Button 
                  variant="ghost" 
                  onClick={() => toggleSort("size")}
                  className="flex items-center gap-1 font-medium"
                >
                  大小
                  {sortField === "size" && (
                    sortDirection === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                  )}
                </Button>
              </TableHead>
              <TableHead>
                <Button 
                  variant="ghost" 
                  onClick={() => toggleSort("modified")}
                  className="flex items-center gap-1 font-medium"
                >
                  修改日期
                  {sortField === "modified" && (
                    sortDirection === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                  )}
                </Button>
              </TableHead>
              <TableHead className="w-[80px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedFiles.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="h-24 text-center">
                  没有找到文件
                </TableCell>
              </TableRow>
            ) : (
              sortedFiles.map((file) => (
                <TableRow 
                  key={file.id}
                  onClick={() => handleRowClick(file)}
                  className="cursor-pointer hover:bg-muted/50"
                >
                  <TableCell className="flex items-center gap-2 font-medium">
                    {file.type === "folder" ? (
                      <FolderIcon className="h-4 w-4 text-blue-500" />
                    ) : (
                      <FileIcon className="h-4 w-4 text-gray-500" />
                    )}
                    {file.name}
                  </TableCell>
                  <TableCell>
                    {file.type === "folder" ? "—" : formatFileSize(file.size)}
                  </TableCell>
                  <TableCell>{formatDate(file.modified)}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button 
                          variant="ghost" 
                          className="h-8 w-8 p-0"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">打开菜单</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>查看详情</DropdownMenuItem>
                        <DropdownMenuItem>下载</DropdownMenuItem>
                        <DropdownMenuItem>重命名</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">删除</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
} 