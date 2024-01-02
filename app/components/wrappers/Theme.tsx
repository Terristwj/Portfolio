"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

interface ThemeProps {
    children: ReactNode;
}

export default function Theme({ children }: ThemeProps) {
    return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
