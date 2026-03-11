import { journalEntries } from "@/lib/data";
import Link from "next/link";

export function JournalSection() {
  return (
    <section id="journal" className="section section-shell" data-reveal>
      <div className="container">
        <p className="eyebrow">Editorial journal</p>
        <h2 style={{ marginTop: "0.8rem", fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
          Routes, culture, and runner intelligence
        </h2>
        <p className="subtitle">
          Local route breakdowns, athlete stories, and practical training notes from the community.
        </p>
        <div className="grid journal-grid" style={{ marginTop: "1.5rem" }}>
          {journalEntries.map((entry) => (
            <article key={entry.slug} className="card journal-item">
              <p className="eyebrow" style={{ margin: 0 }}>
                {entry.category}
              </p>
              <h3>{entry.title}</h3>
              <p style={{ color: "#cdd3cc" }}>{entry.excerpt}</p>
              <Link
                href={`/journal/${entry.slug}`}
                className="btn btn-secondary"
                aria-label={`Read ${entry.title}`}
              >
                Read article
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
