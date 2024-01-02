"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageAnimateProps {
    children: ReactNode;
}

export default function PageAnimate({ children }: PageAnimateProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
}
