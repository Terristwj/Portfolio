"use client";

import { useState } from "react";

interface FadingTextProps {
    textType: "word" | "sentence";
    classNames?: string;

    children: string;
}

export default function FadingText({
    textType,
    classNames,

    children,
}: FadingTextProps): JSX.Element {
    const [loaded, setLoaded] = useState<boolean>(false);
    const [tokens, setTokens] = useState<string[]>([]);

    if (!loaded) {
        const delimiter: string = textType === "word" ? "" : " ";
        setTokens(children.split(delimiter));
        setLoaded(true);
    }

    return (
        <>
            {/* Split the words by token and fade when hovering */}
            {/* - hover animation fast, fade animation slow */}
            {tokens.map((word: string, index: number): JSX.Element => {
                const finalWord: string =
                    textType === "sentence" && index !== tokens.length - 1
                        ? word + " "
                        : word;
                return (
                    <span
                        key={index}
                        className={`${classNames}
                            transition-colors duration-1000 ease-in-out
                            hover:text-teal-600  hover:duration-300
                            dark:hover:text-teal-400`}
                    >
                        {finalWord}
                    </span>
                );
            })}
        </>
    );
}

// Shorthand for fading text - sentence
interface FProps {
    classNames?: string;
    children: string;
}
export function F({ children, classNames }: FProps): JSX.Element {
    return (
        <FadingText textType="sentence" classNames={classNames}>
            {children}
        </FadingText>
    );
}
