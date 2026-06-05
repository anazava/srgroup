import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Services & Pricing | SRGroupTM Studio",
  description: "Explore SRGroupTM's services: Custom Web Development, Branding, AI Videos, Poster Design, and Local SEO — all on a transparent 50/50 payment model.",
};

const SERVICES = [
  {
    category: "Web Development",
    emoji: "🌐",
    color: "#0EA5E9",
    items: [
      {
        title: "Static Brand Website",
        desc: "Lightning-fast showcase platform presenting your brand with near-instant load speeds and a perfect mobile experience.",
        price: "₹15,000",
        usd: "$180",
        deliverables: ["Custom layout & asset wiring", "Responsive for all devices", "On-page SEO setup", "WhatsApp CRM float button"],
        waText: "I'm interested in a Static Brand Website.",
      },
      {
        title: "Dynamic Web Application",
        desc: "Custom digital systems with user logins, dynamic data, and admin dashboards — built on Next.js.",
        price: "₹35,000",
        usd: "$420",
        deliverables: ["Next.js architecture", "Secure admin dashboards", "Third-party API integrations", "Cloud database setup"],
        waText: "I'm interested in a Dynamic Web Application.",
      },
      {
        title: "E-Commerce Storefront",
        desc: "High-performance digital catalog or shopping portal — optimised to turn search traffic into active sales.",
        price: "₹35,000",
        usd: "$420",
        deliverables: ["Interactive product catalog", "UPI & card payment links", "Inventory automation", "SEO product pages"],
        waText: "I'm interested in an E-Commerce Storefront.",
      },
    ],
  },
  {
    category: "Branding & Identity",
    emoji: "🎨",
    color: "#8B5CF6",
    items: [
      {
        title: "Comprehensive Identity Design",
        desc: "A full visual presence — logos, colors, typography, and brand guidelines via our Spread & Boost framework.",
        price: "₹15,000",
        usd: "$180",
        deliverables: ["Vector logos & variations", "Cohesive color palette", "Typography pairings", "Business card & stationery"],
        waText: "I'm interested in the Brand Identity Design package.",
      },
    ],
  },
  {
    category: "AI Video & Graphic Design",
    emoji: "🎬",
    color: "#F43F5E",
    items: [
      {
        title: "Poster & Graphic Design",
        desc: "Social media visual packs, flyers, and campaign collateral designed to engage local buyers on Instagram & WhatsApp.",
        price: "₹8,000",
        usd: "$95",
        deliverables: ["Social media poster kits", "Print-ready flyer designs", "WhatsApp brochure sheets", "Story & slide templates"],
        waText: "I'm interested in Poster & Graphic Design.",
      },
      {
        title: "AI-Powered Video Production",
        desc: "High-impact short reels, brand intros, and promotional animations using next-gen generative AI pipelines.",
        price: "₹12,000",
        usd: "$145",
        deliverables: ["Instagram & TikTok reels", "Animated logo intros", "Product simulation clips", "AI voiceovers & sound"],
        waText: "I'm interested in AI-Powered Video Production.",
      },
    ],
  },
  {
    category: "Local SEO & Maps",
    emoji: "📍",
    color: "#10B981",
    items: [
      {
        title: "Localised Maps SEO & SEM",
        desc: "Position your business where customers search — Google Maps, local directories, and high-intent queries.",
        price: "₹10,000",
        usd: "$120",
        deliverables: ["Google Maps listing claims", "LocalBusiness schema setup", "High-intent keyword mapping", "Google Business audit"],
        waText: "I'm interested in Local SEO & Maps optimisation.",
      },
    ],
  },
];

