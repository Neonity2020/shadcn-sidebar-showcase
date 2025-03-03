import { cn } from "@/lib/utils"
import { BlogCard, BlogCardProps } from "@/components/blog-card"

interface BlogListProps {
  posts: Omit<BlogCardProps, "className">[]
  className?: string
  columns?: 1 | 2 | 3 | 4
}

export function BlogList({ posts, className, columns = 3 }: BlogListProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  }

  return (
    <div className={cn("container mx-auto py-10", className)}>
      {posts.length === 0 ? (
        <div className="flex h-[200px] w-full items-center justify-center rounded-lg border border-dashed">
          <p className="text-muted-foreground">暂无文章</p>
        </div>
      ) : (
        <div className={cn("grid gap-6", gridCols[columns])}>
          {posts.map((post, index) => (
            <BlogCard key={post.slug + index} {...post} />
          ))}
        </div>
      )}
    </div>
  )
} 