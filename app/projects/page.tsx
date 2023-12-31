import Image from "next/image";

import PageAnimate from "../components/wrappers/PageAnimate";
import projects from "./data/projects.json";
import ParallaxText from "../components/Projects/ParallaxText";

export default function Projects() {
    // Sort hackathons by id DESC
    const hackathons = sortByID_DESC(projects.hackathon);

    function sortByID_DESC(obj: Array<any>) {
        const id = "_id";
        return obj.sort((a: any, b: any) => b[id].localeCompare(a[id]));
    }

    return (
        <PageAnimate>
            <div className="divide-y divide-gray-700 dark:divide-gray-100 mb-5">
                <div className="space-y-2 pt-5 pb-8 md:space-x-5">
                    <h1
                        className="text-3xl font-extrabold leading-9 tracking-tight
                            text-black dark:text-white
                            sm:text-4xl sm:leading-10
                            md:text-6xl md:leading-13
                            poppins"
                    >
                        Projects
                    </h1>
                </div>

                <div
                    className="pt-8
                        grid gap-y-8
                        sm:gap-6 sm:grid-cols-2
                        md:gap-6
                        lg:gap-10 lg:grid-cols-3"
                >
                    {hackathons.map((project) => (
                        <article
                            key={project._id}
                            className="border rounded-md
                                border-black bg-white
                                dark:border-white dark:bg-black hover:border-teal-500
                                hover:shadow-xl hover:shadow-teal-100 hover:dark:shadow-teal-900
                                transition-all duration-500 ease-in-out
                                group relative"
                        >
                            <div
                                className="overflow-hidden noSelect
                                relative w-full h-56
                                border-b border-black dark:border-white"
                            >
                                <a href={project.link} target="_blank">
                                    <Image
                                        fill
                                        src={project.imgSrc}
                                        alt={project.title}
                                        className="object-cover
                                            group-hover:scale-125
                                            transition-all duration-500 ease"
                                        draggable={false}
                                    />
                                </a>
                            </div>

                            <div className="p-4 sm:p-6">
                                {/* Title */}
                                <h3
                                    className="text-lg font-bold poppins
                                        text-teal-600 dark:text-teal-400"
                                >
                                    <a href={project.link} target="_blank">
                                        {project.title}
                                    </a>
                                </h3>

                                {/* Subtitle */}
                                <h3
                                    className="font-medium
                                        text-black dark:text-white"
                                >
                                    {project.subtitle}
                                </h3>

                                {/* Overview */}
                                <p
                                    className="mt-2.5 mb-2.5
                                        text-sm leading-relaxed montserrat
                                        text-black dark:text-white"
                                >
                                    {project.overview}
                                </p>
                                
                                <section>
                                    <ParallaxText baseVelocity={-5}>
                                        Framer Motion
                                    </ParallaxText>
                                    <ParallaxText baseVelocity={5}>
                                        Scroll velocity
                                    </ParallaxText>
                                </section>

                                {/* Empty space between */}
                                <p className="mt-10"></p>

                                {/* Visit Site */}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    className="pb-5 noSelect
                                        absolute bottom-0
                                        text-teal-500 font-medium
                                        group-hover:ms-2
                                        transition-all duration-500"
                                >
                                    &rarr; Visit Site!
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </PageAnimate>
    );
}
