interface PageDefaultProps {
    children: React.ReactNode;
    title: string;
}

export default function PageDefault({ children, title }: PageDefaultProps) {
    return (
        <div className="divide-y divide-gray-700 dark:divide-gray-100 mb-5">
            <div className="space-y-2 pt-5 pb-8 md:space-x-5">
                <h1
                    className="text-3xl font-extrabold leading-9 tracking-tight
                            text-black dark:text-white
                            sm:text-4xl sm:leading-10
                            md:text-6xl md:leading-13
                            poppins"
                >
                    {title}
                </h1>
            </div>

            {children}
        </div>
    );
}
