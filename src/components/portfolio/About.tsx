import { Target, Lightbulb, Users } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Focused on delivering measurable outcomes through strategic digital initiatives.",
  },
  {
    icon: Lightbulb,
    title: "Creative Solutions",
    description: "Combining design thinking with technical expertise for innovative approaches.",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Strong communication and leadership abilities developed through BNCC service.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            Results-driven Digital Marketing and Content Specialist with expertise in SEO, 
            Graphic Design, Social Media Management, and WordPress-based content development. 
            Experienced in producing optimized content, managing online platforms, and delivering 
            brand-aligned visuals. Strong communication and leadership abilities developed through 
            BNCC service.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div key={item.title} className="card-base text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center">
                <item.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
