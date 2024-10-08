"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import IMessage from "@/app/guestbook/components/MessageInterface";
import ResultEntry from "@/app/guestbook/components/ResultEntry";

// Result-Entries Settings
import {
    // Refresh messages
    REVALIDATE_INTERVAL,

    // Animation
    ANIMATE_DURATION,
    STAGGER_INTERVAL,

    // Random Image Src
    RANDOM_IMAGE_SRC,
    ImageWidth,
    IMAGE_HEIGHT,
} from "@/app/guestbook/constants";

interface ResultEntriesProps {
    entries: Array<IMessage>;
    resetData: () => Promise<void>;
}

export default function ResultEntries({
    entries,
    resetData,
}: ResultEntriesProps): JSX.Element {
    const [hasInterval, setHasInterval] = useState<boolean>(false);

    // To avoid parent (server-side) from having errors
    // - server-side components doesn't have window object
    if (typeof window !== "undefined") {
        // Only set interval once
        if (!hasInterval) {
            setHasInterval(true);
            // Initial load
            resetData();

            // Every interval, refresh the data
            setInterval(async (): Promise<void> => {
                // Avoid using router.reload()
                // - Reloading the page does not clear cache
                await resetData();
            }, REVALIDATE_INTERVAL);
        }
    }

    function formatImageSrc(width: number, height: number): string {
        return `${RANDOM_IMAGE_SRC}/${width}/${height}`;
    }

    return (
        <div className="flex flex-col space-y-2 font-medium">
            {entries.map((entry: IMessage, index: number): JSX.Element => {
                // picsum.photos API for random images
                const imgSrc: string = formatImageSrc(
                    ImageWidth,
                    IMAGE_HEIGHT - index
                );

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
                            duration: ANIMATE_DURATION,
                            delay: STAGGER_INTERVAL * index,
                        }}
                    >
                        {/* Version 1 - Only Text*/}
                        {/* <div className="w-full break-words leading-5">
                            <span className="text-teal-600 dark:text-teal-500">
                                {entry.username}:
                            </span>{" "}
                            <span className="montserrat">{entry.message}</span>
                        </div> */}

                        {/* Version 2 - Hover Random Images*/}
                        <ResultEntry entry={entry} imgSrc={imgSrc} />
                    </motion.div>
                );
            })}
        </div>
    );
}
