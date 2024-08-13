"use client";

// Guestbook Constants

// Form Settings
// (1.1) Days for cookies to expire
export const CookiesExpiryDays: number = 2;

// (1.2) Delay to prevent spam
export const ApiDelaySeconds: number = 1;

// (1.3) OpenAI enabled
export const useOpenAI: boolean = true;

// Result-Entries Settings
// (2.1) Interval to revalidate all entries
export const RevalidateInterval: number = 30000;

// (2.2) Per Entry Settings
export const AnimateDuration: number = 0.8;
export const StaggerInterval: number = 0.1;

// (2.3) Random Image Src
export const RandomImageSrc: string = `https://picsum.photos`;
export const ImageWidth: number = 800;
export const ImageHeight: number = 600;
