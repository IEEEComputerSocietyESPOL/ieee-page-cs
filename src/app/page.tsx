import { HeroSection } from "@/components/blocks/hero-section-5";

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

const keepExploringLinks = [
  "Membership Benefits",
  "Upcoming Conferences",
  "Advance Your Career",
  "Communities & Connection",
];

const footerColumns = [
  {
    title: "ABOUT IEEE",
    links: [
      "IEEE at a Glance",
      "History",
      "Strategic Plan",
      "Organizational Structure",
      "Organizational Ethics",
      "Financials & Statistics",
    ],
  },
  {
    title: "QUICK LINKS",
    links: ["Newsroom", "Locations", "Contact Us", "Work at IEEE", "Get the IEEE App"],
  },
  {
    title: "FOLLOW US",
    links: ["X", "Facebook", "LinkedIn", "Instagram", "YouTube"],
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
    <div className="relative min-h-screen bg-white text-[#0b1f33]">
      <HeroSection />

      <div className="relative z-10">
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

        <section className="mx-auto w-full max-w-6xl px-6 pb-12 lg:px-10">
          <div className="text-center">
            <h2 className="font-[var(--font-heading)] text-3xl text-[#0b1f33]">Engineer the Future. Join IEEE.</h2>
            <button className="mt-6 rounded-full border border-[#0b5ea8] px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0b5ea8]">
              Join IEEE
            </button>
          </div>
        </section>

        <section id="explore" className="mx-auto w-full max-w-6xl px-6 pb-16 lg:px-10">
          <div className="overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_top,_#1f6db5,_#0b3e73_55%,_#082b4f_100%)] px-10 py-12 text-white">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <h3 className="font-[var(--font-heading)] text-3xl">Keep Exploring</h3>
              <div className="grid gap-3 text-sm">
                {keepExploringLinks.map((link) => (
                  <span key={link} className="flex items-center gap-2">
                    <span className="text-lg">›</span>
                    {link}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-[#e6ecf5] bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 text-sm text-[#3c4a5f] lg:grid-cols-3 lg:px-10">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#0b1f33]">
                {column.title}
              </p>
              <div className="mt-4 grid gap-2">
                {column.links.map((link) => (
                  <span key={link}>{link}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-[#e6ecf5] bg-[#f7f8fb]">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs uppercase tracking-[0.3em] text-[#6b7a90] lg:flex-row lg:px-10">
            <span>Copyright © 2026 IEEE ESPOL.</span>
            <span>Inspired by IEEE.org.</span>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-[#e6ecf5] bg-white/95 px-6 py-4 text-xs text-[#3c4a5f]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <p>
            This site uses cookies to enable essential functionality, analytics, personalization, and targeted advertising. Read the
            Privacy Policy for details.
          </p>
          <button className="rounded-full border border-[#0b5ea8] px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#0b5ea8]">
            Manage Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
