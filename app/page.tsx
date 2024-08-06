"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

import PageAnimate from "./components/wrappers/PageAnimate";
import PageDefault from "./components/wrappers/PageDefault";

import Me from "@/public/me.png";

const TypewriterWords = [
    "Software-Engineer",
    "Full-Stack-Developer",
    "React-NextJs",
    "Vue-Nuxtjs",
    "Nodejs-Express",
];

export default function About() {
    return (
        <PageAnimate>
            <PageDefault title="About Me" divider={true} bottomGap={true}>
                <div
                    className="items-center space-y-2
                        xl:grid xl:grid-cols-3
                        xl:gap-x-8 xl:space-y-0"
                >
                    {/* Profile START */}
                    <div className="flex flex-col items-center pt-8 noSelect">
                        <Image
                            alt="My Picture"
                            src={Me}
                            draggable={false}
                            priority
                            className="h-48 w-48 rounded-full object-cover object-top"
                        />
                        <h3
                            className="text-teal-600 dark:text-teal-400
                                pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight"
                        >
                            Terris Tan
                        </h3>
                        <p
                            className="text-black dark:text-white
                                text-center font-semibold fira-code"
                        >
                            <Typewriter
                                words={[...TypewriterWords]}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </p>

                        <div className="flex space-x-5 pt-6">
                            {/* Github */}
                            <ReactIcon
                                to="https://github.com/Terristwj"
                                d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
                            />
                            {/* LinkedIn */}
                            <ReactIcon
                                to="https://www.linkedin.com/in/terristan/"
                                d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"
                            />
                            {/* Mail */}
                            <ReactIcon
                                to="mailto:terristanwei@gmail.com"
                                d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 01194 256h648.8a7.2 7.2 0 014.4 12.9z"
                            />
                        </div>
                    </div>
                    {/* Profile END */}

                    {/* Description START */}
                    <div
                        className="max-w-none prose-lg pt-8 pb-7
                            dark:prose-invert xl:col-span-2
                            montserrat"
                    >
                        <p>
                            Hi there! I’m Terris, a 24-year-old Full Stack Developer based in Singapore.
                        </p>
                        <p>
                            I’m currently a penultimate student at Singapore Management University,
                            pursuing a BSc in Information Systems. My passion for creating Full Stack
                            applications often shines through my participation in hackathons, where I’ve taken
                            part in 10 to date. This portfolio highlights the skills I’ve developed with 
                            Next.js and TailwindCSS.
                        </p>
                        <p>
                            My journey in tech spans beyond Full Stack development. I’ve delved into
                            AI/ML, backend development (APIs and algorithms), solution architecture,
                            UI/UX design, and cloud computing. With three internships under my belt,
                            including my current role as a Frontend Developer Intern at Accenture, I 
                            continue to expand my skills and explore new technological frontiers.
                        </p>
                        <p>
                            Building applications—whether they’re eCommerce platforms, micro-sites, or
                            SaaS solutions—is where my creativity, technical expertise, and passion
                            intersect. I’m excited to keep growing in this field and to inspire others along
                            the way.
                        </p>
                    </div>
                    {/* Description END */}
                </div>
            </PageDefault>
        </PageAnimate>
    );
}

function ReactIcon(props: { to: string; d: string }): JSX.Element {
    return (
        <a href={props.to} target="_target">
            <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-teal-500 hover:text-teal-600"
            >
                <path d={props.d} />
            </svg>
        </a>
    );
}
