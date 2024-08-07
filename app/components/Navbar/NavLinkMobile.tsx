"use client";

import Link from "next/link";

interface NavLinkMobileProps {
    pathname: string;
    to: string;
    name: string;
}

export default function NavLinkMobile({
    pathname,
    to,
    name,
}: NavLinkMobileProps): JSX.Element {
    return (
        <Link
            href={to}
            prefetch
            className={`${
                (pathname === to
                    ? "text-teal-600 border-teal-500 bg-teal-50 dark:text-teal-500 dark:bg-gray-800"
                    : "text-black border-transparent hover:border-gray-500 hover:bg-gray-200 dark:text-white dark:hover:border-gray-300 dark:hover:bg-gray-700") +
                " block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            }`}
        >
            {name}
        </Link>
    );
}
