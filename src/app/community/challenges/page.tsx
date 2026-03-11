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
            Challenges
          </h1>
          <p className="mt-4 text-4xl font-light tracking-tight text-black lg:text-5xl">
            Push your limits
          </p>
          <p className="mt-6 max-w-2xl text-lg text-black/70">
            Monthly challenges to motivate and inspire. Compete with the community, track your progress, and earn rewards.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div>
          <h2 className="font-mono text-sm uppercase tracking-wider text-black/60">
            Active Challenges
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {currentChallenges.map((challenge) => {
              const Icon = challenge.icon
              return (
                <div
                  key={challenge.title}
                  className="border border-black/10 bg-white transition-all hover:border-black/20"
                >
                  <div className="border-b border-black/10 bg-black px-6 py-8 text-center">
                    <Icon className="mx-auto h-12 w-12 text-white" />
                  </div>

                  <div className="p-6">
                    <div className="text-center">
                      <span className="font-mono text-xs uppercase tracking-wider text-black/40">
                        {challenge.type}
                      </span>
                      <h3 className="mt-2 text-xl font-light text-black">{challenge.title}</h3>
                    </div>

                    <div className="mt-6 space-y-4 border-t border-black/10 pt-6">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs uppercase tracking-wider text-black/40">Goal</span>
                        <span className="text-lg font-medium text-black">{challenge.goal}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs uppercase tracking-wider text-black/40">Period</span>
                        <span className="text-sm text-black/70">{challenge.period}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs uppercase tracking-wider text-black/40">Participants</span>
                        <span className="text-sm text-black/70">{challenge.participants}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs uppercase tracking-wider text-black/40">Reward</span>
                        <span className="text-sm text-black/70">{challenge.prize}</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Link
                        href="/contact"
                        className="inline-flex w-full items-center justify-center border border-black bg-black px-6 py-3 font-mono text-xs uppercase tracking-wider text-white transition-all hover:bg-transparent hover:text-black"
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
          <h2 className="font-mono text-sm uppercase tracking-wider text-black/60">
            Completed Challenges
          </h2>
          <div className="mt-8 space-y-4">
            {pastChallenges.map((challenge) => (
              <div
                key={challenge.title}
                className="flex items-center justify-between border border-black/10 bg-white px-6 py-4"
              >
                <div className="flex items-center gap-4">
                  <Trophy className="h-5 w-5 text-black/40" />
                  <div>
                    <h3 className="font-light text-black">{challenge.title}</h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wider text-black/40">
                      Completed {challenge.completed}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-black/70">{challenge.winners} winners</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 border-t border-black/10 pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-light text-black">
              How it works
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-black mx-auto">
                  <span className="font-mono text-lg text-white">1</span>
                </div>
                <h3 className="mt-4 font-light text-black">Join</h3>
                <p className="mt-2 text-sm text-black/60">
                  Sign up for any active challenge
                </p>
              </div>

              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-black mx-auto">
                  <span className="font-mono text-lg text-white">2</span>
                </div>
                <h3 className="mt-4 font-light text-black">Track</h3>
                <p className="mt-2 text-sm text-black/60">
                  Log your runs throughout the month
                </p>
              </div>

              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-black mx-auto">
                  <span className="font-mono text-lg text-white">3</span>
                </div>
                <h3 className="mt-4 font-light text-black">Achieve</h3>
                <p className="mt-2 text-sm text-black/60">
                  Complete goals and earn rewards
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-black px-8 py-3 font-mono text-xs uppercase tracking-wider text-black transition-all hover:bg-black hover:text-white"
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
