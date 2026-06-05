"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewBlogPost() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    coverImage: "",
    author: "SRGroupTM Studio",
    metaTitle: "",
    metaDescription: "",
    directAnswer: "",
    published: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/admin/blog");
      router.refresh();
    } else {
      alert("Failed to save blog post.");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto pb-16">
      <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-8">Write New Article</h1>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6">
          <h2 className="text-lg font-bold text-slate-900 border-b pb-2">Core Content</h2>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Article Title</label>
              <input required type="text" className="w-full rounded-xl border border-slate-200 p-3" value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">URL Slug</label>
              <input required type="text" className="w-full rounded-xl border border-slate-200 p-3" value={form.slug} onChange={e => setForm({...form, slug: e.target.value})} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Author</label>
              <input type="text" className="w-full rounded-xl border border-slate-200 p-3" value={form.author} onChange={e => setForm({...form, author: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Cover Image URL</label>
              <input type="url" className="w-full rounded-xl border border-slate-200 p-3" value={form.coverImage} onChange={e => setForm({...form, coverImage: e.target.value})} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Article Excerpt (Short preview)</label>
            <textarea rows={3} className="w-full rounded-xl border border-slate-200 p-3" value={form.excerpt} onChange={e => setForm({...form, excerpt: e.target.value})} />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Full Content (Markdown)</label>
            <textarea required rows={12} className="w-full rounded-xl border border-slate-200 p-3 font-mono text-sm" value={form.content} onChange={e => setForm({...form, content: e.target.value})} />
          </div>
        </div>

        <div className="bg-slate-900 rounded-3xl p-8 shadow-sm space-y-6">
          <div>
            <h2 className="text-lg font-bold text-white border-b border-white/10 pb-2 flex items-center gap-2">
              <span className="text-sky-400">🤖</span> 2026 SEO & AEO Configuration
            </h2>
            <p className="text-slate-400 text-sm mt-2">These fields are injected directly into the JSON-LD schemas and meta tags for Google and AI engines.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">SEO Meta Title</label>
              <input type="text" className="w-full rounded-xl border border-white/10 bg-white/5 text-white p-3" value={form.metaTitle} onChange={e => setForm({...form, metaTitle: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">SEO Meta Description</label>
              <input type="text" className="w-full rounded-xl border border-white/10 bg-white/5 text-white p-3" value={form.metaDescription} onChange={e => setForm({...form, metaDescription: e.target.value})} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Direct Answer Summary (AEO)</label>
            <p className="text-xs text-slate-500 mb-2">Write a 2-sentence direct answer designed specifically for ChatGPT, Perplexity, or Google SGE to quote directly.</p>
            <textarea rows={3} className="w-full rounded-xl border border-white/10 bg-white/5 text-white p-3" value={form.directAnswer} onChange={e => setForm({...form, directAnswer: e.target.value})} />
          </div>
        </div>

        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-3">
            <input type="checkbox" id="published" checked={form.published} onChange={e => setForm({...form, published: e.target.checked})} className="w-5 h-5 rounded border-slate-300 text-sky-600 focus:ring-sky-600" />
            <label htmlFor="published" className="text-sm font-bold text-slate-900">Publish to live site</label>
          </div>
          <div className="flex gap-4">
            <button type="button" onClick={() => router.back()} className="px-6 py-3 rounded-xl font-medium text-slate-500 hover:bg-slate-50 border border-slate-200 bg-white">Cancel</button>
            <button type="submit" disabled={loading} className="px-8 py-3 rounded-xl font-bold text-white bg-sky-600 hover:bg-sky-500 disabled:opacity-50">
              {loading ? "Saving..." : "Save Article"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
