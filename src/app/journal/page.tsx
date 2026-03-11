import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Mountain, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Journal - Berlando Run',
  description: 'Stories, routes, and philosophy from the trail.',
}

export default function JournalPage() {
  return (
    <div className="min-h-screen bg-stone">
      <div className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="font-mono text-sm uppercase tracking-wider text-black/60">
            Journal
          </h1>
          <p className="mt-4 text-4xl font-light tracking-tight text-black lg:text-5xl">
            Stories from the trail
          </p>
          <p className="mt-6 max-w-2xl text-lg text-black/70">
            Essays on running philosophy, trail guides, athlete profiles, and the gear that gets us there.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="group border border-black/10 p-8 transition-colors hover:border-black/30">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10">
              <BookOpen className="h-6 w-6 text-black/60" />
            </div>
            <h2 className="mt-6 text-xl font-light text-black">Philosophy</h2>
            <p className="mt-4 text-black/70">
              Why we run. What freedom means. The relationship between movement and clarity.
            </p>
            <div className="mt-6">
              <span className="font-mono text-xs uppercase tracking-wider text-black/40">
                Coming Soon
              </span>
            </div>
          </div>

          <div className="group border border-black/10 p-8 transition-colors hover:border-black/30">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10">
              <Mountain className="h-6 w-6 text-black/60" />
            </div>
            <h2 className="mt-6 text-xl font-light text-black">Trail Guides</h2>
            <p className="mt-4 text-black/70">
              Our favorite routes across Europe. Technical details, elevation profiles, and what to expect.
            </p>
            <div className="mt-6">
              <span className="font-mono text-xs uppercase tracking-wider text-black/40">
                Coming Soon
              </span>
            </div>
          </div>

          <div className="group border border-black/10 p-8 transition-colors hover:border-black/30">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10">
              <Users className="h-6 w-6 text-black/60" />
            </div>
            <h2 className="mt-6 text-xl font-light text-black">Athlete Stories</h2>
            <p className="mt-4 text-black/70">
              Profiles of runners in our community. Their stories, training, and what drives them.
            </p>
            <div className="mt-6">
              <span className="font-mono text-xs uppercase tracking-wider text-black/40">
                Coming Soon
              </span>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-black/10 pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-light text-black">
              Subscribe to our newsletter
            </h2>
            <p className="mt-6 text-lg text-black/70">
              Get new stories, route recommendations, and community updates delivered to your inbox.
            </p>
            <form className="mt-8 flex gap-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 border-b border-black/20 bg-transparent px-0 py-2 text-black placeholder-black/40 focus:border-black focus:outline-none focus:ring-0"
              />
              <button
                type="submit"
                className="rounded-none border border-black bg-black px-8 py-2 font-mono text-xs uppercase tracking-wider text-white transition-all hover:bg-transparent hover:text-black"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
