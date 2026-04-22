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
        bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border border-zinc-200 dark:border-zinc-800
        shadow-sm animate-badge-pop ${delayClass} ${className}`}
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
  const [projectCount, setProjectCount] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroImages = [
    { src: "/hero-1.png", alt: "Transforming Ideas Into Reality" },
    { src: "/hero-2.png", alt: "Professional Developer Workplace" },
    { src: "/hero-3.png", alt: "Focused Developer at Work" },
    { src: "/hero-4.png", alt: "Software Development in Action" },
    { src: "/hero-5.png", alt: "Collaborative Development Session" },
  ];

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const intervalId = setInterval(scrollNext, 5000);
    emblaApi.on("select", () => setCurrentIndex(emblaApi.selectedScrollSnap()));
    return () => clearInterval(intervalId);
  }, [emblaApi, scrollNext]);

  useEffect(() => {
    const today = new Date();
    const dateStr = today.toISOString().split('T')[0];
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
        hash = ((hash << 5) - hash) + dateStr.charCodeAt(i);
        hash |= 0;
    }
    const targetCount = 14 + (Math.abs(hash) % 10);
    let start = 0;
    const animation = setInterval(() => {
      start += 1;
      setProjectCount(start);
      if (start >= targetCount) clearInterval(animation);
    }, 100);
    return () => clearInterval(animation);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-500">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none hero-grid-texture" />

      {/* Main content grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">

        {/* ─── LEFT: Text content ─────────────────────────────────── */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-bold text-zinc-600 dark:text-zinc-300">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for Hire
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-black text-zinc-900 dark:text-white leading-[1.1] tracking-tight mb-6">
            Building Digital
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">
              Experiences.
            </span>
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed max-w-md mx-auto lg:mx-0 mb-10">
            I specialize in creating sharp, high-performance websites using the latest technologies. 
            Real-world solutions for real-world businesses.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="px-8 py-4 w-full sm:w-auto rounded-full font-bold text-white bg-gradient-to-r from-violet-600 to-cyan-500 hover:scale-105 transition-transform text-center"
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

        {/* ─── RIGHT: Clean Image Slider ────────────────────────── */}
        <div className="relative flex items-center justify-center">
          
          <div className="relative z-20 w-full max-w-[500px] lg:max-w-none">
            {/* Slider Container */}
            <div className="relative bg-white dark:bg-zinc-900 p-1 sm:p-2 rounded-[2rem] sm:rounded-[3rem] shadow-xl border border-zinc-100 dark:border-zinc-800 overflow-hidden">
              
              <div className="overflow-hidden rounded-[1.8rem] sm:rounded-[2.8rem]" ref={emblaRef}>
                <div className="flex">
                  {heroImages.map((img, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0">
                      <div className="aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover"
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Minimal Navigation Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
                {heroImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => emblaApi?.scrollTo(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentIndex === i ? "w-6 bg-white" : "w-1.5 bg-white/50"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Info Badges - Simplified */}
            <FloatingBadge
              icon={<Star className="w-4 h-4 text-amber-500" />}
              label="Expertise"
              sublabel="Full Stack Dev"
              className="-top-4 -left-4 hidden sm:flex"
            />
            <FloatingBadge
              icon={<Briefcase className="w-4 h-4 text-blue-500" />}
              label={`${projectCount}+ Projects`}
              sublabel="Completed"
              className="bottom-12 -right-4 hidden sm:flex"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator - Simple */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block opacity-50">
        <div className="w-px h-12 bg-gradient-to-b from-zinc-300 dark:from-zinc-700 to-transparent" />
      </div>
    </section>
  );
}
