"use client";
import Image from "next/image";
/* ──────────────────────────────────────────────────────────
   PROJECTS — Sneha Rudani's Django & Python Projects
   ────────────────────────────────────────────────────────── */

const projects = [
  {
    title: "Wiwi Events — Event Management System",
    summary:
      "High-performance Event Management Platform built with Django and REST Framework. Features QR-code digital ticket passes, modern dark glassmorphism UI, and host moderation workflow.",
    tags: ["Django", "REST API", "SQLite", "Render"],
    image: "/wiwi-events.webp", // Add your screenshot here
    github: "https://github.com/Nehaa2509/Event_Management_System.git",
    demo: "https://wiwievents.onrender.com",
    accent: "#6366F1",
    gradient:
      "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(99,102,241,0.06), #0D0914)",
    pattern: "radial",
    featured: true,
  },
  {
    title: "VitalBook — Hospital Appointment System",
    summary:
      "Production Django app featuring OTP email registration, role-based dashboards (Patient/Doctor/Admin), Cashfree UPI payments, downloadable PDF prescriptions via ReportLab, and Chart.js analytics. Deployed on Render.",
    tags: ["Django", "SQLite", "REST API", "ReportLab", "Cashfree UPI", "Render"],
    image: "/vitalbook.webp",
    github: "https://github.com/Nehaa2509/VitalBook",
    demo: "https://vitalbook-1.onrender.com/",
    accent: "#F97316",
    gradient:
      "linear-gradient(135deg, rgba(249,115,22,0.25), rgba(249,115,22,0.06), #0D0914)",
    pattern: "grid",
    featured: true,
  },
  {
    title: "Gemini Science Voice Chatbot",
    summary:
      "Conversational AI bot integrating Google Gemini API with speech recognition and text-to-speech for real-time scientific Q&A across 15+ query categories with <2% failure rate.",
    tags: ["Python", "Gemini API", "Speech Recognition", "Text-to-Speech"],
    github: "https://github.com/Nehaa2509/Gemini-Science-Voice-Chatbot",
    accent: "#FBBF24",
    gradient:
      "linear-gradient(135deg, rgba(251,191,36,0.2), rgba(251,191,36,0.05), #0D0914)",
    pattern: "grid",
    featured: true,
  },
  {
    title: "MyAwesomeCart — Django E-Commerce Portal",
    summary:
      "Full-stack Django e-commerce platform with dynamic product catalog, real-time cart state management, checkout pipeline, order tracking system, product filtering, and admin inventory control.",
    tags: ["Django", "Python", "SQLite", "JavaScript", "Cart API"],
    github: "https://github.com/Nehaa2509",
    accent: "#C084FC",
    gradient:
      "linear-gradient(135deg, rgba(192,132,252,0.25), rgba(192,132,252,0.06), #0D0914)",
    pattern: "radial",
    featured: false,
  },
  {
    title: "TextUtils — Django Text Processing App",
    summary:
      "Fast Django web application for real-time text analysis, punctuation removal, uppercase conversion, character counting, and whitespace optimization.",
    tags: ["Django", "Python", "HTML5/CSS3", "Text Analysis"],
    github: "https://github.com/Nehaa2509",
    accent: "#F472B6",
    gradient:
      "linear-gradient(135deg, rgba(244,114,182,0.2), rgba(244,114,182,0.05), #0D0914)",
    pattern: "bars",
    featured: false,
  },
  {
    title: "ML Model Benchmark Suite",
    summary:
      "Compares machine learning algorithms (KNN, Logistic Regression, Random Forest) across benchmark datasets for performance evaluation and metrics comparison.",
    tags: ["Python", "Scikit-learn", "Pandas"],
    github: "https://github.com/Nehaa2509",
    accent: "#22D3EE",
    gradient:
      "linear-gradient(135deg, rgba(34,211,238,0.2), rgba(34,211,238,0.05), #0D0914)",
    pattern: "bars",
    featured: false,
  },
];

