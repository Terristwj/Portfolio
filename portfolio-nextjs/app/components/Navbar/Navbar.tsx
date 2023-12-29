"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";

import { AnimatePresence, motion } from "framer-motion";

import NavLinkDesktop from "./NavLinkDesktop";
import DropTransition from "./DropTransition";
import NavLinkMobile from "./NavLinkMobile";
import HeroIcon from "./HeroIcon";
import ThemeButton from "./ThemeButton";

const tabs = [
    { to: "/", name: "About Me", delay: 0.5 },
    { to: "/guestbook", name: "Guestbook", delay: 1 },
    { to: "/projects", name: "Projects", delay: 1.5 },
];
const desktopThemeBtnDelay = 2;

const hamburgerDelay = 0.5;
const mobileThemeBtnDelay = 1;

export default function Navbar() {
    let pathname = usePathname() || "/";
    return (
        <Disclosure as="nav" className="inter">
            {({ open }) => (
                <>
                    <div className="flex justify-between h-16">
                        {/* Navbar-Desktop START */}
                        <div className="flex justify-between w-full">
                            {/* Navbar-Desktop-Name START */}
                            <motion.div
                                className="flex items-center whitespace-nowrap"
                                initial={{ opacity: 0, width: 0 }}
                                animate={{
                                    opacity: 1,
                                    width: "auto",
                                    overflow: "hidden",
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
                                {tabs.map((tab) => {
                                    return (
                                        <NavLinkDesktop
                                            key={tab.to}
                                            pathname={pathname}
                                            to={tab.to}
                                            name={tab.name}
                                            delay={tab.delay}
                                        />
                                    );
                                })}
                                <ThemeButton delay={desktopThemeBtnDelay} />
                            </div>
                            {/* Navbar-Desktop-Links END */}
                        </div>
                        {/* Navbar-Desktop END */}

                        {/* Navbar-Mobile START */}
                        <div className="-mr-2 flex items-center sm:hidden">
                            {/* Navbar-Mobile-Hamburger START */}
                            <DropTransition delay={hamburgerDelay}>
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center p-2 rounded-md 
                                        text-gray-600 dark:text-gray-400
                                        hover:text-black hover:bg-gray-100
                                        dark:hover:bg-gray-800 dark:hover:text-gray-300
                                        focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
                                >
                                    {open ? (
                                        // Hamburger Open
                                        <HeroIcon d="M6 18 18 6M6 6l12 12" />
                                    ) : (
                                        // Hamburger Close
                                        <HeroIcon d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    )}
                                </Disclosure.Button>
                            </DropTransition>
                            {/* Navbar-Mobile-Hamburger END */}
                            <>
                                <span className="select-none">
                                    &nbsp;&nbsp;
                                </span>
                            </>
                            <ThemeButton delay={mobileThemeBtnDelay} />
                        </div>
                        {/* Navbar-Mobile END */}
                    </div>

                    {/* Navbar-Mobile-Links START */}
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                key="mobile-links"
                                className="sm:hidden"
                                initial={{
                                    height: "0px",
                                    overflow: "hidden",
                                }}
                                animate={{
                                    height: "auto",
                                }}
                                exit={{
                                    height: "0px",
                                }}
                                transition={{
                                    ease: "easeInOut",
                                    duration: 0.5,
                                }}
                            >
                                {tabs.map((tab) => {
                                    return (
                                        <NavLinkMobile
                                            key={tab.to}
                                            pathname={pathname}
                                            to={tab.to}
                                            name={tab.name}
                                        />
                                    );
                                })}
                            </motion.div>
                        )}
                    </AnimatePresence>
                    {/* Navbar-Mobile-Links END */}
                </>
            )}
        </Disclosure>
    );
}
