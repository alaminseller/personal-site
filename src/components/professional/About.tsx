import { CheckCircle2 } from "lucide-react";

const highlights = [
    "Modern, fast & mobile-responsive websites",
    "Affordable pricing for small businesses & startups",
    "Easy-to-manage WordPress & CMS solutions",
    "Scalable architecture that grows with your business",
    "Full support from design to deployment",
    "Digital marketing integration for online growth",
];

export default function ProfessionalAbout() {
    return (
        <section className="bg-white dark:bg-zinc-950 py-16 sm:py-24 border-t border-zinc-100 dark:border-zinc-800">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Label */}
                <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-3">About Me</p>
                <h2 className="text-2xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-8 sm:mb-16 max-w-2xl leading-snug">
                    Passionate about building websites that <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">actually work.</span>
                </h2>

                <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-start">
                    {/* Bio */}
                    <div className="space-y-5 text-zinc-600 dark:text-zinc-300 leading-relaxed text-[17px]">
                        {/* Mobile: single concise paragraph */}
                        <p className="sm:hidden">
                            I'm <span className="font-semibold text-zinc-900 dark:text-white">Alamin Rafi</span>, a Web Developer based in Bangladesh. I build modern, affordable websites that help businesses grow — from landing pages to full-stack apps.
                        </p>

                        {/* Desktop: full paragraphs */}
                        <p className="hidden sm:block">
                            I'm <span className="font-semibold text-zinc-900 dark:text-white">Alamin Rafi</span>, a passionate Web Developer and Digital Service Provider based in Bangladesh. I specialize in creating modern, user-friendly, and cost-effective websites that help businesses and individuals grow their online presence.
                        </p>
                        <p className="hidden sm:block">
                            From sleek landing pages to fully functional WordPress websites and custom UI/UX designs, I bring a complete digital solution under one roof. My background in digital marketing means I don't just build beautiful sites — I build sites that <span className="font-semibold text-zinc-900 dark:text-white">perform and convert.</span>
                        </p>
                        <p className="hidden sm:block">
                            Whether you're a startup looking for your first website, a small business wanting to upgrade, or a brand in need of a full digital presence — I design scalable, easy-to-manage solutions tailored to your goals and budget.
                        </p>
                    </div>

                    {/* Highlights */}
                    <div>
                        <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-white mb-4 sm:mb-6">What I bring to every project:</h3>
                        <ul className="space-y-3 sm:space-y-4">
                            {highlights.map((item, i) => (
                                /* On mobile: show only first 3 highlights */
                                <li key={i} className={`flex items-start gap-3 ${i >= 3 ? "hidden sm:flex" : ""}`}>
                                    <CheckCircle2 className="h-5 w-5 text-violet-600 dark:text-violet-400 shrink-0 mt-0.5" />
                                    <span className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
