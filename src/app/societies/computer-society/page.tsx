import { Navbar1 } from "@/components/blocks/shadcnblocks-com-navbar1";
import { ieeeNavData } from "@/data/nav-data";

export default function ComputerSocietyPage() {
  return (
    <>
      <Navbar1 {...ieeeNavData} />
      <div className="min-h-screen bg-[#020b14] flex flex-col items-center justify-center text-white px-4 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020b14] to-[#020b14] pointer-events-none"></div>
         <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-4 relative z-10">Computer Society</h1>
         <p className="text-gray-400 text-lg max-w-2xl relative z-10">Empowering computer science professionals. This page is currently under construction!</p>
      </div>
    </>
  )
}
