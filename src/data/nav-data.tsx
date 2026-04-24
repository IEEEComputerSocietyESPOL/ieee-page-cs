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
        { title: "Inteligencia Computacional", url: "/capitulos-tecnicos/cis" },
        { title: "Computación", url: "/capitulos-tecnicos/cs" },
        { title: "Sistemas de control", url: "/capitulos-tecnicos/css" },
        { title: "Comunicaciones", url: "/capitulos-tecnicos/comsoc" },
        { title: "Ingeniería en Medicina y Biología", url: "/capitulos-tecnicos/embs" },
        { title: "Geociencias y Teledetección", url: "/capitulos-tecnicos/grss" },
        { title: "Aplicaciones Industriales", url: "/capitulos-tecnicos/ias" },
        { title: "Robótica y Automatización", url: "/capitulos-tecnicos/ras" },
        { title: "Ingeniería Oceánica", url: "/capitulos-tecnicos/oes" },
        { title: "Potencia y Energía", url: "/capitulos-tecnicos/pes" },
        { title: "Fotónica", url: "/capitulos-tecnicos/photonics" },
        
      ],
    },
    {
      title: "GRUPOS DE AFINIDAD",
      url: "#",
      items: [
        { title: "Grupo de Interés Especial en Tecnología Humanitaria", url: "/grupos-de-afinidad/sight" },
        { title: "Mujeres en Ingeniería", url: "/grupos-de-afinidad/wie" },
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
