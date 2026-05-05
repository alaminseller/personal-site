import { useState } from "react";
import { Check, Clock, Zap, Star, Crown, Package, Palette, ShoppingCart, Calendar, FilePlus, Rocket, ArrowRight } from "lucide-react";

/* ─── Types ─────────────────────────────────────────────────────── */
interface PricingPlan {
    id: string;
    name: string;
    icon: React.ReactNode;
    priceMin: number;
    priceMax: number | null;
    priceLabel: string;
    priceNote: string;
    delivery: string;
    features: string[];
    ctaLabel: string;
    highlighted: boolean;
    badge?: string;
    accentFrom: string;
    accentTo: string;
    iconBg: string;
}

interface Addon {
    id: string;
    name: string;
    description: string;
    icon: React.ReactNode;
    priceMin: number;
    priceMax: number | null;
    /* ─── Data ───────────────────────────────────────────────────────── */
const plans: PricingPlan[] = [
    {
        id: "basic",
        name: "Basic",
        icon: <Zap className="w-5 h-5" />,
        priceMin: 250,
        priceMax: null,
        priceLabel: "$250",
        priceNote: "Personal / Small Site",
        delivery: "5–7 days",
        highlighted: false,
        accentFrom: "from-blue-500",
        accentTo: "to-cyan-500",
        iconBg: "bg-blue-50/50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400",
        ctaLabel: "Start Basic",
        features: [
            "1–3 pages website",
            "Responsive design",
            "Contact form",
            "Standard SEO",
        ],
    },
    {
        id: "standard",
        name: "Standard",
        icon: <Star className="w-5 h-5" />,
        priceMin: 400,
        priceMax: 600,
        priceLabel: "$400–$600",
        priceNote: "Business Site",
        delivery: "7–10 days",
        highlighted: true,
        accentFrom: "from-violet-500",
        accentTo: "to-fuchsia-500",
        iconBg: "bg-violet-50/50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400",
        ctaLabel: "Start Standard",
        features: [
            "4–7 pages website",
            "SEO setup",
            "Speed optimization",
            "Social integration",
        ],
    },
    {
        id: "premium",
        name: "Premium",
        icon: <Crown className="w-5 h-5" />,
        priceMin: 700,
        priceMax: 1000,
        priceLabel: "$700–$1000",
        priceNote: "Advanced Solutions",
        delivery: "10–14 days",
        highlighted: false,
        accentFrom: "from-amber-500",
        accentTo: "to-orange-500",
        iconBg: "bg-amber-50/50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400",
        ctaLabel: "Start Premium",
        features: [
            "8+ pages website",
            "Custom design",
            "Advanced features",
            "Priority support",
        ],
    },
];

/* ─── Component ───────────────────────────────────────────────────── */
export default function PricingSection() {
    const scrollToContact = (e: React.MouseEvent) => {
        e.preventDefault();
        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="pricing"
            className="py-10 sm:py-14 bg-white dark:bg-[#070711] border-t border-zinc-100 dark:border-white/[0.05] relative overflow-hidden"
        >
            <div className="relative max-w-5xl mx-auto px-6">
                {/* ─── Section Header ─── */}
                <div className="mb-10 sm:mb-12">
                    <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-2">
                        Pricing
                    </p>
                    <h2 className="text-xl sm:text-2xl font-medium text-zinc-900 dark:text-white tracking-tight">
                        Simple, Transparent <span className="text-zinc-400">Pricing</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {plans.map((plan) => {
                        return (
                            <div
                                key={plan.id}
                                className={`
                                    relative flex flex-col rounded-2xl overflow-hidden text-left p-6
                                    border transition-all duration-300
                                    ${plan.highlighted
                                        ? "border-violet-200 dark:border-violet-800/40 bg-violet-50/20 dark:bg-violet-900/10 shadow-sm"
                                        : "border-zinc-100 dark:border-white/[0.05] bg-zinc-50/50 dark:bg-zinc-900/40"
                                    }
                                `}
                            >
                                {/* Icon + Name */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${plan.iconBg}`}>
                                        {plan.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{plan.name}</h3>
                                </div>

                                {/* Price */}
                                <div className="mb-6">
                                    <p className="text-3xl font-black text-zinc-900 dark:text-white">
                                        {plan.priceLabel}
                                    </p>
                                    <p className="text-[11px] font-medium text-zinc-400 uppercase tracking-widest mt-1">
                                        {plan.priceNote}
                                    </p>
                                </div>

                                <div className="border-t border-zinc-100 dark:border-white/[0.06] mb-6" />

                                {/* Features */}
                                <ul className="space-y-3 mb-8 grow">
                                    {plan.features.map((f, i) => (
                                        <li key={i} className="flex items-center gap-2.5">
                                            <Check className="w-3.5 h-3.5 text-violet-500" strokeWidth={3} />
                                            <span className="text-sm text-zinc-600 dark:text-zinc-300">{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#contact"
                                    onClick={scrollToContact}
                                    className={`
                                        w-full py-3 rounded-xl font-bold text-sm text-center transition-all
                                        ${plan.highlighted
                                            ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20 hover:bg-violet-700"
                                            : "bg-zinc-900 dark:bg-zinc-800 text-white hover:bg-black dark:hover:bg-zinc-700"
                                        }
                                    `}
                                >
                                    {plan.ctaLabel}
                                </a>
                            </div>
                        );
                    })}
                </div>

                {/* Custom note */}
                <div className="mt-10 pt-6 border-t border-zinc-100 dark:border-white/[0.05] text-center">
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                        Need a custom solution?{" "}
                        <a
                            href="#contact"
                            onClick={scrollToContact}
                            className="text-violet-600 dark:text-violet-400 hover:underline font-bold"
                        >
                            Let's discuss →
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
