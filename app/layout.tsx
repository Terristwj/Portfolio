import type { Metadata } from "next";

// Vercel Analytics & Speed Insights
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

// Custom CSS
import "app/styles/globals.css";

import Navbar from "@/app/components/Navbar/Navbar";
import Theme from "@/app//components/wrappers/Theme";

// export const metadata: Metadata = {
//     title: "Terris Portfolio",
//     description: "Terris Tan Portfolio Website",
// };

export const metadata: Metadata = {
    generator: "Next.js",
    applicationName: "Terris Portfolio",
    referrer: "origin-when-cross-origin",

    title: "Terris Portfolio",
    description:
        "Terris Portfolio Website. View my projects and resume. Leave a message in Guestbook!",

    keywords: [
        "Next.js",
        "Terris",
        "Terris Tan",
        "Terris Tan Wei Jun",
        "Tan Wei Jun Terris",
        "Terris Portfolio",
        "Portfolio",
    ],
    authors: [
        {
            name: "Terris Tan",
            url: "https://github.com/Terristwj",
        },
        {
            name: "Terris Tan",
            url: "https://www.linkedin.com/in/terristan/",
        },
    ],
    creator: "Terris Tan",
    publisher: "STerris Tan",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body
                suppressHydrationWarning={true} // Prevents errors from extensions
                className="h-full
                text-black bg-white
                dark:text-white dark:bg-[#090908]
                selection:bg-yellow-100
                dark:selection:bg-teal-800/80"
            >
                <Theme>
                    <div
                        className="max-w-7xl mx-auto px-4 
                        sm:px-6 lg:px-8"
                    >
                        <Navbar />
                        {children}
                    </div>
                </Theme>

                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
