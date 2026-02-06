const experiences = [
    {
        company: "RangTVBD.com",
        title: "Content & SEO Manager",
        period: "January 2024 – Present",
        responsibilities: [
            "Lead SEO strategy and content optimization initiatives, improving organic search rankings and website traffic",
            "Manage editorial calendar and oversee content production workflow across multiple channels",
            "Implement technical SEO improvements and monitor site performance using analytics tools",
            "Collaborate with development team to ensure SEO best practices in site architecture"
        ]
    },
    {
        company: "Medi-Aid Hospital",
        title: "Digital Operations Officer",
        period: "June 2023 – December 2023",
        responsibilities: [
            "Managed hospital's digital presence including website, social media, and online patient engagement",
            "Developed and executed digital marketing campaigns to increase patient acquisition",
            "Coordinated with medical staff to create accurate, compliant healthcare content",
            "Analyzed digital metrics and provided strategic recommendations for operational improvements"
        ]
    },
    {
        company: "Orthosongbad.com",
        title: "SEO Specialist (Contract)",
        period: "March 2023 – May 2023",
        responsibilities: [
            "Conducted comprehensive SEO audits and implemented technical optimization strategies",
            "Performed keyword research and competitive analysis for content planning",
            "Optimized on-page elements including meta tags, headers, and internal linking structure",
            "Delivered measurable improvements in search visibility and organic traffic"
        ]
    },
    {
        company: "Independent Projects",
        title: "Graphic Designer & Digital Marketing Associate",
        period: "2021 – 2023",
        responsibilities: [
            "Designed brand identities, marketing materials, and digital assets for diverse clients",
            "Executed integrated digital marketing campaigns across social media and email channels",
            "Managed client relationships and delivered projects within scope and timeline",
            "Developed content strategies aligned with client business objectives"
        ]
    },
    {
        company: "Fiverr & Upwork",
        title: "Freelance Graphic Designer & Digital Marketer",
        period: "2020 – 2021",
        responsibilities: [
            "Provided graphic design and digital marketing services to international clients",
            "Maintained high client satisfaction ratings through quality deliverables and communication",
            "Managed multiple concurrent projects with varying requirements and deadlines",
            "Built portfolio demonstrating versatility across design styles and marketing approaches"
        ]
    }
];

export default function ProfessionalExperience() {
    return (
        <section className="bg-white py-20 border-t border-gray-200">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-12">Experience</h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="border-l-2 border-gray-200 pl-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                {exp.title}
                            </h3>
                            <p className="text-gray-600 mb-1">{exp.company}</p>
                            <p className="text-sm text-gray-500 mb-4">{exp.period}</p>

                            <ul className="space-y-2">
                                {exp.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="text-gray-700 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0">
                                        {resp}
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
