export interface Project{
    pid: number;
    name: string;
    description: string;
    createdBy: string;
    createdDate: Date;
    accessKey: String;
}


export interface ProjectExport{
    name: string;
    description: string;
    createdBy: String;
}