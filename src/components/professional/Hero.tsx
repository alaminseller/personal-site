export default function ProfessionalHero() {
    return (
        <section className="bg-white py-20">
            <div className="max-w-5xl mx-auto px-6">
                <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                    Alamin Rafi
                </h1>

                <p className="text-2xl text-gray-600 mb-8 font-light">
                    Digital Marketing & Content Specialist
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-10 max-w-3xl">
                    Results-driven digital marketing professional with expertise in SEO, content strategy,
                    and digital operations. Proven track record of optimizing online presence, managing
                    cross-functional teams, and delivering measurable business outcomes through strategic
                    digital initiatives.
                </p>

                <div className="flex gap-4">
                    <a
                        href="/Alamin Resume Final.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                        View Resume
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 border border-gray-300 text-gray-900 text-sm font-medium hover:border-gray-400 transition-colors"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </section>
    );
}
