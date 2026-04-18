import { Navbar1 } from "@/components/blocks/shadcnblocks-com-navbar1";
import { ieeeNavData } from "@/data/nav-data";

const directiva = [
  { nombre: "Ph D. Carlos Teodoro Monsalve Arteaga", rol: "Consejero", imagen: null },
  { nombre: "Ph D. Edwin Giannine Valarezo Añazco", rol: "Mentor", imagen: null },
  { nombre: "Marlon Estuardo Guadalupe Intriago", rol: "Presidente", imagen: "/directivas/directiva-general/Marlon Estuardo Guadalupe Intriago - Presidente.png" },
  { nombre: "Ana Alejandra Quiroga Loor", rol: "Vicepresidenta", imagen: null },
  { nombre: "Ariel Eloy Rodriguez Zambrano", rol: "Secretario", imagen: "/directivas/directiva-general/Ariel Eloy Rodriguez Zambrano - Secretario.png"},
  { nombre: "Jose Mario Mora Estrella", rol: "Tesorero", imagen: "/directivas/directiva-general/Jose Mario Mora Estrella - Tesorero.jpeg" },
  { nombre: "Elianna Esther Lucio Cedeño", rol: "Webmaster", imagen: null },
  { nombre: "Geanella Jeannina Santana Barzallo", rol: "Coordinadora de Membresías", imagen: "/directivas/directiva-general/Geanella Jeannina Santana Barzallo - Coordinadora de Membresias.png" },
];

const CardPersona = ({ persona }: { persona: typeof directiva[0] }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-white border border-[#e5eaf3] shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(11,94,168,0.15)] hover:-translate-y-1">
    <div className="aspect-[3/4] w-full overflow-hidden bg-[linear-gradient(135deg,_#0b3e73,_#0b5ea8)]">
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
      <h3 className="text-[#0b1f33] font-bold text-base leading-snug">{persona.nombre}</h3>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0b5ea8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
  </div>
);

export default function DirectivaPage() {
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

        {/* Consejeros y Mentor */}
        <div className="mb-10">
          <div className="flex justify-center gap-4 max-w-[700px] mx-auto">
            {consejeros.map((persona, idx) => (
              <div key={idx} className="w-full max-w-[calc(33%-8px)]">
                <CardPersona persona={persona} />
              </div>
            ))}
          </div>
        </div>

        {/* Directiva */}
        <div>
          <div className="grid grid-cols-3 gap-4 max-w-[700px] mx-auto">
            {directivos.map((persona, idx) => (
              <CardPersona key={idx} persona={persona} />
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}