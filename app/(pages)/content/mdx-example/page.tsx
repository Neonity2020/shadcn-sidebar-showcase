import { MDXRemote } from 'next-mdx-remote/rsc'
import fs from 'fs'
import path from 'path'

export default async function MDXExamplePage() {
  const filePath = path.join(process.cwd(), 'app/(pages)/content/mdx-example.mdx')
  const source = fs.readFileSync(filePath, 'utf8')

  return (
    <div className="prose prose-lg max-w-none p-8">
      <MDXRemote source={source} />
    </div>
  )
} 