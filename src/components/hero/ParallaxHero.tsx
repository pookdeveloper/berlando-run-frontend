'use client'

import Image from 'next/image'
import { useParallax } from './useParallax'

export function ParallaxHero() {
  const bgRef = useParallax({ speed: 0.3 })
  const midRef = useParallax({ speed: 0.6, opacity: true })
  const fgRef = useParallax({ speed: 0.9 })

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <div ref={bgRef} className="absolute inset-0 -z-20">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2340"
          alt="Distant Alpine mountain peaks"
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div ref={midRef} className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2340"
          alt="Alpine mountains midground"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div ref={fgRef} className="relative z-10 flex h-full items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <p className="font-mono text-xs uppercase tracking-wider text-white/80">
            Europe's Premier Trail Running Community
          </p>
          <h1 className="mt-6 text-6xl font-light tracking-tight text-white md:text-8xl">
            Run free.
            <br />
            Run far.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-xl text-white/90 md:text-2xl">
            Where brands meet trail running culture. Connect with 15,000+ engaged runners across 5 European cities.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="bg-white px-8 py-4 font-mono text-sm uppercase tracking-wider text-black transition-all hover:bg-white/90"
            >
              Partner With Us
            </a>
            <a
              href="/community"
              className="border border-white px-8 py-4 font-mono text-sm uppercase tracking-wider text-white transition-all hover:bg-white/10"
            >
              Explore Community
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="font-mono text-xs uppercase tracking-wider">Scroll</span>
          <svg
            className="h-6 w-6 animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}
