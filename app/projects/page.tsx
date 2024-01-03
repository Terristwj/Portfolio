"use client";

import { useEffect, useState } from "react";

import PageAnimate from "../components/wrappers/PageAnimate";
import PageDefault from "../components/wrappers/PageDefault";

import AnimatedTabs from "../components/Projects/AnimatedTabs";
import ProjectCard from "../components/Projects/ProjectCard";

import Project from "../components/Projects/ProjectAction";
import { AnimatePresence, motion } from "framer-motion";

export default function Projects() {
    // Display projects - Default: All/Newest
    let [projectArray, setProjectArray] = useState(
        Project.getAllProjects("DESC")
    );

    //
    let [maxDelay, setMaxDelay] = useState(projectArray.length * 150);

    // useEffect(() => {
    //     setMaxDelay(projectArray.length * 0.1 + 5);
    // }, [projectArray]);

    return (
        <PageAnimate>
            <PageDefault title="Projects" bottomGap={true}>
                {/* Controls */}
                <AnimatedTabs
                    setProjectArray={setProjectArray}
                    maxDelay={maxDelay}
                />

                {/* Projects Display */}
                <div
                    className="pt-8
                        grid gap-y-8 grid-cols-1
                        sm:gap-6 sm:grid-cols-2
                        md:gap-6
                        lg:gap-10 lg:grid-cols-3"
                >
                    <AnimatePresence>
                        {projectArray.map((project, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.1 * index,
                                }}
                                className="border rounded-md
                                    border-black bg-white
                                    dark:border-white dark:bg-black hover:border-teal-500
                                    hover:shadow-xl hover:shadow-teal-100 hover:dark:shadow-teal-900
                                    transition-all duration-500 ease-in-out
                                    group relative"
                            >
                                <ProjectCard project={project} />
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </div>
            </PageDefault>
        </PageAnimate>
    );
}
