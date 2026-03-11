import { notFound } from "next/navigation";
import { journalEntries } from "@/lib/data";

type JournalPostProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return journalEntries.map((entry) => ({ slug: entry.slug }));
}

export default async function JournalPostPage({ params }: JournalPostProps) {
  const { slug } = await params;
  const post = journalEntries.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="page">
      <section className="section">
        <div className="container" style={{ maxWidth: "880px" }}>
          <p className="eyebrow">{post.category}</p>
          <h1 className="title" style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}>
            {post.title}
          </h1>
          <p className="subtitle" style={{ marginBottom: "2rem" }}>
            {post.excerpt}
          </p>
          <article className="card" style={{ lineHeight: 1.75, color: "#d5dbd4" }}>
            <p>
              This editorial expands the BERLANDO RUN perspective where running means exploration,
              not repetition. Terrain, city culture, and rhythm combine into a personal identity.
            </p>
            <p>
              We publish route guides, philosophy, and athlete voices to support both search discovery
              and deeper community participation.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
