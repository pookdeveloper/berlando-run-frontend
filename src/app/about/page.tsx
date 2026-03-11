import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About - Berlando Run',
  description: 'Our story, philosophy, and commitment to freedom in trail running.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-mono text-sm uppercase tracking-wider text-black/60">
            About Berlando
          </h1>
          <p className="mt-4 text-5xl font-light tracking-tight text-black lg:text-6xl">
            Run free. Run far.
          </p>

          <div className="mt-16 space-y-12">
            <section>
              <h2 className="text-2xl font-light text-black">Our Story</h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-black/70">
                <p>
                  Berlando was born from a simple idea: running should feel like freedom. Not restriction, 
                  not discomfort, not compromise. Pure freedom of movement.
                </p>
                <p>
                  We started in the mountains of Europe, where trails demand both technical performance 
                  and absolute reliability. Where every piece of gear matters, and excess means burden.
                </p>
                <p>
                  Our approach is different. We strip away everything unnecessary. We obsess over materials. 
                  We test in the harshest conditions. And we refuse to launch anything until it embodies 
                  our core principle: maximum freedom, zero compromise.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-12">
              <h2 className="text-2xl font-light text-black">Our Philosophy</h2>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="font-mono text-sm uppercase tracking-wider text-black/60">
                    01. Remove Unnecessary Elements
                  </h3>
                  <p className="mt-2 text-lg text-black/70">
                    Every seam, every pocket, every detail must justify its existence. If it doesn't 
                    enhance performance or freedom of movement, it doesn't belong.
                  </p>
                </div>
                <div>
                  <h3 className="font-mono text-sm uppercase tracking-wider text-black/60">
                    02. Maximize Freedom of Movement
                  </h3>
                  <p className="mt-2 text-lg text-black/70">
                    Our patterns and materials are engineered to move with you, not against you. 
                    Stretch where you need it, support where it matters.
                  </p>
                </div>
                <div>
                  <h3 className="font-mono text-sm uppercase tracking-wider text-black/60">
                    03. Use Premium Performance Materials
                  </h3>
                  <p className="mt-2 text-lg text-black/70">
                    We source the finest technical fabrics from specialized mills. Materials that 
                    breathe, protect, and endure without adding weight or bulk.
                  </p>
                </div>
              </div>
            </section>

            <section className="border-t border-black/10 pt-12">
              <h2 className="text-2xl font-light text-black">Our Commitment</h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-black/70">
                <p>
                  We believe in building gear that lasts. In supporting the trail running community. 
                  In transparency about our materials and manufacturing. In continuous improvement 
                  based on real feedback from real runners.
                </p>
                <p>
                  We're not chasing trends. We're building classics that perform today and endure tomorrow.
                </p>
              </div>
            </section>

            <section className="border-t border-black/10 pt-12">
              <h2 className="text-2xl font-light text-black">Community</h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-black/70">
                <p>
                  Berlando is more than apparel. We organize run clubs across Europe. We host events 
                  that bring runners together. We share stories and routes through our journal.
                </p>
                <p>
                  Because running, at its core, is about connection. To the trail, to yourself, 
                  to others who understand why we lace up and head out, no matter the weather.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
