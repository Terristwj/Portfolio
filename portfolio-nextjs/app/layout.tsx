import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Provider from "./components/Provider";

const inter = Inter({ subsets: ["latin"] });

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
                className={`${inter.className} bg-white text-black dark:bg-[#090908] dark:text-white h-full selection:bg-yellow-100 dark:selection:bg-blue-900`}
            >
                <Provider>
                    <Navbar />
                    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    );
}