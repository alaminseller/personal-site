import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
];

export default function ModernHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            const sections = navLinks.map(link => link.href.substring(1));
            let current = "";
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && window.scrollY >= element.offsetTop - 100) {
                    current = section;
                }
            }
            setActiveSection(current);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            setIsMenuOpen(false);
        }
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled
                    ? "py-3 bg-white/90 dark:bg-[#070711]/80 backdrop-blur-xl border-b border-zinc-200 dark:border-white/[0.06] shadow-sm dark:shadow-[0_1px_40px_rgba(0,0,0,0.6)]"
                    : "py-5 bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#"
                    onClick={(e) => scrollToSection(e, "body")}
                    className="text-xl font-black tracking-tighter text-zinc-900 dark:text-white flex items-center gap-2.5"
                >
                    <div className="bg-brand-gradient h-8 w-8 rounded-lg flex items-center justify-center text-white font-black text-sm shadow-md">
                        AR
                    </div>
                    <span className="hidden sm:block bg-gradient-to-r from-violet-600 to-cyan-500 dark:from-violet-400 dark:to-cyan-400 bg-clip-text text-transparent">Alamin Rafi</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-1">
                    <ul className="flex items-center gap-1 mr-4">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className={cn(
                                        "px-4 py-2 text-sm font-medium transition-all rounded-full hover:bg-zinc-100 dark:hover:bg-white/[0.08]",
                                        activeSection === link.href.substring(1)
                                            ? "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10"
                                            : "text-zinc-500 dark:text-white/60 hover:text-zinc-900 dark:hover:text-white"
                                    )}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <a
                        href="#contact"
                        onClick={(e) => scrollToSection(e, "#contact")}
                        className="bg-brand-gradient px-5 py-2 text-sm font-semibold rounded-full text-white transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] mr-3"
                    >
                        Hire Me
                    </a>

                    <div className="pl-3 border-l border-zinc-200 dark:border-zinc-800">
                        <ThemeToggle />
                    </div>
                </nav>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-3 lg:hidden">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-[#0d0b1f]/95 backdrop-blur-xl border-b border-zinc-200 dark:border-white/[0.08] shadow-2xl">
                    <nav className="flex flex-col p-6 space-y-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className={cn(
                                    "px-4 py-3 rounded-xl text-base font-medium transition-colors",
                                    activeSection === link.href.substring(1)
                                        ? "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10"
                                        : "text-zinc-500 dark:text-white/60 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-white/[0.06]"
                                )}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={(e) => scrollToSection(e, "#contact")}
                            className="bg-brand-gradient mt-2 px-4 py-3 rounded-xl text-base font-semibold text-white text-center"
                        >
                            Hire Me
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
