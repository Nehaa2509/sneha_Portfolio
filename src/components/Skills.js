"use client";

/* ──────────────────────────────────────────────────────────
   SKILLS & EXPERIENCE — Bento Grid, Detailed Internships & Certifications
   ────────────────────────────────────────────────────────── */

const skillGroups = [
  {
    title: "Programming & Languages",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    iconBg: "rgba(236,72,153,0.15)",
    iconBorder: "rgba(236,72,153,0.25)",
    iconColor: "#EC4899",
    skills: ["Python", "Django", "Django REST (DRF)", "JavaScript", "HTML5", "CSS3", "SQL", "SQLite"],
    span: "col-span-2 row-span-2",
    featured: true,
  },
  {
    title: "AI & Machine Learning (Secondary)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    iconBg: "rgba(192,132,252,0.15)",
    iconBorder: "rgba(192,132,252,0.25)",
    iconColor: "#C084FC",
    skills: ["Scikit-learn", "Pandas", "NumPy", "KNN", "Decision Trees", "Random Forest", "NLP", "Gemini API"],
    span: "col-span-2",
    featured: false,
  },
  {
    title: "Tools & Deployment",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.42 5.42a2.12 2.12 0 01-3-3l5.42-5.42m4.58-4.58l5.42-5.42a2.12 2.12 0 013 3l-5.42 5.42M7.5 7.5l9 9" />
      </svg>
    ),
    iconBg: "rgba(34,211,238,0.15)",
    iconBorder: "rgba(34,211,238,0.25)",
    iconColor: "#22D3EE",
    skills: ["Git", "GitHub", "Render", "JWT Auth", "REST APIs", "ReportLab", "Chart.js"],
    span: "",
    featured: false,
  },
  {
    title: "Education",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147L12 14.6l7.74-4.453a.75.75 0 000-1.294L12 4.4 4.26 8.853a.75.75 0 000 1.294zM4.5 13.063v3.187a.75.75 0 00.384.654l6.75 3.75a.75.75 0 00.732 0l6.75-3.75a.75.75 0 00.384-.654v-3.187" />
      </svg>
    ),
    iconBg: "rgba(251,191,36,0.15)",
    iconBorder: "rgba(251,191,36,0.25)",
    iconColor: "#FBBF24",
    skills: ["B.E. IT", "CGPA: 8.61", "GTU"],
    span: "",
    featured: false,
  },
];

const experiences = [
  {
    role: "Backend Developer Intern",
    company: "QSkill",
    location: "Remote",
    period: "June – July 2026",
    badge: "Back-End Certified",
    bullets: [
      "Built Django REST Framework APIs with JWT authentication for user management and data operations.",
      "Tested REST API endpoints and validated backend logic, identifying and resolving defects to ensure reliable data flow.",
      "Designed RESTful endpoints with secure token-based access control across multiple modules.",
    ],
  },
  {
    role: "Python Developer Intern",
    company: "Software Education",
    location: "Nikol, Ahmedabad (Part-time, On-site)",
    period: "Jan – Apr 2026",
    badge: "Grade A Certified",
    bullets: [
      "Developed backend logic and data-handling scripts in Python using OOP principles.",
      "Optimised script execution efficiency and documented technical workflows for handoff.",
    ],
  },
  {
    role: "AI & Machine Learning Intern",
    company: "Elevate Labs",
    location: "Bengaluru (Part-time, Remote)",
    period: "Jan – Apr 2026",
    badge: "MSME & Skill India Certified",
    bullets: [
      "Self-paced, task-based remote internship run concurrently with an on-site evening internship.",
      "MSME Ministry of India recognised | Skill India certified.",
      "Executed end-to-end ML workflows — data preprocessing, feature engineering, model training, and evaluation — using Scikit-learn, Pandas, and NumPy.",
      "Improved model accuracy through cross-validation and hyperparameter tuning; documented reproducible experiment pipelines.",
    ],
  },
];

const certifications = [
  {
    title: "Elevate Labs AI & ML Certificate",
    issuer: "MSME Govt. of India & Skill India",
    date: "April 2026",
    credentialId: "MSME / Skill India Verified",
    url: "https://linkedin.com/in/sneha-rudani",
  },
  {
    title: "Microsoft Data & AI Training",
    issuer: "CloudThat — Azure AI & Data Pipelines",
    date: "July 2025",
    credentialId: "Cert No: CT/25/945742",
    url: "https://linkedin.com/in/sneha-rudani",
  },
  {
    title: "AI & Problem-Solving Certificate",
    issuer: "CSRBOX & GTU Summer Program",
    date: "July 2025",
    credentialId: "ID: CSRBOX2025AI1060",
    url: "https://linkedin.com/in/sneha-rudani",
  },
  {
    title: "Python Programming Certificate (Grade A)",
    issuer: "Software Education, Nikol",
    date: "Feb 2026",
    credentialId: "Govt Reg: GJ01D0040370",
    url: "https://linkedin.com/in/sneha-rudani",
  },
  {
    title: "QSkill Virtual Internship Certificate",
    issuer: "Back-End Development Certificate",
    date: "July 2026",
    credentialId: "ID: qspybknd260601",
    url: "https://linkedin.com/in/sneha-rudani",
  },
];

