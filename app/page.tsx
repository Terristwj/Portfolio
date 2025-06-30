"use client";

import PageAnimate from "@/app/components/Wrappers/PageAnimate";
import PageDefault from "@/app/components/Wrappers/PageDefault";

// Homepage Components
import Hero from "@/app/components/Homepage/Hero";

// Settings
import { ProfileProps } from "@/app/constants";

export default function About(): JSX.Element {
    return (
        <PageAnimate>
            <PageDefault title="About Me" divider={true} bottomGap={true}>
                <Hero ProfileProps={ProfileProps} />
            </PageDefault>
        </PageAnimate>
    );
}
