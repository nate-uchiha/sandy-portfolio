const projects = [
  {
    number: "01",
    client: "Tata Infa",
    brand: "",
    location: "Fiestaa Resort Bengaluru",
    event: "Award Night",
    category: "Corporate Events",
    pax: 150,
    video: "/optimized/tata-infa.mp4",
    poster: '/posters/tata-infa.jpg',
    galleryId: "gallery-1",
  },
  {
    number: "02",
    client: "Buro Huppo",
    brand: "",
    location: "Bengaluru",
    event: "Corporate Party",
    category: "Corporate Events",
    pax: 150,
    video: "/optimized/cover.mp4",
    poster: "/posters/cover.jpg",
    galleryId: "gallery-2",
  },
  {
    number: "03",
    client: "SSKL",
    brand: "Kalamandir",
    location: "Mysore",
    event: "Store Launch",
    category: "Brand Activation",
    video: "/optimized/sskl-kalamandir.MP4",
    poster: "/posters/sskl-kalamandir.jpg",
    galleryId: "gallery-3",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section__inner">

        {/* HEADER */}
        <div className="grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#f7c948]">
              Selected Work
            </p>

            <p className="mt-4 text-[9px] uppercase tracking-[0.2em] text-white/25">
              03 — PROJECTS
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-4xl font-medium leading-[0.92] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
              EVENTS
              <br />
              <span className="text-white/30">IN MOTION.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
              A selection of events and brand experiences brought to life
              through planning, production and on-ground execution.
            </p>
          </div>
        </div>

        {/* PROJECT CARDS */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.number}
              href={`#${project.galleryId}`}
              className="project-card"
              aria-label={`View ${project.event} gallery`}
            >
              <div className="project-card__media">

                {/* BACKGROUND VIDEO */}
                {/* <video
                  className="project-card__video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                >
                  <source src={project.video} type="video/mp4" />
                </video> */}

                <img
                  className="project-card__poster"
                  src={project.poster}
                  alt={`${project.client} — ${project.event}`}
                  loading="lazy"
                />

                <div className="project-card__overlay" />

                {/* TOP */}
                <div className="project-card__top">
                  <span className="project-card__number">
                    {project.number}
                  </span>

                  <span className="project-card__category">
                    {project.category}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="project-card__content">

                  <p className="project-card__client">
                    {project.client}
                  </p>

                  <h3 className="project-card__title">
                    {project.event}
                  </h3>

                  {/* BRAND — ONLY WHEN AVAILABLE */}
                  {project.brand && (
                    <p className="project-card__brand">
                      {project.brand}
                    </p>
                  )}

                  {/* LOCATION + PAX */}
                  <div className="project-card__location">
                    <span>{project.location}</span>

                    {project.pax && (
                      <span>{project.pax} Pax</span>
                    )}

                    <span className="project-card__arrow">
                      ↗
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="project-card__cta">
                  <span>View Event</span>
                  <span>↗</span>
                </div>

              </div>
            </a>
          ))}
        </div>

        {/* GALLERY LINK */}
        <div className="mt-12 flex justify-end">
          <a
            href="#gallery"
            className="group inline-flex items-center gap-4 text-[9px] uppercase tracking-[0.22em] text-white/45 transition-colors hover:text-white"
          >
            Explore Event Gallery

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}