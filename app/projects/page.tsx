"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import PageAnimate from "@/app/components/Wrappers/PageAnimate";
import PageDefault from "@/app/components/Wrappers/PageDefault";

import AnimatedTabs from "@/app/projects/components/AnimatedTabs";
import ProjectCard from "@/app/projects/components/ProjectCard";

// Actions
import {
    getAllProjects,
    getHackathonProjects,
    getAcademicProjects,
} from "@/app/projects/components/ProjectActions";
import IProject from "@/app/projects/components/ProjectInterface";

// Settings
import { TYPE_TABS } from "@/app/projects/constants";
import { ORDERBY_TABS } from "@/app/projects/constants";

export default function Projects() {
    // Default: All/Newest
    let [activeTypeTab, setActiveTypeTab] = useState<string>(TYPE_TABS[0]);
    let [activeOrderbyTab, setActiveOrderbyTab] = useState<string>(
        ORDERBY_TABS[0]
    );

    // Default projects to be displayed
    let [projectArray, setProjectArray] = useState<IProject[]>(
        getAllProjects("DESC")
    );

    // UseEffects for tracking tab changes
    useEffect((): void => {
        // Prevents rendering bug for toggle between tabs
        setProjectArray([]);

        // Orderby
        let order: "DESC" | "ASC" =
            activeOrderbyTab === "Newest" ? "DESC" : "ASC";

        // Timer between temp and []
        // - Prevents rendering bug for toggle between tabs
        setTimeout((): void => {
            if (activeTypeTab === "All") setProjectArray(getAllProjects(order));
            else if (activeTypeTab === "Hackathon")
                setProjectArray(getHackathonProjects(order));
            else if (activeTypeTab === "Academic")
                setProjectArray(getAcademicProjects(order));

            // Time must set >0 to prevent rendering bug
        }, 50);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTypeTab, activeOrderbyTab]);

    return (
        <PageAnimate>
            <PageDefault title="Projects" bottomGap={true}>
                {/* Tabs Section - Controls START */}
                <div
                    className="flex justify-between
                        fira-code text-sm font-medium"
                >
                    {/* (Left-tabs) Project Type START */}
                    <AnimatedTabs
                        layoutId="projectTypeBubble"
                        tabs={TYPE_TABS}
                        useStateActiveTab={{
                            cur: activeTypeTab,
                            set: setActiveTypeTab,
                        }}
                    />
                    {/* (Left-tabs) Project Type END */}

                    {/* (Right-tabs) Project Order START */}
                    <AnimatedTabs
                        layoutId="projectOrderByBubble"
                        tabs={ORDERBY_TABS}
                        useStateActiveTab={{
                            cur: activeOrderbyTab,
                            set: setActiveOrderbyTab,
                        }}
                    />
                    {/* (Right-tabs) Project Order END */}
                </div>
                {/* Tabs Section - Controls END */}

                {/* Projects Display START */}
                <div
                    className="pt-5 pb-5
                        grid gap-y-8 grid-cols-1
                        sm:gap-6 sm:grid-cols-2
                        md:gap-6
                        lg:gap-10 lg:grid-cols-3"
                >
                    <AnimatePresence>
                        {/* Do not use opacity - Mobile has problems */}
                        {projectArray.map(
                            (project, index): JSX.Element => (
                                <motion.article
                                    key={index}
                                    animate={{ y: 10 }}
                                    className="border rounded-md
                                    border-black bg-white

                                    dark:border-white dark:bg-black
                                    hover:border-teal-500

                                    hover:shadow-xl hover:shadow-teal-100
                                    hover:dark:shadow-teal-900
                                    
                                    transition-all duration-500
                                    group relative"
                                >
                                    <ProjectCard project={project} />
                                </motion.article>
                            )
                        )}
                    </AnimatePresence>
                </div>
                {/* Projects Display END */}
            </PageDefault>
        </PageAnimate>
    );
}
