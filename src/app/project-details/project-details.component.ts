import { Component, OnInit, Input } from '@angular/core';
import { Project } from "../projects/project";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {

  pageTitle: string = "Details of - ";
    @Input() project: Project;
    constructor() {
        this.project = new Project();
    }

}
