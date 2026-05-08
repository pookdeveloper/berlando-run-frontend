import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export default function HomePage() {
  return (
    <main className="font-cairo">

      {/* Hero */}
      <section className="min-h-screen bg-background flex flex-col">
        <nav className="flex items-center justify-between px-8 md:px-16 pt-10">
          <span className="text-xs uppercase tracking-[0.3em] text-foreground/40">
            Est. Europe
          </span>
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="text-xs uppercase tracking-[0.25em] text-foreground/40 hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <ThemeToggle />
          </div>
        </nav>

        <div className="flex-1 flex flex-col items-center justify-center px-8 py-16 text-center">
          <div className="w-full max-w-3xl mx-auto dark:invert">
            <Image
              src="/rojo.png"
              alt="Belando Run"
              width={900}
              height={300}
              className="w-full h-auto"
              priority
            />
          </div>
          <p className="mt-10 text-xs uppercase tracking-[0.35em] text-foreground/40">
            Trail Running Community
          </p>
          <h2 className="mt-6 text-4xl md:text-6xl font-light tracking-tight text-foreground/80 leading-tight">
            Run Further.
            <br />
            <span className="text-foreground/30">Feel More.</span>
          </h2>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              href="/community"
              className="inline-block border border-foreground/20 px-10 py-4 text-xs uppercase tracking-[0.25em] font-light text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Join the Community
            </Link>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 text-xs uppercase tracking-[0.25em] font-light text-foreground/40 hover:text-foreground transition-colors"
            >
              Partner With Us →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-foreground py-24 px-8 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { value: "15K+", label: "Active Runners" },
            { value: "5", label: "Cities" },
            { value: "120+", label: "Events / Year" },
            { value: "85%", label: "Engagement" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-5xl md:text-6xl font-light text-background/90">{value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-background/40">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Manifesto */}
      <section className="bg-background border-t border-foreground/10 py-32 px-8 md:px-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/30 mb-10">Manifesto</p>
          <p className="text-3xl md:text-4xl font-light leading-snug text-foreground/60">
            Trail running is not a sport.
            <br />
            It's a way of seeing the world —
            <br />
            <span className="text-foreground">one step at a time.</span>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <h2 className="text-4xl md:text-5xl font-light text-background max-w-xs leading-tight">
            Ready to move?
          </h2>
          <Link
            href="/contact"
            className="inline-block border border-background/20 px-12 py-5 text-xs uppercase tracking-[0.25em] font-light text-background hover:bg-background hover:text-foreground transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground border-t border-background/10 px-8 md:px-16 py-8 flex items-center justify-between">
        <span className="text-xs text-background/20 uppercase tracking-[0.2em]">Belando Run</span>
        <span className="text-xs text-background/20">© {new Date().getFullYear()}</span>
      </footer>

    </main>
  );
}
