import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const posts = await db.post.findMany({ select: { slug: true } });
    return posts.map((post) => ({ slug: post.slug }));
  } catch (error) {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  let post = null;
  try {
    post = await db.post.findUnique({ where: { slug } });
  } catch (error) {
    return { title: "Article Not Found | SRGroupTM" };
  }
  
  if (!post || !post.published) return { title: "Article Not Found | SRGroupTM" };
  
  return {
    title: post.metaTitle || `${post.title} | SRGroupTM Studio`,
    description: post.metaDescription || post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article", publishedTime: post.createdAt.toISOString(), authors: [post.author || "SRGroupTM"] },
  };
}

const AUTHOR_EMOJIS: Record<string, string> = {
  "Hiba": "🎨",
  "Anas": "⚡",
  "Haneena": "📍",
};

const PILLAR_COLORS: Record<string, string> = {
  "Next-Gen Web Design & UI/UX": "#0EA5E9",
  "Brand Identity & Human-Centric Design": "#8B5CF6",
  "Visual Marketing (Posters, AI Video, & Motion)": "#F43F5E",
  "South India & GCC Growth Strategy": "#10B981",
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  let post = null;
  try {
    post = await db.post.findUnique({ where: { slug } });
  } catch (error) {
    notFound();
  }
  
  if (!post || !post.published) notFound();

  // Define default color
  const color = "#0EA5E9";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.metaTitle || post.title,
    "description": post.metaDescription || post.excerpt,
    "image": post.coverImage || "https://srgrouptm.com/logo.png",
    "author": {
      "@type": "Person",
      "name": post.author || "SRGroupTM"
    },
    "publisher": {
      "@id": "https://srgrouptm.com/#organization"
    },
    "datePublished": post.createdAt.toISOString(),
    "dateModified": post.updatedAt.toISOString(),
    ...(post.directAnswer ? {
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://srgrouptm.com/blog/${post.slug}`
      },
      "abstract": post.directAnswer
    } : {})
  };

  return (
    <div className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Dark Article Hero ── */}
      <section className="relative bg-[#04091A] pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-10"
            style={{ background: `radial-gradient(circle, ${color}, transparent 70%)` }} />
          <div className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 sm:px-10">
          <Link href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors mb-8">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
          <div className="space-y-5">
            <span className="inline-flex items-center rounded-full px-3.5 py-1.5 text-[11px] font-bold"
              style={{ backgroundColor: `${color}20`, color }}>
              Article
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 pt-2">
              <div className="h-10 w-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-xl">
                {AUTHOR_EMOJIS[post.author || ""] ?? "👤"}
              </div>
              <div>
                <span className="block text-sm font-semibold text-white">{post.author}</span>
                <span className="block text-xs text-slate-400">SRGroupTM Team</span>
              </div>
              <div className="ml-auto text-right">
                <span className="block text-xs font-semibold text-slate-300">5 min read</span>
                <span className="block text-[11px] text-slate-500">
                  {new Date(post.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to top, #ffffff, transparent)" }} />
      </section>

      {/* ── Article Body ── */}
      <section className="bg-white py-16">
        <article className="mx-auto max-w-3xl px-6 sm:px-10">
          <div
            className="prose prose-slate max-w-none text-slate-700
              prose-headings:font-bold prose-headings:text-slate-900
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:pb-3 prose-h2:border-b prose-h2:border-slate-100
              prose-h3:text-lg prose-h3:mt-7 prose-h3:text-slate-800
              prose-p:text-base prose-p:leading-relaxed prose-p:mt-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Article footer CTA */}
          <div className="mt-16 rounded-2xl border border-slate-100 bg-slate-50 p-8 text-center space-y-4">
            <div className="text-3xl">💬</div>
            <h3 className="text-lg font-bold text-slate-900">Need expert help with your project?</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
              Our team is happy to consult — for free. WhatsApp us and we'll give you honest advice on the best approach for your business.
            </p>
            <a
              href={`https://wa.me/919400112833?text=${encodeURIComponent(`Hi SRGroupTM, I read your article "${post.title}" and would like to consult on my project.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:shadow-lg"
              style={{ backgroundColor: color }}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M11.998 2C6.477 2 2 6.477 2 12c0 1.89.522 3.66 1.432 5.17L2 22l4.979-1.395A9.954 9.954 0 0011.998 22c5.522 0 10-4.478 10-10S17.52 2 11.998 2zm0 18.182c-1.617 0-3.12-.447-4.407-1.22l-.316-.188-3.267.916.922-3.18-.205-.326A8.15 8.15 0 013.818 12c0-4.511 3.67-8.182 8.18-8.182 4.51 0 8.18 3.671 8.18 8.182s-3.67 8.182-8.18 8.182z" />
              </svg>
              Consult on WhatsApp
            </a>
          </div>
        </article>
      </section>
    </div>
  );
}
