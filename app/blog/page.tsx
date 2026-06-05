import { Metadata } from "next";
import Link from "next/link";
import { db } from "@/lib/db";

export const metadata: Metadata = {
  title: "Insights & Strategy Blog | SRGroupTM Studio",
  description: "Read updates on web design, brand identity, AI video production, and GCC regional growth strategies from the SRGroupTM creative team.",
};

const PILLAR_COLORS: Record<string, string> = {
  "Next-Gen Web Design & UI/UX": "#0EA5E9",
  "Brand Identity & Human-Centric Design": "#8B5CF6",
  "Visual Marketing (Posters, AI Video, & Motion)": "#F43F5E",
  "South India & GCC Growth Strategy": "#10B981",
};

const AUTHOR_EMOJIS: Record<string, string> = {
  "Hiba": "🎨",
  "Anas": "⚡",
  "Haneena": "📍",
};

export default async function BlogPage() {
  let dbPosts: any[] = [];
  try {
    dbPosts = await db.post.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.warn("Database connection failed. Returning empty posts list.");
  }

  if (dbPosts.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">No Articles Yet</h2>
          <p className="text-slate-500">Check back soon for insights and strategies.</p>
        </div>
      </div>
    );
  }

  const [featured, ...rest] = dbPosts;
  // Default to primary color if pillar logic is not present in new model
  const featuredColor = "#0EA5E9";

  return (
    <div className="overflow-hidden">

      {/* ── Dark Hero ── */}
      <section className="relative bg-[#04091A] pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #F43F5E, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 sm:px-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-1.5 text-[11px] font-semibold tracking-widest text-slate-400 uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
            Studio Insights
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-5">
            Ideas that{" "}
            <span style={{ background: "linear-gradient(90deg, #F87171, #818CF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              move brands.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto">
            Creative guidelines, digital growth strategy, and visual design advice — from the SRGroupTM team.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to top, #ffffff, transparent)" }} />
      </section>

      {/* ── Content ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 space-y-10">

          {/* Featured Post */}
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="relative rounded-2xl border border-slate-100 bg-slate-50 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              {/* Color accent bar */}
              <div className="h-1 w-full" style={{ backgroundColor: featuredColor }} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Text */}
                <div className="p-10 md:p-14 flex flex-col justify-between">
                  <div className="space-y-5">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-bold"
                        style={{ backgroundColor: `${featuredColor}15`, color: featuredColor }}>
                        ✦ Featured
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug group-hover:text-sky-600 transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed">{featured.excerpt}</p>
                  </div>
                    <div className="mt-8 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full flex items-center justify-center text-xl border border-slate-200 bg-white">
                      {AUTHOR_EMOJIS[featured.author || ""] ?? "👤"}
                    </div>
                    <div>
                      <span className="block text-sm font-bold text-slate-900">{featured.author}</span>
                      <span className="block text-xs text-slate-400">5 min read</span>
                    </div>
                    <span className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold transition-colors" style={{ color: featuredColor }}>
                      Read Article
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
                {/* Visual panel */}
                <div className="hidden md:flex items-center justify-center p-10"
                  style={{ background: `linear-gradient(135deg, ${featuredColor}10, ${featuredColor}05)` }}>
                  <div className="text-center space-y-4">
                    <div className="text-7xl">{AUTHOR_EMOJIS[featured.author || ""] ?? "📝"}</div>
                    <div className="text-sm font-bold text-slate-900">5 min read</div>
                    <div className="text-xs text-slate-400">
                      {new Date(featured.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Section divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-slate-100" />
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">More Articles</span>
            <div className="flex-1 h-px bg-slate-100" />
          </div>

          {/* Remaining posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rest.map((post) => {
              const color = "#0EA5E9";
              return (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <div className="h-full flex flex-col rounded-2xl border border-slate-100 bg-white overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="h-1 w-full" style={{ backgroundColor: color }} />
                    <div className="flex-1 p-6 space-y-4">
                      <h2 className="text-base font-bold text-slate-900 leading-snug group-hover:text-sky-600 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-sm text-slate-500 leading-relaxed">{post.excerpt}</p>
                    </div>
                    <div className="px-6 pb-6 pt-3 border-t border-slate-50 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="h-7 w-7 rounded-full flex items-center justify-center text-base border border-slate-100 bg-slate-50">
                          {AUTHOR_EMOJIS[post.author || ""] ?? "👤"}
                        </div>
                        <div>
                          <span className="block text-[11px] font-bold text-slate-800">{post.author}</span>
                          <span className="block text-[10px] text-slate-400">5 min read</span>
                        </div>
                      </div>
                      <svg className="w-4 h-4 text-slate-300 group-hover:text-sky-500 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Newsletter-style CTA ── */}
      <section className="bg-slate-50 border-t border-slate-100 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center space-y-5">
          <h2 className="text-2xl font-bold text-slate-900">Want expert advice for your business?</h2>
          <p className="text-slate-500 text-sm leading-relaxed">Our team is happy to consult on web design, branding, or local SEO — for free, on WhatsApp.</p>
          <a
            href="https://wa.me/919400112833?text=Hi%20SRGroupTM%2C%20I%20read%20your%20blog%20and%20need%20some%20advice."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-sky-600 hover:scale-[1.01]"
          >
            Get Free Advice on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
