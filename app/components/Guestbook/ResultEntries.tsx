"use client";
import { motion } from "framer-motion";

import { revalidateGuestbook } from "../../api/dbAction";
import ResultEntry from "./ResultEntry";

interface ResultsProps {
    // Entries
    entries: Array<{
        id: string;
        message: string;
        username: string;
        created_at: Date;
    }>;
    entryHoverImageThemes: { [key: number]: string };

    // Entries Settings
    revalidateInterval: number;

    // Per Entry Settings
    animateDuration: number;
    staggerInterval: number;
}

export default function ResultEntries({
    // Entries
    entries,
    entryHoverImageThemes,

    // Entries Settings
    revalidateInterval,

    // Per Entry Settings
    animateDuration,
    staggerInterval,
}: ResultsProps) {
    // To avoid parent (server-side) from having errors
    // - server-side components doesn't have window object
    if (typeof window !== "undefined") {
        // Every interval, refresh the data
        setTimeout(() => {
            // Avoid using router.reload()
            // - Reloading the page does not clear cache

            // Clear cache and reload page
            revalidateGuestbook();
        }, revalidateInterval);
    }

    return (
        <div className="flex flex-col space-y-2 font-medium">
            {entries.map((entry, index) => {
                // Unsplash API for random images
                const imgSrc = `https://source.unsplash.com/random/800x600?${
                    entryHoverImageThemes[index + 1]
                }`;
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
