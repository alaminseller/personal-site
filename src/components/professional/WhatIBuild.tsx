const websiteTypes = [
    { label: "Business Websites",          icon: "🏢" },
    { label: "E-commerce Stores",          icon: "🛍️" },
    { label: "Portfolio Websites",         icon: "🎨" },
    { label: "Landing Pages",              icon: "🚀" },
    { label: "Booking & Service Websites", icon: "📅" },
    { label: "Education & Course Websites",icon: "🎓" },
    { label: "Agency Websites",            icon: "💼" },
];

export default function WhatIBuild() {
    return (
        <section className="bg-white dark:bg-zinc-950 py-20 border-t border-zinc-100 dark:border-zinc-800">
            <div className="max-w-5xl mx-auto px-6 text-center">

                {/* Label */}
                <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-4">
                    What I Build
                </p>

                {/* Headline */}
                <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white leading-snug mb-4">
                    I build{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">
                        modern websites
                    </span>{" "}
                    for different business needs
                </h2>

                {/* Supporting line */}
                <p className="text-zinc-500 dark:text-zinc-400 text-base mb-10 max-w-xl mx-auto">
                    Custom solutions available based on your needs.
                </p>

                {/* Category badges */}
                <div className="flex flex-wrap justify-center gap-3">
                    {websiteTypes.map(({ label, icon }, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-zinc-50 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 shadow-sm hover:border-violet-400 dark:hover:border-violet-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                        >
                            <span className="text-base leading-none">{icon}</span>
                            {label}
                        </span>
                    ))}
                </div>

                {/* Divider accent */}
                <div className="mt-12 flex items-center justify-center gap-3 text-zinc-300 dark:text-zinc-700 text-xs font-medium tracking-widest uppercase select-none">
                    <span className="h-px w-16 bg-zinc-200 dark:bg-zinc-700" />
                    Every project is unique — crafted to match your brand
                    <span className="h-px w-16 bg-zinc-200 dark:bg-zinc-700" />
                </div>

            </div>
        </section>
    );
}
