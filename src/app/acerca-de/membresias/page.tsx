import { Navbar1 } from "@/components/blocks/shadcnblocks-com-navbar1";
import { ieeeNavData } from "@/data/nav-data";
import { ArrowRight, Download, CheckCircle, Users, Heart, Globe, Star } from "lucide-react";

const beneficios = [
  "Acceso a IEEE Xplore con millones de documentos técnicos",
  "Descuentos en conferencias y eventos IEEE",
  "Red de contactos con más de 400,000 ingenieros globales",
  "Acceso a cursos y certificaciones profesionales",
  "Publicaciones técnicas y revistas especializadas",
  "Oportunidades de liderazgo en capítulos locales",
];

const pasos = [
  { num: "01", titulo: "Crea tu cuenta", desc: "Regístrate en ieee.org con tu correo institucional de ESPOL." },
  { num: "02", titulo: "Selecciona tu membresía", desc: "Elige el tipo de membresía estudiantil y los capítulos de tu interés." },
  { num: "03", titulo: "Realiza el pago", desc: "Paga en línea con tarjeta de crédito o débito de forma segura." },
  { num: "04", titulo: "¡Listo!", desc: "Recibirás un correo de confirmación y ya podrás disfrutar de todos los beneficios." },
];

const beneficiosVoluntario = [
  { icon: <Users className="size-5 text-[#0b5ea8]" />, titulo: "Forma parte del equipo", desc: "Colabora con estudiantes apasionados por la tecnología y la ingeniería." },
  { icon: <Heart className="size-5 text-[#0b5ea8]" />, titulo: "Impacto real", desc: "Contribuye a organizar eventos, talleres y actividades que transforman vidas." },
  { icon: <Globe className="size-5 text-[#0b5ea8]" />, titulo: "Red global", desc: "Conéctate con la comunidad IEEE a nivel local e internacional." },
  { icon: <Star className="size-5 text-[#0b5ea8]" />, titulo: "Desarrollo profesional", desc: "Desarrolla habilidades de liderazgo, organización y trabajo en equipo." },
];

export default function MembresiasPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="bg-white border-b border-[#e5eaf3]">
        <Navbar1 {...ieeeNavData} forceScrolled={true} />
      </div>

      <main className="flex-1 container mx-auto px-6 pt-32 pb-20 max-w-6xl">

        {/* Hero */}
        <div className="mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[#0b5ea8] font-semibold mb-4">IEEE ESPOL</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b1f33] leading-tight mb-6">
            Membresías IEEE
          </h1>
          <div className="w-16 h-1 bg-[#0b5ea8] rounded-full mb-6" />
          <p className="text-[#6b7a90] text-lg leading-relaxed max-w-2xl">
            Ser miembro IEEE te conecta con la comunidad tecnológica más grande del mundo. Accede a recursos, eventos y oportunidades únicas para tu desarrollo profesional.
          </p>
        </div>

        {/* Beneficios */}
        <div className="mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[#0b5ea8] font-semibold mb-4">¿Por qué unirte?</p>
          <h2 className="text-3xl font-bold text-[#0b1f33] mb-10">Beneficios de ser miembro IEEE</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {beneficios.map((b, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white border border-[#e5eaf3] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="text-[#0b5ea8] shrink-0 mt-0.5 size-5" />
                <p className="text-[#4a5568] leading-relaxed font-medium">{b}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pasos */}
        <div className="mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[#0b5ea8] font-semibold mb-4">Proceso</p>
          <h2 className="text-3xl font-bold text-[#0b1f33] mb-10">¿Cómo obtener tu membresía?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pasos.map((paso) => (
              <div key={paso.num} className="bg-white border border-[#e5eaf3] rounded-3xl p-8 shadow-sm relative overflow-hidden h-full">
                <span className="absolute top-2 right-4 text-7xl font-bold text-[#0b5ea8] opacity-[0.08] select-none">
                  {paso.num}
                </span>
                <div className="relative z-10">
                  <span className="text-sm font-bold text-[#0b5ea8] mb-6 block">
                    Paso {paso.num}
                  </span>
                  <h3 className="text-[#0b1f33] font-bold text-xl mb-4 leading-tight">
                    {paso.titulo}
                  </h3>
                  <p className="text-[#6b7a90] text-[15px] leading-relaxed">
                    {paso.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Voluntariado */}
        <div className="mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[#0b5ea8] font-semibold mb-4">Voluntariado</p>
          <h2 className="text-3xl font-bold text-[#0b1f33] mb-4">¿Quieres ser voluntario?</h2>
          <p className="text-[#6b7a90] text-lg leading-relaxed max-w-2xl mb-10">
            No necesitas ser miembro IEEE para contribuir. Únete a nuestro grupo de voluntarios y sé parte activa de la comunidad IEEE ESPOL organizando eventos y apoyando iniciativas.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {beneficiosVoluntario.map((b, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-[#f7f8fb] border border-[#e5eaf3] rounded-2xl p-5">
                <div className="shrink-0 mt-0.5">{b.icon}</div>
                <div>
                  <h3 className="text-[#0b1f33] font-bold mb-1">{b.titulo}</h3>
                  <p className="text-[#6b7a90] text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Voluntarios */}
          <div className="bg-[radial-gradient(circle_at_top,_#1f6db5,_#0b3e73_55%,_#082b4f_100%)] rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Únete al grupo de voluntarios</h3>
              <p className="text-white/70 leading-relaxed max-w-lg">
                Forma parte de nuestro grupo de WhatsApp donde coordinamos actividades, eventos y proyectos. ¡Te esperamos!
              </p>
            </div>
            <a
              href="https://chat.whatsapp.com/LINK_DEL_GRUPO"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-8 py-4 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Unirme al grupo
            </a>
          </div>
        </div>

        {/* Descarga guía + CTA */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between bg-[#f8fafc] border border-[#e5eaf3] rounded-3xl p-10">
          <div>
            <h3 className="text-2xl font-bold text-[#0b1f33] mb-2">¿Listo para unirte?</h3>
            <p className="text-[#6b7a90]">Descarga nuestra guía paso a paso o regístrate directamente en el portal global de IEEE.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
            <a
              href="/guia-membresia-ieee.pdf"
              download
              className="inline-flex items-center justify-center gap-2 border-2 border-[#0b5ea8] text-[#0b5ea8] hover:bg-[#0b5ea8] hover:text-white font-bold px-8 py-3 rounded-full transition-all duration-300"
            >
              <Download className="size-4" />
              Descargar Guía
            </a>
            <a
              href="https://www.ieee.org/membership/join/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#0b5ea8] hover:bg-[#0b3e73] text-white font-bold px-8 py-3 rounded-full shadow-lg shadow-blue-900/10 transition-all duration-300"
            >
              Join IEEE <ArrowRight className="size-4" />
            </a>
          </div>
        </div>

      </main>
    </div>
  );
}