import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { MDXComponents } from '@/mdx-component'

export default async function MDXExamplePage() {
  const filePath = path.join(process.cwd(), 'app/content/mdx-example.mdx')
  const source = fs.readFileSync(filePath, 'utf8')

  return (
    <div className="container mx-auto py-10">
      <div className="prose dark:prose-invert max-w-none">
        <MDXRemote 
          source={source} 
          components={{
            MDXComponents
          }}
        />
      </div>
    </div>
  )
} 