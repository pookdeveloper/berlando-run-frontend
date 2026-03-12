'use client'

import { useState } from 'react'
import { useCart } from '@/stores/cartStore'

interface AddToCartProps {
  productId: string
  productName: string
  productPrice: number
  productImage: string
  productSlug: string
  variants: Array<{
    id: string
    size: string
    color: string | null
    stock: number
  }>
}

export function AddToCart({
  productId,
  productName,
  productPrice,
  productImage,
  productSlug,
  variants,
}: AddToCartProps) {
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(
    variants.find((v) => v.stock > 0)?.id || null
  )
  const [isAdding, setIsAdding] = useState(false)
  const addItem = useCart((state) => state.addItem)

  const selectedVariant = variants.find((v) => v.id === selectedVariantId)
  const isOutOfStock = !selectedVariant || selectedVariant.stock === 0

  const handleAddToCart = () => {
    if (!selectedVariant || isOutOfStock) return

    setIsAdding(true)
    
    addItem({
      productId,
      variantId: selectedVariant.id,
      name: productName,
      price: productPrice,
      quantity: 1,
      image: productImage,
      size: selectedVariant.size,
      color: selectedVariant.color || undefined,
    })

    setTimeout(() => setIsAdding(false), 500)
  }

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium text-foreground">Select Size</h3>
        <div className="mt-4 grid grid-cols-4 gap-2">
          {variants.map((variant) => {
            const isSelected = selectedVariantId === variant.id
            const isAvailable = variant.stock > 0

            return (
              <button
                key={variant.id}
                onClick={() => isAvailable && setSelectedVariantId(variant.id)}
                className={`
                  flex items-center justify-center border px-4 py-3 text-sm font-medium
                  transition-colors
                  ${
                    isSelected
                      ? 'border-primary bg-primary text-primary-foreground'
                      : isAvailable
                      ? 'border-border bg-transparent text-foreground hover:bg-muted'
                      : 'border-border bg-muted text-muted-foreground cursor-not-allowed'
                   }
                `}
                disabled={!isAvailable}
              >
                {variant.size}
              </button>
            )
          })}
        </div>
        {selectedVariant && selectedVariant.stock < 5 && selectedVariant.stock > 0 && (
          <p className="mt-2 text-xs text-muted-foreground">
            Only {selectedVariant.stock} left in stock
          </p>
        )}
      </div>

      <button
        onClick={handleAddToCart}
        disabled={isOutOfStock || isAdding}
        className="
          w-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-wider text-primary-foreground
          transition-colors hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed
        "
      >
        {isAdding ? 'Adding...' : isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
      </button>
    </div>
  )
}
