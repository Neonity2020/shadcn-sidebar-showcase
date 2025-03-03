'use client'

import { useState, useMemo } from 'react'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { dictionaryData } from '@/data/mri-dictionary'

export default function MRIDictionaryPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null)

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
        <div className="flex gap-2 sm:gap-8">
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
                <Card key={index} className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow flex flex-col sm:flex-row items-stretch">
                  <div className="flex-grow pr-0 sm:pr-4">
                    <h2 className="text-xl font-semibold mb-3 text-blue-600">{entry.term}</h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">{entry.definition}</p>
                    <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {entry.category}
                    </span>
                    {entry.relatedReadings && (
                      <div className="mt-2">
                        <p className="text-gray-600 text-sm font-medium">
                          相关阅读:
                        </p>
                        <ul className="list-disc pl-5">
                          {entry.relatedReadings.map((reading, index) => (
                            <li key={index}>
                              <Link 
                                href={reading.url} 
                                className={`text-blue-600 hover:underline inline-flex items-center gap-1
                                  ${reading.url.startsWith('http') ? 'after:content-["↗"] after:text-xs after:ml-0.5' : ''}`}
                                target={reading.url.startsWith('http') ? "_blank" : undefined}
                                rel={reading.url.startsWith('http') ? "noopener noreferrer" : undefined}
                              >
                                {reading.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  {entry.image && (
                    <div className="flex-shrink-0 w-full sm:w-48 h-36 mt-4 sm:mt-0 sm:ml-4">
                      <div className="relative w-full h-full">
                        <img 
                          src={entry.image} 
                          alt={`${entry.term}示意图`} 
                          className="absolute inset-0 w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  )}
                </Card>
              ))}
              {filteredEntries.length === 0 && (
                <p className="text-gray-500 text-center py-8">未找到匹配的词条</p>
              )}
            </div>
          </div>

          {/* 右侧字母索引栏 */}
          <div className="w-10 sm:w-16 flex-shrink-0">
            <div className="sticky top-4 bg-white rounded-lg shadow-md p-1 sm:p-2">
              <div className="flex flex-col items-center gap-0.5 sm:gap-1">
                {alphabet.map((letter) => (
                  <button
                    key={letter}
                    onClick={() => setSelectedLetter(selectedLetter === letter ? null : letter)}
                    className={`w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-xs sm:text-sm font-medium transition-colors
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
