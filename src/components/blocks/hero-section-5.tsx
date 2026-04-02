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
                    <div className="relative py-24 md:pb-32 lg:pb-36 lg:pt-72 bg-[#020b14] overflow-hidden">
                        <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12 pointer-events-none">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                                <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl text-white pointer-events-auto">
                                    Advancing Technology for Humanity
                                </h1>
                                <p className="mt-8 max-w-2xl text-balance text-lg text-gray-300 pointer-events-auto">
                                    Connect with 400,000+ engineers, access millions of research documents, and shape the future of technology through IEEE&apos;s global community.
                                </p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start pointer-events-auto">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="h-12 rounded-full pl-5 pr-3 text-base bg-[#0b5ea8] text-white hover:bg-[#0b5ea8]/90">
                                        <Link href="#happening">
                                            <span className="text-nowrap">Join IEEE</span>
                                            <ChevronRight className="ml-1" />
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-12 rounded-full px-5 text-base text-gray-300 hover:bg-white/10 hover:text-white">
                                        <Link href="#innovations">
                                            <span className="text-nowrap">Explore Research</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="aspect-[2/3] absolute inset-1 overflow-hidden rounded-3xl sm:aspect-video lg:rounded-[3rem]">
                            <HeroCanvas />
                        </div>
                    </div>
                </section>
                <section className="bg-background pb-2 pt-2">
                    <div className="group relative m-auto max-w-7xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-sm text-[#0b1f33] font-medium">Nuestros logos de todos los capítulos</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    gap={60}>
                                    {chapterLogos.map((logo) => (
                                        <div key={logo.id} className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity min-w-32">
                                            <img 
                                                src={logo.image} 
                                                alt={logo.name} 
                                                className="max-h-16 w-auto object-contain"
                                                onError={(e) => {
                                                    // Fallback if image not found
                                                    e.currentTarget.style.display = 'none';
                                                    if (e.currentTarget.nextElementSibling) {
                                                        (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
                                                    }
                                                }}
                                            />
                                            <span style={{display: 'none'}} className="font-semibold text-sm text-[#0b5ea8] text-center px-2">{logo.name}</span>
                                        </div>
                                    ))}
                                </InfiniteSlider>

                                <div className="bg-gradient-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-gradient-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
