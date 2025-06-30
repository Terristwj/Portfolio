"use client";

import Link from "next/link";
import NackToTopIcon from "@/app/components/Homepage/BackToTopIcon";

type HackathonProps = {
    sentenceHoverCSS: string;
    K({ children }: { children: string }): JSX.Element;
};

export default function Hackathon({
    sentenceHoverCSS,
    K,
}: HackathonProps): JSX.Element {
    return (
        <section
            id="hackathon"
            className="mx-auto text-justify
                selection:bg-teal-600 selection:text-white
                dark:selection:bg-teal-200 dark:selection:text-black"
        >
            {/* Description */}
            <p className={`${sentenceHoverCSS}`}>
                Hacking away at <K>AI/ML</K>, <K>Generative AI</K>,{" "}
                <K>Frontend Web Development</K>,{" "}
                <K>Backend Development (APIs and algorithms)</K>,{" "}
                <K>Solution Architecture</K>, <K>UI/UX Design</K>, and{" "}
                <K>Cloud Computing</K>, I bring ideas to life — whether it&#39;s
                a hackathon prototype or a polished solution.
            </p>

            {/* Highlights Blockquote */}
            <div className="mx-auto my-12 px-4">
                <blockquote
                    className={`relative border-l-4 border-teal-600 dark:border-teal-400
                        bg-teal-50 dark:bg-teal-900/20 px-8 py-4 italic
                        text-gray-800 dark:text-gray-200
                        before:absolute before:left-0 before:top-0
                        before:text-6xl before:content-['“']
                        before:text-teal-300 dark:before:text-teal-600
                        ${sentenceHoverCSS}`}
                >
                    <span>
                        <K>10+ Hackathons</K> ·{" "}
                    </span>
                    <span>
                        <K>HacX! HTX-Microsoft 2024</K> | Semi-Finalist ·
                    </span>
                    <span>
                        <K>TikTok TechJam 2024</K> | SEA People&#39;s Choice
                        Awards ·{" "}
                    </span>
                    <span>
                        <K>DSTA BrainHack TIL-AI 2024</K> | Finalist
                    </span>
                    <p className="pt-4 text-right">
                        <Link
                            href="/projects"
                            prefetch
                            className={`${sentenceHoverCSS} text-teal-600 dark:text-teal-400 underline`}
                        >
                            And More
                            <NackToTopIcon />
                        </Link>
                    </p>
                </blockquote>
            </div>
        </section>
    );
}
