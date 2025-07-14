"use client";

type HackathonProps = {
    sentenceHoverCSS: string;
};

export default function Activities({
    sentenceHoverCSS,
}: HackathonProps): JSX.Element {
    return (
        <section
            id="activities"
            className={`${sentenceHoverCSS} container mx-auto my-12`}
        >
            <h2 className="text-2xl font-semibold mb-3">
                Leadership &amp; Volunteering
            </h2>
            <div className="space-y-3">
                <ActivitiesItem
                    title="Volunteer Facilitator – GDG Singapore"
                    descriptionHTML={
                        <>
                            – Google Cloud & I/O Extended Singapore 2025,
                            DevFest Singapore 2024
                            <br />– Fostering collaboration among 4,500+ GDG
                            Singapore members
                        </>
                    }
                />

                <ActivitiesItem
                    title="Technology & Google Developer Group Director – SMU .Hack"
                    descriptionHTML={
                        <>
                            – Organized and led 11 workshops, fireside chats,
                            and hackathons
                            <br />– Facilitated technical workshops on modern
                            frameworks
                            <br />– Collaborated with partners like Google,
                            Exabytes, and Cyber Youth Singapore
                        </>
                    }
                />

                <ActivitiesItem
                    title="Workshop Instructor &amp; Mentor – SMU Ellipsis"
                    descriptionHTML={
                        <>
                            – Instructed 3 programming workshops
                            <br />– Mentored peer-to-peer learning initiatives
                            <br />– Guided freshmen students through career in
                            software engineering
                        </>
                    }
                />
            </div>
        </section>
    );
}

type ActivitiesProps = {
    title: string;
    descriptionHTML: JSX.Element;
};

function ActivitiesItem({
    title,
    descriptionHTML,
}: ActivitiesProps): JSX.Element {
    return (
        <div>
            <strong>{title}</strong>
            <div className="text-sm text-gray-600 dark:text-gray-400">
                {descriptionHTML}
            </div>
        </div>
    );
}
