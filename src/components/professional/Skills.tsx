const skillGroups = [
    {
        category: "Frontend Development",
        icon: "🌐",
        skills: ["HTML5 & CSS3", "JavaScript (ES6+)", "React.js", "Responsive Web Design", "Tailwind CSS", "Bootstrap"],
    },
    {
        category: "CMS & WordPress",
        icon: "⚙️",
        skills: ["WordPress Development", "Theme Customization", "Plugin Integration", "WooCommerce", "Elementor / Page Builders", "Content Management"],
    },
    {
        category: "UI/UX Design",
        icon: "🎨",
        skills: ["Figma", "Adobe XD", "Wireframing & Prototyping", "User Interface Design", "Design Systems", "Canva"],
    },
    {
        category: "Digital Marketing",
        icon: "📈",
        skills: ["SEO Optimization", "Google Analytics", "Social Media Management", "Email Marketing", "Content Strategy", "Performance Tracking"],
    },
    {
        category: "Tools & Workflow",
        icon: "🛠️",
        skills: ["Git & GitHub", "VS Code", "Adobe Photoshop", "Adobe Illustrator", "Vercel / Netlify", "cPanel & Hosting"],
    },
    {
        category: "Soft Skills",
        icon: "💼",
        skills: ["Client Communication", "Project Management", "Problem Solving", "Team Collaboration", "Creative Thinking", "Time Management"],
    },
];

export default function ProfessionalSkills() {
    return (
        <section className="bg-zinc-50 dark:bg-zinc-900/50 py-24 border-t border-zinc-100 dark:border-zinc-800">
            <div className="max-w-6xl mx-auto px-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-3">Skills</p>
                <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-16 max-w-2xl leading-snug">
                    Tools & technologies I work with
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillGroups.map((group, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-2xl">{group.icon}</span>
                                <h3 className="text-base font-semibold text-zinc-900 dark:text-white">{group.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-violet-100 dark:hover:bg-violet-900/30 hover:text-violet-700 dark:hover:text-violet-300 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
