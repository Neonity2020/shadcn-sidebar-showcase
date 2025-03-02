## SpecStory

## Building an MRI Knowledge Base with Next.js and Strapi (2025/2/28 08:33:41)

_**User**_

我想使用strapi作为内容管理器，nextjs 15 + shadcn/ui作为前端，构建一个磁共振知识库的web应用，请给我提供项目构建思路
@/

---

_**Assistant**_

好的,我来帮您规划这个磁共振知识库项目的构建思路。

### 一、项目架构设计

1. **前端 (Next.js 15)**
- 使用 App Router 架构
- 采用 Server Components 提升性能
- shadcn/ui 提供统一的组件库
- 参考现有布局:

```1:22:app/layout.tsx
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'my-mri-lib',
  description: 'My MRI library',
}
```


2. **后端 (Strapi)**
- 内容类型设计:
  - 文章(Articles)
  - 词典(Dictionary)
  - 技术(Techniques) 
  - 书籍(Books)
  - 项目(Projects)

### 二、核心功能模块

1. **知识库管理**
- 文章管理
- 词典管理(参考现有词典页面):

```13:67:app/mri-dictionary/page.tsx
export default function MRIDictionaryPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null)
  
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
    {
      term: 'FLAIR',
      definition: 'Fluid Attenuated Inversion Recovery（液体衰减翻转回波）的缩写。这是一种特殊的MRI序列，通过抑制脑脊液的信号来提高病变的显示。在该序列中，正常脑脊液呈现暗信号，而病变组织则保持较高信号，特别适合显示靠近脑脊液的病变。',
      category: '扫描序列'
    },
    {
      term: 'DWI',
      definition: '扩散加权成像，用于检测水分子扩散运动的受限程度。',
      category: '扫描序列'
    },
    {
      term: 'FSBB (Flow Sensitive Black Blood)',
      definition: `血流敏感黑血成像技术，是佳能（原东芝医疗）公司开发的一种特殊MRI序列。该技术通过在T2*加权序列中施加运动探测梯度（Motion Probing Gradients，MPGs），能够同时利用T2*磁敏感效应和体素内不相干运动（IVIM）失相位效应生成图像对比。
      
      其主要特点是：

        1. 可以显著提升血管对比度，同时避免了明显的T2*衰减
        2. 特别适合显示低速血流的血管结构
        3. 相比传统TOF技术，对流速缓慢或湍流血流的成像效果更好
        4. 临床应用广泛，包括创伤性脑损伤、中风、出血、神经退行性疾病、血管畸形等多种疾病的诊断`,
            category: '血管成像序列'
            },
    {
      term: 'PXA (多形性黄色星形细胞瘤)',
      definition: `多形性黄色星形细胞瘤是一种罕见的星形细胞肿瘤，在MRI上具有以下特征：

        1. T1WI：多呈等或稍低信号
        2. T2WI：呈高信号，可见囊变区域
        3. 增强扫描：实性部分明显强化
        4. 特点：
           - 多位于大脑表浅部位
           - 常见于颞叶和顶叶
           - 边界清晰
           - 可有囊变和钙化
           - 常伴有软脑膜受累`,
      category: '脑肿瘤'
    },
    // 可以添加更多词条
  ]
```

- 技术文档
- 书籍资源

2. **项目追踪**
- 参考现有项目数据结构:

```11:16:data/projects.ts
export const projects: Projects[] = [
  { id: 1, title: "MRI-Techniques", description: "磁共振技术", status: "building", progress: 2, projectUrl: "/mri-techs" },
  { id: 2, title: "MRI-Diagnosis", description: "磁共振诊断", status: "building", progress: 0, projectUrl: "/mri-diagnosis" },
  { id: 3, title: "MRI-Principles", description: "磁共振原理", status: "building", progress: 0, projectUrl: "/mri-principles" },
  { id: 4, title: "MRI-Dictionary", description: "磁共振词典", status: "building", progress: 1, projectUrl: "/mri-dictionary" },
]
```


3. **资源中心**
- 参考现有书籍数据结构:

```122:135:data/books.ts

```


### 三、技术实现要点

1. **内容管理 (Strapi)**
- 设计 Collection Types
- 配置 API 权限
- 设置多媒体存储
- 配置国际化

2. **前端开发**
- 使用 shadcn/ui 组件
- 实现响应式布局
- 集成 Strapi API
- SEO 优化

