'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from '@/lib/gsap-config'
import { useParallax } from './useParallax'

export function ParallaxHero() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const lightSweepRef = useRef<HTMLDivElement>(null)
  const grainRef = useRef<HTMLDivElement>(null)

  const bgRef = useParallax({ speed: 0.25 })
  const mistRef = useParallax({ speed: 0.45, opacity: true })
  const runnerRef = useParallax({ speed: 0.7, scale: true })

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const floatingLayers = [bgRef.current, mistRef.current, runnerRef.current].filter(
      Boolean
    ) as HTMLDivElement[]

    const handleMouseMove = (event: MouseEvent) => {
      const rect = hero.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5

      floatingLayers.forEach((layer, index) => {
        const depth = (index + 1) * 10
        gsap.to(layer, {
          x: x * depth,
          y: y * depth,
          duration: 0.8,
          ease: 'power2.out',
          overwrite: 'auto',
        })
      })

    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 48, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.1, ease: 'power3.out' }
      )

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.15, ease: 'power2.out' }
      )

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: 'power2.out' }
      )

      gsap.to(lightSweepRef.current, {
        xPercent: 28,
        yPercent: -10,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to(grainRef.current, {
        backgroundPosition: '200px 120px',
        duration: 2.2,
        repeat: -1,
        ease: 'none',
      })

      gsap.to(runnerRef.current, {
        scale: 1.04,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }, hero)

    hero.addEventListener('mousemove', handleMouseMove)

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove)
      ctx.revert()
    }
  }, [bgRef, mistRef, runnerRef])

  return (
    <section ref={heroRef} className="relative min-h-[92vh] overflow-hidden bg-black">
      <div ref={bgRef} className="absolute inset-0 -z-20">
        <Image
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2800"
          alt="Kilian Jornet en los Alpes, vista panorámica"
          fill
          priority
          quality={88}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div ref={mistRef} className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2500"
          alt="Cordillera alpina con nubes bajas"
          fill
          priority
          quality={84}
          sizes="100vw"
          className="object-cover object-top mix-blend-screen opacity-45"
        />
      </div>

      <div ref={runnerRef} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1544531585-9847b68c8c86?q=80&w=2200"
          alt="Kilian Jornet en ascenso por sendero alpino"
          fill
          priority
          quality={86}
          sizes="100vw"
          className="object-cover object-[55%_35%] opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/65" />
      </div>

      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.16),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_30%)]" />

      <div
        ref={lightSweepRef}
        className="pointer-events-none absolute -left-1/3 top-0 z-[2] h-full w-[70%] bg-gradient-to-r from-transparent via-white/18 to-transparent mix-blend-soft-light"
      />

      <div
        ref={grainRef}
        className="pointer-events-none absolute inset-0 z-[3] opacity-[0.16]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.32) 1px, transparent 0)',
          backgroundSize: '3px 3px',
        }}
      />

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

      <div className="absolute bottom-4 right-4 z-20 max-w-xs border border-white/20 bg-black/45 p-3 text-[10px] text-white/70 backdrop-blur-sm">
        Nota editorial: sustituye estas imágenes por fotografías con licencia/permiso de
        Kilian Jornet antes de publicación comercial.
      </div>
    </section>
  )
}
