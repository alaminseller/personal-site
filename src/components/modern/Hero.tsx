import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowRight, Github, Linkedin, Twitter, Globe, Briefcase, Star, Clock } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

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
        bg-white/90 dark:bg-white/[0.08] backdrop-blur-xl border border-zinc-200 dark:border-white/[0.12]
        shadow-lg dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] animate-badge-pop ${delayClass} ${className}`}
    >
      <div className="w-9 h-9 rounded-xl bg-violet-50 dark:bg-gradient-to-br dark:from-violet-500/20 dark:to-cyan-500/20 border border-violet-100 dark:border-white/10 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-zinc-900 dark:text-white font-semibold text-[13px] leading-tight">{label}</p>
        <p className="text-zinc-500 dark:text-white/60 text-[10px] font-medium leading-tight mt-0.5">{sublabel}</p>
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroImages = [
    { src: "/Alamin.png", alt: "Alamin Rafi Portrait" },
    { src: "/focused-1.png", alt: "Focused on work" },
    { src: "/portrait-1.png", alt: "Professional portrait" },
    { src: "/workplace-1.png", alt: "Modern workplace" },
  ];

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    const intervalId = setInterval(scrollNext, 4000);
    
    emblaApi.on("select", () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    });

    return () => clearInterval(intervalId);
  }, [emblaApi, scrollNext]);

  useEffect(() => {
    // Dynamic project count
    const today = new Date();
    const dateStr = today.toISOString().split('T')[0];
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
        hash = ((hash << 5) - hash) + dateStr.charCodeAt(i);
        hash |= 0;
    }
    const targetCount = 14 + (Math.abs(hash) % 5);

    const duration = 1200;
    const fps = 60;
    const totalFrames = (duration / 1000) * fps;
    let currentFrame = 0;
    const easeOutCubic = (x: number): number => 1 - Math.pow(1 - x, 3);

    const animationInterval = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      setProjectCount(Math.floor(targetCount * easeOutCubic(progress)));
      if (currentFrame >= totalFrames) {
        setProjectCount(targetCount);
        clearInterval(animationInterval);
      }
    }, 1000 / fps);

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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-[#070711] transition-colors duration-500">

      {/* ── Mouse-tracking glow layer ── */}
      <div ref={glowRef} className="pointer-events-none absolute inset-0 z-0 transition-all duration-500 hidden dark:block" />

      {/* ── Background decoration ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-40 dark:opacity-100">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-violet-100/30 dark:bg-violet-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-cyan-100/20 dark:bg-cyan-900/10 blur-[100px] rounded-full" />
      </div>

      <div className="hero-grid-texture pointer-events-none absolute inset-0 z-0 opacity-[0.4] dark:opacity-100" />

      {/* ── BIG background name text ── */}
      <div className="pointer-events-none absolute inset-0 z-[1] hidden lg:flex items-center justify-center overflow-hidden select-none">
        <span className="hero-watermark-text text-[min(12vw,140px)] font-black tracking-tighter text-zinc-100 dark:text-white/[0.02] leading-none whitespace-nowrap opacity-100">
          ALAMIN RAFI
        </span>
      </div>

      {/* ── Main content grid ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center min-h-screen">

        {/* ─── LEFT: Text content ─────────────────────────────────── */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full
              bg-white dark:bg-white/[0.06] border border-zinc-200 dark:border-white/[0.10] shadow-sm
              text-sm font-medium text-zinc-600 dark:text-white/80 animate-slide-right">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Available for new projects
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-[clamp(3rem,5vw,4.5rem)] font-black text-zinc-900 dark:text-white leading-[1.1] tracking-tight mb-6 animate-slide-up">
            Web Developer
            <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              {" "}&amp; Creator.
            </span>
          </h1>

          <p className="text-zinc-600 dark:text-white/60 text-lg leading-relaxed max-w-md mx-auto lg:mx-0 mb-10 animate-slide-up anim-delay-200">
            I build sharp, modern websites that help businesses stand out. 
            Focused on performance, realism, and clean code.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 animate-slide-up anim-delay-400 w-full sm:w-auto">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 w-full sm:w-auto rounded-full font-bold text-white
                overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(139,92,246,0.3)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500" />
              <span className="relative">Start Project</span>
              <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 w-full sm:w-auto rounded-full font-bold text-zinc-700 dark:text-white
                bg-white dark:bg-white/[0.06] hover:bg-zinc-50 dark:hover:bg-white/[0.12] border border-zinc-200 dark:border-white/[0.12]
                transition-all duration-300 hover:scale-105"
            >
              View Work
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4 animate-fade-in anim-delay-600">
            <SocialLink href="https://github.com" label="GitHub" icon={<Github className="w-5 h-5" />} />
            <SocialLink href="https://linkedin.com" label="LinkedIn" icon={<Linkedin className="w-5 h-5" />} />
            <SocialLink href="https://twitter.com" label="Twitter" icon={<Twitter className="w-5 h-5" />} />
          </div>
        </div>

        {/* ─── RIGHT: Sharp Image Slider ────────────────────────── */}
        <div className="relative flex items-center justify-center order-1 lg:order-2 h-[400px] sm:h-[600px]">
          
          {/* Main Photo Frame */}
          <div className="relative z-20 w-[280px] sm:w-[420px] lg:w-[460px] animate-scale-in">
            <div className="relative rounded-[40px] sm:rounded-[60px] p-2 bg-white dark:bg-zinc-900 shadow-2xl border border-zinc-100 dark:border-white/10 overflow-hidden">
              
              {/* Embla Slider */}
              <div className="overflow-hidden rounded-[32px] sm:rounded-[52px]" ref={emblaRef}>
                <div className="flex">
                  {heroImages.map((img, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0 relative aspect-[4/5] sm:aspect-square">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                {heroImages.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentIndex === i ? "w-6 bg-white" : "w-1.5 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Badges */}
            <FloatingBadge
              icon={<Star className="w-4 h-4 text-amber-400" />}
              label="8+ Years"
              sublabel="Experience"
              className="-top-4 -left-4 animate-float"
            />
            <FloatingBadge
              icon={<Briefcase className="w-4 h-4 text-violet-400" />}
              label={`${projectCount}+ Done`}
              sublabel="Successful Projects"
              className="bottom-12 -right-4 animate-float-delayed"
            />
          </div>

          {/* Minimal shadow / decoration */}
          <div className="absolute inset-0 m-auto w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] rounded-full border border-zinc-100 dark:border-white/5 pointer-events-none" />
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] uppercase tracking-widest font-bold dark:text-white">Scroll</span>
        <div className="w-1 h-8 bg-gradient-to-b from-violet-500 to-transparent rounded-full animate-bounce" />
      </div>
    </section>
  );
}
