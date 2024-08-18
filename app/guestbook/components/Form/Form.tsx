"use client";

import { useRef, RefObject } from "react";

import FormContent from "@/app/guestbook/components/Form/FormContent";
import handleFormData from "@/app/guestbook/components/Form//HandleFormData";

import { API_DELAY_SECONDS } from "@/app/guestbook/constants";
import { wait } from "@/app/utils/utils";

interface FormProps {
    addMessage: (
        username: string,
        message: string,
        createdAt: string
    ) => Promise<boolean>;
    resetData: () => Promise<void>;
    isError: boolean;
}

export default function Form({
    addMessage,
    resetData,
    isError,
}: FormProps): JSX.Element {
    // Message input Field
    const formRef: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);

    async function onSubmit(formData: FormData): Promise<void> {
        // Debugging
        // console.log(formData.get("message"));

        // Request for a name (Optional)
        const desiredName: string =
            prompt("Enter a name (Leave blank to randomize)") || "";

        // Minimum delay to prevent spam
        await wait(API_DELAY_SECONDS);

        // Update JSON database
        // - Check filters
        //   - Client check for 'bad-words'
        //   - Server check with openAI API
        // - Backend overwrites JSON
        //   - JSON in frontend folder is modified (In the server)
        await handleFormData(addMessage, desiredName, formData);

        // onSend reset input field
        formRef.current?.reset();

        // Reset display
        // - Calls backend server to refetch
        await resetData();
    }

    return (
        <form
            action={onSubmit}
            ref={formRef}
            className="relative flex items-center text-sm mb-5"
        >
            {/* Required for useFormStatus() */}
            <FormContent resetData={resetData} isError={isError} />
        </form>
    );
}
