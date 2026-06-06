"use client";

import { useState } from "react";
import { Instagram, Facebook, Linkedin, MessageCircle } from "lucide-react";

interface FormFields {
  name: string;
  businessName: string;
  serviceNeeded: string;
  message: string;
}

interface FormErrors {
  name?: string;
  businessName?: string;
  serviceNeeded?: string;
  message?: string;
}

const SERVICES_LIST = [
  "Static Brand Website",
  "Dynamic Web Application",
  "E-Commerce Storefront",
  "Brand Identity Design",
  "Poster & Graphic Design",
  "AI Video Production",
  "Local SEO & Maps",
  "Full Creative Package",
];

const CONTACT_METHODS = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M11.998 2C6.477 2 2 6.477 2 12c0 1.89.522 3.66 1.432 5.17L2 22l4.979-1.395A9.954 9.954 0 0011.998 22c5.522 0 10-4.478 10-10S17.52 2 11.998 2zm0 18.182c-1.617 0-3.12-.447-4.407-1.22l-.316-.188-3.267.916.922-3.18-.205-.326A8.15 8.15 0 013.818 12c0-4.511 3.67-8.182 8.18-8.182 4.51 0 8.18 3.671 8.18 8.182s-3.67 8.182-8.18 8.182z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+91 94001 12833",
    href: "https://wa.me/919400112833",
    color: "#25D366",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "info@srgrouptm.com",
    href: "mailto:info@srgrouptm.com",
    color: "#0EA5E9",
  },
];

