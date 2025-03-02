## SpecStory

## MRI Dictionary Page Creation (2025/2/27 04:50:01)

_**User**_

帮我生成一个MRI词典的页面

---

_**Assistant**_

我来帮您创建一个MRI词典的页面。这个页面将包含基本的搜索功能和词典展示功能。

```typescript:app/MRI-dictionary/page.tsx
'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'

interface DictionaryEntry {
  term: string
  definition: string
  category: string
}

export default function MRIDictionaryPage() {
  const [searchTerm, setSearchTerm] = useState('')
  
  // 示例词典数据
  const dictionaryData: DictionaryEntry[] = [
    {
      term: 'T1加权像',
      definition: '一种基本的MRI扫描序列，主要用于显示解剖结构。脂肪在T1加权像中呈现高信号（亮），而水呈现低信号（暗）。',
      category: '扫描序列'
    },
    {
      term: 'T2加权像',
      definition: '另一种基本的MRI扫描序列，主要用于显示病理改变。水在T2加权像中呈现高信号（亮），而脂肪呈现中等信号。',
      category: '扫描序列'
    },
    // 可以添加更多词条
  ]

  // 过滤搜索结果
  const filteredEntries = dictionaryData.filter(entry =>
    entry.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.definition.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">MRI 词典</h1>
      
      {/* 搜索框 */}
      <div className="mb-6">
        <Input
          type="text"
          placeholder="搜索MRI术语..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>

      {/* 词条列表 */}
      <div className="grid gap-4">
        {filteredEntries.map((entry, index) => (
          <Card key={index} className="p-4">
            <h2 className="text-xl font-semibold mb-2">{entry.term}</h2>
            <p className="text-gray-600 mb-2">{entry.definition}</p>
            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm">
              {entry.category}
            </span>
          </Card>
        ))}
      </div>
    </div>
  )
}
```

这个MRI词典页面包含以下功能：

1. 响应式设计的页面布局
2. 搜索功能，可以搜索术语和定义
3. 词条以卡片形式展示
4. 每个词条包含术语名称、定义和分类
5. 使用了TypeScript确保类型安全

要使用这个组件，您需要确保：

1. 项目中已安装并配置了必要的UI组件（使用了@/components/ui/input和@/components/ui/card）
2. 添加更多的词典数据到dictionaryData数组中
3. 根据需要调整样式和布局

您可以通过以下方式扩展这个页面：

1. 添加分类筛选功能
2. 添加排序功能
3. 实现数据持久化（连接到数据库）
4. 添加管理界面用于添加/编辑词条
5. 添加图片支持，展示MRI相关的图像

需要任何具体功能的补充，请告诉我。

---

_**User**_

@app 全局布局注入到了这个页面，影响了页面的显示

---

_**Assistant**_

我明白了，由于全局布局的影响，我们需要调整 MRI 词典页面的样式以适配整体布局。让我帮您修改代码：

```typescript:app/MRI-dictionary/page.tsx
'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'

interface DictionaryEntry {
  term: string
  definition: string
  category: string
}

export default function MRIDictionaryPage() {
  const [searchTerm, setSearchTerm] = useState('')
  
  const dictionaryData: DictionaryEntry[] = [
    {
      term: 'T1加权像',
      definition: '一种基本的MRI扫描序列，主要用于显示解剖结构。脂肪在T1加权像中呈现高信号（亮），而水呈现低信号（暗）。',
      category: '扫描序列'
    },
    {
      term: 'T2加权像',
      definition: '另一种基本的MRI扫描序列，主要用于显示病理改变。水在T2加权像中呈现高信号（亮），而脂肪呈现中等信号。',
      category: '扫描序列'
    },
  ]

  const filteredEntries = dictionaryData.filter(entry =>
    entry.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.definition.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-background">
      {/* 头部 */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">MRI 词典</h1>
          <p className="mt-2 text-gray-600">磁共振成像专业术语解释</p>
        </div>
      </header>

      {/* 主要内容区 */}
      <main className="max-w-7xl mx-auto py-8 px-6">
        {/* 搜索框 */}
        <div className="mb-8">
          <Input
            type="text"
            placeholder="搜索MRI术语..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>

        {/* 词条列表 */}
        <div className="grid gap-6">
          {filteredEntries.map((entry, index) => (
            <Card key={index} className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">{entry.term}</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{entry.definition}</p>
              <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                {entry.category}
              </span>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
```

主要更改包括：

1. 添加了与其他页面一致的头部样式
2. 调整了整体布局结构，使用 `max-w-7xl` 控制内容宽度
3. 优化了卡片样式，添加了悬停效果和阴影
4. 使用了与全局主题一致的背景色 `bg-background`
5. 改进了词条展示的视觉层次，使用蓝色主题突出关键信息
6. 增加了更多的间距和内边距，提升可读性

这些修改使 MRI 词典页面能够更好地融入整体布局，同时保持了良好的可用性和视觉体验。您可以根据需要继续添加更多的词条数据到 `dictionaryData` 数组中。

---

_**User**_

增加一个右侧栏，可以按字母表顺序检索mri技术词汇

---

_**Assistant**_

我来帮您添加一个右侧字母索引栏。我们需要修改页面布局并添加字母索引功能：

