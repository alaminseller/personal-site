import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogData";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import Header from "@/components/modern/Header";
import Footer from "@/components/professional/Footer";

export default function Blog() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#070711]">
      <Header />
      
      <main className="max-w-5xl mx-auto px-6 pt-28 pb-20">
        <header className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-2">
            Blog
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Insights & <span className="text-zinc-400">Updates</span>
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl">
            Thoughts on web development, digital strategy, and how Alamin Rafi helps businesses succeed online.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl overflow-hidden border border-zinc-100 dark:border-white/[0.05] bg-zinc-50/50 dark:bg-zinc-900/40 hover:border-violet-200 dark:hover:border-violet-800/40 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col grow">
                <div className="flex items-center gap-4 text-[10px] font-medium text-zinc-400 uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" /> {post.author}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-6 grow line-clamp-2">
                  {post.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex gap-2">
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[10px] px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-violet-600 dark:text-violet-400 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
