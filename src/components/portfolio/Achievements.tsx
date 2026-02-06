import { Award, TrendingUp, Star, GraduationCap } from "lucide-react";

const achievements = [
  {
    icon: TrendingUp,
    title: "20,000+ Articles Optimized",
    description: "Led comprehensive SEO optimization across a major news platform",
  },
  {
    icon: Award,
    title: "BNCC Cadet Sergeant",
    description: "Demonstrated leadership excellence in Bangladesh National Cadet Corps",
  },
  {
    icon: Star,
    title: "5-Star Freelance Rating",
    description: "Consistent top performance with 98% client satisfaction",
  },
  {
    icon: GraduationCap,
    title: "Multiple Certifications",
    description: "Completed professional training in SEO, design, and marketing",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Key Achievements</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement) => (
            <div key={achievement.title} className="card-base text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <achievement.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">
                {achievement.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
