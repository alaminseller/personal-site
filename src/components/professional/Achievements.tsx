const achievements = [
    "Successfully increased organic traffic by 150% through comprehensive SEO strategy implementation at RangTVBD.com",
    "Led digital transformation initiative at Medi-Aid Hospital, establishing integrated online presence and patient engagement systems",
    "Managed content production workflow serving 500,000+ monthly readers across digital platforms",
    "Developed and executed multi-channel marketing campaigns resulting in measurable ROI improvements",
    "Maintained 4.9+ client satisfaction rating across 50+ freelance projects on international platforms",
    "Served as Squad Leader in Bangladesh National Cadet Corps (BNCC), developing leadership and organizational capabilities"
];

const certifications = [
    {
        provider: "Google",
        course: "Digital Marketing & E-commerce Professional Certificate"
    },
    {
        provider: "HubSpot Academy",
        course: "Content Marketing Certification"
    },
    {
        provider: "SEMrush",
        course: "SEO Fundamentals Course"
    },
    {
        provider: "LinkedIn Learning",
        course: "Advanced SEO: Search Factors"
    },
    {
        provider: "Coursera",
        course: "Social Media Marketing Specialization"
    }
];

const communityExperience = [
    {
        organization: "Bangladesh National Cadet Corps (BNCC)",
        role: "Squad Leader",
        description: "Leadership development, team coordination, and organizational management"
    },
    {
        organization: "Local Digital Marketing Community",
        role: "Active Member",
        description: "Knowledge sharing and professional networking in digital marketing field"
    }
];

export default function ProfessionalAchievements() {
    return (
        <>
            {/* Key Achievements */}
            <section className="bg-white py-20 border-t border-gray-200">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Key Achievements</h2>

                    <ol className="space-y-4">
                        {achievements.map((achievement, index) => (
                            <li key={index} className="text-gray-700 leading-relaxed pl-8 relative">
                                <span className="absolute left-0 font-semibold text-gray-400">
                                    {index + 1}.
                                </span>
                                {achievement}
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Certifications */}
            <section className="bg-gray-50 py-20 border-t border-gray-200">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Certifications & Training</h2>

                    <div className="space-y-4">
                        {certifications.map((cert, index) => (
                            <div key={index} className="flex gap-4">
                                <span className="text-gray-900 font-medium min-w-[180px]">
                                    {cert.provider}
                                </span>
                                <span className="text-gray-700">
                                    {cert.course}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Community Experience */}
            <section className="bg-white py-20 border-t border-gray-200">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Community Experience</h2>

                    <div className="space-y-8">
                        {communityExperience.map((exp, index) => (
                            <div key={index}>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                    {exp.organization}
                                </h3>
                                <p className="text-gray-600 mb-2">{exp.role}</p>
                                <p className="text-gray-700">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
