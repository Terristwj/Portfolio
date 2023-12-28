"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

// Required for Framer motion.div
import { AnimatePresence } from "framer-motion";

export default function Provider({ children }: { children: ReactNode }) {
    return (
        <AnimatePresence>
            <ThemeProvider attribute="class">{children}</ThemeProvider>;
        </AnimatePresence>
    );
}
