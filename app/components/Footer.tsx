import Link from "next/link";
import { InstagramIcon, FacebookIcon, LinkedinIcon, WhatsAppIcon } from "./SocialIcons";

const LINKS = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/about" },
  { label: "Services",   href: "/services" },
  { label: "Blog",       href: "/blog" },
  { label: "Contact",    href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Brand column */}
          <div className="md:col-span-5 space-y-5">
            <img src="/logo.svg" alt="SRGroupTM" className="h-9 w-auto brightness-0 invert opacity-90" />
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Premium web design, brand identity, AI video production, and social graphics for South India & GCC businesses.
            </p>
            <a
              href="https://wa.me/919400112833?text=Hi%20SRGroupTM%2C%20I%20want%20to%20start%20a%20project!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-sky-400"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M11.998 2C6.477 2 2 6.477 2 12c0 1.89.522 3.66 1.432 5.17L2 22l4.979-1.395A9.954 9.954 0 0011.998 22c5.522 0 10-4.478 10-10S17.52 2 11.998 2zm0 18.182c-1.617 0-3.12-.447-4.407-1.22l-.316-.188-3.267.916.922-3.18-.205-.326A8.15 8.15 0 013.818 12c0-4.511 3.67-8.182 8.18-8.182 4.51 0 8.18 3.671 8.18 8.182s-3.67 8.182-8.18 8.182z" />
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Quick links */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Navigation</h3>
            <ul className="space-y-3">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Offices</h3>
            <div className="space-y-5 text-sm">
              <div>
                <span className="block font-semibold text-white text-xs mb-1">Malappuram (Regional Base)</span>
                <span className="text-slate-500 text-xs leading-relaxed">Kondotty Bypass Road, Kondotty, Kerala 673638</span>
              </div>
              <div>
                <span className="block font-semibold text-white text-xs mb-1">Bengaluru (HQ)</span>
                <span className="text-slate-500 text-xs leading-relaxed">Bus Stand, DB. Pura Main Road, Near Rajanukunte, Karnataka 560018</span>
              </div>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-5">Contact</h3>
            <div className="space-y-3 text-sm mb-6">
              <a href="mailto:info@srgrouptm.com" className="block text-slate-400 hover:text-sky-400 transition-colors text-xs break-all">
                info@srgrouptm.com
              </a>
              <a href="tel:+919400112833" className="block text-slate-400 hover:text-sky-400 transition-colors text-xs">
                +91 94001 12833
              </a>
            </div>
            
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Follow Us</h3>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/srgrouptm" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-500 transition-colors" aria-label="Instagram">
                <InstagramIcon size={18} />
              </a>
              <a href="https://www.facebook.com/srgrouptm/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors" aria-label="Facebook">
                <FacebookIcon size={18} />
              </a>
              <a href="https://www.linkedin.com/in/sr-group-760359188/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
              <a href="https://wa.me/919400112833" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green-500 transition-colors" aria-label="WhatsApp">
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© 2026 SRGroupTM. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
