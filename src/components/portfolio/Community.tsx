import { Heart, Globe, Shield, Users } from "lucide-react";

const communityItems = [
  {
    icon: Globe,
    title: "Wikimedia Bangladesh",
    role: "Volunteer",
  },
  {
    icon: Users,
    title: "Chandpur Wikipedia Projects",
    role: "Contributor",
  },
  {
    icon: Shield,
    title: "BNCC (Army Wing)",
    role: "Ex-Cadet Sergeant",
  },
  {
    icon: Heart,
    title: "Local Humanitarian Activities",
    role: "Active Participant",
  },
];

const Community = () => {
  return (
    <section id="community" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Community Experience</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {communityItems.map((item) => (
            <div key={item.title} className="card-base text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center">
                <item.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
