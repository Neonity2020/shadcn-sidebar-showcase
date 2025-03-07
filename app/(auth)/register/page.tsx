"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"

export default function RegisterPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const confirmPassword = formData.get("confirmPassword") as string

    if (password !== confirmPassword) {
      toast.error("两次输入的密码不一致")
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "注册失败")
      }

      toast.success("注册成功！")
      router.push("/login")
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error("注册失败，请稍后重试")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>注册账号</CardTitle>
          <CardDescription>创建一个新账号以开始使用我们的服务</CardDescription>
        </CardHeader>
        <form onSubmit={onSubmit}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="name"
                  name="name"
                  placeholder="您的姓名"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="您的邮箱"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="设置密码"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="确认密码"
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button 
              type="submit" 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "注册中..." : "注册"}
            </Button>
            <div className="text-sm text-gray-500 text-center">
              已有账号？
              <Link href="/login" className="text-blue-600 hover:underline ml-1">
                立即登录
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
} 