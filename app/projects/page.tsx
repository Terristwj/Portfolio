"use client";

import PageAnimate from "../components/wrappers/PageAnimate";
import PageDefault from "../components/wrappers/PageDefault";

import AnimatedTabs from "../components/Projects/AnimatedTabs";
import ProjectCard from "../components/Projects/ProjectCard";

import { sortBy } from "../components/Projects/actions";

import projects from "./data/projects.json";

export default function Projects() {
    // Get only hackathons
    let projectArray = projects.hackathon;

    // Sort by id DESC
    projectArray = sortBy(projects.hackathon, "DESC");

    return (
        <PageAnimate>
            <PageDefault title="Projects">
                {/* Controls */}
                <AnimatedTabs />

                {/* Projects Display */}
                <div
                    className="pt-8
                        grid gap-y-8 grid-cols-1
                        sm:gap-6 sm:grid-cols-2
                        md:gap-6
                        lg:gap-10 lg:grid-cols-3"
                >
                    {projectArray.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </PageDefault>
        </PageAnimate>
    );
}
