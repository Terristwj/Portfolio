"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";

// Post Guestbook message into database
export async function postEntry(formData: FormData, username: string) {
    "use server";

    // Add message into database
    const data = await prisma.guestbook.create({
        data: {
            message: formData.get("message") as string,
            username,
        },
    });

    // Reload data onSend
    revalidatePath("/guestbook");
}
