"use client";

import { useEffect, useRef, useState } from "react";

const VALUES = [
  {
    num: "01",
    icon: "⚡",
    color: "#F59E0B",
    title: "Speed Without Compromise",
    body: "Every project ships on schedule. Our structured creative sprints eliminate bottlenecks — your brand goes live on time, without a single corner cut.",
  },
  {
    num: "02",
    icon: "🎯",
    color: "#0EA5E9",
    title: "Regional Intelligence",
    body: "We design with deep cultural awareness for South India and the GCC. Your visuals feel genuinely local — from Malappuram to Dubai — never generic.",
  },
  {
    num: "03",
    icon: "🔐",
    color: "#8B5CF6",
    title: "Full IP Ownership",
    body: "On launch day, every source file, code repo, and design layer transfers to you. No subscriptions, no lock-in. Ever.",
  },
  {
    num: "04",
    icon: "🤝",
    color: "#10B981",
    title: "50 / 50 Trust Model",
    body: "50% upfront to start. The remaining 50% only when you approve the final result. Zero risk on your side — pure accountability on ours.",
  },
];

export default function ValuesSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div
          className="max-w-3xl mb-20 space-y-5"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-bold tracking-widest text-slate-500 uppercase">
            Our Commitment
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
            How We Work
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
            Four principles that shape every project we take on — from the very first discovery call to final asset handover.
          </p>
        </div>

        {/* Values grid - More spacing, larger text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {VALUES.map((v, i) => (
            <div
              key={v.num}
              className="group relative rounded-3xl border border-slate-100 bg-slate-50 p-10 lg:p-12 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 hover:bg-white hover:border-slate-200"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.7s ease ${0.1 + i * 0.1}s, transform 0.7s ease ${0.1 + i * 0.1}s, box-shadow 0.3s, background-color 0.3s, border-color 0.3s`,
              }}
            >
              {/* Accent top line */}
              <div className="absolute top-0 left-10 w-16 h-1 rounded-b-full transition-all duration-300 group-hover:w-24"
                style={{ backgroundColor: v.color }} />

              <div className="flex flex-col sm:flex-row items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 h-16 w-16 rounded-2xl flex items-center justify-center text-3xl border border-slate-100 bg-white group-hover:scale-105 transition-transform duration-300 shadow-sm"
                  style={{ boxShadow: `0 4px 20px ${v.color}15` }}
                >
                  {v.icon}
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black uppercase tracking-widest" style={{ color: v.color }}>
                      {v.num}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 leading-snug">{v.title}</h3>
                  </div>
                  <p className="text-base text-slate-600 leading-relaxed">{v.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* High-contrast bold CTA strip */}
        <div
          className="mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 rounded-3xl bg-[#040D1C] p-10 lg:p-14 overflow-hidden relative shadow-2xl"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 0.5s",
          }}
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500 rounded-full opacity-[0.05] blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-xl space-y-3">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to work with a studio that keeps every promise?</h3>
            <p className="text-base text-slate-400 leading-relaxed">
              Skip the long email chains. Message us directly on WhatsApp to discuss your goals, and we'll reply within the hour.
            </p>
          </div>
          
          <div className="relative z-10 flex-shrink-0">
            <a
              href="https://wa.me/919400112833?text=Hi%20SRGroupTM%2C%20I%20want%20to%20start%20a%20project!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-900 transition-transform hover:scale-[1.03] shadow-lg"
            >
              Start a Conversation
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M11.998 2C6.477 2 2 6.477 2 12c0 1.89.522 3.66 1.432 5.17L2 22l4.979-1.395A9.954 9.954 0 0011.998 22c5.522 0 10-4.478 10-10S17.52 2 11.998 2zm0 18.182c-1.617 0-3.12-.447-4.407-1.22l-.316-.188-3.267.916.922-3.18-.205-.326A8.15 8.15 0 013.818 12c0-4.511 3.67-8.182 8.18-8.182 4.51 0 8.18 3.671 8.18 8.182s-3.67 8.182-8.18 8.182z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
