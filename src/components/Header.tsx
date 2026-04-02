"use client";

import { useEffect, useState } from "react";
import { Search, Menu } from "lucide-react";

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                // Scrolling down
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div
            className={`fixed left-0 right-0 top-0 z-50 transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            {/* Top Bar */}
            <div className="bg-black/40 backdrop-blur-[2px] text-white text-[11px] font-semibold tracking-wide border-b border-[#0085ca]/30 hidden md:block">
                <div className="max-w-[1400px] mx-auto px-6 h-8 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-white/80 transition-colors">IEEE.org</a>
                        <a href="#" className="hover:text-white/80 transition-colors">IEEE Xplore<sup>®</sup></a>
                        <a href="#" className="hover:text-white/80 transition-colors">IEEE Standards</a>
                        <a href="#" className="hover:text-white/80 transition-colors">IEEE Spectrum</a>
                        <a href="#" className="hover:text-white/80 transition-colors">IEEE Sites</a>
                    </div>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-[#0085ca] hover:text-[#0085ca]/80 transition-colors">Join IEEE</a>
                        <a href="#" className="hover:text-white/80 transition-colors">Donate</a>
                        <a href="#" className="hover:text-white/80 transition-colors">Cart (0)</a>
                        <a href="#" className="hover:text-white/80 transition-colors">Create Account</a>
                        <a href="#" className="hover:text-white/80 transition-colors">Sign In</a>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className="bg-gradient-to-b from-black/40 to-transparent">
                <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center p-1 bg-white">
                            {/* Replace with actual IEEE logo or similar */}
                            <div className="w-full h-full border-[2px] border-[#00629b] flex items-center justify-center rotate-45 transform">
                                <div className="-rotate-45 font-bold text-[#00629b] text-sm">IEEE</div>
                            </div>
                        </div>
                        <div className="text-white ml-2">
                            <p className="text-2xl font-bold tracking-wider leading-none mb-1">IEEE</p>
                            <div className="leading-tight">
                                <p className="text-[11px] italic tracking-wide">Advancing Technology</p>
                                <p className="text-[11px] italic tracking-wide">for Humanity</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-6 text-white">
                        <button className="hover:text-white/80 transition-colors">
                            <Search size={24} />
                        </button>
                        <button className="hover:text-white/80 transition-colors">
                            <Menu size={32} />
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
}
