"use client";

import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";

export default function FormContent() {
    // Button loading
    const { pending } = useFormStatus();

    const router = useRouter();
    return (
        <>
            {/* Input message START */}
            <input
                type="text"
                placeholder="Leave a message..."
                name="message"
                required
                disabled={pending}
                className={
                    (pending
                        ? "opacity-50 cursor-not-allowed select-none"
                        : "") +
                    " pl-4 pr-32 py-2 mt-1 block w-full rounded-sm bg-gray-100 border-gray-700 text-neutral-900 placeholder:italic" +
                    " dark:bg-neutral-800 dark:border-gray-100 dark:text-neutral-100" +
                    " focus:ring-teal-500 focus:border-teal-500"
                }
            ></input>
            {/* Input message END */}

            {/* Submit Button START */}
            <button
                type="submit"
                disabled={pending}
                className={
                    (pending ? "cursor-not-allowed select-none w-24" : "w-16") +
                    " flex items-center justify-center absolute right-2 mt-1 h-7 font-medium rounded" +
                    " bg-teal-500/30 text-teal-900/80 hover:bg-teal-500/45" +
                    " hover:text-teal-900 dark:bg-teal-900 dark:text-teal-400" +
                    " dark:hover:bg-teal-700 dark:hover:text-teal-300"
                }
            >
                {/* Submit Button Text START */}
                {pending ? (
                    <>
                        <div>Sending&nbsp;&nbsp;</div>
                        <svg
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                            className="animate-spin"
                        >
                            <path
                                fill="currentColor"
                                d="M8 0A8 8 0 00.002 7.812C.094 4.033 2.968 1 6.5 1 10.09 1 13 4.134 13 8a1.5 1.5 0 003 0 8 8 0 00-8-8zm0 16a8 8 0 007.998-7.812C15.906 11.967 13.032 15 9.5 15 5.91 15 3 11.866 3 8a1.5 1.5 0 00-3 0 8 8 0 008 8z"
                            />
                        </svg>
                    </>
                ) : (
                    "Send"
                )}
                {/* Submit Button Text END */}
            </button>

            <button
                type="button"
                onClick={() => router.refresh()}
                className="flex items-center justify-center absolute right-2 mt-1 h-7 font-medium rounded
                     bg-teal-500/30 text-teal-900/80 hover:bg-teal-500/45
                    hover:text-teal-900 dark:bg-teal-900 dark:text-teal-400
                    dark:hover:bg-teal-700 dark:hover:text-teal-300"
            >
                ref
            </button>
            {/* Submit Button END */}
        </>
    );
}
