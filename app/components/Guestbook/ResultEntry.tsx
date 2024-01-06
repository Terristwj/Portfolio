"use client";

import React, { useRef } from "react";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";

var rn = require("random-number");

interface LinkProps {
    username: string;
    message: string;
    imgSrc: string;
}

export default function ResultEntry({ username, message, imgSrc }: LinkProps) {
    const rotateVal = rn({
        min: -15,
        max: 15,
    }).toFixed(1);

    const ref = useRef<HTMLAnchorElement | null>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    // Sliding Hovers
    // Number - Elasticity
    // Percent - Min/Max screen travel limit

    // Sliding Hovers - Words
    // const wordTop = useTransform(mouseYSpring, [0, -0.5], ["50%", "100%"]);
    // const wordLeft = useTransform(mouseXSpring, [0.3, 0], ["60%", "80%"]);

    // Sliding Hovers - Images
    const imgTop = useTransform(mouseYSpring, [-0.5, 0], ["25%", "75%"]);
    const imgLeft = useTransform(mouseXSpring, [0, 0.3], ["70%", "80%"]);

    const handleMouseMove = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        const rect = ref.current!.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    return (
        <motion.a
            ref={ref}
            onMouseMove={handleMouseMove}
            initial="initial"
            whileHover="whileHover"
            className="relative flex items-center justify-between
                py-4 md:py-8
                group transition-colors duration-500"
        >
            <div>
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
                    className="block relative z-10
                        text-4xl font-bold
                        text-black dark:text-white
                        group-hover:text-teal-600
                        group-hover:dark:text-teal-500
                        md:text-6xl"
                >
                    {username.split("").map((char, i) => (
                        <motion.span
                            key={i}
                            variants={{
                                initial: { x: 0 },
                                whileHover: { x: 16 },
                            }}
                            transition={{ type: "spring" }}
                            className="inline-block"
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.span>
                <span
                    className="block relative z-10 mt-2
                        text-base
                        text-neutral-500
                        group-hover:text-black
                        group-hover:dark:text-white
                        transition-colors duration-500"
                >
                    {message}
                </span>
            </div>

            {/* <motion.span
                style={{
                    top: wordTop,
                    left: wordLeft,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                transition={{ type: "spring" }}
                className="absolute
                    rounded-lg object-cover
                    h-24 w-32
                    md:h-full md:w-64"
            >
                hey
            </motion.span> */}

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
                className="absolute noSelect
                    rounded-lg object-cover
                    h-24 w-32
                    md:h-48 md:w-64"
                draggable={false}
                alt={`Image for ${username} is missing`}
            />
        </motion.a>
    );
}
