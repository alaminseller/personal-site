import { ArrowRight, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProcessionalHeroVisual() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-950 pt-20">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-blue-100/50 dark:bg-blue-900/10 blur-3xl opacity-60 mix-blend-multiply dark:mix-blend-lighten animate-blob" />
                <div className="absolute top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-indigo-100/50 dark:bg-indigo-900/10 blur-3xl opacity-60 mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-2000" />
                <div className="absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-purple-100/50 dark:bg-purple-900/10 blur-3xl opacity-60 mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-4000" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 text-sm font-medium mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                        </span>
                        Available for new projects
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
                        Digital Growth, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                            Designed & Delivered.
                        </span>
                    </h1>

                    <p className="text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                        Hi, I'm <span className="font-semibold text-zinc-900 dark:text-white">Alamin Rafi</span>.
                        I blend strategic **Digital Marketing** with compelling **Graphic Design** to build brands that convert.
                    </p>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                        <Button size="lg" className="h-12 px-8 text-base rounded-full gap-2 transition-transform hover:scale-105" asChild>
                            <a href="#contact">
                                Start a Project <ArrowRight className="h-4 w-4" />
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full gap-2 hover:bg-zinc-100 dark:hover:bg-zinc-800" asChild>
                            <a href="/Alamin Resume Final.pdf" target="_blank" rel="noopener noreferrer">
                                <FileText className="h-4 w-4" /> View Resume
                            </a>
                        </Button>
                    </div>

                    {/* Quick Stats/Social Proof */}
                    <div className="mt-12 pt-8 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-center lg:justify-start gap-8 lg:gap-12 text-center lg:text-left">
                        <div>
                            <p className="text-3xl font-bold text-zinc-900 dark:text-white">5+</p>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-medium">Years Exp.</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-zinc-900 dark:text-white">500k+</p>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-medium">Audience Reach</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-zinc-900 dark:text-white">100%</p>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-medium">Job Success</p>
                        </div>
                    </div>
                </div>

                {/* Visual Element - Abstract 3D-like Composition using CSS */}
                <div className="relative hidden lg:block">
                    <div className="relative w-full aspect-square">
                        {/* Main Image Cointainer with gradient border */}
                        <div className="absolute inset-4 rounded-3xl bg-gradient-to-tr from-blue-600 to-purple-600 p-1 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
                            <div className="w-full h-full bg-white dark:bg-zinc-900 rounded-[22px] overflow-hidden relative">
                                {/* Fallback pattern if no image */}
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop')] bg-cover bg-center opacity-90 hover:scale-110 transition-transform duration-1000"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent"></div>
                            </div>
                        </div>

                        {/* Floating Elements (Glassmorphism) */}
                        <div className="absolute top-20 -left-4 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/20 animate-float">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-500 font-medium">SEO Growth</p>
                                    <p className="text-lg font-bold text-zinc-900 dark:text-white">+150%</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-20 -right-4 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/20 animate-float animation-delay-1500">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-500 font-medium">Creative Design</p>
                                    <p className="text-lg font-bold text-zinc-900 dark:text-white">Pixel Perfect</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
