"use client";

import { useEffect, useRef, useState } from "react";

/* ──────────────────────────────────────────────────────────
   NAV — Sticky glassmorphism navbar with scroll-aware bg
   ────────────────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between transition-all duration-300"
      style={{
        background: scrolled ? "rgba(13,9,20,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(45,31,63,0.5)"
          : "1px solid transparent",
      }}
    >
      {/* Logo */}
      <a
        href="#"
        className="text-xl font-bold tracking-tight"
        style={{ fontFamily: "var(--font-syne), sans-serif", color: "#FDF2F8" }}
      >
        Sneha<span style={{ color: "#EC4899" }}>.</span>
      </a>

      {/* Desktop nav links */}
      <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav-link text-sm hover:text-white transition-colors"
            style={{ color: "#9D8BAA" }}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* CTA */}
      <a
        href="https://github.com/Nehaa2509"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-colors duration-200"
        style={{
          borderColor: "rgba(236,72,153,0.4)",
          color: "#EC4899",
        }}
      >
        {/* GitHub icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
        GitHub
      </a>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span
          className="block w-6 h-0.5 rounded transition-transform duration-300"
          style={{
            background: "#EC4899",
            transform: mobileOpen ? "rotate(45deg) translateY(4px)" : "none",
          }}
        />
        <span
          className="block w-6 h-0.5 rounded transition-opacity duration-300"
          style={{
            background: "#EC4899",
            opacity: mobileOpen ? 0 : 1,
          }}
        />
        <span
          className="block w-6 h-0.5 rounded transition-transform duration-300"
          style={{
            background: "#EC4899",
            transform: mobileOpen
              ? "rotate(-45deg) translateY(-4px)"
              : "none",
          }}
        />
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="absolute top-full left-0 right-0 glass px-6 py-6 flex flex-col gap-4 md:hidden"
          style={{ borderTop: "1px solid rgba(45,31,63,0.5)" }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium"
              style={{ color: "#9D8BAA" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/Nehaa2509"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium"
            style={{ color: "#EC4899" }}
          >
            GitHub →
          </a>
        </div>
      )}
    </header>
  );
}
