"use client";

import { useState, useEffect } from "react";

// Wrappers
import PageAnimate from "@/app/components/Wrappers/PageAnimate";
import PageDefault from "@/app/components/Wrappers/PageDefault";

// Interface
import IMessage from "@/app/guestbook/components/MessageInterface";

// Actions
import { getAllMessages } from "@/app/api/guestbook/MessageActions";

export default function Guestbook(): JSX.Element | null {
    const [mounted, setMounted] = useState<boolean>(false);
    const [data, setData] = useState<Array<IMessage>>([]);

    // useEffect required to prevent rendering issues
    useEffect((): void => {
        // Prevents rendering error logs
        setMounted(true);

        // Calls backend to refetch
        getAllMessages("DESC").then((response: Array<IMessage>): void => {
            setData(response);
        });
    }, []);

    if (!mounted) {
        return null;
    }

    // Copy to Clipboard
    function copyToClipboard(data: any): void {
        navigator.clipboard.writeText(data.target.innerText);
    }

    return (
        <PageAnimate>
            <PageDefault title="Secret">
                <div
                    className="w-full pt-8 
                    select-all cursor-pointer"
                >
                    <pre
                        id="json"
                        className="text-wrap
                        p-2 sm:p-10

                        border-2
                        border-black dark:border-white
                        hover:border-teal-600 hover:dark:border-teal-400"
                        onClick={copyToClipboard}
                    >
                        {JSON.stringify(data, undefined, 2)}
                    </pre>
                </div>
            </PageDefault>
        </PageAnimate>
    );
}
