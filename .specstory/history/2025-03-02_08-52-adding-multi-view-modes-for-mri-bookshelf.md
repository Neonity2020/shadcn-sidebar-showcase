## SpecStory

## Adding Multi-View Modes for MRI Bookshelf (2025/3/2 08:52:04)

_**User**_

增加多视图模式：
1. gallery模式
2. booklist模式

---

_**Assistant**_

我将为您的MRI书架页面添加多视图模式，包括画廊模式和书单模式。

---

_****_

Read file: data/books.ts

---

_****_



现在我将修改页面，添加多视图模式功能：

---

_****_

```diff
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [isReaderOpen, setIsReaderOpen] = useState(false);
+   const [viewMode, setViewMode] = useState<"gallery" | "list" | "card">("card");
    const fileInputRef = useRef<HTMLInputElement>(null);
    
      setSelectedBook(null);
    };
+ 
+   // 书单列表视图组件
+   function BookListView({ book, onRead }: { book: Book, onRead: (book: Book) => void }) {
+     return (
+       <div className="flex items-center border-b py-4 last:border-b-0">
+         <img 
+           src={`/covers/${book.id}.jpg`} 
+           alt={book.title}
+           className="h-16 w-16 rounded-md object-cover mr-4"
+           onError={(e) => {
+             const target = e.target as HTMLImageElement;
+             target.src = "/covers/default.jpg";
+           }}
+         />
+         <div className="flex-1 min-w-0">
+           <h3 className="font-semibold truncate">{book.title}</h3>
+           <p className="text-sm text-muted-foreground line-clamp-1">{book.description}</p>
+           <div className="flex items-center mt-1">
+             <span className={`text-xs mr-2 ${
+               book.status === "completed" ? "text-chart-2" : 
+               book.status === "reading" ? "text-chart-1" : "text-muted-foreground"
+             }`}>
+               {book.progress}%
+             </span>
+             <div className="h-1.5 w-24 rounded-full bg-muted">
+               <div 
+                 className="h-full rounded-full bg-chart-3 transition-all" 
+                 style={{ width: `${book.progress}%` }}
+               />
+             </div>
+           </div>
+         </div>
+         <div className="flex items-center gap-2 ml-4">
+           <Button 
+             variant="outline" 
+             size="sm"
+             onClick={() => onRead(book)}
+           >
+             <svg
+               xmlns="http://www.w3.org/2000/svg"
+               viewBox="0 0 24 24"
+               fill="none"
+               stroke="currentColor"
+               strokeWidth="2"
+               strokeLinecap="round"
+               strokeLinejoin="round"
+               className="mr-2 h-4 w-4"
+             >
+               <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
+               <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
+             </svg>
+             阅读
+           </Button>
+           <a 
+             href={book.downloadUrl}
+             target="_blank"
+             rel="noopener noreferrer"
+             className="inline-flex items-center px-3 py-1.5 rounded-md bg-accent text-accent-foreground hover:bg-accent/80 transition-colors"
+           >
+             <svg
+               xmlns="http://www.w3.org/2000/svg"
+               viewBox="0 0 24 24"
+               fill="none"
+               stroke="currentColor"
+               strokeWidth="2"
+               strokeLinecap="round"
+               strokeLinejoin="round"
+               className="mr-2 h-4 w-4"
+             >
+               <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
+               <polyline points="7 10 12 15 17 10" />
+               <line x1="12" y1="15" x2="12" y2="3" />
+             </svg>
+             下载
+           </a>
+         </div>
+       </div>
+     );
+   }
+ 
+   // 画廊视图组件
+   function GalleryView({ book, onRead }: { book: Book, onRead: (book: Book) => void }) {
+     return (
+       <div className="relative group">
+         <div className="aspect-[2/3] overflow-hidden rounded-lg">
+           <img 
+             src={`/covers/${book.id}.jpg`} 
+             alt={book.title}
+             className="w-full h-full object-cover transition-transform group-hover:scale-105"
+             onError={(e) => {
+               const target = e.target as HTMLImageElement;
+               target.src = "/covers/default.jpg";
+             }}
+           />
+           <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
+             <h3 className="text-white font-semibold">{book.title}</h3>
+             <p className="text-white/80 text-sm line-clamp-2">{book.description}</p>
+             <div className="flex items-center mt-2 gap-2">
+               <Button 
+                 variant="secondary" 
+                 size="sm"
+                 onClick={() => onRead(book)}
+                 className="text-xs"
+               >
+                 阅读
+               </Button>
+               <a 
+                 href={book.downloadUrl}
+                 target="_blank"
+                 rel="noopener noreferrer"
+                 className="inline-flex items-center px-2 py-1 rounded-md bg-accent/80 text-white text-xs hover:bg-accent transition-colors"
+               >
+                 下载
+               </a>
+             </div>
+           </div>
+         </div>
+         <div className="mt-2">
+           <h3 className="font-medium truncate">{book.title}</h3>
+           <div className="flex items-center mt-1">
+             <span className={`text-xs mr-2 ${
+               book.status === "completed" ? "text-chart-2" : 
+               book.status === "reading" ? "text-chart-1" : "text-muted-foreground"
+             }`}>
+               {book.progress}%
+             </span>
+             <div className="h-1.5 w-full rounded-full bg-muted">
+               <div 
+                 className="h-full rounded-full bg-chart-3 transition-all" 
+                 style={{ width: `${book.progress}%` }}
+               />
+             </div>
+           </div>
+         </div>
+       </div>
+     );
+   }
+ 
+   // 渲染书籍内容的函数
+   const renderBooks = (books: Book[]) => {
+     if (books.length === 0) {
+       return (
+         <div className="flex flex-col items-center justify-center py-12 text-center">
+           <div className="rounded-full bg-muted p-6 mb-4">
+             <svg
+               xmlns="http://www.w3.org/2000/svg"
+               viewBox="0 0 24 24"
+               fill="none"
+               stroke="currentColor"
+               strokeWidth="2"
+               strokeLinecap="round"
+               strokeLinejoin="round"
+               className="h-10 w-10 text-muted-foreground"
+             >
+               <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
+             </svg>
+           </div>
+           <h3 className="text-lg font-semibold">没有找到书籍</h3>
+           <p className="text-muted-foreground max-w-md mt-2">
+             尝试使用不同的搜索词或添加新书籍到您的书架
+           </p>
+         </div>
+       );
+     }
+ 
+     switch (viewMode) {
+       case "gallery":
+         return (
+           <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
+             {books.map((book) => (
+               <GalleryView key={book.id} book={book} onRead={handleReadBook} />
+             ))}
+           </div>
+         );
+       case "list":
+         return (
+           <div className="divide-y">
+             {books.map((book) => (
+               <BookListView key={book.id} book={book} onRead={handleReadBook} />
+             ))}
+           </div>
+         );
+       case "card":
+       default:
+         return (
+           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
+             {books.map((book) => (
+               <EnhancedBookCard key={book.id} book={book} onRead={handleReadBook} />
+             ))}
+           </div>
+         );
+     }
+   };
  
    return (
        )}
  
-       <Tabs defaultValue="all" className="w-full" onValueChange={setCurrentFilter}>
-         <TabsList className="mb-6">
-           <TabsTrigger value="all">全部</TabsTrigger>
-           <TabsTrigger value="reading">正在阅读</TabsTrigger>
-           <TabsTrigger value="completed">已完成</TabsTrigger>
-           <TabsTrigger value="paused">已暂停</TabsTrigger>
-         </TabsList>
-         
-         <TabsContent value="all" className="mt-0">
-           {filteredBooks.length === 0 ? (
-             <div className="flex flex-col items-center justify-center py-12 text-center">
-               <div className="rounded-full bg-muted p-6 mb-4">
-                 <svg
-                   xmlns="http://www.w3.org/2000/svg"
-                   viewBox="0 0 24 24"
-                   fill="none"
-                   stroke="currentColor"
-                   strokeWidth="2"
-                   strokeLinecap="round"
-                   strokeLinejoin="round"
-                   className="h-10 w-10 text-muted-foreground"
-                 >
-                   <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
-                 </svg>
-               </div>
-               <h3 className="text-lg font-semibold">没有找到书籍</h3>
-               <p className="text-muted-foreground max-w-md mt-2">
-                 尝试使用不同的搜索词或添加新书籍到您的书架
-               </p>
-             </div>
-           ) : (
-             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
-               {filteredBooks.map((book) => (
-                 <EnhancedBookCard key={book.id} book={book} onRead={handleReadBook} />
-               ))}
-             </div>
-           )}
-         </TabsContent>
-         
-         <TabsContent value="reading" className="mt-0">
-           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
-             {filteredBooks.map((book) => (
-               <EnhancedBookCard key={book.id} book={book} onRead={handleReadBook} />
-             ))}
-           </div>
-         </TabsContent>
-         
-         <TabsContent value="completed" className="mt-0">
-           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
-             {filteredBooks.map((book) => (
-               <EnhancedBookCard key={book.id} book={book} onRead={handleReadBook} />
-             ))}
-           </div>
-         </TabsContent>
-         
-         <TabsContent value="paused" className="mt-0">
-           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
-             {filteredBooks.map((book) => (
-               <EnhancedBookCard key={book.id} book={book} onRead={handleReadBook} />
-             ))}
-           </div>
-         </TabsContent>
-       </Tabs>
+       <div className="flex items-center justify-between">
+         <Tabs defaultValue="all" className="w-full" onValueChange={setCurrentFilter}>
+           <TabsList className="mb-6">
+             <TabsTrigger value="all">全部</TabsTrigger>
+             <TabsTrigger value="reading">正在阅读</TabsTrigger>
+             <TabsTrigger value="completed">已完成</TabsTrigger>
+             <TabsTrigger value="paused">已暂停</TabsTrigger>
+           </TabsList>
+         </Tabs>
+         
+         {/* 视图切换按钮 */}
+         <div className="flex items-center space-x-2 mb-6">
+           <Button 
+             variant={viewMode === "card" ? "default" : "outline"} 
+             size="sm" 
+             onClick={() => setViewMode("card")}
+             className="px-3"
+           >
+             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
+               <rect width="7" height="7" x="3" y="3" rx="1" />
+               <rect width="7" height="7" x="14" y="3" rx="1" />
+               <rect width="7" height="7" x="14" y="14" rx="1" />
+               <rect width="7" height="7" x="3" y="14" rx="1" />
+             </svg>
+             卡片
+           </Button>
+           <Button 
+             variant={viewMode === "gallery" ? "default" : "outline"} 
+             size="sm" 
+             onClick={() => setViewMode("gallery")}
+             className="px-3"
+           >
+             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
+               <path d="M3 3v18h18" />
+               <rect width="4" height="7" x="7" y="10" rx="1" />
+               <rect width="4" height="12" x="15" y="5" rx="1" />
+             </svg>
+             画廊
+           </Button>
+           <Button 
+             variant={viewMode === "list" ? "default" : "outline"} 
+             size="sm" 
+             onClick={() => setViewMode("list")}
+             className="px-3"
+           >
+             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
+               <line x1="8" y1="6" x2="21" y2="6" />
+               <line x1="8" y1="12" x2="21" y2="12" />
+               <line x1="8" y1="18" x2="21" y2="18" />
+               <line x1="3" y1="6" x2="3.01" y2="6" />
+               <line x1="3" y1="12" x2="3.01" y2="12" />
+               <line x1="3" y1="18" x2="3.01" y2="18" />
+             </svg>
+             列表
+           </Button>
+         </div>
+       </div>
+         
+       <TabsContent value="all" className="mt-0">
+         {renderBooks(filteredBooks)}
+       </TabsContent>
+       
+       <TabsContent value="reading" className="mt-0">
+         {renderBooks(filteredBooks)}
+       </TabsContent>
+       
+       <TabsContent value="completed" className="mt-0">
+         {renderBooks(filteredBooks)}
+       </TabsContent>
+       
+       <TabsContent value="paused" className="mt-0">
+         {renderBooks(filteredBooks)}
+       </TabsContent>
      </div>
    );
```

