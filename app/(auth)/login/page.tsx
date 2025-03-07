"use client"

import { useState } from "react"
import Link from "next/link"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        toast.error(result.error)
      } else {
        router.push("/dashboard")
        router.refresh()
      }
    } catch (error) {
      toast.error("登录失败，请稍后重试")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>登录</CardTitle>
          <CardDescription>欢迎回来！请登录您的账号</CardDescription>
        </CardHeader>
        <form onSubmit={onSubmit}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
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
                  placeholder="您的密码"
                  required
                />
              </div>
              <div className="flex justify-end">
                <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                  忘记密码？
                </Link>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button 
              type="submit" 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "登录中..." : "登录"}
            </Button>
            <div className="text-sm text-gray-500 text-center">
              还没有账号？
              <Link href="/register" className="text-blue-600 hover:underline ml-1">
                立即注册
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
} 