export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0a0a0a] text-white">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-white/5 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-amber-400">
              Event Operations & Execution
            </p>

            <h1 className="max-w-3xl text-6xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
              I BRING
              <br />
              EVENTS
              <br />
              <span className="text-white/40">TO LIFE.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/60">
              From planning and logistics to production and on-ground
              execution, I turn event plans into seamless experiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#work"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-amber-400"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white transition hover:border-white/50"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative flex h-full items-end overflow-hidden bg-gradient-to-br from-white/10 via-white/5 to-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,191,36,0.15),transparent_35%)]" />

                <div className="relative p-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-400/80">
                    Selected Work
                  </p>

                  <p className="mt-3 max-w-xs text-2xl font-medium leading-tight">
                    Where planning meets the moment.
                  </p>
                </div>
              </div>
            </div>

            {/* Small floating label */}
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-white/10 bg-[#111111] px-6 py-5 sm:block">
              <p className="text-xs uppercase tracking-widest text-white/40">
                Focus
              </p>

              <p className="mt-1 text-sm font-medium">
                Planning · Production · Execution
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/30 md:flex">
        <span className="h-px w-8 bg-white/20" />
        Scroll to explore
        <span className="h-px w-8 bg-white/20" />
      </div>
    </section>
  );
}