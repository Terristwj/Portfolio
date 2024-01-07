import { getEntries } from "../api/dbAction";

import PageAnimate from "../components/wrappers/PageAnimate";
import PageDefault from "../components/wrappers/PageDefault";

import Form from "../components/Guestbook/Form/Form";
import ResultEntries from "../components/Guestbook/ResultEntries";

// Resets cache data after 5 sec
// export const revalidate = 5;

// Result-Entries Settings START
// Interval to revalidate all entries
const revalidateInterval = 30000;

// Hover Image Themes
const entryHoverImageThemes = {
    // Set 1
    1: "landmarks",
    2: "skylines",
    // Set 2
    3: "holiday",
    4: "fun",
    // Set 3
    5: "forest",
    6: "atlantis ocean",
    7: "mountain",
    // Set 4
    8: "ocean life animals",
    9: "animal exotic",
    10: "animal pet",
};
// Number of entries to display - must match the number of themes
const numEntries = Object.keys(entryHoverImageThemes).length;

// Per Entry Settings
const animateDuration = 0.8;
const staggerInterval = 0.1;

// Result-Entries Settings END

export default async function Guestbook() {
    let data = await getEntries(numEntries);

    return (
        <PageAnimate>
            <PageDefault title="Guestbook">
                <div className="w-full pt-8">
                    {/* Inputs */}
                    <Form />

                    {/* Display Results */}
                    <ResultEntries
                        // Entries
                        entries={data}
                        entryHoverImageThemes={entryHoverImageThemes}
                        // Entries Settings
                        revalidateInterval={revalidateInterval}
                        // Per Entry Settings
                        animateDuration={animateDuration}
                        staggerInterval={staggerInterval}
                    />
                </div>
            </PageDefault>
        </PageAnimate>
    );
}
