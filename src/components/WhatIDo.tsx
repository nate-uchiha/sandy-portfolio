const capabilities = [
  {
    number: "01",
    title: "Event Operations",
    description:
      "Planning, coordinating and managing the operational aspects of an event from pre-production through execution.",
  },
  {
    number: "02",
    title: "Event Execution",
    description:
      "Turning event plans into seamless on-ground experiences while keeping timelines, teams and deliverables aligned.",
  },
  {
    number: "03",
    title: "Production Coordination",
    description:
      "Coordinating production requirements, setups, technical teams and event infrastructure.",
  },
  {
    number: "04",
    title: "Vendor Management",
    description:
      "Coordinating with vendors, suppliers and execution partners to ensure timely and smooth delivery.",
  },
  {
    number: "05",
    title: "Logistics & Planning",
    description:
      "Managing schedules, venue requirements, movement, materials and operational logistics.",
  },
  {
    number: "06",
    title: "On-Ground Management",
    description:
      "Managing teams, coordinating multiple stakeholders and resolving issues during live events.",
  },
];

export default function WhatIDo() {
  return (
    <section className="bg-[#0a0a0a] px-6 py-32 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber-400">
              What I Do
            </p>

            <p className="mt-4 text-sm text-white/30">
              01 — 06
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-5xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              I HANDLE THE DETAILS
              <br />
              THAT MAKE THE
              <br />
              <span className="text-white/35">EVENT HAPPEN.</span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/50">
              From the first setup plan to the final moment on ground, I
              coordinate the moving parts that bring an event together.
            </p>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mt-24 border-t border-white/10">
          {capabilities.map((item) => (
            <div
              key={item.number}
              className="group grid gap-6 border-b border-white/10 py-8 transition-colors hover:bg-white/[0.02] md:grid-cols-[80px_1fr_1.5fr] md:items-center"
            >
              <span className="text-sm text-amber-400/70">
                {item.number}
              </span>

              <h3 className="text-2xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl">
                {item.title}
              </h3>

              <p className="max-w-xl text-sm leading-7 text-white/45 md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}