"use client"

import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { MDXComponents as MDXComponentsType } from 'mdx/types'

// 生成一致的ID
function generateId(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-\u4e00-\u9fa5]+/g, '') // 保留中文字符（Unicode范围：\u4e00-\u9fa5）
    .replace(/[\(\)]/g, ''); // 移除括号
}

// 定义标题项的接口
interface Heading {
  level: number;
  text: string;
  id: string;
}

// 目录组件
const TableOfContents = ({ headings }: { headings: Heading[] }) => {
  const [activeId, setActiveId] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const headingRefs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    // 初始化 IntersectionObserver
    const callback = (entries: IntersectionObserverEntry[]) => {
      // 找到当前可见的标题
      const visibleHeadings = entries.filter(entry => entry.isIntersecting);
      
      if (visibleHeadings.length > 0) {
        // 如果有多个可见标题，选择第一个
        const visibleId = visibleHeadings[0].target.id;
        setActiveId(visibleId);
      }
    };

    observerRef.current = new IntersectionObserver(callback, {
      rootMargin: '-80px 0px -40% 0px', // 调整观察区域
      threshold: 0.1 // 当标题元素10%可见时触发
    });

    // 观察所有标题元素
    document.querySelectorAll('h2, h3, h4').forEach(heading => {
      if (heading.id) {
        headingRefs.current.set(heading.id, heading as HTMLElement);
        observerRef.current?.observe(heading);
      }
    });

    return () => {
      // 清理观察器
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // 处理点击目录项
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // 平滑滚动到目标元素
      window.scrollTo({
        top: element.offsetTop - 80, // 考虑固定导航栏的高度
        behavior: 'smooth'
      });
      
      // 更新活动ID
      setActiveId(id);
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav className="toc text-sm">
      <ul className="space-y-2">
        {headings.map((heading, index) => (
          <li 
            key={index} 
            className={`
              ${heading.level === 2 ? 'font-medium' : 'text-gray-600 dark:text-gray-400'} 
              ${heading.level === 3 ? 'ml-3' : ''}
              ${heading.level === 4 ? 'ml-6' : ''}
              transition-colors
            `}
          >
            <a 
              href={`#${heading.id}`} 
              onClick={(e) => handleClick(e, heading.id)}
              className={`
                block py-1 border-l-2 pl-2 toc-item
                ${activeId === heading.id 
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400 font-medium' 
                  : 'border-transparent hover:border-blue-300 hover:text-blue-500 dark:hover:text-blue-300'}
              `}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// 简化版的提取标题函数，避免类型问题
function extractHeadings(content: string): Heading[] {
  const headingRegex = /^(#{1,4})\s+(.+)$/gm;
  const headings: Heading[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length; // 获取#的数量，表示标题级别
    const text = match[2].trim();
    const id = generateId(text);

    // 只包含 h2, h3, h4 标题
    if (level >= 2 && level <= 4) {
      headings.push({ level, text, id });
    }
  }

  return headings;
}

// 悬浮目录组件
export const FloatingTableOfContents = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  
  useEffect(() => {
    // 从DOM中提取标题
    const headingElements = document.querySelectorAll('h2, h3, h4');
    const extractedHeadings: Heading[] = [];
    
    headingElements.forEach((element) => {
      const level = parseInt(element.tagName.charAt(1), 10);
      const text = element.textContent || '';
      const id = element.id || generateId(text);
      
      // 确保标题元素有ID
      if (!element.id) {
        element.id = id;
      }
      
      extractedHeadings.push({ level, text, id });
    });
    
    setHeadings(extractedHeadings);
  }, []);
  
  if (headings.length === 0) return null;
  
  return (
    <div className="sticky top-24 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">目录</h2>
      <TableOfContents headings={headings} />
    </div>
  );
};

// 自定义MDX组件
export const MDXComponents: MDXComponentsType = {
  h1: (props: any) => {
    const id = generateId(String(props.children));
    return <h1 id={id} className="text-3xl font-bold mt-8 mb-4" {...props} />;
  },
  h2: (props: any) => {
    const id = generateId(String(props.children));
    return <h2 id={id} className="text-2xl font-bold mt-6 mb-3" {...props} />;
  },
  h3: (props: any) => {
    const id = generateId(String(props.children));
    return <h3 id={id} className="text-xl font-semibold mt-5 mb-2" {...props} />;
  },
  h4: (props: any) => {
    const id = generateId(String(props.children));
    return <h4 id={id} className="text-lg font-medium mt-4 mb-2" {...props} />;
  },
  a: (props: any) => <Link href={props.href || '#'} className="text-blue-600 hover:underline" {...props} />,
  img: (props: any) => (
    <div className="my-6">
      <Image 
        src={props.src || ''} 
        alt={props.alt || ''} 
        width={800} 
        height={500} 
        className="rounded-lg"
      />
    </div>
  ),
  pre: (props: any) => (
    <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm" {...props} />
  ),
  table: (props: any) => (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700" {...props} />
    </div>
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 italic" {...props} />
  ),
};

// 用于合并自定义组件的函数
export function useMDXComponents(components: MDXComponentsType): MDXComponentsType {
  return {
    ...MDXComponents,
    ...components,
  };
}

export default MDXComponents;
