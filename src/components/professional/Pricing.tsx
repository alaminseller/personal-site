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
    priceLabel: string;
    iconBg: string;
}

/* ─── Data ───────────────────────────────────────────────────────── */
const plans: PricingPlan[] = [
    {
        id: "basic",
        name: "Basic",
        icon: <Zap className="w-5 h-5" />,
        priceMin: 250,
        priceMax: null,
        priceLabel: "$250",
        priceNote: "Starting from",
        delivery: "5–7 days",
        highlighted: false,
        accentFrom: "from-blue-500",
        accentTo: "to-cyan-500",
        iconBg: "bg-blue-500/10 text-blue-500 dark:text-blue-400",
        ctaLabel: "Start Basic",
        features: [
            "1–3 pages website",
            "Responsive design",
            "Basic UI design included",
            "Contact form",
            "Basic SEO setup",
        ],
    },
    {
        id: "standard",
        name: "Standard",
        icon: <Star className="w-5 h-5" />,
        priceMin: 400,
        priceMax: 600,
        priceLabel: "$400–$600",
        priceNote: "Most popular range",
        delivery: "7–10 days",
        highlighted: true,
        badge: "Most Popular",
        accentFrom: "from-violet-500",
        accentTo: "to-fuchsia-500",
        iconBg: "bg-violet-500/10 text-violet-500 dark:text-violet-400",
        ctaLabel: "Start Standard",
        features: [
            "4–7 pages website",
            "Modern UI/UX design",
            "Speed optimization",
            "Full SEO setup",
            "Social media integration",
            "Google Analytics",
        ],
    },
    {
        id: "premium",
        name: "Premium",
        icon: <Crown className="w-5 h-5" />,
        priceMin: 700,
        priceMax: 1000,
        priceLabel: "$700–$1000",
        priceNote: "Full-scale project",
        delivery: "10–14 days",
        highlighted: false,
        accentFrom: "from-amber-500",
        accentTo: "to-orange-500",
        iconBg: "bg-amber-500/10 text-amber-500 dark:text-amber-400",
        ctaLabel: "Start Premium",
        features: [
            "8+ pages website",
            "Custom UI/UX design",
            "Advanced functionality",
            "CMS / Admin panel",
            "Performance optimization",
            "Priority support",
            "Post-launch revisions",
        ],
    },
];

const addons: Addon[] = [
    {
        id: "uiux",
        name: "Custom UI/UX Design",
        description: "Bespoke design system, wireframes & visual prototypes",
        icon: <Palette className="w-5 h-5" />,
        priceMin: 50,
        priceMax: 150,
        priceLabel: "+$50–$150",
        iconBg: "bg-violet-500/10 text-violet-500 dark:text-violet-400",
    },
    {
        id: "logo",
        name: "Logo Design",
        description: "Professional logo with multiple concepts & revisions",
        icon: <Package className="w-5 h-5" />,
        priceMin: 20,
        priceMax: 80,
        priceLabel: "+$20–$80",
        iconBg: "bg-pink-500/10 text-pink-500 dark:text-pink-400",
    },
    {
        id: "ecommerce",
        name: "E-commerce Functionality",
        description: "Product pages, cart, checkout & payment integration",
        icon: <ShoppingCart className="w-5 h-5" />,
        priceMin: 100,
        priceMax: 300,
        priceLabel: "+$100–$300",
        iconBg: "bg-emerald-500/10 text-emerald-500 dark:text-emerald-400",
    },
    {
        id: "booking",
        name: "Booking System",
        description: "Online appointment scheduling with calendar sync",
        icon: <Calendar className="w-5 h-5" />,
        priceMin: 50,
        priceMax: 150,
        priceLabel: "+$50–$150",
        iconBg: "bg-cyan-500/10 text-cyan-500 dark:text-cyan-400",
    },
    {
        id: "extrapage",
        name: "Extra Pages",
        description: "Additional pages beyond your package limit",
        icon: <FilePlus className="w-5 h-5" />,
        priceMin: 20,
        priceMax: null,
        priceLabel: "+$20/page",
        iconBg: "bg-amber-500/10 text-amber-500 dark:text-amber-400",
    },
    {
        id: "fastdelivery",
        name: "Fast Delivery",
        description: "Priority delivery — cut your timeline in half",
        icon: <Rocket className="w-5 h-5" />,
        priceMin: 50,
        priceMax: null,
        priceLabel: "+$50",
        iconBg: "bg-red-500/10 text-red-500 dark:text-red-400",
    },
];

