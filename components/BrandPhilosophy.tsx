import { brandPillars } from "@/lib/data";

export function BrandPhilosophy() {
  return (
    <section id="philosophy" className="section section-shell" data-reveal>
      <div className="container">
        <p className="eyebrow">Brand DNA</p>
        <h2 style={{ fontSize: "clamp(1.6rem, 3.4vw, 2.8rem)", marginTop: "0.8rem" }}>
          Freedom · Function · Form
        </h2>
        <p className="subtitle">
          Running is not routine. It is a way to escape, explore terrain, and find rhythm.
          We design equipment for runners seeking freedom, not limits.
        </p>
        <div className="grid pillars" style={{ marginTop: "1.8rem" }}>
          {brandPillars.map((pillar) => (
            <article key={pillar.title} className="card">
              <p className="eyebrow" style={{ margin: 0 }}>
                Pillar
              </p>
              <h3 style={{ marginTop: "0.5rem" }}>{pillar.title}</h3>
              <p style={{ color: "#d7ddd6" }}>{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
