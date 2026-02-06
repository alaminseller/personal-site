import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Skills from "@/components/portfolio/Skills";
import Achievements from "@/components/portfolio/Achievements";
import Certifications from "@/components/portfolio/Certifications";
import Community from "@/components/portfolio/Community";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Achievements />
        <Certifications />
        <Community />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
