import { Navbar1 } from "@/components/blocks/shadcnblocks-com-navbar1";
import { ieeeNavData } from "@/data/nav-data";
import { ArrowRight, ExternalLink } from "lucide-react";

const SIGHT_COLOR = "#ef4c00";

const directivaSIGHT = [
  { nombre: "Nombre Apellido", rol: "Consejero", imagen: null },
  { nombre: "Nombre Apellido", rol: "Presidente", imagen: null },
  { nombre: "Nombre Apellido", rol: "Vicepresidente", imagen: null },
  { nombre: "Nombre Apellido", rol: "Secretario", imagen: null },
  { nombre: "Nombre Apellido", rol: "Tesorero", imagen: null },
];

const areas = [
  { titulo: "Tecnología Humanitaria", desc: "Desarrollo y aplicación de soluciones tecnológicas para abordar problemas sociales y mejorar la calidad de vida de comunidades vulnerables." },
  { titulo: "Acceso a Energía", desc: "Proyectos de electrificación rural y soluciones de energía renovable para comunidades sin acceso a la red eléctrica." },
  { titulo: "Salud y Tecnología", desc: "Aplicación de tecnología para mejorar el acceso a servicios de salud en comunidades con recursos limitados." },
  { titulo: "Educación Tecnológica", desc: "Iniciativas para promover el acceso a la educación STEM en comunidades desfavorecidas y reducir la brecha digital." },
];

const recursos = [
  { label: "IEEE SIGHT Global", href: "https://sight.ieee.org" },
  { label: "IEEE Humanitarian Activities", href: "https://www.ieee.org/about/corporate/humanitarian.html" },
  { label: "Proyectos SIGHT en el Mundo", href: "https://sight.ieee.org/projects" },
  { label: "IEEE TryEngineering", href: "https://tryengineering.org" },
];

