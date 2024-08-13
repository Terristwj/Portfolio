"use server";

import { NextResponse } from "next/server";

// File System - Read/Write JSON
import { tmpdir } from "os";
import fs from "fs";

// My Messages
import IMessage from "@/app/guestbook/components/MessageInterface";
import { getAllMessages } from "@/app/api/guestbook/MessageActions";

// Route: /api/guestbook
// - Get all messages in JSON format.
export async function GET(): Promise<NextResponse<IMessage[]>> {
    // // Retrieve temporary directory URL
    // const tempJsonUrl: string = `/tmp/messages.json`;

    // // Retrieve temporary JSON file data
    // let dbMessages: Array<IMessage> = [];
    // try {
    //     console.log("tempJsonUrl:", tempJsonUrl);
    //     const data: string = fs.readFileSync(tempJsonUrl).toString();
    //     console.log("data:", data);
    //     dbMessages = JSON.parse(data);
    //     console.log("dbMessages:", dbMessages);
    // } catch (error: any) {
    //     // JSON file does not exist yet
    //     console.log("Error:", error);
    // }

    const dbMessages: IMessage[] = await getAllMessages("DESC");

    return NextResponse.json(dbMessages);
}
