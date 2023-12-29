import { getEntries } from "../api/dbAction";

import Form from "../components/Guestbook/Form";
import PageAnimate from "../components/Wrappers/PageAnimate";

// Resets cache data after 5 sec
export const revalidate = 5;

export default async function Guestbook() {
    let data = await getEntries();

    return (
        <PageAnimate>
            <div className="divide-y divide-gray-700 dark:divide-gray-100">
                <div className="space-y-2 pt-5 pb-8 md:space-x-5">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13 poppins">
                        Guestbook
                    </h1>
                </div>

                <div className="w-full">
                    <div className="max-w-[500px] mx-auto mt-8">
                        <Form />

                        <div className="flex flex-col space-y-2 montserrat font-medium">
                            {data.map((entry) => (
                                <div
                                    key={entry.id}
                                    className="w-full text-sm break-words"
                                >
                                    {entry.username}: {entry.message}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </PageAnimate>
    );
}
