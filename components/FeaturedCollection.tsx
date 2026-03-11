import { featuredProducts } from "@/lib/data";

export function FeaturedCollection() {
  return (
    <section id="collection" className="section section-shell" data-reveal>
      <div className="container">
        <p className="eyebrow">Support equipment</p>
        <h2 style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)", margin: "0.6rem 0 1.4rem" }}>
          Technical gear for community sessions
        </h2>
        <p className="subtitle" style={{ marginBottom: "1.3rem" }}>
          Apparel and accessories are designed to support club runs, long efforts, and shared challenges.
        </p>
        <div className="grid collection-grid">
          {featuredProducts.map((product) => (
            <article key={product.slug} className="card">
              <p className="eyebrow" style={{ margin: 0 }}>
                {product.category}
              </p>
              <h3 style={{ marginBottom: "0.2rem" }}>{product.name}</h3>
              <p style={{ marginTop: 0, color: "#bfc5bf" }}>{product.description}</p>
              <p style={{ color: "#d9dfd8", fontWeight: 600 }}>{product.price}</p>
              <a className="btn btn-secondary" href={`/products/${product.slug}`}>
                View Specs
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
