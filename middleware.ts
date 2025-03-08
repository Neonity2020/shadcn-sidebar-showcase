import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  const isAuthPage = request.nextUrl.pathname.startsWith("/login") ||
                    request.nextUrl.pathname.startsWith("/register")

  if (isAuthPage) {
    if (token) {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }
    return NextResponse.next()
  }

  // 定义需要保护的路径
  const protectedPaths = [
    "/dashboard",
    "/profile",
    "/settings",
    "/api/protected",
    "/admin",
    "/mri-principles",
    "/content",
    "/mri-diagnosis",
    "/mri-techs",
    "/projects",
    "/mri-bookshelf",
    "/history",
    "/mri-dictionary",


    
  ]

  // 检查当前路径是否需要保护
  const isProtectedPath = protectedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  )

  if (!token && isProtectedPath) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/dashboard/:path*", 
    "/profile/:path*",
    "/settings/:path*",
    "/api/protected/:path*",
    "/admin/:path*",
    "/mri-principles/:path*",
    "/content/:path*",
    "/mri-diagnosis/:path*",
    "/mri-techs/:path*",
    "/projects/:path*",
    "/mri-bookshelf/:path*",
    "/history/:path*",
    "/mri-dictionary/:path*",
    "/login",
    "/register"
  ]
}