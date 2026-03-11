import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, MapPin, Users, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Events - Berlando Run',
  description: 'Join our trail running events across Europe. Sunrise runs, trail weekends, and urban exploration.',
}

export default function EventsPage() {
  const events = [
    {
      title: 'Sunrise Trail Run',
      location: 'Montserrat, Barcelona',
      date: 'April 12, 2026',
      time: '06:00',
      distance: '15 km',
      elevation: '800m+',
      participants: '25 spots',
      type: 'Trail Run',
    },
    {
      title: 'Urban Exploration',
      location: 'Paris Rooftops',
      date: 'April 19, 2026',
      time: '18:00',
      distance: '12 km',
      elevation: '200m+',
      participants: '30 spots',
      type: 'City Run',
    },
    {
      title: 'Weekend Trail Camp',
      location: 'Black Forest, Germany',
      date: 'May 3-5, 2026',
      time: 'All day',
      distance: '50 km total',
      elevation: '2000m+',
      participants: '20 spots',
      type: 'Multi-day',
    },
    {
      title: 'Night Trail Adventure',
      location: 'Retiro Park, Madrid',
      date: 'May 10, 2026',
      time: '21:00',
      distance: '10 km',
      elevation: '100m+',
      participants: '40 spots',
      type: 'Night Run',
    },
    {
      title: 'Coastal Trail Run',
      location: 'Costa Brava',
      date: 'May 17, 2026',
      time: '08:00',
      distance: '22 km',
      elevation: '600m+',
      participants: '35 spots',
      type: 'Trail Run',
    },
    {
      title: 'Alpine Trail Weekend',
      location: 'Swiss Alps',
      date: 'June 7-9, 2026',
      time: 'All day',
      distance: '65 km total',
      elevation: '3500m+',
      participants: '15 spots',
      type: 'Multi-day',
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
            Events
          </h1>
          <p className="mt-4 text-4xl font-light tracking-tight text-black lg:text-5xl">
            Run, explore, connect
          </p>
          <p className="mt-6 max-w-2xl text-lg text-black/70">
            From sunrise trail runs to multi-day adventures. Join our community events and discover new trails across Europe.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.title}
              className="border border-black/10 bg-white transition-all hover:border-black/20"
            >
              <div className="border-b border-black/10 bg-black/5 px-6 py-4">
                <span className="font-mono text-xs uppercase tracking-wider text-black/60">
                  {event.type}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-light text-black">{event.title}</h3>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-black/40 mt-0.5" />
                    <p className="text-sm text-black/70">{event.date}</p>
                  </div>

                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-black/40 mt-0.5" />
                    <p className="text-sm text-black/70">{event.time}</p>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-black/40 mt-0.5" />
                    <p className="text-sm text-black/70">{event.location}</p>
                  </div>

                  <div className="flex items-start gap-2">
                    <Users className="h-4 w-4 text-black/40 mt-0.5" />
                    <p className="text-sm text-black/70">{event.participants}</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-4 border-t border-black/10 pt-6">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-black/40">Distance</p>
                    <p className="mt-1 text-sm font-medium text-black">{event.distance}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-black/40">Elevation</p>
                    <p className="mt-1 text-sm font-medium text-black">{event.elevation}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center border border-black bg-black px-6 py-3 font-mono text-xs uppercase tracking-wider text-white transition-all hover:bg-transparent hover:text-black"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 border-t border-black/10 pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-light text-black">
              Private events
            </h2>
            <p className="mt-6 text-lg text-black/70">
              Looking to organize a custom trail running event for your team or group? We can help plan and host private experiences.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-black px-8 py-3 font-mono text-xs uppercase tracking-wider text-black transition-all hover:bg-black hover:text-white"
              >
                Inquire about private events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
