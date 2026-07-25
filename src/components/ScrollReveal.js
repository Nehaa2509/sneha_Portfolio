"use client";

import { useEffect } from "react";

/* ──────────────────────────────────────────────────────────
   ScrollReveal — IntersectionObserver for .reveal elements
   Also handles magnetic button ripple effect
   ────────────────────────────────────────────────────────── */
export default function ScrollReveal() {
  useEffect(() => {
    // ── Scroll-triggered reveal ────────────────────────────
    const revealEls = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    revealEls.forEach((el) => observer.observe(el));

    // ── Magnetic ripple on .btn-mag ────────────────────────
    const buttons = document.querySelectorAll(".btn-mag");
    const handleMouseMove = (e) => {
      const btn = e.currentTarget;
      const rect = btn.getBoundingClientRect();
      btn.style.setProperty(
        "--mx",
        ((e.clientX - rect.left) / rect.width * 100).toFixed(1) + "%"
      );
      btn.style.setProperty(
        "--my",
        ((e.clientY - rect.top) / rect.height * 100).toFixed(1) + "%"
      );
    };
    buttons.forEach((btn) => btn.addEventListener("mousemove", handleMouseMove));

    return () => {
      observer.disconnect();
      buttons.forEach((btn) =>
        btn.removeEventListener("mousemove", handleMouseMove)
      );
    };
  }, []);

  return null; // Render nothing — side-effect only component
}
