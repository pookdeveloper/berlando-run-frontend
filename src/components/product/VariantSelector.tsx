'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface Variant {
  id: string
  size: string
  color: string | null
  stock: number
}

interface VariantSelectorProps {
  variants: Variant[]
  onVariantChange?: (variantId: string) => void
}

export function VariantSelector({ variants, onVariantChange }: VariantSelectorProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const selectedSize = searchParams.get('size')
  const selectedColor = searchParams.get('color')

  const sizes = Array.from(new Set(variants.map((v) => v.size))).sort()
  const colors = Array.from(
    new Set(variants.map((v) => v.color).filter((c): c is string => c !== null))
  )

  const availableVariantsForSize = (size: string) => {
    return variants.filter((v) => v.size === size && v.stock > 0)
  }

  const availableVariantsForColor = (color: string | null) => {
    return variants.filter((v) => v.color === color && v.stock > 0)
  }

  const currentVariant = variants.find(
    (v) =>
      v.size === (selectedSize || sizes[0]) &&
      (colors.length === 0 || v.color === (selectedColor || colors[0]))
  )

  const updateURL = (params: Record<string, string>) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()))
    
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        current.set(key, value)
      } else {
        current.delete(key)
      }
    })

    const search = current.toString()
    const query = search ? `?${search}` : ''
    
    router.push(`${pathname}${query}`, { scroll: false })

    if (onVariantChange && currentVariant) {
      onVariantChange(currentVariant.id)
    }
  }

  const handleSizeChange = (size: string) => {
    const availableForSize = availableVariantsForSize(size)
    
    if (availableForSize.length === 0) return

    const newColor = colors.length > 0
      ? (selectedColor && availableForSize.some((v) => v.color === selectedColor)
          ? selectedColor
          : availableForSize[0].color || '')
      : ''

    updateURL({ size, ...(colors.length > 0 && { color: newColor }) })
  }

  const handleColorChange = (color: string) => {
    const availableForColor = availableVariantsForColor(color)
    
    if (availableForColor.length === 0) return

    const newSize = selectedSize && availableForColor.some((v) => v.size === selectedSize)
      ? selectedSize
      : availableForColor[0].size

    updateURL({ size: newSize, color })
  }

  const isSizeAvailable = (size: string) => {
    return availableVariantsForSize(size).length > 0
  }

  const isColorAvailable = (color: string) => {
    return availableVariantsForColor(color).length > 0
  }

  const isSizeSelected = (size: string) => {
    return selectedSize === size || (!selectedSize && size === sizes[0])
  }

  const isColorSelected = (color: string) => {
    return selectedColor === color || (!selectedColor && colors.length > 0 && color === colors[0])
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-foreground">Size</h3>
          {currentVariant && currentVariant.stock < 5 && currentVariant.stock > 0 && (
            <span className="text-xs text-muted-foreground">Only {currentVariant.stock} left</span>
          )}
        </div>
        <div className="mt-3 grid grid-cols-4 gap-2">
          {sizes.map((size) => {
            const isAvailable = isSizeAvailable(size)
            const isSelected = isSizeSelected(size)

            return (
              <button
                key={size}
                onClick={() => isAvailable && handleSizeChange(size)}
                disabled={!isAvailable}
                className={cn(
                  'flex items-center justify-center border px-4 py-3 text-sm font-medium transition-colors',
                  isSelected
                    ? 'border-primary bg-primary text-primary-foreground'
                    : isAvailable
                    ? 'border-border bg-transparent text-foreground hover:bg-muted'
                    : 'border-border bg-muted text-muted-foreground cursor-not-allowed'
                )}
              >
                {size}
              </button>
            )
          })}
        </div>
      </div>

      {colors.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-foreground">Color</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {colors.map((color) => {
              const isAvailable = isColorAvailable(color)
              const isSelected = isColorSelected(color)

              return (
                <button
                  key={color}
                  onClick={() => isAvailable && handleColorChange(color)}
                  disabled={!isAvailable}
                  className={cn(
                    'border px-6 py-3 text-sm font-medium transition-colors capitalize',
                    isSelected
                      ? 'border-primary bg-primary text-primary-foreground'
                      : isAvailable
                      ? 'border-border bg-transparent text-foreground hover:bg-muted'
                      : 'border-border bg-muted text-muted-foreground cursor-not-allowed'
                  )}
                >
                  {color}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {currentVariant && currentVariant.stock === 0 && (
        <p className="text-sm text-muted-foreground">This variant is currently out of stock</p>
      )}
    </div>
  )
}
