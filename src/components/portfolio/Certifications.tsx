import { BadgeCheck } from "lucide-react";

const certifications = [
  { name: "SEO", provider: "UYLAB & Orthosongbad (Practical)" },
  { name: "Digital Marketing", provider: "Bizbondit" },
  { name: "Graphic Design", provider: "ICT Division – LEDP" },
  { name: "YouTube Content Ownership", provider: "Google Skillshop" },
  { name: "Presentation & Public Speaking", provider: "10 Minute School" },
  { name: "Eco-Tourism & Tour Guide Training", provider: "Professional Certification" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-muted/50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Certifications & Training</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="grid gap-4">
            {certifications.map((cert) => (
              <div key={cert.name} className="card-base flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <BadgeCheck className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.provider}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
