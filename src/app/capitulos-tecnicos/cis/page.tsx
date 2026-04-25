"use client";
import { Navbar1 } from "@/components/blocks/shadcnblocks-com-navbar1";
import { ieeeNavData } from "@/data/nav-data";
import { ArrowRight, ExternalLink } from "lucide-react";
import EventosCapitulo from "@/components/EventosCapitulo";
import { useDirectiva } from "@/hooks/useDirectiva";

const CIS_COLOR = "#0099cc";
const CIS_WHATSAPP_VOLUNTARIOS = "https://chat.whatsapp.com/LINK_DEL_GRUPO";

const areas = [
  { titulo: "Redes Neuronales", desc: "Diseño e implementación de redes neuronales artificiales para reconocimiento de patrones y aprendizaje automático." },
  { titulo: "Lógica Difusa", desc: "Aplicación de sistemas de lógica difusa para el manejo de incertidumbre en problemas de control y toma de decisiones." },
  { titulo: "Computación Evolutiva", desc: "Algoritmos genéticos, programación evolutiva y otras técnicas inspiradas en la evolución natural para optimización." },
  { titulo: "Aprendizaje Automático", desc: "Técnicas de machine learning supervisado, no supervisado y por refuerzo aplicadas a problemas del mundo real." },
];

const recursos = [
  { label: "IEEE Computational Intelligence Society Global", href: "https://cis.ieee.org" },
  { label: "IEEE Xplore — Computational Intelligence", href: "https://ieeexplore.ieee.org/browse/periodicals/topic?id=41" },
  { label: "Publicaciones y Revistas CIS", href: "https://cis.ieee.org/publications" },
  { label: "Conferencias IEEE CIS", href: "https://cis.ieee.org/conferences" },
];

