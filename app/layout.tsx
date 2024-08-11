import type { Metadata } from "next";

// Vercel Analytics & Speed Insights
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

// Custom CSS
import "@/app/styles/globals.css";

import Navbar from "@/app/components/Navbar/Navbar";
import Theme from "@/app/components/Wrappers/Theme";

import MetaDataKeywords from "@/app/MetaDataKeywords";
import { multilineClassNames } from "@/app//utils/utils";

// Constants
import {
    IMyName,
    MyName,
    ISocialMediaUrls,
    SocialMediaUrls,
} from "@/app/constants";

// export const metadata: Metadata = {
//     title: "Terris Portfolio",
//     description: "Terris Tan Portfolio Website",
// };

// Names
const { fname, lname }: IMyName = MyName;
const fullName: string = `${fname} ${lname}`;
const portfolioName: string = `${fname} Portfolio`;
const description: string = `${portfolioName} Website. View my projects and resume. Leave a message in Guestbook!`;

// Socials
const { githubUrl, linkedinUrl, mailUrl, portfolioUrl }: ISocialMediaUrls =
    SocialMediaUrls;

export const metadata: Metadata = {
    generator: "Next.js",
    applicationName: portfolioName,
    referrer: "origin-when-cross-origin",

    title: portfolioName,
    description: description,

    keywords: MetaDataKeywords,
    authors: [
        {
            name: fullName,
            url: githubUrl,
        },
        {
            name: fullName,
            url: linkedinUrl,
        },
        {
            name: fullName,
            url: mailUrl,
        },
    ],
    creator: fullName,
    publisher: fullName,

    openGraph: {
        type: "website",
        locale: "en_US",

        title: portfolioName,
        description: description,

        images: ["/this-website.jpg"],
        url: portfolioUrl,
        siteName: portfolioName,
    },
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
                className={multilineClassNames(
                    "h-full",

                    // Light Mode
                    // - Text color
                    "text-black bg-white",
                    // - Selection color
                    "selection:bg-teal-600",
                    // - Selection Text color
                    "selection:text-white",

                    // Dark Mode
                    // - Text color
                    "dark:text-white dark:bg-black",
                    // - Selection color
                    "dark:selection:bg-teal-200",
                    // - Selection Text color
                    "dark:selection:text-black"
                )}
            >
                <Theme>
                    <div
                        className="max-w-7xl 
                            mx-auto px-4 
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
