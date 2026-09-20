export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0a0a0a] text-white">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-[20%] h-72 w-72 rounded-full bg-amber-500/10 blur-[130px]" />
        <div className="absolute bottom-[15%] right-[15%] h-80 w-80 rounded-full bg-white/[0.03] blur-[130px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Left */}
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-amber-400">
              Assistant Event Manager
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.045em] sm:text-6xl lg:text-7xl xl:text-8xl">
              PASSION FOR
              <br />
              EVENTS &
              <br />
              <span className="text-white/35">
                PRECISION IN EXECUTION.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              From planning and logistics to production and on-ground
              execution, I turn event plans into seamless experiences.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition duration-300 hover:bg-amber-400"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:border-white/50"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right - Media placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <div className="relative flex h-full items-end overflow-hidden bg-gradient-to-br from-white/[0.09] via-white/[0.03] to-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,191,36,0.16),transparent_36%)]" />

                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="relative p-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-400/80">
                    Event Operations
                  </p>

                  <p className="mt-3 max-w-xs text-2xl font-medium leading-tight">
                    Where planning meets the moment.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating focus card */}
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-white/10 bg-[#111111] px-6 py-5 shadow-2xl sm:block">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">
                Focus
              </p>

              <p className="mt-2 text-sm font-medium">
                Planning · Production · Execution
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/25 md:flex">
        <span className="h-px w-8 bg-white/15" />
        Scroll to explore
        <span className="h-px w-8 bg-white/15" />
      </div>
    </section>
  );
}