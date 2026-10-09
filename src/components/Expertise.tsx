const expertise = [
  {
    number: "01",
    title: "Event Planning & Execution",
    description:
      "Planning and executing events from initial requirements through on-ground delivery, with a focus on timelines, coordination, quality and seamless execution.",
    tags: ["Planning", "Operations", "Execution"],
  },
  {
    number: "02",
    title: "Client Servicing",
    description:
      "Understanding requirements, communication, presentations and relationship management.",
    tags: ["Corporate", "Logistics", "Operations"],
  },
  {
    number: "03",
    title: "Event Operations",
    description:
      "On-ground coordination, manpower, logistics and event-day execution",
    tags: ["Activations", "Brands", "On-Ground"],
  },
  {
    number: "04",
    title: "Production Management",
    description:
      "Sound, lighting, LED walls, stage, AV and technical coordination.",
    tags: ["Conferences", "Production", "Operations"],
  },
  {
    number: "05",
    title: "Venue Management ",
    description:
      "Venue selection, banquet coordination, layouts, permissions and hospitality.",
    tags: ["Vendors", "Coordination", "Timelines"],
  },
  {
    number: "06",
    title: "Vendor Management",
    description:
      "Sourcing, coordination, quotations, negotiations and execution.",
    tags: ["Vendors", "Coordination", "Timelines"],
  },
];


export default function Expertise() {
  return (
    <section id="expertise" className="section expertise">
      <div className="section__inner">

        <div className="grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#f7c948]">
              Expertise
            </p>

            <p className="mt-4 text-[9px] uppercase tracking-[0.2em] text-white/25">
              02 — WHAT I DO
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-4xl font-medium leading-[0.92] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
              PLANNING.
              <br />
              COORDINATION.
              <br />

              <span className="text-white/30">
                EXECUTION.
              </span>
            </h2>
          </div>
        </div>

        <div className="mt-12">
          {expertise.map((item) => (
            <article
              key={item.number}
              className="expertise__item"
            >
              <div className="expertise__number">
                {item.number}
              </div>

              <div>
                <h3 className="expertise__title">
                  {item.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="expertise__tag"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="expertise__description">
                {item.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}