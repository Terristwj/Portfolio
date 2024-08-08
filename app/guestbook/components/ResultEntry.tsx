"use client";

import React, { useRef } from "react";
import {
    useMotionValue,
    MotionValue,
    motion,
    useSpring,
    useTransform,
} from "framer-motion";

import rn from "random-number";

import IMessage from "@/app/guestbook/components/MessageInterface";

interface ResultEntryProps {
    entry: IMessage;
    imgSrc: string;
}

export default function ResultEntry({
    entry,
    imgSrc,
}: ResultEntryProps): JSX.Element {
    const { username, message, created_at }: IMessage = entry;
    const date: Date = new Date(created_at);

    // Random rotation value
    // - Used to rotate the image
    const rotateVal: number = parseFloat(
        rn({
            min: -15,
            max: 15,
        }).toFixed(1)
    );

    const ref: React.MutableRefObject<HTMLAnchorElement | null> =
        useRef<HTMLAnchorElement | null>(null);

    // Mouse Position
    const x: MotionValue<number> = useMotionValue(0);
    const y: MotionValue<number> = useMotionValue(0);

    // Mouse Position Spring
    const mouseXSpring: MotionValue<any> = useSpring(x);
    const mouseYSpring: MotionValue<any> = useSpring(y);

    // Sliding Hovers
    // Number - Elasticity
    // Percent - Min/Max screen travel limit

    // Sliding Hovers - Words
    const wordTop = useTransform(mouseYSpring, [0, -0.5], ["50%", "100%"]);
    const wordLeft = useTransform(mouseXSpring, [0.3, 0], ["60%", "80%"]);

    // Sliding Hovers - Images
    const imgTop: MotionValue<string> = useTransform(
        mouseYSpring,
        [-0.5, 0],
        ["25%", "75%"]
    );
    const imgLeft: MotionValue<string> = useTransform(
        mouseXSpring,
        [0, 0.3],
        ["70%", "80%"]
    );

    // Reset values on mouse move
    const handleMouseMove = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ): void => {
        const rect: DOMRect = ref.current!.getBoundingClientRect();

        const width: number = rect.width;
        const height: number = rect.height;

        const mouseX: number = e.clientX - rect.left;
        const mouseY: number = e.clientY - rect.top;

        const xPct: number = mouseX / width - 0.5;
        const yPct: number = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    return (
        <motion.a
            ref={ref}
            onMouseMove={handleMouseMove}
            initial="initial"
            whileHover="whileHover"
            className="relative noSelect
                flex items-center justify-between
                py-4 md:py-8
                group transition-all duration-500"
        >
            {/* Left Item - START ================================================================ */}
            <div>
                {/* Username - START  ================================ */}
                <motion.span
                    variants={{
                        initial: { x: 0 },
                        whileHover: { x: -16 },
                    }}
                    transition={{
                        type: "spring",
                        staggerChildren: 0.075,
                        delayChildren: 0.25,
                    }}
                    className="block relative z-10 lemon
                        text-black dark:text-white
                        text-xl sm:text-2xl md:text-3xl
                        group-hover:text-teal-600
                        group-hover:dark:text-teal-500
                        group-hover:transition-colors 
                        group-hover:duration-500"
                >
                    {username.split("").map(
                        (char: string, i: number): JSX.Element => (
                            <motion.span
                                key={i}
                                variants={{
                                    initial: { x: 0 },
                                    whileHover: { x: 16 },
                                }}
                                transition={{ type: "spring" }}
                                className="inline-block
                                    hover:text-black hover:dark:text-white
                                    hover:transition-colors hover:duration-300"
                            >
                                {char}
                            </motion.span>
                        )
                    )}
                </motion.span>
                {/* Username - END  ================================== */}

                {/* Message - START  ================================= */}
                <span
                    className="block relative z-10 mt-2
                        tracking-tighter italic krona-one
                        text-neutral-500
                        text-sm sm:text-base md:text-lg
                        group-hover:text-black
                        group-hover:font-bold
                        group-hover:dark:text-white
                        group-hover:transition-colors 
                        group-hover:duration-500"
                >
                    &quot;
                    {message[0].toUpperCase() + message.slice(1)}
                    &quot;
                </span>
                {/* Message - END  =================================== */}
            </div>
            {/* Left Item - END ==================================================================== */}

            {/* Sliding Hovers - Words START */}
            <motion.span
                style={{
                    top: wordTop,
                    left: wordLeft,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                variants={{
                    initial: { scale: 0 },
                    whileHover: { scale: 1 },
                }}
                transition={{ type: "spring" }}
                className="absolute
                    rounded-lg object-cover
                    h-24 w-32
                    md:h-full md:w-64
                    hidden lg:flex 
                    items-center justify-center text-center"
            >
                {date.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                })}
                <br />
                posted
            </motion.span>
            {/* Sliding Hovers - Words END */}

            {/* Sliding Hovers - Images START */}
            <motion.img
                style={{
                    top: imgTop,
                    left: imgLeft,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                variants={{
                    initial: { scale: 0, rotate: `${-1 * rotateVal}deg` },
                    whileHover: { scale: 1, rotate: `${rotateVal}deg` },
                }}
                transition={{ type: "spring" }}
                src={imgSrc}
                className="absolute object-cover rounded-md
                    hover:rounded-none hover:md:h-full
                    h-24 w-32 
                    md:h-48 md:w-64
                    transition-[height] duration-500"
                draggable={false}
                alt={`Image for ${username} is missing`}
            />
            {/* Sliding Hovers - Images END */}
        </motion.a>
    );
}
