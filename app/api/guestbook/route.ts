"use server";

import { NextResponse } from "next/server";
import { tmpdir } from "os";
import fs from "fs";

// My Messages
import IMessage from "@/app/guestbook/components/MessageInterface";
import messages from "@/data/guestbook/messages.json";

// Constants
import isProd from "@/app/api/guestbook/constants";

// Route: /api/guestbook
// - Get all messages from tmp/messages.json in JSON format.
export async function GET(): Promise<NextResponse<IMessage[]>> {
    // Retrieve temporary directory URL
    const directory: string = tmpdir();
    const tempJsonUrl: string = `${directory}/messages.json`;

    // If is production,
    // - Write the initial messages to the temp JSON file
    // - By creating a tmp/messages.json file
    if (isProd) {
        const initialMessages: Array<IMessage> = messages;
        fs.writeFile(
            tempJsonUrl,
            JSON.stringify(initialMessages),
            function (err: any) {
                if (err) {
                    console.log(err);
                }
            }
        );
    }

    // Read the temporary JSON file
    const data: string = fs.readFileSync(tempJsonUrl).toString();
    const dbMessages: Array<IMessage> = JSON.parse(data);

    // Return the messages in JSON format
    return NextResponse.json(dbMessages);
}
