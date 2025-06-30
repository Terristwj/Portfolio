"use client";

// For profanity check
import Filter from "bad-words";
import { isProfaneAI } from "@/app/api/openAI";

// Config - To control API usage
import {
    USE_OPENAI,
    NAME_MAX_LENGTH,
    MESSAGE_MAX_LENGTH,
} from "@/app/guestbook/constants";

// For username cookie
import checkCookie from "@/app/guestbook/components/Form/Cookies";

//

/**
 * Check profanity, then add to database.
 * @summary
 * Check profanity using 'bad-words' package, then using openAI.
 * If profanity is detected, alert user.
 * Else, add to JSON database.
 * @param {FormData} formData Retrieve message from input field.
 */
export default async function handleFormData(
    addMessage: (
        username: string,
        message: string,
        createdAt: string
    ) => Promise<boolean>,
    desiredName: string,
    formData: FormData
) {
    // Trim
    desiredName = desiredName.trim();

    // input[name='message']
    const message: string = (formData.get("message") as string).trim();
    if (!message) {
        alert("Message is empty!");
        return;
    }

    // Combine name and message
    const nameAndMessage: string = `${
        desiredName ?? "Someone"
    } said: ${message}`;

    // Add custom words to filter
    let myFilter: Filter = new Filter();
    myFilter.addWords("autistic", "autism", "autist", "autistic person");

    // Character limit
    // - Name max 30 characters
    // - Message max 191 characters
    if (
        message.length > MESSAGE_MAX_LENGTH ||
        (desiredName && desiredName.length > NAME_MAX_LENGTH)
    ) {
        alert("Message is too long!");
    } else {
        try {
            // Check for profanity using 'bad-words' package
            // Check for profanity using openAI
            if (
                // 'bad-words' package
                myFilter.isProfane(message) ||
                (desiredName && myFilter.isProfane(desiredName)) ||
                // OpenAI
                (USE_OPENAI && (await isProfaneAI(nameAndMessage)))
            ) {
                alert("You can't type that!");
            }
            // Update database
            else {
                // Actions
                const success = await addMessage(
                    desiredName ? desiredName : checkCookie(),
                    message,
                    new Date().toISOString()
                );

                if (!success) {
                    alert(
                        "There was a database connection problem." +
                            "\nPlease contact me to fix it!"
                    );
                }
            }
        } catch (error: any) {
            console.log(error.message);
            alert(
                "There seems to be an error with the AI service." +
                    "\nPlease try again later or contact me to fix it!"
            );
        }
    }
}
