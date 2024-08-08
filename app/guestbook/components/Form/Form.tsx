"use client";

import { useRef, RefObject } from "react";

import FormContent from "@/app/guestbook/components/Form/FormContent";
import handleFormData from "@/app/guestbook/components/Form//HandleFormData";

import { ApiDelaySeconds } from "@/app/guestbook/constants";
import { wait } from "@/app/utils/utils";

interface FormProps {
    addMessage: (message: string, username: string) => void;
    resetData: () => Promise<void>;
}

export default function Form({
    addMessage,
    resetData,
}: FormProps): JSX.Element {
    // Message input Field
    const formRef: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);

    async function onSubmit(formData: FormData): Promise<void> {
        // Debugging
        // console.log(formData.get("message"));

        // Minimum delay to prevent spam
        await wait(ApiDelaySeconds);

        // Update JSON database
        // - Check filters
        //   - Client check for 'bad-words'
        //   - Server check with openAI API
        // - Backend overwrites JSON
        //   - JSON in frontend folder is modified (In the server)
        await handleFormData(addMessage, formData);

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
            <FormContent resetData={resetData} />
        </form>
    );
}
