"use client";

import { ReactNode } from "react";

interface FormButtonProps {
    children: ReactNode;
    type: "submit" | "reset" | "button";
    disabled?: boolean;
    onClick?: () => Promise<void>;
}

export default function FormButton({
    type,
    disabled,
    onClick,
    children,
}: FormButtonProps): JSX.Element {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={
                "flex items-center justify-center w-10 rounded" +
                " bg-teal-500/30 text-teal-900/80" +
                " dark:bg-teal-900 dark:text-teal-400" +
                (disabled
                    ? " cursor-not-allowed select-none" +
                      " hover:bg-teal-500/15 hover:text-teal-900/60" +
                      " dark:hover:bg-teal-950 dark:hover:text-teal-500"
                    : " hover:bg-teal-500/45 hover:text-teal-900" +
                      " dark:hover:bg-teal-700 dark:hover:text-teal-300")
            }
        >
            {children}
        </button>
    );
}
