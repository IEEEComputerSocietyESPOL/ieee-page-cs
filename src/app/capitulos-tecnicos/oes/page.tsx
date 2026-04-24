import { Navbar1 } from "@/components/blocks/shadcnblocks-com-navbar1";
import { ieeeNavData } from "@/data/nav-data";
import { ArrowRight, ExternalLink } from "lucide-react";

const OES_COLOR = "#0213a8";

const directivaOES = [
  { nombre: "Ing. Rafael Dario González Muñoz", rol: "Consejero", imagen: "/directivas/OES/Rafael Dario González Muñoz - Consejero.jpg" },
  { nombre: "Ginger Yuleixy Rivera Ayón", rol: "Presidente", imagen: "/directivas/OES/Ginger Yuleixy Rivera Ayón - Presidenta.png" },
  { nombre: "Dayanna Elizabeth Mora Romero", rol: "Vicepresidente", imagen: "/directivas/OES/Dayanna Elizabeth Mora Romero - Vicepresidenta.png" },
  { nombre: "Leonardo Andrés Chóez Ramón", rol: "Secretario", imagen: "/directivas/OES/Leonardo Andrés Chóez Ramón - Secretario.jpeg" },
  { nombre: "Miguel Armando Guevara Barreno", rol: "Tesorero", imagen: "/directivas/OES/Miguel Armando Guevara Barreno - Tesorero.jpg" },
];

const areas = [
  { titulo: "Tecnología Marina", desc: "Desarrollo de sistemas y equipos tecnológicos para la exploración y monitoreo del entorno oceánico." },
  { titulo: "Robótica Submarina", desc: "Diseño y operación de vehículos submarinos autónomos y remotamente operados para aplicaciones marinas." },
  { titulo: "Acústica Submarina", desc: "Sistemas de sonar, comunicaciones acústicas y detección de objetos en entornos subacuáticos." },
  { titulo: "Energía Oceánica", desc: "Aprovechamiento de la energía de las olas, mareas y corrientes marinas como fuente renovable." },
];

const recursos = [
  { label: "IEEE Oceanic Engineering Society Global", href: "https://www.ieee-oes.org" },
  { label: "IEEE Xplore — Oceanic Engineering", href: "https://ieeexplore.ieee.org/browse/periodicals/topic?id=52" },
  { label: "Publicaciones y Revistas OES", href: "https://www.ieee-oes.org/publications" },
  { label: "Conferencias IEEE OES", href: "https://www.ieee-oes.org/conferences" },
];

