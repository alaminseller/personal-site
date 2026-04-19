import { useState } from "react";
import { Figma, ArrowRight } from "lucide-react";

type Category = "All" | "UI/UX Design";

interface Project {
    title: string;
    description: string;
    category: Exclude<Category, "All">;
    tags: string[];
    image: string;
    featured?: boolean;
}

const projects: Project[] = [
    {
        title: "NovaTech Analytics",
        description: "A modern SaaS analytics dashboard with dark mode and sleek data visualizations.",
        category: "UI/UX Design",
        tags: ["SaaS Dashboard", "Dark Mode", "React"],
        image: "/projects/novatech_saas.png",
        featured: true,
    },
    {
        title: "UrbanShop E-Commerce",
        description: "A minimalist fashion storefront featuring large lifestyle imagery and seamless checkout.",
        category: "UI/UX Design",
        tags: ["E-Commerce", "Web Design", "Minimalist"],
        image: "/projects/urbanshop_ecommerce.png",
        featured: true,
    },
    {
        title: "ZenHealth Booking",
        description: "A clean, accessible healthcare booking system interface for patients and doctors.",
        category: "UI/UX Design",
        tags: ["Healthcare", "UI Concept", "Accessible"],
        image: "/projects/zenhealth_medical.png",
    },
    {
        title: "EstatePro Real Estate",
        description: "A premium property finder with high-end listings and an interactive map UI.",
        category: "UI/UX Design",
        tags: ["Web App", "Real Estate", "Luxury"],
        image: "/projects/estatepro_realestate.png",
    },
    {
        title: "FinFlow Mobile Banking",
        description: "A fintech app dashboard showing clean financial data visualization and transactions.",
        category: "UI/UX Design",
        tags: ["Fintech", "Mobile UI", "App Design"],
        image: "/projects/finflow_fintech.png",
    },
    {
        title: "CreativStudio Agency",
        description: "A vibrant creative agency portfolio featuring bold typography and dynamic layouts.",
        category: "UI/UX Design",
        tags: ["Agency", "Portfolio", "Awwwards Style"],
        image: "/projects/creativstudio_agency.png",
        featured: true,
    },
    {
        title: "CareerPro — Portfolio Website",
        description: "A clean personal portfolio & professional profile site built for a real client, featuring skills, education, and contact sections.",
        category: "UI/UX Design",
        tags: ["Personal Portfolio", "Web Design", "Client Work"],
        image: "/projects/careerpro_portfolio.png",
    },
    {
        title: "MediCare Pro — Doctor Website",
        description: "A professional medical portfolio website for a specialist physician with booking CTAs, experience timeline, and services section.",
        category: "UI/UX Design",
        tags: ["Medical Website", "Healthcare", "Client Work"],
        image: "/projects/medico_doctor_website.png",
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
                        Selected Work & <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">Case Studies</span>
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
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map((project, i) => (
                        <div
                            key={i}
                            className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                        >
                            {/* Preview Image */}
                            <div className="h-56 relative overflow-hidden shrink-0 bg-zinc-100 dark:bg-zinc-800">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {project.featured && (
                                    <span className="absolute top-4 right-4 bg-white/90 dark:bg-black/70 backdrop-blur-md text-zinc-900 dark:text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-black/5 dark:border-white/10 shadow-sm">
                                        Featured
                                    </span>
                                )}
                                <span className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
                                    {project.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col grow">
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white leading-snug mb-2">{project.title}</h3>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6 grow">{project.description}</p>
                                
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, t) => (
                                        <span key={t} className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-zinc-100 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 flex items-center gap-1.5">
                                            {tag.toLowerCase().includes('figma') ? <Figma className="w-3 h-3" /> : null}
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                <a href="#view-project" className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 text-sm font-semibold text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group/btn">
                                    View Project
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom note */}
                <p className="text-center text-zinc-400 dark:text-zinc-500 text-sm mt-16">
                    Selected works created for diverse clients across multiple industries.
                </p>
            </div>
        </section>
    );
}
