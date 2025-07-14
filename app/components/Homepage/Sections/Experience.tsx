"use client";

type HackathonProps = {
    sentenceHoverCSS: string;
};

export default function Experience({
    sentenceHoverCSS,
}: HackathonProps): JSX.Element {
    return (
        <section
            id="experience"
            className={`${sentenceHoverCSS} container mx-auto my-12`}
        >
            <h2 className="text-2xl font-semibold mb-3">Experience</h2>
            <div className="space-y-4">
                <ExperienceItem
                    title="Tax Technology Transformation Intern"
                    company="KPMG Singapore"
                    date="May 2025 – Present"
                />

                <ExperienceItem
                    title="Frontend Developer"
                    company="Accenture Southeast Asia"
                    date="May 2024 – Nov 2024"
                />

                <ExperienceItem
                    title="Solution Engineering Intern"
                    company="Usertip Pte Ltd"
                    date="May 2023 – Aug 2023"
                />

                <ExperienceItem
                    title="Junior Software Engineer Intern"
                    company="GT Robot Technology Pte Ltd"
                    date="Mar 2019 – Jun 2019"
                />
            </div>
        </section>
    );
}

type ExperienceItemProps = {
    title: string;
    company: string;
    date: string;
};

function ExperienceItem({
    title,
    company,
    date,
}: ExperienceItemProps): JSX.Element {
    return (
        <div>
            <h3 className="font-bold">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
                {company} &middot; {date}
            </p>

            {/* <ul className="list-disc ml-5 mt-2 text-gray-800 dark:text-gray-200">
                <li>
                    Documented business requirements,
                    achieving 95% stakeholder approval
                </li>
                <li>
                    Designed end-to-end tests, cutting cycle
                    time by 30%
                </li>
                <li>
                    Built Generative AI tools, improving
                    efficiency by 25%
                </li>
                <li>
                    Maintained 99.5% system uptime post
                    go-live
                </li>
            </ul> */}
        </div>
    );
}
