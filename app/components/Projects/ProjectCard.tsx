"use client";

import Image from "next/image";
import ParallaxText from "./ParallaxText";

interface ProjectCardProps {
    project: {
        completion_sequence: string;
        title: string;
        subtitle: string;
        overview: string;
        link: string;
        img_src: string;
        tech_stack: string[];
    };
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article
            key={project.completion_sequence}
            className="border rounded-md
                                border-black bg-white
                                dark:border-white dark:bg-black hover:border-teal-500
                                hover:shadow-xl hover:shadow-teal-100 hover:dark:shadow-teal-900
                                transition-all duration-500 ease-in-out
                                group relative"
        >
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

                {/* Empty space between */}
                <p className="mt-10"></p>

                {/* Visit Site */}
                <a
                    href={project.link}
                    target="_blank"
                    className="pb-5 noSelect
                                        absolute bottom-0
                                        text-teal-500 font-medium
                                        group-hover:ms-2
                                        transition-all duration-500"
                >
                    &rarr; Visit Site!
                </a>
            </div>
        </article>
    );
}
