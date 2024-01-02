"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface DropTransitionProps {
    children: ReactNode;
    delay: number;
}

// For desktop links animation in navbar
export default function DropTransition({
    delay,
    children,
}: DropTransitionProps) {
    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{
                y: 0,
            }}
            transition={{
                delay,
                duration: 1,
            }}
        >
            {children}
        </motion.div>
    );
}
