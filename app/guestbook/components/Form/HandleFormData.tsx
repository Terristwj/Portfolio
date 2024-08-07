"use client";

// For profanity check
import Filter from "bad-words";
import { isProfaneAI } from "@/app/api/openAI";

// Config - To control API usage
import { useOpenAI } from "@/app/guestbook/constants";

// For username cookie
import checkCookie from "@/app/guestbook/components/Form/Cookies";

/**
 * Check profanity, then add to database.
 * @summary
 * Check profanity using 'bad-words' package, then using openAI.
 * If profanity is detected, alert user.
 * Else, add to PlanetScale Prisma database.
 * @param {FormData} formData Retrieve message from input field.
 */
export default async function handleFormData(
    addMessage: (message: string, username: string) => void,
    formData: FormData
) {
    // Request for a name (Optional)
    const desiredName: string | null = prompt(
        "Enter a name (Leave blank to randomize)",
        ""
    );

    // input[name='message']
    const message: string = formData.get("message") as string;

    // Add custom words to filter
    let myFilter: Filter = new Filter();
    myFilter.addWords("autistic", "autism", "autist", "autistic person");

    // Max 191 characters
    if (message.length > 191) {
        alert("Message is too long!");
    }
    // Check for profanity using 'bad-words' package
    // Check for profanity using openAI
    else if (
        // 'bad-words' package
        myFilter.isProfane(message) ||
        (desiredName && myFilter.isProfane(desiredName)) ||
        // OpenAI
        (useOpenAI &&
            ((await isProfaneAI(message)) ||
                (desiredName && (await isProfaneAI(desiredName)))))
    ) {
        alert("You can't type that!");
    }
    // Update database
    else {
        // Actions
        addMessage(message, desiredName ? desiredName : checkCookie());
    }
}
