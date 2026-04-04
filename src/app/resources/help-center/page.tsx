import { Navbar1 } from "@/components/blocks/shadcnblocks-com-navbar1";
import { ieeeNavData } from "@/data/nav-data";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function HelpCenterPage() {
  return (
    <>
      <Navbar1 {...ieeeNavData} />
      <div className="min-h-screen bg-[#020b14] flex flex-col items-center justify-center text-white px-4 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020b14] to-[#020b14] pointer-events-none"></div>
         <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-4 relative z-10">Help Center</h1>
         <p className="text-gray-400 text-lg max-w-2xl relative z-10">Get all the answers you need regarding IEEE ESPOL. This page is currently under construction!</p>
         
         <div className="mt-12 relative z-10">
           <Pagination>
             <PaginationContent>
               <PaginationItem>
                 <PaginationPrevious href="#" className="text-white hover:bg-white/10 hover:text-white" />
               </PaginationItem>
               <PaginationItem>
                 <PaginationLink href="#" className="text-white hover:bg-white/10 hover:text-white">1</PaginationLink>
               </PaginationItem>
               <PaginationItem>
                 <PaginationLink href="#" isActive className="bg-[#0b5ea8] text-white border-[#0b5ea8] hover:bg-[#0b5ea8]/90">2</PaginationLink>
               </PaginationItem>
               <PaginationItem>
                 <PaginationLink href="#" className="text-white hover:bg-white/10 hover:text-white">3</PaginationLink>
               </PaginationItem>
               <PaginationItem>
                 <PaginationEllipsis className="text-white" />
               </PaginationItem>
               <PaginationItem>
                 <PaginationNext href="#" className="text-white hover:bg-white/10 hover:text-white" />
               </PaginationItem>
             </PaginationContent>
           </Pagination>
         </div>
      </div>
    </>
  )
}
