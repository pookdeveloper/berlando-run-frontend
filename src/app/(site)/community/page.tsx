import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Calendar, Trophy } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Community - Berlando Run',
  description: 'Join our run clubs, events, and challenges across Europe.',
}

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
            Community
          </h1>
          <p className="mt-4 text-4xl font-light tracking-tight text-foreground lg:text-5xl">
            Run together
          </p>
          <p className="mt-6 max-w-2xl text-lg text-foreground/70">
            Connect with trail runners across Europe. Join run clubs, participate in events, 
            and challenge yourself with our monthly challenges.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="group" id="run-clubs">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border">
              <MapPin className="h-8 w-8 text-muted-foreground" />
            </div>
            <h2 className="mt-6 text-2xl font-light text-foreground">Run Clubs</h2>
            <p className="mt-4 text-lg text-foreground/70">
              Join weekly group runs in Madrid, Barcelona, Paris, Berlin, and London. All paces welcome.
            </p>
            <div className="mt-6">
              <Link
                href="/community/run-clubs"
                className="inline-flex items-center font-mono text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground"
              >
                Explore Run Clubs →
              </Link>
            </div>
          </div>

          <div className="group" id="events">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border">
              <Calendar className="h-8 w-8 text-muted-foreground" />
            </div>
            <h2 className="mt-6 text-2xl font-light text-foreground">Events</h2>
            <p className="mt-4 text-lg text-foreground/70">
              Sunrise runs, trail weekends, and urban exploration. Discover our upcoming events.
            </p>
            <div className="mt-6">
              <Link
                href="/community/events"
                className="inline-flex items-center font-mono text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground"
              >
                View Events →
              </Link>
            </div>
          </div>

          <div className="group" id="challenges">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border">
              <Trophy className="h-8 w-8 text-muted-foreground" />
            </div>
            <h2 className="mt-6 text-2xl font-light text-foreground">Challenges</h2>
            <p className="mt-4 text-lg text-foreground/70">
              Monthly distance, elevation, and segment challenges. Push your limits with the community.
            </p>
            <div className="mt-6">
              <Link
                href="/community/challenges"
                className="inline-flex items-center font-mono text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground"
              >
                Join Challenges →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-border pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-light text-foreground">
              Run with us
            </h2>
            <p className="mt-6 text-lg text-foreground/70">
              Our community is built on shared passion for trail running, respect for nature, 
              and the belief that running is better together.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-none border border-primary bg-primary px-8 py-3 font-mono text-xs uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90"
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
