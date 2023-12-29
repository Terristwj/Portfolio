import type { Metadata } from "next";

import "./styles/globals.css";

import Navbar from "./components/Navbar/Navbar";
import Theme from "./components/wrappers/Theme";

export const metadata: Metadata = {
    title: "Terris Tan Portfolio",
    description: "Terris Tan Portfolio Website",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className="h-full
                text-black bg-white
                dark:text-white dark:bg-[#090908]
                selection:bg-yellow-100
                dark:selection:bg-teal-800/80"
            >
                <Theme>
                    <div
                        className="max-w-6xl mx-auto px-4 
                        sm:px-6 lg:px-8"
                    >
                        <Navbar />
                        {children}
                    </div>
                </Theme>
            </body>
        </html>
    );
}
