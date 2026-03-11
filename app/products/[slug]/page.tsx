import { notFound } from "next/navigation";
import { featuredProducts } from "@/lib/data";
import Link from "next/link";
import { ProductTabs } from "@/components/ProductTabs";
import Image from "next/image";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return featuredProducts.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = featuredProducts.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="page">
      <section className="section">
        <div className="container product-layout">
          <article className="card">
            <p className="eyebrow">{product.category}</p>
            <h1 className="title" style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}>
              {product.name}
            </h1>
            <p style={{ color: "#d8ddd7", fontSize: "1.05rem" }}>{product.price}</p>
            <p className="subtitle">{product.description}</p>
            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", marginTop: "1.3rem" }}>
              {product.images.map((imageUrl, index) => (
                <Image
                  key={imageUrl}
                  src={imageUrl}
                  alt={`${product.name} image ${index + 1}`}
                  width={1200}
                  height={800}
                  style={{ width: "100%", borderRadius: "0.8rem", minHeight: "140px", objectFit: "cover", height: "auto" }}
                />
              ))}
            </div>
            <ProductTabs product={product} />
          </article>

          <article className="card">
            <p className="eyebrow">Performance features</p>
            <ul style={{ paddingLeft: "1.2rem", lineHeight: 1.7 }}>
              {product.features.map((feature) => (
                <li key={feature.name}>
                  <strong>{feature.name}</strong> — {feature.description}
                </li>
              ))}
            </ul>

            <p className="eyebrow" style={{ marginTop: "1.5rem" }}>
              Specifications
            </p>
            <table className="spec-table" aria-label="Product specs">
              <tbody>
                {product.specs.map((spec) => (
                  <tr key={spec.label}>
                    <td>{spec.label}</td>
                    <td style={{ textAlign: "right" }}>{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="eyebrow" style={{ marginTop: "1.5rem" }}>
              Use case
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem" }}>
              {product.useCases.map((useCase) => (
                <span key={useCase} className="city-chip" style={{ padding: "0.45rem 0.8rem" }}>
                  {useCase}
                </span>
              ))}
            </div>

            <p className="eyebrow" style={{ marginTop: "1.5rem" }}>
              Reviews
            </p>
            <div className="grid" style={{ gap: "0.7rem" }}>
              {product.reviews.map((review) => (
                <article key={`${review.author}-${review.text}`} className="city-chip" style={{ borderRadius: "0.8rem", textAlign: "left" }}>
                  <p style={{ margin: 0, fontWeight: 600 }}>{review.author}</p>
                  <p style={{ margin: "0.3rem 0", color: "#d7ddd6" }}>{review.text}</p>
                  <p style={{ margin: 0, color: "#b8bec7" }}>{"★".repeat(review.rating)}</p>
                </article>
              ))}
            </div>

            <p className="eyebrow" style={{ marginTop: "1.5rem" }}>
              Related products
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {product.relatedSlugs.map((slugItem) => {
                const related = featuredProducts.find((item) => item.slug === slugItem);

                if (!related) {
                  return null;
                }

                return (
                  <Link key={slugItem} className="btn btn-secondary" href={`/products/${slugItem}`}>
                    {related.name}
                  </Link>
                );
              })}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
