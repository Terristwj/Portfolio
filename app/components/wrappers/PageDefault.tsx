"use client";

interface PageDefaultProps {
    children: React.ReactNode;
    title: string;
    divider?: boolean;
    bottomGap?: boolean;
}

export default function PageDefault({
    children,
    title,
    divider = false,
    bottomGap = false,
}: PageDefaultProps): JSX.Element {
    return (
        <div
            className={`${
                (divider && "divide-y divide-gray-700 dark:divide-gray-100") +
                " mb-5"
            }`}
        >
            <div
                className={`${
                    (bottomGap && "pb-8") + " space-y-2 pt-5 md:space-x-5"
                }`}
            >
                <h1
                    className="font-extrabold tracking-tight poppins
                        text-black dark:text-white
                        text-3xl leading-9
                        sm:text-4xl sm:leading-10
                        md:text-6xl md:leading-13"
                >
                    {title}
                </h1>
            </div>

            {children}
        </div>
    );
}
