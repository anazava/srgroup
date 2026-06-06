import { db } from "@/lib/db";
import { staticPortfolioItems } from "@/lib/staticPortfolio";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  let project = null;
  try {
    project = await db.portfolio.findUnique({ where: { slug } });
  } catch (error) {
    // Ignore DB error for metadata
  }
  
  if (!project) {
    project = staticPortfolioItems.find(p => p.slug === slug) as any;
  }
  
  if (!project || !project.published) return { title: "Project Not Found" };
  
  return {
    title: `${project.title} | Portfolio | SRGroupTM`,
    description: `Read the case study for ${project.clientName || project.title}.`,
  };
}

export default async function PortfolioItemPage({ params }: PageProps) {
  const { slug } = await params;
  let project = null;
  try {
    project = await db.portfolio.findUnique({ where: { slug } });
  } catch (error) {
    // Ignore DB error
  }

  if (!project) {
    project = staticPortfolioItems.find(p => p.slug === slug) as any;
  }

  if (!project || !project.published) notFound();

  return (
    <div className="bg-slate-50 min-h-screen pb-32 overflow-hidden">
      {/* ── Dark Hero Section ── */}
      <section className="relative bg-[#04091A] pt-32 pb-48 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #38BDF8, transparent 70%)" }} />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #8B5CF6, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 sm:px-10">
          <Link href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-slate-300 uppercase hover:bg-white/10 transition-colors mb-8">
            <span>←</span> Back to Portfolio
          </Link>
          
          {project.clientName && (
            <span className="block text-sky-400 font-bold tracking-widest uppercase text-sm mb-4">
              Client: {project.clientName}
            </span>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white max-w-4xl">
            {project.title}
          </h1>
        </div>
      </section>

      {/* ── Main Content Area ── */}
      <div className="relative mx-auto max-w-5xl px-6 sm:px-10 -mt-32">
        {project.coverImage && (
          <div className="w-full aspect-video rounded-[2rem] overflow-hidden mb-16 shadow-2xl shadow-slate-900/20 border-4 border-white/10 bg-slate-900 relative">
            <div className="absolute inset-0 bg-slate-900 animate-pulse" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.coverImage} alt={project.title} className="relative z-10 w-full h-full object-cover" />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Story Content */}
          <div className="lg:col-span-8 prose prose-lg prose-slate max-w-none 
                          prose-headings:text-slate-900 prose-headings:font-bold prose-headings:tracking-tight 
                          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                          prose-h4:text-xl prose-h4:text-slate-800
                          prose-p:text-slate-600 prose-p:leading-relaxed 
                          prose-a:text-sky-500 prose-a:no-underline hover:prose-a:underline
                          prose-img:rounded-2xl prose-img:shadow-sm prose-img:border prose-img:border-slate-100
                          prose-li:text-slate-600">
            <div dangerouslySetInnerHTML={{ __html: project.storyContent }} />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6">
              
              {/* Live Project Card */}
              {project.externalLink && (
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-500">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Live Project</h3>
                  </div>
                  <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="block text-sky-600 font-semibold hover:text-sky-700 transition-colors break-all">
                    {project.externalLink}
                  </a>
                </div>
              )}
              
              {/* Media Card */}
              {project.videoUrl && (
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-violet-50 flex items-center justify-center text-violet-500">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Media Asset</h3>
                  </div>
                  <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-white bg-slate-900 hover:bg-slate-800 w-full py-3 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5">
                    Watch Video
                  </a>
                </div>
              )}
              
              {/* CTA Card */}
              <div className="rounded-2xl border-none bg-gradient-to-br from-[#04091A] to-slate-800 p-8 shadow-lg text-white">
                <h3 className="text-xl font-bold mb-3">Like what you see?</h3>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  Let's create something equally impactful for your brand.
                </p>
                <a href="https://wa.me/919400112833?text=Hi%20SRGroupTM%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20start%20a%20project!" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-sky-500 hover:bg-sky-400 text-white py-3 rounded-xl text-sm font-bold transition-colors">
                  Start a Project
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
