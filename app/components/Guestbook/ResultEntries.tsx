"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import ResultEntry from "./ResultEntry";

interface ResultsProps {
    entries: Array<{
        id: string;
        message: string;
        username: string;
        created_at: Date;
    }>;
    reloadInterval: number;
}

// Settings
const animateDuration = 0.8;
const staggerInterval = 0.1;

export default function ResultEntries({
    entries,
    reloadInterval,
}: ResultsProps) {
    const router = useRouter();

    // To avoid parent (server-side) from having errors
    // - server-side components doesn't have window object
    // if (typeof window !== "undefined") {
    //     // Every interval, refresh the data
    //     setTimeout(() => {
    //         router.refresh();
    //     }, reloadInterval);
    // }

    return (
        <div className="flex flex-col space-y-2 font-medium">
            {entries.map((entry, index) => {
                const imgThemes = [
                    // Set 1
                    "landmarks",
                    "skylines",
                    // Set 2
                    "holiday",
                    "fun",
                    // Set 3
                    "forest",
                    "atlantis ocean",
                    "mountain",
                    // Set 4
                    "ocean life animals",
                    "animal exotic",
                    "animal pet",
                ];
                const imgSrc = `https://source.unsplash.com/random/800x600?${imgThemes[index]}`;
                return (
                    <motion.div
                        key={entry.id}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{ y: 50 }}
                        transition={{
                            duration: animateDuration,
                            delay: staggerInterval * index,
                        }}
                    >
                        {/* Version 1 */}
                        {/* <div className="w-full break-words leading-5">
                        <span className="text-teal-600 dark:text-teal-500">
                            {entry.username}:
                        </span>{" "}
                        <span className="montserrat">{entry.message}</span>
                    </div> */}

                        {/* Debugging */}
                        {/* {imgSrc} */}

                        {/* Version 2 */}
                        <ResultEntry
                            username={entry.username}
                            message={entry.message}
                            imgSrc={imgSrc}
                        />
                    </motion.div>
                );
            })}
        </div>
    );
}
