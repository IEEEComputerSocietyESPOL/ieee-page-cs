import { HeroSection } from "@/components/blocks/hero-section-5";
import Link from 'next/link';
import CarruselEventos from "@/components/CarruselEventos";
import SeccionNoticias from "@/components/SeccionNoticias";

const chapterStats = [
  { id: "cs", name: "Computer Society", count: 18, color: "#FFA300", logo: "/logo_character/cs.png" },
  { id: "ras", name: "Robotics & Automation Society", count: 22, color: "#862633", logo: "/logo_character/ras.png" },
  { id: "wie", name: "Women in Engineering", count: 24, color: "#522367", logo: "/logo_character/wie.png", url: "/grupos-de-afinidad/wie" },
  { id: "pes", name: "Power & Energy Society", count: 22, color: "#006633", logo: "/logo_character/pes.png" },
  { id: "cis", name: "Computational Intelligence Society", count: 19, color: "#0099cc", logo: "/logo_character/cis.png" },
  { id: "ias", name: "Industry Applications Society", count: 31, color: "#00843D", logo: "/logo_character/ias.png" },
  { id: "embs", name: "Medicine & Biology Society", count: 27, color: "#772583", logo: "/logo_character/embs.png" },
  { id: "comsoc", name: "Communications Society", count: 14, color: "#00AEEF", logo: "/logo_character/comsoc.png" },
  { id: "css", name: "Control Systems Society", count: 14, color: "#012431", logo: "/logo_character/css.png" },
  { id: "phs", name: "Photonics Society", count: 5, color: "#54c4ec", logo: "/logo_character/phs.png" },
  { id: "oes", name: "Oceanic Engineering Society", count: 6, color: "#0213a8", logo: "/logo_character/oes.png" },
  { id: "sight", name: "Special Interest Group on Humanitarian Technology", count: 17, color: "#ef4c00", logo: "/logo_character/sight.png", url: "/grupos-de-afinidad/sight" },
  { id: "grss", name: "Geoscience and Remote Sensing Society", count: 5, color: "#00843D", logo: "/logo_character/grss.png" },
];

const membershipBenefits = [
  "Networking Internacional",
  "Reconocimiento a nivel estudiantil y profesional",
  "Oportunidades académicas y profesionales",
  "Eventos exclusivos",
];

