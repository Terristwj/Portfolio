"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Disclosure, Transition } from "@headlessui/react";

import { motion } from "framer-motion";

import NavLinkDesktop from "./NavLinkDesktop";
import Hamburger from "./Hamburger";
import NavLinkMobile from "./NavLinkMobile";
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
                                <motion.div
                                    className="flex items-center"
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    transition={{ duration: 1 }}
                                >
                                    <Link href="/">
                                        <h1 className="text-2xl font-medium">
                                            <span className="text-teal-600 dark:text-teal-500">
                                                Terris
                                            </span>{" "}
                                            Tan
                                        </h1>
                                    </Link>
                                </motion.div>
                                {/* Navbar-Desktop-Name END */}

                                {/* Navbar-Desktop-Links START */}
                                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                                    <NavLinkDesktop
                                        pathname={pathname}
                                        to="/"
                                        name="About Me"
                                        delay={0.5}
                                    />
                                    <NavLinkDesktop
                                        pathname={pathname}
                                        to="/guestbook"
                                        name="Guestbook"
                                        delay={1}
                                    />
                                    <NavLinkDesktop
                                        pathname={pathname}
                                        to="/projects"
                                        name="Projects"
                                        delay={1.5}
                                    />
                                    <ThemeButton delay={2} />
                                </div>
                                {/* Navbar-Desktop-Links END */}
                            </div>
                            {/* Navbar-Desktop END */}

                            {/* Navbar-Mobile START */}
                            <div className="-mr-2 flex items-center sm:hidden">
                                {/* Navbar-Mobile-Hamburger START */}
                                <motion.div
                                    initial={{ y: -100 }}
                                    animate={{
                                        y: 0,
                                    }}
                                    transition={{
                                        delay: 0.5,
                                        duration: 1,
                                    }}
                                >
                                    <Disclosure.Button
                                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400
                                    hover:text-gray-500 hover:bg-gray-100
                                    focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 dark:hover:bg-gray-800"
                                    >
                                        {open ? (
                                            <Hamburger d="M6 18 18 6M6 6l12 12" />
                                        ) : (
                                            <Hamburger d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        )}
                                    </Disclosure.Button>
                                </motion.div>
                                <>
                                    <span className="select-none">
                                        &nbsp;&nbsp;
                                    </span>
                                </>
                                {/* Navbar-Mobile-Hamburger END */}
                                <ThemeButton delay={1} />
                            </div>
                            {/* Navbar-Mobile END */}
                        </div>
                    </div>

                    {/* Navbar-Mobile-Links START */}
                    <Transition
                        leave="transition transform ease-out duration-500"
                        leaveFrom="translate-x-0 opacity-100"
                        leaveTo="-translate-x-full opacity-50"
                    >
                        <Disclosure.Panel className="sm:hidden">
                            <motion.div
                                initial={{ height: 0, overflow: "hidden" }}
                                animate={{
                                    height: "auto",
                                }}
                                transition={{ ease: "linear", duration: 0.3 }}
                            >
                                <div className="pt-2 pb-3 space-y-1">
                                    <NavLinkMobile
                                        pathname={pathname}
                                        to="/"
                                        name="About Me"
                                    />
                                    <NavLinkMobile
                                        pathname={pathname}
                                        to="/guestbook"
                                        name="Guestbook"
                                    />
                                    <NavLinkMobile
                                        pathname={pathname}
                                        to="/projects"
                                        name="Projects"
                                    />
                                </div>
                            </motion.div>
                        </Disclosure.Panel>
                    </Transition>
                    {/* Navbar-Mobile-Links END */}
                </>
            )}
        </Disclosure>
    );
}