---

_****_



我已经成功地为您的MRI书架页面添加了多视图模式功能。现在用户可以在三种不同的视图模式之间切换：

## 已实现的功能

1. **三种视图模式**：
   - **卡片模式（默认）**：原有的详细卡片视图，显示书籍的完整信息和目录
   - **画廊模式**：紧凑的网格布局，突出显示书籍封面，鼠标悬停时显示更多信息
   - **列表模式**：行式布局，适合快速浏览大量书籍

2. **视图切换按钮**：
   - 在页面顶部添加了三个带图标的按钮，用于切换不同的视图模式
   - 当前选中的视图模式按钮会高亮显示

3. **响应式设计**：
   - 所有视图模式都针对不同屏幕尺寸进行了优化
   - 画廊模式在大屏幕上可显示更多列（最多6列）
   - 列表模式在小屏幕上也能保持良好的可读性

## 技术实现细节

1. **状态管理**：
   - 添加了`viewMode`状态来跟踪当前选择的视图模式
   - 默认值设为"card"（卡片模式）

2. **组件设计**：
   - 为每种视图模式创建了专用的组件：`EnhancedBookCard`（原有）、`GalleryView`和`BookListView`
   - 使用`renderBooks`函数根据当前视图模式渲染相应的组件

3. **UI优化**：
   - 画廊视图添加了悬停效果，显示渐变背景和操作按钮
   - 列表视图设计为紧凑的行式布局，便于快速浏览
   - 所有视图都保留了进度条和状态指示

