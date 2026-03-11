import { journalEntries } from "@/lib/data";

export default function JournalPage() {
  return (
    <main className="page">
      <section className="section">
        <div className="container">
          <p className="eyebrow">Journal</p>
          <h1 className="title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Editorial stories for movement culture
          </h1>
          <p className="subtitle">
            Running philosophy, trail route guides, and athlete profiles built for
            search, inspiration, and community identity.
          </p>

          <div className="grid journal-grid" style={{ marginTop: "2rem" }}>
            {journalEntries.map((entry) => (
              <article key={entry.slug} className="card">
                <p className="eyebrow" style={{ margin: 0 }}>
                  {entry.category}
                </p>
                <h2 style={{ marginBottom: "0.5rem" }}>{entry.title}</h2>
                <p style={{ color: "#cdd3cc" }}>{entry.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
