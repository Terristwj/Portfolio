"use client";

import { useRef, MutableRefObject } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
    children: Array<string>;
    baseVelocity: number;
    numSpaces?: number;
}

export default function ParallaxText({
    children,
    baseVelocity, // Positive -> Move left, Negative -> Move right
    numSpaces = 2,
}: ParallaxProps): JSX.Element {
    const hoverSpeedMultiply: number = 4;

    const baseX: MotionValue<number> = useMotionValue(0);
    const { scrollY }: { scrollY: MotionValue<number> } = useScroll();
    const scrollVelocity: MotionValue<number> = useVelocity(scrollY);
    const smoothVelocity: MotionValue<any> = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor: MotionValue<number> = useTransform(
        smoothVelocity,
        [0, 1000],
        [0, 5],
        {
            clamp: false,
        }
    );

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x: MotionValue<string> = useTransform(
        baseX,
        (v: number): string => `${wrap(-20, -45, v)}%`
    );

    const directionFactor: MutableRefObject<number> = useRef<number>(1);
    useAnimationFrame((t: number, delta: number) => {
        let moveBy: number =
            directionFactor.current * baseVelocity * (delta / 1000);

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    /**
     * The number of times to repeat the child text should be dynamically calculated
     * based on the size of the text and viewport. Likewise, the x motion value is
     * currently wrapped between -20 and -45% - this 25% is derived from the fact
     * we have four children (100% / 4). This would also want deriving from the
     * dynamically generated number of children.
     */
    return (
        <div
            className="overflow-hidden tracking-widest m-0 whitespace-nowrap flex flex-nowrap fira-code"
            onMouseOver={() => (baseVelocity *= hoverSpeedMultiply)}
            onMouseOut={() => (baseVelocity /= hoverSpeedMultiply)}
        >
            <motion.div className="flex" style={{ x }}>
                {/* Repeat 4 times */}
                {[...Array(4)].map((_: any, i1: number) => (
                    <span key={i1}>
                        {/* For each item in tech_items */}
                        {[...children].map((child: string, i2: number) => (
                            <span key={i2}>
                                <span
                                    className="select-all
                                    hover:font-extrabold
                                    hover:text-teal-600 hover:dark:text-teal-400"
                                >
                                    {child}
                                </span>
                                {/* Number of white-spaces */}
                                {[...Array(numSpaces)].map(
                                    (_: any, i3: number) => (
                                        <span key={i3}>&nbsp;</span>
                                    )
                                )}
                            </span>
                        ))}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
