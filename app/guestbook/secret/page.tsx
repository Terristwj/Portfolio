"use client";

import { useState } from "react";
import axios from "axios";

// Wrappers
import PageAnimate from "@/app/components/Wrappers/PageAnimate";
import PageDefault from "@/app/components/Wrappers/PageDefault";

// Interface
import IMessage from "@/app/guestbook/components/MessageInterface";

// Result-Entries Settings
import {
    // Refresh messages
    REVALIDATE_INTERVAL,
} from "@/app/guestbook/constants";

export default function Guestbook(): JSX.Element | null {
    const [data, setData] = useState<Array<IMessage>>([]);
    const [hasInterval, setHasInterval] = useState<boolean>(false);

    // Admin logged in
    const [mounted, setMounted] = useState<boolean>(false);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);

    // Error handler
    // - Database connection error
    const [isError, setIsError] = useState<boolean>(false);

    // Toggle Messages Display
    const [isMessagesDisplayed, setIsMessagesDisplayed] =
        useState<boolean>(false);

    // To avoid parent (server-side) from having errors
    // - server-side components doesn't have window object
    if (typeof window !== "undefined") {
        if (!isAdmin && !isError && !mounted) {
            // Prevents double rendering
            setMounted(true);

            // Check if admin is logged in
            checkIsAdmin().then((isAdmin: boolean): void => {
                // Admin login successful
                if (isAdmin) {
                    // Only set interval once
                    if (!hasInterval) {
                        setHasInterval(true);

                        // Initial load
                        resetData();

                        // Every interval, refresh the data
                        setInterval(async (): Promise<void> => {
                            // Avoid using router.reload()
                            // - Reloading the page does not clear cache
                            await resetData();
                        }, REVALIDATE_INTERVAL);
                    }
                }
                // Admin login failed
                else {
                    setIsError(true);
                }
            });
        }
    }

    async function checkIsAdmin(): Promise<boolean> {
        const username: string = prompt("Enter username:") || "";
        const password: string = prompt("Enter password:") || "";

        return await axios
            .post(
                "/api/guestbook/admin",
                {
                    username,
                    password,
                },
                {
                    params: {
                        type: "admin",
                    },
                }
            )
            // Success
            .then((): boolean => {
                setIsAdmin(true);
                return true;
            })
            // Error
            // - Backend connection
            .catch((error: any): boolean => {
                setIsError(true);
                console.warn(error);
                return false;
            });
    }

    // Reusable reset
    async function resetData(): Promise<void> {
        await axios
            .get("/api/guestbook/admin", {
                params: {
                    order: "DESC",
                },
            })
            // Success
            .then((response: { data: Array<IMessage> }): void => {
                setIsError(false);
                setData(response.data);
            })
            // Error
            // - Database connection
            // - Backend connection
            .catch((error: any): void => {
                setIsError(true);
                console.warn(error);
            });
    }

    // Change is_hidden status
    async function changeHiddenStatus(
        message_id: number,
        new_is_hidden: boolean
    ): Promise<void> {
        const username: string = prompt("Enter username:") || "";
        const password: string = prompt("Enter password:") || "";

        // Update status
        await axios
            .post(
                "/api/guestbook/admin",
                {
                    username,
                    password,
                    message_id,
                    new_is_hidden,
                },
                {
                    params: {
                        type: "hide",
                    },
                }
            )
            // Success
            .then(async (): Promise<void> => {
                await resetData();
            })
            // Error
            // - Database connection
            // - Backend connection
            .catch((error: any): void => {
                setIsError(true);
                console.warn(error);
            });
    }

    // Copy to Clipboard
    function copyToClipboard(e: React.MouseEvent<HTMLInputElement>): void {
        const HTMLElement: HTMLInputElement = e.target as HTMLInputElement;
        navigator.clipboard.writeText(HTMLElement.innerText);
    }

    return (
        <PageAnimate>
            <PageDefault title="Secret">
                {isError ? (
                    <>
                        {/* Error Message */}
                        <div
                            className="flex flex-col gap-5
                                justify-center align-center items-center"
                        >
                            <h1 className="text-center text-3xl text-red-500">
                                ⚠ Error
                            </h1>
                            <h1 className="text-center text-3xl text-red-500">
                                Database is down.
                            </h1>
                        </div>
                    </>
                ) : (
                    <>
                        {/* Display Messages */}
                        <div className="w-full pt-8">
                            {/* Toggle Messages Display */}
                            <button
                                className="border bold px-4 py-2
                                    min-w-24 max-h-16
                                    text-black dark:text-white
                                    border-black dark:border-white
                                    hover:text-teal-600 hover:dark:text-teal-400
                                    hover:border-teal-600 hover:dark:border-teal-400"
                                onClick={(): void =>
                                    setIsMessagesDisplayed(!isMessagesDisplayed)
                                }
                            >
                                {isMessagesDisplayed
                                    ? "Hide Messages"
                                    : "Display Messages"}
                            </button>

                            {/* Messages */}
                            {isMessagesDisplayed &&
                                data.map(
                                    (message: IMessage): JSX.Element => (
                                        <div
                                            key={message.id}
                                            className="border-b-2 py-5 
                                        flex justify-between items-center
                                        border-black dark:border-white"
                                        >
                                            <div
                                                key={message.id}
                                                className="flex flex-col"
                                            >
                                                <p className="text-sm">
                                                    ID: {message.id}
                                                </p>
                                                <p className="text-sm">
                                                    Username: {message.username}
                                                </p>
                                                <p className="text-sm">
                                                    Message: {message.message}
                                                </p>
                                                <p className="text-sm">
                                                    Created At:{" "}
                                                    {message.created_at}
                                                </p>
                                            </div>

                                            <button
                                                className="border bold p-4
                                                    min-w-24 max-h-16
                                                    text-black dark:text-white
                                                    border-black dark:border-white
                                                    hover:text-teal-600 hover:dark:text-teal-400
                                                    hover:border-teal-600 hover:dark:border-teal-400"
                                                onClick={(): Promise<void> =>
                                                    changeHiddenStatus(
                                                        message.id,
                                                        !message.is_hidden
                                                    )
                                                }
                                            >
                                                {message.is_hidden
                                                    ? "Unhide"
                                                    : "Hide"}
                                            </button>
                                        </div>
                                    )
                                )}
                        </div>

                        {/* Display JSON */}
                        <div
                            className="w-full pt-8 
                                select-all cursor-pointer"
                        >
                            <pre
                                id="json"
                                className="text-wrap p-2 sm:p-10
                                    border-2 border-black dark:border-white
                                    hover:text-teal-600 hover:dark:text-teal-400
                                    hover:border-teal-600 hover:dark:border-teal-400"
                                onClick={copyToClipboard}
                            >
                                {JSON.stringify(data, undefined, 2)}
                            </pre>
                        </div>
                    </>
                )}
            </PageDefault>
        </PageAnimate>
    );
}
