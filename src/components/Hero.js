"use client";

import Image from "next/image";

/* ──────────────────────────────────────────────────────────
   HERO — Asymmetric two-column hero with avatar + CTAs
   ────────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-20 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* ── Ambient gradient blobs ──────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute rounded-full blur-3xl animate-float"
          style={{
            top: "-8%",
            right: "-6%",
            width: 650,
            height: 650,
            background:
              "radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full blur-3xl animate-float"
          style={{
            bottom: "-12%",
            left: "-8%",
            width: 500,
            height: 500,
            background:
              "radial-gradient(circle, rgba(192,132,252,0.12) 0%, transparent 70%)",
            animationDelay: "2s",
          }}
        />
        {/* Horizontal divider */}
        <div
          className="absolute left-0 right-0 h-px opacity-50"
          style={{
            top: "50%",
            background:
              "linear-gradient(90deg, transparent, rgba(236,72,153,0.2), transparent)",
          }}
        />
      </div>

      {/* ── Grid ────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        {/* Left column (3/5) */}
        <div className="lg:col-span-3 space-y-7">
          {/* Badge */}
          <div className="opacity-0 animate-fade-in">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
              style={{
                background: "rgba(236,72,153,0.12)",
                border: "1px solid rgba(236,72,153,0.3)",
                color: "#EC4899",
              }}
            >
              <span
                className="inline-block rounded-full animate-pulse"
                style={{
                  width: 6,
                  height: 6,
                  background: "#EC4899",
                }}
              />
              PYTHON &amp; DJANGO DEVELOPER | BACKEND ENGINEER
            </span>
          </div>

          {/* Headline */}
          <h1 style={{ fontFamily: "var(--font-syne), sans-serif" }}>
            <span
              className="opacity-0 animate-fade-up block font-extrabold text-white"
              style={{
                fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                lineHeight: 1.08,
              }}
            >
              Hi, I&apos;m Sneha Rudani 👋
            </span>
          </h1>

          {/* Description */}
          <p
            className="opacity-0 animate-fade-up-d1 max-w-xl leading-relaxed font-light"
            style={{
              color: "#9D8BAA",
              fontSize: "1.1rem",
              fontFamily: "var(--font-outfit), sans-serif",
            }}
          >
            B.E. Information Technology graduate (CGPA 8.61) with hands-on backend
            development experience in Python, Django REST Framework, JWT authentication, and ML models.
          </p>

          {/* CTA Buttons */}
          <div className="opacity-0 animate-fade-up-d2 flex flex-wrap items-center gap-4">
            {/* Primary: View Projects */}
            <a
              href="#projects"
              className="btn-mag inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide text-white animate-glow-pulse"
              style={{ background: "#EC4899" }}
            >
              View Projects
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>

            {/* Secondary: GitHub Profile */}
            <a
              href="https://github.com/Nehaa2509"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-mag inline-flex items-center gap-2 px-7 py-3.5 rounded-full border text-sm font-medium transition-colors duration-200"
              style={{
                borderColor: "rgba(236,72,153,0.35)",
                color: "#EC4899",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub Profile
            </a>
          </div>
        </div>

        {/* Right column (2/5) — Large Featured Photo Card */}
        <div className="lg:col-span-2 flex items-center justify-center">
          <div className="relative w-full max-w-[380px] sm:max-w-[420px] opacity-0 animate-fade-up-d3">
            {/* Background Ambient Glow */}
            <div
              className="absolute inset-0 rounded-3xl blur-3xl animate-float"
              style={{
                background: "rgba(236,72,153,0.25)",
                transform: "scale(1.1)",
                animationDelay: "1s",
              }}
              aria-hidden="true"
            />

            {/* Large Photo Frame Container */}
            <div
              className="relative rounded-3xl overflow-hidden glass border-2 card-hover"
              style={{
                borderColor: "rgba(236,72,153,0.5)",
                boxShadow: "0 25px 50px -12px rgba(236,72,153,0.3)",
              }}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/sneha_original.jpg"
                  alt="Sneha Rudani — Python & Django Developer | Backend Engineer"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  priority
                />
                {/* Gradient Overlay at bottom for seamless blending */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(13,9,20,0.85) 0%, rgba(13,9,20,0.1) 40%, transparent 100%)",
                  }}
                />
              </div>

              {/* Floating Tag inside the photo card */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between glass px-4 py-3 rounded-2xl border border-white/10 backdrop-blur-md">
                <span className="text-xs font-semibold text-white/90">Status</span>
                <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
        aria-hidden="true"
      >
        <span
          className="text-xs tracking-widest uppercase"
          style={{ color: "#9D8BAA" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-12"
          style={{
            background:
              "linear-gradient(to bottom, rgba(236,72,153,0.5), transparent)",
          }}
        />
      </div>
    </section>
  );
}
