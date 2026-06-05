import { db } from "@/lib/db";
import Link from "next/link";

export default async function AdminBlogList() {
  let posts: any[] = [];
  try {
    posts = await db.post.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.warn("Database connection failed for Admin Blog.");
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Blog CMS</h1>
          <p className="text-slate-500 mt-2">Manage your articles and AEO structured data.</p>
        </div>
        <Link 
          href="/admin/blog/new" 
          className="bg-sky-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-sky-500 transition-colors shadow-sm"
        >
          + New Post
        </Link>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        {posts.length === 0 ? (
          <div className="p-12 text-center text-slate-500">
            No blog posts found. Create your first post!
          </div>
        ) : (
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-900">{post.title}</div>
                    <div className="text-xs text-slate-400 mt-1">/{post.slug}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      post.published ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {post.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right space-x-4">
                    <Link href={`/admin/blog/${post.id}/edit`} className="text-sky-600 hover:text-sky-800 font-medium text-sm">Edit</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
