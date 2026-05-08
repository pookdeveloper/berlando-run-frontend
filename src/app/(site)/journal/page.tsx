import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Mountain, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Journal - Berlando Run',
  description: 'Stories, routes, and philosophy from the trail.',
}

export default function JournalPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
            Journal
          </h1>
          <p className="mt-4 text-4xl font-light tracking-tight text-foreground lg:text-5xl">
            Stories from the trail
          </p>
          <p className="mt-6 max-w-2xl text-lg text-foreground/70">
            Essays on running philosophy, trail guides, athlete profiles, and the gear that gets us there.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="group border border-border p-8 transition-colors hover:border-foreground/30">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border">
              <BookOpen className="h-6 w-6 text-muted-foreground" />
            </div>
            <h2 className="mt-6 text-xl font-light text-foreground">Philosophy</h2>
            <p className="mt-4 text-foreground/70">
              Why we run. What freedom means. The relationship between movement and clarity.
            </p>
            <div className="mt-6">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Coming Soon
              </span>
            </div>
          </div>

          <div className="group border border-border p-8 transition-colors hover:border-foreground/30">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border">
              <Mountain className="h-6 w-6 text-muted-foreground" />
            </div>
            <h2 className="mt-6 text-xl font-light text-foreground">Trail Guides</h2>
            <p className="mt-4 text-foreground/70">
              Our favorite routes across Europe. Technical details, elevation profiles, and what to expect.
            </p>
            <div className="mt-6">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Coming Soon
              </span>
            </div>
          </div>

          <div className="group border border-border p-8 transition-colors hover:border-foreground/30">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border">
              <Users className="h-6 w-6 text-muted-foreground" />
            </div>
            <h2 className="mt-6 text-xl font-light text-foreground">Athlete Stories</h2>
            <p className="mt-4 text-foreground/70">
              Profiles of runners in our community. Their stories, training, and what drives them.
            </p>
            <div className="mt-6">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Coming Soon
              </span>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-border pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-light text-foreground">
              Subscribe to our newsletter
            </h2>
            <p className="mt-6 text-lg text-foreground/70">
              Get new stories, route recommendations, and community updates delivered to your inbox.
            </p>
            <form className="mt-8 flex gap-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 border-b border-border bg-transparent px-0 py-2 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-0"
              />
              <button
                type="submit"
                className="rounded-none border border-primary bg-primary px-8 py-2 font-mono text-xs uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90"
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