export default function ContactPage() {
  const [fields, setFields] = useState<FormFields>({ name: "", businessName: "", serviceNeeded: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showModal, setShowModal] = useState(false);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://srgrouptm.com/contact/#webpage",
    url: "https://srgrouptm.com/contact",
    name: "Contact SRGroupTM",
    description: "Start a conversation with SRGroupTM via WhatsApp or Email. Offices in Kerala and Bengaluru.",
    publisher: { "@id": "https://srgrouptm.com/#organization" },
  };

  const validate = () => {
    const e: FormErrors = {};
    if (!fields.name.trim()) e.name = "Name is required";
    if (!fields.businessName.trim()) e.businessName = "Business name is required";
    if (!fields.serviceNeeded) e.serviceNeeded = "Please select a service";
    if (!fields.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (validate()) setShowModal(true);
  };

  const waLink = () => {
    const text = `Hi Anas, I submitted the studio contact form.\n\nName: ${fields.name}\nBusiness: ${fields.businessName}\nService: ${fields.serviceNeeded}\n\nMessage: ${fields.message}`;
    return `https://wa.me/919400112833?text=${encodeURIComponent(text)}`;
  };

  const inputClass = (error?: string) =>
    `w-full rounded-xl border px-4 py-3 text-sm text-slate-900 bg-slate-50 placeholder:text-slate-400 outline-none transition-all duration-200 focus:bg-white focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 ${
      error ? "border-red-400 bg-red-50" : "border-slate-200"
    }`;

  return (
    <div className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ── Dark Hero ── */}
      <section className="relative bg-[#04091A] pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #10B981, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 sm:px-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-1.5 text-[11px] font-semibold tracking-widest text-slate-400 uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            We reply within the hour
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-5">
            Let's build something{" "}
            <span style={{ background: "linear-gradient(90deg, #34D399, #38BDF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              great together.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto">
            Tell us about your project. We'll come back with a clear plan, honest pricing, and zero pressure.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to top, #ffffff, transparent)" }} />
      </section>

      {/* ── Contact Body ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left — info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-slate-900">Get in touch</h2>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Reach us directly via WhatsApp or email, or fill the form and we'll contact you.
                </p>
              </div>

              {/* Contact methods */}
              <div className="space-y-3">
                {CONTACT_METHODS.map((m) => (
                  <a key={m.label} href={m.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                    <div className="flex-shrink-0 h-11 w-11 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${m.color}15`, color: m.color }}>
                      {m.icon}
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">{m.label}</span>
                      <span className="block text-sm font-semibold text-slate-800">{m.value}</span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Offices */}
              <div className="space-y-4">
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Our Offices</h3>
                {[
                  { city: "Malappuram, Kerala", type: "Regional Base", addr: "Kondotty Bypass Rd, Kondotty 673638", color: "#0EA5E9" },
                  { city: "Bengaluru, Karnataka", type: "HQ", addr: "Bus Stand, DB. Pura Main Rd, Rajanukunte 560018", color: "#8B5CF6" },
                ].map((o) => (
                  <div key={o.city} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <div className="flex-shrink-0 mt-0.5 h-7 w-7 rounded-lg flex items-center justify-center text-sm"
                      style={{ backgroundColor: `${o.color}15`, color: o.color }}>📍</div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider" style={{ color: o.color }}>{o.type}</span>
                      <span className="block text-sm font-semibold text-slate-800">{o.city}</span>
                      <span className="block text-xs text-slate-400 mt-0.5">{o.addr}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="space-y-4 pt-2">
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Follow Us</h3>
                <div className="flex items-center gap-3">
                  <a href="https://www.instagram.com/srgrouptm" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-50 text-pink-500 hover:bg-pink-100 transition-colors" aria-label="Instagram">
                    <Instagram size={18} />
                  </a>
                  <a href="https://www.facebook.com/srgrouptm/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors" aria-label="Facebook">
                    <Facebook size={18} />
                  </a>
                  <a href="https://www.linkedin.com/in/sr-group-760359188/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-50 text-sky-600 hover:bg-sky-100 transition-colors" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href="https://wa.me/919400112833" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 text-green-500 hover:bg-green-100 transition-colors" aria-label="WhatsApp">
                    <MessageCircle size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-slate-100 bg-white shadow-sm p-8 space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Brief Your Project</h2>
                  <p className="text-sm text-slate-400 mt-1">Fill this in and we'll reply within the hour on WhatsApp.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Your Name</label>
                      <input
                        type="text"
                        value={fields.name}
                        onChange={(e) => setFields({ ...fields, name: e.target.value })}
                        placeholder="e.g. Anas"
                        className={inputClass(errors.name)}
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Business Name</label>
                      <input
                        type="text"
                        value={fields.businessName}
                        onChange={(e) => setFields({ ...fields, businessName: e.target.value })}
                        placeholder="e.g. My Shop"
                        className={inputClass(errors.businessName)}
                      />
                      {errors.businessName && <p className="mt-1 text-xs text-red-500">{errors.businessName}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Service Needed</label>
                    <select
                      value={fields.serviceNeeded}
                      onChange={(e) => setFields({ ...fields, serviceNeeded: e.target.value })}
                      className={inputClass(errors.serviceNeeded)}
                    >
                      <option value="">-- Select a service --</option>
                      {SERVICES_LIST.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.serviceNeeded && <p className="mt-1 text-xs text-red-500">{errors.serviceNeeded}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Your Message</label>
                    <textarea
                      rows={4}
                      value={fields.message}
                      onChange={(e) => setFields({ ...fields, message: e.target.value })}
                      placeholder="Tell us about your project — goals, timeline, budget..."
                      className={inputClass(errors.message)}
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.01] hover:shadow-lg"
                    style={{ background: "linear-gradient(135deg, #0EA5E9, #6366F1)" }}
                  >
                    Send Brief
                  </button>
                  <p className="text-center text-xs text-slate-400">We'll confirm via WhatsApp within 60 minutes.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Success Modal ── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl text-center space-y-5">
            <div className="mx-auto h-14 w-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-2xl">✓</div>
            <h3 className="text-xl font-bold text-slate-900">Brief Received!</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Thanks! Click below to chat with Anas on WhatsApp and we'll get things moving.
            </p>
            <div className="space-y-3 pt-2">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-xl py-3.5 text-sm font-bold text-white transition-all hover:scale-[1.01]"
                style={{ background: "linear-gradient(135deg, #0EA5E9, #6366F1)" }}
              >
                Continue on WhatsApp
              </a>
              <button
                onClick={() => { setShowModal(false); setFields({ name: "", businessName: "", serviceNeeded: "", message: "" }); }}
                className="w-full rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
