"use client";

type HackathonProps = {
    sentenceHoverCSS: string;
};

export default function Education({
    sentenceHoverCSS,
}: HackathonProps): JSX.Element {
    return (
        <section
            id="education"
            className={`${sentenceHoverCSS} container mx-auto my-12`}
        >
            <h2 className="text-2xl font-semibold mb-3">Education</h2>
            <div className="space-y-4">
                <EducationItem
                    institution="Singapore Management University"
                    date="2022 – Present"
                    descriptionHTML={
                        <>
                            BSc Information Systems (Digital Cloud Solutioning
                            &amp; Business Analytics)
                            <br />
                            (GPA 3.15/4.00)
                        </>
                    }
                />

                <EducationItem
                    institution="Nanyang Polytechnic"
                    date="2017 – 2020"
                    descriptionHTML={
                        <>
                            Diploma in Business Informatics
                            <br />
                            (GPA 3.73/4.00)
                        </>
                    }
                />
            </div>
        </section>
    );
}

type EducationItemProps = {
    institution: string;
    date: string;
    descriptionHTML: JSX.Element;
};

function EducationItem({
    institution,
    date,
    descriptionHTML,
}: EducationItemProps): JSX.Element {
    return (
        <div>
            <strong>{institution}</strong>
            <span className="float-end">{date}</span>
            <div className="text-sm text-gray-600 dark:text-gray-400">
                {descriptionHTML}
            </div>
        </div>
    );
}
