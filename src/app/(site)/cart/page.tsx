'use client'

import { useCart } from '@/stores/cartStore'
import { CartItem } from '@/components/cart/CartItem'
import { formatPrice } from '@/lib/utils'
import { createCheckoutSession } from '@/app/actions/checkout'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'
import { useState } from 'react'

export default function CartPage() {
  const items = useCart((state) => state.items)
  const updateQuantity = useCart((state) => state.updateQuantity)
  const removeItem = useCart((state) => state.removeItem)
  const getTotal = useCart((state) => state.getTotal)
  const [isLoading, setIsLoading] = useState(false)

  const subtotal = getTotal()
  const shipping = subtotal > 0 ? 10 : 0
  const total = subtotal + shipping

  const handleCheckout = async () => {
    setIsLoading(true)
    try {
      const result = await createCheckoutSession(items)
      if (result.url) {
        window.location.href = result.url
      } else if (result.error) {
        alert(result.error)
      }
    } catch (error) {
      alert('Failed to proceed to checkout. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-light tracking-tight text-foreground">Shopping Cart</h1>
          
          <div className="mt-16 flex flex-col items-center justify-center py-12">
            <ShoppingBag className="h-16 w-16 text-muted-foreground/50" />
            <h2 className="mt-6 text-xl font-light text-foreground">Your cart is empty</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Add products to your cart to see them here.
            </p>
            <Link
              href="/products"
              className="mt-8 bg-primary px-8 py-4 text-sm font-medium uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-light tracking-tight text-foreground">Shopping Cart</h1>

        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12">
          <div className="lg:col-span-7">
            <div className="divide-y divide-border">
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeItem}
                />
              ))}
            </div>
          </div>

          <div className="mt-16 lg:col-span-5 lg:mt-0">
            <div className="border border-border bg-card p-8">
              <h2 className="text-lg font-medium text-card-foreground">Order Summary</h2>

              <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-muted-foreground">Subtotal</dt>
                  <dd className="text-sm font-medium text-foreground">
                    {formatPrice(subtotal)}
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <dt className="text-sm text-muted-foreground">Shipping</dt>
                  <dd className="text-sm font-medium text-foreground">
                    {formatPrice(shipping)}
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <dt className="text-base font-medium text-foreground">Total</dt>
                  <dd className="text-base font-medium text-foreground">
                    {formatPrice(total)}
                  </dd>
                </div>
              </dl>

              <div className="mt-8">
                <button
                  onClick={handleCheckout}
                  disabled={isLoading}
                  className="w-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-wider text-primary-foreground hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Processing...' : 'Proceed to Checkout'}
                </button>
              </div>

              <div className="mt-6 text-center">
                <Link
                  href="/products"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>

            <div className="mt-6 border border-border bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Free Shipping
              </p>
              <p className="mt-2 text-sm text-card-foreground/80">
                Free shipping on orders over €100. Standard delivery 3-5 business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
