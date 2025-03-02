"use client"

import { usePathname } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const pathMap: { [key: string]: string } = {
  "mri-techs": "MRI技术",
  "mri-dictionary": "MRI词典",
  "mri-diagnosis": "MRI诊断",
  "mri-principles": "MRI原理",
  "history": "历史记录",
  "projects": "项目管理"
}

export function BreadcrumbNav() {
  const pathname = usePathname()
  const paths = pathname.split("/").filter(Boolean)

  if (paths.length === 0) return null

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="text-muted-foreground hover:text-foreground">
            首页
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {paths.map((path, index) => {
          const href = `/${paths.slice(0, index + 1).join("/")}`
          const isLast = index === paths.length - 1

          return (
            <BreadcrumbItem key={path}>
              {isLast ? (
                <BreadcrumbPage>{pathMap[path] || path}</BreadcrumbPage>
              ) : (
                <>
                  <BreadcrumbLink 
                    href={href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {pathMap[path] || path}
                  </BreadcrumbLink>
                  <BreadcrumbSeparator />
                </>
              )}
            </BreadcrumbItem>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
} 