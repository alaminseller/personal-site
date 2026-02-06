export default function ProfessionalFooter() {
    return (
        <footer className="bg-white py-12 border-t border-gray-200">
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-600">
                        © {new Date().getFullYear()} Alamin Rafi. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <a
                            href="https://linkedin.com/in/alaminrafi"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/alaminseller"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            href="mailto:hello@alaminrafi.com"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
