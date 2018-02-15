import { Iproject } from "./iproject";

export class Project implements Iproject {
    constructor() {
        this.projectId=0;
        this.projectCode="";
        this.projectName="";
        this.description="";
        this.strength=0;
        this.logo="";
    }
    projectId: number;
    projectCode: string;
    projectName: string;
    description: string;
    strength: number;
    logo: string;
}
