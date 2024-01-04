"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import PageAnimate from "../components/wrappers/PageAnimate";
import PageDefault from "../components/wrappers/PageDefault";

import AnimatedTabs from "../components/Projects/AnimatedTabs";
import ProjectCard from "../components/Projects/ProjectCard";

import ProjectActions from "../components/Projects/ProjectActions";
import IProject from "../components/Projects/ProjectInterface";

// Settings
const typeTabs = ["All", "Hackathon", "Academic"];
const orderbyTabs = ["Newest", "Oldest"];

// Animation delay
const delayPerProject = 200;

// Actions
const myProjectActions = new ProjectActions();

export default function Projects() {
    // Default: All/Newest
    let [activeTypeTab, setActiveTypeTab] = useState(typeTabs[0]);
    let [activeOrderbyTab, setActiveOrderbyTab] = useState(orderbyTabs[0]);

    // Default projects to be displayed
    let [projectArray, setProjectArray] = useState(
        myProjectActions.getAllProjects("DESC")
    );

    // Initial delay settings
    let [maxDelay, setMaxDelay] = useState(
        projectArray.length * delayPerProject
    );

    // UseEffects for tracking tab changes
    useEffect(() => {
        // To animate the previous exit
        // And to fix a rendering bug
        setProjectArray([]);

        let order: "DESC" | "ASC" =
            activeOrderbyTab === "Newest" ? "DESC" : "ASC";

        let temp: IProject[];
        if (activeTypeTab === "All") {
            temp = myProjectActions.getAllProjects(order);
        } else if (activeTypeTab === "Hackathon") {
            temp = myProjectActions.getHackathonProjects(order);
        } else if (activeTypeTab === "Academic") {
            temp = myProjectActions.getAcademicProjects(order);
        }
        setMaxDelay(projectArray.length * delayPerProject);

        // Timer between temp and []
        setTimeout(() => {
            setProjectArray(temp);
        }, maxDelay);
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
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.1 * index }}
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
