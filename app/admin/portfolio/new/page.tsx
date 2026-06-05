"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewPortfolioItem() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    slug: "",
    clientName: "",
    storyContent: "",
    coverImage: "",
    videoUrl: "",
    externalLink: "",
    published: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/portfolio", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/admin/portfolio");
      router.refresh();
    } else {
      alert("Failed to save portfolio item.");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-8">Add Portfolio Project</h1>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Project Title</label>
            <input required type="text" className="w-full rounded-xl border border-slate-200 p-3" value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">URL Slug (e.g. project-name)</label>
            <input required type="text" className="w-full rounded-xl border border-slate-200 p-3" value={form.slug} onChange={e => setForm({...form, slug: e.target.value})} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Client Name</label>
          <input type="text" className="w-full rounded-xl border border-slate-200 p-3" value={form.clientName} onChange={e => setForm({...form, clientName: e.target.value})} />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Cover Image URL</label>
          <input type="url" className="w-full rounded-xl border border-slate-200 p-3" placeholder="https://..." value={form.coverImage} onChange={e => setForm({...form, coverImage: e.target.value})} />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Video URL (Optional)</label>
            <input type="url" className="w-full rounded-xl border border-slate-200 p-3" value={form.videoUrl} onChange={e => setForm({...form, videoUrl: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">External Link (Optional)</label>
            <input type="url" className="w-full rounded-xl border border-slate-200 p-3" value={form.externalLink} onChange={e => setForm({...form, externalLink: e.target.value})} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Project Story (Markdown supported)</label>
          <textarea required rows={8} className="w-full rounded-xl border border-slate-200 p-3" value={form.storyContent} onChange={e => setForm({...form, storyContent: e.target.value})} />
        </div>

        <div className="flex items-center gap-3">
          <input type="checkbox" id="published" checked={form.published} onChange={e => setForm({...form, published: e.target.checked})} className="w-5 h-5" />
          <label htmlFor="published" className="text-sm font-medium text-slate-700">Publish immediately</label>
        </div>

        <div className="pt-6 border-t border-slate-100 flex justify-end gap-4">
          <button type="button" onClick={() => router.back()} className="px-6 py-3 rounded-xl font-medium text-slate-500 hover:bg-slate-50">Cancel</button>
          <button type="submit" disabled={loading} className="px-6 py-3 rounded-xl font-medium text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-50">
            {loading ? "Saving..." : "Save Project"}
          </button>
        </div>
      </form>
    </div>
  );
}