const footerColumns = [
  {
    title: "ABOUT IEEE",
    links: [
      { label: "¿Qué es IEEE?", href: "https://www.ieee.org/about/index.html" },
      { label: "Historia", href: "https://www.ieee.org/about/ieee-history.html" },
      { label: "Estructura organizacional", href: "https://www.ieee.org/about/corporate/index.html" },
      { label: "Ética organizacional", href: "https://www.ieee.org/about/ethics.html" },
    ],
  },
  {
    title: "CONTACTO",
    links: [
      { label: "ieee@espol.edu.ec", href: "mailto:ieee@espol.edu.ec" },
      { label: "Campus Gustavo Galindo, ESPOL, Guayaquil, Ecuador", href: "https://maps.app.goo.gl/NbQNhee1tr5b2Cqv8" },
    ],
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">

      <HeroSection />


      <main className="relative z-10">
        <div className="relative z-10">

          <CarruselEventos />
          <div className="flex justify-center mt-4">
            <a
              href="/eventos"
              className="inline-flex items-center gap-2 border border-[#0b5ea8] text-[#0b5ea8] hover:bg-[#0b5ea8] hover:text-white font-semibold px-6 py-2.5 rounded-full transition-colors text-sm"
            >
              Ver todos los eventos
              <span className="text-base">→</span>
            </a>
          </div>
          
          <SeccionNoticias />
          <div className="flex justify-center mt-8">
          <a
            href="/noticias"
            className="inline-flex items-center gap-2 border border-[#0b5ea8] text-[#0b5ea8] hover:bg-[#0b5ea8] hover:text-white font-semibold px-6 py-2.5 rounded-full transition-colors text-sm"
          >
            Ver todas las noticias
            <span className="text-base">→</span>
          </a>
        </div>

          {/* Sección: Nuestro Impacto */}
          <section id="stats" className="mx-auto w-full max-w-6xl px-6 pb-40 pt-16 lg:px-10">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between mb-12">
              <div className="flex-1">
                <h2 className="font-[var(--font-heading)] text-3xl text-[#0b1f33] md:text-5xl">Nuestro Impacto</h2>
                <p className="mt-4 max-w-lg text-[#6b7a90]">Somos la rama estudiantil más activa, compuesta por múltiples capítulos técnicos dedicados a potenciar el talento de cada miembro.</p>
              </div>
              <div className="flex flex-col shrink-0 text-center md:text-right md:border-l-4 md:border-[#0b5ea8] md:pl-6 md:py-2">
                <span className="text-5xl md:text-7xl font-bold text-[#0b5ea8]">131</span>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6b7a90] mt-2">Miembros Activos</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {chapterStats.map((stat) => (
                <Link
                  key={stat.id}
                  href={stat.url ?? `/capitulos-tecnicos/${stat.id}`}
                  className="group relative overflow-hidden rounded-2xl border border-[#e5eaf3] bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:shadow-xl hover:shadow-slate-300/50 hover:-translate-y-1.5 cursor-pointer">
                  <div
                    className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl"
                    style={{ backgroundColor: stat.color }}
                  />
                  <div
                    className="absolute -right-6 -top-6 h-32 w-32 rounded-full opacity-10 blur-3xl transition-opacity duration-300 group-hover:opacity-20"
                    style={{ backgroundColor: stat.color }}
                  />
                  <div className="relative z-10 flex flex-col justify-between h-full min-h-[140px]">
                    <div className="flex items-center mb-3 min-h-[64px]">
                      <img
                        src={stat.logo}
                        alt={stat.name}
                        className="w-full max-h-16 object-contain object-left"
                      />
                    </div>
                    <div className="mt-auto flex items-end justify-between">
                      <span className="text-4xl font-bold text-[#0b1f33]">{stat.count}</span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#6b7a90] mb-1.5">Miembros</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Sección: Membresía */}
          <section id="explore" className="mx-auto w-full max-w-6xl px-6 pb-16 lg:px-10">
            <div className="mb-12 flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="flex-1">
                <h2 className="font-[var(--font-heading)] text-3xl text-[#0b1f33] md:text-5xl">
                  Membresía
                </h2>
                <p className="mt-4 max-w-2xl text-[#6b7a90] leading-relaxed">
                  Afiliación a la rama estudiantil y sus diferentes capítulos técnicos, en adición a sus múltiples ventajas tanto académicas como laborales.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_top,_#1f6db5,_#0b3e73_55%,_#082b4f_100%)] px-10 py-12 text-white">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <h3 className="font-[var(--font-heading)] text-3xl">Beneficios de la Membresía</h3>
                <div className="grid gap-3 text-sm">
                  {membershipBenefits.map((link) => (
                    <span key={link} className="flex items-center gap-2">
                      <span className="text-lg">›</span>
                      {link}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/20 flex justify-center">
                <a
                  href="/acerca-de/membresias"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition-colors hover:bg-white/10 active:bg-white/20"
                >
                  Más información sobre Membresías
                  <span className="text-base">↗</span>
                </a>
              </div>
            </div>
          </section>

        </div>
        
        {/* Sección: Voluntariado */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-16 lg:px-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#0b5ea8] font-semibold mb-4">Voluntariado</p>
              <h2 className="font-[var(--font-heading)] text-3xl text-[#0b1f33] md:text-4xl mb-4">
                ¿Quieres ser parte del equipo?
              </h2>
              <p className="text-[#6b7a90] leading-relaxed mb-6">
                No necesitas ser miembro IEEE para contribuir. Únete a nuestro grupo de voluntarios y ayuda a organizar eventos, talleres y actividades que impactan a la comunidad de ingeniería en ESPOL.
              </p>
              <a
                href="https://chat.whatsapp.com/LINK_DEL_GRUPO"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-6 py-3 rounded-full transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Unirme como voluntario
              </a>
            </div>
            <div className="overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_top,_#1f6db5,_#0b3e73_55%,_#082b4f_100%)] p-10 text-white">
              <h3 className="text-xl font-bold mb-6">¿Qué hacen los voluntarios?</h3>
              <div className="grid gap-4">
                {[
                  "Organización de eventos y talleres técnicos",
                  "Apoyo en la coordinación de capítulos",
                  "Difusión de actividades en redes sociales",
                  "Mentoría a nuevos miembros",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-lg shrink-0">›</span>
                    <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
</section>

        {/* Sección: CTA */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-12 lg:px-10">
          <div className="text-center">
            <h2 className="font-[var(--font-heading)] text-3xl text-[#0b1f33]">Engineer the Future. Join IEEE.</h2>
            <a
              href="https://www.ieee.org/membership/join/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full border border-[#0b5ea8] px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0b5ea8] transition-colors hover:bg-[#0b5ea8] hover:text-white active:bg-[#0b3e73]"
            >
              Join IEEE
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#e5eaf3] bg-[#f7f8fb]">
          <div className="mx-auto w-full max-w-6xl px-16 py-12 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr] text-sm text-[#3c4a5f]">

              <div className="flex flex-col gap-4">
                <img src="/ieeeespol-logo.png" alt="IEEE ESPOL" className="h-24 w-auto object-contain self-start" />
                <p className="text-sm text-[#3c4a5f] leading-relaxed max-w-xs">
                  IEEE ESPOL es la Rama Estudiantil del Instituto de Ingenieros Eléctricos y Electrónicos en la Escuela Superior Politécnica del Litoral, parte de la comunidad global IEEE.
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <a href="https://facebook.com/ieeeespol" target="_blank" rel="noreferrer" className="text-[#3c4a5f] hover:text-[#0b5ea8] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/company/ieee-espol/" target="_blank" rel="noreferrer" className="text-[#3c4a5f] hover:text-[#0b5ea8] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="https://www.instagram.com/ieee.espol/" target="_blank" rel="noreferrer" className="text-[#3c4a5f] hover:text-[#0b5ea8] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
                  </a>
                  <a href="https://www.youtube.com/@ramaestudiantilieee-espol84" target="_blank" rel="noreferrer" className="text-[#3c4a5f] hover:text-[#0b5ea8] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
                  </a>
                </div>
              </div>

              {footerColumns.map((column) => (
                <div key={column.title}>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#0b1f33] mb-4">
                    {column.title}
                  </p>
                  <div className="grid gap-2">
                    {column.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("http") || link.href.startsWith("mailto") || link.href.startsWith("tel") ? "_blank" : "_self"}
                        rel="noreferrer"
                        className="hover:text-[#0b5ea8] transition-colors cursor-pointer"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}

            </div>
          </div>

          <div className="border-t border-[#e5eaf3] bg-[#eef0f5]">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs uppercase tracking-[0.3em] text-[#6b7a90] lg:flex-row lg:px-10">
              <span>Copyright © 2026 IEEE ESPOL.</span>
              <span>Inspired by IEEE.org.</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}