const WA_BASE = "https://wa.me/919400112833?text=";

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": SERVICES.flatMap(category => 
      category.items.map(item => ({
        "@type": "Service",
        "name": item.title,
        "description": item.desc,
        "provider": { "@id": "https://srgrouptm.com/#organization" },
        "offers": {
          "@type": "Offer",
          "price": item.price.replace(/[^0-9]/g, ''),
          "priceCurrency": "INR"
        }
      }))
    )
  };

  return (
    <div className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Dark Hero ── */}
      <section className="relative bg-[#04091A] pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 right-1/3 w-[400px] h-[400px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #8B5CF6, transparent 70%)" }} />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full opacity-8"
            style={{ background: "radial-gradient(circle, #0EA5E9, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 sm:px-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-1.5 text-[11px] font-semibold tracking-widest text-slate-400 uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Transparent Pricing · 50/50 Model
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-5">
            Everything your brand{" "}
            <span style={{ background: "linear-gradient(90deg, #818CF8, #38BDF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              needs to grow.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto mb-8">
            From a single website to a full creative package — every service is custom-built, fairly priced, and delivered on time.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["50% Upfront · 50% on Launch", "Full IP Ownership", "100% Custom — No Templates"].map((pill) => (
              <span key={pill} className="flex items-center gap-1.5 rounded-full border border-white/12 bg-white/6 px-4 py-1.5 text-[11px] font-semibold text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" />
                {pill}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to top, #ffffff, transparent)" }} />
      </section>

      {/* ── Service Sections ── */}
      <div className="bg-white">
        {SERVICES.map((group, gi) => (
          <section key={group.category} className={`py-20 ${gi % 2 === 1 ? "bg-slate-50" : "bg-white"}`}>
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-12">
                <div className="h-12 w-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 border"
                  style={{ backgroundColor: `${group.color}10`, borderColor: `${group.color}25` }}>
                  {group.emoji}
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{group.category}</h2>
                  <div className="h-0.5 w-12 mt-2 rounded-full" style={{ backgroundColor: group.color }} />
                </div>
              </div>

              {/* Cards */}
              <div className={`grid gap-6 ${group.items.length === 1 ? "grid-cols-1 max-w-lg" : group.items.length === 2 ? "grid-cols-1 md:grid-cols-2 max-w-3xl" : "grid-cols-1 md:grid-cols-3"} mx-auto`}>
                {group.items.map((item) => (
                  <div key={item.title}
                    className="relative flex flex-col rounded-2xl border border-slate-100 bg-white overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                    {/* Color top bar */}
                    <div className="h-1 w-full" style={{ backgroundColor: group.color }} />

                    <div className="flex-1 p-7 space-y-5">
                      {/* Title + price */}
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-sky-600 transition-colors">{item.title}</h3>
                        <div className="flex-shrink-0 text-right">
                          <span className="block text-lg font-black" style={{ color: group.color }}>{item.price}</span>
                          <span className="text-[10px] text-slate-400">≈ {item.usd}</span>
                        </div>
                      </div>

                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>

                      {/* Deliverables */}
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Includes</p>
                        <ul className="space-y-2">
                          {item.deliverables.map((d) => (
                            <li key={d} className="flex items-start gap-2.5 text-sm text-slate-600">
                              <span className="flex-shrink-0 h-4 w-4 rounded-full flex items-center justify-center mt-0.5"
                                style={{ backgroundColor: `${group.color}15` }}>
                                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} style={{ color: group.color }}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              </span>
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* 50/50 note + CTA */}
                    <div className="px-7 pb-7 space-y-3">
                      <p className="text-[10px] text-slate-400 border-t border-slate-100 pt-4">
                        50% deposit to start · 50% on final approval
                      </p>
                      <a
                        href={`${WA_BASE}${encodeURIComponent(item.waText)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.01]"
                        style={{ backgroundColor: group.color }}
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                          <path d="M11.998 2C6.477 2 2 6.477 2 12c0 1.89.522 3.66 1.432 5.17L2 22l4.979-1.395A9.954 9.954 0 0011.998 22c5.522 0 10-4.478 10-10S17.52 2 11.998 2zm0 18.182c-1.617 0-3.12-.447-4.407-1.22l-.316-.188-3.267.916.922-3.18-.205-.326A8.15 8.15 0 013.818 12c0-4.511 3.67-8.182 8.18-8.182 4.51 0 8.18 3.671 8.18 8.182s-3.67 8.182-8.18 8.182z" />
                        </svg>
                        Inquire on WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ── Bottom CTA ── */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Not sure what you need?</h2>
          <p className="text-slate-400 text-base leading-relaxed">
            WhatsApp us and we'll recommend the right package for your business in minutes.
          </p>
          <a
            href="https://wa.me/919400112833?text=Hi%20SRGroupTM%2C%20I%20need%20help%20choosing%20the%20right%20service."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02]"
            style={{ background: "linear-gradient(135deg, #0EA5E9, #6366F1)" }}
          >
            Get a Free Recommendation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
