"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

// For desktop links animation in navbar
export default function DropTransition(props: {
    delay: number;
    children: ReactNode;
}) {
    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{
                y: 0,
            }}
            transition={{
                delay: props.delay,
                duration: 1,
            }}
        >
            {props.children}
        </motion.div>
    );
}
