import { HeroSection } from "@/components/blocks/hero-section-5";
import Link from 'next/link';


import Header from "@/components/Header";
import Hero from "@/components/Hero";

const chapterStats = [
  { id: "cs", name: "Computer Society", count: 18, color: "#FFA300" },
  { id: "ras", name: "Robotics & Automation Society", count: 22, color: "#862633" },
  { id: "wie", name: "Women in Engineering", count: 24, color: "#522367" },
  { id: "pes", name: "Power & Energy Society", count: 22, color: "#006633" },
  { id: "cis", name: "Computational Intelligence Society", count: 19, color: "#0099cc" },
  { id: "ias", name: "Industry Applications Society", count: 31, color: "#00843D" },
  { id: "embs", name: "Medicine & Biology Society", count: 27, color: "#772583" },
  { id: "comsoc", name: "Communications Society", count: 14, color: "#00AEEF" },
  { id: "css", name: "Control Systems Society", count: 14, color: "#012431" },
  { id: "phs", name: "Photonics Society", count: 5, color: "#54c4ec" },
  { id: "oes", name: "Oceanic Engineering Society", count: 6, color: "#0213a8" },
  { id: "sight", name: "Special Interest Group on Humanitarian Technology", count: 17, color: "#ef4c00" },
];

const happeningCards = [
  {
    label: "NEW IEEE MEMBERS",
    title: "Save 50% on Dues",
    tone: "blue",
    size: "large",
  },
  {
    label: "IEEE FOUNDATION",
    title: "Fueling the Future",
    tone: "blue",
  },
  {
    label: "IEEE CORPORATE AWARDS",
    title: "2026 IEEE Medal of Honor Recipient Announced",
    tone: "navy",
  },
  {
    label: "CONFERENCES",
    title: "ICASSP 2026",
    tone: "blue",
  },
  {
    label: "EDUCATIONAL ACTIVITIES",
    title: "Register for TryEngineering Summer Institute 2026",
    tone: "blue",
  },
];

const innovationCards = [
  {
    label: "BIOMEDICAL",
    title: "Lab-On-a-Chip Grippers Could Handle Human Cells",
    date: "14 Mar 2026",
  },
  {
    label: "ROBOTICS",
    title: "Video Friday: These Robots Were Born to Run",
    date: "13 Mar 2026",
  },
  {
    label: "TRANSPORTATION",
    title: "Raquel Urtasun on Level-4 Autonomous Trucks",
    date: "13 Mar 2026",
  },
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
        { label: "Campus Gustavo Galindo, ESPOL, Guayaquil, Ecuador", href: "https://maps.app.goo.gl/NbQNhee1tr5b2Cqv8" }
    ],
  },
];

