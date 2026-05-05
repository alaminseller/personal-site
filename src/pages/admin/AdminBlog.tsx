import { useState, useEffect } from "react";
import AdminLayout from "./AdminLayout";
import { blogPosts as initialPosts, BlogPost } from "@/data/blogData";
import { Plus, Edit2, Trash2, Save, X, Image as ImageIcon } from "lucide-react";

export default function AdminBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("admin_blog_posts");
    if (saved) {
      setPosts(JSON.parse(saved));
    } else {
      setPosts(initialPosts);
    }
  }, []);

  const saveToLocal = (newPosts: BlogPost[]) => {
    setPosts(newPosts);
    localStorage.setItem("admin_blog_posts", JSON.stringify(newPosts));
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const postData: Partial<BlogPost> = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      content: formData.get("content") as string,
      tags: (formData.get("tags") as string).split(",").map(t => t.trim()),
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      image: formData.get("image") as string || "/4.png",
      author: "Alamin Rafi",
    };

    if (editingPost) {
      const updated = posts.map(p => p.id === editingPost.id ? { ...p, ...postData } : p);
      saveToLocal(updated);
      setEditingPost(null);
    } else {
      const newPost: BlogPost = {
        id: Date.now().toString(),
        slug: (postData.title || "").toLowerCase().replace(/\s+/g, "-"),
        ...postData as BlogPost
      };
      saveToLocal([newPost, ...posts]);
      setIsAdding(false);
    }
  };

  const deletePost = (id: string) => {
    if (confirm("Delete this post?")) {
      saveToLocal(posts.filter(p => p.id !== id));
    }
  };

  return (
    <AdminLayout title="Blog Management">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">All Posts</h2>
        <button 
          onClick={() => setIsAdding(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-600 text-white font-bold text-sm hover:bg-violet-700 transition-colors"
        >
          <Plus className="w-4 h-4" /> Add New Post
        </button>
      </div>

      {(isAdding || editingPost) && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-[#0d0b1f] w-full max-w-2xl rounded-3xl p-8 border border-zinc-200 dark:border-white/[0.08] shadow-2xl overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                {isAdding ? "Create Post" : "Edit Post"}
              </h3>
              <button 
                onClick={() => { setIsAdding(false); setEditingPost(null); }}
                aria-label="Close Modal"
              >
                <X className="w-5 h-5 text-zinc-400" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-6">
              <div>
                <label htmlFor="blog-title" className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 mb-2">Title</label>
                <input 
                  id="blog-title"
                  name="title"
                  defaultValue={editingPost?.title}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-white/[0.08] bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white focus:ring-2 focus:ring-violet-500 outline-none"
                />
              </div>

              <div>
                <label htmlFor="blog-desc" className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 mb-2">Description</label>
                <textarea 
                  id="blog-desc"
                  name="description"
                  defaultValue={editingPost?.description}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-white/[0.08] bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white focus:ring-2 focus:ring-violet-500 outline-none h-20"
                />
              </div>

              <div>
                <label htmlFor="blog-content" className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 mb-2">Content (HTML allowed)</label>
                <textarea 
                  id="blog-content"
                  name="content"
                  defaultValue={editingPost?.content}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-white/[0.08] bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white focus:ring-2 focus:ring-violet-500 outline-none h-40 font-mono text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="blog-tags" className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 mb-2">Tags (comma separated)</label>
                  <input 
                    id="blog-tags"
                    name="tags"
                    defaultValue={editingPost?.tags.join(", ")}
                    placeholder="SEO, Web Design, tech"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-white/[0.08] bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white focus:ring-2 focus:ring-violet-500 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="blog-image" className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 mb-2">Image URL</label>
                  <input 
                    id="blog-image"
                    name="image"
                    defaultValue={editingPost?.image}
                    placeholder="/4.png"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-white/[0.08] bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white focus:ring-2 focus:ring-violet-500 outline-none"
                  />
                </div>
              </div>

              <button className="w-full py-4 rounded-2xl bg-brand-gradient text-white font-bold shadow-lg shadow-violet-500/20 hover:scale-[1.02] transition-transform">
                Save Post
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="bg-white dark:bg-[#0d0b1f] rounded-3xl border border-zinc-200 dark:border-white/[0.08] overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-zinc-100 dark:border-white/[0.05]">
              <th className="px-6 py-4 text-xs font-bold text-zinc-400 uppercase tracking-widest">Post</th>
              <th className="px-6 py-4 text-xs font-bold text-zinc-400 uppercase tracking-widest">Date</th>
              <th className="px-6 py-4 text-xs font-bold text-zinc-400 uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-white/[0.03]">
            {posts.map(post => (
              <tr key={post.id} className="group hover:bg-zinc-50 dark:hover:bg-white/[0.01] transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <img src={post.image} alt={post.title} className="w-12 h-12 rounded-lg object-cover" />
                    <div>
                      <p className="font-bold text-zinc-900 dark:text-white">{post.title}</p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">{post.tags.join(" • ")}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-zinc-500 dark:text-zinc-400">{post.date}</td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-2">
                    <button 
                      onClick={() => setEditingPost(post)}
                      aria-label={`Edit ${post.title}`}
                      className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-violet-100 dark:hover:bg-violet-900/30 hover:text-violet-600 transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => deletePost(post.id)}
                      aria-label={`Delete ${post.title}`}
                      className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-red-100 dark:hover:bg-red-900/30 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
