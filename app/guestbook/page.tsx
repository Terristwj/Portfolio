import { getEntries } from "../api/dbAction";

import PageAnimate from "../components/wrappers/PageAnimate";
import PageDefault from "../components/wrappers/PageDefault";

import Form from "../components/Guestbook/Form";
import ResultEntries from "../components/Guestbook/ResultEntries";

// Resets cache data after 5 sec
export const revalidate = 5;

// Settings
const numEntries = 10;
const reloadInterval = 10000;

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
                        entries={data}
                        reloadInterval={reloadInterval}
                    />
                </div>
            </PageDefault>
        </PageAnimate>
    );
}
