"use client";

import { useState, useEffect } from "react";

// Wrappers
import PageAnimate from "@/app/components/Wrappersa/PageAnimate";
import PageDefault from "@/app/components/Wrappersa/PageDefault";

// Content
import Form from "@/app/guestbook/components/Form/Form";
import ResultEntries from "@/app/guestbook/components/ResultEntries";

// Interface
import IMessage from "@/app/guestbook/components/MessageInterface";

// Actions
import { getAllMessages, addMessage } from "@/app/api/guestbook/MessageActions";

export default function Guestbook(): JSX.Element | null {
    const [mounted, setMounted] = useState<boolean>(false);
    const [data, setData] = useState<Array<IMessage>>([]);

    // useEffect required to prevent rendering issues
    useEffect((): void => {
        // Prevents rendering error logs
        setMounted(true);

        // Calls backend to refetch
        resetData();
    }, []);

    if (!mounted) {
        return null;
    }

    // Reusable reset
    async function resetData(): Promise<void> {
        getAllMessages("DESC").then((response: Array<IMessage>): void => {
            setData(response);
        });
    }

    return (
        <PageAnimate>
            <PageDefault title="Guestbook">
                <div className="w-full pt-8">
                    {/* Inputs */}
                    <Form addMessage={addMessage} resetData={resetData} />

                    {/* Display Results */}
                    <ResultEntries entries={data} resetData={resetData} />
                </div>
            </PageDefault>
        </PageAnimate>
    );
}
