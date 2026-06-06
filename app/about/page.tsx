import { Metadata } from "next";
import Image from "next/image";
import { Instagram, Facebook, Linkedin, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Our Studio | SRGroupTM — Art & Code",
  description: "Meet the SRGroupTM team: Hiba (Creative Designer), Anas (Lead Developer), and Haneena (SEO). Premium creative studio serving South India & GCC.",
};

const TEAM = [
  {
    name: "Hiba",
    role: "Creative Designer",
    image: "/team/Hiba.jpeg",
    color: "#8B5CF6",
    bg: "from-violet-500/20 to-purple-900/20",
    bio: "Crafts premium visual identity systems, vector branding assets, and high-impact social poster layouts. Hiba brings the visual art that makes regional brands truly stand out.",
    skills: ["Brand Identity", "UI Design", "Social Visuals"],
  },
  {
    name: "Anas",
    role: "Lead Developer",
    image: "/team/Anas.jpeg",
    color: "#0EA5E9",
    bg: "from-sky-500/20 to-blue-900/20",
    bio: "Engineers high-speed Next.js interfaces, e-commerce platforms, and AI video pipelines. Anas translates Hiba's art into blazing-fast, responsive, search-optimized code.",
    skills: ["Next.js", "React", "AI Integration"],
  },
  {
    name: "Haneena",
    role: "SEO Specialist",
    image: "/team/Haneena.jpeg",
    color: "#10B981",
    bg: "from-emerald-500/20 to-green-900/20",
    bio: "Optimizes every digital experience for maximum search discoverability. Haneena ensures your site ranks on Google Maps and local directories across India & GCC.",
    skills: ["Local SEO", "Google Maps", "Analytics"],
  },
];

const OFFICES = [
  {
    city: "Malappuram",
    state: "Kerala, India",
    type: "Regional Base",
    address: "Kondotty Bypass Rd, Kondotty, Kerala 673638",
    color: "#0EA5E9",
  },
  {
    city: "Bengaluru",
    state: "Karnataka, India",
    type: "Headquarters",
    address: "Bus Stand, DB. Pura Main Road, Near Rajanukunte, Karnataka 560018",
    color: "#8B5CF6",
  },
];