/* ─── Component ───────────────────────────────────────────────────── */
export default function PricingSection() {
    const [selectedPlan, setSelectedPlan] = useState<string>("standard");
    const [selectedAddons, setSelectedAddons] = useState<Set<string>>(new Set());

    const toggleAddon = (id: string) => {
        setSelectedAddons((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    const activePlan = plans.find((p) => p.id === selectedPlan)!;
    const addonTotal = addons
        .filter((a) => selectedAddons.has(a.id))
        .reduce((sum, a) => sum + a.priceMin, 0);
    const basePrice = activePlan.priceMin;
    const estimatedTotal = basePrice + addonTotal;

    const scrollToContact = (e: React.MouseEvent) => {
        e.preventDefault();
        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="pricing"
            className="py-14 sm:py-24 bg-white dark:bg-[#070711] border-t border-zinc-100 dark:border-white/[0.05] relative overflow-hidden"
        >
            {/* Background blobs — dark mode only */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden hidden dark:block">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-radial from-violet-700/10 to-transparent blur-[100px]" />
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-radial from-cyan-700/10 to-transparent blur-[80px]" />
            </div>

            <div className="relative max-w-6xl mx-auto px-6">
                {/* ─── Section Header ─── */}
                <div className="text-center mb-8 sm:mb-16">
                    <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-3">
                        Pricing
                    </p>
                    <h2 className="text-2xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight mb-3 sm:mb-4">
                        Simple, Transparent{" "}
                        <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
                            Pricing
                        </span>
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-lg max-w-xl mx-auto leading-relaxed">
                        Choose a package, pick your extras. Custom pricing available for unique requirements.
                    </p>
                </div>

                {/* ════════════════════════════════════════
                    MOBILE: Horizontal swipe carousel
                ════════════════════════════════════════ */}
                <div className="md:hidden relative mb-10">
                    {/* Swipe hint */}
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
                            {plans.length} packages
                        </span>
                        <span className="flex items-center gap-1 text-xs font-semibold text-violet-500 dark:text-violet-400">
                            Swipe to compare
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </div>

                    {/* Scroll track */}
                    <div
                        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
                        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
                    >
                        {plans.map((plan) => {
                            const isSelected = selectedPlan === plan.id;
                            return (
                                <button
                                    key={`mob-${plan.id}`}
                                    onClick={() => setSelectedPlan(plan.id)}
                                    className={`
                                        shrink-0 snap-center relative flex flex-col rounded-3xl overflow-hidden text-left
                                        transition-all duration-300 cursor-pointer
                                        ${isSelected
                                            ? plan.highlighted
                                                ? "ring-2 ring-violet-500 dark:ring-violet-400 shadow-2xl shadow-violet-500/20"
                                                : "ring-2 ring-violet-500/50 dark:ring-violet-400/50 shadow-xl"
                                            : plan.highlighted
                                                ? "ring-2 ring-violet-500 dark:ring-violet-400 shadow-xl shadow-violet-500/10 opacity-90"
                                                : "ring-1 ring-zinc-200 dark:ring-white/[0.08] opacity-85"
                                        }
                                        bg-white dark:bg-zinc-900/80 backdrop-blur-sm
                                    `}
                                    style={{ width: "87vw" }}
                                >
                                    {/* Selected checkmark */}
                                    {isSelected && (
                                        <span className="absolute top-4 right-4 w-6 h-6 rounded-full bg-violet-500 flex items-center justify-center z-20">
                                            <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                                        </span>
                                    )}

                                    {/* Popular badge */}
                                    {plan.badge && (
                                        <div className="absolute top-0 inset-x-0 flex justify-center">
                                            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white text-[11px] font-bold uppercase tracking-wider px-5 py-1 rounded-b-xl shadow-lg">
                                                {plan.badge}
                                            </span>
                                        </div>
                                    )}

                                    {/* Gradient top bar */}
                                    <div className={`h-1 w-full bg-gradient-to-r ${plan.accentFrom} ${plan.accentTo}`} />

                                    <div className="flex flex-col grow p-6 pt-8">
                                        {/* Icon + Name */}
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${plan.iconBg}`}>
                                                {plan.icon}
                                            </div>
                                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{plan.name}</h3>
                                        </div>

                                        {/* Price */}
                                        <div className="mb-1">
                                            <p className="text-[11px] font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-0.5">
                                                {plan.priceNote}
                                            </p>
                                            <p className={`text-4xl font-black bg-gradient-to-r ${plan.accentFrom} ${plan.accentTo} bg-clip-text text-transparent`}>
                                                {plan.priceLabel}
                                            </p>
                                        </div>

                                        {/* Delivery */}
                                        <div className="flex items-center gap-1.5 mt-3 mb-5">
                                            <Clock className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                                            <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                                                Delivery: {plan.delivery}
                                            </span>
                                        </div>

                                        <div className="border-t border-zinc-100 dark:border-white/[0.06] mb-5" />

                                        {/* Features */}
                                        <ul className="space-y-3">
                                            {plan.features.map((f, i) => (
                                                <li key={i} className="flex items-start gap-2.5">
                                                    <span className={`mt-0.5 w-4 h-4 shrink-0 rounded-full flex items-center justify-center bg-gradient-to-br ${plan.accentFrom} ${plan.accentTo}`}>
                                                        <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                                                    </span>
                                                    <span className="text-sm text-zinc-600 dark:text-zinc-300 leading-snug">{f}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Choose plan hint */}
                                        <p className="mt-4 text-center text-xs font-medium text-violet-500 dark:text-violet-400">
                                            {isSelected ? "✓ Selected" : "Choose Plan"}
                                        </p>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right fade gradient */}
                    <div className="pointer-events-none absolute right-0 top-8 bottom-4 w-10 bg-gradient-to-l from-white dark:from-[#070711] to-transparent" />
                </div>

                {/* ════════════════════════════════════════
                    DESKTOP: Standard 3-column grid
                ════════════════════════════════════════ */}
                <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-16">
                    {plans.map((plan) => {
                        const isSelected = selectedPlan === plan.id;
                        return (
                            <button
                                key={plan.id}
                                onClick={() => setSelectedPlan(plan.id)}
                                className={`
                                    relative flex flex-col rounded-3xl overflow-hidden text-left
                                    transition-all duration-300 cursor-pointer group
                                    ${isSelected
                                        ? plan.highlighted
                                            ? "ring-2 ring-violet-500 dark:ring-violet-400 shadow-2xl shadow-violet-500/20 dark:shadow-violet-400/10 scale-[1.02] md:scale-105 z-10"
                                            : "ring-2 ring-violet-500/50 dark:ring-violet-400/50 shadow-xl -translate-y-1"
                                        : plan.highlighted
                                            ? "ring-2 ring-violet-500 dark:ring-violet-400 shadow-xl shadow-violet-500/10 scale-[1.01] md:scale-[1.03] z-10 opacity-80"
                                            : "ring-1 ring-zinc-200 dark:ring-white/[0.08] hover:shadow-xl hover:-translate-y-1 opacity-80"
                                    }
                                    bg-white dark:bg-zinc-900/80 backdrop-blur-sm
                                `}
                            >
                                {/* Selected checkmark */}
                                {isSelected && (
                                    <span className="absolute top-4 right-4 w-6 h-6 rounded-full bg-violet-500 flex items-center justify-center z-20">
                                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                                    </span>
                                )}

                                {/* Popular badge */}
                                {plan.badge && (
                                    <div className="absolute top-0 inset-x-0 flex justify-center">
                                        <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white text-[11px] font-bold uppercase tracking-wider px-5 py-1 rounded-b-xl shadow-lg">
                                            {plan.badge}
                                        </span>
                                    </div>
                                )}

                                {/* Gradient top bar */}
                                <div className={`h-1 w-full bg-gradient-to-r ${plan.accentFrom} ${plan.accentTo}`} />

                                <div className="flex flex-col grow p-7 pt-8">
                                    {/* Icon + Name */}
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${plan.iconBg}`}>
                                            {plan.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{plan.name}</h3>
                                    </div>

                                    {/* Price */}
                                    <div className="mb-1">
                                        <p className="text-[11px] font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-0.5">
                                            {plan.priceNote}
                                        </p>
                                        <p className={`text-4xl font-black bg-gradient-to-r ${plan.accentFrom} ${plan.accentTo} bg-clip-text text-transparent`}>
                                            {plan.priceLabel}
                                        </p>
                                    </div>

                                    {/* Delivery */}
                                    <div className="flex items-center gap-1.5 mt-3 mb-6">
                                        <Clock className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                                        <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                                            Delivery: {plan.delivery}
                                        </span>
                                    </div>

                                    <div className="border-t border-zinc-100 dark:border-white/[0.06] mb-6" />

                                    {/* Features */}
                                    <ul className="space-y-3 grow">
                                        {plan.features.map((f, i) => (
                                            <li key={i} className="flex items-start gap-2.5">
                                                <span className={`mt-0.5 w-4 h-4 shrink-0 rounded-full flex items-center justify-center bg-gradient-to-br ${plan.accentFrom} ${plan.accentTo}`}>
                                                    <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                                                </span>
                                                <span className="text-sm text-zinc-600 dark:text-zinc-300 leading-snug">{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* ─── Add-ons ─── */}
                <div className="mb-10 sm:mb-12">
                    <div className="text-center mb-5 sm:mb-8 px-5 sm:px-0">
                        <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-white mb-1.5 sm:mb-2">
                            Optional Add-ons
                        </h3>
                        <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm">
                            Select any extras to enhance your project
                        </p>
                    </div>

                    {/* ════ MOBILE: Horizontal scroll ════ */}
                    <div className="sm:hidden relative">
                        {/* Swipe hint */}
                        <div className="flex items-center justify-between px-5 mb-3">
                            <span className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
                                {addons.length} add-ons
                            </span>
                            <span className="flex items-center gap-1 text-xs font-semibold text-violet-500 dark:text-violet-400">
                                Swipe
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </div>

                        <div
                            className="flex gap-3 overflow-x-auto px-5 pb-4 snap-x snap-mandatory"
                            style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
                        >
                            {addons.map((addon) => {
                                const isChecked = selectedAddons.has(addon.id);
                                return (
                                    <button
                                        key={`mob-addon-${addon.id}`}
                                        onClick={() => toggleAddon(addon.id)}
                                        className={`
                                            shrink-0 snap-start flex flex-col p-4 rounded-2xl text-left
                                            border transition-all duration-200
                                            ${isChecked
                                                ? "border-violet-500 dark:border-violet-400 bg-violet-50 dark:bg-violet-500/10 shadow-md shadow-violet-500/10"
                                                : "border-zinc-200 dark:border-white/[0.08] bg-white dark:bg-zinc-900/50"
                                            }
                                        `}
                                        style={{ width: "70vw" }}
                                    >
                                        {/* Icon row */}
                                        <div className="flex items-center gap-2.5 mb-2">
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${addon.iconBg}`}>
                                                {addon.icon}
                                            </div>
                                            <span className={`w-4 h-4 rounded-md border-2 flex items-center justify-center shrink-0 transition-all ml-auto ${
                                                isChecked ? "bg-violet-500 border-violet-500" : "border-zinc-300 dark:border-zinc-600"
                                            }`}>
                                                {isChecked && <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />}
                                            </span>
                                        </div>
                                        <p className="font-semibold text-xs text-zinc-900 dark:text-white leading-snug mb-1">
                                            {addon.name}
                                        </p>
                                        <span className="text-xs font-bold text-violet-600 dark:text-violet-400">
                                            {addon.priceLabel}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Right fade */}
                        <div className="pointer-events-none absolute right-0 top-8 bottom-4 w-10 bg-gradient-to-l from-white dark:from-[#070711] to-transparent" />
                    </div>

                    {/* ════ DESKTOP: Grid ════ */}
                    <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {addons.map((addon) => {
                            const isChecked = selectedAddons.has(addon.id);
                            return (
                                <button
                                    key={addon.id}
                                    onClick={() => toggleAddon(addon.id)}
                                    className={`
                                        relative flex items-start gap-4 p-5 rounded-2xl text-left w-full
                                        border transition-all duration-200 group
                                        ${isChecked
                                            ? "border-violet-500 dark:border-violet-400 bg-violet-50 dark:bg-violet-500/10 shadow-md shadow-violet-500/10"
                                            : "border-zinc-200 dark:border-white/[0.08] bg-white dark:bg-zinc-900/50 hover:border-violet-300 dark:hover:border-violet-500/40 hover:shadow-md"
                                        }
                                    `}
                                >
                                    {/* Checkbox */}
                                    <span className={`
                                        mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all
                                        ${isChecked
                                            ? "bg-violet-500 border-violet-500"
                                            : "border-zinc-300 dark:border-zinc-600 group-hover:border-violet-400"
                                        }
                                    `}>
                                        {isChecked && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                                    </span>

                                    {/* Icon */}
                                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${addon.iconBg}`}>
                                        {addon.icon}
                                    </div>

                                    {/* Text */}
                                    <div className="min-w-0">
                                        <p className="font-semibold text-sm text-zinc-900 dark:text-white leading-snug mb-0.5">
                                            {addon.name}
                                        </p>
                                        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-snug mb-1.5">
                                            {addon.description}
                                        </p>
                                        <span className="text-xs font-bold text-violet-600 dark:text-violet-400">
                                            {addon.priceLabel}
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* ─── Summary Bar ─── */}
                <div className="rounded-3xl border border-zinc-200 dark:border-white/[0.08] bg-white dark:bg-zinc-900/80 backdrop-blur-sm p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                        {/* Left: breakdown */}
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">
                                Estimate Summary
                            </p>
                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between gap-4">
                                    <span className="text-sm text-zinc-600 dark:text-zinc-300">
                                        {activePlan.name} Package
                                    </span>
                                    <span className="text-sm font-semibold text-zinc-900 dark:text-white">
                                        ${basePrice}+
                                    </span>
                                </div>
                                {addons
                                    .filter((a) => selectedAddons.has(a.id))
                                    .map((a) => (
                                        <div key={a.id} className="flex items-center justify-between gap-4">
                                            <span className="text-sm text-zinc-500 dark:text-zinc-400 truncate">
                                                + {a.name}
                                            </span>
                                            <span className="text-sm font-medium text-violet-600 dark:text-violet-400 shrink-0">
                                                {a.priceLabel}
                                            </span>
                                        </div>
                                    ))
                                }
                                <div className="border-t border-zinc-100 dark:border-white/[0.06] pt-2 mt-2 flex items-center justify-between gap-4">
                                    <span className="text-sm font-bold text-zinc-900 dark:text-white">
                                        Estimated Total
                                    </span>
                                    <span className="text-xl font-black bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
                                        ${estimatedTotal}+
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right: CTA */}
                        <div className="w-full sm:w-auto shrink-0">
                            <a
                                href="#contact"
                                onClick={scrollToContact}
                                className="group relative flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-[15px] text-white w-full sm:w-auto
                                    overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-500" />
                                <span className="relative">Start Project</span>
                                <ArrowRight className="relative w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                            <p className="text-center text-[11px] text-zinc-400 dark:text-zinc-500 mt-2">
                                No payment now — we'll discuss first
                            </p>
                        </div>
                    </div>
                </div>

                {/* Custom note */}
                <p className="text-center text-zinc-400 dark:text-zinc-500 text-sm mt-8">
                    Need something different?{" "}
                    <a
                        href="#contact"
                        onClick={scrollToContact}
                        className="text-violet-600 dark:text-violet-400 hover:underline font-medium"
                    >
                        Let's discuss custom pricing →
                    </a>
                </p>
            </div>
        </section>
    );
}
