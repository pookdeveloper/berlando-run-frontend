export function HeroSection() {
  return (
    <section className="hero section-shell" aria-label="Hero" data-reveal>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Trail runners moving through natural terrain"
        className="hero-video"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-man-running-up-a-rocky-trail-1576/1080p.mp4"
          type="video/mp4"
        />
      </video>
      <div className="container hero-content">
        <span className="hero-kicker">Network / Terrain / Discipline</span>
        <p className="eyebrow">Community for trail and urban runners</p>
        <h1 className="title">Build your running crew.</h1>
        <p className="subtitle">
          BERLANDO RUN connects local clubs, shared events, and monthly challenges.
          Equipment is support — community is the core product.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#community">
            Join a Club
          </a>
          <a className="btn btn-secondary" href="#events">
            View Events
          </a>
        </div>
      </div>
    </section>
  );
}
