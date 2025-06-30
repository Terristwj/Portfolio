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
export const StatsGrid = [
    {
        label: "Tech Internships",
        value: "4",
        color: "purple",
    },
    {
        label: "Tech Mentor Roles",
        value: "4",
        color: "pink",
    },
    {
        label: "Hackathons",
        value: "10+",
        color: "teal",
    },
    {
        label: "Tech Events Organized",
        value: "10+",
        color: "green",
    },
    {
        label: "Certifications",
        value: "10+",
        color: "yellow",
    },
    {
        label: "Projects",
        value: "20+",
        color: "blue",
    },
];
