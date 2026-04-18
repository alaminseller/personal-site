import { useEffect, useRef } from "react";
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
        bg-white/[0.07] backdrop-blur-xl border border-white/[0.12]
        shadow-[0_8px_32px_rgba(0,0,0,0.4)] animate-badge-pop ${delayClass} ${className}`}
    >
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-500/30 border border-white/10 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-white font-semibold text-[13px] leading-tight">{label}</p>
        <p className="text-white/50 text-[10px] font-medium leading-tight mt-0.5">{sublabel}</p>
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
      className={`group w-10 h-10 rounded-xl bg-white/[0.06] hover:bg-white/[0.14] border border-white/[0.10] hover:border-violet-500/50
        flex items-center justify-center text-white/50 hover:text-white
        transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(139,92,246,0.35)]
        animate-fade-in ${delayClass}`}
    >
      {icon}
    </a>
  );
}

/* ─── Main Hero ─────────────────────────────────────────────────────── */
export default function ModernHeroVisual() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(800px circle at ${e.clientX}px ${e.clientY}px, rgba(139,92,246,0.06), transparent 60%)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#070711]">

      {/* ── Mouse-tracking glow layer ── */}
      <div ref={glowRef} className="pointer-events-none absolute inset-0 z-0 transition-all duration-500" />

      {/* ── Background gradient blobs ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
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
      <div className="hero-noise-texture pointer-events-none absolute inset-0 z-0 opacity-[0.025]" />

      {/* ── BIG background name text ── */}
      <div className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center overflow-hidden select-none">
        <span className="hero-watermark-text text-[min(14vw,160px)] font-black tracking-tighter text-transparent leading-none whitespace-nowrap">
          ALAMIN RAFI
        </span>
      </div>

      {/* ── Main content grid ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-10 lg:gap-4 items-center min-h-screen">

        {/* ─── LEFT: Text content ─────────────────────────────────── */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

          {/* Available pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full
              bg-white/[0.06] border border-white/[0.10] backdrop-blur-sm
              text-sm font-medium text-white/80 animate-slide-right anim-delay-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Available for new projects
          </div>

          {/* Hi label */}
          <p className="text-violet-400 font-semibold text-lg mb-3 tracking-wide animate-slide-right anim-delay-200">
            Hi, I'm Alamin Rafi
          </p>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-[clamp(3rem,5.5vw,4.5rem)] font-black text-white leading-[1.05] tracking-tight mb-6 animate-slide-up anim-delay-300">
            Web Developer{" "}
            <span className="hero-shimmer-text block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              &amp; Digital Creator.
            </span>
          </h1>

          {/* Description */}
          <p className="text-white/55 text-lg leading-relaxed max-w-md mx-auto lg:mx-0 mb-10 animate-slide-up anim-delay-450">
            I build modern, fast, and affordable websites that help businesses
            grow online — from portfolio sites to full-stack web apps.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12 animate-slide-up anim-delay-600">
            {/* Primary */}
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-[15px] text-white
                overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full" />
              <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">Let's Talk</span>
              <ArrowRight className="relative w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Secondary */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-[15px] text-white/80
                bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] hover:border-white/[0.25]
                transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <Globe className="w-4 h-4" />
              View Portfolio
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 animate-slide-up anim-delay-750">
            <span className="text-white/30 text-xs font-medium uppercase tracking-widest mr-1">Follow</span>
            <SocialLink href="https://github.com" label="GitHub" icon={<Github className="w-4 h-4" />} delayClass="anim-delay-800" />
            <SocialLink href="https://linkedin.com" label="LinkedIn" icon={<Linkedin className="w-4 h-4" />} delayClass="anim-delay-900" />
            <SocialLink href="https://twitter.com" label="Twitter" icon={<Twitter className="w-4 h-4" />} delayClass="anim-delay-1000" />
          </div>
        </div>

        {/* ─── RIGHT: Image + Badges ──────────────────────────────── */}
        <div className="relative flex items-center justify-center order-1 lg:order-2 h-[480px] sm:h-[560px] lg:h-[640px]">

          {/* Rotating decorative ring (outer) */}
          <div className="absolute inset-0 m-auto w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] rounded-full
              border border-dashed border-violet-500/10 animate-spin-slow pointer-events-none" />

          {/* Counter-rotating ring (inner) */}
          <div className="ring-counter-spin absolute inset-0 m-auto w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] rounded-full
              border border-dashed border-cyan-500/10 pointer-events-none" />

          {/* Radial spotlight glow BEHIND image */}
          <div className="hero-spotlight absolute inset-0 m-auto w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full
              animate-glow-pulse pointer-events-none" />

          {/* Secondary accent glow */}
          <div className="hero-accent-glow absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[220px] h-[60px] rounded-full pointer-events-none" />

          {/* Photo container */}
          <div className="relative z-20 w-[260px] sm:w-[310px] lg:w-[350px] xl:w-[380px] animate-scale-in anim-delay-400">
            {/* Glowing border frame */}
            <div className="hero-photo-frame relative rounded-[32px] p-[2px]">
              <div className="rounded-[30px] overflow-hidden bg-[#0e0b1e]">
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
            label="5+ Years Exp."
            sublabel="Web & Digital"
            className="top-[8%] -left-2 sm:left-4 animate-float"
            delayClass="anim-delay-900"
          />

          <FloatingBadge
            icon={<Briefcase className="w-4 h-4 text-violet-400" />}
            label="30+ Projects"
            sublabel="Live & Running"
            className="bottom-[20%] -left-4 sm:left-0 animate-float-delayed"
            delayClass="anim-delay-1100"
          />

          <FloatingBadge
            icon={<Clock className="w-4 h-4 text-cyan-400" />}
            label="Available Now"
            sublabel="Open to Work"
            className="top-[30%] -right-2 sm:right-2 animate-float"
            delayClass="anim-delay-1300"
          />
        </div>
      </div>

      {/* ── Bottom fade to next section ── */}
      <div className="hero-section-fade pointer-events-none absolute bottom-0 left-0 right-0 h-32 z-10" />

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2
          animate-slide-up opacity-0 anim-delay-1500">
        <span className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-violet-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
