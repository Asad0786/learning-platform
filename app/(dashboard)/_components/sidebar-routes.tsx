"use client";

import { BookOpen, Library, List, Trophy, Video} from "lucide-react";
import { usePathname } from "next/navigation";

import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
  {
    icon: BookOpen,
    label: "My courses",
    href: "/",
  },
  {
    icon: Library,
    label: "Coursing catalog",
    href: "/search",
  },
];

const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: Trophy,
    label: "Leaderboard",
    href: "/teacher/leaderboard"
  },
  {
    icon: Video,
    label: "video",
    href: "/teacher/leaderboard/testvideo"
  },
];

export const SidebarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
