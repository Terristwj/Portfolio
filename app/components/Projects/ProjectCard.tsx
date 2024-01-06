"use client";

import Image from "next/image";

import IProject from "./ProjectInterface";
import ParallaxText from "./ParallaxText";

interface ProjectCardProps {
    project: IProject;
}

// Speed of parallax effect origin number
const baseVelocityOrigin = 5;

export default function ProjectCard({ project }: ProjectCardProps) {
    // Speed of parallax effect - based on number of tech stack items
    const baseVelocity = baseVelocityOrigin / project.tech_stack.length;

    // Main link
    const mainLink = project.links[0][1];

    return (
        <>
            {/* Image of Project START */}
            <div
                className="overflow-hidden noSelect
                    relative w-full h-56
                    border-b border-black dark:border-white"
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
            {/* Image of Project END */}

            {/* Card content START */}
            <div className="p-4 sm:p-6">
                {/* Title START */}
                <h3
                    className="text-lg font-bold poppins
                        text-teal-600 dark:text-teal-400"
                >
                    <a href={mainLink} target="_blank">
                        {project.title}
                    </a>
                </h3>
                {/* Title END */}

                {/* Subtitle START*/}
                <h3
                    className="font-medium
                        text-black dark:text-white"
                >
                    {project.subtitle}
                </h3>

                {/* Overview START */}
                <p
                    className="mt-2.5 mb-2.5
                        text-sm leading-relaxed montserrat
                        text-black dark:text-white"
                >
                    {project.overview}
                </p>
                {/* Overview START END */}

                {/* Empty space between START */}
                <p className="mt-36"></p>

                {/* Items above empty space START */}
                <div
                    className="pb-5
                        pl-4 pr-4 sm:pl-6 sm:pr-6
                        absolute left-0 bottom-0
                        w-full overflow-hidden
                        flex flex-col gap-5"
                >
                    {/* Tech Stack START */}
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
                    {/* Tech Stack END */}

                    {/* Visit Items START */}
                    <div className="flex noSelect">
                        {project.links.map((link, index) => {
                            return (
                                <>
                                    {/* hover:border-b-teal-600 dark:hover:border-b-teal-400 */}
                                    <a
                                        key={index}
                                        href={link[1]}
                                        target="_blank"
                                        className="capitalize
                                            text-teal-600 dark:text-teal-400 font-medium
                                            border-2 border-transparent pb-1 pt-1
                                            hover:border-t-teal-600 dark:hover:border-t-teal-400
                                            group-hover:ms-1
                                            transition-all duration-500 "
                                    >
                                        &rarr; {link[0]}
                                    </a>
                                    &nbsp; &nbsp;
                                </>
                            );
                        })}
                    </div>
                    {/* Visit Items END */}
                </div>
                {/* Items above empty space END */}
                {/* Empty space between END*/}
            </div>
            {/* Card content END*/}
        </>
    );
}
