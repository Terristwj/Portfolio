import Form from "../components/Form";
import prisma from "../db";

async function getEntries() {
    const data = await prisma.guestbook.findMany({
        // Msg display limit
        take: 10,
        orderBy: {
            created_at: "desc",
        },
    });

    return data;
}

// Retrieve new data after 60 sec
export const revalidate = 60;

export default async function Guestbook() {
    const data = await getEntries();

    return (
        <div className="divide-y divide-gray-700 dark:divide-gray-100">
            <div className="space-y-2 pt-5 pb-8 md:space-x-5">
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13">
                    Guestbook
                </h1>
            </div>

            <div className="w-full">
                <div className="max-w-[500px] mx-auto mt-8">
                    <Form />

                    <div className="flex flex-col space-y-2">
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
    );
}
