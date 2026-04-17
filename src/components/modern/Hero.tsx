import { ArrowRight, Code2, Globe, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ModernHeroVisual() {
    return (
        <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-950 pt-20">
            {/* Animated gradient blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-violet-100/60 dark:bg-violet-900/10 blur-3xl opacity-70 mix-blend-multiply dark:mix-blend-lighten animate-blob" />
                <div className="absolute top-[30%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-cyan-100/60 dark:bg-cyan-900/10 blur-3xl opacity-60 mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-2000" />
                <div className="absolute -bottom-[10%] left-[30%] w-[50vw] h-[50vw] rounded-full bg-indigo-100/50 dark:bg-indigo-900/10 blur-3xl opacity-60 mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-4000" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                {/* Left – Text Content */}
                <div className="text-center lg:text-left">
                    {/* Available badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-300 text-sm font-medium mb-8 border border-violet-100 dark:border-violet-800/30">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600"></span>
                        </span>
                        Open to new projects
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6 leading-[1.1]">
                        Web Developer<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500 dark:from-violet-400 dark:to-cyan-400">
                            &amp; Digital Creator.
                        </span>
                    </h1>

                    <p className="text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                        Hi, I'm <span className="font-semibold text-zinc-900 dark:text-white">Alamin Rafi</span> — a passionate developer who builds modern, fast, and affordable websites that help businesses grow online.
                    </p>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                        <Button
                            size="lg"
                            className="h-12 px-8 text-base rounded-full gap-2 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition-transform hover:scale-105"
                            asChild
                        >
                            <a href="#contact">
                                Start a Project <ArrowRight className="h-4 w-4" />
                            </a>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-12 px-8 text-base rounded-full gap-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                            asChild
                        >
                            <a href="#projects">
                                <Globe className="h-4 w-4" /> View Work
                            </a>
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="mt-14 pt-8 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-center lg:justify-start gap-10 text-center lg:text-left">
                        <div>
                            <p className="text-3xl font-bold text-zinc-900 dark:text-white">30+</p>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-medium mt-0.5">Projects Done</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-zinc-900 dark:text-white">100%</p>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-medium mt-0.5">Client Satisfaction</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-zinc-900 dark:text-white">5+</p>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-medium mt-0.5">Years Exp.</p>
                        </div>
                    </div>
                </div>

                {/* Right – Visual composition */}
                <div className="relative hidden lg:flex items-center justify-center">
                    <div className="relative w-full max-w-md aspect-square">
                        {/* Main card */}
                        <div className="absolute inset-4 rounded-3xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-500 p-[2px] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
                            <div className="w-full h-full bg-white dark:bg-zinc-900 rounded-[22px] overflow-hidden relative flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-cyan-50 dark:from-violet-950/40 dark:to-cyan-950/40" />
                                <div className="relative z-10 text-center p-6">
                                    <Code2 className="h-16 w-16 mx-auto mb-4 text-violet-600 dark:text-violet-400" />
                                    <p className="font-mono text-sm text-zinc-500 dark:text-zinc-400">const developer = &#123;</p>
                                    <p className="font-mono text-sm text-violet-600 dark:text-violet-300 ml-4">name: <span className="text-cyan-600 dark:text-cyan-400">"Alamin Rafi"</span>,</p>
                                    <p className="font-mono text-sm text-violet-600 dark:text-violet-300 ml-4">stack: <span className="text-cyan-600 dark:text-cyan-400">["React","WP","JS"]</span>,</p>
                                    <p className="font-mono text-sm text-violet-600 dark:text-violet-300 ml-4">available: <span className="text-green-500">true</span></p>
                                    <p className="font-mono text-sm text-zinc-500 dark:text-zinc-400">&#125;</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating badge 1 */}
                        <div className="absolute -top-2 -left-6 bg-white/95 dark:bg-zinc-800/95 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-700 animate-float">
                            <div className="flex items-center gap-2.5">
                                <div className="h-9 w-9 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 text-lg">
                                    ✓
                                </div>
                                <div>
                                    <p className="text-[11px] text-zinc-500 font-medium">Latest Project</p>
                                    <p className="text-sm font-bold text-zinc-900 dark:text-white">Live & Running</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating badge 2 */}
                        <div className="absolute -bottom-4 -right-6 bg-white/95 dark:bg-zinc-800/95 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-700 animate-float animation-delay-1500">
                            <div className="flex items-center gap-2.5">
                                <div className="h-9 w-9 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
                                    <Sparkles className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                                </div>
                                <div>
                                    <p className="text-[11px] text-zinc-500 font-medium">Affordable &</p>
                                    <p className="text-sm font-bold text-zinc-900 dark:text-white">Scalable Websites</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
