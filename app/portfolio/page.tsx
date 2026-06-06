/* eslint-disable @typescript-eslint/no-explicit-any */

import { db } from "@/lib/db";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Portfolio | SRGroupTM Studio",
  description: "Explore our recent work in web design, branding, and video production.",
};

export default async function PortfolioPage() {
  let projects: any[] = [];
  try {
    projects = await db.portfolio.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.warn("Database connection failed. Returning empty projects list.");
  }

  return (
    <div className="overflow-hidden bg-slate-50 min-h-screen pb-24">
      {/* ── Dark Hero ── */}
      <section className="relative bg-[#04091A] pt-24 pb-32 overflow-hidden mb-16">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #8B5CF6, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 sm:px-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-1.5 text-[11px] font-semibold tracking-widest text-slate-400 uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Creative Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-5">
            Our latest{" "}
            <span style={{ background: "linear-gradient(90deg, #A78BFA, #38BDF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              digital work.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto">
            A showcase of our recent digital projects, brand identities, and AI video campaigns for ambitious companies.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to top, #f8fafc, transparent)" }} />
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.length === 0 ? (
          <div className="col-span-full text-center py-24 text-slate-400">
            No projects available yet. Check back soon.
          </div>
        ) : (
          projects.map((project) => (
            <Link key={project.id} href={`/portfolio/${project.slug}`} className="group block">
              <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                <div className="h-48 bg-slate-100 relative overflow-hidden">
                  {project.coverImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300 text-4xl">🎨</div>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">{project.title}</h2>
                  <p className="text-sm text-slate-500 mb-4">{project.clientName || 'Internal Project'}</p>
                  <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between text-sm font-semibold text-sky-600">
                    View Case Study <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </section>
    </div>
  );
}
