import Link from 'next/link'
import { MapPin, Calendar, BookOpen } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-8xl font-light tracking-tight text-black">
            Run free.
            <br />
            Run far.
          </h1>
          <p className="text-xl text-black/70 max-w-2xl mx-auto">
            Premium trail running apparel designed for freedom of movement and exploration.
          </p>
          <div className="pt-8">
            <Link
              href="/products"
              className="inline-block rounded-none border border-black bg-black px-8 py-4 font-mono text-xs uppercase tracking-wider text-white transition-all hover:bg-transparent hover:text-black"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-black/10">
                <MapPin className="h-8 w-8 text-black/60" />
              </div>
              <h2 className="mt-6 text-xl font-light text-black">Run Clubs</h2>
              <p className="mt-4 text-black/70">
                Join our weekly group runs across Europe
              </p>
              <Link
                href="/community"
                className="mt-4 inline-block font-mono text-xs uppercase tracking-wider text-black/60 hover:text-black"
              >
                Learn More →
              </Link>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-black/10">
                <Calendar className="h-8 w-8 text-black/60" />
              </div>
              <h2 className="mt-6 text-xl font-light text-black">Events</h2>
              <p className="mt-4 text-black/70">
                Sunrise runs, trail weekends, urban exploration
              </p>
              <Link
                href="/community"
                className="mt-4 inline-block font-mono text-xs uppercase tracking-wider text-black/60 hover:text-black"
              >
                View Events →
              </Link>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-black/10">
                <BookOpen className="h-8 w-8 text-black/60" />
              </div>
              <h2 className="mt-6 text-xl font-light text-black">Journal</h2>
              <p className="mt-4 text-black/70">
                Stories, routes, and philosophy from the trail
              </p>
              <Link
                href="/journal"
                className="mt-4 inline-block font-mono text-xs uppercase tracking-wider text-black/60 hover:text-black"
              >
                Read Stories →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs uppercase tracking-wider text-black/60">
              Our Philosophy
            </p>
            <h2 className="mt-4 text-4xl font-light tracking-tight text-black lg:text-5xl">
              Maximum freedom, zero compromise
            </h2>
            <p className="mt-6 text-lg text-black/70">
              Every piece is designed with three principles: remove unnecessary elements, 
              maximize freedom of movement, use premium performance materials.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-block font-mono text-xs uppercase tracking-wider text-black/60 hover:text-black"
              >
                Our Story →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
