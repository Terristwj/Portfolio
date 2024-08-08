"use client";

interface KeywordTextProps {
    children: string;
}

export default function KeywordText({
    children,
}: KeywordTextProps): JSX.Element {
    return (
        // Keyword text is bold with color theme
        <span className="font-bold text-teal-600 dark:text-teal-400">
            {children}
        </span>
    );
}

// Shorthand for KeywordText
export function K({ children }: { children: string }): JSX.Element {
    return <KeywordText>{children}</KeywordText>;
}
