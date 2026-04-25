"use client";
import { Navbar1 } from "@/components/blocks/shadcnblocks-com-navbar1";
import { ieeeNavData } from "@/data/nav-data";
import { useDirectiva } from "@/hooks/useDirectiva";

const CardPersona = ({ persona }: { persona: { nombre: string; rol: string; imagen: string; correo: string } }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-white border border-[#e5eaf3] shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(11,94,168,0.15)] hover:-translate-y-1">
    <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-[#0b5ea8]" />
    <div className="aspect-[3/4] w-full overflow-hidden mt-1.5 bg-[linear-gradient(135deg,_#0b3e73,_#0b5ea8)]">
      {persona.imagen ? (
        <img src={persona.imagen} alt={persona.nombre} className="w-full h-full object-cover object-top" />
      ) : (
        <div className="w-full h-full flex items-center justify-center opacity-30">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
          </svg>
        </div>
      )}
    </div>
    <div className="p-5">
      <p className="text-xs uppercase tracking-[0.2em] text-[#0b5ea8] font-semibold mb-1">{persona.rol}</p>
      <h3 className="text-[#0b1f33] font-bold text-base leading-snug mb-2">{persona.nombre}</h3>
      {persona.correo && (
        <a
          href={`mailto:${persona.correo}`}
          className="inline-flex items-center gap-1.5 text-xs text-[#6b7a90] hover:text-[#0b5ea8] transition-colors truncate"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,12 2,6"/>
          </svg>
          {persona.correo}
        </a>
      )}
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0b5ea8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
  </div>
);

export default function DirectivaPage() {
  const { directiva, loading } = useDirectiva("general");

  const consejeros = directiva.slice(0, 2);
  const directivos = directiva.slice(2);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="bg-white border-b border-[#e5eaf3]">
        <Navbar1 {...ieeeNavData} forceScrolled={true} />
      </div>

      <main className="flex-1 container mx-auto px-6 pt-32 pb-20 max-w-6xl">

        {/* Header */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[#0b5ea8] font-semibold mb-4">IEEE ESPOL</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b1f33] leading-tight mb-6">
            Directiva IEEE-ESPOL
          </h1>
          <div className="w-16 h-1 bg-[#0b5ea8] rounded-full mb-6" />
          <p className="text-[#6b7a90] text-lg leading-relaxed max-w-2xl">
            Conoce al equipo que lidera y organiza las actividades de la Rama Estudiantil IEEE ESPOL durante el presente período.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-3 gap-4 max-w-[700px] mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-[3/4] rounded-2xl bg-[#f7f8fb] border border-[#e5eaf3] animate-pulse" />
            ))}
          </div>
        ) : directiva.length === 0 ? (
          <div className="bg-[#f7f8fb] border border-[#e5eaf3] rounded-2xl p-8 text-center">
            <p className="text-[#6b7a90]">Próximamente se publicará la directiva general.</p>
          </div>
        ) : (
          <>
            {/* Consejeros y Mentor */}
            <div className="mb-10">
              <div className="flex justify-center gap-4 max-w-[700px] mx-auto">
                {consejeros.map((persona) => (
                  <div key={persona.id} className="w-full max-w-[calc(33%-8px)]">
                    <CardPersona persona={persona} />
                  </div>
                ))}
              </div>
            </div>

            {/* Directiva */}
            <div>
              <div className="grid grid-cols-3 gap-4 max-w-[700px] mx-auto">
                {directivos.map((persona) => (
                  <CardPersona key={persona.id} persona={persona} />
                ))}
              </div>
            </div>
          </>
        )}

      </main>
    </div>
  );
}