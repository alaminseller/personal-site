export default function ProfessionalContact() {
    return (
        <section className="bg-gray-50 py-20 border-t border-gray-200">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-12">Contact</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            I'm available for consulting, freelance projects, and full-time opportunities
                            in digital marketing and content strategy.
                        </p>

                        <div className="space-y-3">
                            <div className="flex gap-4">
                                <span className="text-gray-600 min-w-[100px]">Location</span>
                                <span className="text-gray-900">Faridganj, Chandpur, Bangladesh</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-gray-600 min-w-[100px]">Email</span>
                                <a
                                    href="mailto:hello@alaminrafi.com"
                                    className="text-gray-900 hover:text-blue-600 transition-colors"
                                >
                                    hello@alaminrafi.com
                                </a>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-gray-600 min-w-[100px]">Phone</span>
                                <a
                                    href="tel:+8801917443161"
                                    className="text-gray-900 hover:text-blue-600 transition-colors"
                                >
                                    +880 1917 443161
                                </a>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-gray-600 min-w-[100px]">Website</span>
                                <a
                                    href="https://alaminrafi.com"
                                    className="text-gray-900 hover:text-blue-600 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    alaminrafi.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Whether you're looking to improve your SEO strategy, develop compelling content,
                            or build a comprehensive digital marketing approach, I bring proven expertise and
                            a results-oriented mindset to every project.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Feel free to reach out via email or phone to discuss how I can contribute to
                            your organization's digital success.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
