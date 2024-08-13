"use server";

import { NextResponse } from "next/server";

import { getAllMessages } from "@/app/api/guestbook/MessageActions";
import IMessage from "@/app/guestbook/components/MessageInterface";

// Route: /api/guestbook
// - Get all messages in JSON format.
export async function GET() {
    const dbMessages: IMessage[] = await getAllMessages("DESC");
    return NextResponse.json(dbMessages);
}
