import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, ClockIcon } from "lucide-react"

interface BlogAuthor {
  name: string
  avatar?: string
  role?: string
}

export interface BlogPostProps {
  title: string
  description?: string
  date: string
  readingTime?: string
  author?: BlogAuthor
  tags?: string[]
  coverImage?: string
  className?: string
  children: React.ReactNode
}

export function BlogPost({
  title,
  description,
  date,
  readingTime,
  author,
  tags,
  coverImage,
  className,
  children,
}: BlogPostProps) {
  const formattedDate = new Date(date).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <article className={cn("container mx-auto py-10", className)}>
      {/* 封面图片 */}
      {coverImage && (
        <div className="relative mb-8 h-[350px] w-full overflow-hidden rounded-xl">
          <img
            src={coverImage}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}

      {/* 文章头部信息 */}
      <div className="mb-10">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        
        {description && (
          <p className="mt-4 text-xl text-muted-foreground">
            {description}
          </p>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {/* 作者信息 */}
          {author && (
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                {author.avatar && <AvatarImage src={author.avatar} alt={author.name} />}
                <AvatarFallback>{author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-foreground">{author.name}</p>
                {author.role && <p className="text-xs">{author.role}</p>}
              </div>
            </div>
          )}

          {/* 发布日期 */}
          <div className="flex items-center gap-1">
            <CalendarIcon className="h-4 w-4" />
            <span>{formattedDate}</span>
          </div>

          {/* 阅读时间 */}
          {readingTime && (
            <div className="flex items-center gap-1">
              <ClockIcon className="h-4 w-4" />
              <span>{readingTime}</span>
            </div>
          )}
        </div>

        {/* 标签 */}
        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* 分隔线 */}
      <div className="mb-10 border-b" />

      {/* 文章内容 */}
      <div className="prose prose-lg dark:prose-invert mx-auto max-w-4xl">
        {children}
      </div>
    </article>
  )
} 