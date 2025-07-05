"use client";

import Image, { StaticImageData } from "next/image";
import { Typewriter } from "react-simple-typewriter";

import { ProfilePropsType } from "@/app/constants";
import { multilineClassNames } from "@/app/utils/utils";

import ReactIcon from "@/app/components/Homepage/Profile/ReactIcon";
import QuickStatsBar from "@/app/components/Homepage/Profile/QuickStatsBar";
import PDFViewer from "@/app/components/Homepage/Profile/PDFViewer";

type ProfileProps = {
    profileURL: StaticImageData;
    ProfileProps: ProfilePropsType;
};

export default function Profile({
    profileURL,
    ProfileProps,
}: ProfileProps): JSX.Element {
    return (
        <div
            className={multilineClassNames(
                // Default
                "flex pt-5 gap-x-8",
                "flex-col justify-center items-center",
                // Small
                "sm:flex-row sm:gap-x-12",
                // Medium
                "md:gap-x-16 md:py-12",
                // Large
                "lg:flex-col lg:sticky lg:top-8 lg:self-start"
            )}
        >
            {/* Image - START ========================================= */}
            <Image
                alt="Terris Tan - Full Stack Developer"
                src={profileURL}
                draggable={false}
                priority
                className="h-32 w-32
                    md:h-52 md:w-52
                    rounded-full object-cover object-top
                    shadow-lg ring-4 ring-teal-600/20
                    transition-transform duration-300 ease-in-out
                    hover:scale-105"
            />
            {/* Image - END =========================================== */}

            {/* Info - START ========================================== */}
            <div
                className="w-72
                    flex flex-col
                    lg:items-center
                    text-center"
            >
                {/* (1) My Name */}
                <h1
                    className={multilineClassNames(
                        // Default
                        "pt-4 pb-2 font-bold",
                        "text-teal-600 dark:text-teal-400",
                        "tracking-tight",
                        "text-4xl",
                        // Large
                        "lg:text-3xl lg:leading-9"
                    )}
                >
                    {`${ProfileProps.MyName.fname} ${ProfileProps.MyName.lname}`}
                </h1>
                {/* (2) Skill Sets */}
                <p
                    className={multilineClassNames(
                        // Default
                        "text-black dark:text-white",
                        "font-semibold fira-code",
                        // Small
                        "text-lg",
                        // Large
                        "lg:text-base"
                    )}
                >
                    <Typewriter
                        words={[...ProfileProps.TypewriterWords]}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </p>
                {/* (3) Social Media Links */}
                <div
                    className="pt-6
                        flex space-x-6 justify-center"
                >
                    {/* Github */}
                    <ReactIcon
                        to={ProfileProps.SocialMediaUrls.githubUrl}
                        d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
                    />
                    {/* LinkedIn */}
                    <ReactIcon
                        to={ProfileProps.SocialMediaUrls.linkedinUrl}
                        d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"
                    />
                    {/* Mail */}
                    <ReactIcon
                        to={ProfileProps.SocialMediaUrls.mailUrl}
                        d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 01194 256h648.8a7.2 7.2 0 014.4 12.9z"
                    />
                </div>
                {/* (4) Current Work Status Badge*/}
                <div
                    className="mt-6 px-3 py-1
                        inline-flex items-center justify-center rounded-full 
                        text-sm font-medium bg-green-100 text-green-800 
                        dark:bg-green-900/20 dark:text-green-400
                        transition-all duration-300 ease-in-out
                        hover:bg-green-200 dark:hover:bg-green-900/40
                        hover:text-green-900 dark:hover:text-green-300
                        hover:shadow-lg hover:shadow-green-500/20 dark:hover:shadow-green-400/20
                        hover:scale-105
                        border border-transparent hover:border-green-300 dark:hover:border-green-700
                        group"
                >
                    <span
                        className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse
                            group-hover:bg-green-600 dark:group-hover:bg-green-400
                            transition-colors duration-300"
                    ></span>
                    {ProfileProps.CurrentMessage}
                </div>
                {/* (5) Quick Stats */}
                <div
                    className="pt-4 w-full
                        grid grid-cols-2 gap-4
                        text-center text-sm
                        lg:grid-cols-1 lg:gap-2"
                >
                    {ProfileProps.QuickStatsBar.map((stat, index) => (
                        <QuickStatsBar
                            key={index}
                            numberString={stat.numberString}
                            label={stat.label}
                        />
                    ))}
                </div>
                {/* (6) Resume Viewer/Download Button */}
                <PDFViewer />
            </div>
            {/* Info - END ============================================ */}
        </div>
    );
}
