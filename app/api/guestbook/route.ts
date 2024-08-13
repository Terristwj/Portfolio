"use server";

import { NextResponse } from "next/server";
import { tmpdir } from "os";
import fs from "fs";

import IMessage from "@/app/guestbook/components/MessageInterface";

// Route: /api/guestbook
// - Get all messages from tmp/messages.json in JSON format.
export async function GET(): Promise<NextResponse<IMessage[]>> {
    // Retrieve temporary directory URL
    const directory: string = tmpdir();
    const tempJsonUrl: string = `${directory}/messages.json`;

    // Read the temporary JSON file
    const data: string = fs.readFileSync(tempJsonUrl).toString();
    const dbMessages: Array<IMessage> = JSON.parse(data);

    // Return the messages in JSON format
    return NextResponse.json(dbMessages);
}
