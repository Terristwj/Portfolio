"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import IProject from "./ProjectInterface";
import Project from "./ProjectAction";

interface AnimatedTabsProps {
    setProjectArray: Dispatch<SetStateAction<IProject[]>>;
    maxDelay: number;
}

export default function AnimatedTabs({
    setProjectArray,
    maxDelay,
}: AnimatedTabsProps) {
    const projectTabs = [
        { id: "All", onClick: Project.getAllProjects("DESC") },
        {
            id: "Hackathon",
            onClick: Project.getHackathonProjects("DESC"),
        },
        {
            id: "Academic",
            onClick: Project.getAcademicProjects("DESC"),
        },
    ];

    let [activeProjectTab, setActiveProjectTab] = useState(projectTabs[0].id);

    const orderbyTab = [
        { id: "Newest", onClick: Project.getAllProjects("DESC") },
        {
            id: "Oldest",
            onClick: Project.getAllProjects("ASC"),
        },
    ];
    let [activeOrderbyTab, setActiveOrderbyTab] = useState(orderbyTab[0].id);

    return (
        <div className="flex justify-between fira-code font-black">
            <div className="flex space-x-1">
                {projectTabs.map((tab) => (
                    <button
                        key={tab.id}
                        disabled={activeProjectTab === tab.id}
                        onClick={() => {
                            setActiveProjectTab(tab.id);
                            setProjectArray([]);
                            setTimeout(
                                () => setProjectArray(tab.onClick),
                                maxDelay
                            );
                        }}
                        className={`${
                            (activeProjectTab !== tab.id &&
                                "hover:text-black/60 hover:dark:text-white/60") +
                            " relative rounded-full px-3 py-1.5 text-sm font-medium text-black dark:text-white"
                        }`}
                        style={{
                            WebkitTapHighlightColor: "transparent",
                        }}
                    >
                        {activeProjectTab === tab.id && (
                            <motion.span
                                layoutId="projectTabBubble"
                                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                                style={{ borderRadius: 9999 }}
                                transition={{
                                    type: "spring",
                                    bounce: 0.2,
                                    duration: 0.8,
                                }}
                            />
                        )}
                        {tab.id}
                    </button>
                ))}
            </div>
            <div className="flex space-x-1">
                {orderbyTab.map((tab) => (
                    <button
                        key={tab.id}
                        disabled={activeOrderbyTab === tab.id}
                        onClick={() => {
                            setActiveOrderbyTab(tab.id);
                            setProjectArray([]);
                            setTimeout(
                                () => setProjectArray(tab.onClick),
                                maxDelay
                            );
                        }}
                        className={`${
                            (activeOrderbyTab !== tab.id &&
                                "hover:text-black/60 hover:dark:text-white/60") +
                            " relative rounded-full px-3 py-1.5 text-sm font-medium text-black dark:text-white"
                        }`}
                        style={{
                            WebkitTapHighlightColor: "transparent",
                        }}
                    >
                        {activeOrderbyTab === tab.id && (
                            <motion.span
                                layoutId="orderbyTabBubble"
                                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                                style={{ borderRadius: 9999 }}
                                transition={{
                                    type: "spring",
                                    bounce: 0.2,
                                    duration: 0.6,
                                }}
                            />
                        )}
                        {tab.id}
                    </button>
                ))}
            </div>
        </div>
    );
}
