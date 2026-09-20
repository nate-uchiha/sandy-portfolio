export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0a0a0a] px-6 py-32 text-white lg:px-8 lg:py-44"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="border-t border-white/10 pt-10">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber-400">
            Contact
          </p>

          <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                Email
              </p>

              <a
                href="mailto:sandy98818@gmail.com"
                className="mt-3 block text-sm text-white/70 transition hover:text-amber-400"
              >
                sandy98818@gmail.com
              </a>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                Phone
              </p>

              <a
                href="tel:+919881848154"
                className="mt-3 block text-sm text-white/70 transition hover:text-amber-400"
              >
                +91 98818 48154
              </a>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                LinkedIn
              </p>

              <a
                href="https://www.linkedin.com/in/sandesh-tembhurkar-48588631b?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                className="mt-3 block text-sm text-white/70 transition hover:text-amber-400"
              >
                LinkedIn Profile →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}