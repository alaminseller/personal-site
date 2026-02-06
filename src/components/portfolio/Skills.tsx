const skills = [
  "SEO & Keyword Research",
  "Digital Marketing",
  "Social Media Management",
  "WordPress CMS",
  "Adobe Photoshop",
  "Graphic Design",
  "Meta Tag Optimization",
  "Microsoft Word",
  "Microsoft Excel",
  "Leadership & Team Management",
  "Content Strategy",
  "Brand Development",
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-muted/50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Skills</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