const tones: Record<string, { band: string; img: string }> = {
  blue: {
    band: "bg-[#0b5ea8]",
    img: "bg-[radial-gradient(circle_at_top,_#dfeeff,_#8dbef4_55%,_#2f6fb2_100%)]",
  },
  navy: {
    band: "bg-[#0a3f6d]",
    img: "bg-[linear-gradient(135deg,_#0a1930,_#102a4e)]",
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0b1f33] text-[#0b1f33]">

      <HeroSection />

      <main className="relative z-10">
        <div className="relative z-10">
        <section id="stats" className="mx-auto w-full max-w-6xl px-6 pb-40 pt-16 lg:px-10">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between mb-12">
             <div className="flex-1">
                <h2 className="font-[var(--font-heading)] text-3xl text-[#0b1f33] md:text-5xl">Nuestro Impacto</h2>
                <p className="mt-4 max-w-lg text-[#3c4a5f]">Somos la rama estudiantil más activa, compuesta por múltiples capítulos técnicos dedicados a potenciar el talento de cada miembro.</p>
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
                  href={`/capitulos-tecnicos/${stat.id}`}
                  className="group relative overflow-hidden rounded-2xl border border-[#e5eaf3] bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:shadow-xl hover:shadow-slate-300/50 hover:-translate-y-1.5 cursor-pointer">
                  
                  {/* Franja de color arriba */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl"
                    style={{ backgroundColor: stat.color }}
                  />
                  <div 
                    className="absolute -right-6 -top-6 h-32 w-32 rounded-full opacity-10 blur-3xl transition-opacity duration-300 group-hover:opacity-20" 
                    style={{ backgroundColor: stat.color }} 
                  />
                  <div className="relative z-10 flex flex-col justify-between h-full min-h-[120px]">
                    <p className="text-sm font-semibold uppercase tracking-wider text-[#3c4a5f] leading-snug">{stat.name}</p>
                    <div className="mt-6 flex items-end justify-between">
                      <span className="text-4xl font-bold text-[#0b1f33]">{stat.count}</span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#6b7a90] mb-1.5">Miembros</span>
                    </div>
                  </div>
                </Link>
             ))}
          </div>
        </section>
{/*
        <section id="happening" className="mx-auto w-full max-w-6xl px-6 pb-20 pt-12 lg:px-10">
          <div className="text-center">
            <h1 className="font-[var(--font-heading)] text-3xl text-[#0b1f33] sm:text-4xl">
              Happening Across IEEE
            </h1>
            <p className="mt-4 text-sm text-[#3c4a5f]">
              From the latest conferences and community events to the courses and opportunities that can help you grow.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div className="overflow-hidden rounded-2xl border border-[#e5eaf3] bg-white shadow-[0_18px_40px_rgba(9,20,40,0.12)]">
              <div className={`h-64 ${tones[happeningCards[0].tone].img}`} />
              <div className={`${tones[happeningCards[0].tone].band} px-6 py-5 text-white`}>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d5e9ff]">
                  {happeningCards[0].label}
                </p>
                <p className="mt-3 text-xl font-semibold">{happeningCards[0].title}</p>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {happeningCards.slice(1).map((card) => (
                <div
                  key={card.title}
                  className="overflow-hidden rounded-2xl border border-[#e5eaf3] bg-white shadow-[0_12px_30px_rgba(9,20,40,0.08)]"
                >
                  <div className={`h-36 ${tones[card.tone].img}`} />
                  <div className={`${tones[card.tone].band} px-5 py-4 text-white`}>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d5e9ff]">
                      {card.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold">{card.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="innovations" className="mx-auto w-full max-w-6xl px-6 pb-16 lg:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-[var(--font-heading)] text-3xl text-[#0b1f33]">Latest Innovations</h2>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-[#0b5ea8] px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0b5ea8]"
            >
              Explore More
              <span className="text-base">↗</span>
            </button>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {innovationCards.map((card) => (
              <div key={card.title} className="overflow-hidden rounded-2xl border border-[#e5eaf3] bg-white">
                <div className="h-44 bg-[linear-gradient(135deg,_#0f1f35,_#2f6fb2)]" />
                <div className="bg-[#f4e3c4] px-6 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#785a2a]">
                    {card.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#1b2a3c]">{card.title}</p>
                  <p className="mt-2 text-xs text-[#6b7a90]">{card.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="impact" className="mx-auto w-full max-w-6xl px-6 pb-16 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.36em] text-[#6b7a90]">Driving Technical Innovation</p>
              <h2 className="mt-3 font-[var(--font-heading)] text-3xl text-[#0b1f33]">
                IEEE Xplore Reaches 7 Million Documents
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#3c4a5f]">
                IEEE Xplore is your gateway to trusted research journals, conferences, standards, and educational courses.
                Now with more than 7 million documents to help you fuel imagination and build new ideas.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-full border border-[#0b5ea8] px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0b5ea8]">
                  Learn More and Subscribe
                </button>
                <button className="rounded-full border border-[#0b5ea8] px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0b5ea8]">
                  Get Published
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#e5eaf3] bg-white shadow-[0_18px_40px_rgba(9,20,40,0.12)]">
              <div className="h-64 bg-[radial-gradient(circle_at_top,_#2a6ba8,_#0d2a4a_70%)]" />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-16 lg:px-10">
          <div className="grid gap-10 rounded-3xl bg-[#d9f1fb] p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="flex items-center gap-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#0b5ea8]">
                <span>Cybersecurity</span>
                <span className="text-[#6b7a90]">Simulations</span>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-[#3c4a5f]">
                &ldquo;Because most connected systems use common off-the-shelf components, everything is now hackable, including medical
                devices and their networks,&rdquo; says Florence Hudson.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-full border border-[#0b5ea8] px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0b5ea8]">
                  Read the Full Article
                </button>
                <button className="rounded-full border border-[#0b5ea8] px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0b5ea8]">
                  See How IEEE Helps Raise the World&apos;s Standards
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#b6d5e8] bg-white shadow-[0_18px_40px_rgba(9,20,40,0.12)]">
              <div className="h-80 bg-[linear-gradient(180deg,_#6a7aa6,_#23304a)]" />
              <div className="bg-[#8fd0ec] px-6 py-4 text-[#0b1f33]">
                <p className="text-sm font-semibold">Florence Hudson</p>
                <p className="mt-2 text-xs text-[#244057]">
                  Chair of the IEEE 2933 Working Group, founder and CEO, FDHint.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="transmitters" className="mx-auto w-full max-w-6xl px-6 pb-16 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <h2 className="font-[var(--font-heading)] text-3xl text-[#0b1f33]">Meet the IEEE Transmitters</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#3c4a5f]">
                Transmitters are champions of innovation, showcasing the ways technology shapes a brighter future and drives global progress.
              </p>
              <button className="mt-6 rounded-full border border-[#0b5ea8] px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0b5ea8]">
                Learn More About This Group
              </button>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#e5eaf3] bg-white shadow-[0_18px_40px_rgba(9,20,40,0.12)]">
              <div className="h-64 bg-[linear-gradient(135deg,_#0b5ea8,_#4dc4ff)]" />
            </div>
          </div>
        </section>
*/}
        
        <section id="explore" className="mx-auto w-full max-w-6xl px-6 pb-16 lg:px-10">
          <div className="mb-12 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex-1">
              <h2 className="font-[var(--font-heading)] text-3xl text-[#0b1f33] md:text-5xl">
                Membresía
              </h2>
              {/* Añadimos mt-4 para separarlo del H2, max-w-2xl para que no sea infinito, y el color gris oficial */}
              <p className="mt-4 max-w-2xl text-[#3c4a5f] leading-relaxed">
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



        <footer className="border-t border-[#e6ecf5] bg-white">
          <div className="mx-auto w-full max-w-6xl px-16 py-12 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr] text-sm text-[#3c4a5f]">
              
              {/* Logo + descripción + redes */}
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

              {/* Columnas del footer */}
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

          <div className="border-t border-[#e6ecf5] bg-[#f7f8fb]">
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
