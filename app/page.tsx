import CostCalculator from "@/app/components/CostCalculator";
import FaqAccordion from "@/app/components/FaqAccordion";
import AnimatedHero from "@/app/components/AnimatedHero";
import ServicesUniverse from "@/app/components/ServicesUniverse";
import RecentPortfolio from "@/app/components/RecentPortfolio";

export default function HomePage() {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://srgrouptm.com/#website",
        url: "https://srgrouptm.com",
        name: "SRGroupTM",
        description: "Premium creative digital studio delivering high-performance Next.js websites, brand identity systems, and AI video reels.",
        publisher: { "@id": "https://srgrouptm.com/#organization" },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://srgrouptm.com/#service",
        name: "SRGroupTM Creative Studio",
        image: "https://srgrouptm.com/logo.png",
        url: "https://srgrouptm.com",
        telephone: "+919400112833",
        email: "info@srgrouptm.com",
        priceRange: "$$",
        address: [
          {
            "@type": "PostalAddress",
            streetAddress: "Kondotty Bypass Rd",
            addressLocality: "Kondotty",
            addressRegion: "Kerala",
            postalCode: "673638",
            addressCountry: "IN",
          },
          {
            "@type": "PostalAddress",
            streetAddress: "Bus Stand, DB. Pura Main Road, Near Rajanukunte",
            addressLocality: "Bengaluru",
            addressRegion: "Karnataka",
            postalCode: "560018",
            addressCountry: "IN",
          }
        ],
        areaServed: ["India", "UAE", "Saudi Arabia", "Oman", "Qatar", "Bahrain", "Kuwait"],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* ── Hero ── */}
      <AnimatedHero />

      {/* ── Services + Values ── */}
      <ServicesUniverse />

      {/* ── Recent Portfolio ── */}
      <RecentPortfolio />

      {/* ── Pricing Calculator ── */}
      <section className="bg-slate-50 border-y border-slate-100 py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div className="space-y-6">
              <span className="section-pill">Transparent Pricing</span>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                Build Your Package
              </h2>
              <p className="text-slate-500 text-base leading-relaxed">
                Select exactly what you need — from a lightweight brand portfolio to a full creative package with AI video. Get an instant estimate based on our transparent 50/50 model.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: "Visual Asset Handover",
                    desc: "Raw design files, vector outlines, and compiled high-def video packages delivered to you.",
                  },
                  {
                    title: "INR & USD Estimates",
                    desc: "Pricing shown in both Indian Rupee and US Dollar for GCC & international clients.",
                  },
                  {
                    title: "No Hidden Fees",
                    desc: "The price you see is the price you pay. Full copyright included.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-sky-100 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <span className="block text-sm font-bold text-slate-900">{item.title}</span>
                      <span className="text-xs text-slate-500 mt-0.5">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div>
              <CostCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-6 sm:px-8 space-y-12">
          <div className="text-center space-y-4">
            <span className="section-pill">FAQs</span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-base">
              Everything you need to know about how we work.
            </p>
          </div>
          <FaqAccordion />
        </div>
      </section>
    </>
  );
}
