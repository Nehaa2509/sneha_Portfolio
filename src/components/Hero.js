"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* Register at module level — safe because "use client" prevents SSR execution */
gsap.registerPlugin(ScrollTrigger);

/* ── Lazy-load the 3D canvas (WebGL can't run server-side) ─────────── */
const Hero3D = dynamic(() => import("./Hero3D"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full h-full rounded-3xl"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(236,72,153,0.18) 0%, rgba(168,85,247,0.08) 50%, transparent 70%)",
      }}
    />
  ),
});

/* ── Copy data ────────────────────────────────────────────────────── */
const TAGLINES = [
  "PYTHON & DJANGO DEVELOPER",
  "REST API & BACKEND ARCHITECT",
  "ML-INTEGRATED SYSTEMS BUILDER",
];

const SUB_LINES = [
  "Backend Engineer",
  "API Architect",
  "ML-Curious Developer",
];

/* ──────────────────────────────────────────────────────────────────────
   HERO — GSAP ScrollTrigger pin + scrub with layered 3D reveal
   ────────────────────────────────────────────────────────────────────── */
export default function Hero() {
  /* ── Refs ──────────────────────────────────────────────────────── */
  const sectionRef = useRef(null);

  /* Tagline badge nodes — populated via callback refs */
  const taglineRefs = useRef([]);
  const subLineRefs = useRef([]);

  /* Right column visuals */
  const photoCardRef = useRef(null);
  const canvas3DRef = useRef(null);

  /* Scroll indicator */
  const scrollIndicatorRef = useRef(null);

  /* ── GSAP setup ─────────────────────────────────────────────────── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const [t0, t1, t2] = taglineRefs.current;
      const [s0, s1, s2] = subLineRefs.current;

      /* ── Initial states ────────────────────────────────────────── */
      gsap.set([t1, t2], { opacity: 0, y: 18 });
      gsap.set([s1, s2], { opacity: 0, y: 18 });
      gsap.set(canvas3DRef.current, { opacity: 0.22 });

      /* ── Main scrubbed timeline ─────────────────────────────────
         Duration is in arbitrary "units" — ScrollTrigger maps them
         linearly to scroll progress across the section's overflow.
         ─────────────────────────────────────────────────────────── */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,         // slight smoothing for buttery feel
        },
      });

      /* Scroll indicator fades out very early */
      tl.to(scrollIndicatorRef.current, { opacity: 0, duration: 0.8 }, 0);

      /* ── Phase A (t=3→5): tagline0 → tagline1 ────────────────── */
      tl.to([t0, s0], { opacity: 0, y: -16, duration: 1.2 }, 3);
      tl.to([t1, s1], { opacity: 1, y: 0,   duration: 1.2 }, 3.8);

      /* ── Phase B (t=6.5→8.5): tagline1 → tagline2 ───────────── */
      tl.to([t1, s1], { opacity: 0, y: -16, duration: 1.2 }, 6.5);
      tl.to([t2, s2], { opacity: 1, y: 0,   duration: 1.2 }, 7.0);

      /* ── Photo → 3D cross-fade (t=4→7) ─────────────────────── */
      tl.to(photoCardRef.current, { opacity: 0, duration: 2.5 }, 4);
      tl.to(canvas3DRef.current,  { opacity: 1, duration: 2.5 }, 4.5);

      /* Extend timeline so the final state "holds" visually */
      tl.to({}, { duration: 1.5 });

      /* Refresh after all triggers are set up */
      ScrollTrigger.refresh();
    }, sectionRef); /* scope to section — ctx.revert() cleans everything */

    return () => ctx.revert();
  }, []);

  /* ── JSX ────────────────────────────────────────────────────────── */
  return (
    /*
     * Tall container gives the sticky panel its scroll range.
     * h-[180vh] on mobile (tighter cycle), h-[250vh] on md+.
     */
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-[180vh] md:h-[250vh]"
    >
      {/* ── Sticky viewport panel ─────────────────────────────────── */}
      <div className="sticky top-0 h-screen flex items-center pt-24 pb-20 px-6 md:px-16 lg:px-24 overflow-hidden">

        {/* ── Ambient gradient blobs ──────────────────────────────── */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute rounded-full blur-3xl animate-float"
            style={{
              top: "-8%", right: "-6%", width: 650, height: 650,
              background: "radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute rounded-full blur-3xl animate-float"
            style={{
              bottom: "-12%", left: "-8%", width: 500, height: 500,
              background: "radial-gradient(circle, rgba(192,132,252,0.12) 0%, transparent 70%)",
              animationDelay: "2s",
            }}
          />
          <div
            className="absolute left-0 right-0 h-px opacity-50"
            style={{
              top: "50%",
              background: "linear-gradient(90deg, transparent, rgba(236,72,153,0.2), transparent)",
            }}
          />
        </div>

        {/* ── Main grid ───────────────────────────────────────────── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">

          {/* ── Left column (3/5) ───────────────────────────────── */}
          <div className="lg:col-span-3 space-y-7">

            {/* Badge — stacked taglines, GSAP cross-fades between them */}
            <div className="opacity-0 animate-fade-in">
              <div className="relative h-8 flex items-center">
                {TAGLINES.map((label, i) => (
                  <span
                    key={label}
                    ref={(el) => { taglineRefs.current[i] = el; }}
                    className="absolute inset-0 flex items-center"
                    aria-hidden={i !== 0 ? "true" : undefined}
                  >
                    <span
                      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap"
                      style={{
                        background: "rgba(236,72,153,0.12)",
                        border: "1px solid rgba(236,72,153,0.3)",
                        color: "#EC4899",
                      }}
                    >
                      <span
                        className="inline-block rounded-full animate-pulse shrink-0"
                        style={{ width: 6, height: 6, background: "#EC4899" }}
                      />
                      {label}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            {/* Headline */}
            <h1 style={{ fontFamily: "var(--font-syne), sans-serif" }}>
              <span
                className="opacity-0 animate-fade-up block font-extrabold text-white"
                style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)", lineHeight: 1.08 }}
              >
                Hi, I&apos;m Sneha Rudani 👋
              </span>

              {/* Scroll-driven secondary line — GSAP cross-fades between spans */}
              <span
                className="block opacity-0 animate-fade-up relative"
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                  lineHeight: 1.4,
                  fontFamily: "var(--font-syne), sans-serif",
                  animationDelay: "0.1s",
                  minHeight: "1.6em",
                }}
              >
                {SUB_LINES.map((line, i) => (
                  <span
                    key={line}
                    ref={(el) => { subLineRefs.current[i] = el; }}
                    style={{
                      position: "absolute", left: 0, top: 0,
                      background: "linear-gradient(135deg, #EC4899 0%, #A855F7 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                    aria-hidden={i !== 0 ? "true" : undefined}
                  >
                    {line}
                  </span>
                ))}
                {/* Invisible spacer keeps the block at the right height */}
                <span aria-hidden="true" className="invisible select-none">
                  {SUB_LINES[0]}
                </span>
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
              <a
                href="#projects"
                className="btn-mag inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide text-white animate-glow-pulse"
                style={{ background: "#EC4899" }}
              >
                View Projects
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>

              <a
                href="https://github.com/Nehaa2509"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-mag inline-flex items-center gap-2 px-7 py-3.5 rounded-full border text-sm font-medium transition-colors duration-200"
                style={{ borderColor: "rgba(236,72,153,0.35)", color: "#EC4899" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub Profile
              </a>
            </div>
          </div>

          {/* ── Right column (2/5) — layered photo + 3D canvas ─────── */}
          <div className="lg:col-span-2 flex items-center justify-center relative min-h-[420px]">

            {/* 3D Canvas — absolute, behind photo card, GSAP fades it in */}
            <div
              ref={canvas3DRef}
              className="absolute inset-0 flex items-center justify-center"
              style={{ opacity: 0.22 }}
              aria-hidden="true"
            >
              <Hero3D />
            </div>

            {/* Photo card — z-10, GSAP fades it out mid-scroll */}
            <div
              ref={photoCardRef}
              className="relative z-10 w-full max-w-[380px] sm:max-w-[420px] opacity-0 animate-fade-up-d3"
            >
              {/* Ambient glow behind the card */}
              <div
                className="absolute inset-0 rounded-3xl blur-3xl animate-float"
                style={{
                  background: "rgba(236,72,153,0.25)",
                  transform: "scale(1.1)",
                  animationDelay: "1s",
                }}
                aria-hidden="true"
              />

              {/* Photo frame */}
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
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    style={{ objectPosition: "center 15%" }}
                    priority
                  />
                  {/* Dark vignette — tones down white background on all edges */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: [
                        "linear-gradient(to top,    rgba(13,9,20,0.92) 0%,   rgba(13,9,20,0.3) 35%, transparent 60%)",
                        "linear-gradient(to bottom, rgba(13,9,20,0.55) 0%,   transparent 30%)",
                        "linear-gradient(to right,  rgba(13,9,20,0.4)  0%,   transparent 25%)",
                        "linear-gradient(to left,   rgba(13,9,20,0.4)  0%,   transparent 25%)",
                      ].join(", "),
                    }}
                  />
                  {/* Colour tint overlay — warms white areas into the pink/purple palette */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(135deg, rgba(236,72,153,0.08) 0%, rgba(168,85,247,0.06) 100%)",
                      mixBlendMode: "multiply",
                    }}
                  />
                </div>

                {/* Floating status tag */}
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

        {/* ── Scroll indicator — GSAP fades this out early ─────────── */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
          aria-hidden="true"
        >
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "#9D8BAA" }}
          >
            Scroll to explore
          </span>
          <div
            className="w-px h-12"
            style={{
              background: "linear-gradient(to bottom, rgba(236,72,153,0.5), transparent)",
            }}
          />
        </div>

      </div>
    </section>
  );
}
