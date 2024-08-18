// Next.js API
import { NextResponse } from "next/server";

// MessageActions
import {
    testConnection,
    getAllMessages,
    setIsHidden,
    initializeTable,
    dropTable,
} from "@/app/api/guestbook/admin/MessageActions";

// Constants
import {
    VALID_ORDERS,
    VALID_TYPES,
    ADMIN_CREDENTIALS,
} from "@/app/api/guestbook/constants";

// My Messages
import IMessage from "@/app/guestbook/components/MessageInterface";

// Remove cache
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 1;

// API Path: DOMAIN/api/guestbook/admin?order=<string>
// - (ADMIN) Get all messages, with is_hidden key
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

// API Path: DOMAIN/api/guestbook/admin?type=<string>
// - (GUEST) Add message into the database
// body 1: { username: string, password: string }
// body 2: { username: string, password: string, message_id: number, new_is_hidden: boolean }
export async function POST(request: Request) {
    // Get params
    const type = new URL(request.url).searchParams.get("type");

    // Check (1) - Params
    if (!type) {
        // Invalid request - Missing type
        return returnError("Invalid request - Missing type", 400);
    } else if (!VALID_TYPES.includes(type)) {
        // Invalid request - Invalid type
        return returnError("Invalid request - Invalid type", 400);
    }

    // Get POST body
    let auth: any;
    try {
        auth = await request.json();
    } catch (error) {
        // Body is not JSON
        return returnError("Invalid request - Unauthorized", 401);
    }

    // Check (2) - Admin credentials
    if (
        auth.username !== ADMIN_CREDENTIALS.username ||
        auth.password !== ADMIN_CREDENTIALS.password
    ) {
        return returnError("Invalid request - Unauthorized", 401);
    }

    // Check (3) - Database Connection
    const connection: boolean = await testConnection();
    if (!connection) {
        return returnError("Invalid request - Database connection failed", 500);
    }

    // Process request
    let response: string = "";

    // Check (4) - Type 'hide'
    if (type === "hide") {
        // Check JSON for messageId and isHidden
        const {
            message_id,
            new_is_hidden,
        }: { message_id: any; new_is_hidden: any } = auth;
        if (
            typeof message_id !== "number" ||
            typeof new_is_hidden !== "boolean"
        ) {
            return returnError("Invalid request - Missing JSON fields", 400);
        }

        // Check process request
        const result: boolean = await setIsHidden(message_id, new_is_hidden);
        if (!result) {
            return returnError("Invalid request - Message does not exist", 400);
        }

        response = `Message visibility updated for ID: ${message_id} to ${new_is_hidden}`;
    }

    // Check is Admin
    else if (type === "admin") {
        response = "Admin access granted";
    }

    // Admin Configurations
    else if (type === "reset") {
        await dropTable();
        await initializeTable();
        response = "Table reset";
    } else if (type === "init") {
        (await initializeTable())
            ? (response = "Table initialized")
            : (response = "Table already exists");
    } else if (type === "drop") {
        (await dropTable())
            ? (response = "Table dropped")
            : (response = "Table does not exist");
    }

    return NextResponse.json({ response }, { status: 200 });
}

// Utility Functions - START ======================================================

function returnError(error: string, status: number): NextResponse {
    return NextResponse.json({ error }, { status });
}

// Utility Functions - END ========================================================
