"use client";

import { useRef } from "react";

import FormContent from "./FormContent";
import handleFormData from "./HandleFormData";

export default function Form() {
    // Message input Field
    const formRef = useRef<HTMLFormElement>(null);

    return (
        <form
            action={(formData: FormData) => {
                handleFormData(formData);
                formRef.current?.reset(); // onSend reset input field
            }}
            ref={formRef}
            className="relative flex items-center text-sm mb-5"
        >
            {/* Required for useFormStatus() */}
            <FormContent />
        </form>
    );
}
