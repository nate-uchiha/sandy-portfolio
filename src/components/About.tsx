export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0a0a0a] px-6 py-28 text-white lg:px-8 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber-400">
              About Me
            </p>

            <p className="mt-4 text-sm text-white/25">
              01 — INTRODUCTION
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              TURNING IDEAS
              <br />
              INTO <span className="text-white/35">EXPERIENCES.</span>
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/25">
              Who I Am
            </p>
          </div>

          <div className="max-w-3xl space-y-7 text-base leading-8 text-white/55 sm:text-lg">
            <p>
              I am an experienced event management professional with hands-on
              expertise in operations, event planning, vendor coordination,
              production management and on-ground execution. I specialize in
              understanding client requirements and transforming concepts
              into well-executed and memorable events.
            </p>

            <p>
              My experience includes working on corporate events, conferences,
              brand activations, product launches, promotional activities, and
              social events, with a strong focus on execution, timelines,
              quality and client satisfaction.
            </p>
          </div>
        </div>

        {/* Keywords */}
        {/* <div className="mt-20 grid border-y border-white/10 sm:grid-cols-3">
          <div className="border-b border-white/10 px-6 py-7 sm:border-b-0 sm:border-r">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-400/70">
              01
            </p>
            <p className="mt-3 text-lg font-medium">Operations</p>
          </div>

          <div className="border-b border-white/10 px-6 py-7 sm:border-b-0 sm:border-r">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-400/70">
              02
            </p>
            <p className="mt-3 text-lg font-medium">Production</p>
          </div>

          <div className="px-6 py-7">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-400/70">
              03
            </p>
            <p className="mt-3 text-lg font-medium">Execution</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}