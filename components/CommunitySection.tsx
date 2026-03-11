import { challenges, events, runClubs } from "@/lib/data";
import { RunClubPopover } from "@/components/RunClubPopover";
import { RunClubMapClient } from "@/components/RunClubMapClient";

export function CommunitySection() {
  return (
    <section id="community" className="section section-shell" data-reveal>
      <div className="container">
        <p className="eyebrow">Community platform</p>
        <h2 style={{ marginTop: "0.8rem", fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
          Active clubs across Europe
        </h2>
        <p className="subtitle">
          Find runners in your city, train together, and convert consistency into progress.
        </p>

        <div className="grid map-grid" style={{ marginTop: "1.4rem" }}>
          {runClubs.map((club) => (
            <RunClubPopover key={club.city} club={club} />
          ))}
        </div>

        <div style={{ marginTop: "1.4rem" }}>
          <RunClubMapClient />
        </div>

        <div id="events" className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "2rem" }}>
          <article className="card" data-reveal>
            <p className="eyebrow">Events</p>
            <ul style={{ marginBottom: 0, lineHeight: 1.7 }}>
              {events.map((event) => (
                <li key={event}>{event}</li>
              ))}
            </ul>
          </article>
          <article id="challenges" className="card" data-reveal>
            <p className="eyebrow">Challenges</p>
            <ul style={{ marginBottom: 0, lineHeight: 1.7 }}>
              {challenges.map((challenge) => (
                <li key={challenge}>{challenge}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