const CardPersona = ({ persona }: { persona: typeof directivaOES[0] }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-white border border-[#e5eaf3] shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(2,19,168,0.15)] hover:-translate-y-1">
    <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl" style={{ backgroundColor: OES_COLOR }} />
    <div className="aspect-[3/4] w-full overflow-hidden mt-1.5" style={{ background: `linear-gradient(135deg, #010a5c, ${OES_COLOR})` }}>
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
      <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-1" style={{ color: OES_COLOR }}>{persona.rol}</p>
      <h3 className="text-[#0b1f33] font-bold text-base leading-snug">{persona.nombre}</h3>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style={{ backgroundColor: OES_COLOR }} />
  </div>
);

export default function OESPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="bg-white border-b border-[#e5eaf3]">
        <Navbar1 {...ieeeNavData} forceScrolled={true} />
      </div>

      <main className="flex-1 container mx-auto px-6 pt-32 pb-20 max-w-6xl">

        {/* Hero */}
        <div className="mb-20">
          <div className="w-16 h-1.5 rounded-full mb-6" style={{ backgroundColor: OES_COLOR }} />
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: OES_COLOR }}>
              Capítulo Técnico
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#0b1f33] leading-tight mb-6">
            Oceanic Engineering Society
          </h1>
          <p className="text-[#6b7a90] text-lg leading-relaxed max-w-2xl mb-8">
            El IEEE Oceanic Engineering Society es la comunidad líder en el desarrollo de tecnología para la exploración y aprovechamiento del océano. En ESPOL, fomentamos el desarrollo de habilidades en robótica submarina, acústica y energía oceánica.
          </p>
          <a
            href="https://www.ieee-oes.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full transition-colors hover:opacity-90"
            style={{ backgroundColor: OES_COLOR }}
          >
            Conoce IEEE OES Global <ExternalLink className="size-4" />
          </a>
        </div>

        {/* Sobre el capítulo */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: OES_COLOR }}>Sobre Nosotros</p>
            <h2 className="text-3xl font-bold text-[#0b1f33] mb-6">
              Explorando las profundidades del océano
            </h2>
            <p className="text-[#3c4a5f] leading-relaxed mb-4">
              El capítulo IEEE Oceanic Engineering Society de ESPOL reúne a estudiantes apasionados por la tecnología marina y la exploración oceánica, brindando un espacio para aprender, colaborar y crecer profesionalmente.
            </p>
            <p className="text-[#6b7a90] leading-relaxed">
              Organizamos talleres, proyectos de robótica submarina, charlas con expertos y actividades prácticas que preparan a nuestros miembros para los retos de la ingeniería oceánica moderna.
            </p>
          </div>
          <div className="flex-1 w-full flex items-center justify-center">
            <img
              src="/logo_character/oes.png"
              alt="IEEE Oceanic Engineering Society"
              className="w-90 h-auto object-contain"
            />
          </div>
        </div>

        {/* Áreas de enfoque */}
        <div className="mb-24">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: OES_COLOR }}>Áreas de Enfoque</p>
          <h2 className="text-3xl font-bold text-[#0b1f33] mb-10">¿Qué hacemos?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {areas.map((area) => (
              <div key={area.titulo} className="bg-[#f7f8fb] border border-[#e5eaf3] rounded-2xl p-6 border-l-4" style={{ borderLeftColor: OES_COLOR }}>
                <h3 className="text-[#0b1f33] font-bold text-lg mb-2">{area.titulo}</h3>
                <p className="text-[#6b7a90] leading-relaxed text-sm">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Directiva OES */}
        <div className="mb-24">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: OES_COLOR }}>Equipo</p>
          <h2 className="text-3xl font-bold text-[#0b1f33] mb-10">Directiva del Capítulo</h2>
          <div className="grid grid-cols-3 gap-6 max-w-[700px] mx-auto mb-6">
            {directivaOES.slice(0, 3).map((persona, idx) => (
              <CardPersona key={idx} persona={persona} />
            ))}
          </div>
          <div className="flex justify-center gap-6 max-w-[700px] mx-auto">
            {directivaOES.slice(3).map((persona, idx) => (
              <div key={idx} className="w-full max-w-[calc(33%-12px)]">
                <CardPersona persona={persona} />
              </div>
            ))}
          </div>
        </div>

        {/* Actividades */}
        <div className="mb-24">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: OES_COLOR }}>Actividades</p>
          <h2 className="text-3xl font-bold text-[#0b1f33] mb-6">Próximas Actividades</h2>
          <div className="bg-[#f7f8fb] border border-[#e5eaf3] rounded-2xl p-8 text-center">
            <p className="text-[#6b7a90]">Próximamente se publicarán las actividades y eventos del capítulo OES.</p>
          </div>
        </div>

        {/* Recursos */}
        <div className="mb-24">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: OES_COLOR }}>Recursos</p>
          <h2 className="text-3xl font-bold text-[#0b1f33] mb-8">Links de Interés</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {recursos.map((r) => (
              <a
                key={r.label}
                href={r.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between bg-[#f7f8fb] border border-[#e5eaf3] rounded-2xl p-5 hover:border-[#0213a8] hover:shadow-[0_4px_20px_rgba(2,19,168,0.1)] transition-all group"
              >
                <span className="text-[#0b1f33] font-semibold group-hover:text-[#0213a8] transition-colors">{r.label}</span>
                <ExternalLink className="size-4 text-[#6b7a90] group-hover:text-[#0213a8] transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-16 border-t border-[#e5eaf3]">
          <h3 className="text-2xl font-bold text-[#0b1f33] mb-4">¿Quieres formar parte del OES?</h3>
          <p className="text-[#6b7a90] mb-8 max-w-md mx-auto">Únete al capítulo IEEE Oceanic Engineering Society y desarrolla tus habilidades en tecnología marina junto a nuestra comunidad.</p>
          <a
            href="https://www.ieee.org/membership/join/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3 rounded-full transition-colors hover:opacity-90"
            style={{ backgroundColor: OES_COLOR }}
          >
            Únete a IEEE OES <ArrowRight className="size-4" />
          </a>
        </div>

      </main>
    </div>
  );
}