3. **数据获取策略**
```typescript
// 示例 API 调用
async function fetchArticles() {
  const response = await fetch(`${process.env.STRAPI_API_URL}/api/articles`);
  const data = await response.json();
  return data;
}
```

### 四、项目结构

```
my-mri-library/
├── app/
│   ├── articles/
│   ├── dictionary/
│   ├── techniques/
│   ├── books/
│   └── projects/
├── components/
│   ├── ui/
│   └── shared/
├── lib/
│   └── api/
└── types/
```

### 五、开发步骤

1. **环境搭建**
```bash
# 前端
npx create-next-app@latest my-mri-library
cd my-mri-library
npx shadcn-ui@latest init

# 后端
npx create-strapi-app@latest my-mri-cms
```

2. **Strapi 配置**
- 创建内容类型
- 设置 API 权限
- 配置媒体存储

3. **Next.js 开发**
- 实现布局组件
- 开发页面路由
- 集成 API
- 添加认证功能

### 六、部署考虑

1. **前端部署**
- Vercel
- Netlify
- 自托管服务器

2. **后端部署**
- 云服务器
- Docker 容器化
- 数据库选择 (PostgreSQL/MySQL)

需要我详细说明某个具体部分吗？

---

_**User**_

推荐给我项目目录结构

---

_**Assistant**_

好的,我来推荐一个完整的项目目录结构:

```
my-mri-library/
├── app/                              # Next.js App Router 目录
│   ├── (auth)/                      # 认证相关路由组
│   │   ├── login/
│   │   └── register/ 
│   ├── (dashboard)/                 # 仪表盘路由组
│   │   ├── layout.tsx              
│   │   ├── page.tsx                 # 首页
│   │   ├── mri-dictionary/         # 词典模块
│   │   ├── mri-techniques/         # 技术模块
│   │   ├── mri-principles/         # 原理模块
│   │   └── mri-diagnosis/          # 诊断模块
│   ├── api/                         # API 路由
│   ├── layout.tsx                   # 根布局
│   └── page.tsx                     # 落地页
├── components/                       # 组件目录
│   ├── ui/                          # shadcn/ui 组件
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── layout/                      # 布局组件
│   │   ├── header.tsx
│   │   ├── sidebar.tsx
│   │   └── footer.tsx
│   └── shared/                      # 共享组件
│       ├── search-bar.tsx
│       ├── pagination.tsx
│       └── loading-spinner.tsx
├── lib/                             # 工具库
│   ├── api/                         # API 相关
│   │   ├── strapi.ts               # Strapi API 客户端
│   │   └── types.ts                # API 类型定义
│   ├── hooks/                       # 自定义 Hooks
│   │   ├── use-auth.ts
│   │   └── use-search.ts
│   └── utils/                       # 工具函数
│       ├── format.ts
│       └── validation.ts
├── public/                          # 静态资源
│   ├── images/                      # 图片资源
│   │   ├── logo.svg
│   │   └── icons/
│   └── locales/                     # 国际化文件
├── styles/                          # 样式文件
│   └── globals.css                  # 全局样式
├── types/                           # 类型定义
│   ├── api.ts                       # API 响应类型
│   ├── auth.ts                      # 认证相关类型
│   └── common.ts                    # 通用类型
├── config/                          # 配置文件
│   ├── site.ts                      # 站点配置
│   └── nav.ts                       # 导航配置
├── .env                             # 环境变量
├── .env.local                       # 本地环境变量
├── next.config.js                   # Next.js 配置
├── tailwind.config.ts               # Tailwind 配置
├── tsconfig.json                    # TypeScript 配置
└── package.json                     # 项目依赖
```

一些关键目录的说明:

1. **app 目录**:
- 使用路由组(route groups)组织相关页面
- 每个功能模块有独立的目录
- 共享布局文件放在相应层级

2. **components 目录**:
- ui: shadcn/ui 组件
- layout: 布局相关组件
- shared: 可复用的业务组件

3. **lib 目录**:
- api: Strapi API 相关代码
- hooks: 自定义 React Hooks
- utils: 工具函数

4. **types 目录**:
- 集中管理 TypeScript 类型定义
- 按功能模块划分类型文件

5. **config 目录**:
- 集中管理配置信息
- 便于维护和修改

这个结构的优点:
- 清晰的模块化组织
- 良好的可扩展性
- 符合 Next.js 最佳实践
- 便于团队协作

您觉得这个结构如何？需要我详细解释某个部分吗？

---



---

