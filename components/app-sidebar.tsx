"use client"

import type * as React from "react"
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

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Neonity",
      logo: GalleryVerticalEnd,
      plan: "超级管理员",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
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
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

