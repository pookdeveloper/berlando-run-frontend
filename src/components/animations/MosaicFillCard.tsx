'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap-config'
import { cn } from '@/lib/utils'

interface MosaicFillCardProps {
  children: React.ReactNode
  className?: string
}

const ROWS = 15
const COLS = 12
const TOTAL_CELLS = ROWS * COLS
const INITIAL_CLIP = 'polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)'

function getCoveredCellsForThreshold(t: number) {
  let covered = 0

  for (let row = 0; row < ROWS; row += 1) {
    const y = (row + 0.5) / ROWS
    for (let col = 0; col < COLS; col += 1) {
      const x = (col + 0.5) / COLS
      if (x + y <= t) covered += 1
    }
  }

  return covered
}

function getThresholdForCellCount(count: number) {
  let low = 0
  let high = 2

  for (let i = 0; i < 18; i += 1) {
    const mid = (low + high) / 2
    const covered = getCoveredCellsForThreshold(mid)

    if (covered >= count) {
      high = mid
    } else {
      low = mid
    }
  }

  return high
}

function getClipForCellCount(rawCount: number) {
  const count = Math.max(0, Math.min(TOTAL_CELLS, Math.floor(rawCount)))

  if (count <= 0) return INITIAL_CLIP
  if (count >= TOTAL_CELLS) return 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'

  const t = getThresholdForCellCount(count)

  if (t <= 1) {
    const edge = t * 100
    return `polygon(0% 0%, ${edge}% 0%, 0% ${edge}%)`
  }

  const rightY = (t - 1) * 100
  const bottomX = (t - 1) * 100
  return `polygon(0% 0%, 100% 0%, 100% ${rightY}%, ${bottomX}% 100%, 0% 100%)`
}

export function MosaicFillCard({ children, className }: MosaicFillCardProps) {
  const mosaicRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mosaicRef.current) return

    gsap.set(mosaicRef.current, {
      opacity: 0,
      clipPath: INITIAL_CLIP,
    })
  }, [])

  const animateIn = () => {
    if (!mosaicRef.current) return

    gsap.killTweensOf(mosaicRef.current)
    const state = { value: 0 }

    gsap.set(mosaicRef.current, { opacity: 1 })
    gsap.to(state, {
      value: TOTAL_CELLS,
      duration: 0.7,
      ease: `steps(${TOTAL_CELLS})`,
      onUpdate: () => {
        if (!mosaicRef.current) return
        gsap.set(mosaicRef.current, {
          clipPath: getClipForCellCount(state.value),
        })
      },
    })
  }

  const animateOut = () => {
    if (!mosaicRef.current) return

    gsap.killTweensOf(mosaicRef.current)
    const state = { value: TOTAL_CELLS }

    gsap.to(state, {
      value: 0,
      duration: 0.34,
      ease: `steps(${TOTAL_CELLS})`,
      onUpdate: () => {
        if (!mosaicRef.current) return
        const clip = getClipForCellCount(state.value)
        gsap.set(mosaicRef.current, {
          clipPath: clip,
          opacity: clip === INITIAL_CLIP ? 0 : 1,
        })
      },
      onComplete: () => {
        if (!mosaicRef.current) return
        gsap.set(mosaicRef.current, { opacity: 0, clipPath: INITIAL_CLIP })
      },
    })
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
        ref={mosaicRef}
        aria-hidden="true"
        className="mosaic_grid pointer-events-none absolute inset-0 z-0 grid"
        style={{
          gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${ROWS}, minmax(0, 1fr))`,
          backgroundColor: 'rgba(213,62,15,0.48)',
          backgroundImage:
            'linear-gradient(rgba(213,62,15,0.42) 1px, transparent 1px), linear-gradient(90deg, rgba(213,62,15,0.42) 1px, transparent 1px)',
          backgroundSize: `${100 / COLS}% ${100 / ROWS}%`,
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  )
}
