"use client";

import PageAnimate from "@/app/components/Wrappersa/PageAnimate";
import PageDefault from "@/app/components/Wrappersa/PageDefault";

// Homepage Components
import Hero from "@/app/components/Homepage/Hero";

// Settings
import { MyName, TypewriterWords, SocialMediaLinks } from "@/app/constants";

export default function About(): JSX.Element {
    return (
        <PageAnimate>
            <PageDefault title="About Me" divider={true} bottomGap={true}>
                <Hero
                    myName={MyName}
                    typeWriterWords={TypewriterWords}
                    socialMediaLinks={SocialMediaLinks}
                />
            </PageDefault>
        </PageAnimate>
    );
}
