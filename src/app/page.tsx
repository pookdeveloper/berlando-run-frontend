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
      
      <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Europe's Fastest Growing Trail Running Community
          </p>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-foreground leading-tight">
            Where brands meet
            <br />
            trail running culture
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Connect with 15,000+ engaged trail runners across 5 European cities.
            Build authentic brand partnerships through community-driven events and content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/contact"
              className="inline-block rounded-none border border-primary bg-primary px-10 py-5 font-mono text-xs uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90"
            >
              Partner With Us
            </Link>
            <Link
              href="/community"
              className="inline-block rounded-none border border-border bg-transparent px-10 py-5 font-mono text-xs uppercase tracking-wider text-foreground transition-all hover:bg-muted"
            >
              Explore Community
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Community Impact
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-tight text-card-foreground">
              Reach that matters
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-4 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-card-foreground">15K+</div>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">Active Members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-card-foreground">5</div>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">Cities</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-card-foreground">120+</div>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">Events/Year</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-card-foreground">85%</div>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">Engagement Rate</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Why Partner With Us
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-tight text-foreground">
                Authentic connections, real results
              </h2>
            </div>
            <div className="grid gap-10 md:grid-cols-3">
              <div className="bg-card border border-border p-8">
                <div className="flex h-12 w-12 items-center justify-center border border-border">
                  <Users className="h-6 w-6 text-card-foreground" />
                </div>
                <h3 className="mt-6 text-xl font-light text-card-foreground">Engaged Community</h3>
                <p className="mt-4 text-card-foreground/70 leading-relaxed">
                  Our members don't just run—they live the trail running lifestyle. 
                  Average engagement rates 3x higher than industry standard.
                </p>
              </div>

              <div className="bg-card border border-border p-8">
                <div className="flex h-12 w-12 items-center justify-center border border-border">
                  <Target className="h-6 w-6 text-card-foreground" />
                </div>
                <h3 className="mt-6 text-xl font-light text-card-foreground">Premium Audience</h3>
                <p className="mt-4 text-card-foreground/70 leading-relaxed">
                  65% of our community are decision-makers with high purchasing power. 
                  Perfect for premium outdoor and performance brands.
                </p>
              </div>

              <div className="bg-card border border-border p-8">
                <div className="flex h-12 w-12 items-center justify-center border border-border">
                  <TrendingUp className="h-6 w-6 text-card-foreground" />
                </div>
                <h3 className="mt-6 text-xl font-light text-card-foreground">Proven Growth</h3>
                <p className="mt-4 text-card-foreground/70 leading-relaxed">
                  300% year-over-year growth. Expanding to 10 cities in 2026. 
                  Be part of Europe's fastest-growing trail running movement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Partnership Opportunities
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-tight text-card-foreground">
                How we work together
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="border border-border p-8 transition-all hover:border-card-foreground/30">
                <MapPin className="h-8 w-8 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium text-card-foreground">Event Sponsorship</h3>
                <p className="mt-2 text-sm text-card-foreground/70">
                  Weekly run clubs, trail weekends, urban exploration events across Europe
                </p>
              </div>

              <div className="border border-border p-8 transition-all hover:border-card-foreground/30">
                <Award className="h-8 w-8 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium text-card-foreground">Athlete Partnerships</h3>
                <p className="mt-2 text-sm text-card-foreground/70">
                  Connect with elite and amateur athletes for authentic brand storytelling
                </p>
              </div>

              <div className="border border-border p-8 transition-all hover:border-card-foreground/30">
                <Zap className="h-8 w-8 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium text-card-foreground">Content Creation</h3>
                <p className="mt-2 text-sm text-card-foreground/70">
                  Editorial features, route guides, product reviews in our journal
                </p>
              </div>

              <div className="border border-border p-8 transition-all hover:border-card-foreground/30">
                <Users className="h-8 w-8 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium text-card-foreground">Community Activations</h3>
                <p className="mt-2 text-sm text-card-foreground/70">
                  Pop-up experiences, product testing, exclusive brand events
                </p>
              </div>

              <div className="border border-border p-8 transition-all hover:border-card-foreground/30">
                <Target className="h-8 w-8 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium text-card-foreground">Digital Campaigns</h3>
                <p className="mt-2 text-sm text-card-foreground/70">
                  Social media takeovers, challenges, influencer collaborations
                </p>
              </div>

              <div className="border border-border p-8 transition-all hover:border-card-foreground/30">
                <TrendingUp className="h-8 w-8 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium text-card-foreground">Data & Insights</h3>
                <p className="mt-2 text-sm text-card-foreground/70">
                  Community trends, preferences, and performance data for strategic planning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                For Athletes
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-light tracking-tight text-foreground">
                Join our athlete collective
              </h2>
              <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto">
                Whether you're an elite ultrarunner or passionate weekend warrior, 
                we connect authentic athletes with brands that align with your values.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-card border border-border p-8">
                <h3 className="text-xl font-light text-card-foreground">Brand Partnerships</h3>
                <p className="mt-4 text-card-foreground/70">
                  Get matched with premium outdoor brands looking for authentic ambassadors. 
                  Fair compensation, creative freedom, long-term relationships.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-block font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-card-foreground"
                >
                  Apply as Athlete →
                </Link>
              </div>
              <div className="bg-card border border-border p-8">
                <h3 className="text-xl font-light text-card-foreground">Community Platform</h3>
                <p className="mt-4 text-card-foreground/70">
                  Share your story through our journal, lead run clubs, organize events. 
                  Build your personal brand within our engaged community.
                </p>
                <Link
                  href="/journal"
                  className="mt-6 inline-block font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-card-foreground"
                >
                  Read Stories →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">
              Ready to connect with our community?
            </h2>
            <p className="text-lg text-primary-foreground/70">
              Let's discuss how we can help your brand reach engaged trail runners across Europe.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-block rounded-none border border-primary-foreground bg-primary-foreground px-10 py-5 font-mono text-xs uppercase tracking-wider text-primary transition-all hover:bg-transparent hover:text-primary-foreground"
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
