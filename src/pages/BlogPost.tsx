import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/blogData";
import { ArrowLeft, Calendar, User, Tag, Share2 } from "lucide-react";
import Header from "@/components/modern/Header";
import Footer from "@/components/professional/Footer";
import NotFound from "./NotFound";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#070711]">
      <Header />
      
      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors mb-8 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <article>
          <header className="mb-10">
            <div className="flex flex-wrap gap-3 mb-6">
              {post.tags.map(tag => (
                <span key={tag} className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 border border-violet-100 dark:border-violet-800/30">
                  <Tag className="w-3 h-3" /> {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-sm text-zinc-400 border-b border-zinc-100 dark:border-white/[0.05] pb-10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 font-bold text-xs">
                  AR
                </div>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
            </div>
          </header>

          <div className="aspect-video rounded-3xl overflow-hidden mb-12 border border-zinc-100 dark:border-white/[0.05] shadow-xl shadow-zinc-200/20 dark:shadow-none">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div 
            className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-300 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <footer className="mt-16 pt-10 border-t border-zinc-100 dark:border-white/[0.05]">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 bg-zinc-50 dark:bg-zinc-900/40 p-8 rounded-3xl border border-zinc-100 dark:border-white/[0.05]">
              <div>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">Was this helpful?</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Share this post with others who might benefit from it.</p>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 dark:bg-zinc-800 text-white hover:bg-black dark:hover:bg-zinc-700 transition-all font-bold text-sm shadow-lg shadow-black/10">
                <Share2 className="w-4 h-4" /> Share Article
              </button>
            </div>
          </footer>
        </article>
      </main>

      <Footer />
    </div>
  );
}
