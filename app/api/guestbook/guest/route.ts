// Next.js API
import { NextResponse } from "next/server";

// MessageActions
import {
    testConnection,
    getAllMessages,
    addMessage,
} from "@/app/api/guestbook/guest/MessageActions";

// Constants
import {
    VALID_ORDERS,
    NAME_MAX_LENGTH,
    MESSAGE_MAX_LENGTH,
} from "@/app/api/guestbook/constants";

// My Messages
import IMessage from "@/app/guestbook/components/MessageInterface";

// Remove cache
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 1;

// API Path: DOMAIN/api/guestbook/guest?order=<string>
// - (GUEST) Get all messages, no is_hidden key
export async function GET(request: Request) {
    // Get params
    const order: string | null = new URL(request.url).searchParams.get("order");

    // Check (1) - Params
    if (!order) {
        // Invalid request - Missing order
        return returnError("Invalid request - Missing order", 400);
    } else if (!VALID_ORDERS.includes(order)) {
        // Invalid request - Invalid order
        return returnError("Invalid request - Invalid order", 400);
    }

    // Check (2) - Database Connection
    const connection: boolean = await testConnection();
    if (!connection) {
        return returnError("Server error - Database connection failed", 500);
    }

    // Check (3) - Process request
    const result: Array<IMessage> | false = await getAllMessages(
        order as "ASC" | "DESC"
    );
    return result === false
        ? returnError("Server error - Messages table does not exists", 400)
        : NextResponse.json(result, { status: 200 });
}

// API Path: DOMAIN/api/guestbook/guest
// - (GUEST) Add message into the database
// body: { username: string, message: string, created_at: string }
export async function POST(request: Request) {
    // Get POST body
    let message: any;
    try {
        message = await request.json();
    } catch (error) {
        // Check (1) - Body is not JSON
        return returnError("Invalid request - Invalid JSON", 401);
    }

    // Check (2) - Check JSON for username, message, and created_at
    if (!message.username || !message.message || !message.created_at) {
        // Invalid request - Missing JSON fields
        return returnError("Invalid request - Missing JSON fields", 400);
    } else if (
        message.username.length > NAME_MAX_LENGTH ||
        message.message.length > MESSAGE_MAX_LENGTH
    ) {
        // Invalid request - Data is too long
        return returnError("Invalid request - Data is too long", 400);
    }

    // Check (3) - Database Connection
    const connection: boolean = await testConnection();
    if (!connection) {
        return returnError("Server error - Database connection failed", 500);
    }

    // Check (4) - Process request
    let result: boolean = await addMessage(
        message.username,
        message.message,
        message.created_at
    );
    return result === false
        ? returnError("Server error - Message table does not exists", 500)
        : NextResponse.json(true, { status: 200 });
}

// Utility Functions - START ======================================================

function returnError(error: string, status: number): NextResponse {
    return NextResponse.json({ error }, { status });
}

// Utility Functions - END ========================================================
