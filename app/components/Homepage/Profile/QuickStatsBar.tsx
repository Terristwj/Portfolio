"use client";

type QuickStatsBarProps = {
    numberString: string;
    label: string;
};

export default function QuickStatsBar({
    numberString,
    label,
}: QuickStatsBarProps): JSX.Element {
    return (
        <div
            className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-3
                transition-all duration-300 ease-in-out
                hover:bg-teal-100 dark:hover:bg-teal-900/30
                hover:shadow-lg hover:shadow-teal-500/20 dark:hover:shadow-teal-400/20
                hover:scale-105 hover:-translate-y-1
                border border-transparent hover:border-teal-200 dark:hover:border-teal-700
                group"
        >
            <div
                className="font-bold text-teal-600 dark:text-teal-400
                    group-hover:text-teal-700 dark:group-hover:text-teal-300
                    transition-colors duration-300"
            >
                {numberString}
            </div>
            <div
                className="text-xs text-gray-600 dark:text-gray-400
                    group-hover:text-gray-700 dark:group-hover:text-gray-300
                    transition-colors duration-300"
            >
                {label}
            </div>
        </div>
    );
}
