// Homepage Constants

// (1) Profile Constants
// (1.1) My Name
export interface IMyName {
    fname: string;
    lname: string;
}
export const MyName: IMyName = {
    fname: "Terris",
    lname: "Tan",
};

// (1.2) Profile Keywords
export const TypewriterWords: string[] = [
    "Software-Engineer",
    "Full-Stack-Engineer",
    "Frontend-Engineer",
    "UI/UX-Designer",
    "Backend-Engineer",
    "API-Developer",
    "Solution-Architect",
    "Cloud-Architect",
    "Cloud-Engineer",
    "DevOps-Engineer",
    "AI/ML-Engineer",
    "GenAI-Engineer",
];

// (1.3) Social Media Links
export interface ISocialMediaUrls {
    githubUrl: string;
    linkedinUrl: string;
    mailUrl: string;
    portfolioUrl: string;
}
export const SocialMediaUrls: ISocialMediaUrls = {
    githubUrl: "https://github.com/Terristwj",
    linkedinUrl: "https://www.linkedin.com/in/terristan/",
    mailUrl: "mailto:terristanwei@gmail.com",
    portfolioUrl: "https://terris-portfolio.vercel.app/",
};

// (1.4) Currently <Position/Activity>
const CurrentMessage: string = "Currently interning at KPMG";

const time = new Date().getFullYear() - 2017;

// (1.5) Quick Stats Bar
export const QuickStatsBar = [
    {
        numberString: `${time} Years`,
        label: "Coding Experience",
    },
    {
        numberString: ">50 Delivered",
        label: "Tech Projects/Events",
    },
];

// (1) Profile Constants
export const ProfileProps = {
    MyName,
    TypewriterWords,
    SocialMediaUrls,
    CurrentMessage,
    QuickStatsBar,
};
export type ProfilePropsType = typeof ProfileProps;

// (2) Introduction Section
const initClassNameBox: string =
    "p-6 rounded-lg transition transform hover:scale-105 border border-transparent";
const initClassNameValue: string =
    "text-4xl font-bold text-${item.color}-600 dark:text-${item.color}-400";
export const StatsGrid = [
    {
        label: "Tech Internships",
        value: "4",
        classNameBox: `${initClassNameBox} bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/40 hover:border-purple-200 dark:hover:border-purple-700`,
        classNameValue: `${initClassNameValue} text-purple-600 dark:text-purple-400`,
    },
    {
        label: "Tech Mentor Roles",
        value: "4",
        classNameBox: `${initClassNameBox} bg-pink-50 dark:bg-pink-900/20 hover:bg-pink-100 dark:hover:bg-pink-900/40 hover:border-pink-200 dark:hover:border-pink-700`,
        classNameValue: `${initClassNameValue} text-pink-600 dark:text-pink-400`,
    },
    {
        label: "Hackathons",
        value: "10+",
        classNameBox: `${initClassNameBox} bg-teal-50 dark:bg-teal-900/20 hover:bg-teal-100 dark:hover:bg-teal-900/40 hover:border-teal-200 dark:hover:border-teal-700`,
        classNameValue: `${initClassNameValue} text-teal-600 dark:text-teal-400`,
    },
    {
        label: "Tech Events Organized",
        value: "10+",
        classNameBox: `${initClassNameBox} bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/40 hover:border-green-200 dark:hover:border-green-700`,
        classNameValue: `${initClassNameValue} text-green-600 dark:text-green-400`,
    },
    {
        label: "Certifications",
        value: "10+",
        classNameBox: `${initClassNameBox} bg-yellow-50 dark:bg-yellow-900/20 hover:bg-yellow-100 dark:hover:bg-yellow-900/40 hover:border-yellow-200 dark:hover:border-yellow-700`,
        classNameValue: `${initClassNameValue} text-yellow-600 dark:text-yellow-400`,
    },
    {
        label: "Projects",
        value: "20+",
        classNameBox: `${initClassNameBox} bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:border-blue-200 dark:hover:border-blue-700`,
        classNameValue: `${initClassNameValue} text-blue-600 dark:text-blue-400`,
    },
];
