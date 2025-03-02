## SpecStory

## Refactoring MRI Dictionary Data Structure (2025/2/28 14:34:00)

_**User**_

将dicton的数据部分移入mri-dictoionary.ts中，并更新page.tsx文件

---

_**Assistant**_

我来帮你把词典数据移到单独的文件中，并更新相关代码。

首先，创建新的 `data/mri-dictionary.ts` 文件：

```typescript:data/mri-dictionary.ts
export interface DictionaryEntry {
  term: string
  definition: string
  category: string
  relatives?: string[]
  relatedReadings?: {
    title: string
    url: string
  }[]
}

export const dictionaryData: DictionaryEntry[] = [
  {
    term: 'T1加权像',
    definition: '一种基本的MRI扫描序列，主要用于显示解剖结构。脂肪在T1加权像中呈现高信号（亮），而水呈现低信号（暗）。',
    category: '扫描序列',
    relatedReadings: [
      {
        title: 'T1加权成像的基本原理',
        url: '/articles/t1-weighted-imaging'
      }
    ]
  },
  // ... 其他词典数据 ...
]
```

然后，更新 `page.tsx` 文件：

```typescript:app/mri-dictionary/page.tsx
// ... existing code ...
import { DictionaryEntry, dictionaryData } from '@/data/mri-dictionary'

export default function MRIDictionaryPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null)
  
  // 删除原有的 dictionaryData 定义
  
  // ... existing code ...
}
```

主要更改说明：
1. 将 `DictionaryEntry` 接口和 `dictionaryData` 数组移到了单独的文件中
2. 在 page.tsx 中导入这些类型和数据
3. 删除了原有的数据定义部分
4. 其他代码保持不变

这样的改动可以让代码结构更清晰，数据管理更集中，也便于后续维护和扩展词典内容。

---



---

