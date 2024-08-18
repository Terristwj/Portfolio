"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import DropTransition from "@/app/components/Navbar/DropTransition";
import HeroIcon from "@/app/components/Navbar/HeroIcon";

interface ThemeButtonProps {
    delay: number;
}

export default function ThemeButton({
    delay,
}: ThemeButtonProps): JSX.Element | null {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);

    // Prevents rendering error logs
    useEffect((): void => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <DropTransition delay={delay}>
            <button
                onClick={(): void =>
                    setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                className="p-2 rounded-lg
                    bg-teal-100 text-teal-600
                    hover:bg-teal-200 hover:text-teal-700
                    dark:bg-teal-900 dark:text-teal-400
                    dark:hover:bg-teal-600 dark:hover:text-teal-200"
            >
                {resolvedTheme === "dark" ? (
                    // Dark mode icon
                    <HeroIcon d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                ) : (
                    // Light mode icon
                    <HeroIcon d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                )}
            </button>
        </DropTransition>
    );
}
