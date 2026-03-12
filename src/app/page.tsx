import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Users, TrendingUp, MapPin, Award, Target, Zap } from 'lucide-react'

const ParallaxHero = dynamic(
  () => import('@/components/hero/ParallaxHero').then(mod => ({ default: mod.ParallaxHero }))
)

const ParallaxHeroClassic = dynamic(
  () => import('@/components/hero/ParallaxHeroClassic').then(mod => ({ default: mod.ParallaxHeroClassic }))
)

interface HomePageProps {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const resolvedParams = (await searchParams) ?? {}
  const heroParam = resolvedParams.hero
  const heroVariant = Array.isArray(heroParam) ? heroParam[0] : heroParam
  const useClassicHero = heroVariant === 'classic'

  return (
    <>
      {useClassicHero ? <ParallaxHeroClassic /> : <ParallaxHero />}
      
      <div className="min-h-screen bg-stone">
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <p className="font-mono text-xs uppercase tracking-wider text-black/60">
            Europe's Fastest Growing Trail Running Community
          </p>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-black leading-tight">
            Where brands meet
            <br />
            trail running culture
          </h1>
          <p className="text-xl md:text-2xl text-black/70 max-w-3xl mx-auto leading-relaxed">
            Connect with 15,000+ engaged trail runners across 5 European cities.
            Build authentic brand partnerships through community-driven events and content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/contact"
              className="inline-block rounded-none border border-black bg-black px-10 py-5 font-mono text-xs uppercase tracking-wider text-white transition-all hover:bg-transparent hover:text-black"
            >
              Partner With Us
            </Link>
            <Link
              href="/community"
              className="inline-block rounded-none border border-black/20 bg-transparent px-10 py-5 font-mono text-xs uppercase tracking-wider text-black transition-all hover:border-black"
            >
              Explore Community
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="font-mono text-xs uppercase tracking-wider text-black/60">
              Community Impact
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-tight text-black">
              Reach that matters
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-4 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-black">15K+</div>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-black/60">Active Members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-black">5</div>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-black/60">Cities</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-black">120+</div>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-black/60">Events/Year</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-black">85%</div>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-black/60">Engagement Rate</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-mono text-xs uppercase tracking-wider text-black/60">
                Why Partner With Us
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-tight text-black">
                Authentic connections, real results
              </h2>
            </div>
            <div className="grid gap-10 md:grid-cols-3">
              <div className="bg-white border border-black/10 p-8">
                <div className="flex h-12 w-12 items-center justify-center border border-black/10">
                  <Users className="h-6 w-6 text-black" />
                </div>
                <h3 className="mt-6 text-xl font-light text-black">Engaged Community</h3>
                <p className="mt-4 text-black/70 leading-relaxed">
                  Our members don't just run—they live the trail running lifestyle. 
                  Average engagement rates 3x higher than industry standard.
                </p>
              </div>

              <div className="bg-white border border-black/10 p-8">
                <div className="flex h-12 w-12 items-center justify-center border border-black/10">
                  <Target className="h-6 w-6 text-black" />
                </div>
                <h3 className="mt-6 text-xl font-light text-black">Premium Audience</h3>
                <p className="mt-4 text-black/70 leading-relaxed">
                  65% of our community are decision-makers with high purchasing power. 
                  Perfect for premium outdoor and performance brands.
                </p>
              </div>

              <div className="bg-white border border-black/10 p-8">
                <div className="flex h-12 w-12 items-center justify-center border border-black/10">
                  <TrendingUp className="h-6 w-6 text-black" />
                </div>
                <h3 className="mt-6 text-xl font-light text-black">Proven Growth</h3>
                <p className="mt-4 text-black/70 leading-relaxed">
                  300% year-over-year growth. Expanding to 10 cities in 2026. 
                  Be part of Europe's fastest-growing trail running movement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-mono text-xs uppercase tracking-wider text-black/60">
                Partnership Opportunities
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-tight text-black">
                How we work together
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="border border-black/10 p-8 transition-all hover:border-black/30">
                <MapPin className="h-8 w-8 text-black/60" />
                <h3 className="mt-4 text-lg font-medium text-black">Event Sponsorship</h3>
                <p className="mt-2 text-sm text-black/70">
                  Weekly run clubs, trail weekends, urban exploration events across Europe
                </p>
              </div>

              <div className="border border-black/10 p-8 transition-all hover:border-black/30">
                <Award className="h-8 w-8 text-black/60" />
                <h3 className="mt-4 text-lg font-medium text-black">Athlete Partnerships</h3>
                <p className="mt-2 text-sm text-black/70">
                  Connect with elite and amateur athletes for authentic brand storytelling
                </p>
              </div>

              <div className="border border-black/10 p-8 transition-all hover:border-black/30">
                <Zap className="h-8 w-8 text-black/60" />
                <h3 className="mt-4 text-lg font-medium text-black">Content Creation</h3>
                <p className="mt-2 text-sm text-black/70">
                  Editorial features, route guides, product reviews in our journal
                </p>
              </div>

              <div className="border border-black/10 p-8 transition-all hover:border-black/30">
                <Users className="h-8 w-8 text-black/60" />
                <h3 className="mt-4 text-lg font-medium text-black">Community Activations</h3>
                <p className="mt-2 text-sm text-black/70">
                  Pop-up experiences, product testing, exclusive brand events
                </p>
              </div>

              <div className="border border-black/10 p-8 transition-all hover:border-black/30">
                <Target className="h-8 w-8 text-black/60" />
                <h3 className="mt-4 text-lg font-medium text-black">Digital Campaigns</h3>
                <p className="mt-2 text-sm text-black/70">
                  Social media takeovers, challenges, influencer collaborations
                </p>
              </div>

              <div className="border border-black/10 p-8 transition-all hover:border-black/30">
                <TrendingUp className="h-8 w-8 text-black/60" />
                <h3 className="mt-4 text-lg font-medium text-black">Data & Insights</h3>
                <p className="mt-2 text-sm text-black/70">
                  Community trends, preferences, and performance data for strategic planning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <p className="font-mono text-xs uppercase tracking-wider text-black/60">
                For Athletes
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-tight text-black">
                Join our athlete collective
              </h2>
              <p className="mt-6 text-lg text-black/70 max-w-2xl mx-auto">
                Whether you're an elite ultrarunner or passionate weekend warrior, 
                we connect authentic athletes with brands that align with your values.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white border border-black/10 p-8">
                <h3 className="text-xl font-light text-black">Brand Partnerships</h3>
                <p className="mt-4 text-black/70">
                  Get matched with premium outdoor brands looking for authentic ambassadors. 
                  Fair compensation, creative freedom, long-term relationships.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-block font-mono text-xs uppercase tracking-wider text-black/60 hover:text-black"
                >
                  Apply as Athlete →
                </Link>
              </div>
              <div className="bg-white border border-black/10 p-8">
                <h3 className="text-xl font-light text-black">Community Platform</h3>
                <p className="mt-4 text-black/70">
                  Share your story through our journal, lead run clubs, organize events. 
                  Build your personal brand within our engaged community.
                </p>
                <Link
                  href="/journal"
                  className="mt-6 inline-block font-mono text-xs uppercase tracking-wider text-black/60 hover:text-black"
                >
                  Read Stories →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 py-32 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">
              Ready to connect with our community?
            </h2>
            <p className="text-lg text-white/70">
              Let's discuss how we can help your brand reach engaged trail runners across Europe.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-block rounded-none border border-white bg-white px-10 py-5 font-mono text-xs uppercase tracking-wider text-black transition-all hover:bg-transparent hover:text-white"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
