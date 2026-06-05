export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Dashboard Overview</h1>
        <p className="text-slate-500 mt-2">Welcome to the SRGroupTM studio control panel.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
          <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center text-2xl mb-6">📝</div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">Blog & SEO</h2>
          <p className="text-slate-500 text-sm mb-6">Manage articles, case studies, and Answer Engine Optimization (AEO) data.</p>
          <a href="/admin/blog" className="inline-block bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors">
            Manage Blog Posts
          </a>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
          <div className="w-12 h-12 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center text-2xl mb-6">🎨</div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">Portfolio Showcase</h2>
          <p className="text-slate-500 text-sm mb-6">Add new creative projects, client stories, videos, and external links.</p>
          <a href="/admin/portfolio" className="inline-block bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors">
            Manage Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}
