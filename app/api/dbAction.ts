"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";

// Get Guestbook messages from database
export async function getEntries(limit: number = 10) {
    const data = await prisma.guestbook.findMany({
        // Msg display limit
        take: limit,
        orderBy: {
            created_at: "desc",
        },
    });

    return data;
}

// Post Guestbook message into database
export async function postEntry(message: string, username: string) {
    // Add message into database
    await prisma.guestbook.create({
        data: {
            message,
            username,
        },
    });

    // Clear cache and reload page onSend
    revalidateGuestbook();
}

// Reload Guestbook messages by resetting the cache
export async function revalidateGuestbook() {
    // Clear cache and reload page
    revalidatePath("/guestbook");
}
