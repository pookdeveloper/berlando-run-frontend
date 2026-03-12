'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Minus, Plus, X } from 'lucide-react'
import { CartItem as CartItemType } from '@/stores/cartStore'
import { formatPrice } from '@/lib/utils'

interface CartItemProps {
  item: CartItemType
  onUpdateQuantity: (id: string, quantity: number) => void
  onRemove: (id: string) => void
}

export function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  const handleDecrement = () => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.id, item.quantity - 1)
    } else {
      onRemove(item.id)
    }
  }

  const handleIncrement = () => {
    onUpdateQuantity(item.id, item.quantity + 1)
  }

  return (
    <div className="flex gap-4 border-b border-border py-6">
      <Link
        href={`/products/${item.productId}`}
        className="relative h-24 w-24 flex-shrink-0 overflow-hidden bg-background"
      >
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover object-center"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-muted">
            <span className="font-mono text-xs text-muted-foreground">No image</span>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col">
        <div className="flex justify-between">
          <div className="flex-1">
            <Link
              href={`/products/${item.productId}`}
              className="text-sm font-medium text-foreground hover:text-foreground/80"
            >
              {item.name}
            </Link>
            <div className="mt-1 flex gap-3 font-mono text-xs text-muted-foreground">
              <span>Size: {item.size}</span>
              {item.color && <span>Color: {item.color}</span>}
            </div>
          </div>

          <button
            onClick={() => onRemove(item.id)}
            className="h-6 w-6 text-muted-foreground hover:text-foreground"
            aria-label="Remove item"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={handleDecrement}
              className="flex h-8 w-8 items-center justify-center border border-border hover:bg-muted"
              aria-label="Decrease quantity"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="w-8 text-center font-mono text-sm">{item.quantity}</span>
            <button
              onClick={handleIncrement}
              className="flex h-8 w-8 items-center justify-center border border-border hover:bg-muted"
              aria-label="Increase quantity"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>

          <div className="text-sm font-medium text-foreground">
            {formatPrice(item.price * item.quantity)}
          </div>
        </div>
      </div>
    </div>
  )
}
