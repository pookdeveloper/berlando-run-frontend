import { featuredProducts } from "@/lib/data";

export function ProductHighlight() {
  const highlighted = featuredProducts[0];

  if (!highlighted) {
    return null;
  }

  return (
    <section id="product" className="section section-shell" data-reveal>
      <div className="container product-layout">
        <article className="card">
          <p className="eyebrow">Equipment rationale</p>
          <h2 style={{ marginTop: "0.6rem" }}>{highlighted.name}</h2>
          <p className="subtitle">{highlighted.productStory}</p>
          <p className="eyebrow" style={{ marginTop: "1.4rem" }}>
            Material story
          </p>
          <p style={{ color: "#d5dbd4", lineHeight: 1.6 }}>{highlighted.materialStory}</p>
          <div className="feature-list">
            {highlighted.useCases.map((useCase) => (
              <span key={useCase}>Session mode · {useCase}</span>
            ))}
          </div>
        </article>

        <article className="card">
          <p className="eyebrow">Performance features</p>
          <ul style={{ margin: "1rem 0", paddingLeft: "1.2rem", lineHeight: 1.7 }}>
            {highlighted.features.map((feature) => (
              <li key={feature.name}>
                <strong>{feature.name}:</strong> {feature.description}
              </li>
            ))}
          </ul>

          <p className="eyebrow">Specifications</p>
          <table className="spec-table" aria-label="Product specifications">
            <tbody>
              {highlighted.specs.map((spec) => (
                <tr key={spec.label}>
                  <td>{spec.label}</td>
                  <td style={{ textAlign: "right", color: "#d9ded7" }}>{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </div>
    </section>
  );
}
