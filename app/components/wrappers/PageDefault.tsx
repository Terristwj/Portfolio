"use client";

import FadingText from "@/app/components/Common/FadingText";

interface PageDefaultProps {
    children: React.ReactNode;
    title: string;
    divider?: boolean;
    bottomGap?: boolean;
}

export default function PageDefault({
    children,
    title,
    divider = false,
    bottomGap = false,
}: PageDefaultProps): JSX.Element {
    return (
        <div
            className={`${
                (divider && "divide-y divide-gray-700 dark:divide-gray-100") +
                " mb-5 noSelect"
            }`}
        >
            <div className={`${(bottomGap && "pb-8") + " pt-5"}`}>
                <FadingText
                    textType="word"
                    classNames="poppins
                        font-extrabold tracking-tight 
                        text-black dark:text-white
                        text-3xl leading-9
                        sm:text-4xl sm:leading-10
                        md:text-6xl md:leading-13"
                >
                    {title}
                </FadingText>
            </div>

            {children}
        </div>
    );
}
