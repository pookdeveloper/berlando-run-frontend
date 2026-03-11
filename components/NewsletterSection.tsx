import { NewsletterForm } from "@/components/NewsletterForm";

export function NewsletterSection() {
  return (
    <section className="newsletter section-shell" data-reveal>
      <div className="container">
        <p className="eyebrow">Newsletter signup</p>
        <h2 style={{ margin: "0.7rem 0" }}>Join the runner network</h2>
        <p className="subtitle">
          Get event schedules, challenge updates, and route intelligence from clubs in your city.
        </p>
        <NewsletterForm />
      </div>
    </section>
  );
}
