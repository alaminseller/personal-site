const currentYear = new Date().getFullYear();

const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
];

const socials = [
    { href: "https://linkedin.com/in/alaminrafi", label: "LinkedIn" },
    { href: "https://github.com/alaminseller", label: "GitHub" },
    { href: "https://wa.me/8801917443161", label: "WhatsApp" },
    { href: "mailto:hello@alaminrafi.com", label: "Email" },
];

export default function ProfessionalFooter() {
    return (
        <footer className="bg-zinc-900 dark:bg-zinc-950 text-zinc-300 py-16 border-t border-zinc-800">
            <div className="max-w-6xl mx-auto px-6">
                {/* Top Row */}
                <div className="grid md:grid-cols-3 gap-10 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2.5 mb-4">
                            <div className="h-8 w-8 bg-gradient-to-br from-violet-600 to-cyan-500 rounded-lg flex items-center justify-center text-white font-black text-sm shadow-md">
                                AR
                            </div>
                            <span className="text-white font-bold text-lg">Alamin Rafi</span>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Web Developer & Digital Service Provider. Building modern, affordable, and scalable websites for businesses worldwide.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <p className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navigation</p>
                        <ul className="space-y-2">
                            {links.map(link => (
                                <li key={link.href}>
                                    <a href={link.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <p className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Connect</p>
                        <ul className="space-y-2">
                            {socials.map(social => (
                                <li key={social.href}>
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-zinc-400 hover:text-violet-400 transition-colors"
                                    >
                                        {social.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-zinc-500">
                        © {currentYear} Alamin Rafi. All rights reserved.
                    </p>
                    <p className="text-sm text-zinc-500">
                        Built with ❤️ — Modern · Affordable · Scalable
                    </p>
                </div>
            </div>
        </footer>
    );
}
