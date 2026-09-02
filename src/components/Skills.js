"use client";

import { useState } from "react";
import Image from "next/image";

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
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    iconBg: "rgba(192,132,252,0.15)",
    iconBorder: "rgba(192,132,252,0.25)",
    iconColor: "#C084FC",
    skills: ["Google Gemini API", "Scikit-Learn", "Machine Learning (KNN, Random Forest)", "Pandas", "NumPy", "Text-to-Speech / STT"],
    span: "col-span-2",
  },
  {
    title: "Backend & Systems Architecture",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.75 5.1a1.5 1.5 0 011.2-.6h10.1a1.5 1.5 0 011.2.6l1.6 3.45a4.5 4.5 0 01.9 2.7" />
      </svg>
    ),
    iconBg: "rgba(99,102,241,0.15)",
    iconBorder: "rgba(99,102,241,0.25)",
    iconColor: "#6366F1",
    skills: ["RESTful API Design", "JWT Authentication", "Role-Based Access (RBAC)", "Database ORM", "Payment Gateways (Cashfree, Razorpay)", "ReportLab PDF Engine"],
    span: "col-span-2",
  },
  {
    title: "Tools & Deployment",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.07a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091.458.118.93.078 1.385" />
      </svg>
    ),
    iconBg: "rgba(244,114,182,0.15)",
    iconBorder: "rgba(244,114,182,0.25)",
    iconColor: "#F472B6",
    skills: ["Git & GitHub", "VS Code", "Postman", "Render Cloud Hosting", "Gunicorn / WSGI", "Virtualenv"],
    span: "col-span-2",
  },
];

