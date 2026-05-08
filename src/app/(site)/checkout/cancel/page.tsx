'use client'

import Link from 'next/link'
import { XCircle } from 'lucide-react'

export default function CheckoutCancelPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <XCircle className="mx-auto h-16 w-16 text-muted-foreground" />
          <h1 className="mt-6 text-3xl font-light tracking-tight text-foreground sm:text-4xl">
            Checkout Cancelled
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            Your checkout was cancelled. Your items are still in your cart.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/cart"
            className="bg-primary px-8 py-4 text-center text-sm font-medium uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Return to Cart
          </Link>
          <Link
            href="/products"
            className="border border-border px-8 py-4 text-center text-sm font-medium uppercase tracking-wider text-foreground transition-colors hover:bg-muted"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}
