import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Content & SEO Manager",
    company: "RangTVBD.com",
    description: [
      "Edited 500+ digital news articles for accuracy and readability",
      "Implemented SEO optimization & structured formatting",
      "Improved workflow efficiency across content teams",
      "Ensured publishing accuracy and scheduling",
    ],
  },
  {
    title: "Digital Operations Officer",
    company: "Medi-Aid Hospital",
    description: [
      "Coordinated operations across 5 departments",
      "Supervised administrative staff",
      "Managed documentation & reporting systems",
    ],
  },
  {
    title: "SEO Specialist (Contract)",
    company: "Orthosongbad.com",
    description: [
      "Optimized 20,000+ articles for search engines",
      "Conducted keyword research & internal linking strategies",
      "Reduced bounce rate & improved search rankings",
    ],
  },
  {
    title: "Graphic Designer & Digital Marketing Associate",
    company: "Independent Projects",
    description: [
      "Created branding & ad creatives for various clients",
      "Developed social media growth strategies",
    ],
  },
  {
    title: "Freelance Graphic Designer & Digital Marketer",
    company: "Fiverr & Upwork",
    description: [
      "Completed 120+ projects successfully",
      "Maintained 98% client satisfaction rate",
      "Created SEO-driven marketing content",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Experience</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-8 last:mb-0">
                <div className={`flex flex-col md:flex-row gap-4 md:gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background" />
                  
                  {/* Content */}
                  <div className={`ml-6 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}>
                    <div className="card-base">
                      <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                        <Briefcase className="h-4 w-4 text-accent" />
                        <span className="text-sm font-medium text-accent">{exp.company}</span>
                      </div>
                      <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                        {exp.title}
                      </h3>
                      <ul className={`space-y-2 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
