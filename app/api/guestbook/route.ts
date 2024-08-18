// "use server";

// // Next.js API
// import { NextResponse } from "next/server";

// // DB API
// import {
//     // Config
//     DBtestConnection,
//     DBcheckTableExists,
//     DBcreateTable,
//     DBdropTable,
//     // READ
//     DBgetAllMessagesDESC_GUEST,
//     // WRITE
//     DBaddMessage,
// } from "@/app/api/guestbook/MessageDB";

// // Constants
// import {
//     VALID_TYPES,
//     ADMIN_CREDENTIALS,
//     INITIAL_MESSAGES,
// } from "@/app/api/guestbook/constants";

// // API Path: DOMAIN/api/guestbook?type=<string>
// export async function POST(request: Request) {
//     // Get params
//     const type = new URL(request.url).searchParams.get("type");

//     // Check (1) - Params
//     if (!type) {
//         // Invalid request - Missing type
//         return NextResponse.json(
//             { error: "Invalid request - Missing type" },
//             { status: 400 }
//         );
//     } else if (!VALID_TYPES.includes(type)) {
//         // Invalid request - Invalid type
//         return NextResponse.json(
//             { error: "Invalid request - Invalid type" },
//             { status: 400 }
//         );
//     }

//     // Get POST body
//     let auth: any;
//     try {
//         auth = await request.json();
//     } catch (error) {
//         // Body is not JSON
//         return NextResponse.json(
//             { error: "Invalid request - Unauthorized" },
//             { status: 401 }
//         );
//     }

//     // Check (2) - Admin credentials
//     if (
//         auth.username !== ADMIN_CREDENTIALS.username ||
//         auth.password !== ADMIN_CREDENTIALS.password
//     ) {
//         return NextResponse.json(
//             { error: "Invalid request - Unauthorized" },
//             { status: 401 }
//         );
//     }

//     // Check (3) - Database Connection
//     const connection: boolean = await DBtestConnection(true);
//     if (!connection) {
//         return NextResponse.json(
//             { error: "Invalid request - Database connection failed" },
//             { status: 500 }
//         );
//     }

//     // Process request
//     let response: string = "";
//     if (type === "reset") {
//         await dropTable();
//         await initializeTable();
//         response = "Table reset";
//     } else if (type === "init") {
//         (await initializeTable())
//             ? (response = "Table initialized")
//             : (response = "Table already exists");
//     } else if (type === "drop") {
//         (await dropTable())
//             ? (response = "Table dropped")
//             : (response = "Table does not exist");
//     }

//     return NextResponse.json({ response }, { status: 200 });
// }

// async function initializeTable(): Promise<boolean> {
//     const success = await DBcreateTable();
//     if (!success) {
//         return false;
//     }

//     // Add initial messages
//     for (const message of INITIAL_MESSAGES) {
//         await DBaddMessage(
//             message.username,
//             message.message,
//             message.created_at
//         );
//     }
//     return true;
// }

// async function dropTable(): Promise<boolean> {
//     const success: boolean = await DBdropTable();
//     return success;
// }
