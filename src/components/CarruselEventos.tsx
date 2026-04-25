"use client";
import { useState, useEffect } from "react";
import { useEventos } from "@/hooks/useEventos";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

export default function CarruselEventos() {
  const { eventos, loading } = useEventos(undefined, true);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (eventos.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((c) => (c === eventos.length - 1 ? 0 : c + 1));
    }, 10000);
    return () => clearInterval(interval);
  }, [eventos.length]);

  if (loading) {
    return (
      <div className="mx-auto w-full max-w-6xl px-6 pb-10 pt-16 lg:px-10">
        <div className="h-64 rounded-3xl bg-[#f7f8fb] border border-[#e5eaf3] animate-pulse" />
      </div>
    );
  }

  if (eventos.length === 0) return null;

  const prev = () => setCurrent((c) => (c === 0 ? eventos.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === eventos.length - 1 ? 0 : c + 1));

  const evento = eventos[current];

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-10 pt-16 lg:px-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-[#0b1f33]">Eventos Destacados</h2>
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-[#e5eaf3] bg-white hover:bg-[#f7f8fb] flex items-center justify-center transition-colors shadow-sm"
          >
            <ChevronLeft className="size-5 text-[#0b1f33]" />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-[#e5eaf3] bg-white hover:bg-[#f7f8fb] flex items-center justify-center transition-colors shadow-sm"
          >
            <ChevronRight className="size-5 text-[#0b1f33]" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-[#e5eaf3] shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
        <div className="flex flex-col lg:flex-row max-h-[500px]">

          {/* Imagen */}
          <div className="lg:w-1/2 shrink-0 bg-[#f7f8fb] overflow-hidden flex items-center justify-center">
            {evento.imagen ? (
              <img
                src={evento.imagen}
                alt={evento.titulo}
                className="w-full h-full max-h-[500px] object-contain"
              />
            ) : (
              <div className="w-full h-full min-h-[300px] bg-[linear-gradient(135deg,_#0b3e73,_#0b5ea8)]" />
            )}
          </div>

          {/* Contenido */}
          <div className="lg:w-1/2 p-10 flex flex-col justify-between bg-white overflow-y-auto max-h-[500px]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#0b5ea8] font-semibold mb-3">{evento.fecha}</p>
              {evento.capitulos && evento.capitulos.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {evento.capitulos.map((cap) => (
                    <span key={cap} className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#f0f7ff] text-[#0b5ea8] border border-[#0b5ea8]/20">
                      {cap.toUpperCase()}
                    </span>
                  ))}
                </div>
              )}
              <h3 className="text-2xl font-bold text-[#0b1f33] mb-4">{evento.titulo}</h3>
              <p className="text-[#6b7a90] leading-relaxed whitespace-pre-wrap">{evento.descripcion}</p>
            </div>
            {evento.link && evento.link !== "#" && (
              <a
                href={evento.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-[#0b5ea8] hover:bg-[#0b3e73] text-white font-semibold px-6 py-3 rounded-full transition-colors self-start"
              >
                Ver más <ExternalLink className="size-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Indicadores */}
      {eventos.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {eventos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === current ? "bg-[#0b5ea8]" : "bg-[#e5eaf3]"
              }`}
            />
          ))}
        </div>
      )}

    </section>
  );
}