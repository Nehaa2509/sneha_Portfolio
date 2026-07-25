/* ──────────────────────────────────────────────────────────
   FOOTER — Simple, minimal footer
   ────────────────────────────────────────────────────────── */
export default function Footer() {
  return (
    <footer
      className="py-10 px-6 md:px-16 lg:px-24"
      style={{ borderTop: "1px solid rgba(45,31,63,0.5)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p
          className="text-sm font-semibold text-white"
          style={{ fontFamily: "var(--font-syne), sans-serif" }}
        >
          Sneha<span style={{ color: "#EC4899" }}>.</span>
        </p>
        <p className="text-xs" style={{ color: "#9D8BAA" }}>
          &copy; {new Date().getFullYear()} Sneha Rudani · Designed &amp;
          engineered with 💗
        </p>
        <a
          href="#hero"
          className="text-xs flex items-center gap-1.5 transition-colors duration-200 hover:text-white"
          style={{ color: "#9D8BAA" }}
          aria-label="Back to top"
        >
          Back to top
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M6 9V3M3 6l3-3 3 3" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