const experiences = [
  {
    role: "Python & Django Developer Intern",
    company: "Wiwi Tech Pvt Ltd",
    period: "Jan 2026 – Present",
    location: "Ahmedabad, India",
    badge: "Active Internship",
    bullets: [
      "Engineered backend REST APIs for the Wiwi Events platform using Django REST Framework (DRF), structuring database ORM models and schema migrations.",
      "Implemented JWT authentication, QR-code digital ticket pass verification, and host approval moderation workflows.",
      "Collaborated on frontend UI integration using glassmorphic dark-theme design patterns.",
    ],
  },
  {
    role: "Python Developer Trainee",
    company: "Software Education",
    period: "Jan 2026 – Apr 2026",
    location: "Nikol, Ahmedabad (On-site)",
    badge: "Certified Internship",
    bullets: [
      "Delivered backend logic and data-handling scripts in Python using OOP design.",
      "Optimized script execution efficiency and documented workflows for team handoff.",
      "Successfully completed full 3-month on-site development training with verified certificate.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "CloudThat Technologies",
    period: "June 2025 – July 2025",
    location: "Remote",
    badge: "Microsoft Data & AI Program",
    bullets: [
      "Completed 78 hours of skill-based training under the Microsoft Data & AI Internship Program 2025.",
      "Conducted exploratory data analysis (EDA), data cleaning, and preprocessing with Pandas & NumPy.",
      "Trained and evaluated classification models (Logistic Regression, KNN, Random Forest) for predictive metrics comparison.",
    ],
  },
  {
    role: "AI Intern",
    company: "CSRBOX Foundation & GTU",
    period: "July 2025",
    location: "Ahmedabad, India",
    badge: "Summer GTU Program",
    bullets: [
      "Engaged in hands-on AI problem-solving workshops and machine learning model training as part of the Gujarat Technological University summer initiative.",
      "Delivered a real-world applied AI project prototype with structured documentation and metrics.",
    ],
  },
];

const certifications = [
  {
    title: "Python Developer Internship Certificate",
    issuer: "Software Education, Nikol — Ahmedabad",
    date: "April 2026",
    credentialId: "Software Education Verified",
    description: "Certificate of Internship in recognition of outstanding efforts as Python Developer (Jan 1, 2026 to Apr 1, 2026)",
    image: "/certificates/software-education-internship.png",
    url: "https://linkedin.com/in/sneha-rudani",
    badge: "Internship Letter",
  },
  {
    title: "Python Programming Certificate (Grade A)",
    issuer: "Software Education, Nikol — Ahmedabad",
    date: "28 Feb 2026",
    credentialId: "Govt Reg: GJ01D0040370 | Sn: 262640",
    description: "Completed 30 Hours of Python Programming at Software Education with Grade A Distinction",
    image: "/certificates/python-software-education.png",
    url: "https://linkedin.com/in/sneha-rudani",
    badge: "Grade A Certified",
  },
  {
    title: "Microsoft Data & AI Internship Certificate",
    issuer: "Microsoft & CloudThat",
    date: "July 2025",
    credentialId: "Cert No: CT/25/945742",
    description: "78 Hours of Skill-Based Training under Microsoft Data & AI Internship Program 2025",
    image: "/certificates/microsoft-data-ai.png",
    pdf: "/certificates/microsoft-data-ai.pdf",
    url: "https://linkedin.com/in/sneha-rudani",
    badge: "Microsoft Verified",
  },
  {
    title: "Internal Smart India Hackathon 2025",
    issuer: "MoE's Innovation Cell, AICTE & Apollo Institute",
    date: "Sept 2025",
    credentialId: "SIH 2025 Participant",
    description: "Certificate of Participation in Internal Smart India Hackathon 2025",
    image: "/certificates/smart-india-hackathon.png",
    pdf: "/certificates/smart-india-hackathon.pdf",
    url: "https://linkedin.com/in/sneha-rudani",
    badge: "SIH / AICTE",
  },
  {
    title: "Summer GTU AI Internship Certificate",
    issuer: "CSRBOX Foundation & GTU",
    date: "July 2025",
    credentialId: "ID: CSRBOX2025AI1060",
    description: "2-week Summer GTU Internship Program on Artificial Intelligence (Subject code: 3170001)",
    image: "/certificates/csrbox-ai-internship.png",
    pdf: "/certificates/csrbox-ai-internship.pdf",
    url: "https://linkedin.com/in/sneha-rudani",
    badge: "GTU / CSRBOX",
  },
  {
    title: "Elevate Labs AI & ML Internship Certificate",
    issuer: "Elevate Labs (MSME & Skill India)",
    date: "30 April 2026",
    credentialId: "MSME & Skill India Recognized",
    description: "Certificate of Completion for Artificial Intelligence & Machine Learning Internship Program (1 Jan 2026 to 30 Apr 2026)",
    image: "/certificates/elevate-labs-ai-ml.png",
    url: "https://linkedin.com/in/sneha-rudani",
    badge: "MSME / Skill India",
  },
  {
    title: "QSkill Virtual Internship Certificate",
    issuer: "Back-End Development Certificate",
    date: "July 2026",
    credentialId: "ID: qspybknd260601",
    description: "Back-End Development specialization with practical application modules",
    url: "https://linkedin.com/in/sneha-rudani",
    badge: "Backend Certified",
  },
];

export default function Skills() {
  const [selectedCert, setSelectedCert] = useState(null);

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
                4 Roles Completed
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

          {/* Certifications & Credentials List */}
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

              <div className="space-y-3.5">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    onClick={() => {
                      if (cert.image || cert.pdf) setSelectedCert(cert);
                    }}
                    className={`group p-4 rounded-xl border transition-all duration-200 ${
                      cert.image || cert.pdf
                        ? "cursor-pointer hover:border-pink-500/60 hover:bg-pink-500/5 shadow-sm hover:shadow-pink-500/10"
                        : "hover:border-purple-500/40 hover:bg-white/[0.02]"
                    }`}
                    style={{
                      background: "rgba(13,9,20,0.6)",
                      borderColor: cert.image ? "rgba(236,72,153,0.25)" : "rgba(45,31,63,0.5)",
                    }}
                  >
                    <div className="flex justify-between items-start gap-3">
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-semibold text-white text-xs group-hover:text-pink-400 transition-colors">
                            {cert.title}
                          </h4>
                          {cert.image && (
                            <span className="inline-flex items-center gap-1 text-[0.6rem] font-semibold px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx="12" cy="12" r="3" />
                              </svg>
                              View Certificate
                            </span>
                          )}
                        </div>
                        <p className="text-[0.72rem]" style={{ color: "#9D8BAA" }}>
                          {cert.issuer}
                        </p>
                      </div>

                      <span className="text-[0.65rem] font-mono shrink-0 px-2 py-0.5 rounded bg-white/5 text-purple-300 border border-white/5">
                        {cert.date}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-2 mt-2.5 pt-2 border-t border-white/5 text-[0.68rem]">
                      <span className="text-pink-400 font-mono text-[0.65rem] truncate max-w-[200px]">
                        {cert.credentialId}
                      </span>

                      <div className="flex items-center gap-2">
                        {cert.pdf && (
                          <a
                            href={cert.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-pink-300 hover:text-pink-200 transition-colors font-medium flex items-center gap-1"
                            title="Open PDF"
                          >
                            PDF ↗
                          </a>
                        )}
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-purple-300 hover:text-purple-200 transition-colors inline-flex items-center gap-1"
                        >
                          LinkedIn →
                        </a>
                      </div>
                    </div>
                  </div>
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

      {/* ── Certificate Preview Modal ────────────────────────────── */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-3xl glass rounded-3xl p-6 border-2 border-pink-500/40 shadow-2xl overflow-hidden space-y-5"
            style={{
              background: "rgba(13,9,20,0.95)",
              boxShadow: "0 25px 60px -15px rgba(236,72,153,0.3)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-pink-400 font-semibold">
                  Verified Certificate
                </span>
                <h3
                  className="text-lg md:text-xl font-bold text-white mt-0.5"
                  style={{ fontFamily: "var(--font-syne), sans-serif" }}
                >
                  {selectedCert.title}
                </h3>
                <p className="text-xs text-purple-300/80 mt-0.5">
                  Issued by {selectedCert.issuer} • {selectedCert.date}
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Certificate Image Preview */}
            {selectedCert.image && (
              <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-inner">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                />
              </div>
            )}

            {/* Modal Footer / Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/10">
              <span className="text-xs font-mono text-pink-400">
                {selectedCert.credentialId}
              </span>

              <div className="flex items-center gap-3">
                {selectedCert.pdf && (
                  <a
                    href={selectedCert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                    </svg>
                    Download / Open PDF
                  </a>
                )}
                <a
                  href={selectedCert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold bg-pink-600 hover:bg-pink-500 text-white transition-colors shadow-lg shadow-pink-600/30"
                >
                  Verify on LinkedIn
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 12L12 4M12 4H7M12 4v5"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
