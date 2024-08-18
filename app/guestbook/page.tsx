"use client";

import { useState, useEffect } from "react";
import axios from "axios";

// Wrappers
import PageAnimate from "@/app/components/Wrappers/PageAnimate";
import PageDefault from "@/app/components/Wrappers/PageDefault";

// Content
import Form from "@/app/guestbook/components/Form/Form";
import ResultEntries from "@/app/guestbook/components/ResultEntries";

// Interface
import IMessage from "@/app/guestbook/components/MessageInterface";

export default function Guestbook(): JSX.Element | null {
    const [mounted, setMounted] = useState<boolean>(false);
    const [data, setData] = useState<Array<IMessage>>([]);

    // Error handler
    // - Database connection error
    const [isError, setIsError] = useState<boolean>(false);

    // useEffect required to prevent rendering issues
    useEffect((): void => {
        // Prevents rendering error logs
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    // Reusable reset
    async function resetData(): Promise<void> {
        await axios
            .get("/api/guestbook/guest", {
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

    async function addMessage(
        username: string,
        message: string,
        created_at: string
    ): Promise<boolean> {
        return await axios
            .post("/api/guestbook/guest", {
                username,
                message,
                created_at,
            })
            // Success
            .then((_: { data: true }): boolean => {
                return true;
            })
            // Error
            // - Database connection
            // - Backend connection
            .catch((error: any): boolean => {
                setIsError(true);
                console.warn(error);
                return false;
            });
    }

    return (
        <PageAnimate>
            <PageDefault title="Guestbook">
                <div className="w-full pt-8">
                    {/* Inputs */}
                    <Form
                        addMessage={addMessage}
                        resetData={resetData}
                        isError={isError}
                    />

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
                                    <br />
                                    Please contact me to fix it.
                                </h1>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Display Results */}
                            <ResultEntries
                                entries={data}
                                resetData={resetData}
                            />
                        </>
                    )}
                </div>
            </PageDefault>
        </PageAnimate>
    );
}
