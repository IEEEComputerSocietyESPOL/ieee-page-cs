"use client";
import { useNoticias } from "@/hooks/useNoticias";
import { ExternalLink } from "lucide-react";

const categoriaColor: Record<string, string> = {
  "Anuncio": "bg-blue-100 text-blue-700",
  "Evento": "bg-purple-100 text-purple-700",
  "Logro": "bg-yellow-100 text-yellow-700",
  "Convocatoria": "bg-green-100 text-green-700",
  "Tecnología": "bg-cyan-100 text-cyan-700",
  "Capítulo": "bg-orange-100 text-orange-700",
};

export default function SeccionNoticias() {
  const { noticias, loading } = useNoticias(true);

  if (loading) {
    return (
      <div className="mx-auto w-full max-w-6xl px-6 pb-10 lg:px-10">
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-72 rounded-2xl bg-[#f7f8fb] border border-[#e5eaf3] animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (noticias.length === 0) return null;

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-16 lg:px-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-[#0b1f33]">Noticias Destacadas</h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {noticias.map((noticia) => (
          <div
            key={noticia.id}
            className="group bg-white border border-[#e5eaf3] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            {/* Imagen */}
            <div className="aspect-video bg-[#f7f8fb] overflow-hidden">
              {noticia.imagen ? (
                <img
                  src={noticia.imagen}
                  alt={noticia.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full bg-[linear-gradient(135deg,_#0b3e73,_#0b5ea8)]" />
              )}
            </div>

            {/* Contenido */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoriaColor[noticia.categoria] ?? "bg-gray-100 text-gray-600"}`}>
                  {noticia.categoria}
                </span>
                <span className="text-xs text-[#6b7a90]">{noticia.fecha}</span>
              </div>
              <h3 className="text-[#0b1f33] font-bold text-lg mb-2 leading-snug line-clamp-2">
                {noticia.titulo}
              </h3>
              <p className="text-[#6b7a90] text-sm leading-relaxed line-clamp-3 flex-1">
                {noticia.descripcion}
              </p>
              {noticia.link && noticia.link !== "#" && (
                <a
                  href={noticia.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-[#0b5ea8] font-semibold text-sm hover:underline"
                >
                  Leer más <ExternalLink className="size-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}