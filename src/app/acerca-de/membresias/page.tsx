import { Navbar1 } from "@/components/blocks/shadcnblocks-com-navbar1";
import { ieeeNavData } from "@/data/nav-data";
import { ArrowRight, Download, CheckCircle } from "lucide-react";

const precios = [
  { nombre: "IEEE", estudiantil: "$13.50", profesional: "$80" },
  { nombre: "RAS", estudiantil: "$5", profesional: "$9" },
  { nombre: "COMSOC", estudiantil: "$1", profesional: "$33" },
  { nombre: "OES", estudiantil: "$10", profesional: "$19" },
  { nombre: "PES", estudiantil: "$15", profesional: "$30" },
  { nombre: "IAS", estudiantil: "$10", profesional: "$20" },
  { nombre: "CS", estudiantil: "$8", profesional: "$60" },
  { nombre: "CSS", estudiantil: "$5", profesional: "$25" },
  { nombre: "WIE", estudiantil: "Gratis", profesional: "Gratis" },
  { nombre: "SIGHT", estudiantil: "Gratis", profesional: "Gratis" },
];

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

        {/* Precios */}
        <div className="mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[#0b5ea8] font-semibold mb-4">Tarifas</p>
          <h2 className="text-3xl font-bold text-[#0b1f33] mb-10">Precios de Membresía</h2>
          <div className="w-full overflow-hidden rounded-2xl border border-[#e5eaf3] shadow-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0b5ea8]">
                  <th className="text-left text-white font-semibold px-6 py-4 uppercase tracking-wider">Sociedad</th>
                  <th className="text-center text-white font-semibold px-6 py-4 uppercase tracking-wider">Estudiantil</th>
                  <th className="text-center text-white font-semibold px-6 py-4 uppercase tracking-wider">Profesional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5eaf3]">
                {precios.map((p, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"}>
                    <td className="px-6 py-4 text-[#0b1f33] font-bold">{p.nombre}</td>
                    <td className="px-6 py-4 text-center text-[#0b5ea8] font-bold">{p.estudiantil}</td>
                    <td className="px-6 py-4 text-center text-[#6b7a90] font-medium">{p.profesional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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