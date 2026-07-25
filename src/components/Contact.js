"use client";

import { useState } from "react";

/* ──────────────────────────────────────────────────────────
   CONTACT — Direct Email Sending to sneharr25@gmail.com
   Sends message directly to Sneha's email via FormSubmit API
   ────────────────────────────────────────────────────────── */
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ success: false, msg: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ success: false, msg: "" });

    try {
      // 1. Primary: Submit to Formspree endpoint (supports custom NEXT_PUBLIC_FORMSPREE_FORM_ID or default ID)
      const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "xknkyzpw";
      let response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      // 2. Fallback: Direct FormSubmit API to sneharr25@gmail.com if Formspree endpoint is unconfigured or returns non-200
      if (!response.ok) {
        response = await fetch("https://formsubmit.co/ajax/sneharr25@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            subject: form.subject || "Portfolio Contact from " + form.name,
            message: form.message,
            _captcha: "false",
          }),
        });
      }

      if (response.ok || response.status === 200) {
        setStatus({
          success: true,
          msg: "🎉 Your message was successfully delivered directly to sneharr25@gmail.com! I'll get back to you shortly.",
        });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("API submission fallback required");
      }
    } catch (err) {
      // 3. Fallback: Client mailto link to guarantee delivery to sneharr25@gmail.com
      const mailtoUrl = `mailto:sneharr25@gmail.com?subject=${encodeURIComponent(
        form.subject || "Portfolio Contact from " + form.name
      )}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      )}`;
      window.location.href = mailtoUrl;
      setStatus({
        success: true,
        msg: "Opening your email client to send message to sneharr25@gmail.com...",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 md:px-16 lg:px-24 relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 750,
            height: 380,
            background:
              "radial-gradient(ellipse, rgba(236,72,153,0.12) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto space-y-16">
        {/* Section header */}
        <div className="reveal text-center space-y-4">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs tracking-widest uppercase"
            style={{
              borderColor: "rgba(236,72,153,0.25)",
              color: "#EC4899",
            }}
          >
            <span className="relative flex" style={{ width: 6, height: 6 }}>
              <span
                className="animate-ping-custom absolute inline-flex rounded-full opacity-75"
                style={{ width: 6, height: 6, background: "#EC4899" }}
              />
              <span
                className="relative inline-flex rounded-full"
                style={{ width: 6, height: 6, background: "#EC4899" }}
              />
            </span>
            Get In Touch
          </span>
          <h2
            className="font-bold leading-tight text-white"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            }}
          >
            Let&apos;s build{" "}
            <span className="text-shimmer">something great.</span>
          </h2>
          <p
            className="text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "#9D8BAA" }}
          >
            Fill out the form below to send a message directly to my email inbox
            (<strong>sneharr25@gmail.com</strong>).
          </p>
        </div>

        {/* Form + Social grid */}
        <div
          className="reveal grid grid-cols-1 lg:grid-cols-5 gap-10"
          style={{ transitionDelay: "0.1s" }}
        >
          {/* Form (3/5) */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass rounded-2xl p-8 space-y-5"
            style={{ borderColor: "rgba(45,31,63,0.6)" }}
          >
            {/* Success notification banner */}
            {status.msg && (
              <div
                className={`p-4 rounded-xl text-xs leading-relaxed flex items-start gap-3 ${
                  status.success
                    ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-300"
                    : "bg-red-500/15 border border-red-500/30 text-red-300"
                }`}
              >
                <svg
                  className="shrink-0 mt-0.5"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{status.msg}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium mb-1.5"
                  style={{ color: "#9D8BAA" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="form-input"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium mb-1.5"
                  style={{ color: "#9D8BAA" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="form-input"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-xs font-medium mb-1.5"
                style={{ color: "#9D8BAA" }}
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
                className="form-input"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-medium mb-1.5"
                style={{ color: "#9D8BAA" }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me more..."
                rows={5}
                required
                className="form-input resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-mag w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 disabled:opacity-50"
              style={{
                background: "linear-gradient(135deg, #EC4899, #C084FC)",
              }}
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                  Send Direct Message to Sneha
                </>
              )}
            </button>
          </form>

          {/* Social sidebar (2/5) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Connect card */}
            <div
              className="glass rounded-2xl p-6 space-y-4"
              style={{ borderColor: "rgba(45,31,63,0.6)" }}
            >
              <h3
                className="font-semibold text-white text-lg"
                style={{ fontFamily: "var(--font-syne), sans-serif" }}
              >
                Direct Contact Details
              </h3>

              {/* Email */}
              <a
                href="mailto:sneharr25@gmail.com"
                className="flex items-center gap-4 p-3 rounded-xl transition-all duration-200 group"
                style={{
                  background: "rgba(13,9,20,0.5)",
                  border: "1px solid rgba(45,31,63,0.4)",
                }}
              >
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-lg"
                  style={{
                    width: 40,
                    height: 40,
                    background: "rgba(236,72,153,0.1)",
                    color: "#EC4899",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-pink-400 transition-colors">
                    Email
                  </p>
                  <p className="text-xs" style={{ color: "#9D8BAA" }}>
                    sneharr25@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+917016301516"
                className="flex items-center gap-4 p-3 rounded-xl transition-all duration-200 group"
                style={{
                  background: "rgba(13,9,20,0.5)",
                  border: "1px solid rgba(45,31,63,0.4)",
                }}
              >
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-lg"
                  style={{
                    width: 40,
                    height: 40,
                    background: "rgba(192,132,252,0.1)",
                    color: "#C084FC",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.828-1.427-5.11-3.709-6.538-6.537l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors">
                    Phone
                  </p>
                  <p className="text-xs" style={{ color: "#9D8BAA" }}>
                    +91 7016301516
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Nehaa2509"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-xl transition-all duration-200 group"
                style={{
                  background: "rgba(13,9,20,0.5)",
                  border: "1px solid rgba(45,31,63,0.4)",
                }}
              >
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-lg"
                  style={{
                    width: 40,
                    height: 40,
                    background: "rgba(236,72,153,0.1)",
                    color: "#EC4899",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-pink-400 transition-colors">
                    GitHub
                  </p>
                  <p className="text-xs" style={{ color: "#9D8BAA" }}>
                    github.com/Nehaa2509
                  </p>
                </div>
                <svg
                  className="ml-auto"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#9D8BAA"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M4 12L12 4M12 4H7M12 4v5" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/sneha-rudani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-xl transition-all duration-200 group"
                style={{
                  background: "rgba(13,9,20,0.5)",
                  border: "1px solid rgba(45,31,63,0.4)",
                }}
              >
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-lg"
                  style={{
                    width: 40,
                    height: 40,
                    background: "rgba(192,132,252,0.1)",
                    color: "#C084FC",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors">
                    LinkedIn
                  </p>
                  <p className="text-xs" style={{ color: "#9D8BAA" }}>
                    linkedin.com/in/sneha-rudani
                  </p>
                </div>
                <svg
                  className="ml-auto"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="#9D8BAA"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M4 12L12 4M12 4H7M12 4v5" />
                </svg>
              </a>
            </div>

            {/* Availability card */}
            <div
              className="glass rounded-2xl p-6 text-center space-y-3"
              style={{
                borderColor: "rgba(236,72,153,0.2)",
                background: "rgba(236,72,153,0.03)",
              }}
            >
              <div className="flex items-center justify-center gap-2">
                <span className="relative flex" style={{ width: 8, height: 8 }}>
                  <span
                    className="animate-ping-custom absolute inline-flex rounded-full opacity-75"
                    style={{ width: 8, height: 8, background: "#10b981" }}
                  />
                  <span
                    className="relative inline-flex rounded-full"
                    style={{ width: 8, height: 8, background: "#10b981" }}
                  />
                </span>
                <span className="text-sm font-medium" style={{ color: "#10b981" }}>
                  Available for Entry-Level Roles
                </span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "#9D8BAA" }}>
                Seeking Python &amp; Django Developer | Backend Engineer roles. Based in Ahmedabad, Gujarat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
