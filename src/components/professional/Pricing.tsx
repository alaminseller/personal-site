import { Check, Clock, Zap, Star, Crown } from "lucide-react";

interface PricingFeature {
    text: string;
}

interface PricingPlan {
    name: string;
    icon: React.ReactNode;
    price: string;
    priceNote: string;
    delivery: string;
    features: PricingFeature[];
    ctaLabel: string;
    highlighted: boolean;
    badge?: string;
    accentFrom: string;
    accentTo: string;
    iconBg: string;
}

const plans: PricingPlan[] = [
    {
        name: "Basic",
        icon: <Zap className="w-5 h-5" />,
        price: "$250",
        priceNote: "Starting from",
        delivery: "2–3 days",
        highlighted: false,
        accentFrom: "from-blue-500",
        accentTo: "to-cyan-500",
        iconBg: "bg-blue-500/10 text-blue-500 dark:text-blue-400",
        ctaLabel: "Start Basic",
        features: [
            { text: "1–3 pages website" },
            { text: "Responsive design" },
            { text: "Basic UI design included" },
            { text: "Contact form" },
            { text: "Basic SEO setup" },
        ],
    },
    {
        name: "Standard",
        icon: <Star className="w-5 h-5" />,
        price: "$400–$600",
        priceNote: "Most popular range",
        delivery: "4–6 days",
        highlighted: true,
        badge: "Most Popular",
        accentFrom: "from-violet-500",
        accentTo: "to-fuchsia-500",
        iconBg: "bg-violet-500/10 text-violet-500 dark:text-violet-400",
        ctaLabel: "Start Standard",
        features: [
            { text: "4–7 pages website" },
            { text: "Modern UI/UX design" },
            { text: "Speed optimization" },
            { text: "Full SEO setup" },
            { text: "Social media integration" },
            { text: "Google Analytics" },
        ],
    },
    {
        name: "Premium",
        icon: <Crown className="w-5 h-5" />,
        price: "$700–$1000",
        priceNote: "Full-scale project",
        delivery: "7–10 days",
        highlighted: false,
        accentFrom: "from-amber-500",
        accentTo: "to-orange-500",
        iconBg: "bg-amber-500/10 text-amber-500 dark:text-amber-400",
        ctaLabel: "Start Premium",
        features: [
            { text: "8+ pages website" },
            { text: "Custom UI/UX design" },
            { text: "Advanced functionality" },
            { text: "CMS / Admin panel" },
            { text: "Performance optimization" },
            { text: "Priority support" },
            { text: "Post-launch revisions" },
        ],
    },
];

export default function PricingSection() {
    return (
        <section
            id="pricing"
            className="py-24 bg-white dark:bg-[#070711] border-t border-zinc-100 dark:border-white/[0.05] relative overflow-hidden"
        >
            {/* Background blobs – dark mode only */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden hidden dark:block">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-radial from-violet-700/10 to-transparent blur-[100px]" />
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-radial from-cyan-700/10 to-transparent blur-[80px]" />
            </div>

            <div className="relative max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-3">
                        Pricing
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight mb-4">
                        Simple, Transparent{" "}
                        <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
                            Pricing
                        </span>
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed">
                        Choose the package that fits your project. Custom pricing available for unique requirements.
                    </p>
                </div>

                {/* Cards grid */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`
                                relative flex flex-col rounded-3xl overflow-hidden
                                transition-all duration-300 group
                                ${plan.highlighted
                                    ? "ring-2 ring-violet-500 dark:ring-violet-400 shadow-2xl shadow-violet-500/20 dark:shadow-violet-400/10 scale-[1.02] md:scale-105 z-10"
                                    : "ring-1 ring-zinc-200 dark:ring-white/[0.08] hover:shadow-xl hover:-translate-y-1"
                                }
                                bg-white dark:bg-zinc-900/80 backdrop-blur-sm
                            `}
                        >
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
                                        {plan.price}
                                    </p>
                                </div>

                                {/* Delivery */}
                                <div className="flex items-center gap-1.5 mt-3 mb-6">
                                    <Clock className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                                    <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                                        Delivery: {plan.delivery}
                                    </span>
                                </div>

                                {/* Divider */}
                                <div className="border-t border-zinc-100 dark:border-white/[0.06] mb-6" />

                                {/* Features */}
                                <ul className="space-y-3 mb-8 grow">
                                    {plan.features.map((f, i) => (
                                        <li key={i} className="flex items-start gap-2.5">
                                            <span className={`mt-0.5 w-4 h-4 shrink-0 rounded-full flex items-center justify-center bg-gradient-to-br ${plan.accentFrom} ${plan.accentTo}`}>
                                                <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                                            </span>
                                            <span className="text-sm text-zinc-600 dark:text-zinc-300 leading-snug">
                                                {f.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <a
                                    href="#contact"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                    className={`
                                        relative w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-semibold text-[15px]
                                        transition-all duration-300 group-hover:scale-[1.02]
                                        ${plan.highlighted
                                            ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50"
                                            : "bg-zinc-100 dark:bg-white/[0.06] hover:bg-zinc-200 dark:hover:bg-white/[0.12] text-zinc-800 dark:text-white border border-zinc-200 dark:border-white/[0.08]"
                                        }
                                    `}
                                >
                                    {plan.ctaLabel}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Custom pricing note */}
                <p className="text-center text-zinc-400 dark:text-zinc-500 text-sm mt-12">
                    Need something custom?{" "}
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="text-violet-600 dark:text-violet-400 hover:underline font-medium"
                    >
                        Let's talk →
                    </a>
                </p>
            </div>
        </section>
    );
}
