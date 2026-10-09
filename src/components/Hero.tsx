export default function Hero() {
  return (
    <section id="top" className="hero">
      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="metada"
        poster="/posters/cover.jpg"
        aria-hidden="true"
      >
        <source src="/optimized/cover.mp4" type="video/mp4" />
      </video>

      <div className="hero__overlay" />

      <div className="hero__content">
        <div className="hero__inner">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot" />

            Assistant Event Manager
          </div>

          <h1 className="hero__title">
            PASSION FOR
            <br />
            EVENTS &
            <br />

            <span className="hero__title-muted">
              PRECISION IN EXECUTION.
            </span>
          </h1>

          <p className="hero__description">
            From planning and logistics to production and
            on-ground execution, I turn event plans into
            seamless experiences.
          </p>

          <div className="hero__actions">
            <a
              href="#projects"
              className="hero__button hero__button--primary"
            >
              View Projects

              <span>↗</span>
            </a>

            <a
              href="#contact"
              className="hero__button hero__button--secondary"
            >
              Let&apos;s Talk

              <span>↗</span>
            </a>
          </div>
        </div>
      </div>

      <div className="hero__side-label">
        <span className="hero__side-line" />

        Events · Operations · Production
      </div>

      <div className="hero__bottom">
        <div className="hero__scroll">
          <span className="hero__scroll-line" />

          Scroll to explore
        </div>

        <div className="hero__meta">
          <span>Planning</span>

          <span>Production</span>

          <span>Execution</span>
        </div>
      </div>
    </section>
  );
}