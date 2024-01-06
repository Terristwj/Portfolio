"use client";

import IProject from "./ProjectInterface";

import projects from "../../projects/data/projects.json";

// var rn = require("random-number");

// Project object
class ProjectActions {
    constructor() {}

    /**
     * Get all projects.
     * @return {Array<IProject>} All projects.
     */
    getAllProjects(order: "ASC" | "DESC"): Array<IProject> {
        return this.sortBy(projects.hackathon.concat(projects.academic), order);
    }

    /**
     * Get hackathon projects.
     * @return {Array<IProject>} Hackathon projects.
     */
    getHackathonProjects(order: "ASC" | "DESC"): Array<IProject> {
        return this.sortBy(projects.hackathon, order);
    }

    /**
     * Get academic projects.
     * @return {Array<IProject>} Academic projects.
     */
    getAcademicProjects(order: "ASC" | "DESC"): Array<IProject> {
        return this.sortBy(projects.academic, order);
    }

    /**
     * Sort an array by a given key and order.
     * @param {Array<IProject>} data - The data to be sorted.
     * @param {string} key - The key to sort by.
     * @param {string} order - The order to sort by.
     * @return {Array<IProject>} The sorted data.
     */
    sortBy(data: Array<IProject>, order: "ASC" | "DESC"): Array<IProject> {
        const key = "completion_sequence";
        return data.sort((a: IProject, b: IProject) => {
            if (order === "DESC") [a, b] = [b, a];
            return a[key] - b[key];
        });
    }

    /**
     * Return a random existing image_src.
     * @summary Get all projects, then return a random image_src.
     * @return {Array<IProject>} The sorted data.
     */
    // getRandomImageSrc(): string {
    //     const projects = this.getAllProjects("DESC");
    //     const totalLength = projects.length;

    //     const randomIndex = rn({
    //         min: 0,
    //         max: totalLength - 1,
    //         integer: true,
    //     });
    //     return projects[randomIndex].img_src;
    // }
}

export default ProjectActions;