const VALUES = [
  { icon: "🎨", label: "Art-first thinking" },
  { icon: "⚡", label: "Code-backed speed" },
  { icon: "📍", label: "Regional intelligence" },
  { icon: "🔐", label: "Full IP ownership" },
  { icon: "🤝", label: "50/50 trust model" },
  { icon: "🌍", label: "India & GCC focus" },
];

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://srgrouptm.com/about/#webpage",
        url: "https://srgrouptm.com/about",
        name: "About SRGroupTM | Creative Digital Studio",
        description: "Meet the SRGroupTM team: Hiba (Creative Designer), Anas (Lead Developer), and Haneena (SEO). Premium creative studio serving South India & GCC.",
        publisher: { "@id": "https://srgrouptm.com/#organization" },
      },
      ...TEAM.map(member => ({
        "@type": "Person",
        name: member.name,
        jobTitle: member.role,
        image: `https://srgrouptm.com${member.image}`,
        description: member.bio,
        worksFor: { "@id": "https://srgrouptm.com/#organization" }
      }))
    ]
  };

  return (
    <div className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ── Dark Hero ── */}
      <section className="relative bg-[#04091A] pt-24 pb-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #0EA5E9, transparent 70%)" }} />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full opacity-8"
            style={{ background: "radial-gradient(circle, #8B5CF6, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }} />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 sm:px-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-1.5 text-[11px] font-semibold tracking-widest text-slate-400 uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            Creative Digital Studio
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-5">
            Art meets code.{" "}
            <span style={{
              background: "linear-gradient(90deg, #38BDF8, #818CF8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Results follow.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto">
            We are a creative digital studio from Kerala, building premium websites, brand identities, AI videos, and social graphics for South India & GCC businesses.
          </p>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to top, #ffffff, transparent)" }} />
      </section>

      {/* ── Mission Statement ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="rounded-2xl bg-slate-900 px-10 py-12 sm:px-16 sm:py-16 relative overflow-hidden">
            {/* Glow accent */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none"
              style={{ background: "radial-gradient(circle, #0EA5E9, transparent 70%)" }} />
            <span className="inline-block text-[11px] font-bold text-sky-400 uppercase tracking-widest mb-4">Our Mission</span>
            <blockquote className="text-2xl sm:text-3xl font-bold text-white leading-snug max-w-3xl">
              "Transforming regional brands across South India and the GCC with{" "}
              <span style={{
                background: "linear-gradient(90deg, #38BDF8, #818CF8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                next-gen web design and interactive digital visuals.
              </span>"
            </blockquote>
            <p className="mt-5 text-sm text-slate-400 max-w-2xl leading-relaxed">
              Every project we take is a commitment — to speed, to craft, and to delivering assets that your customers remember and your competitors envy.
            </p>
          </div>
        </div>
      </section>

      {/* ── Spread & Boost Framework ── */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14 space-y-3">
            <span className="section-pill">Our Framework</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              The Spread & Boost Method
            </h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto">
              Two phases. One outcome — a brand that dominates search, social, and first impressions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Spread */}
            <div className="relative rounded-2xl border border-slate-200 bg-white p-8 overflow-hidden group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-sky-600 rounded-t-2xl" />
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-2xl">🎨</div>
                <div>
                  <span className="text-[10px] font-bold text-sky-500 uppercase tracking-widest block">Phase 01</span>
                  <h3 className="text-xl font-bold text-slate-900">Spread — Creative Execution</h3>
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                Hiba crafts the visual identity — logos, typography, and brand guidelines. Anas builds the corresponding high-speed Next.js website. Together they deploy a premium, conversion-optimised storefront for your audience.
              </p>
              <ul className="space-y-2.5">
                {["Vector branding assets & identity palettes", "High-speed React/Next.js framework", "Accessible, responsive layouts"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <span className="h-5 w-5 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Boost */}
            <div className="relative rounded-2xl border border-slate-200 bg-white p-8 overflow-hidden group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-400 to-violet-600 rounded-t-2xl" />
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center text-2xl">🚀</div>
                <div>
                  <span className="text-[10px] font-bold text-violet-500 uppercase tracking-widest block">Phase 02</span>
                  <h3 className="text-xl font-bold text-slate-900">Boost — Digital Scaling</h3>
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                With the visual presence live, Haneena installs Local SEO metadata and claims Google Maps profiles. Anas generates AI reels and animations to capture attention on Instagram, TikTok, and WhatsApp.
              </p>
              <ul className="space-y-2.5">
                {["Local Map optimization & ranking", "AI reels & video commercial assets", "WhatsApp direct consultation funnels"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <span className="h-5 w-5 rounded-full bg-violet-50 border border-violet-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14 space-y-3">
            <span className="section-pill">The People</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Meet the Studio</h2>
            <p className="text-slate-500 text-base max-w-lg mx-auto">
              Three specialists, one unified vision — brands that convert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="group relative rounded-2xl border border-slate-100 bg-white overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Photo top band */}
                <div className="h-64 w-full relative overflow-hidden bg-slate-100">
                  <Image src={member.image} alt={member.name} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                  {/* Gradient color overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.bg} opacity-60 mix-blend-multiply group-hover:opacity-30 transition-opacity duration-500`} />
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                    <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: member.color }}>
                      {member.role}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {member.skills.map((skill) => (
                      <span key={skill}
                        className="rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide"
                        style={{ borderColor: `${member.color}30`, color: member.color, backgroundColor: `${member.color}08` }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Studio Values ── */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-2xl font-bold text-slate-900">What We Stand For</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {VALUES.map((v) => (
              <div key={v.label}
                className="flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-sky-200 hover:text-sky-600 hover:bg-sky-50 transition-all duration-200">
                <span>{v.icon}</span>
                {v.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Office Locations ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14 space-y-3">
            <span className="section-pill">Locations</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Studio Office Network</h2>
            <p className="text-slate-500 text-base">Physical offices supporting operations across India.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {OFFICES.map((office) => (
              <div key={office.city}
                className="relative rounded-2xl border border-slate-100 bg-slate-50 p-8 overflow-hidden group hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl"
                  style={{ backgroundColor: office.color }} />
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ backgroundColor: `${office.color}15` }}>
                    📍
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest mb-1 block"
                      style={{ color: office.color }}>{office.type}</span>
                    <h3 className="text-base font-bold text-slate-900">{office.city}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{office.state}</p>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">{office.address}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to work with us?
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Start a conversation with Anas directly on WhatsApp. We respond within the hour.
          </p>
          <a
            href="https://wa.me/919400112833?text=Hi%20SRGroupTM%2C%20I%20want%20to%20start%20a%20project!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-bold text-white shadow-lg shadow-sky-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-sky-500/30"
            style={{ background: "linear-gradient(135deg, #0EA5E9, #6366F1)" }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M11.998 2C6.477 2 2 6.477 2 12c0 1.89.522 3.66 1.432 5.17L2 22l4.979-1.395A9.954 9.954 0 0011.998 22c5.522 0 10-4.478 10-10S17.52 2 11.998 2zm0 18.182c-1.617 0-3.12-.447-4.407-1.22l-.316-.188-3.267.916.922-3.18-.205-.326A8.15 8.15 0 013.818 12c0-4.511 3.67-8.182 8.18-8.182 4.51 0 8.18 3.671 8.18 8.182s-3.67 8.182-8.18 8.182z" />
            </svg>
            Start a Conversation
          </a>
          
          <div className="pt-8 flex items-center justify-center gap-4">
            <a href="https://www.instagram.com/srgrouptm" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 text-slate-400 hover:text-pink-400 hover:bg-slate-700 transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/srgrouptm/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition-colors" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://www.linkedin.com/in/sr-group-760359188/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 text-slate-400 hover:text-sky-400 hover:bg-slate-700 transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://wa.me/919400112833" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 text-slate-400 hover:text-green-400 hover:bg-slate-700 transition-colors" aria-label="WhatsApp">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
