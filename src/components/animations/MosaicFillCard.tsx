'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap-config'
import { cn } from '@/lib/utils'

interface MosaicFillCardProps {
  children: React.ReactNode
  className?: string
}

const INITIAL_CLIP = 'polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)'
const MID_CLIP = 'polygon(0% 0%, 100% 0%, 0% 100%, 0% 100%)'
const FULL_CLIP = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'

export function MosaicFillCard({ children, className }: MosaicFillCardProps) {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!overlayRef.current) return

    gsap.set(overlayRef.current, {
      opacity: 0,
      clipPath: INITIAL_CLIP,
    })
  }, [])

  const animateIn = () => {
    if (!overlayRef.current) return

    gsap.killTweensOf(overlayRef.current)

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.to(overlayRef.current, { opacity: 1, duration: 0.12 })
      .to(overlayRef.current, { clipPath: MID_CLIP, duration: 0.22 }, 0)
      .to(overlayRef.current, { clipPath: FULL_CLIP, duration: 0.3 }, 0.16)
  }

  const animateOut = () => {
    if (!overlayRef.current) return

    gsap.killTweensOf(overlayRef.current)

    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } })
    tl.to(overlayRef.current, { clipPath: INITIAL_CLIP, duration: 0.28 })
      .to(overlayRef.current, { opacity: 0, duration: 0.14 }, 0.1)
  }

  return (
    <div
      className={cn('group relative overflow-hidden', className)}
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
      onFocusCapture={animateIn}
      onBlurCapture={animateOut}
    >
      <div
        ref={overlayRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-primary/10" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(213,62,15,0.24) 1px, transparent 1px), linear-gradient(90deg, rgba(213,62,15,0.24) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  )
}
