const PDF_URL = "/Terristan_resume.pdf";

export default function PDFViewerModal() {
    return (
        <div className="w-full flex justify-center mt-6">
            <a
                href={PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    inline-flex items-center gap-2
                    px-5 py-2.5
                    bg-teal-600 text-white dark:bg-teal-400 dark:text-black
                    font-semibold rounded-full shadow-lg
                    transition-all duration-300
                    hover:bg-teal-700 hover:text-white
                    dark:hover:bg-teal-300 dark:hover:text-black
                    hover:scale-105 hover:shadow-xl
                    focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2
                    group
                "
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                    />
                </svg>
                View Resume
            </a>
        </div>
    );
}
