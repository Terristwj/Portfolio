"use client";

import Image from "next/image";

import IProject from "@/app/components/Projects/ProjectInterface";
import ParallaxText from "@/app/components/Projects/ParallaxText";

interface ProjectCardProps {
    project: IProject;
}

// Speed of parallax effect origin number
const baseVelocityOrigin: number = 5;

export default function ProjectCard({ project }: ProjectCardProps) {
    // Speed of parallax effect - based on number of tech stack items
    const baseVelocity: number = baseVelocityOrigin / project.tech_stack.length;

    // Main link
    const mainLink: string = project.links[0][1];

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
                    target="_blank"
                    className="absolute w-full h-full"
                >
                    <Image
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src={project.img_src}
                        alt={project.title}
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
                    className="text-lg font-bold poppins
                        text-teal-600 dark:text-teal-400
                        group-hover:scale-105 
                        group-hover:pl-2 group-hover:sm:pl-1 
                        transition-all duration-500"
                >
                    <a
                        href={mainLink}
                        target="_blank"
                        className="border-2 border-transparent 
                            hover:border-t-teal-600 hover:border-b-teal-600
                            dark:hover:border-t-teal-400 dark:hover:border-b-teal-400
                            transition-[border] duration-500"
                    >
                        {project.title}
                    </a>
                </h3>
                {/* Title - END ============================================================== */}

                {/* Subtitle - START ========================================================= */}
                <h3
                    className="font-medium
                        leading-tight tracking-tight
                        text-black dark:text-white
                        group-hover:text-teal-600 dark:group-hover:text-teal-400
                        transition-[color] duration-300"
                >
                    {project.subtitle}
                </h3>
                {/* Subtitle - END =========================================================== */}

                {/* Overview - START ========================================================= */}
                <p
                    className="mt-2.5 mb-2.5
                        cursor-default select-text
                        leading-relaxed text-balance
                        text-sm montserrat
                        text-black dark:text-white
                        transition-colors duration-300"
                >
                    {/* Split the words by token, when hovering each token */}
                    {/* - hover animation fast, fade animation slow */}
                    {project.overview
                        .split(" ")
                        .map((word: string, index: number) => (
                            <span
                                key={index}
                                className="transition-colors duration-1000 ease-in-out
                                    hover:text-teal-600  hover:duration-300
                                    dark:hover:text-teal-400"
                            >
                                {word + " "}
                            </span>
                        ))}
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
                            className="mt-4 font-bold poppins leading-7
                            text-teal-600 dark:text-teal-400"
                        >
                            Technology Stack
                        </h3>
                        <ParallaxText baseVelocity={-baseVelocity}>
                            {project.tech_stack}
                        </ParallaxText>
                        <ParallaxText baseVelocity={baseVelocity}>
                            {project.tech_stack}
                        </ParallaxText>
                    </section>
                    {/* Tech Stack - END ========================================= */}

                    {/* Visit Items - START ====================================== */}
                    <div className="flex">
                        {project.links.map(
                            (link: string[], _: number): JSX.Element => {
                                return (
                                    <div key={`${project.title}_${link[0]}`}>
                                        {/* hover:border-b-teal-600 dark:hover:border-b-teal-400 */}
                                        <a
                                            href={link[1]}
                                            target="_blank"
                                            className="capitalize
                                            text-teal-600 dark:text-teal-400 font-medium
                                            border-2 border-transparent
                                            hover:border-t-teal-600 dark:hover:border-t-teal-400
                                            group-hover:ms-1
                                            transition-all duration-500"
                                        >
                                            &rarr; {link[0]}
                                        </a>
                                        &nbsp; &nbsp;
                                    </div>
                                );
                            }
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