```typescript:app/MRI-dictionary/page.tsx
'use client'

import { useState, useMemo } from 'react'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'

interface DictionaryEntry {
  term: string
  definition: string
  category: string
}

export default function MRIDictionaryPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null)
  
  const dictionaryData: DictionaryEntry[] = [
    {
      term: 'T1加权像',
      definition: '一种基本的MRI扫描序列，主要用于显示解剖结构。脂肪在T1加权像中呈现高信号（亮），而水呈现低信号（暗）。',
      category: '扫描序列'
    },
    {
      term: 'T2加权像',
      definition: '另一种基本的MRI扫描序列，主要用于显示病理改变。水在T2加权像中呈现高信号（亮），而脂肪呈现中等信号。',
      category: '扫描序列'
    },
    {
      term: 'DWI',
      definition: '扩散加权成像，用于检测水分子扩散运动的受限程度。',
      category: '扫描序列'
    },
    // ... 更多词条
  ]

  // 生成A-Z字母数组
  const alphabet = useMemo(() => 
    Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ'),
    []
  )

  // 根据搜索词和选中字母过滤词条
  const filteredEntries = useMemo(() => {
    return dictionaryData.filter(entry => {
      const matchesSearch = entry.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.definition.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesLetter = selectedLetter 
        ? entry.term.charAt(0).toUpperCase() === selectedLetter
        : true

      return matchesSearch && matchesLetter
    })
  }, [dictionaryData, searchTerm, selectedLetter])

  return (
    <div className="min-h-screen bg-background">
      {/* 头部 */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">MRI 词典</h1>
          <p className="mt-2 text-gray-600">磁共振成像专业术语解释</p>
        </div>
      </header>

      {/* 主要内容区 */}
      <main className="max-w-7xl mx-auto py-8 px-6">
        <div className="flex gap-8">
          {/* 左侧主要内容 */}
          <div className="flex-1">
            {/* 搜索框 */}
            <div className="mb-8">
              <Input
                type="text"
                placeholder="搜索MRI术语..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-md"
              />
            </div>

            {/* 词条列表 */}
            <div className="grid gap-6">
              {filteredEntries.map((entry, index) => (
                <Card key={index} className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
                  <h2 className="text-xl font-semibold mb-3 text-blue-600">{entry.term}</h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">{entry.definition}</p>
                  <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {entry.category}
                  </span>
                </Card>
              ))}
              {filteredEntries.length === 0 && (
                <p className="text-gray-500 text-center py-8">未找到匹配的词条</p>
              )}
            </div>
          </div>

          {/* 右侧字母索引栏 */}
          <div className="w-16 flex-shrink-0">
            <div className="sticky top-4 bg-white rounded-lg shadow-md p-2">
              <div className="flex flex-col items-center gap-1">
                {alphabet.map((letter) => (
                  <button
                    key={letter}
                    onClick={() => setSelectedLetter(selectedLetter === letter ? null : letter)}
                    className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition-colors
                      ${selectedLetter === letter 
                        ? 'bg-blue-600 text-white' 
                        : 'hover:bg-blue-50 text-gray-600'}`}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
```

主要更改包括：

1. 添加了右侧固定的字母索引栏
2. 实现了字母筛选功能
   - 点击字母可以筛选以该字母开头的词条
   - 再次点击同一个字母可以取消筛选
3. 使用 `useMemo` 优化性能
4. 添加了空结果提示
5. 字母索引栏使用 `sticky` 定位，滚动时保持可见
6. 优化了视觉交互效果
   - 选中字母时显示蓝色背景
   - 鼠标悬停效果
   - 圆形按钮设计

您可以继续添加更多的词条数据，系统会自动按照字母表顺序进行索引。如果需要添加更多功能（如分类筛选、拼音索引等），请告诉我。

---

_**User**_

@https://pheonix-blog.netlify.app/fsbb 
参考此页面，添加一条fsbb的词条

---

_**Assistant**_

我来帮您添加FSBB的词条。我们需要在 dictionaryData 中添加这个详细的词条：

```typescript:app/MRI-dictionary/page.tsx
// ... existing code ...

const dictionaryData: DictionaryEntry[] = [
  {
    term: 'FSBB (Flow Sensitive Black Blood)',
    definition: `血流敏感黑血成像技术，是东芝公司开发的一种特殊MRI序列。该技术通过在T2*加权序列中施加运动探测梯度（Motion Probing Gradients，MPGs），能够同时利用T2*磁敏感效应和体素内不相干运动（IVIM）失相位效应生成图像对比。其主要特点是：

1. 可以显著提升血管对比度，同时避免了明显的T2*衰减
2. 特别适合显示低速血流的血管结构
3. 相比传统TOF技术，对流速缓慢或湍流血流的成像效果更好
4. 临床应用广泛，包括创伤性脑损伤、中风、出血、神经退行性疾病、血管畸形等多种疾病的诊断`,
    category: '特殊序列'
  },
  // ... 其他词条 ...
]

// ... rest of the code ...
```

这个词条基于参考文章的内容，提供了FSBB技术的简明定义和主要特点。如果您希望添加更多细节或者调整描述，请告诉我。

---



---