const CardPersona = ({ persona }: { persona: { nombre: string; rol: string; imagen: string; correo: string } }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-white border border-[#e5eaf3] shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,153,204,0.15)] hover:-translate-y-1">
    <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl" style={{ backgroundColor: CIS_COLOR }} />
    <div className="aspect-[3/4] w-full overflow-hidden mt-1.5" style={{ background: `linear-gradient(135deg, #005577, ${CIS_COLOR})` }}>
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
      <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-1" style={{ color: CIS_COLOR }}>{persona.rol}</p>
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
    <div className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style={{ backgroundColor: CIS_COLOR }} />
  </div>
);

export default function CISPage() {
  const { directiva, loading: loadingDirectiva } = useDirectiva("cis");

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="bg-white border-b border-[#e5eaf3]">
        <Navbar1 {...ieeeNavData} forceScrolled={true} />
      </div>

      <main className="flex-1 container mx-auto px-6 pt-32 pb-20 max-w-6xl">

        {/* Hero */}
        <div className="mb-20">
          <div className="w-16 h-1.5 rounded-full mb-6" style={{ backgroundColor: CIS_COLOR }} />
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: CIS_COLOR }}>
              Capítulo Técnico
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#0b1f33] leading-tight mb-6">
            Computational Intelligence Society
          </h1>
          <p className="text-[#6b7a90] text-lg leading-relaxed max-w-2xl mb-8">
            El IEEE Computational Intelligence Society es la comunidad líder en el avance de las tecnologías de inteligencia computacional. En ESPOL, fomentamos el desarrollo de habilidades en redes neuronales, lógica difusa y computación evolutiva.
          </p>
          <a
            href="https://cis.ieee.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full transition-colors hover:opacity-90"
            style={{ backgroundColor: CIS_COLOR }}
          >
            Conoce IEEE CIS Global <ExternalLink className="size-4" />
          </a>
        </div>

        {/* Sobre el capítulo */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: CIS_COLOR }}>Sobre Nosotros</p>
            <h2 className="text-3xl font-bold text-[#0b1f33] mb-6">
              Explorando los límites de la inteligencia artificial
            </h2>
            <p className="text-[#3c4a5f] leading-relaxed mb-4">
              El capítulo IEEE Computational Intelligence Society de ESPOL reúne a estudiantes apasionados por la inteligencia artificial y el aprendizaje automático, brindando un espacio para aprender, colaborar y crecer profesionalmente.
            </p>
            <p className="text-[#6b7a90] leading-relaxed">
              Organizamos talleres de machine learning, competencias de IA, charlas técnicas y proyectos colaborativos que preparan a nuestros miembros para los retos de la inteligencia computacional moderna.
            </p>
          </div>
          <div className="flex-1 w-full flex items-center justify-center">
            <img src="/logo_character/cis.png" alt="IEEE Computational Intelligence Society" className="w-90 h-auto object-contain" />
          </div>
        </div>

        {/* Áreas de enfoque */}
        <div className="mb-24">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: CIS_COLOR }}>Áreas de Enfoque</p>
          <h2 className="text-3xl font-bold text-[#0b1f33] mb-10">¿Qué hacemos?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {areas.map((area) => (
              <div key={area.titulo} className="bg-[#f7f8fb] border border-[#e5eaf3] rounded-2xl p-6 border-l-4" style={{ borderLeftColor: CIS_COLOR }}>
                <h3 className="text-[#0b1f33] font-bold text-lg mb-2">{area.titulo}</h3>
                <p className="text-[#6b7a90] leading-relaxed text-sm">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Directiva CIS */}
        <div className="mb-24">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: CIS_COLOR }}>Equipo</p>
          <h2 className="text-3xl font-bold text-[#0b1f33] mb-10">Directiva del Capítulo</h2>
          {loadingDirectiva ? (
            <div className="grid grid-cols-3 gap-6 max-w-[700px] mx-auto">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[3/4] rounded-2xl bg-[#f7f8fb] border border-[#e5eaf3] animate-pulse" />
              ))}
            </div>
          ) : directiva.length === 0 ? (
            <div className="bg-[#f7f8fb] border border-[#e5eaf3] rounded-2xl p-8 text-center">
              <p className="text-[#6b7a90]">Próximamente se publicará la directiva del capítulo.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-3 gap-6 max-w-[700px] mx-auto mb-6">
                {directiva.slice(0, 3).map((persona) => (
                  <CardPersona key={persona.id} persona={persona} />
                ))}
              </div>
              {directiva.length > 3 && (
                <div className="flex justify-center gap-6 max-w-[700px] mx-auto">
                  {directiva.slice(3).map((persona) => (
                    <div key={persona.id} className="w-full max-w-[calc(33%-12px)]">
                      <CardPersona persona={persona} />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Actividades */}
        <div className="mb-24">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: CIS_COLOR }}>Actividades</p>
          <h2 className="text-3xl font-bold text-[#0b1f33] mb-6">Próximas Actividades</h2>
          <EventosCapitulo capitulo="cis" color={CIS_COLOR} />
        </div>

        {/* Recursos */}
        <div className="mb-24">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: CIS_COLOR }}>Recursos</p>
          <h2 className="text-3xl font-bold text-[#0b1f33] mb-8">Links de Interés</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {recursos.map((r) => (
              <a
                key={r.label}
                href={r.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between bg-[#f7f8fb] border border-[#e5eaf3] rounded-2xl p-5 hover:border-[#0099cc] hover:shadow-[0_4px_20px_rgba(0,153,204,0.1)] transition-all group"
              >
                <span className="text-[#0b1f33] font-semibold group-hover:text-[#0099cc] transition-colors">{r.label}</span>
                <ExternalLink className="size-4 text-[#6b7a90] group-hover:text-[#0099cc] transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </div>

        {/* Voluntariado */}
        <div className="mb-24">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: CIS_COLOR }}>Voluntariado</p>
          <h2 className="text-3xl font-bold text-[#0b1f33] mb-4">¿Quieres ser voluntario?</h2>
          <div className="bg-[#f7f8fb] border border-[#e5eaf3] rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[#3c4a5f] leading-relaxed max-w-lg">
              Únete al grupo de voluntarios del capítulo y sé parte activa en la organización de eventos, talleres y actividades. No necesitas ser miembro IEEE para participar.
            </p>
            <a
              href={CIS_WHATSAPP_VOLUNTARIOS}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-8 py-4 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Unirme como voluntario
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-16 border-t border-[#e5eaf3]">
          <h3 className="text-2xl font-bold text-[#0b1f33] mb-4">¿Quieres formar parte de CIS?</h3>
          <p className="text-[#6b7a90] mb-8 max-w-md mx-auto">Únete al capítulo IEEE Computational Intelligence Society y desarrolla tus habilidades en inteligencia artificial junto a nuestra comunidad.</p>
          <a
            href="https://www.ieee.org/membership/join/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3 rounded-full transition-colors hover:opacity-90"
            style={{ backgroundColor: CIS_COLOR }}
          >
            Únete a IEEE CIS <ArrowRight className="size-4" />
          </a>
        </div>

      </main>
    </div>
  );
}