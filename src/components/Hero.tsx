import { ChevronRight, ChevronLeft, Pause } from "lucide-react";
import HeroCanvas from "@/components/HeroCanvas";

export default function Hero() {
    return (
        <section className="relative w-full h-[85vh] min-h-[600px] mt-0">
            {/* Background Animation */}
            <HeroCanvas />

            {/* Content Container */}
            <div className="relative z-10 w-full h-full flex flex-col justify-end pb-24 md:pb-32 px-6 lg:px-16 max-w-[1400px] mx-auto">

                {/* Blue Card */}
                <div className="w-full max-w-[500px] bg-white shadow-xl flex flex-col shadow-black/20">
                    <div className="bg-[#124268] text-white p-6 md:p-8">
                        <h1 className="text-2xl md:text-[32px] leading-tight font-light">
                            Be a Part of Something Bigger With IEEE
                        </h1>
                    </div>
                    <div className="bg-white text-[#1c2125] p-6 md:p-8 flex flex-col gap-6 relative">
                        <p className="text-[15px] font-medium leading-relaxed max-w-[400px]">
                            Join over 500,000 innovators and shape the future of technology.
                        </p>

                        <a href="#" className="flex items-center gap-2 text-[#00629b] font-bold text-sm tracking-wide">
                            <ChevronRight size={16} strokeWidth={3} /> Join Now
                        </a>

                        {/* Slider Controls Inside Card Area */}
                        <div className="flex items-center mt-6 gap-2">
                            <div className="w-8 h-[2px] bg-[#00629b]"></div>
                            <div className="w-6 h-[2px] bg-gray-300"></div>
                            <div className="w-6 h-[2px] bg-gray-300"></div>
                            <div className="w-6 h-[2px] bg-gray-300"></div>
                            <div className="w-6 h-[2px] bg-gray-300"></div>
                        </div>

                        {/* Carousel Arrows placed absolutely to the right inside the white section */}
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 text-[#00629b]">
                            <button className="p-1 hover:bg-gray-100 rounded-full transition-colors"><ChevronRight size={28} className="rotate-[-90deg] hidden" /></button> {/* Removing the hidden if we want arrow up/down or left/right. Actual screenshot shows left/right on right side of the white box! */}

                        </div>
                        {/* Let's fix the chevron pos to match image. The image has single > and < vertically stacked on the right edge of the white box. */}
                        <div className="absolute right-6 top-0 bottom-0 flex flex-col justify-center gap-2 text-[#00629b]">
                            <button className="hover:bg-gray-100 rounded-full p-1"><ChevronRight size={24} strokeWidth={2} /></button>
                            <button className="hover:bg-gray-100 rounded-full p-1"><ChevronLeft size={24} strokeWidth={2} /></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pause Button Bottom Right */}
            <button className="absolute bottom-6 right-6 md:right-12 bg-black/80 hover:bg-black text-white p-2 rounded-md transition-colors shadow-lg">
                <Pause size={16} fill="white" />
            </button>
        </section>
    );
}