## 使用方法

用户可以通过点击页面顶部的视图切换按钮来更改书籍的显示方式：

1. **卡片视图**：适合详细浏览书籍信息和目录
2. **画廊视图**：适合视觉化浏览，突出封面设计
3. **列表视图**：适合快速浏览大量书籍

这些视图模式可以与现有的筛选和搜索功能无缝配合，为用户提供灵活的浏览体验。

您现在可以根据个人喜好或不同的使用场景选择最适合的视图模式来浏览您的MRI学习资料。

---

_**User**_

Error: `TabsContent` must be used within `Tabs`
    at useContext2 (http://localhost:3000/_next/static/chunks/node_modules__pnpm_643a84._.js:480:19)
    at TabsContent (http://localhost:3000/_next/static/chunks/node_modules__pnpm_09ac6c._.js:143:21)
    at react-stack-bottom-frame (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:13403:24)
    at renderWithHooks (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:2977:24)
    at updateForwardRef (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:4638:21)
    at beginWork (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:5421:24)
    at runWithFiberInDEV (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:631:20)
    at performUnitOfWork (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:7955:97)
    at workLoopSync (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:7847:40)
    at renderRootSync (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:7830:13)
    at performWorkOnRoot (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:7589:56)
    at performWorkOnRootViaSchedulerTask (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_react-dom_78bccc._.js:8394:9)
    at MessagePort.performWorkUntilDeadline (http://localhost:3000/_next/static/chunks/7d341_next_dist_compiled_3d6fe6._.js:2353:64)

---

_**Assistant**_

## 修复 TabsContent 错误

我看到了问题所在。错误信息显示 `TabsContent` 必须在 `Tabs` 组件内使用，但在我们的代码中，`TabsContent` 组件位于 `Tabs` 组件之外。我将修复这个问题。

---

_****_



---

_****_



让我尝试另一种方式修复这个问题：

---

_****_

```diff
        )}
  
+       <div className="flex items-center justify-between mb-6">
+         <div className="flex-1">
+           <Tabs defaultValue="all" className="w-full" onValueChange={setCurrentFilter}>
              <div className="flex items-center justify-between">
-         <Tabs defaultValue="all" className="w-full" onValueChange={setCurrentFilter}>
-           <TabsList className="mb-6">
+               <TabsList>
                  <TabsTrigger value="all">全部</TabsTrigger>
                  <TabsTrigger value="reading">正在阅读</TabsTrigger>
                  <TabsTrigger value="completed">已完成</TabsTrigger>
                  <TabsTrigger value="paused">已暂停</TabsTrigger>
                </TabsList>
-         </Tabs>
                
                {/* 视图切换按钮 */}
-         <div className="flex items-center space-x-2 mb-6">
+               <div className="flex items-center space-x-2">
                  <Button 
                    variant={viewMode === "card" ? "default" : "outline"} 
              </div>
              
-       <TabsContent value="all" className="mt-0">
+             <TabsContent value="all" className="mt-6">
                {renderBooks(filteredBooks)}
              </TabsContent>
              
-       <TabsContent value="reading" className="mt-0">
+             <TabsContent value="reading" className="mt-6">
                {renderBooks(filteredBooks)}
              </TabsContent>
              
-       <TabsContent value="completed" className="mt-0">
+             <TabsContent value="completed" className="mt-6">
                {renderBooks(filteredBooks)}
              </TabsContent>
              
-       <TabsContent value="paused" className="mt-0">
+             <TabsContent value="paused" className="mt-6">
                {renderBooks(filteredBooks)}
              </TabsContent>
+           </Tabs>
+         </div>
+       </div>
      </div>
    );
```

---

_****_





很好，我已经修复了 `TabsContent` 必须在 `Tabs` 内部使用的错误。现在让我解释一下所做的更改：

## 修复的问题

我重新组织了页面的布局结构，确保所有的 `TabsContent` 组件都位于 `Tabs` 组件内部，这符合组件库的要求。具体修改如下：

1. 创建了一个包含整个标签和视图切换部分的外层容器，设置了合适的边距
2. 将 `TabsList` 和视图切换按钮放在同一行，使用 `flex` 布局实现两端对齐
3. 将所有 `TabsContent` 组件移到 `Tabs` 组件内部
4. 调整了边距，使布局更加协调

## 修改后的结构

```
<div className="flex items-center justify-between mb-6">
  <div className="flex-1">
    <Tabs>
      <div className="flex items-center justify-between">
        <TabsList>...</TabsList>
        <视图切换按钮>...</视图切换按钮>
      </div>
      <TabsContent>...</TabsContent>
      <TabsContent>...</TabsContent>
      ...
    </Tabs>
  </div>
</div>
```

这种结构确保了 `TabsContent` 组件在 `Tabs` 组件的上下文中使用，同时保持了原有的功能和布局。

## 视觉效果

修改后的页面布局保持了原有的设计风格，但解决了组件嵌套的问题：

1. 标签选项（全部、正在阅读等）位于左侧
2. 视图切换按钮（卡片、画廊、列表）位于右侧
3. 内容区域根据选择的标签和视图模式显示相应的内容

现在页面应该可以正常工作，不会再出现 `TabsContent must be used within Tabs` 的错误。

---

_**User**_

对移动端响应式设计进行优化

---

_**Assistant**_

# 移动端响应式设计优化

我将对MRI书架页面的移动端响应式设计进行优化，确保在小屏幕设备上有更好的用户体验。

---

_****_

```diff
          <div className="flex-1">
            <Tabs defaultValue="all" className="w-full" onValueChange={setCurrentFilter}>
-             <div className="flex items-center justify-between">
-               <TabsList>
+             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
+               <TabsList className="w-full sm:w-auto overflow-x-auto">
                  <TabsTrigger value="all">全部</TabsTrigger>
                  <TabsTrigger value="reading">正在阅读</TabsTrigger>
                
                {/* 视图切换按钮 */}
-               <div className="flex items-center space-x-2">
+               <div className="flex items-center space-x-2 justify-center sm:justify-end">
                  <Button 
                    variant={viewMode === "card" ? "default" : "outline"} 
                    size="sm" 
                    onClick={() => setViewMode("card")}
-                   className="px-3"
+                   className="px-2 sm:px-3"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <rect width="7" height="7" x="3" y="14" rx="1" />
                    </svg>
-                   卡片
+                   <span className="hidden sm:inline">卡片</span>
                  </Button>
                  <Button 
                    variant={viewMode === "gallery" ? "default" : "outline"} 
                    size="sm" 
                    onClick={() => setViewMode("gallery")}
-                   className="px-3"
+                   className="px-2 sm:px-3"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <rect width="4" height="12" x="15" y="5" rx="1" />
                    </svg>
-                   画廊
+                   <span className="hidden sm:inline">画廊</span>
                  </Button>
                  <Button 
                    variant={viewMode === "list" ? "default" : "outline"} 
                    size="sm" 
                    onClick={() => setViewMode("list")}
-                   className="px-3"
+                   className="px-2 sm:px-3"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <line x1="3" y1="18" x2="3.01" y2="18" />
                    </svg>
-                   列表
+                   <span className="hidden sm:inline">列表</span>
                  </Button>
                </div>
```

---

_****_





现在让我们继续优化其他部分的移动端响应式设计：

---

_****_

```diff
  
    return (
-     <div className="container py-6 space-y-6 px-4">
-       <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
+     <div className="container py-4 sm:py-6 space-y-4 sm:space-y-6 px-3 sm:px-4">
+       <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
-           <h1 className="text-3xl font-bold tracking-tight">我的MRI书架</h1>
-           <p className="text-muted-foreground">管理和阅读您的MRI学习资料</p>
+           <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">我的MRI书架</h1>
+           <p className="text-sm sm:text-base text-muted-foreground">管理和阅读您的MRI学习资料</p>
          </div>
          
-         <div className="flex flex-col gap-4 sm:flex-row">
+         <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative w-full sm:w-64">
              <Input
```

---

_****_







现在让我们优化书籍视图组件的移动端响应式设计：

---

_****_

```diff
    function BookListView({ book, onRead }: { book: Book, onRead: (book: Book) => void }) {
      return (
-       <div className="flex items-center border-b py-4 last:border-b-0">
+       <div className="flex flex-col sm:flex-row sm:items-center border-b py-4 last:border-b-0">
          <img 
            src={`/covers/${book.id}.jpg`} 
            alt={book.title}
-           className="h-16 w-16 rounded-md object-cover mr-4"
+           className="h-24 w-24 sm:h-16 sm:w-16 rounded-md object-cover mx-auto sm:mx-0 sm:mr-4 mb-3 sm:mb-0"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/covers/default.jpg";
            }}
          />
-         <div className="flex-1 min-w-0">
+         <div className="flex-1 min-w-0 text-center sm:text-left">
            <h3 className="font-semibold truncate">{book.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-1">{book.description}</p>
-           <div className="flex items-center mt-1">
+           <div className="flex items-center mt-1 justify-center sm:justify-start">
              <span className={`text-xs mr-2 ${
                book.status === "completed" ? "text-chart-2" : 
            </div>
          </div>
-         <div className="flex items-center gap-2 ml-4">
+         <div className="flex items-center gap-2 mt-3 sm:mt-0 sm:ml-4 justify-center sm:justify-start">
            <Button 
              variant="outline" 
        case "gallery":
          return (
-           <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
+           <div className="grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {books.map((book) => (
                <GalleryView key={book.id} book={book} onRead={handleReadBook} />
        default:
          return (
-           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
+           <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {books.map((book) => (
                <EnhancedBookCard key={book.id} book={book} onRead={handleReadBook} />
```

---

_****_



---



---

