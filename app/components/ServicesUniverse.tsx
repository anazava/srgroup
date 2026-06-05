"use client";

import ValuesSection from "@/app/components/ValuesSection";

const SERVICES = [
  {
    id: "web",
    label: "Web Development",
    icon: "🌐",
    color: "#0EA5E9",
    title: "High-Performance Web Platforms",
    description: "We engineer lightning-fast Next.js websites and custom e-commerce stores. No templates. Every pixel and millisecond is optimized for conversion.",
    tags: ["Next.js", "E-Commerce", "UI/UX", "SEO Optimised"],
  },
  {
    id: "brand",
    label: "Branding",
    icon: "🎨",
    color: "#8B5CF6",
    title: "Brand Identity Systems",
    description: "Distinctive logos, cohesive color palettes, and comprehensive brand guidelines that build trust and dominate local markets across India and GCC.",
    tags: ["Logos", "Typography", "Color Systems", "Brand Manuals"],
  },
  {
    id: "poster",
    label: "Posters & Graphics",
    icon: "🖼️",
    color: "#10B981",
    title: "Social Campaigns & Graphics",
    description: "Stop the scroll with high-conversion Instagram kits, WhatsApp broadcast posters, and print-ready collateral designed for direct response.",
    tags: ["Instagram", "WhatsApp Ads", "Flyers", "Campaigns"],
  },
  {
    id: "video",
    label: "AI Video",
    icon: "🎬",
    color: "#F43F5E",
    title: "AI-Powered Video Reels",
    description: "Engage your audience with next-gen short-form reels and animated product intros. Studio quality visuals delivered at a fraction of traditional costs.",
    tags: ["AI Reels", "Intros", "TikTok / IG", "Voiceovers"],
  },
];

export default function ServicesUniverse() {
  return (
    <>
      <section className="relative bg-[#040D1C] py-32 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Section header */}
          <div className="text-center mb-20 space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold tracking-widest text-slate-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              What We Build
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
              Four studios.{" "}
              <span className="text-slate-500">One vision.</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              We focus purely on the capabilities that drive measurable business outcomes. Beautiful design, backed by ruthless performance.
            </p>
          </div>

          {/* Bento Box Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {SERVICES.map((svc) => (
              <div
                key={svc.id}
                className="group relative flex flex-col rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:p-10 overflow-hidden hover:bg-white/10 transition-all duration-500"
              >
                {/* Glow on hover */}
                <div
                  className="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-0 blur-[80px] pointer-events-none group-hover:opacity-20 transition-opacity duration-700"
                  style={{ backgroundColor: svc.color }}
                />

                {/* Content */}
                <div className="relative flex-1 space-y-6">
                  {/* Icon & Label */}
                  <div className="flex items-center gap-4">
                    <div
                      className="flex items-center justify-center h-14 w-14 rounded-2xl text-2xl border border-white/10 shadow-inner"
                      style={{ backgroundColor: `${svc.color}15`, color: svc.color }}
                    >
                      {svc.icon}
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest" style={{ color: svc.color }}>
                      {svc.label}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                      {svc.title}
                    </h3>
                    <p className="text-base text-slate-400 leading-relaxed">
                      {svc.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Arrow */}
                <div className="relative mt-8 pt-6 border-t border-white/10">
                  <a
                    href={`https://wa.me/919400112833?text=${encodeURIComponent(`Hi SRGroupTM, I want to start a ${svc.label} project.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm font-bold text-white hover:opacity-80 transition-opacity"
                  >
                    Start Project
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade — transitions to the light section below */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to top, #ffffff, transparent)" }} />
      </section>

      <ValuesSection />
    </>
  );
}
