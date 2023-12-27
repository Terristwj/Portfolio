"use client";

import { useRef } from "react";
import { postEntry } from "../action";
import { useFormStatus } from "react-dom";

import generateRandomAnimal from "random-animal-name";

export default function Form() {
    // Message input Field
    const formRef = useRef<HTMLFormElement>(null);
    // Button loading
    const { pending } = useFormStatus();

    // /////// //
    // Cookies //
    // /////// //
    function setCookie(cname: string, cvalue: string, exdays: number) {
        const d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname: string) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function checkCookie() {
        let user = getCookie("username");
        if (user != "") {
            alert("Welcome again " + user);
        } else {
            user = generateRandomAnimal();
            if (user != "" && user != null) {
                setCookie("username", user, 30);
            }
        }
        return user;
    }

    return (
        <form
            action={async (formData) => {
                // onSend update database
                await postEntry(formData, checkCookie());
                // onSend reset input field
                formRef.current?.reset();
            }}
            ref={formRef}
            className="relative flex items-center text-sm mb-5"
            style={{ opacity: pending ? "0.7" : "1" }}
        >
            <input
                type="text"
                placeholder="Leave a message..."
                name="message"
                required
                disabled={pending}
                className="pl-4 pr-32 py-2 mt-1 block w-full rounded-sm bg-gray-100 border-gray-700 text-neutral-900 placeholder:italic
                dark:bg-neutral-800 dark:border-gray-100 dark:text-neutral-100
                focus:ring-teal-500 focus:border-teal-500"
            ></input>

            <button
                type="submit"
                disabled={pending}
                className="flex items-center justify-center absolute right-2 mt-1 h-7 w-16 font-medium rounded
                bg-teal-500/30 text-teal-900/80 hover:bg-teal-500/45 hover:text-teal-900
                dark:bg-teal-900 dark:text-teal-400 dark:hover:bg-teal-700 dark:hover:text-teal-300"
            >
                Send
            </button>
        </form>
    );
}
