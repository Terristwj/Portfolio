"use client";

import { StatsGrid } from "@/app/constants";

type InroductionProps = {
    sentenceHoverCSS: string;
    K({ children }: { children: string }): JSX.Element;
};

export default function Introduction({
    sentenceHoverCSS,
    K,
}: InroductionProps): JSX.Element {
    return (
        <section
            id="about"
            className="mx-auto
                selection:bg-teal-600 selection:text-white
                dark:selection:bg-teal-200 dark:selection:text-black"
        >
            <p className={`${sentenceHoverCSS} text-justify`}>
                I&#39;m a <K>final-year Information Systems student</K> at{" "}
                <K>Singapore Management University</K>, specializing in{" "}
                <K>Digital Cloud Solutioning &amp; Business Analytics</K>. I
                love building full-stack apps.
            </p>

            {/* Stats Grid */}
            <div className="container mx-auto my-12 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {StatsGrid.map((item) => (
                    <div
                        key={item.label}
                        className={`
                            p-6 rounded-lg bg-${item.color}-50 dark:bg-${item.color}-900/20
                            hover:bg-${item.color}-100 dark:hover:bg-${item.color}-900/40
                            transition transform hover:scale-105
                            border border-transparent hover:border-${item.color}-200
                            dark:hover:border-${item.color}-700
                        `}
                    >
                        <div
                            className={`
                                text-4xl font-bold text-${item.color}-600 dark:text-${item.color}-400
                            `}
                        >
                            {item.value}
                        </div>
                        <div className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
