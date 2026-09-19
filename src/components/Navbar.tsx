export default function Navbar() {
  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        {/* Logo */}
        <a
          href="#"
          className="text-sm font-semibold uppercase tracking-[0.2em] text-white"
        >
          Sandesh Tembhurkar
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#work"
            className="text-sm text-white/60 transition hover:text-white"
          >
            Work
          </a>

          <a
            href="#about"
            className="text-sm text-white/60 transition hover:text-white"
          >
            About
          </a>

          <a
            href="#experience"
            className="text-sm text-white/60 transition hover:text-white"
          >
            Experience
          </a>

          <a
            href="#contact"
            className="text-sm text-white/60 transition hover:text-white"
          >
            Contact
          </a>
        </div>

        {/* Contact button */}
        <a
          href="#contact"
          className="hidden rounded-full border border-white/20 px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-white transition hover:border-white/50 md:block"
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