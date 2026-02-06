export default function ProfessionalHeader() {
    return (
        <header className="border-b border-gray-200 bg-white">
            <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
                <h1 className="text-xl font-semibold text-gray-900">Alamin Rafi</h1>

                <nav>
                    <ul className="flex items-center gap-8">
                        <li>
                            <a
                                href="#about"
                                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#experience"
                                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                Experience
                            </a>
                        </li>
                        <li>
                            <a
                                href="#skills"
                                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                href="#achievements"
                                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                Achievements
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
