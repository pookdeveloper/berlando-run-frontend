'use client'

import { Suspense, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { useCart } from '@/stores/cartStore'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const clearCart = useCart((state) => state.clearCart)

  useEffect(() => {
    if (sessionId) {
      clearCart()
    }
  }, [sessionId, clearCart])

  return (
    <div className="min-h-screen bg-stone">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <CheckCircle2 className="mx-auto h-16 w-16 text-olive" />
          <h1 className="mt-6 text-3xl font-light tracking-tight text-black sm:text-4xl">
            Order Confirmed
          </h1>
          <p className="mt-4 text-base text-black/60">
            Thank you for your order. You will receive an email confirmation shortly.
          </p>
          {sessionId && (
            <p className="mt-2 font-mono text-xs text-black/40">
              Order ID: {sessionId.substring(0, 24)}...
            </p>
          )}
        </div>

        <div className="mt-12 border-t border-black/10 pt-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium text-black">What happens next?</h2>
              <ul className="mt-4 space-y-3 text-sm text-black/80">
                <li className="flex gap-3">
                  <span className="font-mono text-black/60">1.</span>
                  <span>You will receive an order confirmation email with your order details</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-black/60">2.</span>
                  <span>Your order will be processed and prepared for shipping</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-black/60">3.</span>
                  <span>You will receive a shipping confirmation with tracking information</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-black/60">4.</span>
                  <span>Your order will arrive within 3-5 business days</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-black/10 pt-6">
              <h2 className="text-lg font-medium text-black">Need help?</h2>
              <p className="mt-2 text-sm text-black/80">
                If you have any questions about your order, please contact us at{' '}
                <a href="mailto:support@berlando.com" className="font-medium text-black underline">
                  support@berlando.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex gap-4 justify-center">
          <Link
            href="/products"
            className="bg-black px-8 py-4 text-sm font-medium uppercase tracking-wider text-white hover:bg-black/90"
          >
            Continue Shopping
          </Link>
          <Link
            href="/"
            className="border border-black px-8 py-4 text-sm font-medium uppercase tracking-wider text-black hover:bg-black/5"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-stone flex items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-black border-t-transparent mx-auto" />
          <p className="mt-4 text-sm text-black/60">Loading...</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  )
}
