// My Messages
import IMessage from "@/app/guestbook/components/MessageInterface";

// API Guestbook Constants

// Both API
// (1) Valid Orders to sort messages
export const VALID_ORDERS: string[] = ["ASC", "DESC"];

// GUEST API
// (2) Max Lengths
export const NAME_MAX_LENGTH: number = 50;
export const MESSAGE_MAX_LENGTH: number = 500;

// ADMIN API
// (3) Valid Param Types
export const VALID_TYPES: string[] = ["admin", "reset", "init", "drop", "hide"];

// (4) Admin Credentials
export const ADMIN_CREDENTIALS: { username: string; password: string } = {
    username: "admin",
    password: "admin",
};

// (5) Default Messages
export const INITIAL_MESSAGES: IMessage[] = [
    {
        id: 1,
        username: "Terris the Admin",
        message: "Welcome to my Guestbook!",
        created_at: new Date("2024-08-03T12:41:20.769Z").toISOString(),
    },
    {
        id: 2,
        username: "Still Terris",
        message: "Be my honorary first record! 🙂",
        created_at: new Date("2024-08-03T16:41:20.769Z").toISOString(),
    },
];
