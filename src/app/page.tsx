const stats = [
  { label: "Capitulos tecnicos", value: "7" },
  { label: "Convenios vigentes", value: "0" },
  { label: "Miembros activos", value: "0" },
  { label: "Grupos de afinidad", value: "2" },
];

const chapters = [
  { code: "COMSOC", name: "Communications Society" },
  { code: "CSS", name: "Control Systems Society" },
  { code: "IAS", name: "Industry Applications Society" },
  { code: "OES", name: "Oceanic Engineering Society" },
  { code: "RAS", name: "Robotics & Automation Society" },
  { code: "PES", name: "Power & Energy Society" },
  { code: "CS", name: "Computer Society" },
];

const affinityGroups = [
  {
    code: "WIE",
    name: "Women in Engineering",
    description:
      "Impulsa la participacion y liderazgo de mujeres en STEM con actividades de formacion y comunidad.",
  },
  {
    code: "SIGHT",
    name: "Special Interest Group on Humanitarian Technology",
    description:
      "Conecta la ingenieria con impacto social y proyectos de tecnologia humanitaria.",
  },
];

const membershipInfo = [
  {
    title: "Que es un miembro IEEE?",
    body:
      "Los miembros IEEE son, en su mayoria, Ingenieros Electricos y Electronicos, pero el alcance de intereses ha atraido tambien a gente de diferentes areas.",
  },
  {
    title: "Que requiere la membresia?",
    body:
      "Para poder calificar a una membresia la persona interesada debe completar ciertos criterios academicos o profesionales y acatar el codigo de etica y los reglamentos de la organizacion.",
  },
  {
    title: "A que puestos se puede aplicar?",
    body:
      "Cada persona puede unirse a IEEE como miembro estudiantil, miembro profesional, o miembro asociativo.",
  },
];

