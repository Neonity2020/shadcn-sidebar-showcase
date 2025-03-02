## SpecStory

## Adding FLAIR Entry to MRI Dictionary (2025/2/27 08:52:14)

_**User**_

生成FLAIR词条
@https://www.mriwiki.cn/FLAIR 

---

_**Assistant**_

我建议在词典数据中添加FLAIR这个重要的MRI序列。以下是建议的代码更新：

```typescript:app/mri-dictionary/page.tsx
// ... existing code ...
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
      term: 'FLAIR',
      definition: 'Fluid Attenuated Inversion Recovery（液体衰减翻转回波）的缩写。这是一种特殊的MRI序列，通过抑制脑脊液的信号来提高病变的显示。在该序列中，正常脑脊液呈现暗信号，而病变组织则保持较高信号，特别适合显示靠近脑脊液的病变。',
      category: '扫描序列'
    },
    // ... existing code ...
```

我添加了FLAIR序列的词条，包含了其英文全称、中文翻译以及主要特点和临床应用。这个序列在神经系统MRI检查中非常重要，特别是对于靠近脑脊液的病变显示。

词条放置在T2加权像之后，保持了序列的逻辑顺序，并使用了与其他词条一致的格式和结构。

---



---

