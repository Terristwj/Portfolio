"use client";

import IProject from "./ProjectInterface";

import Image from "next/image";
import ParallaxText from "./ParallaxText";

interface ProjectCardProps {
    project: IProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <>
            {/* Sample Image */}
            <div
                className="overflow-hidden noSelect
                    relative w-full h-56
                    border-b border-black dark:border-white"
            >
                <a href={project.link} target="_blank">
                    <Image
                        fill
                        src={project.img_src}
                        alt={project.title}
                        className="object-cover
                            group-hover:scale-125
                            transition-all duration-500 ease"
                        draggable={false}
                    />
                </a>
            </div>

            <div className="p-4 sm:p-6">
                {/* Title */}
                <h3
                    className="text-lg font-bold poppins
                        text-teal-600 dark:text-teal-400"
                >
                    <a href={project.link} target="_blank">
                        {project.title}
                    </a>
                </h3>

                {/* Subtitle */}
                <h3
                    className="font-medium
                        text-black dark:text-white"
                >
                    {project.subtitle}
                </h3>

                {/* Overview */}
                <p
                    className="mt-2.5 mb-2.5
                        text-sm leading-relaxed montserrat
                        text-black dark:text-white"
                >
                    {project.overview}
                </p>

                {/* Empty space between */}
                <p className="mt-36"></p>

                {/* Items above empty space START */}
                <div
                    className="pb-5
                        pl-4 pr-4 sm:pl-6 sm:pr-6
                        absolute left-0 bottom-0
                        w-full overflow-hidden
                        flex flex-col gap-5"
                >
                    {/* Tech Stack */}
                    <section>
                        <h3
                            className="mt-4 font-bold poppins leading-7
                            text-teal-600 dark:text-teal-400"
                        >
                            Technology Stack
                        </h3>

                        <ParallaxText baseVelocity={-1}>
                            {project.tech_stack}
                        </ParallaxText>
                        <ParallaxText baseVelocity={1}>
                            {project.tech_stack}
                        </ParallaxText>
                    </section>

                    {/* Visit Site */}
                    <a
                        href={project.link}
                        target="_blank"
                        className="noSelect
                        text-teal-500 font-medium
                        group-hover:ms-2
                        transition-all duration-500"
                    >
                        &rarr; Visit Site!
                    </a>
                </div>
                {/* Items above empty space END */}
            </div>
        </>
    );
}
