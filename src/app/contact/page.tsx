import { Navbar1 } from "@/components/blocks/shadcnblocks-com-navbar1";
import { ieeeNavData } from "@/data/nav-data";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function ContactPage() {
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
            Contáctanos
          </h1>
          <div className="w-16 h-1 bg-[#0b5ea8] rounded-full mb-6" />
          <p className="text-[#6b7a90] text-lg leading-relaxed max-w-2xl">
            ¿Tienes preguntas sobre IEEE ESPOL? Estamos aquí para ayudarte. Escríbenos o visítanos en el campus.
          </p>
        </div>

        {/* Info + Mapa */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">

          {/* Info de contacto */}
          <div className="flex flex-col gap-6">

            <div className="flex items-start gap-4 bg-[#f7f8fb] border border-[#e5eaf3] rounded-2xl p-6">
              <div className="w-10 h-10 rounded-full bg-[#0b5ea8]/10 flex items-center justify-center shrink-0">
                <Mail className="size-5 text-[#0b5ea8]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#0b5ea8] font-semibold mb-1">Correo</p>
                <a href="mailto:ieee@espol.edu.ec" className="text-[#0b1f33] font-semibold hover:text-[#0b5ea8] transition-colors">
                  ieee@espol.edu.ec
                </a>
              </div>
            </div>

            {/*
            <div className="flex items-start gap-4 bg-[#f7f8fb] border border-[#e5eaf3] rounded-2xl p-6">
              <div className="w-10 h-10 rounded-full bg-[#0b5ea8]/10 flex items-center justify-center shrink-0">
                <Phone className="size-5 text-[#0b5ea8]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#0b5ea8] font-semibold mb-1">Teléfono</p>
                <a href="tel:+59342269269" className="text-[#0b1f33] font-semibold hover:text-[#0b5ea8] transition-colors">
                  +593 4 226 9269
                </a>
              </div>
            </div>
            */}

            
            <div className="flex items-start gap-4 bg-[#f7f8fb] border border-[#e5eaf3] rounded-2xl p-6">
              <div className="w-10 h-10 rounded-full bg-[#0b5ea8]/10 flex items-center justify-center shrink-0">
                <MapPin className="size-5 text-[#0b5ea8]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#0b5ea8] font-semibold mb-1">Ubicación</p>
                <p className="text-[#0b1f33] font-semibold">Campus Gustavo Galindo Velasco</p>
                <p className="text-[#6b7a90] text-sm mt-1">Km 30.5 Vía Perimetral, Guayaquil, Ecuador</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#f7f8fb] border border-[#e5eaf3] rounded-2xl p-6">
              <div className="w-10 h-10 rounded-full bg-[#0b5ea8]/10 flex items-center justify-center shrink-0">
                <Clock className="size-5 text-[#0b5ea8]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#0b5ea8] font-semibold mb-1">Horario</p>
                <p className="text-[#0b1f33] font-semibold">Lunes a Viernes</p>
                <p className="text-[#6b7a90] text-sm mt-1">8:00 AM – 5:00 PM</p>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="bg-[#f7f8fb] border border-[#e5eaf3] rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[#0b5ea8] font-semibold mb-4">Síguenos</p>
              <div className="flex gap-4">
                <a href="https://facebook.com/ieeeespol" target="_blank" rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#0b5ea8] flex items-center justify-center text-white hover:bg-[#0b3e73] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/ieee.espol/" target="_blank" rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#0b5ea8] flex items-center justify-center text-white hover:bg-[#0b3e73] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/ieee-espol/" target="_blank" rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#0b5ea8] flex items-center justify-center text-white hover:bg-[#0b3e73] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@ramaestudiantilieee-espol84" target="_blank" rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#0b5ea8] flex items-center justify-center text-white hover:bg-[#0b3e73] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 7s-.3-1.9-1.2-2.7c-1.1-1.2-2.4-1.2-3-1.3C16.6 3 12 3 12 3s-4.6 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5.2 1 7 1 7S.7 9.1.7 11.2v1.9C.7 15.2 1 17 1 17s.3 1.9 1.2 2.7c1.1 1.2 2.6 1.1 3.3 1.2C7.6 21 12 21 12 21s4.6 0 6.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.7 1.2-2.7s.3-2.1.3-4.2v-1.9C23.3 9.1 23 7 23 7zM9.7 15.5v-7.3l8.1 3.7-8.1 3.6z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Mapa */}
          <div className="rounded-3xl overflow-hidden border border-[#e5eaf3] shadow-[0_4px_20px_rgba(0,0,0,0.08)] h-full min-h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d127584.44230981874!2d-80.1086911!3d-2.1483948!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d7301d30e8ff5%3A0x73c27660ff5791b!2sCampus%20Gustavo%20Galindo%20Velasco%20(ESPOL)!5e0!3m2!1ses-419!2sec!4v1776474287165!5m2!1ses-419!2sec"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "500px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

        {/* Formulario de contacto */}
        <div className="bg-[#f7f8fb] border border-[#e5eaf3] rounded-3xl p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#0b5ea8] font-semibold mb-4">Escríbenos</p>
          <h2 className="text-2xl font-bold text-[#0b1f33] mb-8">Envíanos un mensaje</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#0b1f33]">Nombre</label>
              <input
                type="text"
                placeholder="Tu nombre completo"
                className="rounded-xl border border-[#e5eaf3] bg-white px-4 py-3 text-[#0b1f33] placeholder:text-[#6b7a90] focus:outline-none focus:border-[#0b5ea8] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#0b1f33]">Correo electrónico</label>
              <input
                type="email"
                placeholder="tu@correo.com"
                className="rounded-xl border border-[#e5eaf3] bg-white px-4 py-3 text-[#0b1f33] placeholder:text-[#6b7a90] focus:outline-none focus:border-[#0b5ea8] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm font-semibold text-[#0b1f33]">Asunto</label>
              <input
                type="text"
                placeholder="¿En qué podemos ayudarte?"
                className="rounded-xl border border-[#e5eaf3] bg-white px-4 py-3 text-[#0b1f33] placeholder:text-[#6b7a90] focus:outline-none focus:border-[#0b5ea8] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm font-semibold text-[#0b1f33]">Mensaje</label>
              <textarea
                rows={5}
                placeholder="Escribe tu mensaje aquí..."
                className="rounded-xl border border-[#e5eaf3] bg-white px-4 py-3 text-[#0b1f33] placeholder:text-[#6b7a90] focus:outline-none focus:border-[#0b5ea8] transition-colors resize-none"
              />
            </div>
            <div className="md:col-span-2">
              <button className="bg-[#0b5ea8] hover:bg-[#0b3e73] active:bg-[#082b4f] text-white font-semibold px-8 py-3 rounded-full transition-colors">
                Enviar mensaje
              </button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}