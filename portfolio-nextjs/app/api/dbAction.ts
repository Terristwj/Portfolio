"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";

// Get Guestbook messages from database
export async function getEntries() {
    const data = await prisma.guestbook.findMany({
        // Msg display limit
        take: 10,
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

    // Reload data onSend
    revalidatePath("/guestbook");
}
