export default interface IProject {
    completion_sequence: number;
    project_type: string | "academic" | "hackathon";
    title: string;
    subtitle: string;
    overview: string;
    links: Array<Array<string>>;
    img_src: string;
    tech_stack: Array<string>;
}
