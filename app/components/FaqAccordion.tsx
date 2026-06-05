"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "Where are your offices located?",
    answer: "Our regional base is on Kondotty Bypass Road, Malappuram, Kerala. Our corporate HQ is in Bengaluru, Karnataka — serving clients across India and the GCC corridor.",
  },
  {
    question: "How does the 50/50 payment model work?",
    answer: "We charge 50% upfront before starting design and development work. The remaining 50% is payable only when you approve the final result and we're ready to launch. No hidden fees, ever.",
  },
  {
    question: "What is the 'Spread & Boost' framework?",
    answer: "Spread & Boost is our human-centric design methodology. Hiba (Creative Designer) and Anas (Lead Developer) combine art and code to 'Spread' your digital footprint. Haneena (SEO Specialist) then 'Boosts' search rankings on Google Maps to drive organic growth.",
  },
  {
    question: "How do you produce AI Videos and social graphics?",
    answer: "We combine cutting-edge generative AI systems with custom video editing pipelines to deliver short-form reels, promotional intros, and social campaign posters optimised for Instagram, TikTok, and WhatsApp.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="space-y-3">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {FAQS.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "border-sky-200 bg-sky-50"
                : "border-slate-100 bg-slate-50 hover:border-slate-200"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className={`text-sm font-bold leading-snug transition-colors ${isOpen ? "text-sky-700" : "text-slate-900"}`}>
                {faq.question}
              </span>
              <span className={`flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300 ${
                isOpen ? "border-sky-300 bg-sky-600 text-white rotate-45" : "border-slate-200 bg-white text-slate-500"
              }`}>
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </span>
            </button>

            <div
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: isOpen ? "200px" : "0px" }}
            >
              <p className="px-6 pb-5 text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
