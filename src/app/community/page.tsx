import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Calendar, Trophy } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Community - Berlando Run',
  description: 'Join our run clubs, events, and challenges across Europe.',
}

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-stone">
      <div className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="font-mono text-sm uppercase tracking-wider text-black/60">
            Community
          </h1>
          <p className="mt-4 text-4xl font-light tracking-tight text-black lg:text-5xl">
            Run together
          </p>
          <p className="mt-6 max-w-2xl text-lg text-black/70">
            Connect with trail runners across Europe. Join run clubs, participate in events, 
            and challenge yourself with our monthly challenges.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="group" id="run-clubs">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-black/10">
              <MapPin className="h-8 w-8 text-black/60" />
            </div>
            <h2 className="mt-6 text-2xl font-light text-black">Run Clubs</h2>
            <p className="mt-4 text-lg text-black/70">
              Join weekly group runs in Madrid, Barcelona, Paris, Berlin, and London. All paces welcome.
            </p>
            <div className="mt-6">
              <Link
                href="/community/run-clubs"
                className="inline-flex items-center font-mono text-sm uppercase tracking-wider text-black/60 hover:text-black"
              >
                Explore Run Clubs →
              </Link>
            </div>
          </div>

          <div className="group" id="events">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-black/10">
              <Calendar className="h-8 w-8 text-black/60" />
            </div>
            <h2 className="mt-6 text-2xl font-light text-black">Events</h2>
            <p className="mt-4 text-lg text-black/70">
              Sunrise runs, trail weekends, and urban exploration. Discover our upcoming events.
            </p>
            <div className="mt-6">
              <Link
                href="/community/events"
                className="inline-flex items-center font-mono text-sm uppercase tracking-wider text-black/60 hover:text-black"
              >
                View Events →
              </Link>
            </div>
          </div>

          <div className="group" id="challenges">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-black/10">
              <Trophy className="h-8 w-8 text-black/60" />
            </div>
            <h2 className="mt-6 text-2xl font-light text-black">Challenges</h2>
            <p className="mt-4 text-lg text-black/70">
              Monthly distance, elevation, and segment challenges. Push your limits with the community.
            </p>
            <div className="mt-6">
              <Link
                href="/community/challenges"
                className="inline-flex items-center font-mono text-sm uppercase tracking-wider text-black/60 hover:text-black"
              >
                Join Challenges →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-black/10 pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-light text-black">
              Run with us
            </h2>
            <p className="mt-6 text-lg text-black/70">
              Our community is built on shared passion for trail running, respect for nature, 
              and the belief that running is better together.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-none border border-black bg-black px-8 py-3 font-mono text-xs uppercase tracking-wider text-white transition-all hover:bg-transparent hover:text-black"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