const CardPersona = ({ persona }: { persona: typeof directivaSIGHT[0] }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-white border border-[#e5eaf3] shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(239,76,0,0.15)] hover:-translate-y-1">
    <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl" style={{ backgroundColor: SIGHT_COLOR }} />
    <div className="aspect-[3/4] w-full overflow-hidden mt-1.5" style={{ background: `linear-gradient(135deg, #8a2b00, ${SIGHT_COLOR})` }}>
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
      <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-1" style={{ color: SIGHT_COLOR }}>{persona.rol}</p>
      <h3 className="text-[#0b1f33] font-bold text-base leading-snug">{persona.nombre}</h3>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style={{ backgroundColor: SIGHT_COLOR }} />
  </div>
);

export default function SIGHTPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="bg-white border-b border-[#e5eaf3]">
        <Navbar1 {...ieeeNavData} forceScrolled={true} />
      </div>

      <main className="flex-1 container mx-auto px-6 pt-32 pb-20 max-w-6xl">

        {/* Hero */}
        <div className="mb-20">
          <div className="w-16 h-1.5 rounded-full mb-6" style={{ backgroundColor: SIGHT_COLOR }} />
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: SIGHT_COLOR }}>
              Grupo de Afinidad
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#0b1f33] leading-tight mb-6">
            Special Interest Group on Humanitarian Technology
          </h1>
          <p className="text-[#6b7a90] text-lg leading-relaxed max-w-2xl mb-8">
            El IEEE SIGHT es el grupo dedicado a promover el uso de la tecnología para el bien de la humanidad. En ESPOL, trabajamos en proyectos que impactan positivamente a comunidades vulnerables a través de soluciones tecnológicas innovadoras.
          </p>
          <a
            href="https://sight.ieee.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full transition-colors hover:opacity-90"
            style={{ backgroundColor: SIGHT_COLOR }}
          >
            Conoce IEEE SIGHT Global <ExternalLink className="size-4" />
          </a>
        </div>

        {/* Sobre el grupo */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: SIGHT_COLOR }}>Sobre Nosotros</p>
            <h2 className="text-3xl font-bold text-[#0b1f33] mb-6">
              Tecnología para transformar vidas
            </h2>
            <p className="text-[#3c4a5f] leading-relaxed mb-4">
              El grupo IEEE SIGHT de ESPOL reúne a estudiantes comprometidos con el uso de la tecnología para resolver problemas sociales y mejorar la calidad de vida de las comunidades más necesitadas.
            </p>
            <p className="text-[#6b7a90] leading-relaxed">
              Desarrollamos proyectos de impacto social, organizamos jornadas de voluntariado tecnológico y trabajamos en colaboración con organizaciones locales para llevar soluciones innovadoras a quienes más las necesitan.
            </p>
          </div>
          <div className="flex-1 w-full flex items-center justify-center">
            <img
              src="/logo_character/sight.png"
              alt="IEEE SIGHT"
              className="w-90 h-auto object-contain"
            />
          </div>
        </div>

        {/* Áreas de enfoque */}
        <div className="mb-24">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: SIGHT_COLOR }}>Áreas de Enfoque</p>
          <h2 className="text-3xl font-bold text-[#0b1f33] mb-10">¿Qué hacemos?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {areas.map((area) => (
              <div key={area.titulo} className="bg-[#f7f8fb] border border-[#e5eaf3] rounded-2xl p-6 border-l-4" style={{ borderLeftColor: SIGHT_COLOR }}>
                <h3 className="text-[#0b1f33] font-bold text-lg mb-2">{area.titulo}</h3>
                <p className="text-[#6b7a90] leading-relaxed text-sm">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Directiva SIGHT */}
        <div className="mb-24">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: SIGHT_COLOR }}>Equipo</p>
          <h2 className="text-3xl font-bold text-[#0b1f33] mb-10">Directiva del Grupo</h2>
          <div className="grid grid-cols-3 gap-6 max-w-[700px] mx-auto mb-6">
            {directivaSIGHT.slice(0, 3).map((persona, idx) => (
              <CardPersona key={idx} persona={persona} />
            ))}
          </div>
          <div className="flex justify-center gap-6 max-w-[700px] mx-auto">
            {directivaSIGHT.slice(3).map((persona, idx) => (
              <div key={idx} className="w-full max-w-[calc(33%-12px)]">
                <CardPersona persona={persona} />
              </div>
            ))}
          </div>
        </div>

        {/* Actividades */}
        <div className="mb-24">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: SIGHT_COLOR }}>Actividades</p>
          <h2 className="text-3xl font-bold text-[#0b1f33] mb-6">Próximas Actividades</h2>
          <div className="bg-[#f7f8fb] border border-[#e5eaf3] rounded-2xl p-8 text-center">
            <p className="text-[#6b7a90]">Próximamente se publicarán las actividades y eventos del grupo SIGHT.</p>
          </div>
        </div>

        {/* Recursos */}
        <div className="mb-24">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: SIGHT_COLOR }}>Recursos</p>
          <h2 className="text-3xl font-bold text-[#0b1f33] mb-8">Links de Interés</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {recursos.map((r) => (
              <a
                key={r.label}
                href={r.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between bg-[#f7f8fb] border border-[#e5eaf3] rounded-2xl p-5 hover:border-[#ef4c00] hover:shadow-[0_4px_20px_rgba(239,76,0,0.1)] transition-all group"
              >
                <span className="text-[#0b1f33] font-semibold group-hover:text-[#ef4c00] transition-colors">{r.label}</span>
                <ExternalLink className="size-4 text-[#6b7a90] group-hover:text-[#ef4c00] transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-16 border-t border-[#e5eaf3]">
          <h3 className="text-2xl font-bold text-[#0b1f33] mb-4">¿Quieres formar parte del SIGHT?</h3>
          <p className="text-[#6b7a90] mb-8 max-w-md mx-auto">Únete al grupo IEEE SIGHT y sé parte del movimiento que usa la tecnología para transformar vidas y comunidades.</p>
          <a
            href="https://www.ieee.org/membership/join/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3 rounded-full transition-colors hover:opacity-90"
            style={{ backgroundColor: SIGHT_COLOR }}
          >
            Únete a IEEE SIGHT <ArrowRight className="size-4" />
          </a>
        </div>

      </main>
    </div>
  );
}