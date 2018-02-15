import { Component, OnInit } from '@angular/core';
import { Project } from "./project";

import { ProjectsService } from "../services/projects/projects.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(private _ProjectsService: ProjectsService) {
    this.selectedEvent = new Project();
  }
  pageTitle: string = "Synechron Future Events List";
  subTitle: string = "Published by Synechron Hr, Pune!";
  selectedEvent: Project;
  onEventSelection(project: Project): void {
    this.selectedEvent = project;
  }

  projects: Project[] = [];
  ngOnInit() {
      this._ProjectsService.getAllProjects().subscribe(
          data => this.projects = data,
          err => console.log(err),
          () => console.log("Service call completed!")
      );
  }
  // Projects: Project[] = [
  //   {
  //     projectId: 1001,
  //     projectCode: 'SEMJQ3',
  //     projectName: 'Seminar on jQuery 3.x',
  //     description: 'Seminar will discuss all the new features of jQuery 3.x',
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     strength: 70,
  //     logo: 'images/jq3.png'
  //   },
  //   {
  //     projectId: 1001,
  //     projectCode: 'SEMJQ3',
  //     projectName: 'Seminar on jQuery 3.x',
  //     description: 'Seminar will discuss all the new features of jQuery 3.x',
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     strength: 70,
  //     logo: 'images/jq3.png'
  //   },
  //   {
  //     projectId: 1001,
  //     projectCode: 'SEMJQ3',
  //     projectName: 'Seminar on jQuery 3.x',
  //     description: 'Seminar will discuss all the new features of jQuery 3.x',
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     strength: 70,
  //     logo: 'images/jq3.png'
  //   },
  //   {
  //     projectId: 1001,
  //     projectCode: 'SEMJQ3',
  //     projectName: 'Seminar on jQuery 3.x',
  //     description: 'Seminar will discuss all the new features of jQuery 3.x',
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     strength: 70,
  //     logo: 'images/jq3.png'
  //   },
  //   {
  //     projectId: 6969,
  //     projectCode: 'Jhattuuuuuuu',
  //     projectName: 'Seminar on jQuery 3.x',
  //     description: 'Seminar will discuss all the new features of jQuery 3.x',
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     strength: 70,
  //     logo: 'images/jq3.png'
  //   }
  // ];
}
