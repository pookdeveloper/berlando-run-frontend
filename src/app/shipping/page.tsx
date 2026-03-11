import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shipping - Berlando Run',
  description: 'Shipping information, delivery times, and international options.',
}

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-stone">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-mono text-sm uppercase tracking-wider text-black/60">
            Shipping Information
          </h1>
          <p className="mt-4 text-4xl font-light tracking-tight text-black lg:text-5xl">
            Fast, reliable delivery
          </p>

          <div className="mt-16 space-y-12">
            <section>
              <h2 className="text-2xl font-light text-black">Shipping Options</h2>
              <div className="mt-6 space-y-6">
                <div className="border-b border-black/10 pb-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-mono text-sm uppercase tracking-wider text-black/60">
                        Standard Shipping
                      </h3>
                      <p className="mt-2 text-lg text-black/70">
                        3-5 business days
                      </p>
                    </div>
                    <p className="text-xl font-light text-black">€10</p>
                  </div>
                </div>
                <div className="border-b border-black/10 pb-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-mono text-sm uppercase tracking-wider text-black/60">
                        Express Shipping
                      </h3>
                      <p className="mt-2 text-lg text-black/70">
                        1-2 business days
                      </p>
                    </div>
                    <p className="text-xl font-light text-black">€20</p>
                  </div>
                </div>
                <div className="pb-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-mono text-sm uppercase tracking-wider text-black/60">
                        Free Shipping
                      </h3>
                      <p className="mt-2 text-lg text-black/70">
                        On orders over €150
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="border-t border-black/10 pt-12">
              <h2 className="text-2xl font-light text-black">Shipping Countries</h2>
              <div className="mt-6 text-lg text-black/70">
                <p>
                  We currently ship to the following European countries:
                </p>
                <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  <li>Spain (ES)</li>
                  <li>France (FR)</li>
                  <li>Germany (DE)</li>
                  <li>United Kingdom (GB)</li>
                  <li>Portugal (PT)</li>
                  <li>Italy (IT)</li>
                  <li>Netherlands (NL)</li>
                  <li>Belgium (BE)</li>
                </ul>
                <p className="mt-6">
                  Expanding to more countries soon. Sign up for our newsletter to be notified 
                  when we ship to your location.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-12">
              <h2 className="text-2xl font-light text-black">Order Processing</h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-black/70">
                <p>
                  Orders are processed Monday through Friday, excluding holidays. Orders placed 
                  before 2:00 PM CET will be processed the same day.
                </p>
                <p>
                  You will receive a shipping confirmation email with tracking information once 
                  your order has been dispatched.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-12">
              <h2 className="text-2xl font-light text-black">Tracking Your Order</h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-black/70">
                <p>
                  Once your order ships, you'll receive a tracking number via email. Use this 
                  number to track your package through our carrier's website.
                </p>
                <p>
                  If you have questions about your shipment, contact us at{' '}
                  <a href="mailto:hello@berlando.run" className="underline">
                    hello@berlando.run
                  </a>
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-12">
              <h2 className="text-2xl font-light text-black">Customs & Duties</h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-black/70">
                <p>
                  For shipments within the EU, no additional customs fees or import duties apply.
                </p>
                <p>
                  For UK orders, customs duties and VAT may apply depending on the order value. 
                  These fees are the responsibility of the customer and are collected by the carrier 
                  at delivery.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
