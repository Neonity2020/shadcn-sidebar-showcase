import { Book } from "@/data/books"

interface BookProps {
  book: Book
}

export function BookCard({ book }: BookProps) {
  return (
    <div className="rounded-xl border bg-muted/50 p-6">
      <img 
        src={`/project-images/${book.id}.jpg`} 
        alt={book.title}
        className="mb-4 aspect-video rounded-lg bg-muted object-cover"
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
            <h4 className="font-medium mb-2 text-muted-foreground">项目目录</h4>
            <ul className="space-y-1.5">
              {book.directories?.map((dir, i) => (
                <li key={i} className="flex items-center text-muted-foreground">
                  <span className="mr-2">📁</span>
                  {dir}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 min-w-[200px]">
            <h4 className="font-medium mb-2 text-muted-foreground">下载地址</h4>
            <a 
              href={book.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 rounded-md bg-accent text-accent-foreground hover:bg-accent/80 transition-colors"
            >
              <span className="mr-2">⬇️</span>
              立即下载
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
