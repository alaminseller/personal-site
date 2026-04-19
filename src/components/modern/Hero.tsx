import { useEffect, useRef, useState } from "react";
import { ArrowRight, Github, Linkedin, Twitter, Globe, Briefcase, Star, Clock } from "lucide-react";

/* ─── Floating Badge ────────────────────────────────────────────────── */
interface BadgeProps {
  icon: React.ReactNode;
  label: string;
  sublabel: string;
  className?: string;
  delayClass?: string;
}

function FloatingBadge({ icon, label, sublabel, className = "", delayClass = "" }: BadgeProps) {
  return (
    <div
      className={`absolute z-30 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl
        bg-white dark:bg-white/[0.07] backdrop-blur-xl border border-zinc-200 dark:border-white/[0.12]
        shadow-sm dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] animate-badge-pop ${delayClass} ${className}`}
    >
      <div className="w-9 h-9 rounded-xl bg-violet-50 dark:bg-gradient-to-br dark:from-violet-500/30 dark:to-cyan-500/30 border border-violet-100 dark:border-white/10 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-zinc-900 dark:text-white font-semibold text-[13px] leading-tight">{label}</p>
        <p className="text-zinc-500 dark:text-white/50 text-[10px] font-medium leading-tight mt-0.5">{sublabel}</p>
      </div>
    </div>
  );
}

/* ─── Social Link ───────────────────────────────────────────────────── */
interface SocialLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  delayClass?: string;
}

function SocialLink({ href, label, icon, delayClass = "" }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={`group w-10 h-10 rounded-xl bg-white dark:bg-white/[0.06] hover:bg-zinc-50 dark:hover:bg-white/[0.14] border border-zinc-200 dark:border-white/[0.10] hover:border-violet-300 dark:hover:border-violet-500/50
        flex items-center justify-center text-zinc-400 dark:text-white/50 hover:text-violet-600 dark:hover:text-white
        transition-all duration-300 hover:scale-110 shadow-sm dark:shadow-none dark:hover:shadow-[0_0_20px_rgba(139,92,246,0.35)]
        animate-fade-in ${delayClass}`}
    >
      {icon}
    </a>
  );
}

