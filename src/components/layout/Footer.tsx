import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-stone">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight">BERLANDO</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Running as freedom. Premium trail running apparel designed for exploration.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium">Shop</h4>
            <nav className="flex flex-col space-y-3 text-sm text-muted-foreground">
              <Link href="/products" className="hover:text-foreground transition-colors">
                All Products
              </Link>
              <Link href="/products?category=trail-shorts" className="hover:text-foreground transition-colors">
                Trail Shorts
              </Link>
              <Link href="/products?category=technical-tees" className="hover:text-foreground transition-colors">
                Technical Tees
              </Link>
              <Link href="/products?category=outerwear" className="hover:text-foreground transition-colors">
                Outerwear
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium">Community</h4>
            <nav className="flex flex-col space-y-3 text-sm text-muted-foreground">
              <Link href="/community/run-clubs" className="hover:text-foreground transition-colors">
                Run Clubs
              </Link>
              <Link href="/community/events" className="hover:text-foreground transition-colors">
                Events
              </Link>
              <Link href="/community/challenges" className="hover:text-foreground transition-colors">
                Challenges
              </Link>
              <Link href="/journal" className="hover:text-foreground transition-colors">
                Journal
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium">About</h4>
            <nav className="flex flex-col space-y-3 text-sm text-muted-foreground">
              <Link href="/about" className="hover:text-foreground transition-colors">
                Our Story
              </Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
              <Link href="/shipping" className="hover:text-foreground transition-colors">
                Shipping
              </Link>
              <Link href="/returns" className="hover:text-foreground transition-colors">
                Returns
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Berlando Run. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
