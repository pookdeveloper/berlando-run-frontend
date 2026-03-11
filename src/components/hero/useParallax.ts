'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap-config'

interface ParallaxOptions {
  speed?: number
  opacity?: boolean
  scale?: boolean
}

export function useParallax(options: ParallaxOptions = {}) {
  const elementRef = useRef<HTMLDivElement>(null)
  const { speed = 0.5, opacity = false, scale = false } = options

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current
    
    gsap.set(element, {
      force3D: true,
      willChange: 'transform'
    })

    const ctx = gsap.context(() => {
      const tween: any = {
        y: `${(1 - speed) * 100}%`,
        ease: 'none'
      }

      if (opacity) tween.opacity = 0
      if (scale) tween.scale = 1.1

      const mm = gsap.matchMedia()

      mm.add(
        {
          isDesktop: '(min-width: 768px)',
          isMobile: '(max-width: 767px)',
          reduceMotion: '(prefers-reduced-motion: reduce)'
        },
        (context) => {
          const { isMobile, reduceMotion} = context.conditions as Record<string, boolean>

          if (reduceMotion) {
            return
          }

          const distance = isMobile ? (1 - speed) * 30 : (1 - speed) * 100

          gsap.to(element, {
            y: `${distance}%`,
            ...(opacity && { opacity: isMobile ? 0.5 : 0 }),
            ...(scale && { scale: 1.05 }),
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'bottom top',
              scrub: isMobile ? 0.5 : true
            }
          })
        }
      )
    }, element)

    return () => {
      ctx.revert()
      gsap.set(element, { willChange: 'auto' })
    }
  }, [speed, opacity, scale])

  return elementRef
}
