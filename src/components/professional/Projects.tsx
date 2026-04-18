import { useState } from "react";
import { Figma, Layers } from "lucide-react";

type Category = "All" | "UI/UX Design";

interface Project {
    title: string;
    description: string;
    category: Exclude<Category, "All">;
    tags: string[];
    gradient: string;
    emoji: string;
    featured?: boolean;
}

const projects: Project[] = [
    {
        title: "Task Management SaaS Dashboard",
        description: "A modern UI/UX concept design created to demonstrate layout, usability, and visual hierarchy for a SaaS productivity app.",
        category: "UI/UX Design",
        tags: ["Figma", "SaaS Dashboard", "UI Concept"],
        gradient: "from-blue-500 to-indigo-600",
        emoji: "📊",
        featured: true,
    },
    {
        title: "Fintech Mobile Wallet App",
        description: "An intuitive mobile wallet UI exploration focusing on clean transactions, easy navigation, and financial data visualization.",
        category: "UI/UX Design",
        tags: ["Figma", "Mobile UI", "Fintech Concept"],
        gradient: "from-green-500 to-teal-600",
        emoji: "💳",
        featured: true,
    },
    {
        title: "E-Commerce Storefront Concept",
        description: "A conceptual e-commerce design with a focus on product discovery, seamless checkout flow, and a minimalist aesthetic.",
        category: "UI/UX Design",
        tags: ["UI Concept", "E-Commerce", "Web Design"],
        gradient: "from-pink-500 to-rose-600",
        emoji: "🛍️",
    },
    {
        title: "Real Estate Property Finder",
        description: "A structured layout design demo showcasing property listings, interactive map interfaces, and advanced search filter systems.",
        category: "UI/UX Design",
        tags: ["Web App UI", "Design Demo", "Wireframing"],
        gradient: "from-amber-500 to-orange-600",
        emoji: "🏢",
    },
    {
        title: "Healthcare Doctor Booking UI",
        description: "A clean, accessible UI concept for a patient booking system, emphasizing trust, typography, and clear call-to-actions.",
        category: "UI/UX Design",
        tags: ["UI Exploration", "Healthcare", "Clean UI"],
        gradient: "from-cyan-500 to-blue-500",
        emoji: "🏥",
    },
    {
        title: "Modern Portfolio UI Kit",
        description: "A scalable UI kit and template concept demonstrating cohesive component structure, light/dark mode foundations, and Figma auto-layout.",
        category: "UI/UX Design",
        tags: ["UI Kit", "Design System", "Figma"],
        gradient: "from-violet-500 to-purple-600",
        emoji: "🎨",
        featured: true,
    },
];

const categories: Category[] = ["All", "UI/UX Design"];

export default function ProjectsSection() {
    const [activeCategory, setActiveCategory] = useState<Category>("All");

    const filtered = activeCategory === "All" ? projects : projects.filter(p => p.category === activeCategory);

    return (
        <section id="projects" className="bg-zinc-50 dark:bg-zinc-900/50 py-24 border-t border-zinc-100 dark:border-zinc-800">
            <div className="max-w-6xl mx-auto px-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-3">Portfolio</p>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <h2 className="text-4xl font-bold text-zinc-900 dark:text-white max-w-lg leading-snug">
                        Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">Showcase</span>
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
                            {cat === "UI/UX Design" ? "🎨 UI/UX Design" : "✦ All"}
                        </button>
                    ))}
                </div>

                {/* Project Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((project, i) => (
                        <div
                            key={i}
                            className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                        >
                            {/* Preview banner */}
                            <div className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden shrink-0`}>
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
                            <div className="p-6 flex flex-col grow">
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <h3 className="text-[17px] font-semibold text-zinc-900 dark:text-white leading-snug">{project.title}</h3>
                                </div>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-5 grow">{project.description}</p>
                                <div className="flex flex-wrap gap-1.5 mt-auto">
                                    {project.tags.map((tag, t) => (
                                        <span key={t} className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5">
                                            {tag.toLowerCase().includes('figma') ? <Figma className="w-3 h-3" /> : null}
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
                    Design samples created for demonstration and portfolio purposes.
                </p>
            </div>
        </section>
    );
}
