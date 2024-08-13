"use server";

// File System - Read/Write JSON
import fs from "fs";

// My Messages
import IMessage from "@/app/guestbook/components/MessageInterface";
import messages from "@/data/guestbook/messages.json";

interface IMessageActions {
    getAllMessages(order: "ASC" | "DESC"): Array<IMessage>;
    addMessage(message: string, username: string): void;
}

class MessageActions {
    private key: "id";
    private jsonUrl: string;

    public constructor() {
        this.key = "id";
        this.jsonUrl = "@/data/guestbook/messages.json";
    }

    /**
     * Get all messages.
     * @return {Array<IMessage>} All messages.
     */
    public getAllMessages(order: "ASC" | "DESC"): Array<IMessage> {
        return this.sortBy(messages, order);
    }

    /**
     * Sort an array by a given key and order.
     * @param {Array<IMessage>} data - The data to be sorted.
     * @param {string} key - The key to sort by.
     * @param {string} order - The order to sort by.
     * @return {Array<IMessage>} The sorted data.
     */
    private sortBy(
        data: Array<IMessage>,
        order: "ASC" | "DESC"
    ): Array<IMessage> {
        return data.sort((a: IMessage, b: IMessage): number => {
            if (order === "DESC") [a, b] = [b, a];
            return a[this.key] - b[this.key];
        });
    }

    /**
     * Adds a message into the JSON database.
     * @param {string} message - The message to save.
     * @param {string} username - The username that created.
     */
    public addMessage(message: string, username: string) {
        let data: string = fs.readFileSync(this.jsonUrl).toString();
        let dbMessages: Array<IMessage> = JSON.parse(data);

        dbMessages.push({
            id: messages.length + 1,
            message: message,
            username: username,
            created_at: new Date().toISOString(),
        });

        fs.writeFile(
            this.jsonUrl,
            JSON.stringify(dbMessages),
            function (err: any) {
                if (err) {
                    console.log(err);
                }
            }
        );
    }
}

// Object init
const myMessageActions: IMessageActions = new MessageActions();

// Server API to get all messages
export async function getAllMessages(
    order: "ASC" | "DESC"
): Promise<Array<IMessage>> {
    return myMessageActions.getAllMessages(order);
}

// Server API to get add a message
export async function addMessage(
    message: string,
    username: string
): Promise<boolean> {
    myMessageActions.addMessage(message, username);
    return true;
}
