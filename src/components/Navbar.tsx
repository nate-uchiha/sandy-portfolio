export default function Navbar() {
  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        {/* Logo / Name */}
        <a
          href="#"
          className="text-sm font-semibold uppercase tracking-[0.2em] text-white"
        >
          YOUR NAME
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="text-sm text-white/55 transition hover:text-white"
          >
            About
          </a>

          <a
            href="#expertise"
            className="text-sm text-white/55 transition hover:text-white"
          >
            Expertise
          </a>

          <a
            href="#projects"
            className="text-sm text-white/55 transition hover:text-white"
          >
            Projects
          </a>

          <a
            href="#gallery"
            className="text-sm text-white/55 transition hover:text-white"
          >
            Event Gallery
          </a>

          <a
            href="#contact"
            className="text-sm text-white/55 transition hover:text-white"
          >
            Contact
          </a>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden rounded-full border border-white/20 px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-white transition hover:border-amber-400 hover:text-amber-400 md:block"
        >
          Let's Talk
        </a>

        {/* Mobile menu placeholder */}
        <button
          type="button"
          aria-label="Open menu"
          className="text-white md:hidden"
        >
          ☰
        </button>
      </nav>
    </header>
  );
}