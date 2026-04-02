import React from "react";
import { Book, Sunset, Trees, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export const IEEELogo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex items-center gap-2', className)}>
            <div className="flex w-9 h-9 items-center justify-center rounded-full border-2 border-[#0b5ea8] bg-[#0b5ea8] text-white">
                <span className="text-[9px] font-extrabold leading-none tracking-tight">IEEE</span>
            </div>
            <span className="text-sm font-semibold tracking-widest text-[#0b5ea8] uppercase">
                ESPOL
            </span>
        </div>
    )
}

export const ieeeNavData = {
  logo: {
    url: "/",
    component: <IEEELogo />,
    title: "IEEE ESPOL",
  },
  menu: [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Societies",
      url: "#",
      items: [
        {
          title: "Computer Society",
          description: "Empowering computer science professionals.",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/societies/computer-society",
        },
        {
          title: "Robotics and Automation",
          description: "Innovation in robotics and automated systems.",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/societies/robotics-and-automation",
        },
      ],
    },
    {
      title: "Resources",
      url: "#",
      items: [
        {
          title: "Help Center",
          description: "Get all the answers you need regarding IEEE ESPOL.",
          icon: <Book className="size-5 shrink-0" />,
          url: "/resources/help-center",
        },
        {
          title: "Contact Us",
          description: "Reach out to the board of directors.",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/contact",
        },
      ],
    },
    {
      title: "Events",
      url: "/events",
    },
    {
      title: "About Us",
      url: "/about",
    },
  ],
  mobileExtraLinks: [
    { name: "Press", url: "/press" },
    { name: "Contact", url: "/contact" },
  ],
  auth: {
    login: { text: "Log in", url: "/login" },
    signup: { text: "Join IEEE", url: "/join" },
  },
};
