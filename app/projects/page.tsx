"use client";

import { useEffect, useState } from "react";

import PageAnimate from "../components/wrappers/PageAnimate";
import PageDefault from "../components/wrappers/PageDefault";

import AnimatedTabs from "../components/Projects/AnimatedTabs";
import ProjectCard from "../components/Projects/ProjectCard";

import Project from "../components/Projects/ProjectAction";
import { AnimatePresence, motion } from "framer-motion";

// Settings
const typeTabs = ["All", "Hackathon", "Academic"];
const orderbyTabs = ["Newest", "Oldest"];

// Animation delay
const delayPerProject = 0;

export default function Projects() {
    // Default: All/Newest
    let [activeTypeTab, setActiveTypeTab] = useState(typeTabs[0]);
    let [activeOrderbyTab, setActiveOrderbyTab] = useState(orderbyTabs[0]);

    // Default projects to be displayed
    let [projectArray, setProjectArray] = useState(
        Project.getAllProjects("DESC")
    );

    // Default delay for animation
    let [maxDelay, setMaxDelay] = useState(
        projectArray.length * delayPerProject
    );

    // UseEffects for tracking number of projects displayed
    useEffect(() => {
        setMaxDelay(projectArray.length * delayPerProject);
    }, [projectArray]);

    // UseEffects for tracking tab changes
    useEffect(() => {
        setProjectArray([]);

        setTimeout(() => {
            let order: "DESC" | "ASC" =
                activeOrderbyTab === "Newest" ? "DESC" : "ASC";

            if (activeTypeTab === "All") {
                setProjectArray(Project.getAllProjects(order));
            } else if (activeTypeTab === "Hackathon") {
                setProjectArray(Project.getHackathonProjects(order));
            } else if (activeTypeTab === "Academic") {
                setProjectArray(Project.getAcademicProjects(order));
            }
        }, 500);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTypeTab, activeOrderbyTab]);

    return (
        <PageAnimate>
            <PageDefault title="Projects" bottomGap={true}>
                {/* Control Tabs START */}
                <div className="flex justify-between fira-code font-black">
                    {/* (Left-tabs) Project Type START */}
                    <AnimatedTabs
                        layoutId="projectTypeBubble"
                        tabs={typeTabs}
                        useStateActiveTab={{
                            cur: activeTypeTab,
                            set: setActiveTypeTab,
                        }}
                    />
                    {/* (Left-tabs) Project Type END */}

                    {/* (Right-tabs) Project Order START */}
                    <AnimatedTabs
                        layoutId="projectOrderByBubble"
                        tabs={orderbyTabs}
                        useStateActiveTab={{
                            cur: activeOrderbyTab,
                            set: setActiveOrderbyTab,
                        }}
                    />
                    {/* (Right-tabs) Project Order END */}
                </div>
                {/* Controls Tabs END */}

                {/* Projects Display START */}
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
                                initial={{
                                    opacity: 0.5,
                                    y: -10,
                                    transitionDuration: "0.5s",
                                    transitionDelay: `${0.1 * index}s`,
                                }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
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
                {/* Projects Display END */}
            </PageDefault>
        </PageAnimate>
    );
}
