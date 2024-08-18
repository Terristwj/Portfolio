"use client";

// For username cookie
import generateRandomAnimal from "random-animal-name";

// Days for cookies to expire
import { COOKIES_EXPIRY_DAYS } from "@/app/guestbook/constants";

/**
 * Set Cookies for temporary username.
 * @param {String} cookieName
 * @param {String} cookieValue
 */
function setCookie(cookieName: string, cookieValue: string): void {
    // Create expiry date key-value pair
    const d: Date = new Date();
    d.setTime(d.getTime() + COOKIES_EXPIRY_DAYS * 24 * 60 * 60 * 1000);
    let expires: string = "expires=" + d.toUTCString();

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
function getCookie(cookieName: string): string {
    let name: string = cookieName + "=";
    let decodedCookie: string = decodeURIComponent(document.cookie);
    let cookieArr: string[] = decodedCookie.split(";");
    for (let i: number = 0; i < cookieArr.length; i++) {
        let c: string = cookieArr[i];
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
export default function checkCookie(): string {
    // Get username cookie
    let user: string = getCookie("username");

    // If cookie doesn't exist, generate random animal
    if (user == "") {
        user = generateRandomAnimal();
        setCookie("username", user);
    }

    // Return temporary username
    return user;
}