export default function Skills() {
  return (
    <section id="about" className="py-28 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section header */}
        <div className="reveal space-y-3">
          <p
            className="text-xs tracking-widest uppercase font-semibold"
            style={{ color: "#EC4899" }}
          >
            Technical Skillset &amp; Experience
          </p>
          <h2
            className="font-bold leading-tight text-white"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
            }}
          >
            Python &amp; Django Backend Architecture.
          </h2>
          <p
            className="max-w-lg leading-relaxed text-sm"
            style={{ color: "#9D8BAA" }}
          >
            Specialized in designing robust RESTful APIs, database schema optimization, JWT authentication, and backend infrastructure with Python &amp; Django Framework.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-min">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className={`bento-cell glass rounded-2xl reveal ${group.span} ${
                group.featured ? "p-7 space-y-6" : "p-5 space-y-3"
              }`}
              style={{
                transitionDelay: `${i * 0.08}s`,
                borderColor: "rgba(45,31,63,0.6)",
              }}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center rounded-xl border"
                style={{
                  width: group.featured ? 48 : 40,
                  height: group.featured ? 48 : 40,
                  background: group.iconBg,
                  borderColor: group.iconBorder,
                  color: group.iconColor,
                }}
              >
                {group.icon}
              </div>

              {/* Title */}
              <h3
                className={`font-semibold text-white ${
                  group.featured ? "text-2xl" : "text-base"
                }`}
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                {group.title}
              </h3>

              {/* Description for featured cell */}
              {group.featured && (
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#9D8BAA" }}
                >
                  Core stack used daily to build production REST APIs, Django apps,
                  and data processing scripts.
                </p>
              )}

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

          {/* Education Quote cell */}
          <div
            className="bento-cell glass rounded-2xl p-5 col-span-2 reveal flex items-center gap-5"
            style={{
              transitionDelay: "0.35s",
              borderColor: "rgba(236,72,153,0.2)",
              background: "rgba(236,72,153,0.03)",
            }}
          >
            <div
              className="flex-shrink-0 flex items-center justify-center rounded-xl"
              style={{
                width: 40,
                height: 40,
                background: "rgba(236,72,153,0.12)",
                border: "1px solid rgba(236,72,153,0.25)",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#EC4899"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3"
                />
              </svg>
            </div>
            <div className="space-y-1">
              <p
                className="text-sm font-medium leading-relaxed"
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  color: "#EC4899",
                }}
              >
                B.E. Information Technology — CGPA 8.61
              </p>
              <p className="text-xs" style={{ color: "#9D8BAA" }}>
                Apollo Institute of Engineering &amp; Technology, Ahmedabad (GTU)
              </p>
            </div>
          </div>
        </div>

        {/* Experience & Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
          {/* Detailed Internships Timeline */}
          <div className="glass rounded-2xl p-7 space-y-6 reveal border border-white/10">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-pink-500 animate-pulse" />
                <h3
                  className="font-bold text-white text-xl"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}
                >
                  Internship Experience
                </h3>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20">
                3 Roles Completed
              </span>
            </div>

            <div className="space-y-8">
              {experiences.map((exp) => (
                <div
                  key={exp.role + exp.company}
                  className="space-y-3 pl-4 border-l-2 border-pink-500/40 relative"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap justify-between items-baseline gap-2">
                      <h4 className="font-semibold text-white text-base">
                        {exp.role}{" "}
                        <span style={{ color: "#EC4899" }}>@ {exp.company}</span>
                      </h4>
                      <span
                        className="text-xs font-mono"
                        style={{ color: "#9D8BAA" }}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs" style={{ color: "#9D8BAA" }}>
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span className="text-purple-300 font-mono">{exp.badge}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 pt-1">
                    {exp.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs leading-relaxed"
                        style={{ color: "#9D8BAA" }}
                      >
                        <span
                          className="shrink-0 w-1.5 h-1.5 rounded-full mt-1.5"
                          style={{ background: "#EC4899" }}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & LinkedIn Verification List */}
          <div className="glass rounded-2xl p-7 space-y-6 reveal border border-white/10 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-purple-400 animate-pulse" />
                  <h3
                    className="font-bold text-white text-xl"
                    style={{ fontFamily: "var(--font-syne), sans-serif" }}
                  >
                    Certifications &amp; Credentials
                  </h3>
                </div>
                {/* LinkedIn Badge */}
                <a
                  href="https://linkedin.com/in/sneha-rudani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-purple-400/40 text-purple-300 hover:bg-purple-500/10 transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>

              <div className="space-y-4">
                {certifications.map((cert) => (
                  <a
                    key={cert.title}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-3.5 rounded-xl border transition-all duration-200 hover:border-pink-500/50 hover:bg-pink-500/5"
                    style={{
                      background: "rgba(13,9,20,0.5)",
                      borderColor: "rgba(45,31,63,0.5)",
                    }}
                  >
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-semibold text-white text-xs group-hover:text-pink-400 transition-colors">
                        {cert.title}
                      </h4>
                      <span className="text-[0.65rem] font-mono shrink-0 px-2 py-0.5 rounded bg-white/5 text-purple-300">
                        {cert.date}
                      </span>
                    </div>
                    <p className="text-[0.72rem] mt-1" style={{ color: "#9D8BAA" }}>
                      {cert.issuer}
                    </p>
                    <div className="flex items-center justify-between gap-2 mt-2 pt-1.5 border-t border-white/5 text-[0.68rem]">
                      <span className="text-pink-400 font-mono">{cert.credentialId}</span>
                      <span className="text-purple-300 group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                        Verify on LinkedIn →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Link to LinkedIn Licenses & Certifications */}
            <a
              href="https://linkedin.com/in/sneha-rudani"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-mag mt-4 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border border-purple-400/40 text-purple-300 hover:bg-purple-500/10 transition-colors"
            >
              View Full Licenses &amp; Certifications on LinkedIn
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 12L12 4M12 4H7M12 4v5"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
