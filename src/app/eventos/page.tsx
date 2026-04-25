"use client";
import { Navbar1 } from "@/components/blocks/shadcnblocks-com-navbar1";
import { ieeeNavData } from "@/data/nav-data";
import { useEventos } from "@/hooks/useEventos";
import { ExternalLink } from "lucide-react";

export default function EventosPage() {
  const { eventos, loading } = useEventos();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="bg-white border-b border-[#e5eaf3]">
        <Navbar1 {...ieeeNavData} forceScrolled={true} />
      </div>
      <main className="flex-1 container mx-auto px-6 pt-32 pb-20 max-w-6xl">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[#0b5ea8] font-semibold mb-4">IEEE ESPOL</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b1f33] leading-tight mb-6">
            Eventos
          </h1>
          <div className="w-16 h-1 bg-[#0b5ea8] rounded-full mb-6" />
          <p className="text-[#6b7a90] text-lg leading-relaxed max-w-2xl">
            Descubre todos los eventos organizados por IEEE ESPOL y sus capítulos técnicos.
          </p>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-72 rounded-2xl bg-[#f7f8fb] border border-[#e5eaf3] animate-pulse" />
            ))}
          </div>
        ) : eventos.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#6b7a90] text-lg">No hay eventos disponibles.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventos.map((evento) => (
              <div key={evento.id} className="group bg-white border border-[#e5eaf3] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="aspect-video bg-[#f7f8fb] overflow-hidden">
                  {evento.imagen ? (
                    <img
                      src={evento.imagen}
                      alt={evento.titulo}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-[linear-gradient(135deg,_#0b3e73,_#0b5ea8)]" />
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs text-[#0b5ea8] font-semibold">{evento.fecha}</p>
                    {evento.activo && (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                        Destacado
                      </span>
                    )}
                  </div>
                  {evento.capitulos && evento.capitulos.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {evento.capitulos.map((cap) => (
                        <span key={cap} className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#f0f7ff] text-[#0b5ea8] border border-[#0b5ea8]/20">
                          {cap.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  )}
                  <h3 className="text-[#0b1f33] font-bold text-lg mb-2 leading-snug line-clamp-2">
                    {evento.titulo}
                  </h3>
                  <p className="text-[#6b7a90] text-sm leading-relaxed line-clamp-3 flex-1">
                    {evento.descripcion}
                  </p>
                  {evento.link && evento.link !== "#" && (
                    <a
                      href={evento.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-[#0b5ea8] font-semibold text-sm hover:underline"
                    >
                      Ver más <ExternalLink className="size-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}