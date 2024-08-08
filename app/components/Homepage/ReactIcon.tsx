"use client"

interface ReactIconProps {
    to: string;
    d: string;
}

export default function ReactIcon({ to, d }: ReactIconProps): JSX.Element {
    return (
        <a href={to} target="_target">
            <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-teal-500 hover:text-teal-600"
            >
                <path d={d} />
            </svg>
        </a>
    );
}
