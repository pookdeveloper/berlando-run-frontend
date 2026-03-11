import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-6xl md:text-8xl font-semibold tracking-tight">
          Run free.
          <br />
          Run far.
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Premium trail running apparel designed for freedom, function, and form.
        </p>
        <div className="pt-8">
          <Link
            href="/products"
            className="inline-block bg-black text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-black/90 transition-colors"
          >
            Explore Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
