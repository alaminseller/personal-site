import ModernHeader from "@/components/modern/Header";
import ModernHeroVisual from "@/components/modern/Hero";
import ProfessionalAbout from "@/components/professional/About";
import ServicesSection from "@/components/professional/Services";
import PricingSection from "@/components/professional/Pricing";
import ProjectsSection from "@/components/professional/Projects";
import WhatIBuild from "@/components/professional/WhatIBuild";
import ProfessionalExperience from "@/components/professional/Experience";
import ProfessionalSkills from "@/components/professional/Skills";
import ProfessionalAchievements from "@/components/professional/Achievements";
import ProfessionalContact from "@/components/professional/Contact";
import ProfessionalFooter from "@/components/professional/Footer";
import MobileBottomNav from "@/components/professional/MobileNav";
import PWAInstallPrompt from "@/components/PWAInstallPrompt";


export default function ModernPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
            <ModernHeader />
            <main>
                <ModernHeroVisual />
                <div id="about"><ProfessionalAbout /></div>
                <div id="services"><ServicesSection /></div>
                <div id="pricing"><PricingSection /></div>
                <WhatIBuild />
                <div id="projects"><ProjectsSection /></div>
                <div id="experience"><ProfessionalExperience /></div>
                <div id="skills"><ProfessionalSkills /></div>
                <div id="achievements"><ProfessionalAchievements /></div>
                <div id="contact"><ProfessionalContact /></div>
            </main>
            <ProfessionalFooter />
            <MobileBottomNav />
            <PWAInstallPrompt />
        </div>
    );
}
