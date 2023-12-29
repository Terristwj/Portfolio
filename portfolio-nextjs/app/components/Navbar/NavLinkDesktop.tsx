"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import DropTransition from "./DropTransition";

export default function NavLinkDesktop(props: {
    pathname: string;
    to: string;
    name: string;
    delay: number;
}) {
    const pathname = props.pathname;
    const to = props.to;
    const name = props.name;
    const delay = props.delay;

    return (
        <>
            <Link
                href={to}
                prefetch
                // hover:border-teal-500
                className={`${
                    (pathname === to
                        ? "border-transparent dark:text-white relative"
                        : "border-transparent text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white") +
                    " h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                }`}
            >
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
                        transition={{ delay: 0.5 }}
                    ></motion.div>
                )}
                <DropTransition delay={delay}>{name}</DropTransition>
            </Link>
        </>
    );
}
