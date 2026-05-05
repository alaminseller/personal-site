import { Github, Linkedin, Twitter } from "lucide-react";

/* ─── Social Link ───────────────────────────────────────────────────── */
interface SocialLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

function SocialLink({ href, label, icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800
        flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400
        transition-colors"
    >
      {icon}
    </a>
  );
}

/* ─── Main Hero ─────────────────────────────────────────────────────── */
export default function ModernHeroVisual() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white dark:bg-zinc-950">
      
      {/* Main content container */}
      <div className="w-full max-w-7xl mx-auto px-6 py-20 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">

        {/* ─── LEFT: Text content ─────────────────────────────────── */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-last lg:order-first">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-bold text-zinc-600 dark:text-zinc-300">
            Welcome
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-black text-zinc-900 dark:text-white leading-[1.1] tracking-tight mb-4">
            I'm Alamin Rafi
          </h1>

          <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500 mb-6">
            Digital Service Provider
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed max-w-md mx-auto lg:mx-0 mb-10">
            I help businesses build modern, affordable, and high-converting websites.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="px-8 py-4 w-full sm:w-auto rounded-full font-bold text-white bg-gradient-to-r from-violet-600 to-cyan-500 hover:opacity-90 transition-opacity text-center shadow-sm"
            >
              Start Project
            </a>
            <a
              href="#projects"
              className="px-8 py-4 w-full sm:w-auto rounded-full font-bold text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-center"
            >
              View Portfolio
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <SocialLink href="https://github.com" label="GitHub" icon={<Github className="w-5 h-5" />} />
            <SocialLink href="https://linkedin.com" label="LinkedIn" icon={<Linkedin className="w-5 h-5" />} />
            <SocialLink href="https://twitter.com" label="Twitter" icon={<Twitter className="w-5 h-5" />} />
          </div>
        </div>

        {/* ─── RIGHT: Single Sharp Image ────────────────────────── */}
        <div className="flex items-center justify-center order-first lg:order-last">
          <div className="w-full max-w-[400px]">
            <img
              src="/Alamin.png"
              alt="Alamin Rafi - Digital Service Provider"
              className="w-full h-auto object-cover rounded-full shadow-md border-4 border-zinc-50 dark:border-zinc-900"
              loading="eager"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}
