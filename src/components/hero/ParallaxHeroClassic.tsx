'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap-config'

export function ParallaxHeroClassic() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 42, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power3.out' }
      )

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.85, delay: 0.15, ease: 'power2.out' }
      )

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.75, delay: 0.28, ease: 'power2.out' }
      )
    }, hero)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-[92vh] overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.06),transparent_35%)]" />

      <div className="relative z-10 flex min-h-[92vh] items-center">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl text-left">
            <p className="font-mono text-xs uppercase tracking-wider text-white/75">
              Europe&apos;s Premier Trail Running Community
            </p>
            <h1
              ref={titleRef}
              className="mt-6 text-5xl font-light tracking-tight text-white md:text-7xl xl:text-8xl"
            >
              Run free.
              <br />
              Run far.
            </h1>
            <p ref={subtitleRef} className="mt-6 max-w-2xl text-base text-white/85 md:text-xl">
              Where brands meet trail running culture. Connect with 15,000+ engaged runners
              across 5 European cities.
            </p>
            <div
              ref={ctaRef}
              className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <a
                href="/contact"
                className="border border-white bg-white px-8 py-4 font-mono text-xs uppercase tracking-wider text-black transition-all hover:bg-white/90"
              >
                Partner With Us
              </a>
              <a
                href="/community"
                className="border border-white/70 px-8 py-4 font-mono text-xs uppercase tracking-wider text-white transition-all hover:border-white hover:bg-white/10"
              >
                Explore Community
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <svg
            className="h-6 w-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}
