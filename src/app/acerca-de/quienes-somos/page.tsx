import { Navbar1 } from "@/components/blocks/shadcnblocks-com-navbar1";
import { ieeeNavData } from "@/data/nav-data";
import { ArrowRight, Download } from "lucide-react";

export default function SubmenuPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#020b14] flex flex-col">
      <div className="bg-white dark:bg-[#020b14] border-b border-[#e5eaf3] dark:border-white/10">
        <Navbar1 {...ieeeNavData} forceScrolled={true} />
      </div>

      <main className="flex-1 container mx-auto px-6 pt-32 pb-20 max-w-6xl">

        {/* Hero: Texto + Imagen */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.3em] text-[#0b5ea8] font-semibold mb-4">IEEE ESPOL</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b1f33] dark:text-white leading-tight mb-6">
              ¿Quiénes Somos?
            </h1>
            <div className="w-16 h-1 bg-[#0b5ea8] rounded-full mb-6" />
            <p className="text-[#3c4a5f] dark:text-gray-300 text-lg leading-relaxed mb-4">
              Somos la Rama Estudiantil IEEE ESPOL, una comunidad de estudiantes apasionados por la tecnología y la ingeniería, comprometidos con el desarrollo profesional y el impacto social.
            </p>
            <p className="text-[#6b7a90] dark:text-gray-400 leading-relaxed">
              Formamos parte de la red global del IEEE, la organización técnica profesional más grande del mundo, con más de 400,000 miembros en más de 160 países.
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-[#e5eaf3] dark:bg-[#041527] border border-[#d0d8e8] dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
              <div className="w-full h-full bg-[linear-gradient(135deg,_#0b3e73,_#0b5ea8,_#4dc4ff)] opacity-60" />
            </div>
          </div>
        </div>

        {/* Sección: Misión */}
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center mb-24">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.3em] text-[#0b5ea8] font-semibold mb-4">Nuestra Misión</p>
            <h2 className="text-3xl font-bold text-[#0b1f33] dark:text-white mb-6">
              Impulsamos el talento de cada miembro
            </h2>
            <p className="text-[#3c4a5f] dark:text-gray-300 leading-relaxed mb-4">
              Nuestra misión es fomentar el desarrollo técnico, profesional y personal de los estudiantes de ingeniería, brindando acceso a recursos, eventos y una red de contactos de clase mundial.
            </p>
            <p className="text-[#6b7a90] dark:text-gray-400 leading-relaxed">
              A través de nuestros capítulos técnicos y grupos de afinidad, ofrecemos un espacio inclusivo donde cada miembro puede crecer y contribuir.
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-[#e5eaf3] dark:bg-[#041527] border border-[#d0d8e8] dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
              <div className="w-full h-full bg-[linear-gradient(135deg,_#082b4f,_#1f6db5)] opacity-60" />
            </div>
          </div>
        </div>

        {/* Sección: Visión */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.3em] text-[#0b5ea8] font-semibold mb-4">Nuestra Visión</p>
            <h2 className="text-3xl font-bold text-[#0b1f33] dark:text-white mb-6">
              Ser referentes de innovación en Ecuador
            </h2>
            <p className="text-[#3c4a5f] dark:text-gray-300 leading-relaxed mb-4">
              Aspiramos a ser la rama estudiantil IEEE más reconocida del país, formando ingenieros que lideren el cambio tecnológico con ética, creatividad y visión global.
            </p>
            <p className="text-[#6b7a90] dark:text-gray-400 leading-relaxed">
              Cada proyecto, evento y colaboración que realizamos nos acerca a ese objetivo.
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-[#e5eaf3] dark:bg-[#041527] border border-[#d0d8e8] dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
              <div className="w-full h-full bg-[linear-gradient(135deg,_#0b5ea8,_#4dc4ff)] opacity-60" />
            </div>
          </div>
        </div>

        {/* Sección: Objetivo */}
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center mb-24">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.3em] text-[#0b5ea8] font-semibold mb-4">Nuestro Objetivo</p>
            <h2 className="text-3xl font-bold text-[#0b1f33] dark:text-white mb-6">
              Tecnología al servicio de la sociedad
            </h2>
            <p className="text-[#3c4a5f] dark:text-gray-300 leading-relaxed mb-4">
              El objetivo principal del IEEE es promover la innovación y el avance tecnológico en diferentes áreas de la ingeniería, a través de la investigación, estándares, educación y colaboración.
            </p>
            <p className="text-[#6b7a90] dark:text-gray-400 leading-relaxed">
              Todo esto con el fin de beneficiar a la sociedad y mejorar la calidad de vida de las personas alrededor del mundo.
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-[#e5eaf3] dark:bg-[#041527] border border-[#d0d8e8] dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
              <div className="w-full h-full bg-[linear-gradient(135deg,_#0b3e73,_#082b4f)] opacity-60" />
            </div>
          </div>
        </div>

        {/* Preguntas frecuentes */}
        <div className="mb-24">
          <p className="text-xs uppercase tracking-[0.3em] text-[#0b5ea8] font-semibold mb-4">Preguntas Frecuentes</p>
          <h2 className="text-3xl font-bold text-[#0b1f33] dark:text-white mb-10">¿Tienes dudas? Te respondemos</h2>
          <div className="grid gap-4">
            {[
              {
                q: "¿Qué es IEEE?",
                a: "IEEE (Institute of Electrical and Electronics Engineers) es la organización técnica profesional más grande del mundo, dedicada al avance de la tecnología en beneficio de la humanidad. Cuenta con más de 400,000 miembros en más de 160 países.",
              },
              {
                q: "¿Qué es una Rama Estudiantil?",
                a: "Una Rama Estudiantil IEEE es una organización local formada por estudiantes universitarios afiliados a IEEE. Permite a los estudiantes conectarse con la comunidad global de ingenieros, participar en eventos técnicos y desarrollar habilidades profesionales.",
              },
              {
                q: "¿Qué es un Capítulo Técnico?",
                a: "Un Capítulo Técnico es una subdivisión de la Rama Estudiantil enfocada en un área específica de la ingeniería, como robótica, computación, energía, etc. Cada capítulo organiza actividades y proyectos relacionados con su especialidad.",
              },
            ].map((item) => (
              <div key={item.q} className="bg-[#f7f8fb] dark:bg-[#041527] border border-[#e5eaf3] dark:border-white/10 rounded-2xl p-6">
                <h3 className="text-[#0b1f33] dark:text-white font-semibold text-lg mb-3">{item.q}</h3>
                <p className="text-[#6b7a90] dark:text-gray-400 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Descarga guía de membresía */}
        <div className="mb-24 bg-[#f7f8fb] dark:bg-[#041527] border border-[#e5eaf3] dark:border-white/10 rounded-3xl p-10 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.3em] text-[#0b5ea8] font-semibold mb-4">Recursos</p>
            <h2 className="text-2xl font-bold text-[#0b1f33] dark:text-white mb-4">Guía para obtener tu membresía IEEE</h2>
            <p className="text-[#6b7a90] dark:text-gray-400 leading-relaxed">
              Descarga nuestra guía paso a paso para registrarte como miembro IEEE y aprovechar todos los beneficios que ofrece la organización a estudiantes.
            </p>
          </div>
          <a
            href="/guia-membresia-ieee.pdf"
            download
            className="shrink-0 inline-flex items-center gap-3 bg-[#0b5ea8] hover:bg-[#0b3e73] active:bg-[#082b4f] text-white font-semibold px-8 py-4 rounded-full transition-colors"
          >
            <Download className="size-5" />
            Descargar Guía PDF
          </a>
        </div>

        {/* CTA final */}
        <div className="text-center py-16 border-t border-[#e5eaf3] dark:border-white/10">
          <h3 className="text-2xl font-bold text-[#0b1f33] dark:text-white mb-4">¿Listo para unirte?</h3>
          <p className="text-[#6b7a90] dark:text-gray-400 mb-8 max-w-md mx-auto">Forma parte de nuestra comunidad y accede a oportunidades únicas de crecimiento profesional.</p>
          <a
            href="https://www.ieee.org/membership/join/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0b5ea8] hover:bg-[#0b5ea8]/90 text-white font-semibold px-8 py-3 rounded-full transition-colors inline-flex items-center gap-2"
          >
            Join IEEE <ArrowRight className="size-4" />
          </a>
        </div>

      </main>
    </div>
  );
}