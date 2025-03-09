"use client"

import { useSession } from "next-auth/react"
import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  FileText,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session } = useSession()
  const [teams, setTeams] = React.useState([
    {
      id: "admin",
      name: "admin (超级管理员)",
      logo: GalleryVerticalEnd,
      plan: "超级管理员",
    },
    {
      id: "content-admin",
      name: "content-admin (内容管理员)",
      logo: AudioWaveform,
      plan: "内容管理员",
    },
    {
      id: "user",
      name: "user (普通用户)",
      logo: Command,
      plan: "普通用户",
    },
  ])

  React.useEffect(() => {
    if (session?.user?.name) {
      setTeams(teams.map(team => ({
        ...team,
        name: `${session.user.name} (${team.plan})`
      })))
    }
  }, [session?.user?.name])

  // Debug: 查看当前会话数据
  console.log('Current session data:', {
    session,
    name: session?.user?.name,
    email: session?.user?.email,
    image: session?.user?.image
  })

  // This is sample data.
  const data = {
    teams,
    navMain: [
      {
        title: "My-Books",
        url: "/my-books",
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: "MRI-Bookshelf",
            url: "/mri-bookshelf",
          },
          {
            title: "History",
            url: "/history",
          },
          {
            title: "Starred",
            url: "#",
          },
          {
            title: "Settings",
            url: "#",
          },
        ],
      },
      {
        title: "内容管理",
        url: "#",
        icon: BookOpen,
        items: [
          {
            title: "Blog",
              url: "/content/blog", 
          },
          {
            title: "文章管理",
            url: "/content/articles",
          },
          {
            title: "图片管理",
            url: "/content/images",
          },
          {
            title: "视频管理",
            url: "/content/videos",
          },
        ],
      },
      {
        title: "文件管理",
        url: "/files",
        icon: FileText,
        items: [
          {
            title: "全部文件",
            url: "/files",
          },
          {
            title: "最近文件",
            url: "#",
          },
          {
            title: "共享文件",
            url: "#",
          },
          {
            title: "回收站",
            url: "#",
          },
        ],
      },
      {
        title: "AI-Assistants",
        url: "#",
        icon: Bot,
        items: [
          {
            title: "Genesis",
            url: "#",
          },
          {
            title: "Explorer",
            url: "#",
          },
          {
            title: "Quantum",
            url: "#",
          },
        ],
      },
      {
        title: "Documentation",
        url: "#",
        icon: BookOpen,
        items: [
          {
            title: "Introduction",
            url: "#",
          },
          {
            title: "Get Started",
            url: "#",
          },
          {
            title: "Tutorials",
            url: "#",
          },
          {
            title: "Changelog",
            url: "#",
          },
        ],
      },
   
      {
        title: "Settings",
        url: "#",
        icon: Settings2,
        items: [
          {
            title: "General",
            url: "#",
          },
          {
            title: "Team",
            url: "#",
          },
          {
            title: "Billing",
            url: "#",
          },
          {
            title: "Limits",
            url: "#",
          },
        ],
      },
    ],
    projects: [
      {
        name: "MRI-Technique",
        url: "/mri-techs",
        icon: Frame,
      },
      {
        name: "MRI-Diagnosis",
        url: "/mri-diagnosis",
        icon: PieChart,
      },
        {
          name: "MRI-Principles",
          url: "/mri-principles",
          icon: Map,
        },
        {
          name: "MRI-Dictionary",
          url: "/mri-dictionary",
          icon: BookOpen,
        },
    ],
  }

  const userData = {
    name: session?.user?.name || "shadcn",
    email: session?.user?.email || "m@example.com",
    avatar: session?.user?.image || "/avatars/shadcn.jpg",
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

