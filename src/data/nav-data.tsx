import React from "react";
import { Book, Sunset, Trees, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export const IEEELogo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex items-center gap-2', className)}>
            <img 
                src="/ieeeespol-logo.png" 
                alt="IEEE Logo" 
                className="h-20 w-auto object-contain"
            />
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
      title: "INICIO",
      url: "/",
    },
    {
      title: "ACERCA DE",
      url: "#",
      items: [
        { title: "Quienes Somos", url: "/acerca-de/quienes-somos" },
        { title: "Directiva IEEE-ESPOL", url: "/acerca-de/directiva" },
        { title: "Membresías", url: "/acerca-de/membresias" },
      ],
    },
    {
      title: "CAPÍTULOS TÉCNICOS",
      url: "#",
      items: [
        { title: "CIS", url: "/capitulos-tecnicos/cis" },
        { title: "CS", url: "/capitulos-tecnicos/cs" },
        { title: "CSS", url: "/capitulos-tecnicos/css" },
        { title: "COMSOC", url: "/capitulos-tecnicos/comsoc" },
        { title: "EMBS", url: "/capitulos-tecnicos/embs" },
        { title: "GRSS", url: "/capitulos-tecnicos/grss" },
        { title: "IAS", url: "/capitulos-tecnicos/ias" },
        { title: "RAS", url: "/capitulos-tecnicos/ras" },
        { title: "OES", url: "/capitulos-tecnicos/oes" },
        { title: "PES", url: "/capitulos-tecnicos/pes" },
        { title: "PHOTONICS", url: "/capitulos-tecnicos/photonics" },
        
      ],
    },
    {
      title: "GRUPOS DE AFINIDAD",
      url: "#",
      items: [
        { title: "SIGHT", url: "/grupos-de-afinidad/sight" },
        { title: "WIE", url: "/grupos-de-afinidad/wie" },
      ],
    },
    {
      title: "CONTACTO",
      url: "/contact",
    },
  ],
  mobileExtraLinks: [
    { name: "Press", url: "/press" },
    { name: "Contact", url: "/contact" },
  ],
  auth: {
    login: { text: "Log in", url: "/login" },
    signup: { text: "Join IEEE", url: "https://www.ieee.org/membership/join/index.html" },
  },
};
