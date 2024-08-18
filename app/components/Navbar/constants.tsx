"use client";

// Drop-delay settings

// (1) Interface
export interface ITab {
    to: string;
    name: string;
    delay: number;
}

// (2) Tab items-navigation
export const TABS: Array<ITab> = [
    { to: "/", name: "About Me", delay: 0.5 },
    { to: "/guestbook", name: "Guestbook", delay: 1 },
    { to: "/projects", name: "Projects", delay: 1.5 },
];

// (3) Theme-button delays
export const DESKTOP_THEME_BTN_DELAY: number = 2;
export const HAMBURGER_DELAY: number = 0.5;
export const MOBILE_THEME_BTN_DELAY: number = 1;
