"use server";

// Database API
import {
    // Config
    DBtestConnection,
    DBcreateTable,
    DBdropTable,
    // READ
    DBgetAllMessagesASC_ADMIN,
    DBgetAllMessagesDESC_ADMIN,
    // WRITE
    DBsetIsHidden,
    DBaddMessage,
} from "@/app/api/guestbook/MessageDB";

// My Messages
import IMessage from "@/app/guestbook/components/MessageInterface";

// Constants
import { INITIAL_MESSAGES } from "@/app/api/guestbook/constants";

// Class - START ================================================================

interface IMessageActions {
    testConnection(debugLog?: true): Promise<boolean>;
    getAllMessages(order: "ASC" | "DESC"): Promise<Array<IMessage> | false>;
    setIsHidden(messageId: number, isHidden: boolean): Promise<boolean>;
    initializeTable(): Promise<boolean>;
    dropTable(): Promise<boolean>;
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

        // Admin
        // - Admin: Retrieve all messages
        // - Guest: Retrieve all messages that are not hidden
        if (order === "ASC") {
            messages = await DBgetAllMessagesASC_ADMIN();
        } else {
            messages = await DBgetAllMessagesDESC_ADMIN();
        }

        return messages;
    }

    /**
     * Update the visibility of a message in database Message table.
     * @param {number} messageId - The message ID to update.
     * @param {boolean} isHidden - The new value to set.
     */
    public async setIsHidden(
        messageId: number,
        isHidden: boolean
    ): Promise<boolean> {
        return await DBsetIsHidden(messageId, isHidden);
    }

    /**
     * Initialize the database Message table. And add two initial messages.
     * @return {Promise<boolean>} Table creation status.
     */
    public async initializeTable(): Promise<boolean> {
        const success = await DBcreateTable();
        if (!success) {
            return false;
        }

        // Add initial messages
        for (const message of INITIAL_MESSAGES) {
            await DBaddMessage(
                message.username,
                message.message,
                message.created_at
            );
        }
        return true;
    }

    /**
     * Drop the database Message table.
     * @return {Promise<boolean>} Table drop status.
     */
    public async dropTable(): Promise<boolean> {
        return await DBdropTable();
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

// Server API to update the visibility of a message
// - Returns false if database connection error
// - Returns false if message does not exist
export async function setIsHidden(
    messageId: number,
    isHidden: boolean
): Promise<boolean> {
    if (await myMessageActions.testConnection()) {
        return await myMessageActions.setIsHidden(messageId, isHidden);
    } else {
        return false;
    }
}

// Server API to initialize the database Messages table, with two initial messages
// - Returns false if database connection error
// - Returns false if table already exists
export async function initializeTable(): Promise<boolean> {
    if (await myMessageActions.testConnection()) {
        return await myMessageActions.initializeTable();
    } else {
        return false;
    }
}

// Server API to drop the database Messages table
// - Returns false if database connection error
// - Returns false if table does not exist
export async function dropTable(): Promise<boolean> {
    if (await myMessageActions.testConnection()) {
        return await myMessageActions.dropTable();
    } else {
        return false;
    }
}

// APIs - END ===================================================================
