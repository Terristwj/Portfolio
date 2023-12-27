"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeButton from "./ThemeButton";

export default function Navbar() {
    let pathname = usePathname() || "/";

    return (
        <Disclosure as="nav">
            {({ open }) => (
                <>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            {/* Navbar-Desktop START */}
                            <div className="flex justify-between w-full">
                                {/* Navbar-Desktop-Name START */}
                                <div className="flex items-center">
                                    <Link href="/">
                                        <h1 className="text-2xl font-medium">
                                            <span className="text-teal-500">
                                                Terris
                                            </span>{" "}
                                            Tan
                                        </h1>
                                    </Link>
                                </div>
                                {/* Navbar-Desktop-Name END */}

                                {/* Navbar-Desktop-Links START */}
                                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                                    <Link
                                        href="/"
                                        prefetch
                                        className={`${
                                            (pathname === "/"
                                                ? "border-teal-500  dark:text-white"
                                                : "border-transparent hover:border-teal-500 text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white") +
                                            " h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                        }`}
                                    >
                                        About Me
                                    </Link>
                                    <Link
                                        href="/guestbook"
                                        prefetch
                                        className={`${
                                            (pathname === "/guestbook"
                                                ? "border-teal-500  dark:text-white"
                                                : "border-transparent hover:border-teal-500 text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white") +
                                            " h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                        }`}
                                    >
                                        Guestbook
                                    </Link>
                                    <Link
                                        href="/projects"
                                        prefetch
                                        className={`${
                                            (pathname === "/projects"
                                                ? "border-teal-500  dark:text-white"
                                                : "border-transparent hover:border-teal-500 text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white") +
                                            " h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                        }`}
                                    >
                                        Projects
                                    </Link>
                                    <ThemeButton />
                                </div>
                                {/* Navbar-Desktop-Links END */}
                            </div>
                            {/* Navbar-Desktop END */}

                            {/* Navbar-Mobile-Hamburger START */}
                            <div className="-mr-2 flex items-center sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 dark:hover:bg-gray-800">
                                    {open ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18 18 6M6 6l12 12"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                            />
                                        </svg>
                                    )}
                                </Disclosure.Button>
                                <ThemeButton />
                            </div>
                            {/* Navbar-Mobile-Hamburger END */}
                        </div>
                    </div>

                    {/* Navbar-Mobile-Links START */}
                    <Disclosure.Panel className="sm:hidden">
                        <div className="pt-2 pb-3 space-y-1">
                            <Link
                                href="/"
                                prefetch
                                className={`${
                                    (pathname === "/"
                                        ? " text-teal-500 border-teal-500 bg-teal-50 dark:bg-gray-800"
                                        : " text-black border-transparent hover:border-gray-500 hover:bg-gray-200 dark:text-white dark:hover:border-gray-300 dark:hover:bg-gray-700") +
                                    " block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                }`}
                            >
                                About Me
                            </Link>
                            <Link
                                href="/guestbook"
                                prefetch
                                className={`${
                                    (pathname === "/guestbook"
                                        ? " text-teal-500 border-teal-500 bg-teal-50 dark:bg-gray-800"
                                        : " text-black border-transparent hover:border-gray-500 hover:bg-gray-200 dark:text-white dark:hover:border-gray-300 dark:hover:bg-gray-700") +
                                    " block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                }`}
                            >
                                Guestbook
                            </Link>
                            <Link
                                href="/projects"
                                prefetch
                                className={`${
                                    (pathname === "/projects"
                                        ? " text-teal-500 border-teal-500 bg-teal-50 dark:bg-gray-800"
                                        : " text-black border-transparent hover:border-gray-500 hover:bg-gray-200 dark:text-white dark:hover:border-gray-300 dark:hover:bg-gray-700") +
                                    " block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                }`}
                            >
                                Projects
                            </Link>
                        </div>
                    </Disclosure.Panel>
                    {/* Navbar-Mobile-Links END */}
                </>
            )}
        </Disclosure>
    );
}