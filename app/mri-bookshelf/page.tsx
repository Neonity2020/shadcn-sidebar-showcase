"use client";

import { useState, useRef, useEffect } from "react";
import { books as initialBooks } from "@/data/books";
import { BookCard } from "@/components/book-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { Book } from "@/data/books";

// 阅读器组件
function BookReader({ book, onClose }: { book: Book, onClose: () => void }) {
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [showHighlights, setShowHighlights] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isDirectoryExpanded, setIsDirectoryExpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(
    book.readingMode?.currentPage ?? 1
  );

  // 格式化时间戳
  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // 获取当前页面内容
  const getCurrentPageContent = () => {
    const defaultContent = {
      text: "暂无页面内容预览",
      keywords: [] as string[],
      imageDescriptions: [] as string[]
    };

    if (!book.pageContent) return defaultContent;
    
    const pageContent = book.pageContent[currentPage];
    return {
      text: pageContent?.text || defaultContent.text,
      keywords: pageContent?.keywords || defaultContent.keywords,
      imageDescriptions: pageContent?.imageDescriptions || defaultContent.imageDescriptions
    };
  };

  // 处理翻页
  const handlePageChange = (newPage: number) => {
    const totalPages = book.readingMode?.totalPages ?? 1;
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // 切换全屏模式
  const toggleFullScreen = () => {
    if (!isFullScreen) {
      // 进入全屏
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen().catch(err => {
          console.error('Error attempting to enable full-screen mode:', err);
        });
      } else if ((elem as any).mozRequestFullScreen) {
        (elem as any).mozRequestFullScreen();
      } else if ((elem as any).webkitRequestFullscreen) {
        (elem as any).webkitRequestFullscreen();
      } else if ((elem as any).msRequestFullscreen) {
        (elem as any).msRequestFullscreen();
      }
    } else {
      // 退出全屏
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(err => {
          console.error('Error attempting to exit full-screen mode:', err);
        });
      } else if ((document as any).mozCancelFullScreen) {
        (document as any).mozCancelFullScreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      } else if ((document as any).msExitFullscreen) {
        (document as any).msExitFullscreen();
      }
    }
  };

  // 监听全屏变化
  useEffect(() => {
    const handleFullScreenChange = () => {
      const fullscreenElement = 
        document.fullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).msFullscreenElement;

      setIsFullScreen(!!fullscreenElement);
    };

    // 添加全屏变化事件监听器
    document.addEventListener('fullscreenchange', handleFullScreenChange);
    document.addEventListener('mozfullscreenchange', handleFullScreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullScreenChange);
    document.addEventListener('msfullscreenchange', handleFullScreenChange);

    // 添加键盘事件监听器
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        event.preventDefault(); // 阻止默认行为
        toggleFullScreen();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // 清理函数
    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullScreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
      document.removeEventListener('msfullscreenchange', handleFullScreenChange);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={`flex flex-col h-full ${isFullScreen ? 'fixed inset-0 z-[1000] bg-background' : ''}`}>
      <div className="flex items-center justify-between border-b p-3 sm:p-4 bg-muted">
        <div className="flex items-center gap-4">
          <h2 className="text-lg sm:text-xl font-semibold truncate">{book.title}</h2>
          <span className="text-sm text-muted-foreground">
            页面 {book.readingMode?.currentPage} / {book.readingMode?.totalPages}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setShowBookmarks(!showBookmarks)}
            className={showBookmarks ? "bg-accent" : ""}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
            </svg>
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setShowHighlights(!showHighlights)}
            className={showHighlights ? "bg-accent" : ""}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="m9 11-6 6v3h9l3-3"/>
              <path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"/>
            </svg>
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={toggleFullScreen}
            title={isFullScreen ? "退出全屏" : "进入全屏"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              {isFullScreen ? (
                <>
                  <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>
                </>
              ) : (
                <>
                  <path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
                </>
              )}
            </svg>
          </Button>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 sm:h-6 sm:w-6"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <div className="flex h-full">
          {/* 侧边栏 */}
          <div 
            className={`
              absolute top-0 left-0 bottom-0 w-80 border-r bg-muted/30 overflow-y-auto 
              transition-all duration-300 z-10
              ${showBookmarks || showHighlights 
                ? 'translate-x-0 opacity-100' 
                : '-translate-x-full opacity-0'}
            `}
          >
            <div className="p-4">
              {showBookmarks && (
                <div>
                  <h3 className="font-semibold mb-4">书签</h3>
                  <div className="space-y-3">
                    {book.readingMode?.bookmarks?.map((bookmark, index) => (
                      <div key={index} className="bg-background rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">第 {bookmark.page} 页</span>
                          <span className="text-xs text-muted-foreground">{formatDate(bookmark.timestamp)}</span>
                        </div>
                        {bookmark.note && (
                          <p className="text-sm text-muted-foreground">{bookmark.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {showHighlights && (
                <div>
                  <h3 className="font-semibold mb-4">高亮标注</h3>
                  <div className="space-y-3">
                    {book.readingMode?.highlights?.map((highlight, index) => (
                      <div key={index} className="bg-background rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">第 {highlight.page} 页</span>
                          <span className="text-xs text-muted-foreground">{formatDate(highlight.timestamp)}</span>
                        </div>
                        <div className="text-sm p-2 rounded" style={{ backgroundColor: `${highlight.color}20` }}>
                          {highlight.content}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 主要内容区域 */}
          <div 
            className={`
              flex-1 h-full overflow-y-auto transition-all duration-300
              ${showBookmarks || showHighlights 
                ? 'ml-80' 
                : 'ml-0'}
            `}
          >
            <div className="mx-auto max-w-4xl px-4 sm:px-6 py-6 h-full overflow-y-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
                {/* 左侧信息栏 */}
                <div className="lg:col-span-3 space-y-6">
                  <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={`/covers/${book.id}.jpg`} 
                      alt={book.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/covers/default.jpg";
                      }}
                    />
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-2">阅读进度</h3>
                      <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                        <div 
                          className="h-full rounded-full bg-primary transition-all" 
                          style={{ width: `${book.progress}%` }}
                        />
                      </div>
                      <p className="text-sm mt-2 text-muted-foreground">
                        已读 {book.progress}% ({book.readingMode?.currentPage} / {book.readingMode?.totalPages} 页)
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-2">最近阅读</h3>
                      <p className="text-sm text-muted-foreground">
                        {formatDate(book.readingMode?.lastRead || '')}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-2">阅读统计</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                        <div>书签：{book.readingMode?.bookmarks?.length || 0}</div>
                        <div>标注：{book.readingMode?.highlights?.length || 0}</div>
                      </div>
                    </div>
                    {book.directories && book.directories.length > 0 && (
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-sm font-medium text-muted-foreground">书籍目录</h3>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => setIsDirectoryExpanded(!isDirectoryExpanded)}
                            className="h-6 px-2"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`h-4 w-4 transition-transform ${isDirectoryExpanded ? 'rotate-180' : ''}`}
                            >
                              <path d="m6 9 6 6 6-6"/>
                            </svg>
                          </Button>
                        </div>
                        <div 
                          className={`
                            overflow-hidden transition-all duration-300 
                            ${isDirectoryExpanded ? 'max-h-64' : 'max-h-12'}
                            space-y-1.5 text-xs text-muted-foreground
                          `}
                        >
                          {book.directories?.map((dir, index) => (
                            <div 
                              key={index} 
                              className={`
                                pl-${dir.startsWith('├─') ? '4' : '0'} 
                                ${dir.startsWith('└─') ? 'border-l-2 border-primary/30 pl-4' : ''}
                              `}
                            >
                              {dir.replace(/^[├└─\s]+/, '')}
                            </div>
                          ))}
                        </div>
                        {!isDirectoryExpanded && book.directories && book.directories.length > 5 && (
                          <p className="text-xs text-muted-foreground mt-1">
                            还有 {book.directories.length - 5} 个目录...
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* 右侧内容区 */}
                <div className="lg:col-span-9 h-full overflow-y-auto pr-2">
                  <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none h-full overflow-y-auto">
                    <h1 className="mb-2">{book.title}</h1>
                    <p className="text-muted-foreground lead">{book.description}</p>
                    
                    {/* 页面内容预览 */}
                    <div className="not-prose my-6 bg-muted/30 rounded-lg p-6">
                      <h2 className="text-xl font-semibold mb-4">第 {currentPage} 页 内容预览 (非原文；AI 生成示例)</h2>
                      <p className="text-base mb-4">
                        {getCurrentPageContent().text || "暂无页面内容预览"}
                      </p>
                      
                      {getCurrentPageContent().keywords && getCurrentPageContent().keywords.length > 0 && (
                        <div className="mb-4">
                          <h3 className="text-lg font-medium mb-2">关键词</h3>
                          <div className="flex flex-wrap gap-2">
                            {(getCurrentPageContent().keywords || []).map((keyword, index) => (
                              <span 
                                key={index} 
                                className="px-2 py-1 bg-primary/60 text-primary-foreground rounded-md text-xs font-medium border border-primary/30 shadow-sm hover:bg-primary/25 transition-colors"
                              >
                                {keyword}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {getCurrentPageContent().imageDescriptions && getCurrentPageContent().imageDescriptions.length > 0 && (
                        <div>
                          <h3 className="text-lg font-medium mb-2">图像描述</h3>
                          <ul className="list-disc list-inside text-muted-foreground">
                            {(getCurrentPageContent().imageDescriptions || []).map((desc, index) => (
                              <li key={index} className="text-sm">{desc}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t p-3 sm:p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 bg-muted">
        <div className="flex items-center gap-2 justify-center sm:justify-start">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 sm:flex-none"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4"
            >
              <path d="m12 19-7-7 7-7M5 12h14" />
            </svg>
            上一页
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 sm:flex-none"
            disabled={currentPage === (book.readingMode?.totalPages || 1)}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            下一页
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 h-4 w-4"
            >
              <path d="m12 5 7 7-7 7M19 12H5" />
            </svg>
          </Button>
        </div>
        <div className="text-center sm:text-left my-1 sm:my-0">
          <span className="text-sm text-muted-foreground">
            页面 {currentPage} / {book.readingMode?.totalPages}
          </span>
        </div>
        <div className="flex justify-center sm:justify-end w-full sm:w-auto">
          <a 
            href={book.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-3 py-1.5 rounded-md bg-accent text-accent-foreground hover:bg-accent/80 transition-colors w-full sm:w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            下载
          </a>
        </div>
      </div>
    </div>
  );
}

// 自定义BookCard组件，添加阅读按钮
function EnhancedBookCard({ book, onRead }: { book: Book, onRead: (book: Book) => void }) {
  const [isDirectoryExpanded, setIsDirectoryExpanded] = useState(false);
  
  return (
    <div className="rounded-xl border bg-muted/50 p-6">
      <img 
        src={`/covers/${book.id}.jpg`} 
        alt={book.title}
        className="mb-4 aspect-video rounded-lg bg-muted object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "/covers/default.jpg";
        }}
      />
      <h3 className="mb-2 text-lg font-semibold">{book.title}</h3>
      <p className="mb-4 text-sm text-muted-foreground">{book.description}</p>
      <div className="flex items-center justify-between">
        <span className={`text-sm ${
          book.status === "completed" ? "text-chart-2" : 
          book.status === "reading" ? "text-chart-1" : "text-muted-foreground"
        }`}>
          {book.progress}%
        </span>
        <div className="h-2 w-24 rounded-full bg-muted">
          <div 
            className="h-full rounded-full bg-chart-3 transition-all" 
            style={{ width: `${book.progress}%` }}
          />
        </div>
      </div>

      <div className="mt-4 space-y-3 border-t pt-4">
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex-1 min-w-[200px]">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-muted-foreground">书籍目录</h4>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsDirectoryExpanded(!isDirectoryExpanded)}
                className="h-6 px-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`h-4 w-4 transition-transform ${isDirectoryExpanded ? 'rotate-180' : ''}`}
                >
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </Button>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${isDirectoryExpanded ? 'max-h-48' : 'max-h-12'}`}>
              <ul className="space-y-1.5">
                {book.directories?.map((dir, i) => (
                  <li key={i} className="flex items-center text-muted-foreground">
                    <span className="mr-2">📁</span>
                    {dir}
                  </li>
                ))}
              </ul>
            </div>
            {!isDirectoryExpanded && book.directories && book.directories.length > 2 && (
              <p className="text-xs text-muted-foreground mt-1">
                还有 {book.directories.length - 2} 个目录...
              </p>
            )}
          </div>

          <div className="flex-1 min-w-[200px]">
            <h4 className="font-medium mb-2 text-muted-foreground">操作</h4>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onRead(book)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                阅读
              </Button>
              <a 
                href={book.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 rounded-md bg-accent text-accent-foreground hover:bg-accent/80 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                下载
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MRIBookshelfPage() {
  const [books, setBooks] = useState(initialBooks);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentFilter, setCurrentFilter] = useState("all");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isReaderOpen, setIsReaderOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"gallery" | "list" | "card">("card");
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // 新书表单状态
  const [newBook, setNewBook] = useState({
    title: "",
    description: "",
    status: "reading",
    directories: "",
    downloadUrl: "",
    file: null as File | null
  });

  // 过滤和搜索书籍
  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          book.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (currentFilter === "all") return matchesSearch;
    return book.status === currentFilter && matchesSearch;
  });

  // 处理文件选择
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setNewBook({...newBook, file});
      
      // 如果标题为空，使用文件名作为标题
      if (!newBook.title) {
        const fileName = file.name.replace(/\.[^/.]+$/, ""); // 移除扩展名
        setNewBook(prev => ({...prev, title: fileName}));
      }
    }
  };

  // 处理文件上传
  const handleFileUpload = () => {
    if (!newBook.file) return;
    
    setIsUploading(true);
    
    // 模拟上传过程
    setTimeout(() => {
      // 在实际应用中，这里应该是一个真正的文件上传API调用
      const uploadUrl = newBook.file ? URL.createObjectURL(newBook.file) : '';
      
      const bookToAdd = {
        id: books.length + 1,
        title: newBook.title,
        cover: "/covers/default.jpg", // 默认封面
        description: newBook.description || `${newBook.title} - 上传于 ${new Date().toLocaleDateString()}`,
        status: newBook.status as 'reading' | 'completed' | 'paused',
        progress: newBook.status === "completed" ? 100 : 0,
        directories: newBook.directories ? newBook.directories.split(",").map(dir => dir.trim()) : ["上传文件"],
        downloadUrl: newBook.downloadUrl || uploadUrl
      };

      setBooks([...books, bookToAdd]);
      setIsDialogOpen(false);
      setIsUploading(false);
      
      toast({
        title: "成功上传书籍",
        description: `《${newBook.title}》已添加到您的书架`,
      });

      // 重置表单
      setNewBook({
        title: "",
        description: "",
        status: "reading",
        directories: "",
        downloadUrl: "",
        file: null
      });
      
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }, 1500);
  };

  // 处理添加新书
  const handleAddBook = () => {
    if (newBook.file) {
      handleFileUpload();
      return;
    }
    
    const bookToAdd = {
      id: books.length + 1,
      title: newBook.title,
      cover: "/covers/default.jpg", // 默认封面
      description: newBook.description,
      status: newBook.status as 'reading' | 'completed' | 'paused',
      progress: newBook.status === "completed" ? 100 : 0,
      directories: newBook.directories ? newBook.directories.split(",").map(dir => dir.trim()) : [],
      downloadUrl: newBook.downloadUrl
    };

    setBooks([...books, bookToAdd]);
    setIsDialogOpen(false);
    toast({
      title: "成功添加书籍",
      description: `《${newBook.title}》已添加到您的书架`,
    });

    // 重置表单
    setNewBook({
      title: "",
      description: "",
      status: "reading",
      directories: "",
      downloadUrl: "",
      file: null
    });
  };

  // 处理阅读书籍
  const handleReadBook = (book: Book) => {
    setSelectedBook(book);
    setIsReaderOpen(true);
  };

  // 关闭阅读器
  const handleCloseReader = () => {
    setIsReaderOpen(false);
    setSelectedBook(null);
  };

  // 书单列表视图组件
  function BookListView({ book, onRead }: { book: Book, onRead: (book: Book) => void }) {
    return (
      <div className="flex flex-col sm:flex-row sm:items-center border-b py-4 last:border-b-0">
        <img 
          src={`/covers/${book.id}.jpg`} 
          alt={book.title}
          className="h-24 w-24 sm:h-16 sm:w-16 rounded-md object-cover mx-auto sm:mx-0 sm:mr-4 mb-3 sm:mb-0"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/covers/default.jpg";
          }}
        />
        <div className="flex-1 min-w-0 text-center sm:text-left">
          <h3 className="font-semibold truncate">{book.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-1">{book.description}</p>
          <div className="flex items-center mt-1 justify-center sm:justify-start">
            <span className={`text-xs mr-2 ${
              book.status === "completed" ? "text-chart-2" : 
              book.status === "reading" ? "text-chart-1" : "text-muted-foreground"
            }`}>
              {book.progress}%
            </span>
            <div className="h-1.5 w-24 rounded-full bg-muted">
              <div 
                className="h-full rounded-full bg-chart-3 transition-all" 
                style={{ width: `${book.progress}%` }}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3 sm:mt-0 sm:ml-4 justify-center sm:justify-start">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => onRead(book)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            阅读
          </Button>
          <a 
            href={book.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1.5 rounded-md bg-accent text-accent-foreground hover:bg-accent/80 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            下载
          </a>
        </div>
      </div>
    );
  }

  // 画廊视图组件
  function GalleryView({ book, onRead }: { book: Book, onRead: (book: Book) => void }) {
    return (
      <div className="relative group">
        <div className="aspect-[2/3] overflow-hidden rounded-lg">
          <img 
            src={`/covers/${book.id}.jpg`} 
            alt={book.title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/covers/default.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
            <h3 className="text-white font-semibold">{book.title}</h3>
            <p className="text-white/80 text-sm line-clamp-2">{book.description}</p>
            <div className="flex items-center mt-2 gap-2">
              <Button 
                variant="secondary" 
                size="sm"
                onClick={() => onRead(book)}
                className="text-xs"
              >
                阅读
              </Button>
              <a 
                href={book.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-2 py-1 rounded-md bg-accent/80 text-white text-xs hover:bg-accent transition-colors"
              >
                下载
              </a>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <h3 className="font-medium truncate">{book.title}</h3>
          <div className="flex items-center mt-1">
            <span className={`text-xs mr-2 ${
              book.status === "completed" ? "text-chart-2" : 
              book.status === "reading" ? "text-chart-1" : "text-muted-foreground"
            }`}>
              {book.progress}%
            </span>
            <div className="h-1.5 w-full rounded-full bg-muted">
              <div 
                className="h-full rounded-full bg-chart-3 transition-all" 
                style={{ width: `${book.progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 渲染书籍内容的函数
  const renderBooks = (books: Book[]) => {
    if (books.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="rounded-full bg-muted p-6 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-10 w-10 text-muted-foreground"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold">没有找到书籍</h3>
          <p className="text-muted-foreground max-w-md mt-2">
            尝试使用不同的搜索词或添加新书籍到您的书架
          </p>
        </div>
      );
    }

    switch (viewMode) {
      case "gallery":
        return (
          <div className="grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {books.map((book) => (
              <GalleryView key={book.id} book={book} onRead={handleReadBook} />
            ))}
          </div>
        );
      case "list":
        return (
          <div className="divide-y">
            {books.map((book) => (
              <BookListView key={book.id} book={book} onRead={handleReadBook} />
            ))}
          </div>
        );
      case "card":
      default:
        return (
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((book) => (
              <EnhancedBookCard key={book.id} book={book} onRead={handleReadBook} />
            ))}
          </div>
        );
    }
  };

  return (
    <div className="container py-4 sm:py-6 space-y-4 sm:space-y-6 px-3 sm:px-4 relative z-0">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">我的MRI书架</h1>
          <p className="text-sm sm:text-base text-muted-foreground">管理和阅读您的MRI学习资料</p>
        </div>
        
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex items-center w-full sm:w-80 group search-container">
            <div className="relative w-full">
              <Input
                placeholder="搜索书籍..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-16 h-10 bg-background border-muted focus-visible:ring-accent-foreground focus-visible:border-transparent transition-all duration-300 group-hover:border-accent rounded-lg shadow-sm hover:shadow"
                onKeyDown={(e) => e.key === 'Enter' && setSearchTerm(e.currentTarget.value)}
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-hover:text-accent-foreground transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm("")}
                  className="absolute right-[70px] top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-200 p-1 rounded-full hover:bg-muted"
                  aria-label="清除搜索"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              )}
              <button
                onClick={() => {/* 搜索逻辑已经通过输入框的onChange实现 */}}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground hover:bg-primary/90 h-7 px-3 rounded-md text-xs font-medium transition-colors duration-300 transform hover:scale-105 active:scale-95"
                aria-label="搜索"
              >
                搜索
              </button>
            </div>
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
                添加书籍
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>添加新书籍</DialogTitle>
                <DialogDescription>
                  添加您的MRI学习资料到个人书架
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-3 sm:gap-4 py-3 sm:py-4">
                <div className="grid gap-2">
                  <Label htmlFor="file">上传文件</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      ref={fileInputRef}
                      id="file"
                      type="file"
                      accept=".pdf,.epub,.mobi,.doc,.docx"
                      onChange={handleFileChange}
                      className="flex-1 text-xs sm:text-sm"
                    />
                  </div>
                  {newBook.file && (
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      已选择: {newBook.file.name} ({Math.round(newBook.file.size / 1024)} KB)
                    </p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="title">书籍标题</Label>
                  <Input
                    id="title"
                    value={newBook.title}
                    onChange={(e) => setNewBook({...newBook, title: e.target.value})}
                    placeholder="例如：Brain Imaging"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">书籍描述</Label>
                  <Textarea
                    id="description"
                    value={newBook.description}
                    onChange={(e) => setNewBook({...newBook, description: e.target.value})}
                    placeholder="简要描述书籍内容..."
                    className="min-h-[80px]"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="status">阅读状态</Label>
                  <Select 
                    value={newBook.status} 
                    onValueChange={(value) => setNewBook({...newBook, status: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="选择阅读状态" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="reading">正在阅读</SelectItem>
                      <SelectItem value="completed">已完成</SelectItem>
                      <SelectItem value="paused">已暂停</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="directories">目录分类（用逗号分隔）</Label>
                  <Input
                    id="directories"
                    value={newBook.directories}
                    onChange={(e) => setNewBook({...newBook, directories: e.target.value})}
                    placeholder="例如：解剖,影像,病理"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="downloadUrl">下载链接 (可选，如已上传文件则不需要)</Label>
                  <Input
                    id="downloadUrl"
                    value={newBook.downloadUrl}
                    onChange={(e) => setNewBook({...newBook, downloadUrl: e.target.value})}
                    placeholder="例如：https://example.com/download"
                    className="text-xs sm:text-sm"
                  />
                </div>
              </div>
              <DialogFooter className="mt-2 sm:mt-0">
                <Button 
                  onClick={handleAddBook} 
                  disabled={!newBook.title || isUploading}
                  className="w-full sm:w-auto"
                >
                  {isUploading ? "上传中..." : "添加"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* 阅读器对话框 */}
      {isReaderOpen && selectedBook && (
        <Dialog open={isReaderOpen} onOpenChange={setIsReaderOpen}>
          <DialogContent 
            hideCloseButton={true} 
            className="max-w-5xl w-[95vw] h-[90vh] sm:h-[80vh] p-0 overflow-hidden bg-card"
          >
            <BookReader book={selectedBook} onClose={handleCloseReader} />
          </DialogContent>
        </Dialog>
      )}

      <div className="flex items-center justify-between mb-6">
        <div className="flex-1">
          {/* 搜索结果计数 */}
          {searchTerm && (
            <div className="text-sm text-muted-foreground mb-4 animate-fadeIn search-results">
              找到 <span className="font-medium">{filteredBooks.length}</span> 本相关书籍
            </div>
          )}
          
          <Tabs defaultValue="all" className="w-full" onValueChange={setCurrentFilter}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <TabsList className="w-full sm:w-auto overflow-x-auto">
                <TabsTrigger value="all">全部</TabsTrigger>
                <TabsTrigger value="reading">正在阅读</TabsTrigger>
                <TabsTrigger value="completed">已完成</TabsTrigger>
                <TabsTrigger value="paused">已暂停</TabsTrigger>
              </TabsList>
              
              {/* 视图切换按钮 */}
              <div className="flex items-center space-x-2 justify-center sm:justify-end">
                <Button 
                  variant={viewMode === "card" ? "default" : "outline"} 
                  size="sm" 
                  onClick={() => setViewMode("card")}
                  className="px-2 sm:px-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <rect width="7" height="7" x="3" y="3" rx="1" />
                    <rect width="7" height="7" x="14" y="3" rx="1" />
                    <rect width="7" height="7" x="14" y="14" rx="1" />
                    <rect width="7" height="7" x="3" y="14" rx="1" />
                  </svg>
                  <span className="hidden sm:inline">卡片</span>
                </Button>
                <Button 
                  variant={viewMode === "gallery" ? "default" : "outline"} 
                  size="sm" 
                  onClick={() => setViewMode("gallery")}
                  className="px-2 sm:px-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <path d="M3 3v18h18" />
                    <rect width="4" height="7" x="7" y="10" rx="1" />
                    <rect width="4" height="12" x="15" y="5" rx="1" />
                  </svg>
                  <span className="hidden sm:inline">画廊</span>
                </Button>
                <Button 
                  variant={viewMode === "list" ? "default" : "outline"} 
                  size="sm" 
                  onClick={() => setViewMode("list")}
                  className="px-2 sm:px-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <line x1="8" y1="6" x2="21" y2="6" />
                    <line x1="8" y1="12" x2="21" y2="12" />
                    <line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" />
                    <line x1="3" y1="12" x2="3.01" y2="12" />
                    <line x1="3" y1="18" x2="3.01" y2="18" />
                  </svg>
                  <span className="hidden sm:inline">列表</span>
                </Button>
              </div>
            </div>
            
            <TabsContent value="all" className="mt-6">
              {renderBooks(filteredBooks)}
            </TabsContent>
            
            <TabsContent value="reading" className="mt-6">
              {renderBooks(filteredBooks)}
            </TabsContent>
            
            <TabsContent value="completed" className="mt-6">
              {renderBooks(filteredBooks)}
            </TabsContent>
            
            <TabsContent value="paused" className="mt-6">
              {renderBooks(filteredBooks)}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
