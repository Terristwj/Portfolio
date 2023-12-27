"use client";

import { useRef } from "react";
import { postEntry } from "../action";
import { useFormStatus } from "react-dom";

// For username cookie
import generateRandomAnimal from "random-animal-name";

// For profanity check
// @ts-ignore
import Filter from "bad-words";
import { isProfaneAI } from "../openAI";

export default function Form() {
    // Message input Field
    const formRef = useRef<HTMLFormElement>(null);

    // ///////////// //
    // Cookies START //
    // ///////////// //

    // Days for cookies to expire
    const expiryDays = 2;

    /**
     * Set Cookies for temporary username.
     * @param {String} cookieName
     * @param {String} cookieValue
     */
    function setCookie(cookieName: string, cookieValue: string) {
        // Create expiry date key-value pair
        const d = new Date();
        d.setTime(d.getTime() + expiryDays * 24 * 60 * 60 * 1000);
        let expires = "expires=" + d.toUTCString();

        // Set cookie for username
        // E.g. 'username=monkey;expiryInt;path=/'
        document.cookie =
            cookieName + "=" + cookieValue + ";" + expires + ";path=/";
    }

    /**
     * Get cookie for temporary username.
     * @param {String} cookieName
     * @return {String} Get username cookie, if possible. Else return empty string.
     */
    function getCookie(cookieName: string) {
        let name = cookieName + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let cookieArr = decodedCookie.split(";");
        for (let i = 0; i < cookieArr.length; i++) {
            let c = cookieArr[i];
            while (c.charAt(0) == " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    /**
     * Check if Cookies for temporary username exists.
     * @return {String} Temporary username.
     */
    function checkCookie() {
        // Get username cookie
        let user = getCookie("username");

        // If cookie doesn't exist, generate random animal
        if (user == "") {
            user = generateRandomAnimal();
            setCookie("username", user);
        }

        // Return temporary username
        return user;
    }
    // /////////// //
    // Cookies END //
    // /////////// //
    /**
     * Check profanity, then add to database.
     * @summary
     * Check profanity using 'bad-words' package, then using openAI.
     * If profanity is detected, alert user.
     * Else, add to PlanetScale Prisma database.
     * @param {FormData} formData Retrieve message from input field.
     */
    async function handleFormData(formData: FormData) {
        // Debugging delay - 60 sec
        // await new Promise((resolve) => setTimeout(resolve, 60000));

        // input[name='message']
        const message = formData.get("message") as string;

        // Check for profanity using 'bad-words' package
        // Check for profanity using openAI
        if (new Filter().isProfane(message) || (await isProfaneAI(message))) {
            alert("You can't type that!");
        }
        // onSend update database
        else {
            await postEntry(message, checkCookie());
        }

        // onSend reset input field
        formRef.current?.reset();
    }

    return (
        <form
            action={handleFormData}
            ref={formRef}
            className="relative flex items-center text-sm mb-5"
        >
            <FormContent />
        </form>
    );

    // Required for useFormStatus()
    function FormContent() {
        // Button loading
        const { pending } = useFormStatus();
        return (
            <>
                {/* Input message START */}
                <input
                    type="text"
                    placeholder="Leave a message..."
                    name="message"
                    required
                    disabled={pending}
                    className={
                        (pending
                            ? "opacity-50 cursor-not-allowed select-none"
                            : "") +
                        " pl-4 pr-32 py-2 mt-1 block w-full rounded-sm bg-gray-100 border-gray-700 text-neutral-900 placeholder:italic" +
                        " dark:bg-neutral-800 dark:border-gray-100 dark:text-neutral-100" +
                        " focus:ring-teal-500 focus:border-teal-500"
                    }
                ></input>
                {/* Input message END */}

                {/* Submit Button START */}
                <button
                    type="submit"
                    disabled={pending}
                    className={
                        (pending
                            ? "cursor-not-allowed select-none w-24"
                            : "w-16") +
                        " flex items-center justify-center absolute right-2 mt-1 h-7 font-medium rounded" +
                        " bg-teal-500/30 text-teal-900/80 hover:bg-teal-500/45" +
                        " hover:text-teal-900 dark:bg-teal-900 dark:text-teal-400" +
                        " dark:hover:bg-teal-700 dark:hover:text-teal-300"
                    }
                >
                    {/* Submit Button Text START */}
                    {pending ? (
                        <>
                            <div>Sending&nbsp;&nbsp;</div>
                            <svg
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                height="1em"
                                width="1em"
                                className="animate-spin"
                            >
                                <path
                                    fill="currentColor"
                                    d="M8 0A8 8 0 00.002 7.812C.094 4.033 2.968 1 6.5 1 10.09 1 13 4.134 13 8a1.5 1.5 0 003 0 8 8 0 00-8-8zm0 16a8 8 0 007.998-7.812C15.906 11.967 13.032 15 9.5 15 5.91 15 3 11.866 3 8a1.5 1.5 0 00-3 0 8 8 0 008 8z"
                                />
                            </svg>
                        </>
                    ) : (
                        "Send"
                    )}
                    {/* Submit Button Text END */}
                </button>
                {/* Submit Button END */}
            </>
        );
    }
}