const events = [
  {
    title: "Congresos",
    detail: "Encuentros academicos y tecnologicos para ampliar redes y conocimiento.",
  },
  {
    title: "Cursos y Talleres",
    detail: "Capacitaciones practicas para habilidades tecnicas y liderazgo.",
  },
  {
    title: "Concursos",
    detail: "Retos estudiantiles que promueven innovacion y trabajo en equipo.",
  },
  {
    title: "Actividades de Rama",
    detail: "Eventos internos para fortalecer la comunidad IEEE-ESPOL.",
  },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/ieee.espol" },
  { label: "Instagram", href: "https://www.instagram.com/ieee.espol/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ieee-espol/" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UChp6nfXpJatqYujtJuUqbJQ" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#ffffff,_#f6f3ee_55%,_#e8e2d7_100%)] text-neutral-900">
      <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-10 h-56 w-56 rounded-full bg-orange-200/40 blur-3xl" />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-white">
            <span className="text-sm font-semibold">IEEE</span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Rama Estudiantil
            </p>
            <p className="text-lg font-semibold text-neutral-900">IEEE ESPOL</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-700 lg:flex">
          <a href="#inicio" className="transition hover:text-neutral-900">
            Inicio
          </a>
          <a href="#acerca" className="transition hover:text-neutral-900">
            Acerca de
          </a>
          <a href="#capitulos" className="transition hover:text-neutral-900">
            Capitulos Tecnicos
          </a>
          <a href="#afinidad" className="transition hover:text-neutral-900">
            Grupos de Afinidad
          </a>
          <a href="#eventos" className="transition hover:text-neutral-900">
            Eventos
          </a>
          <a href="#contacto" className="transition hover:text-neutral-900">
            Contacto
          </a>
        </nav>
        <a
          href="https://site.ieee.org/sb-espol/about-ieee/meeting-minutes/"
          className="hidden rounded-full bg-blue-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-800 lg:inline-flex"
        >
          Hazte miembro
        </a>
        <button
          type="button"
          className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-700 lg:hidden"
        >
          Menu
        </button>
      </header>

      <main className="relative z-10">
        <section id="inicio" className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-16 pt-8 lg:flex-row lg:items-center lg:px-10 lg:pt-16">
          <div className="flex flex-1 flex-col gap-6">
            <div className="flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">
              Rama Estudiantil IEEE - ESPOL
            </div>
            <h1 className="font-[var(--font-heading)] text-4xl leading-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Una comunidad que conecta ingenieria, liderazgo y servicio.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              La Rama Estudiantil IEEE-ESPOL es una organizacion sin animo de lucro, formada por un grupo de jovenes estudiantes de varias facultades, la mayoria perteneciente a la Facultad de Ingenieria Electrica (FIEC).
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#acerca"
                className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Conocer la rama
              </a>
              <a
                href="https://site.ieee.org/sb-espol/about-ieee/meeting-minutes/"
                className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-800 transition hover:border-neutral-600"
              >
                Hazte miembro
              </a>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-6">
            <div className="rounded-3xl border border-neutral-200 bg-white/80 p-6 shadow-[0_20px_60px_rgba(16,24,40,0.08)]">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  Ecosistema IEEE-ESPOL
                </p>
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                  2026
                </span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-neutral-100 bg-neutral-50 p-4"
                  >
                    <p className="text-2xl font-semibold text-neutral-900">{item.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.25em] text-neutral-500">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-blue-700 px-4 py-5 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">
                  Mision
                </p>
                <p className="mt-3 text-sm leading-relaxed">
                  Impulsar el desarrollo profesional y humano mediante capitulos tecnicos, grupos de afinidad y proyectos con impacto real.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="acerca" className="mx-auto w-full max-w-6xl px-6 pb-16 lg:px-10">
          <div className="grid gap-10 rounded-3xl border border-neutral-200 bg-white/80 p-8 shadow-[0_20px_50px_rgba(16,24,40,0.06)] lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Acerca de</p>
              <h2 className="mt-4 font-[var(--font-heading)] text-3xl text-neutral-900 sm:text-4xl">
                IEEE ESPOL: talento joven con proposito global.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-700">
                La rama nace para conectar estudiantes con oportunidades de aprendizaje, investigacion y liderazgo, integrando ingenieria, tecnologia y servicio comunitario.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Capitulos tecnicos",
                  "Grupos de afinidad",
                  "Eventos y congresos",
                  "Proyectos con impacto",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                <p className="text-sm font-semibold text-neutral-900">Vision</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Ser referente estudiantil en Ecuador por la formacion tecnica y la proyeccion internacional de sus miembros.
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                <p className="text-sm font-semibold text-neutral-900">Valores</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Integridad, colaboracion, excelencia tecnica y compromiso social.
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                <p className="text-sm font-semibold text-neutral-900">Comunidad</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Estudiantes de diversas facultades que comparten curiosidad, disciplina y deseo de transformar su entorno.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="capitulos" className="mx-auto w-full max-w-6xl px-6 pb-16 lg:px-10">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Capitulos tecnicos</p>
                <h2 className="mt-3 font-[var(--font-heading)] text-3xl text-neutral-900 sm:text-4xl">
                  Especializacion con alcance global.
                </h2>
              </div>
              <span className="hidden rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 sm:inline-flex">
                Redes IEEE
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {chapters.map((chapter) => (
                <div
                  key={chapter.code}
                  className="group rounded-2xl border border-neutral-200 bg-white p-5 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_15px_40px_rgba(2,32,71,0.12)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                    {chapter.code}
                  </p>
                  <p className="mt-3 text-lg font-semibold text-neutral-900">
                    {chapter.name}
                  </p>
                  <p className="mt-2 text-sm text-neutral-600">
                    Actividades tecnicas, charlas y proyectos para conectar con la comunidad internacional IEEE.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="afinidad" className="mx-auto w-full max-w-6xl px-6 pb-16 lg:px-10">
          <div className="grid gap-8 rounded-3xl border border-neutral-200 bg-neutral-900 p-8 text-white lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-300">Grupos de afinidad</p>
              <h2 className="mt-4 font-[var(--font-heading)] text-3xl sm:text-4xl">
                Comunidad, inclusion y servicio.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-200">
                Los grupos de afinidad promueven espacios seguros, proyectos sociales y liderazgo con enfoque humano.
              </p>
            </div>
            <div className="grid gap-4">
              {affinityGroups.map((group) => (
                <div key={group.code} className="rounded-2xl border border-neutral-700 bg-neutral-800 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
                    {group.code}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">{group.name}</p>
                  <p className="mt-2 text-sm text-neutral-300">{group.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="eventos" className="mx-auto w-full max-w-6xl px-6 pb-16 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Eventos y actividades</p>
              <h2 className="mt-4 font-[var(--font-heading)] text-3xl text-neutral-900 sm:text-4xl">
                Experiencias que impulsan tu perfil profesional.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-700">
                La rama organiza congresos, talleres y actividades internas para fortalecer habilidades tecnicas y trabajo en equipo.
              </p>
              <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6">
                <p className="text-sm font-semibold text-neutral-900">Calendario abierto</p>
                <p className="mt-2 text-sm text-neutral-600">
                  Revisamos actividades durante el ano academico y convocatorias para nuevas iniciativas.
                </p>
                <a
                  href="http://site.ieee.org/sb-espol/calendario/"
                  className="mt-4 inline-flex text-sm font-semibold text-blue-700"
                >
                  Ver calendario
                </a>
              </div>
            </div>
            <div className="grid gap-4">
              {events.map((event) => (
                <div
                  key={event.title}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5"
                >
                  <p className="text-sm font-semibold text-neutral-900">{event.title}</p>
                  <p className="mt-2 text-sm text-neutral-600">{event.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-16 lg:px-10">
          <div className="rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-blue-50 p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Novedades y membresia
            </p>
            <h2 className="mt-4 font-[var(--font-heading)] text-3xl text-neutral-900 sm:text-4xl">
              Informacion clave para unirte a IEEE.
            </h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {membershipInfo.map((item) => (
                <div key={item.title} className="rounded-2xl border border-neutral-200 bg-white p-5">
                  <p className="text-sm font-semibold text-neutral-900">{item.title}</p>
                  <p className="mt-2 text-sm text-neutral-600">{item.body}</p>
                </div>
              ))}
            </div>
            <a
              href="https://site.ieee.org/sb-espol/about-ieee/meeting-minutes/"
              className="mt-6 inline-flex rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white"
            >
              Hazte miembro
            </a>
          </div>
        </section>

        <section id="contacto" className="mx-auto w-full max-w-6xl px-6 pb-20 lg:px-10">
          <div className="grid gap-8 rounded-3xl border border-neutral-200 bg-white p-8 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Directiva General 2023</p>
              <h2 className="mt-4 font-[var(--font-heading)] text-3xl text-neutral-900 sm:text-4xl">
                Siguenos y conecta con la rama.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-700">
                Mantente al dia con actividades, convocatorias y logros estudiantiles a traves de nuestros canales oficiales.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-full border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:border-neutral-400"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <p className="text-sm font-semibold text-neutral-900">Contacto</p>
              <p className="mt-2 text-sm text-neutral-600">
                Rama Estudiantil IEEE-ESPOL
              </p>
              <p className="mt-1 text-sm text-neutral-600">
                Facultad de Ingenieria Electrica (FIEC)
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.3em] text-neutral-500">
                Unete a la comunidad
              </p>
              <p className="mt-2 text-sm text-neutral-600">
                Somos estudiantes listos para colaborar en proyectos, eventos y nuevas ideas.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 bg-white/60">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-neutral-500 lg:flex-row lg:px-10">
          <p>Copyright © 2026 IEEE ESPOL.</p>
          <p>Inspirado en IEEE.org, contenido basado en IEEE-ESPOL.</p>
        </div>
      </footer>
    </div>
  );
}
