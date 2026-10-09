
const galleries = [
  {
    id: "gallery-1",
    number: "01",
    client: "Tata Infa",
    event: "Award Night",
    location: "Fiestaa Resort Bengaluru",
    category: "Corporate Events",
    pax: 150,
    poster: "/posters/tata-infa.jpg",
    description:
      "A corporate award-night experience, bringing together event presentation and on-ground execution.",
  },
  {
    id: "gallery-2",
    number: "02",
    client: "Buro Huppo",
    event: "Corporate Party",
    location: "Bengaluru",
    category: "Corporate Events",
    pax: 150,
    poster: "/posters/cover.jpg",
    description:
      "A corporate gathering supported by coordinated planning and event-day operations.",
  },
  {
    id: "gallery-3",
    number: "03",
    client: "SSKL",
    brand: "Kalamandir",
    event: "Store Launch",
    location: "Mysore",
    category: "Brand Activation",
    poster: "/posters/sskl-kalamandir.jpg",
    description:
      "A retail store-launch project focused on brand activation and on-ground execution.",
  },
];

export default function EventGallery() {
  return (
    <section id="gallery" className="section gallery">
      <div className="section__inner">
        {/* HEADER */}
        <div className="grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#f7c948]">
              Event Gallery
            </p>

            <p className="mt-4 text-[9px] uppercase tracking-[0.2em] text-white/25">
              04 — VISUAL JOURNAL
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-4xl font-medium leading-[0.92] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
              MOMENTS
              <br />
              <span className="text-white/30">IN FOCUS.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
              A closer look at selected events, from corporate
              experiences to brand activations and on-ground execution.
            </p>
          </div>
        </div>

        {/* PROJECT GALLERIES */}
        <div className="mt-16 space-y-20 sm:mt-20 sm:space-y-28">
          {galleries.map((project) => (
            <article
              id={project.id}
              key={project.id}
              className="scroll-mt-28"
            >
              {/* PROJECT HEADING */}
              <div className="mb-6 flex flex-col justify-between gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-end">
                <div>
                  <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[#f7c948]">
                    PROJECT {project.number} / {project.category}
                  </p>

                  <h3 className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
                    {project.event}
                  </h3>

                  <p className="mt-3 text-sm text-white/50">
                    {project.client}
                    {project.brand ? ` · ${project.brand}` : ""}
                    {" — "}
                    {project.location}
                  </p>
                </div>

                <div className="flex shrink-0 gap-8 sm:text-right">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                      Category
                    </p>
                    <p className="mt-2 text-sm text-white/80">
                      {project.category}
                    </p>
                  </div>

                  {project.pax && (
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                        Guests
                      </p>
                      <p className="mt-2 text-sm text-white/80">
                        {project.pax}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* FEATURED POSTER */}
              <div className="grid items-stretch gap-6 lg:grid-cols-[1.5fr_0.7fr]">
                <div className="group relative min-h-[260px] overflow-hidden rounded-2xl border border-white/10 bg-[#17121d] sm:min-h-[380px] lg:min-h-[440px]">
                  <img
                    src={project.poster}
                    alt={`${project.client} ${project.event} event poster`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-contain p-4 transition-transform duration-700 group-hover:scale-[1.02] sm:p-8"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  <span className="absolute bottom-5 left-5 text-[9px] uppercase tracking-[0.25em] text-white/60">
                    {project.number} — FEATURED VISUAL
                  </span>
                </div>

                {/* PROJECT CONTEXT */}
                <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#f7c948]">
                      Project Overview
                    </p>

                    <p className="mt-5 text-lg leading-8 text-white/75">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-10 border-t border-white/10 pt-5">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                      Location
                    </p>
                    <p className="mt-2 text-sm text-white/70">
                      {project.location}
                    </p>

                    <p className="mt-6 text-xs leading-6 text-white/40">
                      Event visuals and additional project media can be
                      added here as the gallery is expanded.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}