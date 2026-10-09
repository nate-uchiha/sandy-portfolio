"use client";

import { useState } from "react";

const navItems = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Expertise",
    href: "#expertise",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Gallery",
    href: "#gallery",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="navbar__inner">
        <a href="#top" className="navbar__logo">
          SANDESH TEMBHURKAR
        </a>

        <div className="navbar__links">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="navbar__link"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="navbar__cta">
          Let&apos;s Talk ↗
        </a>

        <button
          type="button"
          className="navbar__mobile-button"
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>

      <div
        className={`navbar__mobile-menu ${
          menuOpen
            ? "navbar__mobile-menu--visible"
            : "navbar__mobile-menu--hidden"
        }`}
      >
        <div>
          <p className="mb-8 text-[9px] uppercase tracking-[0.3em] text-[#f7c948]">
            Navigation
          </p>

          <div className="navbar__mobile-links">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="navbar__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                <span>
                  0{index + 1}
                </span>

                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
            Assistant Event Manager
          </p>

          <a
            href="#contact"
            className="mt-4 inline-flex text-sm text-[#f7c948]"
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s Talk ↗
          </a>
        </div>
      </div>
    </header>
  );
}