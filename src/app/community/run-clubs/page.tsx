import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Run Clubs - Berlando Run',
  description: 'Join weekly group runs across Europe. Madrid, Barcelona, Paris, Berlin, and London.',
}

export default function RunClubsPage() {
  const clubs = [
    {
      city: 'Madrid',
      location: 'Casa de Campo',
      day: 'Wednesdays',
      time: '19:00',
      pace: 'All paces',
      members: '45+',
    },
    {
      city: 'Barcelona',
      location: 'Parc de Collserola',
      day: 'Thursdays',
      time: '18:30',
      pace: 'All paces',
      members: '38+',
    },
    {
      city: 'Paris',
      location: 'Bois de Vincennes',
      day: 'Tuesdays',
      time: '19:00',
      pace: 'All paces',
      members: '52+',
    },
    {
      city: 'Berlin',
      location: 'Grunewald Forest',
      day: 'Wednesdays',
      time: '18:00',
      pace: 'All paces',
      members: '41+',
    },
    {
      city: 'London',
      location: 'Hampstead Heath',
      day: 'Thursdays',
      time: '18:30',
      pace: 'All paces',
      members: '67+',
    },
  ]

  return (
    <div className="min-h-screen bg-stone">
      <div className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Link
            href="/community"
            className="inline-flex items-center font-mono text-xs uppercase tracking-wider text-black/40 hover:text-black/60 transition-colors"
          >
            ← Back to Community
          </Link>
          <h1 className="mt-8 font-mono text-sm uppercase tracking-wider text-black/60">
            Run Clubs
          </h1>
          <p className="mt-4 text-4xl font-light tracking-tight text-black lg:text-5xl">
            Run together, every week
          </p>
          <p className="mt-6 max-w-2xl text-lg text-black/70">
            Join our community run clubs across Europe. All paces welcome, from beginners to experienced trail runners.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {clubs.map((club) => (
            <div
              key={club.city}
              className="border border-black/10 bg-white p-8 transition-all hover:border-black/20"
            >
              <h3 className="text-2xl font-light text-black">{club.city}</h3>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-black/40 mt-0.5" />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-black/40">Location</p>
                    <p className="mt-1 text-black/70">{club.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-black/40 mt-0.5" />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-black/40">Schedule</p>
                    <p className="mt-1 text-black/70">{club.day} at {club.time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-black/40 mt-0.5" />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-black/40">Community</p>
                    <p className="mt-1 text-black/70">{club.members} members · {club.pace}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center border border-black bg-black px-6 py-3 font-mono text-xs uppercase tracking-wider text-white transition-all hover:bg-transparent hover:text-black"
                >
                  Join this club
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 border-t border-black/10 pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-light text-black">
              Start your own club
            </h2>
            <p className="mt-6 text-lg text-black/70">
              Want to organize a run club in your city? We support community-led initiatives with gear, resources, and guidance.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-black px-8 py-3 font-mono text-xs uppercase tracking-wider text-black transition-all hover:bg-black hover:text-white"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
