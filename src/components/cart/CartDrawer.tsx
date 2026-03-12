'use client'

import { useCart } from '@/stores/cartStore'
import { CartItem } from '@/components/cart/CartItem'
import { formatPrice } from '@/lib/utils'
import { createCheckoutSession } from '@/app/actions/checkout'
import Link from 'next/link'
import { X, ShoppingBag } from 'lucide-react'
import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

interface CartDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CartDrawer({ open, onOpenChange }: CartDrawerProps) {
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

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed right-0 top-0 h-full w-full max-w-md border-l border-border bg-background p-0 shadow-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right duration-300">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-border px-6 py-6">
              <Dialog.Title className="text-lg font-medium text-foreground">
                Shopping Cart
              </Dialog.Title>
              <Dialog.Close className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground">
                <X className="h-5 w-5" />
              </Dialog.Close>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-6">
                <ShoppingBag className="h-16 w-16 text-muted-foreground/50" />
                <p className="mt-4 text-base font-light text-foreground">Your cart is empty</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Add products to your cart to see them here.
                </p>
                <Link
                  href="/products"
                  onClick={() => onOpenChange(false)}
                  className="mt-6 bg-primary px-6 py-3 text-sm font-medium uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Browse Products
                </Link>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6">
                  {items.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onUpdateQuantity={updateQuantity}
                      onRemove={removeItem}
                    />
                  ))}
                </div>

                <div className="border-t border-border px-6 py-6">
                  <dl className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <dt className="text-muted-foreground">Subtotal</dt>
                      <dd className="font-medium text-foreground">{formatPrice(subtotal)}</dd>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <dt className="text-muted-foreground">Shipping</dt>
                      <dd className="font-medium text-foreground">{formatPrice(shipping)}</dd>
                    </div>
                    <div className="flex items-center justify-between border-t border-border pt-3 text-base">
                      <dt className="font-medium text-foreground">Total</dt>
                      <dd className="font-medium text-foreground">{formatPrice(total)}</dd>
                    </div>
                  </dl>

                  <div className="mt-6 space-y-3">
                    <Link
                      href="/cart"
                      onClick={() => onOpenChange(false)}
                      className="block w-full bg-primary px-8 py-4 text-center text-sm font-medium uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
                    >
                      View Cart
                    </Link>
                    <button
                      onClick={handleCheckout}
                      disabled={isLoading}
                      className="block w-full border border-border px-8 py-4 text-center text-sm font-medium uppercase tracking-wider text-foreground hover:bg-muted disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed"
                    >
                      {isLoading ? 'Processing...' : 'Checkout'}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
