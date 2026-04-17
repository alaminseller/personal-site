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
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-sm border-b border-zinc-200 dark:border-zinc-800 py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#"
                    onClick={(e) => scrollToSection(e, "body")}
                    className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-white flex items-center gap-2.5"
                >
                    <div className="h-8 w-8 bg-gradient-to-br from-violet-600 to-cyan-500 rounded-lg flex items-center justify-center text-white font-black text-sm shadow-md">
                        AR
                    </div>
                    <span className="hidden sm:block">Alamin Rafi</span>
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
                                        "px-4 py-2 text-sm font-medium transition-all rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800",
                                        activeSection === link.href.substring(1)
                                            ? "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/20"
                                            : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
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
                        className="px-4 py-2 text-sm font-semibold rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:opacity-90 transition-opacity mr-3"
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
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 shadow-xl">
                    <nav className="flex flex-col p-6 space-y-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className={cn(
                                    "px-4 py-3 rounded-xl text-base font-medium transition-colors",
                                    activeSection === link.href.substring(1)
                                        ? "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/20"
                                        : "text-zinc-600 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                                )}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={(e) => scrollToSection(e, "#contact")}
                            className="mt-2 px-4 py-3 rounded-xl text-base font-semibold bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-center"
                        >
                            Hire Me
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
