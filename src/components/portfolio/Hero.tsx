import { FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 md:pt-0">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Empty placeholder for profile image */}
          <div 
            className="w-32 h-32 mx-auto mb-8 rounded-full bg-secondary border-2 border-border"
            aria-label="Profile image placeholder"
          />
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-4 text-balance">
            Alamin Rafi
          </h1>
          
          <p className="text-xl md:text-2xl font-medium text-accent mb-6">
            Digital Marketing & Content Specialist
          </p>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto text-balance leading-relaxed">
            Crafting optimized digital experiences through strategic SEO, compelling content, and impactful design. Turning brand visions into measurable online success.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto gap-2">
              <FileText className="h-4 w-4" />
              View Resume
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2" asChild>
              <a href="#contact">
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
