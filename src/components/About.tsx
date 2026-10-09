export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section__inner">

        <div className="grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#f7c948]">
              About Me
            </p>

            <p className="mt-4 text-[9px] uppercase tracking-[0.2em] text-white/25">
              01 — INTRODUCTION
            </p>
          </div>

          <div>
            <h2 className="about__heading">
              TURNING IDEAS
              <br />
              INTO{" "}
              <span className="about__muted">
                EXPERIENCES.
              </span>
            </h2>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
              Who I Am
            </p>
          </div>

          <div className="about__body space-y-7">
            <p>
              I am an experienced event management professional
              with hands-on expertise in operations, event planning,
              vendor coordination, production management and
              on-ground execution. I specialize in understanding
              client requirements and transforming concepts into
              well-executed and memorable events.
            </p>

            <p>
              My experience includes working on corporate events,
              conferences, brand activations, product launches,
              promotional activities, and social events, with a
              strong focus on execution, timelines, quality and
              client satisfaction.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}