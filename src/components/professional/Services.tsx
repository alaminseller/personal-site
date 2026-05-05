import { Globe, Code2, Layout, Figma, BarChart3, ArrowRight } from "lucide-react";

const services = [
    {
        icon: <Globe className="h-6 w-6" />,
        title: "Website Design",
        description: "Clean, fast, modern websites",
        color: "violet",
    },
    {
        icon: <Code2 className="h-6 w-6" />,
        title: "WordPress Website",
        description: "Easy to manage business sites",
        color: "cyan",
    },
    {
        icon: <Layout className="h-6 w-6" />,
        title: "Landing Page",
        description: "High-converting simple pages",
        color: "indigo",
    },
    {
        icon: <Figma className="h-6 w-6" />,
        title: "UI/UX Design",
        description: "Modern clean interface design",
        color: "pink",
    },
    {
        icon: <BarChart3 className="h-6 w-6" />,
        title: "Digital Marketing",
        description: "Grow your online presence",
        color: "emerald",
    },
];

const colorMap: Record<string, string> = {
    violet: "bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400",
    cyan: "bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400",
    indigo: "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400",
    pink: "bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400",
    emerald: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400",
};

export default function ServicesSection() {
    return (
        <section id="services" className="bg-white dark:bg-zinc-950 py-10 sm:py-14 border-t border-zinc-100 dark:border-zinc-800">
            <div className="max-w-5xl mx-auto px-5 sm:px-6">
                <div className="mb-8 sm:mb-12">
                    <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-2">Services</p>
                    <h2 className="text-xl sm:text-2xl font-medium text-zinc-900 dark:text-white leading-snug">
                        What I can build <span className="text-zinc-400">for you</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="group bg-zinc-50/50 dark:bg-zinc-900/40 rounded-xl p-5 border border-zinc-100 dark:border-zinc-800/50 transition-all duration-300 hover:border-violet-200 dark:hover:border-violet-800/30 flex flex-col items-center text-center"
                        >
                            <div className={`h-10 w-10 rounded-full flex items-center justify-center mb-3 ${colorMap[service.color]}`}>
                                {service.icon}
                            </div>
                            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-1">{service.title}</h3>
                            <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed line-clamp-1">{service.description}</p>
                        </div>
                    ))}
                    
                    {/* Simple CTA card */}
                    <div className="bg-brand-gradient rounded-xl p-5 flex flex-col items-center justify-center text-center text-white">
                        <p className="text-xs font-medium mb-3">Custom Project?</p>
                        <a
                            href="#contact"
                            className="bg-white text-violet-700 font-bold text-[10px] px-4 py-2 rounded-full hover:bg-violet-50 transition-colors uppercase tracking-wider"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
