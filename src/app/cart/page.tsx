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
      <div className="min-h-screen bg-stone">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-light tracking-tight text-black">Shopping Cart</h1>
          
          <div className="mt-16 flex flex-col items-center justify-center py-12">
            <ShoppingBag className="h-16 w-16 text-black/20" />
            <h2 className="mt-6 text-xl font-light text-black">Your cart is empty</h2>
            <p className="mt-2 text-sm text-black/60">
              Add products to your cart to see them here.
            </p>
            <Link
              href="/products"
              className="mt-8 bg-black px-8 py-4 text-sm font-medium uppercase tracking-wider text-white hover:bg-black/90"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-light tracking-tight text-black">Shopping Cart</h1>

        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12">
          <div className="lg:col-span-7">
            <div className="divide-y divide-black/10">
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
            <div className="border border-black/10 bg-white p-8">
              <h2 className="text-lg font-medium text-black">Order Summary</h2>

              <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-black/60">Subtotal</dt>
                  <dd className="text-sm font-medium text-black">
                    {formatPrice(subtotal)}
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-black/10 pt-4">
                  <dt className="text-sm text-black/60">Shipping</dt>
                  <dd className="text-sm font-medium text-black">
                    {formatPrice(shipping)}
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-black/10 pt-4">
                  <dt className="text-base font-medium text-black">Total</dt>
                  <dd className="text-base font-medium text-black">
                    {formatPrice(total)}
                  </dd>
                </div>
              </dl>

              <div className="mt-8">
                <button
                  onClick={handleCheckout}
                  disabled={isLoading}
                  className="w-full bg-black px-8 py-4 text-sm font-medium uppercase tracking-wider text-white hover:bg-black/90 disabled:bg-black/40 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Processing...' : 'Proceed to Checkout'}
                </button>
              </div>

              <div className="mt-6 text-center">
                <Link
                  href="/products"
                  className="text-sm font-medium text-black/60 hover:text-black"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>

            <div className="mt-6 border border-black/10 bg-white p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-black/60">
                Free Shipping
              </p>
              <p className="mt-2 text-sm text-black/80">
                Free shipping on orders over €100. Standard delivery 3-5 business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
