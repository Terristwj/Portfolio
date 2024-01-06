import { getEntries } from "../api/dbAction";

import PageAnimate from "../components/wrappers/PageAnimate";
import PageDefault from "../components/wrappers/PageDefault";

import Form from "../components/Guestbook/Form";
import EntryResults from "../components/Guestbook/EntryResults";

// Resets cache data after 5 sec
// export const revalidate = 5;

// Settings
const numEntries = 10;
const reloadInterval = 5000;

export default async function Guestbook() {
    let data = await getEntries(numEntries);

    return (
        <PageAnimate>
            <PageDefault title="Guestbook">
                <div className="w-full pt-8">
                    {/* Inputs */}
                    <Form />

                    {/* Display Results */}
                    <EntryResults
                        entries={data}
                        reloadInterval={reloadInterval}
                    />
                </div>
            </PageDefault>
        </PageAnimate>
    );
}
