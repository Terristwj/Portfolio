"use client";

import Me from "public/me.png";
import { ProfilePropsType } from "@/app/constants";
import { multilineClassNames } from "@/app/utils/utils";

import { K } from "@/app/components/Common/KeywordText";

// Homepage Components
import Profile from "@/app/components/Homepage/Profile";
import Introduction from "@/app/components/Homepage/Sections/Introduction";
import Hackathon from "@/app/components/Homepage/Sections/Hackathon";
import Experience from "@/app/components/Homepage/Sections/Experience";
import Education from "@/app/components/Homepage/Sections/Education";
import Certifications from "@/app/components/Homepage/Sections/Certifications";
import Activities from "@/app/components/Homepage/Sections/Activities";

import NackToTopIcon from "@/app/components/Homepage/BackToTopIcon";

interface HeroProps {
    ProfileProps: ProfilePropsType;
}

export default function Hero({ ProfileProps }: HeroProps): JSX.Element {
    const sentenceHoverCSS: string =
        "transition-colors duration-700 ease-in-out hover:text-teal-600 dark:hover:text-teal-400";

    return (
        <>
            <div
                className="items-center space-y-4
                    lg:grid lg:grid-cols-3
                    lg:gap-x-12 lg:space-y-0"
            >
                {/* Profile - START =================================================================== */}
                <Profile profileURL={Me} ProfileProps={ProfileProps} />
                {/* Profile - END ===================================================================== */}

                {/* Description - START =============================================================== */}
                <div
                    className={multilineClassNames(
                        // Default
                        "py-12 max-w-none montserrat",
                        "dark:prose-invert",
                        "select-text cursor-default",
                        // Medium
                        "sm:px-8",
                        // Large
                        "lg:pl-8 lg:col-span-2",
                        "lg:pr-4"
                    )}
                >
                    {/* Desc Title - START ================================================== */}
                    <div className="mb-6">
                        <h2 className="font-bold leading-tight mb-4">
                            {/* Heading */}
                            <span
                                className={`${sentenceHoverCSS} text-4xl block mb-2`}
                            >
                                Hi there! I&#39;m{" "}
                                <K>{`${ProfileProps.MyName.fname}`}</K>.
                            </span>

                            {/* Subtitle */}
                            <span
                                className={`${sentenceHoverCSS} text-xl text-gray-600 dark:text-gray-400`}
                            >
                                A <K>Full Stack Developer</K> based in
                                Singapore.
                            </span>
                        </h2>
                    </div>
                    {/* Desc Title - END ==================================================== */}

                    {/* Desc Content – START ================================================ */}

                    {/* (1) Intro Section */}
                    <Introduction sentenceHoverCSS={sentenceHoverCSS} K={K} />

                    {/* (2) Hackathon Section */}
                    <Hackathon sentenceHoverCSS={sentenceHoverCSS} K={K} />

                    {/* (3) Experience Section */}
                    <Experience sentenceHoverCSS={sentenceHoverCSS} />

                    {/* Education Section */}
                    <Education sentenceHoverCSS={sentenceHoverCSS} />

                    {/* Certifications Section */}
                    <Certifications sentenceHoverCSS={sentenceHoverCSS} />

                    {/* Activities Section */}
                    <Activities sentenceHoverCSS={sentenceHoverCSS} />

                    {/* Back to top */}
                    <section id="back-to-top" className="text-center my-8">
                        <a
                            href="#top"
                            className={`${sentenceHoverCSS} text-teal-600 dark:text-teal-400 underline`}
                        >
                            Back to top
                            <NackToTopIcon />
                        </a>
                    </section>

                    {/* Desc Content - END ================================================== */}
                </div>
                {/* Description - END ================================================================= */}
            </div>
        </>
    );
}
