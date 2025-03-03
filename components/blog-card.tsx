import Link from "next/link"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, ClockIcon, ArrowRightIcon } from "lucide-react"

export interface BlogCardProps {
  title: string
  description?: string
  date: string
  readingTime?: string
  slug: string
  tags?: string[]
  coverImage?: string
  className?: string
}

export function BlogCard({
  title,
  description,
  date,
  readingTime,
  slug,
  tags,
  coverImage,
  className,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Link href={slug}>
      <article 
        className={cn(
          "group relative flex flex-col overflow-hidden rounded-lg border bg-background p-0 shadow-sm transition-all hover:shadow-md",
          className
        )}
      >
        {/* 封面图片 */}
        {coverImage && (
          <div className="relative h-48 w-full overflow-hidden">
            <img
              src={coverImage}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}

        <div className="flex flex-1 flex-col p-6">
          {/* 标签 */}
          {tags && tags.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {tags.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{tags.length - 3}
                </Badge>
              )}
            </div>
          )}

          {/* 标题 */}
          <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground group-hover:text-primary">
            {title}
          </h3>

          {/* 描述 */}
          {description && (
            <p className="mb-4 line-clamp-2 text-muted-foreground">
              {description}
            </p>
          )}

          <div className="mt-auto flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              {/* 发布日期 */}
              <div className="flex items-center gap-1">
                <CalendarIcon className="h-3.5 w-3.5" />
                <span>{formattedDate}</span>
              </div>

              {/* 阅读时间 */}
              {readingTime && (
                <div className="flex items-center gap-1">
                  <ClockIcon className="h-3.5 w-3.5" />
                  <span>{readingTime}</span>
                </div>
              )}
            </div>

            <div className="flex items-center text-primary opacity-0 transition-opacity group-hover:opacity-100">
              <span className="mr-1 text-sm font-medium">阅读更多</span>
              <ArrowRightIcon className="h-4 w-4" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
} 