/* eslint-disable @typescript-eslint/no-explicit-any */

import { db } from "@/lib/db";
import Link from "next/link";

export default async function RecentPortfolio() {
  let projects: any[] = [];
  try {
    projects = await db.portfolio.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      take: 3,
    });
  } catch (error) {
    console.warn("Database connection failed. Returning empty projects list.");
  }

  if (projects.length === 0) {
    return null; // Don't show the section if no projects exist
  }

  return (
    <section className="bg-white py-24 border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-4 py-1.5 text-[11px] font-bold tracking-widest text-sky-600 uppercase">
              Featured Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Recent Projects
            </h2>
            <p className="text-slate-500 text-base max-w-2xl">
              A glimpse into our latest web design, branding, and video production work for clients across the GCC and India.
            </p>
          </div>
          <Link href="/portfolio" className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition-all hover:bg-sky-600 hover:scale-[1.02]">
            View All Work
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={`/portfolio/${project.slug}`} className="group block">
              <div className="bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                <div className="h-56 bg-slate-200 relative overflow-hidden">
                  {project.coverImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300 text-4xl">🎨</div>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">{project.title}</h3>
                  <p className="text-sm text-slate-500 mb-4">{project.clientName || 'Internal Project'}</p>
                  <div className="mt-auto pt-4 border-t border-slate-200/60 flex items-center justify-between text-sm font-semibold text-sky-600">
                    Read Case Study <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
