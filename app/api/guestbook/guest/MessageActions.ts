"use server";

// Database API
import {
    // Config
    DBtestConnection,
    // READ
    DBgetAllMessagesASC_GUEST,
    DBgetAllMessagesDESC_GUEST,
    // WRITE
    DBaddMessage,
} from "@/app/api/guestbook/MessageDB";

// My Messages
import IMessage from "@/app/guestbook/components/MessageInterface";

// Class - START ================================================================

interface IMessageActions {
    testConnection(debugLog?: true): Promise<boolean>;
    getAllMessages(order: "ASC" | "DESC"): Promise<Array<IMessage> | false>;
    addMessage(
        username: string,
        message: string,
        createdAt: string
    ): Promise<boolean>;
}

class MessageActions implements IMessageActions {
    public constructor() {}

    /**
     * Test database connection
     * @return {Promise<boolean>} Connection is successful status.
     */
    public async testConnection(debugLog: boolean = false): Promise<boolean> {
        return await DBtestConnection(debugLog);
    }

    /**
     * Get all messages from database Message table.
     * @param {string} order - OrderBy setting.
     * @param {boolean} isAdmin - To retrieve data with is_hidden attribute.
     * @return {Array<IMessage>} All messages.
     */
    public async getAllMessages(
        order: "ASC" | "DESC"
    ): Promise<Array<IMessage> | false> {
        let messages: Array<IMessage> | false;

        // Guest
        // - Admin: Retrieve all messages
        // - Guest: Retrieve all messages that are not hidden
        if (order === "ASC") {
            messages = await DBgetAllMessagesASC_GUEST();
        } else {
            messages = await DBgetAllMessagesDESC_GUEST();
        }

        return messages;
    }

    /**
     * Adds a message into database Message table.
     * @param {string} message - The message to save.
     * @param {string} username - The username of guest.
     * @param {string} createdAt - The datetime of creation.
     */
    public async addMessage(
        username: string,
        message: string,
        createdAt: string
    ): Promise<boolean> {
        return await DBaddMessage(username, message, createdAt);
    }
}

// Class - END ==================================================================

// Object init
const myMessageActions: IMessageActions = new MessageActions();

// APIs - START =================================================================

// Server API to test connection
export async function testConnection(): Promise<boolean> {
    return await myMessageActions.testConnection(true);
}

// Server API to get all messages
// - Returns false if database connection error
// - Returns false if database Messages table does not exist
export async function getAllMessages(
    order: "ASC" | "DESC"
): Promise<Array<IMessage> | false> {
    if (await myMessageActions.testConnection()) {
        return await myMessageActions.getAllMessages(order);
    } else {
        return false;
    }
}

// Server API to get add a message
// - Returns false if database connection error
export async function addMessage(
    username: string,
    message: string,
    createdAt: string
): Promise<boolean> {
    if (await myMessageActions.testConnection()) {
        return await myMessageActions.addMessage(username, message, createdAt);
    } else {
        return false;
    }
}

// APIs - END ===================================================================