function GridPattern({ accent }) {
  return (
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: `linear-gradient(${accent}40 1px, transparent 1px), linear-gradient(90deg, ${accent}40 1px, transparent 1px)`,
        backgroundSize: "36px 36px",
      }}
      aria-hidden="true"
    />
  );
}

function RadialPattern({ accent }) {
  return (
    <div
      className="absolute inset-0 opacity-30"
      style={{
        background: `radial-gradient(circle at 35% 55%, ${accent}55 0%, transparent 55%)`,
      }}
      aria-hidden="true"
    />
  );
}

function BarsPattern({ accent }) {
  return (
    <div
      className="absolute inset-0 opacity-25"
      style={{
        backgroundImage: `repeating-linear-gradient(45deg, ${accent}22 0px, ${accent}22 1px, transparent 1px, transparent 18px)`,
      }}
      aria-hidden="true"
    />
  );
}

function ProjectIcon({ accent }) {
  return (
    <div
      className="relative z-10 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform duration-400"
      style={{
        width: 60,
        height: 60,
        background: `${accent}20`,
        border: `1px solid ${accent}40`,
      }}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke={accent}
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
        />
      </svg>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section header */}
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <p
              className="text-xs tracking-widest uppercase font-semibold"
              style={{ color: "#EC4899" }}
            >
              Featured Django &amp; Python Projects
            </p>
            <h2
              className="font-bold leading-tight text-white"
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
              }}
            >
              Django applications &amp; systems.
            </h2>
          </div>
          <p
            className="max-w-md leading-relaxed text-sm"
            style={{ color: "#9D8BAA" }}
          >
            Production-deployed full-stack Django web apps, REST Framework APIs, AI voice chatbots, and backend software systems.
          </p>
        </div>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="card-hover glass rounded-2xl overflow-hidden group reveal flex flex-col justify-between"
              style={{
                transitionDelay: `${i * 0.08}s`,
                borderColor: "rgba(45,31,63,0.6)",
                cursor: "pointer",
              }}
            >
              {/* Thumbnail area */}
              <div
                className="relative overflow-hidden flex items-center justify-center"
                style={{ height: 165, background: project.gradient }}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <>
                    {project.pattern === "grid" && (
                      <GridPattern accent={project.accent} />
                    )}
                    {project.pattern === "radial" && (
                      <RadialPattern accent={project.accent} />
                    )}
                    {project.pattern === "bars" && (
                      <BarsPattern accent={project.accent} />
                    )}
                    <ProjectIcon accent={project.accent} />
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3
                      className="font-semibold text-white text-base leading-snug group-hover:transition-colors duration-200"
                      style={{
                        fontFamily: "var(--font-syne), sans-serif",
                      }}
                    >
                      <span className="group-hover:text-pink-400 transition-colors duration-200">
                        {project.title}
                      </span>
                    </h3>
                    {/* External link arrow */}
                    <a
                      href={project.demo || project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} ${project.demo ? "Live Demo" : "on GitHub"}`}
                      className="flex-shrink-0 flex items-center justify-center rounded-full border transition-all duration-200 hover:bg-pink-500/10 hover:border-pink-500/30"
                      style={{
                        width: 34,
                        height: 34,
                        borderColor: "rgba(255,255,255,0.1)",
                        color: project.demo ? "#EC4899" : "#9D8BAA",
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        aria-hidden="true"
                      >
                        <path d="M4 12L12 4M12 4H7M12 4v5" />
                      </svg>
                    </a>
                  </div>

                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "#9D8BAA" }}
                  >
                    {project.summary}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/5">
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full transition-all duration-200 hover:opacity-90"
                        style={{
                          background: "rgba(236,72,153,0.15)",
                          color: "#EC4899",
                          border: "1px solid rgba(236,72,153,0.35)",
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          <path d="M2 12h20" />
                        </svg>
                        Live Demo
                      </a>
                    ) : (
                      <div />
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-200 hover:underline"
                      style={{ color: "#EC4899" }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
