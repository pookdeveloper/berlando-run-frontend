import { Metadata } from 'next'
import Link from 'next/link'
import { Trophy, TrendingUp, Mountain, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Challenges - Berlando Run',
  description: 'Join monthly running challenges. Distance, elevation, and segment challenges to push your limits.',
}

export default function ChallengesPage() {
  const currentChallenges = [
    {
      title: 'March Distance Challenge',
      goal: '100 km',
      type: 'Distance',
      period: 'March 1-31, 2026',
      participants: 247,
      prize: 'Berlando Technical Tee',
      icon: TrendingUp,
    },
    {
      title: 'Spring Elevation Challenge',
      goal: '5,000m+',
      type: 'Elevation',
      period: 'March 15 - April 15, 2026',
      participants: 189,
      prize: 'Custom Trail Map',
      icon: Mountain,
    },
    {
      title: 'Trail Consistency',
      goal: '12 runs',
      type: 'Frequency',
      period: 'March 1-31, 2026',
      participants: 312,
      prize: 'Berlando Run Cap',
      icon: Target,
    },
  ]

  const pastChallenges = [
    {
      title: 'February Distance Challenge',
      winners: 89,
      completed: 'February 28, 2026',
    },
    {
      title: 'Winter Elevation Challenge',
      winners: 67,
      completed: 'February 15, 2026',
    },
    {
      title: 'New Year Kickstart',
      winners: 156,
      completed: 'January 31, 2026',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Link
            href="/community"
            className="inline-flex items-center font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Community
          </Link>
          <h1 className="mt-8 font-mono text-sm uppercase tracking-wider text-muted-foreground">
            Challenges
          </h1>
          <p className="mt-4 text-4xl font-light tracking-tight text-foreground lg:text-5xl">
            Push your limits
          </p>
          <p className="mt-6 max-w-2xl text-lg text-foreground/70">
            Monthly challenges to motivate and inspire. Compete with the community, track your progress, and earn rewards.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div>
          <h2 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
            Active Challenges
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {currentChallenges.map((challenge) => {
              const Icon = challenge.icon
              return (
                <div
                  key={challenge.title}
                  className="border border-border bg-card transition-all hover:border-foreground/20"
                >
                  <div className="border-b border-border bg-primary px-6 py-8 text-center">
                    <Icon className="mx-auto h-12 w-12 text-white" />
                  </div>

                  <div className="p-6">
                    <div className="text-center">
                      <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                        {challenge.type}
                      </span>
                      <h3 className="mt-2 text-xl font-light text-card-foreground">{challenge.title}</h3>
                    </div>

                    <div className="mt-6 space-y-4 border-t border-border pt-6">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Goal</span>
                        <span className="text-lg font-medium text-card-foreground">{challenge.goal}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Period</span>
                        <span className="text-sm text-card-foreground/70">{challenge.period}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Participants</span>
                        <span className="text-sm text-card-foreground/70">{challenge.participants}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Reward</span>
                        <span className="text-sm text-card-foreground/70">{challenge.prize}</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Link
                        href="/contact"
                        className="inline-flex w-full items-center justify-center border border-primary bg-primary px-6 py-3 font-mono text-xs uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90"
                      >
                        Join challenge
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-24">
          <h2 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
            Completed Challenges
          </h2>
          <div className="mt-8 space-y-4">
            {pastChallenges.map((challenge) => (
              <div
                key={challenge.title}
                className="flex items-center justify-between border border-border bg-card px-6 py-4"
              >
                <div className="flex items-center gap-4">
                  <Trophy className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <h3 className="font-light text-card-foreground">{challenge.title}</h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      Completed {challenge.completed}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-card-foreground/70">{challenge.winners} winners</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 border-t border-border pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-light text-foreground">
              How it works
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-primary mx-auto">
                  <span className="font-mono text-lg text-white">1</span>
                </div>
                <h3 className="mt-4 font-light text-foreground">Join</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Sign up for any active challenge
                </p>
              </div>

              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-primary mx-auto">
                  <span className="font-mono text-lg text-white">2</span>
                </div>
                <h3 className="mt-4 font-light text-foreground">Track</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Log your runs throughout the month
                </p>
              </div>

              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-primary mx-auto">
                  <span className="font-mono text-lg text-white">3</span>
                </div>
                <h3 className="mt-4 font-light text-foreground">Achieve</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Complete goals and earn rewards
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-border px-8 py-3 font-mono text-xs uppercase tracking-wider text-foreground transition-all hover:bg-muted"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
