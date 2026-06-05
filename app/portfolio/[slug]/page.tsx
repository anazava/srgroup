import { db } from "@/lib/db";
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
    return { title: "Project Not Found" };
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
    notFound();
  }

  if (!project || !project.published) notFound();

  return (
    <div className="bg-white min-h-screen pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/portfolio" className="text-sm font-semibold text-sky-600 hover:text-sky-800 mb-8 inline-block">
          ← Back to Portfolio
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{project.title}</h1>
        {project.clientName && (
          <p className="text-lg text-slate-500 mb-12">Client: {project.clientName}</p>
        )}

        {project.coverImage && (
          <div className="w-full aspect-video rounded-3xl overflow-hidden mb-12 bg-slate-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Project Story</h2>
            <div dangerouslySetInnerHTML={{ __html: project.storyContent }} />
          </div>
          
          <div className="space-y-8">
            {project.externalLink && (
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Live Project</h3>
                <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="text-sky-600 font-semibold hover:underline break-all">
                  {project.externalLink}
                </a>
              </div>
            )}
            
            {project.videoUrl && (
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Media</h3>
                <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-xl text-sm font-semibold transition-colors">
                  <span>▶</span> Watch Video
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
