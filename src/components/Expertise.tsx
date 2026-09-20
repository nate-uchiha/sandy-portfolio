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
    title: "Corporate Events",
    description:
      "Coordinating corporate events and experiences with attention to planning, logistics, production requirements, stakeholder coordination and smooth event-day execution.",
    tags: ["Corporate", "Logistics", "Operations"],
  },
  {
    number: "03",
    title: "Vendor Management",
    description:
      "Managing vendor coordination, requirements, timelines and deliverables to ensure every execution partner is aligned with the event plan.",
    tags: ["Vendors", "Coordination", "Timelines"],
  },
  {
    number: "04",
    title: "Conference Management",
    description:
      "Supporting conference planning and execution across venue coordination, production, schedules, teams, vendors and on-ground event operations.",
    tags: ["Conferences", "Production", "Operations"],
  },
  {
    number: "05",
    title: "Production Coordination",
    description:
      "Coordinating production setups, technical requirements, event infrastructure and execution teams to bring the planned experience to life.",
    tags: ["Production", "Technical", "Execution"],
  },
  {
    number: "06",
    title: "Brand Activations",
    description:
      "Executing brand activations and promotional experiences with a strong focus on logistics, setup, vendor coordination, timelines and on-ground delivery.",
    tags: ["Activations", "Brands", "On-Ground"],
  },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="bg-[#0a0a0a] px-6 py-28 text-white lg:px-8 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber-400">
              Expertise
            </p>

            <p className="mt-4 text-sm text-white/25">
              02 — WHAT I SPECIALIZE IN
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              TURNING PLANS
              <br />
              INTO{" "}
              <span className="text-white/35">
                WELL-EXECUTED EVENTS.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
              Hands-on experience across event planning, operations,
              production, vendor coordination and on-ground execution.
            </p>
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
          {expertise.map((item) => (
            <article
              key={item.number}
              className="group relative bg-[#0a0a0a] p-7 transition-colors duration-300 hover:bg-[#111111] sm:p-9 lg:p-10"
            >
              {/* Top row */}
              <div className="flex items-start justify-between">
                <span className="text-xs tracking-[0.25em] text-amber-400/65">
                  {item.number}
                </span>

                <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 transition-colors duration-300 group-hover:text-amber-400/60">
                  Expertise
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-16 max-w-lg text-2xl font-medium leading-tight tracking-[-0.02em] text-white sm:text-3xl">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
                {item.description}
              </p>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-white/35 transition-colors duration-300 group-hover:border-amber-400/20 group-hover:text-white/55"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-amber-400 transition-all duration-500 group-hover:w-20" />

              {/* Corner number */}
              <div className="pointer-events-none absolute bottom-6 right-7 text-6xl font-semibold tracking-[-0.08em] text-white/[0.025] transition-colors duration-500 group-hover:text-amber-400/[0.06]">
                {item.number}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-6 text-white/30">
            From the first planning discussion to the final moment on ground,
            every moving part needs to work together.
          </p>

          <a
            href="#projects"
            className="group inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-amber-400"
          >
            Explore My Work
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}