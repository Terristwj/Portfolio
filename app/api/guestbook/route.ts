"use server";

import { NextResponse } from "next/server";

// File System - Read/Write JSON
import { tmpdir } from "os";
import fs from "fs";

// My Messages
import IMessage from "@/app/guestbook/components/MessageInterface";

// Route: /api/guestbook
// - Get all messages in JSON format.
export async function GET(): Promise<NextResponse<IMessage[]>> {
    // Retrieve temporary directory URL
    const directory: string = tmpdir();
    const tempJsonUrl: string = `${directory}/messages.json`;

    // Retrieve temporary JSON file data
    let dbMessages: Array<IMessage> = [];
    try {
        const data: string = fs.readFileSync(tempJsonUrl).toString();
        dbMessages = JSON.parse(data);
    } catch (error: any) {
        // JSON file does not exist yet
        console.log("Error:", error);
    }

    return NextResponse.json(dbMessages);
}
