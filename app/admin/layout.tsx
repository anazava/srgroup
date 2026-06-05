import Link from "next/link";
import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col fixed inset-y-0 left-0 z-10">
        <div className="p-6">
          <Link href="/admin" className="text-xl font-bold tracking-tight">
            Studio<span className="text-sky-400">Admin</span>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <Link href="/admin/blog" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors text-slate-300 hover:text-white">
            <span>📝</span> Blog & SEO
          </Link>
          <Link href="/admin/portfolio" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors text-slate-300 hover:text-white">
            <span>🎨</span> Portfolio
          </Link>
        </nav>

        <div className="p-6">
          <a href="/" target="_blank" className="text-sm text-slate-400 hover:text-white flex items-center gap-2">
            View Live Site ↗
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8 lg:p-12">
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
