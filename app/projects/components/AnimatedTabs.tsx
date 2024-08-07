"use client";

import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

interface AnimatedTabsProps {
    layoutId: string;
    tabs: Array<string>;
    useStateActiveTab: {
        cur: string;
        set: Dispatch<SetStateAction<string>>;
    };
}

export default function AnimatedTabs({
    layoutId,
    tabs,
    useStateActiveTab,
}: AnimatedTabsProps): JSX.Element {
    return (
        <div className="sm:space-x-2">
            {tabs.map(
                (tab: string): JSX.Element => (
                    <button
                        key={tab}
                        disabled={useStateActiveTab.cur === tab}
                        onClick={(): void => {
                            useStateActiveTab.set(tab);
                        }}
                        className={`${
                            (useStateActiveTab.cur !== tab &&
                                "hover:text-black/60 hover:dark:text-white/60") +
                            " relative rounded-full" +
                            " px-1.5 py-1.5" +
                            " sm:px-3" +
                            " text-black dark:text-white"
                        }`}
                        style={{
                            WebkitTapHighlightColor: "transparent",
                        }}
                    >
                        {useStateActiveTab.cur === tab && (
                            <motion.span
                                layoutId={layoutId}
                                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                                style={{ borderRadius: 9999 }}
                                transition={{
                                    type: "spring",
                                    bounce: 0.2,
                                    duration: 0.8,
                                }}
                            />
                        )}
                        {tab}
                    </button>
                )
            )}
        </div>
    );
}
