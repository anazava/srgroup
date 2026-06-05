"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const SERVICES = [
  "Premium Websites",
  "Brand Identity",
  "AI Video Reels",
  "Social Posters",
  "E-Commerce Stores",
  "Local SEO Growth",
];

const STATS = [
  { value: "120+", label: "Projects" },
  { value: "80+",  label: "Clients" },
  { value: "6",    label: "Regions" },
  { value: "100%", label: "IP Ownership" },
];

function useTypewriter(words: string[], speed = 75, pause = 2200) {
  const [displayed, setDisplayed] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), speed);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length - 1)), speed / 2);
    } else {
      setDeleting(false);
      setIdx((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx, words, speed, pause]);

  return displayed;
}

export default function AnimatedHero() {
  const [mounted, setMounted] = useState(false);
  const typed = useTypewriter(SERVICES);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const fadeUp = (delay: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(16px)",
    transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
  });

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#040D1C]">

      {/* ── Subtle background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {/* Soft radial glow top-left */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle at center, #0EA5E9 0%, transparent 60%)" }} />
        {/* Soft radial glow bottom-right */}
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle at center, #8B5CF6 0%, transparent 60%)" }} />
        {/* Fine dot grid - lower opacity for cleaner look */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }} />
      </div>

      {/* ── Main content — centered ── */}
      <div className="relative w-full max-w-4xl mx-auto px-6 sm:px-10 text-center">

        {/* Studio badge */}
        <div style={fadeUp(0)}>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-bold tracking-widest text-slate-300 uppercase mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
            </span>
            Creative Digital Studio
          </span>
        </div>

        {/* Headline - refined typography */}
        <div style={fadeUp(0.1)}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
            We design & build{" "}
            <br className="hidden sm:block" />
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(90deg, #38BDF8, #818CF8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {typed}
              <span className="inline-block w-[3px] h-[0.8em] bg-sky-400 ml-1.5 align-middle animate-pulse rounded-sm" style={{ WebkitTextFillColor: "initial" }} />
            </span>
            <br className="hidden sm:block" />
            {" "}that drive real growth.
          </h1>
        </div>

        {/* Subtext - increased size and contrast */}
        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10" style={fadeUp(0.2)}>
          One studio for websites, branding, AI videos, and social graphics — built exclusively for ambitious South India & GCC businesses.
        </p>

        {/* CTAs - Solid white for primary, clean outline for secondary */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20" style={fadeUp(0.3)}>
          <a
            href="https://wa.me/919400112833?text=Hi%20SRGroupTM%2C%20I%20want%20to%20start%20a%20project!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-900 shadow-xl transition-transform hover:scale-[1.03]"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M11.998 2C6.477 2 2 6.477 2 12c0 1.89.522 3.66 1.432 5.17L2 22l4.979-1.395A9.954 9.954 0 0011.998 22c5.522 0 10-4.478 10-10S17.52 2 11.998 2zm0 18.182c-1.617 0-3.12-.447-4.407-1.22l-.316-.188-3.267.916.922-3.18-.205-.326A8.15 8.15 0 013.818 12c0-4.511 3.67-8.182 8.18-8.182 4.51 0 8.18 3.671 8.18 8.182s-3.67 8.182-8.18 8.182z" />
            </svg>
            Start Your Project
          </a>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10 hover:border-white/30"
          >
            View Services
          </Link>
        </div>

        {/* Stats - Massive readability improvement */}
        <div
          className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 border-t border-white/10 pt-10 mx-auto max-w-3xl"
          style={fadeUp(0.4)}
        >
          {STATS.map((s, i) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">{s.value}</div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient — blends into the dark services section below */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, #040D1C 0%, transparent 100%)" }} />
    </section>
  );
}
