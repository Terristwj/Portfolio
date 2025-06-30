"use client";

import Me from "public/me.png";
import { ProfilePropsType } from "@/app/constants";
import { multilineClassNames } from "@/app/utils/utils";

import { K } from "@/app/components/Common/KeywordText";

// Homepage Components
import Profile from "@/app/components/Homepage/Profile";
import Introduction from "@/app/components/Homepage/Sections/Introduction";
import Hackathon from "@/app/components/Homepage/Sections/Hackathon";

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

                    <br />

                    {/* (2) Hackathon Section */}
                    <Hackathon sentenceHoverCSS={sentenceHoverCSS} K={K} />

                    {/* (3) Experience Section */}
                    <section
                        id="experience"
                        className={`${sentenceHoverCSS} container mx-auto my-12`}
                    >
                        <h2 className="text-2xl font-semibold mb-3">
                            Experience
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-bold">
                                    Tax Technology Transformation Intern
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    KPMG Singapore &middot; May 2025 – Present
                                </p>
                                {/* <ul className="list-disc ml-5 mt-2 text-gray-800 dark:text-gray-200">
                                    <li>
                                        Documented business requirements,
                                        achieving 95% stakeholder approval
                                    </li>
                                    <li>
                                        Designed end-to-end tests, cutting cycle
                                        time by 30%
                                    </li>
                                    <li>
                                        Built Generative AI tools, improving
                                        efficiency by 25%
                                    </li>
                                    <li>
                                        Maintained 99.5% system uptime post
                                        go-live
                                    </li>
                                </ul> */}
                            </div>

                            <div>
                                <h3 className="text-xl font-bold">
                                    Frontend Developer
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Accenture Southeast Asia &middot; May 2024 –
                                    Nov 2024
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold">
                                    Solution Engineering Intern
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Usertip Pte Ltd &middot; May 2023 – Aug 2023
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold">
                                    Junior Software Engineer Intern
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    GT Robot Technology Pte Ltd &middot; Mar
                                    2019 – Jun 2019
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Education Section */}
                    <section
                        id="education"
                        className={`${sentenceHoverCSS} container mx-auto my-12`}
                    >
                        <h2 className="text-2xl font-semibold mb-3">
                            Education
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <strong>Singapore Management University</strong>
                                <span className="float-end">
                                    2022 – Present
                                </span>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    BSc Information Systems (Digital Cloud
                                    Solutioning &amp; Business Analytics)
                                    <br />
                                    (GPA 3.15/4.00)
                                </div>
                            </div>

                            <div>
                                <strong>Nanyang Polytechnic</strong>
                                <span className="float-end">2017 – 2020</span>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    Diploma in Business Informatics
                                    <br />
                                    (GPA 3.73/4.00)
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Certifications Section */}
                    <section
                        id="certifications"
                        className={`${sentenceHoverCSS} container mx-auto my-12`}
                    >
                        <h2 className="text-2xl font-semibold mb-6">
                            Latest Certifications
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div
                                className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6
                                    transition-all duration-300 ease-in-out
                                    hover:bg-teal-100 dark:hover:bg-teal-900/30
                                    hover:shadow-lg hover:shadow-teal-500/20 dark:hover:shadow-teal-400/20
                                    hover:scale-105 hover:-translate-y-1
                                    border border-transparent hover:border-teal-200 dark:hover:border-teal-700
                                    group"
                            >
                                <h3 className="font-bold">
                                    Google Professional ML Engineer
                                </h3>
                            </div>

                            <div
                                className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6
                                    transition-all duration-300 ease-in-out
                                    hover:bg-teal-100 dark:hover:bg-teal-900/30
                                    hover:shadow-lg hover:shadow-teal-500/20 dark:hover:shadow-teal-400/20
                                    hover:scale-105 hover:-translate-y-1
                                    border border-transparent hover:border-teal-200 dark:hover:border-teal-700
                                    group"
                            >
                                <h3 className="font-bold">
                                    Google Cloud Digital Leader
                                </h3>
                            </div>
                        </div>
                    </section>

                    {/* Activities Section */}
                    <section
                        id="activities"
                        className={`${sentenceHoverCSS} container mx-auto my-12`}
                    >
                        <h2 className="text-2xl font-semibold mb-3">
                            Leadership &amp; Volunteering
                        </h2>
                        <div className="space-y-3">
                            <div>
                                <strong>
                                    Volunteer Facilitator – GDG Singapore
                                </strong>

                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    – Google Cloud & I/O Extended Singapore
                                    2025, DevFest Singapore 2024
                                    <br />– Fostering collaboration among 4,500+
                                    GDG Singapore members
                                </div>
                            </div>
                            <div>
                                <strong>
                                    Technology & Google Developer Group Director
                                    – SMU .Hack
                                </strong>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    – Organized and led 11 workshops, fireside
                                    chats, and hackathons
                                    <br />– Facilitated technical workshops on
                                    modern frameworks
                                    <br />– Collaborated with partners like
                                    Google, Exabytes, and Cyber Youth Singapore
                                </div>
                            </div>
                            <div>
                                <strong>
                                    Workshop Instructor &amp; Mentor – SMU
                                    Ellipsis
                                </strong>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    – Instructed 3 programming workshops
                                    <br />– Mentored peer-to-peer learning
                                    initiatives
                                    <br />– Guided freshmen students through
                                    career in software engineering
                                </div>
                            </div>
                        </div>
                    </section>

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
