"use client"

import { useSession } from "next-auth/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react"

export default function DashboardPage() {
  const { data: session } = useSession()

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>欢迎回来，{session?.user?.name || "用户"}</CardTitle>
          <CardDescription>这是您的个人仪表板</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">在这里您可以管理您的所有内容和设置。</p>
          <Button variant="outline" onClick={() => signOut({ callbackUrl: "/" })}>
            退出登录
          </Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>快速统计</CardTitle>
          <CardDescription>您的使用数据</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>总项目数</span>
              <span className="font-semibold">12</span>
            </div>
            <div className="flex justify-between">
              <span>本周活跃天数</span>
              <span className="font-semibold">5</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>最近活动</CardTitle>
          <CardDescription>过去7天的活动记录</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm text-gray-500">暂无最近活动</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 