"use client";

// My Projects
import IProject from "@/app/projects/components/ProjectInterface";
import projects from "@/data/projects/projects.json";

interface IProjectActions {
    getAllProjects(order: "ASC" | "DESC"): Array<IProject>;
    getHackathonProjects(order: "ASC" | "DESC"): Array<IProject>;
    getAcademicProjects(order: "ASC" | "DESC"): Array<IProject>;
}

class ProjectActions {
    private key: "completion_sequence";
    private hackathonProjects: IProject[];
    private academicProjects: IProject[];

    public constructor() {
        this.key = "completion_sequence";
        this.hackathonProjects = [];
        this.academicProjects = [];
        this.mapProjects();
    }

    /**
     * Map projects
     */
    private mapProjects(): void {
        projects.forEach((project: IProject): void => {
            project.project_type === "hackathon"
                ? this.hackathonProjects.push(project)
                : this.academicProjects.push(project);
        });
    }

    /**
     * Get all projects.
     * @return {Array<IProject>} All projects.
     */
    public getAllProjects(order: "ASC" | "DESC"): Array<IProject> {
        return this.sortBy(
            this.hackathonProjects.concat(this.academicProjects),
            order
        );
    }

    /**
     * Get hackathon projects.
     * @return {Array<IProject>} Hackathon projects.
     */
    public getHackathonProjects(order: "ASC" | "DESC"): Array<IProject> {
        return this.sortBy(this.hackathonProjects, order);
    }

    /**
     * Get academic projects.
     * @return {Array<IProject>} Academic projects.
     */
    public getAcademicProjects(order: "ASC" | "DESC"): Array<IProject> {
        return this.sortBy(this.academicProjects, order);
    }

    /**
     * Sort an array by a given key and order.
     * @param {Array<IProject>} data - The data to be sorted.
     * @param {string} order - The order to sort by.
     * @return {Array<IProject>} The sorted data.
     */
    private sortBy(
        data: Array<IProject>,
        order: "ASC" | "DESC"
    ): Array<IProject> {
        return data.sort((a: IProject, b: IProject): number => {
            if (order === "DESC") [a, b] = [b, a];
            return a[this.key] - b[this.key];
        });
    }
}

// Object init
const projectActions: IProjectActions = new ProjectActions();

// API to get all messages
export function getAllProjects(order: "ASC" | "DESC"): Array<IProject> {
    return projectActions.getAllProjects(order);
}

// API to get all messages
export function getHackathonProjects(order: "ASC" | "DESC"): Array<IProject> {
    return projectActions.getHackathonProjects(order);
}

// API to get all messages
export function getAcademicProjects(order: "ASC" | "DESC"): Array<IProject> {
    return projectActions.getAcademicProjects(order);
}
