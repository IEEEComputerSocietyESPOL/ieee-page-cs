'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronRight } from 'lucide-react'
import { useScroll, motion } from 'motion/react'
import HeroCanvas from '@/components/HeroCanvas'
import chapterLogos from '@/data/chapter-logos.json'
import { Navbar1 } from './shadcnblocks-com-navbar1'
import { ieeeNavData } from '@/data/nav-data'

export function HeroSection() {
    return (
        <>
            <Navbar1 {...ieeeNavData} />
            <div className="overflow-x-hidden">
                <section>
                    <div className="relative py-24 md:pb-4 lg:pb-6 lg:pt-72 bg-[#020b14] overflow-hidden">
                        <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12 pointer-events-none">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                                <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl text-white pointer-events-auto">
                                    Advancing Technology for Humanity
                                </h1>
                                <p className="mt-8 max-w-2xl text-balance text-lg text-gray-300 pointer-events-auto">
                                    Únete a una de las ramas estudiantiles más activas en el Ecuador. Potenciamos el talento de nuestros miembros combinando oportunidades académicas locales con el respaldo de la red de profesionales en tecnología más grande del mundo.
                                </p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start pointer-events-auto">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="h-12 rounded-full pl-5 pr-3 text-base bg-[#0b5ea8] text-white hover:bg-[#0b5ea8]/90">
                                        <Link href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noopener noreferrer">
                                            <span className="text-nowrap">Join IEEE</span>
                                            <ChevronRight className="ml-1" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="aspect-[2/3] absolute inset-1 overflow-hidden rounded-3xl sm:aspect-video lg:rounded-[3rem] [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
                            <HeroCanvas />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
