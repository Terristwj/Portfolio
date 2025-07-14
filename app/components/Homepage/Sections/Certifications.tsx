"use client";

type HackathonProps = {
    sentenceHoverCSS: string;
};

export default function Certifications({
    sentenceHoverCSS,
}: HackathonProps): JSX.Element {
    return (
        <section
            id="certifications"
            className={`${sentenceHoverCSS} container mx-auto my-12`}
        >
            <h2 className="text-2xl font-semibold mb-6">
                Latest Certifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <CertificationsItem
                    title="AWS Solutions Architect Associate"
                    href="https://www.credly.com/badges/aa6c33ad-15d1-48d0-8545-29c13efd0416/public_url"
                />

                <CertificationsItem
                    title="Google Professional ML Engineer"
                    href="https://www.credly.com/badges/c76b4490-0094-42d3-a58e-5709b4371cca/public_url"
                />

                <CertificationsItem
                    title="Google Cloud Digital Leader"
                    href="https://www.credential.net/6f336a03-cba6-4587-8aed-1f42657565a9"
                />
            </div>
        </section>
    );
}

type CertificationsItem = {
    title: string;
    href: string;
};

function CertificationsItem({ title, href }: CertificationsItem): JSX.Element {
    return (
        <div
            className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6
                transition-all duration-300 ease-in-out
                hover:bg-teal-100 dark:hover:bg-teal-900/30
                hover:shadow-lg hover:shadow-teal-500/20 dark:hover:shadow-teal-400/20
                hover:scale-105 hover:-translate-y-1
                border border-transparent hover:border-teal-200 dark:hover:border-teal-700
                group"
        >
            <a className="font-bold" href={href} target="_blank">
                {title}
            </a>
        </div>
    );
}
