## SpecStory

## Fixing .mdx Code Styling Issues (2025/3/4 21:33:27)

_**User**_

.mdx文件的代码的样式渲染错误

---

_**Assistant**_

要解决 .mdx 文件中代码的样式渲染错误，我建议使用 Prism.js 或 Shiki 进行代码高亮。以下是使用 Shiki 的详细解决方案：

1. 首先安装必要的依赖：

```bash
npm install rehype-prism-plus rehype-slug @shikijs/rehype
```

2. 更新 `next.config.mjs` 配置：

```javascript
import { withContentlayer } from 'next-contentlayer'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import { rehypeShiki } from '@shikijs/rehype'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // 添加 MDX 配置
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            rehypePlugins: [
              rehypeSlug,
              [rehypeShiki, {
                theme: 'github-dark'
              }]
            ]
          }
        }
      ]
    })
    return config
  }
}

export default withContentlayer(nextConfig)
```

3. 添加 Prism CSS 样式。在 `app/globals.css` 中添加：

```css
@import 'prism-themes/themes/prism-dracula.css';

/* 可选：添加额外的代码块样式 */
pre {
  @apply rounded-lg p-4 overflow-x-auto;
}

code {
  @apply text-sm bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5;
}

pre code {
  @apply bg-transparent p-0;
}
```

4. 如果需要支持行号和代码高亮，可以在 MDX 中使用特殊语法：

````markdown
```typescript {2,4-5}
function example() {
  // 这一行会高亮
  const x = 1;
  // 这几行也会高亮
  const y = 2;
  const z = 3;
}
```
````

这个解决方案将：
- 使用 Shiki 提供高质量的代码高亮
- 添加响应式和黑暗模式支持
- 提供更好的代码块展示效果

如果你遇到任何具体的渲染问题，请提供更多详细信息，我可以进一步帮你调试。

---



---

