import { Globe, Code2, Layout, Figma, BarChart3, ArrowRight } from "lucide-react";

const services = [
    {
        icon: <Globe className="h-7 w-7" />,
        title: "Website Design & Development",
        description: "Custom, fully responsive websites. Clean code and fast load times.",
        tags: ["HTML/CSS/JS", "React", "Responsive", "SEO-Ready"],
        color: "violet",
    },
    {
        icon: <Code2 className="h-7 w-7" />,
        title: "WordPress Website",
        description: "Professional WordPress sites perfectly customized to your business needs.",
        tags: ["WordPress", "WooCommerce", "Elementor", "Custom Theme"],
        color: "cyan",
    },
    {
        icon: <Layout className="h-7 w-7" />,
        title: "Landing Page Design",
        description: "High-converting landing pages designed to capture leads and drive sales.",
        tags: ["Conversion-Focused", "A/B Ready", "Fast", "Mobile-First"],
        color: "indigo",
    },
    {
        icon: <Figma className="h-7 w-7" />,
        title: "UI/UX Design",
        description: "Intuitive interface designs with prototypes before writing code.",
        tags: ["Figma", "Wireframes", "Prototype", "Design System"],
        color: "pink",
    },
    {
        icon: <BarChart3 className="h-7 w-7" />,
        title: "Digital Marketing",
        description: "Grow your online presence with targeted SEO and social media strategies.",
        tags: ["SEO", "Social Media", "Analytics", "Content"],
        color: "emerald",
    },
];

const colorMap: Record<string, string> = {
    violet: "bg-violet-100 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 group-hover:bg-violet-600 group-hover:text-white",
    cyan: "bg-cyan-100 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white",
    indigo: "bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white",
    pink: "bg-pink-100 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 group-hover:bg-pink-600 group-hover:text-white",
    emerald: "bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white",
};

const tagColorMap: Record<string, string> = {
    violet: "bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300",
    cyan: "bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300",
    indigo: "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300",
    pink: "bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300",
    emerald: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300",
};

export default function ServicesSection() {
    return (
        <section id="services" className="bg-white dark:bg-zinc-950 py-16 sm:py-24 border-t border-zinc-100 dark:border-zinc-800">
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-3">Services</p>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-16">
                    <h2 className="text-2xl sm:text-4xl font-bold text-zinc-900 dark:text-white max-w-lg leading-snug">
                        What I can build <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">for you</span>
                    </h2>
                    <p className="hidden sm:block text-zinc-500 dark:text-zinc-400 max-w-sm text-[15px] leading-relaxed">
                        Affordable, scalable, and easy-to-manage digital solutions for businesses of all sizes.
                    </p>
                </div>
            </div>

            {/* ════════════════════════════════════════
                MOBILE: Horizontal swipe carousel
            ════════════════════════════════════════ */}
            <div className="md:hidden relative">
                {/* Swipe hint */}
                <div className="flex items-center justify-between px-5 mb-3">
                    <span className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
                        {services.length} services
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-violet-500 dark:text-violet-400">
                        Swipe
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                </div>

                {/* Scroll track */}
                <div
                    className="flex gap-3 overflow-x-auto px-5 pb-5 snap-x snap-mandatory"
                    style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
                >
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="shrink-0 snap-start bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-4 border border-zinc-100 dark:border-zinc-800 flex flex-col"
                            style={{ width: "78vw" }}
                        >
                            {/* Icon */}
                            <div className={`h-11 w-11 rounded-xl flex items-center justify-center mb-3 ${colorMap[service.color]}`}>
                                {service.icon}
                            </div>

                            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-1.5 leading-snug">{service.title}</h3>
                            <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed">{service.description}</p>
                        </div>
                    ))}

                    {/* End spacer */}
                    <div
                        className="shrink-0 flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50 gap-2 snap-start px-4"
                        style={{ width: "52vw", minHeight: "140px" }}
                    >
                        <span className="text-2xl">✦</span>
                        <p className="text-[11px] font-semibold text-zinc-400 dark:text-zinc-500 text-center leading-relaxed">
                            Custom solutions available
                        </p>
                    </div>
                </div>

                {/* Right fade */}
                <div className="pointer-events-none absolute right-0 top-8 bottom-5 w-12 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent" />
            </div>

            {/* ════════════════════════════════════════
                DESKTOP: Original grid layout
            ════════════════════════════════════════ */}
            <div className="hidden md:block max-w-6xl mx-auto px-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className={`group bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-5 sm:p-7 border border-zinc-100 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col${
                                i === 4 ? " hidden sm:flex" : ""
                            }`}
                        >
                            {/* Icon */}
                            <div className={`h-12 w-12 sm:h-14 sm:w-14 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 transition-all duration-300 ${colorMap[service.color]}`}>
                                {service.icon}
                            </div>

                            <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-white mb-2 sm:mb-3">{service.title}</h3>
                            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-4 sm:mb-5 flex-1">{service.description}</p>

                            {/* Tags */}
                            <div className="hidden sm:flex flex-wrap gap-2 mt-auto">
                                {service.tags.map((tag, t) => (
                                    <span key={t} className={`px-2.5 py-1 text-xs font-medium rounded-lg ${tagColorMap[service.color]}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* CTA Card */}
                    <div className="hidden sm:flex bg-gradient-to-br from-violet-600 to-cyan-500 rounded-2xl p-7 flex-col justify-between text-white">
                        <div>
                            <p className="text-lg font-semibold mb-3">Have something in mind?</p>
                            <p className="text-violet-100 text-sm leading-relaxed">
                                Let's talk about your project. I build affordable, scalable websites that grow with your business.
                            </p>
                        </div>
                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center gap-2 bg-white text-violet-700 font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-violet-50 transition-colors w-fit"
                        >
                            Get in Touch <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