/* ─── Main Hero ─────────────────────────────────────────────────────── */
export default function ModernHeroVisual() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    // Dynamic project count based on date string
    const today = new Date();
    const dateStr = today.toISOString().split('T')[0];
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
        hash = ((hash << 5) - hash) + dateStr.charCodeAt(i);
        hash |= 0;
    }
    const offsets = [-3, -1, 1, 3];
    const index = Math.abs(hash) % offsets.length;
    const targetCount = 14 + offsets[index]; // 14-3=11, 14-1=13, 14+1=15, 14+3=17

    // Count-up animation logic
    const duration = 1200; // 1.2 seconds (fast & subtle)
    const fps = 60;
    const totalFrames = (duration / 1000) * fps;
    let currentFrame = 0;

    const easeOutCubic = (x: number): number => 1 - Math.pow(1 - x, 3);

    const animationInterval = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      const currentVal = Math.floor(targetCount * easeOutCubic(progress));
      
      setProjectCount(currentVal);

      if (currentFrame >= totalFrames) {
        setProjectCount(targetCount);
        clearInterval(animationInterval);
      }
    }, 1000 / fps);

    // Mouse glow effect
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(800px circle at ${e.clientX}px ${e.clientY}px, rgba(139,92,246,0.06), transparent 60%)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-zinc-50 dark:bg-[#070711] transition-colors duration-500">

      {/* ── Mouse-tracking glow layer ── */}
      <div ref={glowRef} className="pointer-events-none absolute inset-0 z-0 transition-all duration-500 hidden dark:block" />

      {/* ── Background gradient blobs ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden hidden dark:block">
        <div className="absolute -top-1/4 -left-1/4 w-[90vw] h-[90vw] rounded-full
          bg-gradient-radial from-violet-700/20 via-violet-900/10 to-transparent
          blur-[120px] animate-blob" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[70vw] h-[70vw] rounded-full
          bg-gradient-radial from-cyan-700/15 via-blue-900/8 to-transparent
          blur-[100px] animate-blob blob-delay-cyan" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full
          bg-gradient-radial from-indigo-800/12 to-transparent blur-[80px]
          animate-blob blob-delay-indigo" />
      </div>

      {/* ── Grid texture overlay ── */}
      <div className="hero-grid-texture pointer-events-none absolute inset-0 z-0" />

      {/* ── Noise texture ── */}
      <div className="hero-noise-texture pointer-events-none absolute inset-0 z-0 opacity-[0.015] dark:opacity-[0.025]" />

      {/* ── BIG background name text ── */}
      <div className="pointer-events-none absolute inset-0 z-[1] hidden sm:flex items-center justify-center overflow-hidden select-none">
        <span className="hero-watermark-text text-[min(14vw,160px)] font-black tracking-tighter text-transparent leading-none whitespace-nowrap opacity-100">
          ALAMIN RAFI
        </span>
      </div>

      {/* ── Main content grid ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-10 lg:gap-4 items-center min-h-screen">

        {/* ─── LEFT: Text content ─────────────────────────────────── */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

          {/* Available pill — hidden on mobile to reduce clutter */}
          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full
              bg-white dark:bg-white/[0.06] border border-zinc-200 dark:border-white/[0.10] backdrop-blur-sm shadow-sm dark:shadow-none
              text-sm font-medium text-zinc-600 dark:text-white/80 animate-slide-right anim-delay-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Available for new projects
          </div>

          {/* Mobile-only: compact available badge */}
          <div className="sm:hidden inline-flex items-center gap-2 px-3 py-1.5 mb-5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
            </span>
            Available for projects
          </div>

          {/* Hi label — desktop only */}
          <p className="hidden sm:block text-violet-600 dark:text-violet-400 font-semibold text-lg mb-3 tracking-wide animate-slide-right anim-delay-200">
            Hi, I'm Alamin Rafi
          </p>

          {/* Main headline */}
          <h1 className="text-3xl sm:text-6xl lg:text-[clamp(3rem,5.5vw,4.5rem)] font-black text-zinc-900 dark:text-white leading-[1.1] tracking-tight mb-3 sm:mb-6 animate-slide-up anim-delay-300">
            <span className="sm:hidden">Alamin Rafi<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">Web Developer</span></span>
            <span className="hidden sm:inline">Web Developer
              <span className="hero-shimmer-text bg-gradient-to-r from-violet-600 to-cyan-500 dark:from-violet-400 dark:via-fuchsia-400 dark:to-cyan-400 bg-clip-text text-transparent">
                {" "}&amp; Digital Creator.
              </span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-zinc-600 dark:text-white/55 text-sm sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 mb-6 sm:mb-10 animate-slide-up anim-delay-450 sm:font-normal">
            I build modern websites that help businesses grow online.
            <span className="hidden sm:inline"> From portfolio sites to full-stack web apps — fast, affordable, and tailored to you.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-4 mb-4 sm:mb-12 animate-slide-up anim-delay-600 w-full sm:w-auto">
            {/* Primary */}
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 sm:py-3.5 w-full sm:w-auto rounded-full font-semibold text-[16px] sm:text-[15px] text-white
                overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full" />
              <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">Start Project</span>
              <ArrowRight className="relative w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Secondary */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 sm:py-3.5 w-full sm:w-auto rounded-full font-semibold text-[16px] sm:text-[15px] text-zinc-700 dark:text-white/80
                bg-white dark:bg-white/[0.06] hover:bg-zinc-50 dark:hover:bg-white/[0.12] border border-zinc-200 dark:border-white/[0.12] hover:border-zinc-300 dark:hover:border-white/[0.25]
                transition-all duration-300 hover:scale-105 shadow-sm dark:shadow-none backdrop-blur-sm"
            >
              <Globe className="w-4 h-4" />
              View Work
            </a>
          </div>

          {/* Social Icons */}
          <div className="hidden sm:flex items-center gap-3 animate-slide-up anim-delay-750">
            <span className="text-zinc-400 dark:text-white/30 text-xs font-medium uppercase tracking-widest mr-1">Follow</span>
            <SocialLink href="https://github.com" label="GitHub" icon={<Github className="w-4 h-4" />} delayClass="anim-delay-800" />
            <SocialLink href="https://linkedin.com" label="LinkedIn" icon={<Linkedin className="w-4 h-4" />} delayClass="anim-delay-900" />
            <SocialLink href="https://twitter.com" label="Twitter" icon={<Twitter className="w-4 h-4" />} delayClass="anim-delay-1000" />
          </div>
        </div>

        {/* ─── RIGHT: Image + Badges ──────────────────────────────── */}
        <div className="relative flex items-center justify-center order-1 lg:order-2 h-[340px] sm:h-[560px] lg:h-[640px] mt-8 lg:mt-0">

          {/* Rotating decorative ring (outer) */}
          <div className="absolute inset-0 m-auto w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] rounded-full
              border border-dashed border-violet-500/10 animate-spin-slow pointer-events-none hidden sm:block" />

          {/* Counter-rotating ring (inner) */}
          <div className="ring-counter-spin absolute inset-0 m-auto w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] rounded-full
              border border-dashed border-cyan-500/10 pointer-events-none hidden sm:block" />

          {/* Radial spotlight glow BEHIND image */}
          <div className="hidden sm:block hero-spotlight absolute inset-0 m-auto w-[380px] h-[380px] rounded-full
              animate-glow-pulse pointer-events-none opacity-100" />

          {/* Secondary accent glow */}
          <div className="hidden sm:block hero-accent-glow absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[220px] h-[60px] rounded-full pointer-events-none" />

          {/* Photo container */}
          <div className="relative z-20 w-[180px] sm:w-[310px] lg:w-[350px] xl:w-[380px] animate-scale-in anim-delay-400 mx-auto">
            {/* Glowing border frame - removed on mobile via transparent border */}
            <div className="hero-photo-frame relative rounded-full sm:rounded-[32px] p-[2px] sm:p-[2px]">
              <div className="rounded-full sm:rounded-[30px] overflow-hidden bg-white dark:bg-[#0e0b1e] aspect-square sm:aspect-auto">
                <img
                  src="/Alamin.png"
                  alt="Alamin Rafi — Web Developer & Digital Creator"
                  className="hero-photo-img w-full h-full object-cover object-top"
                  loading="eager"
                />
                {/* Gradient overlay to blend image bottom naturally */}
                <div className="hero-photo-fade absolute inset-x-0 bottom-0 h-1/3 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* ── Floating Badges ── */}
          <FloatingBadge
            icon={<Star className="w-4 h-4 text-amber-400" />}
            label="8+ Years Experience"
            sublabel="Web & Digital"
            className="top-[8%] -left-2 sm:left-4 animate-float hidden sm:flex"
            delayClass="anim-delay-900"
          />

          <FloatingBadge
            icon={<Briefcase className="w-4 h-4 text-violet-400" />}
            label={`${projectCount}+ Projects`}
            sublabel="Live & Running"
            className="bottom-[20%] -left-4 sm:left-0 animate-float-delayed hidden sm:flex"
            delayClass="anim-delay-1100"
          />

          <FloatingBadge
            icon={<Clock className="w-4 h-4 text-cyan-400" />}
            label="Available Now"
            sublabel="Open to Work"
            className="top-[5%] sm:top-[30%] right-0 sm:right-2 animate-float scale-75 sm:scale-100 hidden sm:flex"
            delayClass="anim-delay-1300"
          />
        </div>
      </div>

      {/* ── Bottom fade to next section ── */}
      <div className="hero-section-fade pointer-events-none absolute bottom-0 left-0 right-0 h-32 z-10" />

      {/* ── Scroll indicator ── */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2
          animate-slide-up opacity-0 anim-delay-1500">
        <span className="text-zinc-400 dark:text-white/30 text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-zinc-300 dark:border-white/15 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-violet-500 dark:bg-violet-400 animate-bounce" />
        </div>
      </div>
      {/* ── Mobile Sticky Bottom CTA ── */}
      <div className="fixed bottom-0 left-0 right-0 p-4 pb-6 border-t border-zinc-200 dark:border-white/10 bg-white/95 dark:bg-[#070711]/95 backdrop-blur-xl z-[60] sm:hidden animate-slide-up anim-delay-1000 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_-10px_40px_rgba(0,0,0,0.4)]">
        <a
          href="#contact"
          className="relative flex items-center justify-center gap-2.5 px-8 py-4 w-full rounded-2xl font-semibold text-[16px] text-white overflow-hidden shadow-[0_4px_20px_rgba(139,92,246,0.4)] transition-transform active:scale-95"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500" />
          <span className="relative">Start Project</span>
          <ArrowRight className="relative w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
