"use client";

import Image from "next/image";

import IProject, { ITech } from "@/app/projects/components/ProjectInterface";
import ParallaxText from "@/app/projects/components/ParallaxText";

import FadingText from "@/app/components/Common/FadingText";

interface ProjectCardProps {
    project: IProject;
}

// Speed of parallax effect origin number
const baseVelocityOrigin: number = 5;

export default function ProjectCard({ project }: ProjectCardProps) {
    const { title, subtitle, overview, links, img_src, tech }: IProject =
        project;
    const { tech_type, tech_items }: ITech = tech;

    // Speed of parallax effect - based on number of tech stack items
    const baseVelocity: number = baseVelocityOrigin / tech_items.length;

    // Main link
    // - If empty, no hyperlink
    const mainLink: string = links.length != 0 ? links[0][1] : "#";

    return (
        <>
            {/* Image of Project - START ============================================================================ */}
            <div
                className="overflow-hidden
                    relative w-full h-56
                    border-b border-black dark:border-white
                    group-hover:border-teal-500
                    transition-[border] duration-500 ease-in-out"
            >
                <a
                    href={mainLink}
                    target={mainLink === "#" ? "" : "_blank"}
                    className={`absolute w-full h-full ${
                        mainLink === "#" ? "cursor-default" : "cursor-pointer"
                    }`}
                >
                    <Image
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src={img_src}
                        alt={title}
                        className="object-cover
                            group-hover:scale-125
                            transition-all duration-500 ease"
                        draggable={false}
                    />
                </a>
            </div>
            {/* Image of Project - END ============================================================================== */}

            {/* Card content - START ================================================================================ */}
            <div className="p-4 sm:p-6">
                {/* Title - START ============================================================ */}
                <h3
                    className="select-text
                        font-bold poppins
                        text-lg lg:text-base xl:text-lg
                        
                        text-teal-600 dark:text-teal-400
                        group-hover:scale-105 
                        group-hover:pl-2 group-hover:sm:pl-1 
                        transition-all duration-500"
                >
                    <a
                        href={mainLink}
                        target="_blank"
                        className="border-2 border-transparent rounded-md
                            hover:border-b-teal-600 dark:hover:border-b-teal-400
                            transition-[border] duration-500"
                    >
                        {title}
                    </a>
                </h3>
                {/* Title - END ============================================================== */}

                {/* Subtitle - START ========================================================= */}
                <h3
                    className="font-medium select-text

                        leading-tight tracking-tight
                        text-black dark:text-white
                        group-hover:text-teal-600 dark:group-hover:text-teal-400
                        transition-[color] duration-300"
                >
                    {subtitle}
                </h3>
                {/* Subtitle - END =========================================================== */}

                {/* Overview - START ========================================================= */}
                <p
                    className="mt-2.5 mb-2.5
                        cursor-default
                        leading-relaxed text-pretty

                        select-text
                        text-sm montserrat
                        text-black dark:text-white
                        transition-colors duration-300"
                >
                    <FadingText textType="sentence">{overview}</FadingText>
                </p>
                {/* Overview - END =========================================================== */}

                {/* Empty space between - START ============================================== */}
                <p className="mt-36"></p>
                {/* Empty space between - END ================================================ */}

                {/* Items above empty space - START ========================================== */}
                <div
                    className="pb-5
                        pl-4 pr-4 sm:pl-6 sm:pr-6
                        absolute left-0 bottom-0
                        w-full overflow-hidden
                        flex flex-col gap-5"
                >
                    {/* Tech Stack - START ======================================= */}
                    <section>
                        <h3
                            className="select-text
                            mt-4 font-bold poppins leading-7
                            text-teal-600 dark:text-teal-400"
                        >
                            {tech_type}
                        </h3>
                        <ParallaxText baseVelocity={-baseVelocity}>
                            {tech_items}
                        </ParallaxText>
                        <ParallaxText baseVelocity={baseVelocity}>
                            {tech_items}
                        </ParallaxText>
                    </section>
                    {/* Tech Stack - END ========================================= */}

                    {/* Visit Items - START ====================================== */}
                    <div className="flex flex-wrap">
                        {links.length == 0 ? (
                            // No Link
                            <div>
                                <span
                                    className="capitalize select-text
                                        text-teal-600 dark:text-teal-400 font-medium
                                        border-2 border-transparent
                                        hover:border-t-teal-600 dark:hover:border-t-teal-400
                                        group-hover:ms-1
                                        transition-all duration-500"
                                >
                                    No links available
                                </span>
                            </div>
                        ) : (
                            // Have links
                            links.map(
                                (link: string[], _: number): JSX.Element => {
                                    return (
                                        <div key={`${title}_${link[0]}`}>
                                            <a
                                                href={link[1]}
                                                target="_blank"
                                                className="capitalize select-text
                                                    text-teal-600 dark:text-teal-400 font-medium
                                                    border-2 border-transparent
                                                    hover:border-t-teal-600 dark:hover:border-t-teal-400
                                                    group-hover:ms-1
                                                    transition-all duration-500"
                                            >
                                                &rarr; {link[0]}
                                            </a>
                                        </div>
                                    );
                                }
                            )
                        )}
                    </div>
                    {/* Visit Items - END ======================================== */}
                </div>
                {/* Items above empty space - START ========================================== */}
            </div>
            {/* Card content - END ================================================================================== */}
        </>
    );
}
