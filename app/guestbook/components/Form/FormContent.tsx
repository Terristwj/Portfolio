"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";

import {
    IconSend,
    IconRefresh,
    IconLoading,
} from "@/app/guestbook/components/Form/ReactIcons";
import FormButton from "@/app/guestbook/components/Form/FormButton";

import { API_DELAY_SECONDS } from "@/app/guestbook/constants";
import { wait } from "@/app/utils/utils";

interface FormContentProps {
    resetData: () => Promise<void>;
    isError: boolean;
}

export default function FormContent({
    resetData,
    isError,
}: FormContentProps): JSX.Element {
    // Button loading
    const { pending }: { pending: boolean } = useFormStatus();

    // Button refreshing
    const [refreshing, setRefreshing] = useState<boolean>(false);

    // Reset data - Enable spinner
    async function handleReset(): Promise<void> {
        // Enable spinner
        setRefreshing(true);
        // Minimum delay to prevent spam
        await wait(API_DELAY_SECONDS);
        // Reset display
        await resetData();
        // Disable spinner
        setRefreshing(false);
    }

    return (
        <>
            {/* Input message - START ======================================================= */}
            <input
                type="text"
                placeholder="Leave a message..."
                name="message"
                required
                disabled={pending || isError}
                autoComplete="off"
                className={
                    ((pending || refreshing || isError) &&
                        "opacity-50 cursor-not-allowed select-none") +
                    " pl-4 pr-32 py-2 mt-1 block w-full rounded-sm" +
                    // Placeholder
                    " placeholder:italic placeholder:black placeholder:dark:white" +
                    " hover:placeholder:text-teal-600 hover:placeholder:dark:text-teal-500" +
                    " focus:placeholder:text-teal-600 focus:placeholder:dark:text-teal-500" +
                    // Background, border, text
                    " bg-gray-100 border-gray-700 text-neutral-900" +
                    " dark:bg-neutral-800 dark:border-gray-100 dark:text-neutral-100" +
                    " hover:ring-teal-500 hover:border-teal-500" +
                    " focus:ring-teal-500 focus:border-teal-500"
                }
            />
            {/* Input message - END ========================================================= */}

            {/* Buttons - START ============================================================= */}
            <div
                className={
                    ((pending || refreshing || isError) &&
                        "cursor-not-allowed select-none") +
                    " absolute right-2 mt-1 h-7 font-medium flex gap-2"
                }
            >
                {pending || refreshing ? (
                    <>
                        {/* Loading Button - START ============================ */}
                        <FormButton type="button" disabled={true}>
                            <IconLoading />
                        </FormButton>
                        {/* Loading Button - END ============================== */}
                    </>
                ) : (
                    <>
                        {/* Send Button - START =============================== */}
                        <FormButton type="submit" disabled={isError}>
                            <IconSend />
                        </FormButton>
                        {/* Send Button - END ================================= */}

                        {/* Refresh Button - START ============================ */}
                        <FormButton
                            type="reset"
                            onClick={handleReset}
                            disabled={isError}
                        >
                            <IconRefresh />
                        </FormButton>
                        {/* Refresh Button - END ============================== */}
                    </>
                )}
            </div>
            {/* Buttons - END ============================================================= */}
        </>
    );
}
