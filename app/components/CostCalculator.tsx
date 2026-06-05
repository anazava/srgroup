"use client";

import { useState } from "react";

export default function CostCalculator() {
  const [siteType, setSiteType] = useState<"static" | "dynamic">("static");
  const [includeBranding, setIncludeBranding] = useState(false);
  const [includePosters, setIncludePosters] = useState(false);
  const [includeAiVideo, setIncludeAiVideo] = useState(false);

  const PRICES = {
    static:   { inr: 15000, usd: 180,  label: "Static Website",      desc: "Brand portfolio or info site" },
    dynamic:  { inr: 35000, usd: 420,  label: "Dynamic / E-Commerce", desc: "Interactive catalog or store" },
    branding: { inr: 15000, usd: 180 },
    posters:  { inr: 8000,  usd: 95 },
    aiVideo:  { inr: 12000, usd: 145 },
  };

  const inrTotal =
    PRICES[siteType].inr +
    (includeBranding ? PRICES.branding.inr : 0) +
    (includePosters  ? PRICES.posters.inr  : 0) +
    (includeAiVideo  ? PRICES.aiVideo.inr  : 0);

  const usdTotal =
    PRICES[siteType].usd +
    (includeBranding ? PRICES.branding.usd : 0) +
    (includePosters  ? PRICES.posters.usd  : 0) +
    (includeAiVideo  ? PRICES.aiVideo.usd  : 0);

  const waLink = () => {
    const txt = `Hi SRGroupTM, I estimated a package on your website.\n\nWebsite: ${PRICES[siteType].label}\nBranding: ${includeBranding ? "Yes" : "No"}\nPosters: ${includePosters ? "Yes" : "No"}\nAI Video: ${includeAiVideo ? "Yes" : "No"}\n\nEstimated Total: ₹${inrTotal.toLocaleString("en-IN")} ($${usdTotal} USD)`;
    return `https://wa.me/919400112833?text=${encodeURIComponent(txt)}`;
  };

  const Toggle = ({
    checked, onChange, label, desc, price,
  }: {
    checked: boolean; onChange: (v: boolean) => void; label: string; desc: string; price: string;
  }) => (
    <label
      className={`flex items-center justify-between gap-4 rounded-xl border p-3.5 sm:p-4 cursor-pointer transition-all duration-300 ${
        checked ? "border-sky-300 bg-sky-50/50 ring-1 ring-sky-300/50" : "border-slate-100 bg-white hover:border-slate-200"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex-shrink-0 h-5 w-5 rounded border-2 flex items-center justify-center transition-all ${
            checked ? "border-sky-500 bg-sky-500" : "border-slate-300 bg-slate-50"
          }`}
          onClick={() => onChange(!checked)}
        >
          {checked && (
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
        <div>
          <span className={`block text-sm font-bold transition-colors ${checked ? "text-sky-800" : "text-slate-900"}`}>{label}</span>
          <span className="hidden sm:block text-[11px] text-slate-500">{desc}</span>
        </div>
      </div>
      <span className={`text-sm font-extrabold flex-shrink-0 transition-colors ${checked ? "text-sky-600" : "text-slate-400"}`}>
        {price}
      </span>
    </label>
  );

  return (
    <div className="rounded-[2rem] border border-slate-100 bg-white p-6 sm:p-8 shadow-sm flex flex-col gap-6">
      <div>
        <h3 className="text-xl font-black text-slate-900">Project Cost Estimator</h3>
        <p className="mt-1 text-sm text-slate-500">Select services for a transparent estimate.</p>
      </div>

      {/* Website type */}
      <div className="grid grid-cols-2 gap-3">
        {(["static", "dynamic"] as const).map((type) => (
          <button
            key={type}
            onClick={() => setSiteType(type)}
            className={`flex flex-col items-start rounded-xl border p-4 text-left transition-all duration-300 ${
              siteType === type
                ? "border-sky-300 bg-sky-50/50 ring-1 ring-sky-300/50"
                : "border-slate-100 bg-white hover:border-slate-200"
            }`}
          >
            <span className={`text-sm font-bold ${siteType === type ? "text-sky-800" : "text-slate-900"}`}>
              {PRICES[type].label}
            </span>
            <span className={`text-sm font-black mt-2 ${siteType === type ? "text-sky-600" : "text-slate-400"}`}>
              ₹{PRICES[type].inr.toLocaleString("en-IN")}
            </span>
          </button>
        ))}
      </div>

      {/* Add-ons */}
      <div className="space-y-2.5">
        <Toggle
          checked={includeBranding}
          onChange={setIncludeBranding}
          label="Brand Identity"
          desc="Logo & typography"
          price="+₹15,000"
        />
        <Toggle
          checked={includePosters}
          onChange={setIncludePosters}
          label="Social Posters"
          desc="Campaign graphics"
          price="+₹8,000"
        />
        <Toggle
          checked={includeAiVideo}
          onChange={setIncludeAiVideo}
          label="AI Video Reels"
          desc="Product animations"
          price="+₹12,000"
        />
      </div>

      {/* Summary Box & CTA */}
      <div className="rounded-2xl bg-[#040D1C] p-5 text-white shadow-lg relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Subtle glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-indigo-500/10 pointer-events-none" />

        <div className="relative z-10 w-full sm:w-auto text-center sm:text-left">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-0.5">Estimated Total</span>
          <div className="flex items-baseline justify-center sm:justify-start gap-2">
            <span className="text-3xl font-black text-white">₹{inrTotal.toLocaleString("en-IN")}</span>
            <span className="text-xs font-medium text-slate-400">≈ ${usdTotal}</span>
          </div>
        </div>
        
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-900 transition-transform hover:scale-[1.02] shadow"
        >
          Get Quote on WhatsApp
        </a>
      </div>
    </div>
  );
}
