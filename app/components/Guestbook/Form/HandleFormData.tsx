"use client";

import { postEntry } from "../../../api/dbAction";

// For username cookie
import checkCookie from "./Cookies";

// For profanity check
// @ts-ignore
import Filter from "bad-words";
import { isProfaneAI } from "../../../api/openAI";

/**
 * Check profanity, then add to database.
 * @summary
 * Check profanity using 'bad-words' package, then using openAI.
 * If profanity is detected, alert user.
 * Else, add to PlanetScale Prisma database.
 * @param {FormData} formData Retrieve message from input field.
 */
export default async function handleFormData(formData: FormData) {
    // Debugging delay - 60 sec
    // await new Promise((resolve) => setTimeout(resolve, 60000));

    // input[name='message']
    const message = formData.get("message") as string;

    // Add custom words to filter
    let myFilter = new Filter();
    myFilter.addWords("autistic", "autism", "autist", "autistic person");

    // Max 191 characters
    if (message.length > 191) {
        alert("Message is too long!");
    }
    // Check for profanity using 'bad-words' package
    // Check for profanity using openAI
    else if (myFilter.isProfane(message) || (await isProfaneAI(message))) {
        alert("You can't type that!");
    }
    // onSend update database
    else {
        await postEntry(message, checkCookie());
    }
}
