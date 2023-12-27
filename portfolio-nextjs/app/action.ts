"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";

// Post Guestbook message into database
export async function postEntry(message: string, username: string) {
    "use server";

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
