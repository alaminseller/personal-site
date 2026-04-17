import { useState } from "react";
import { ExternalLink, Github, Globe, Figma } from "lucide-react";

type Category = "All" | "Website" | "WordPress" | "UI/UX";

interface Project {
    title: string;
    description: string;
    category: Exclude<Category, "All">;
    tags: string[];
    gradient: string;
    emoji: string;
    liveUrl?: string;
    githubUrl?: string;
    featured?: boolean;
}

const projects: Project[] = [
    {
        title: "RangTVBD – News Portal",
        description: "A high-traffic Bengali news and entertainment portal. I managed SEO strategy, content structure, and optimized the WordPress architecture for 500k+ monthly readers.",
        category: "WordPress",
        tags: ["WordPress", "SEO", "Content Strategy", "Performance"],
        gradient: "from-blue-500 to-indigo-600",
        emoji: "📰",
        liveUrl: "https://rangtvbd.com",
        featured: true,
    },
    {
        title: "Medi-Aid Hospital Website",
        description: "Professional hospital website with patient engagement features, appointment booking information, and department pages — designed for trust and accessibility.",
        category: "WordPress",
        tags: ["WordPress", "Healthcare", "UI Design", "Mobile-First"],
        gradient: "from-green-500 to-teal-600",
        emoji: "🏥",
        featured: true,
    },
    {
        title: "Orthosongbad – Finance News",
        description: "A financial news website with custom theme, optimized on-page SEO, internal linking structure, and schema markup for improved search visibility.",
        category: "WordPress",
        tags: ["WordPress", "SEO Audit", "Technical SEO", "Schema"],
        gradient: "from-amber-500 to-orange-600",
        emoji: "💰",
        liveUrl: "https://orthosongbad.com",
    },
    {
        title: "Startup Landing Page",
        description: "A clean, high-converting landing page for a SaaS startup. Focused on conversion rate optimization, clear value proposition, and mobile-first design.",
        category: "Website",
        tags: ["HTML/CSS", "JavaScript", "Conversion", "Responsive"],
        gradient: "from-violet-500 to-purple-600",
        emoji: "🚀",
    },
    {
        title: "E-Commerce Store",
        description: "A fully functional WooCommerce store with custom product pages, cart flow, payment gateway integration, and inventory management setup.",
        category: "WordPress",
        tags: ["WooCommerce", "WordPress", "E-Commerce", "Payments"],
        gradient: "from-pink-500 to-rose-600",
        emoji: "🛒",
    },
    {
        title: "Restaurant Website",
        description: "Modern restaurant website with menu showcase, online reservation form, photo gallery, and Google Maps integration — fully mobile responsive.",
        category: "Website",
        tags: ["HTML/CSS/JS", "Responsive", "UI Design", "Google Maps"],
        gradient: "from-red-500 to-orange-500",
        emoji: "🍽️",
    },
    {
        title: "SaaS Dashboard UI Design",
        description: "A complete UI/UX design for a project management SaaS app. Includes dashboard, task boards, analytics views, and a full design system in Figma.",
        category: "UI/UX",
        tags: ["Figma", "Design System", "SaaS", "Dashboard"],
        gradient: "from-cyan-500 to-blue-600",
        emoji: "📊",
        featured: true,
    },
    {
        title: "Mobile App UI – Food Delivery",
        description: "A modern food delivery app UI concept with home screen, restaurant list, order flow, and real-time tracking screen — designed in Figma with prototype links.",
        category: "UI/UX",
        tags: ["Figma", "Mobile UI", "Prototype", "App Design"],
        gradient: "from-yellow-500 to-amber-600",
        emoji: "🍱",
    },
    {
        title: "Personal Portfolio UI Kit",
        description: "A reusable UI kit and design template for professional portfolios. Includes light/dark mode, component library, and Figma auto-layout system.",
        category: "UI/UX",
        tags: ["Figma", "UI Kit", "Dark Mode", "Components"],
        gradient: "from-indigo-500 to-violet-600",
        emoji: "🎨",
    },
];

const categories: Category[] = ["All", "Website", "WordPress", "UI/UX"];

export default function ProjectsSection() {
    const [activeCategory, setActiveCategory] = useState<Category>("All");

    const filtered = activeCategory === "All" ? projects : projects.filter(p => p.category === activeCategory);

    return (
        <section id="projects" className="bg-zinc-50 dark:bg-zinc-900/50 py-24 border-t border-zinc-100 dark:border-zinc-800">
            <div className="max-w-6xl mx-auto px-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-3">Portfolio</p>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <h2 className="text-4xl font-bold text-zinc-900 dark:text-white max-w-lg leading-snug">
                        Projects &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">Work Showcase</span>
                    </h2>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                activeCategory === cat
                                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-sm"
                                    : "bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700"
                            }`}
                        >
                            {cat === "UI/UX" ? "🎨 UI/UX Design" : cat === "WordPress" ? "⚙️ WordPress" : cat === "Website" ? "🌐 Website" : "✦ All"}
                        </button>
                    ))}
                </div>

                {/* Project Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((project, i) => (
                        <div
                            key={i}
                            className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Preview banner */}
                            <div className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                                <span className="text-6xl filter drop-shadow-lg z-10">{project.emoji}</span>
                                <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.1)_20px,rgba(255,255,255,0.1)_40px)]" />
                                {project.featured && (
                                    <span className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/30">
                                        Featured
                                    </span>
                                )}
                                <span className="absolute bottom-3 left-3 bg-black/30 backdrop-blur-sm text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
                                    {project.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <h3 className="text-base font-semibold text-zinc-900 dark:text-white leading-snug">{project.title}</h3>
                                    {/* Links */}
                                    <div className="flex gap-1.5 shrink-0">
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-1.5 rounded-lg text-zinc-400 hover:text-violet-600 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-colors"
                                                title="View Live"
                                            >
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                                                title="View Code"
                                            >
                                                <Github className="h-4 w-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.map((tag, t) => (
                                        <span key={t} className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom note */}
                <p className="text-center text-zinc-400 dark:text-zinc-500 text-sm mt-12">
                    More projects available on request. <a href="#contact" className="text-violet-600 dark:text-violet-400 hover:underline font-medium">Get in touch →</a>
                </p>
            </div>
        </section>
    );
}
