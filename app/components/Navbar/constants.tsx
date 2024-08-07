// Drop-delay settings

export interface ITab {
    to: string;
    name: string;
    delay: number;
}

export const tabs: Array<ITab> = [
    { to: "/", name: "About Me", delay: 0.5 },
    { to: "/guestbook", name: "Guestbook", delay: 1 },
    { to: "/projects", name: "Projects", delay: 1.5 },
];
export const desktopThemeBtnDelay: number = 2;

export const hamburgerDelay: number = 0.5;
export const mobileThemeBtnDelay: number = 1;
