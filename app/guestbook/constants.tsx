"use client";

// Guestbook Constants

// Form Settings
// (1.1) Days for cookies to expire
export const COOKIES_EXPIRY_DAYS: number = 2;

// (1.2) Delay to prevent spam
export const API_DELAY_SECONDS: number = 1;

// (1.3) OpenAI enabled
export const USE_OPENAI: boolean = true;

// (1.4) Name maximum length
export const NAME_MAX_LENGTH: number = 30;

// (1.4) Name maximum length
export const MESSAGE_MAX_LENGTH: number = 191;

// Result-Entries Settings
// (2.1) Interval to revalidate all entries
export const REVALIDATE_INTERVAL: number = 30000;

// (2.2) Per Entry Settings
export const ANIMATE_DURATION: number = 0.8;
export const STAGGER_INTERVAL: number = 0.1;

// (2.3) Random Image Src
export const RANDOM_IMAGE_SRC: string = `https://picsum.photos`;
export const ImageWidth: number = 800;
export const IMAGE_HEIGHT: number = 600;
