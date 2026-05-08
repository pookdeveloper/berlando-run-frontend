import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Returns - Berlando Run',
  description: 'Return policy and instructions for Berlando Run products.',
}

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
            Returns & Exchanges
          </h1>
          <p className="mt-4 text-4xl font-light tracking-tight text-foreground lg:text-5xl">
            Easy returns, guaranteed fit
          </p>

          <div className="mt-16 space-y-12">
            <section>
              <h2 className="text-2xl font-light text-foreground">30-Day Return Policy</h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground/70">
                <p>
                  We want you to be completely satisfied with your purchase. If for any reason 
                  you're not happy with your order, you can return it within 30 days of delivery 
                  for a full refund.
                </p>
                <p>
                  Items must be unworn, unwashed, and in original condition with all tags attached.
                </p>
              </div>
            </section>

            <section className="border-t border-border pt-12">
              <h2 className="text-2xl font-light text-foreground">How to Return</h2>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
                    01. Initiate Return
                  </h3>
                  <p className="mt-2 text-lg text-foreground/70">
                    Contact us at{' '}
                    <a href="mailto:returns@berlando.run" className="underline">
                      returns@berlando.run
                    </a>{' '}
                    with your order number and reason for return. We'll send you a return label.
                  </p>
                </div>
                <div>
                  <h3 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
                    02. Pack Your Items
                  </h3>
                  <p className="mt-2 text-lg text-foreground/70">
                    Place items in original packaging (or any secure packaging). Include a note 
                    with your order number and email address.
                  </p>
                </div>
                <div>
                  <h3 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
                    03. Ship It Back
                  </h3>
                  <p className="mt-2 text-lg text-foreground/70">
                    Attach the return label we sent you and drop off at any authorized carrier location.
                  </p>
                </div>
                <div>
                  <h3 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
                    04. Get Your Refund
                  </h3>
                  <p className="mt-2 text-lg text-foreground/70">
                    Once we receive and inspect your return, we'll process your refund within 5-7 
                    business days to your original payment method.
                  </p>
                </div>
              </div>
            </section>

            <section className="border-t border-border pt-12">
              <h2 className="text-2xl font-light text-foreground">Exchanges</h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground/70">
                <p>
                  Need a different size or color? We're happy to exchange your item. Contact us at{' '}
                  <a href="mailto:returns@berlando.run" className="underline">
                    returns@berlando.run
                  </a>{' '}
                  and we'll arrange an exchange for you.
                </p>
                <p>
                  Exchanges are subject to availability. If your preferred item is out of stock, 
                  we'll process a refund instead.
                </p>
              </div>
            </section>

            <section className="border-t border-border pt-12">
              <h2 className="text-2xl font-light text-foreground">Return Shipping</h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground/70">
                <p>
                  <strong>Free Returns:</strong> Return shipping is free for all EU orders.
                </p>
                <p>
                  <strong>UK Orders:</strong> Return shipping costs €10, which will be deducted 
                  from your refund.
                </p>
              </div>
            </section>

            <section className="border-t border-border pt-12">
              <h2 className="text-2xl font-light text-foreground">Exceptions</h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground/70">
                <p>
                  The following items cannot be returned:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Items marked as final sale</li>
                  <li>Items that have been worn, washed, or altered</li>
                  <li>Items without original tags</li>
                  <li>Gift cards</li>
                </ul>
              </div>
            </section>

            <section className="border-t border-border pt-12">
              <h2 className="text-2xl font-light text-foreground">Questions?</h2>
              <div className="mt-6 text-lg text-foreground/70">
                <p>
                  If you have any questions about returns or exchanges, please contact our 
                  customer service team at{' '}
                  <a href="mailto:hello@berlando.run" className="underline">
                    hello@berlando.run
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
