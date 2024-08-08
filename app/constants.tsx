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
export interface ISocialMediaLinks {
    github: string;
    linkedin: string;
    mail: string;
}
export const SocialMediaLinks: ISocialMediaLinks = {
    github: "https://github.com/Terristwj",
    linkedin: "https://www.linkedin.com/in/terristan/",
    mail: "mailto:terristanwei@gmail.com",
};
