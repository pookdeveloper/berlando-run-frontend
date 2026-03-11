'use client'

import Link from 'next/link'
import { XCircle } from 'lucide-react'

export default function CheckoutCancelPage() {
  return (
    <div className="min-h-screen bg-stone">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <XCircle className="mx-auto h-16 w-16 text-black/40" />
          <h1 className="mt-6 text-3xl font-light tracking-tight text-black sm:text-4xl">
            Checkout Cancelled
          </h1>
          <p className="mt-4 text-base text-black/60">
            Your checkout was cancelled. Your items are still in your cart.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/cart"
            className="bg-black px-8 py-4 text-center text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-black/90"
          >
            Return to Cart
          </Link>
          <Link
            href="/products"
            className="border border-black px-8 py-4 text-center text-sm font-medium uppercase tracking-wider text-black transition-colors hover:bg-black/5"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}
