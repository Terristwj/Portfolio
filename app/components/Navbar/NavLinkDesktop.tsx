"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import DropTransition from "./DropTransition";

interface NavLinkDesktopProps {
    pathname: string;
    to: string;
    name: string;
    delay: number;
}

export default function NavLinkDesktop({
    pathname,
    to,
    name,
    delay,
}: NavLinkDesktopProps) {
    return (
        <>
            <Link
                href={to}
                prefetch
                // hover:border-teal-500
                className={`${
                    (pathname === to
                        ? "border-transparent dark:text-white"
                        : "border-transparent text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white") +
                    " h-full inline-flex items-center px-1 pt-1" +
                    " border-b-2 text-sm font-medium" +
                    " relative group"
                }`}
            >
                {/* Border bottom on active link */}
                {pathname === to && (
                    <motion.div
                        initial={{
                            x: -4,
                            width: "0%",
                            height: "100%",
                            borderBottom: "2px solid rgb(20, 184, 166)",
                            position: "absolute",
                        }}
                        animate={{
                            width: "100%",
                        }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                    ></motion.div>
                )}
                {/* Border bottom on hover link */}
                <span
                    className="border-b-2 border-teal-500
                        h-[1px] w-0 group-hover:w-full
                        absolute left-0 -bottom-0.5
                        transition-[width] ease duration-300"
                ></span>
                <DropTransition delay={delay}>{name}</DropTransition>
            </Link>
        </>
    );
}
