"use client";

import { ReactNode } from "react";

interface FormButtonProps {
    children: ReactNode;
    type: "submit" | "reset" | "button" | undefined;
    disabled?: boolean;
    onClick?: () => void;
}

export default function FormButton({
    type,
    disabled,
    onClick,
    children,
}: FormButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={
                (disabled ? "cursor-not-allowed select-none w-10" : "w-8") +
                " flex items-center justify-center rounded" +
                " bg-teal-500/30 text-teal-900/80 hover:bg-teal-500/45" +
                " hover:text-teal-900 dark:bg-teal-900 dark:text-teal-400" +
                " dark:hover:bg-teal-700 dark:hover:text-teal-300"
            }
        >
            {children}
        </button>
    );
}
