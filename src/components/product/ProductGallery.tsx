'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import Zoom from 'react-medium-image-zoom'
import 'keen-slider/keen-slider.min.css'
import 'react-medium-image-zoom/dist/styles.css'

interface ProductImage {
  id: string
  url: string
  alt: string
}

interface ProductGalleryProps {
  images: ProductImage[]
  productName: string
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 8,
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false

        function clearNextTimeout() {
          clearTimeout(timeout)
        }

        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }

        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ]
  )

  if (images.length === 0) {
    return (
      <div className="aspect-square w-full bg-black/5 flex items-center justify-center">
        <span className="font-mono text-sm text-black/30">No images available</span>
      </div>
    )
  }

  if (images.length === 1) {
    return (
      <div className="aspect-square w-full overflow-hidden bg-stone">
        <Zoom>
          <Image
            src={images[0].url}
            alt={images[0].alt || productName}
            width={1200}
            height={1200}
            className="h-full w-full object-cover object-center"
            priority
          />
        </Zoom>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <div ref={sliderRef} className="keen-slider aspect-square overflow-hidden bg-stone">
        {images.map((image, idx) => (
          <div key={image.id} className="keen-slider__slide">
            <Zoom>
              <Image
                src={image.url}
                alt={image.alt || `${productName} view ${idx + 1}`}
                width={1200}
                height={1200}
                className="h-full w-full object-cover object-center"
                priority={idx === 0}
              />
            </Zoom>
          </div>
        ))}
      </div>

      <div ref={thumbnailRef} className="keen-slider">
        {images.map((image, idx) => (
          <button
            key={image.id}
            onClick={() => {
              instanceRef.current?.moveToIdx(idx)
            }}
            className={`keen-slider__slide aspect-square overflow-hidden bg-stone border-2 transition-colors ${
              currentSlide === idx ? 'border-black' : 'border-transparent'
            }`}
          >
            <Image
              src={image.url}
              alt={image.alt || `${productName} thumbnail ${idx + 1}`}
              width={200}
              height={200}
              className="h-full w-full object-cover object-center"
            />
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              instanceRef.current?.moveToIdx(idx)
            }}
            className={`h-2 w-2 rounded-full transition-colors ${
              currentSlide === idx ? 'bg-black' : 'bg-black/20'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
