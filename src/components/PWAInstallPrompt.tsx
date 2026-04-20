import { useState, useEffect } from "react";
import { X, Download } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function PWAInstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [show, setShow] = useState(false);
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        /* Check if already installed */
        const isStandalone =
            window.matchMedia("(display-mode: standalone)").matches ||
            (window.navigator as Navigator & { standalone?: boolean }).standalone === true;
        if (isStandalone) return;

        /* Detect iOS (Safari doesn't support beforeinstallprompt) */
        const ios = /iphone|ipad|ipod/i.test(navigator.userAgent) && !(window as Window & { MSStream?: unknown }).MSStream;
        setIsIOS(ios);

        /* Android / Chrome: capture the native prompt */
        const handler = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e as BeforeInstallPromptEvent);
        };
        window.addEventListener("beforeinstallprompt", handler);

        /* Show after 3s if on mobile */
        const isMobile = window.innerWidth < 640;
        if (isMobile) {
            const t = setTimeout(() => setShow(true), 3000);
            return () => {
                clearTimeout(t);
                window.removeEventListener("beforeinstallprompt", handler);
            };
        }

        return () => window.removeEventListener("beforeinstallprompt", handler);
    }, []);

    const handleInstall = async () => {
        if (deferredPrompt) {
            await deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === "accepted") setShow(false);
            setDeferredPrompt(null);
        }
    };

    const dismiss = () => {
        setShow(false);
        /* Don't show again for 7 days */
        localStorage.setItem("pwa-dismissed", String(Date.now()));
    };

    /* Check if dismissed recently */
    useEffect(() => {
        const dismissed = localStorage.getItem("pwa-dismissed");
        if (dismissed && Date.now() - Number(dismissed) < 7 * 24 * 60 * 60 * 1000) {
            setShow(false);
        }
    }, []);

    if (!show) return null;

    return (
        <div className="sm:hidden fixed bottom-[100px] left-4 right-4 z-[80] animate-in slide-in-from-bottom-4 duration-300">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-4 flex items-start gap-3">
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-sm">AR</span>
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white leading-snug mb-0.5">
                        Add to Home Screen
                    </p>
                    {isIOS ? (
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                            Tap <span className="font-medium">Share</span> then <span className="font-medium">"Add to Home Screen"</span> for app-like experience.
                        </p>
                    ) : (
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                            Install for faster access and offline support.
                        </p>
                    )}

                    {!isIOS && deferredPrompt && (
                        <button
                            onClick={handleInstall}
                            className="mt-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-xs font-semibold hover:opacity-90 transition-opacity"
                        >
                            <Download className="w-3 h-3" /> Install App
                        </button>
                    )}
                </div>

                {/* Dismiss */}
                <button
                    onClick={dismiss}
                    className="shrink-0 text-zinc-300 dark:text-zinc-600 hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors mt-0.5"
                    aria-label="Dismiss"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
