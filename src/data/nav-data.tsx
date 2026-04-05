import React from "react";
import { Book, Sunset, Trees, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export const IEEELogo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex items-center gap-2', className)}>
            <div className="flex w-9 h-9 items-center justify-center rounded-full border-2 border-[#0b5ea8] bg-[#0b5ea8] text-white">
                <span className="text-[9px] font-extrabold leading-none tracking-tight">IEEE</span>
            </div>
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
        { title: "COMSOC", url: "/capitulos-tecnicos/comsoc" },
        { title: "IAS", url: "/capitulos-tecnicos/ias" },
        { title: "RAS", url: "/capitulos-tecnicos/ras" },
        { title: "CS", url: "/capitulos-tecnicos/cs" },
        { title: "PES", url: "/capitulos-tecnicos/pes" },
        { title: "CSS", url: "/capitulos-tecnicos/css" },
        { title: "OES", url: "/capitulos-tecnicos/oes" },
      ],
    },
    {
      title: "GRUPOS DE AFINIDAD",
      url: "#",
      items: [
        { title: "WIE", url: "/grupos-de-afinidad/wie" },
        { title: "SIGHT", url: "/grupos-de-afinidad/sight" },
      ],
    },
    {
      title: "EVENTOS & ACTIVIDADES",
      url: "#",
      items: [
        { title: "Congresos", url: "/eventos-y-actividades/congresos" },
        { title: "Cursos y Talleres", url: "/eventos-y-actividades/cursos-y-talleres" },
        { title: "Otras Actividades", url: "/eventos-y-actividades/otras-actividades" },
        { title: "Concursos", url: "/eventos-y-actividades/concursos" },
        { title: "Premios Obtenidos", url: "/eventos-y-actividades/premios" },
        { title: "Calendario", url: "/eventos-y-actividades/calendario" },
      ],
    },
    {
      title: "CONTACTO",
      url: "#",
    },
    {
      title: "CAPÍTULOS EVENTOS",
      url: "#",
    },
  ],
  mobileExtraLinks: [
    { name: "Press", url: "/press" },
    { name: "Contact", url: "/contact" },
  ],
  auth: {
    login: { text: "Log in", url: "/login" },
    signup: { text: "Join IEEE", url: "https://www.ieee.org/membership-catalog/productdetail/showProductDetailPage.html?product=MEMIEEE500&searchResults=Y" },
  },
};
