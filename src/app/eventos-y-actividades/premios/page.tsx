import { Navbar1 } from "@/components/blocks/shadcnblocks-com-navbar1";
import { ieeeNavData } from "@/data/nav-data";
import { ArrowRight, Info } from "lucide-react";

export default function SubmenuPage() {
  return (
    <div className="min-h-screen bg-[#020b14] flex flex-col">
      <div className="bg-[#0b1f33]">
         <Navbar1 {...ieeeNavData} />
      </div>
      <main className="flex-1 container mx-auto px-4 py-16 mt-4 max-w-5xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Premios Obtenidos
          </h1>
          <div className="w-20 h-1.5 bg-[#0b5ea8] rounded-full mb-6"></div>
          <p className="text-xl text-gray-400 leading-relaxed">
            Bienvenido a la sección oficial de Premios Obtenidos. Aquí encontrarás toda la información relevante, actividades y detalles para nuestros miembros y la comunidad en general.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-[#041527] p-8 rounded-2xl shadow-lg border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Info className="text-[#0b5ea8]" />
                Información General
              </h2>
              <div className="prose prose-slate max-w-none text-gray-300">
                <p className="mb-4">
                  Esta es la página dedicada a <strong>Premios Obtenidos</strong>. Puedes editar este archivo dentro de tu proyecto en la ruta correspondiente para agregar tu propio contenido personalizado, como misión, visión, historia o detalles específicos.
                </p>
                <p>
                  Usa esta área principal para textos descriptivos, imágenes del equipo, o recursos importantes.
                </p>
              </div>
            </div>
            
            <div className="bg-[#041527] p-8 rounded-2xl shadow-lg border border-white/10">
               <h2 className="text-2xl font-bold text-white mb-4">
                 Actividades Recientes
               </h2>
               <p className="text-gray-400">Próximamente se listarán las actividades o novedades relevantes a esta área.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#0b5ea8]/10 p-6 rounded-2xl border border-[#0b5ea8]/20">
              <h3 className="font-bold text-white text-lg mb-2">¿Cómo participar?</h3>
              <p className="text-gray-400 mb-4 text-sm">Descubre cómo involucrarte más en nuestras actividades y formar parte activa del grupo.</p>
              <button className="w-full bg-[#0b5ea8] hover:bg-[#0b5ea8]/90 text-white font-medium px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                Conoce más <ArrowRight className="size-4" />
              </button>
            </div>
            
            <div className="bg-[#041527] p-6 rounded-2xl border border-white/10 shadow-lg">
              <h3 className="font-bold text-white text-lg mb-2">Contacto Rápido</h3>
              <p className="text-gray-400 text-sm">¿Tienes dudas sobre Premios Obtenidos? Escríbenos y te responderemos a la brevedad.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
