import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Twitter, Briefcase, Star } from "lucide-react";

/* ─── Floating Badge ────────────────────────────────────────────────── */
interface BadgeProps {
  icon: React.ReactNode;
  label: string;
  sublabel: string;
  className?: string;
}

function FloatingBadge({ icon, label, sublabel, className = "" }: BadgeProps) {
  return (
    <div
      className={`absolute z-30 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl
        bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border border-zinc-200 dark:border-zinc-800
        shadow-lg animate-fade-in ${className}`}
    >
      <div className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-zinc-900 dark:text-zinc-100 font-bold text-[13px] leading-tight">{label}</p>
        <p className="text-zinc-500 dark:text-zinc-400 text-[10px] font-medium leading-tight mt-0.5">{sublabel}</p>
      </div>
    </div>
  );
}

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
        transition-all duration-300 hover:scale-110 shadow-sm"
    >
      {icon}
    </a>
  );
}

/* ─── Main Hero ─────────────────────────────────────────────────────── */
export default function ModernHeroVisual() {
  const [projectCount, setProjectCount] = useState(14);

  useEffect(() => {
    const today = new Date();
    const dateStr = today.toISOString().split('T')[0];
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
        hash = ((hash << 5) - hash) + dateStr.charCodeAt(i);
        hash |= 0;
    }
    const targetCount = 14 + (Math.abs(hash) % 10);
    setProjectCount(targetCount);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-500">
      
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none hero-grid-texture" />

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 pb-16 grid lg:grid-cols-2 gap-12 items-center">

        {/* ─── LEFT: Text content ─────────────────────────────────── */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-bold text-zinc-600 dark:text-zinc-300">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
            Available for New Projects
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-black text-zinc-900 dark:text-white leading-[1.1] tracking-tight mb-6">
            Building High-End
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">
              Web Solutions.
            </span>
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed max-w-md mx-auto lg:mx-0 mb-10">
            I craft fast, modern, and high-performance websites. 
            Focused on clean code and professional design that drives results.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="px-8 py-4 w-full sm:w-auto rounded-full font-bold text-white bg-gradient-to-r from-violet-600 to-cyan-500 hover:opacity-90 transition-opacity text-center shadow-lg shadow-violet-500/20"
            >
              Start Project
            </a>
            <a
              href="#projects"
              className="px-8 py-4 w-full sm:w-auto rounded-full font-bold text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-center"
            >
              View My Work
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <SocialLink href="https://github.com" label="GitHub" icon={<Github className="w-5 h-5" />} />
            <SocialLink href="https://linkedin.com" label="LinkedIn" icon={<Linkedin className="w-5 h-5" />} />
            <SocialLink href="https://twitter.com" label="Twitter" icon={<Twitter className="w-5 h-5" />} />
          </div>
        </div>

        {/* ─── RIGHT: Single Sharp Image ────────────────────────── */}
        <div className="relative flex items-center justify-center">
          <div className="relative z-20 w-full max-w-[480px]">
            {/* Image Frame */}
            <div className="relative bg-white dark:bg-zinc-900 p-1.5 sm:p-2 rounded-[2.5rem] shadow-xl border border-zinc-100 dark:border-zinc-800">
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="/hero-2.png"
                  alt="Alamin Rafi - Professional Web Developer"
                  className="w-full h-auto object-cover max-h-[550px]"
                  loading="eager"
                />
              </div>
            </div>

            {/* Badges */}
            <FloatingBadge
              icon={<Star className="w-4 h-4 text-amber-500" />}
              label="Expertise"
              sublabel="Full Stack Developer"
              className="-top-4 -left-4 hidden sm:flex"
            />
            <FloatingBadge
              icon={<Briefcase className="w-4 h-4 text-blue-500" />}
              label={`${projectCount}+ Projects`}
              sublabel="Delivered Successfully"
              className="bottom-12 -right-4 hidden sm:flex"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
