const galleryProjects = [
  {
    id: "gallery-1",
    number: "01",
    client: "Tata Infa",
    brand: "",
    location: "Fiestaa Resort Bengaluru",
    event: "Award Night",
    category: "Corporate Events",

    media: [
      {
        type: "video",
        src: "/optimized/tata-infa.mp4",
      },

      // Add client photographs here
      // {
      //   type: "image",
      //   src: "/gallery/tata-infa/01.jpg",
      // },
      // {
      //   type: "image",
      //   src: "/gallery/tata-infa/02.jpg",
      // },
    ],
  },

  {
    id: "gallery-2",
    number: "02",
    client: "Buro Huppo",
    brand: "",
    location: "Bengaluru",
    event: "Corporate Party",
    category: "Corporate Events",

    media: [
      {
        type: "video",
        src: "/optimized/cover.mp4",
      },
    ],
  },

  {
    id: "gallery-3",
    number: "03",
    client: "SSKL",
    brand: "Kalamandir",
    location: "Mysore",
    event: "Store Launch",
    category: "Brand Activation",

    media: [
      {
        type: "video",
        src: "/optimized/sskl-kalamandir.MP4",
      },
    ],
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
              <span className="text-white/30">IN MOTION.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
              A visual collection of events, experiences and on-ground
              execution.
            </p>
          </div>
        </div>

        {/* PROJECT GALLERIES */}
        <div className="mt-20 space-y-32">
          {galleryProjects.map((project) => (
            <article
              key={project.id}
              id={project.id}
              className="gallery__project"
            >

              {/* PROJECT HEADER */}
              <div className="gallery__project-header">

                <div>
                  <p className="gallery__project-number">
                    {project.number} — {project.category}
                  </p>

                  <h3 className="gallery__project-title">
                    {project.event}
                  </h3>

                  {/* BRAND — ONLY WHEN AVAILABLE */}
                  {project.brand && (
                    <p className="mt-4 text-sm text-white/45">
                      {project.brand}
                    </p>
                  )}
                </div>

                <div className="gallery__project-meta">
                  {project.client}
                  <br />
                  {project.location}
                </div>

              </div>

              {/* MEDIA */}
              <div className="gallery__media-grid">

                {project.media.map((item, index) => {

                  if (item.type === "video") {
                    return (
                      <div
                        key={item.src}
                        className="gallery__media gallery__media--video"
                      >
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          controls
                        >
                          <source
                            src={item.src}
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={item.src}
                      className="gallery__media"
                    >
                      <img
                        src={item.src}
                        alt={`${project.event} — event photo ${
                          index + 1
                        }`}
                        loading="lazy"
                      />
                    </div>
                  );
                })}

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}