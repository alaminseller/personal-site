/* ─── Skill Categories ───────────────────────────────────────────────── */
const skillGroups = [
    {
        category: "Frontend Development",
        icon: "🌐",
        accent: "violet",
        skills: [
            "Responsive Web Design",
            "Modern UI Implementation",
            "Website Performance Optimization",
            "HTML5 & CSS3",
            "JavaScript (ES6+)",
            "Mobile-First Development",
        ],
    },
    {
        category: "Website Development",
        icon: "💻",
        accent: "cyan",
        skills: [
            "Custom Website Creation",
            "Landing Page Development",
            "Website Customization",
            "Multi-Page Websites",
            "Contact & Booking Forms",
            "Speed & SEO Optimization",
        ],
    },
    {
        category: "CMS & Website Builders",
        icon: "⚙️",
        accent: "indigo",
        skills: [
            "WordPress Development",
            "Elementor / Page Builders",
            "Theme Customization",
            "Plugin Integration",
            "WooCommerce Stores",
            "Website Management",
        ],
    },
    {
        category: "UI/UX Design",
        icon: "🎨",
        accent: "pink",
        skills: [
            "User Interface Design",
            "Wireframing & Prototyping",
            "Design Systems",
            "Figma",
            "Visual Layout & Typography",
            "Brand-Consistent Design",
        ],
    },
    {
        category: "Tools & Workflow",
        icon: "🛠️",
        accent: "emerald",
        skills: [
            "VS Code",
            "Git & GitHub (Basic)",
            "Vercel / Netlify Deployment",
            "cPanel & Web Hosting",
            "Browser DevTools",
            "Figma & Canva",
        ],
    },
    {
        category: "Client & Project Skills",
        icon: "🤝",
        accent: "amber",
        skills: [
            "Client Communication",
            "Project Planning",
            "Requirement Analysis",
            "Timely Delivery",
            "Revision Management",
            "Problem Solving",
        ],
    },
] as const;

/* ─── Accent colour maps ─────────────────────────────────────────────── */
type Accent = (typeof skillGroups)[number]["accent"];

const iconBg: Record<Accent, string> = {
    violet: "bg-violet-100 dark:bg-violet-900/25 text-violet-600 dark:text-violet-400",
    cyan:   "bg-cyan-100   dark:bg-cyan-900/25   text-cyan-600   dark:text-cyan-400",
    indigo: "bg-indigo-100 dark:bg-indigo-900/25 text-indigo-600 dark:text-indigo-400",
    pink:   "bg-pink-100   dark:bg-pink-900/25   text-pink-600   dark:text-pink-400",
    emerald:"bg-emerald-100 dark:bg-emerald-900/25 text-emerald-600 dark:text-emerald-400",
    amber:  "bg-amber-100  dark:bg-amber-900/25  text-amber-600  dark:text-amber-400",
};

const badgeHover: Record<Accent, string> = {
    violet: "hover:bg-violet-100 dark:hover:bg-violet-900/30 hover:text-violet-700 dark:hover:text-violet-300",
    cyan:   "hover:bg-cyan-100   dark:hover:bg-cyan-900/30   hover:text-cyan-700   dark:hover:text-cyan-300",
    indigo: "hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-700 dark:hover:text-indigo-300",
    pink:   "hover:bg-pink-100   dark:hover:bg-pink-900/30   hover:text-pink-700   dark:hover:text-pink-300",
    emerald:"hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-700 dark:hover:text-emerald-300",
    amber:  "hover:bg-amber-100  dark:hover:bg-amber-900/30  hover:text-amber-700  dark:hover:text-amber-300",
};

const borderAccent: Record<Accent, string> = {
    violet: "hover:border-violet-200 dark:hover:border-violet-800/60",
    cyan:   "hover:border-cyan-200   dark:hover:border-cyan-800/60",
    indigo: "hover:border-indigo-200 dark:hover:border-indigo-800/60",
    pink:   "hover:border-pink-200   dark:hover:border-pink-800/60",
    emerald:"hover:border-emerald-200 dark:hover:border-emerald-800/60",
    amber:  "hover:border-amber-200  dark:hover:border-amber-800/60",
};

/* ─── Component ──────────────────────────────────────────────────────── */
export default function ProfessionalSkills() {
    return (
        <section className="bg-zinc-50 dark:bg-zinc-900/50 py-24 border-t border-zinc-100 dark:border-zinc-800">
            <div className="max-w-6xl mx-auto px-6">

                {/* Section header */}
                <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-3">
                    Skills
                </p>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
                    <h2 className="text-4xl font-bold text-zinc-900 dark:text-white max-w-lg leading-snug">
                        Tools &amp; skills I bring{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">
                            to every project
                        </span>
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xs leading-relaxed sm:text-right">
                        A focused set of skills refined through real client projects and hands-on delivery.
                    </p>
                </div>

                {/* Skills grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillGroups.map((group, index) => (
                        <div
                            key={index}
                            className={`group bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800
                                shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300
                                ${borderAccent[group.accent]}`}
                        >
                            {/* Card header */}
                            <div className="flex items-center gap-3 mb-5">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 transition-all duration-300 ${iconBg[group.accent]}`}>
                                    {group.icon}
                                </div>
                                <h3 className="text-[15px] font-semibold text-zinc-900 dark:text-white leading-tight">
                                    {group.category}
                                </h3>
                            </div>

                            {/* Skill badges */}
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className={`px-3 py-1 text-xs font-medium rounded-full
                                            bg-zinc-100 dark:bg-zinc-800
                                            text-zinc-600 dark:text-zinc-400
                                            transition-colors duration-200 cursor-default
                                            ${badgeHover[group.accent]}`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom note */}
                <p className="text-center text-zinc-400 dark:text-zinc-500 text-sm mt-12">
                    Always learning and expanding.{" "}
                    <a href="#contact" className="text-violet-600 dark:text-violet-400 hover:underline font-medium">
                        Let's discuss your project →
                    </a>
                </p>
            </div>
        </section>
    );
}
