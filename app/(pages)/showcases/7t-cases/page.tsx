'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { casesData, categories } from '@/data/cases'

export default function CasesShowcase() {
  const [activeCategory, setActiveCategory] = useState('全部')
  
  const filteredCases = activeCategory === '全部' 
    ? casesData 
    : casesData.filter(c => c.category === activeCategory)

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">7T MRI 临床病例展示</h1>
      
      <div className="mb-8">
        <Tabs defaultValue="全部" onValueChange={setActiveCategory}>
          <TabsList className="grid grid-cols-4">
            {categories.map(category => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCases.map(caseItem => (
          <Card key={caseItem.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 w-full">
              {/* 注意：请确保这些图片路径存在，或替换为实际可用的图片 */}
              <Image 
                src={caseItem.imageUrl} 
                alt={caseItem.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">{caseItem.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{caseItem.category}</p>
              <p className="text-gray-700 mb-4">{caseItem.description}</p>
              <div className="bg-gray-50 p-3 rounded-md">
                <p className="text-sm">{caseItem.details}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCases.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">该分类下暂无病例</p>
        </div>
      )}
    </div>
  )
}
