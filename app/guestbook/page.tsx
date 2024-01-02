import { getEntries } from "../api/dbAction";

import Form from "../components/Guestbook/Form";
import PageAnimate from "../components/wrappers/PageAnimate";
import PageDefault from "../components/wrappers/PageDefault";

// Resets cache data after 5 sec
export const revalidate = 5;

export default async function Guestbook() {
    let data = await getEntries(10);

    return (
        <PageAnimate>
            <PageDefault title="Guestbook">
                <div className="w-full pt-8">
                    {/* Inputs */}
                    <Form />

                    {/* Display Results */}
                    <div className="flex flex-col space-y-2 font-medium">
                        {data.map((entry) => (
                            <div
                                key={entry.id}
                                className="w-full break-words leading-5"
                            >
                                <span className="text-teal-600 dark:text-teal-500">
                                    {entry.username}:
                                </span>{" "}
                                <span className="montserrat">
                                    {entry.message}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </PageDefault>
        </PageAnimate>
    );
}
