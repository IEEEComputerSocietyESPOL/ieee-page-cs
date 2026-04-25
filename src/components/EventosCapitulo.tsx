"use client";
import { useEventos } from "@/hooks/useEventos";
import { ExternalLink } from "lucide-react";

export default function EventosCapitulo({ capitulo, color }: { capitulo: string; color: string }) {
  const { eventos, loading } = useEventos(capitulo);

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 gap-4">
        {[1, 2].map((i) => (
          <div key={i} className="h-48 rounded-2xl bg-[#f7f8fb] border border-[#e5eaf3] animate-pulse" />
        ))}
      </div>
    );
  }

  if (eventos.length === 0) {
    return (
      <div className="bg-[#f7f8fb] border border-[#e5eaf3] rounded-2xl p-8 text-center">
        <p className="text-[#6b7a90]">Próximamente se publicarán las actividades y eventos de este capítulo.</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {eventos.map((evento) => (
        <div key={evento.id} className="bg-white border border-[#e5eaf3] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col">
          {evento.imagen && (
            <div className="aspect-video bg-[#f7f8fb] overflow-hidden">
              <img
                src={evento.imagen}
                alt={evento.titulo}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="p-6 flex flex-col flex-1">
            <p className="text-xs font-semibold mb-2" style={{ color }}>{evento.fecha}</p>
            <h3 className="text-[#0b1f33] font-bold text-lg mb-2 leading-snug">{evento.titulo}</h3>
            <p className="text-[#6b7a90] text-sm leading-relaxed line-clamp-3 flex-1 whitespace-pre-wrap">{evento.descripcion}</p>
            {evento.link && evento.link !== "#" && (
              <a
                href={evento.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 font-semibold text-sm hover:underline"
                style={{ color }}
              >
                Ver más <ExternalLink className="size-3.5" />
              </a>
            )}
          </div>
          <div className="h-1 w-full" style={{ backgroundColor: color }} />
        </div>
      ))}
    </div>
  );
}