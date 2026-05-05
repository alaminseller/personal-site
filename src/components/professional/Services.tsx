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
        <section id="services" className="bg-white dark:bg-zinc-950 py-10 sm:py-14 border-t border-zinc-100 dark:border-zinc-800">
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-3">Services</p>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-10">
                    <h2 className="text-xl sm:text-3xl font-medium text-zinc-900 dark:text-white max-w-lg leading-snug">
                        What I can build <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">for you</span>
                    </h2>
                    <p className="hidden sm:block text-zinc-500 dark:text-zinc-400 max-w-sm text-sm leading-relaxed">
                        Affordable, scalable, and easy-to-manage digital solutions for businesses.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className={`group bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-4 sm:p-5 border border-zinc-100 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1 flex flex-col${
                                i === 4 ? " hidden sm:flex" : ""
                            }`}
                        >
                            {/* Icon */}
                            <div className={`h-10 w-10 sm:h-12 sm:w-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${colorMap[service.color]}`}>
                                {service.icon}
                            </div>

                            <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-white mb-2">{service.title}</h3>
                            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">{service.description}</p>

                            {/* Tags */}
                            <div className="hidden sm:flex flex-wrap gap-2 mt-auto">
                                {service.tags.slice(0, 3).map((tag, t) => (
                                    <span key={t} className={`px-2 py-0.5 text-[10px] font-medium rounded-md ${tagColorMap[service.color]}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* CTA Card */}
                    <div className="hidden sm:flex bg-gradient-to-br from-violet-600 to-cyan-500 rounded-2xl p-6 flex-col justify-between text-white">
                        <div>
                            <p className="text-base font-semibold mb-2">Have a project?</p>
                            <p className="text-violet-100 text-xs leading-relaxed">
                                Let's build something great together. Affordable and scalable.
                            </p>
                        </div>
                        <a
                            href="#contact"
                            className="mt-6 inline-flex items-center gap-2 bg-white text-violet-700 font-semibold text-xs px-4 py-2 rounded-full hover:bg-violet-50 transition-colors w-fit"
                        >
                            Get in Touch <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
