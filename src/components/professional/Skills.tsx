const skillGroups = [
    {
        category: "SEO & Content",
        skills: [
            "Search Engine Optimization (On-page & Technical)",
            "Keyword Research & Analysis",
            "Content Strategy & Planning",
            "SEO Auditing & Reporting",
            "Google Analytics & Search Console",
            "WordPress Content Management"
        ]
    },
    {
        category: "Digital Marketing",
        skills: [
            "Social Media Management",
            "Digital Campaign Strategy",
            "Email Marketing",
            "Content Marketing",
            "Performance Analytics",
            "Brand Management"
        ]
    },
    {
        category: "Design & Tools",
        skills: [
            "Adobe Photoshop",
            "Adobe Illustrator",
            "Canva",
            "Figma",
            "Microsoft Office Suite",
            "Project Management Tools"
        ]
    },
    {
        category: "Leadership & Operations",
        skills: [
            "Team Leadership & Coordination",
            "Project Management",
            "Strategic Planning",
            "Cross-functional Collaboration",
            "Client Relations",
            "Process Optimization"
        ]
    }
];

export default function ProfessionalSkills() {
    return (
        <section className="bg-gray-50 py-20 border-t border-gray-200">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-12">Skills</h2>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                    {skillGroups.map((group, index) => (
                        <div key={index}>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                {group.category}
                            </h3>
                            <ul className="space-y-2">
                                {group.skills.map((skill, idx) => (
                                    <li key={idx} className="text-gray-700">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
