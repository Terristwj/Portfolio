// Homepage Constants

// Hero
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
    "Full-Stack-Developer",
    "React-NextJs",
    "Vue-Nuxtjs",
    "Nodejs-Express",
    "Cloud-Architecture",
    "API-Developer",
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
