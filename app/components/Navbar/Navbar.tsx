"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";

import { AnimatePresence, motion } from "framer-motion";

// Navigation
import NavLinkDesktop from "@/app/components/Navbar/NavLinkDesktop";
import NavLinkMobile from "@/app/components/Navbar/NavLinkMobile";
import DropTransition from "@/app/components/Navbar/DropTransition";

// Icons
import HeroIcon from "@/app/components/Navbar/HeroIcon";
import ThemeButton from "@/app/components/Navbar/ThemeButton";

// Drop-delay settings
import {
    ITab,
    tabs,
    desktopThemeBtnDelay,
    hamburgerDelay,
    mobileThemeBtnDelay,
} from "@/app/components/Navbar/constants";

export default function Navbar(): JSX.Element {
    let pathname = usePathname() || "/";
    return (
        <Disclosure as="nav" className="inter">
            {({ open }: { open: boolean }): JSX.Element => (
                <>
                    {/* Navbar - START =========================================================================================== */}
                    <div className="flex justify-between h-16">
                        <div className="flex justify-between w-full">
                            {/* Navbar-Name - START ============================================================ */}
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
                                <Link href="/" prefetch>
                                    <h1 className="text-2xl font-medium group">
                                        <span
                                            className="text-teal-600 dark:text-teal-500
                                                group-hover:text-black group-hover:dark:text-white
                                                transition-all duration-1000 ease-in-out"
                                        >
                                            Terris
                                        </span>{" "}
                                        <span
                                            className="text-black dark:text-white
                                            group-hover:text-teal-600 group-hover:dark:text-teal-500
                                            transition-all duration-1000 ease-in-out"
                                        >
                                            Tan
                                        </span>
                                    </h1>
                                </Link>
                            </motion.div>
                            {/* Navbar-Name - END ============================================================== */}

                            {/* Navbar-Desktop-Links - START =================================================== */}
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                                {tabs.map(
                                    (tab: ITab): JSX.Element => (
                                        <NavLinkDesktop
                                            key={tab.to}
                                            pathname={pathname}
                                            to={tab.to}
                                            name={tab.name}
                                            delay={tab.delay}
                                        />
                                    )
                                )}
                                <ThemeButton delay={desktopThemeBtnDelay} />
                            </div>
                            {/* Navbar-Desktop-Links - END ===================================================== */}
                        </div>
                        {/* Navbar Part-1/2 - END ================================================================================ */}

                        {/* Navbar-Mobile - START ====================================================================== */}
                        <div className="-mr-2 flex items-center sm:hidden">
                            {/* Navbar-Mobile-Hamburger - START ================================================ */}
                            <DropTransition delay={hamburgerDelay}>
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center p-2 rounded-md
                                        text-gray-600 dark:text-gray-400
                                        hover:text-black hover:bg-gray-100
                                        dark:hover:text-white dark:hover:bg-gray-800
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
                            {/* Navbar-Mobile-Hamburger - END ================================================== */}
                            <>
                                <span className="select-none">
                                    &nbsp;&nbsp;
                                </span>
                            </>
                            <ThemeButton delay={mobileThemeBtnDelay} />
                        </div>
                        {/* Navbar-Mobile - END ======================================================================== */}
                    </div>
                    {/* Navbar Part-2/2 - END ==================================================================================== */}

                    {/* Navbar-Mobile-Links - START ============================================================================== */}
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
                                {tabs.map(
                                    (tab: ITab): JSX.Element => (
                                        <NavLinkMobile
                                            key={tab.to}
                                            pathname={pathname}
                                            to={tab.to}
                                            name={tab.name}
                                        />
                                    )
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                    {/* Navbar-Mobile-Links - END ================================================================================  */}
                </>
            )}
        </Disclosure>
    );
}
