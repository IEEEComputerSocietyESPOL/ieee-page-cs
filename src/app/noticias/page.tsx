"use client";
import { useState } from "react";
import { Navbar1 } from "@/components/blocks/shadcnblocks-com-navbar1";
import { ieeeNavData } from "@/data/nav-data";
import { useNoticias } from "@/hooks/useNoticias";
import { ExternalLink } from "lucide-react";

const categorias = ["Todas", "Anuncio", "Logro", "Convocatoria", "Tecnología"];

const categoriaColor: Record<string, string> = {
  "Anuncio": "bg-blue-100 text-blue-700",
  "Logro": "bg-yellow-100 text-yellow-700",
  "Convocatoria": "bg-green-100 text-green-700",
  "Tecnología": "bg-cyan-100 text-cyan-700",
};

export default function NoticiasPage() {
  const { noticias, loading } = useNoticias();
  const [categoriaActiva, setCategoriaActiva] = useState("Todas");

  const noticiasFiltradas = categoriaActiva === "Todas"
    ? noticias
    : noticias.filter((n) => n.categoria === categoriaActiva);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="bg-white border-b border-[#e5eaf3]">
        <Navbar1 {...ieeeNavData} forceScrolled={true} />
      </div>
      <main className="flex-1 container mx-auto px-6 pt-32 pb-20 max-w-6xl">

        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[#0b5ea8] font-semibold mb-4">IEEE ESPOL</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b1f33] leading-tight mb-6">
            Noticias
          </h1>
          <div className="w-16 h-1 bg-[#0b5ea8] rounded-full mb-6" />
          <p className="text-[#6b7a90] text-lg leading-relaxed max-w-2xl">
            Mantente al día con las últimas noticias y novedades de IEEE ESPOL.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                categoriaActiva === cat
                  ? "bg-[#0b5ea8] text-white"
                  : "bg-[#f7f8fb] text-[#6b7a90] border border-[#e5eaf3] hover:border-[#0b5ea8] hover:text-[#0b5ea8]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de noticias */}
        {loading ? (
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-72 rounded-2xl bg-[#f7f8fb] border border-[#e5eaf3] animate-pulse" />
            ))}
          </div>
        ) : noticiasFiltradas.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#6b7a90] text-lg">No hay noticias en esta categoría.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {noticiasFiltradas.map((noticia) => (
              <div key={noticia.id} className="group bg-white border border-[#e5eaf3] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
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
        )}

      </main>
    </div>
  );
}