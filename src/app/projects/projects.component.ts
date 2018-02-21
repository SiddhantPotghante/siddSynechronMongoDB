import { Component, OnInit, Pipe } from '@angular/core';
import { Project } from "./project";
import { FormsModule } from '@angular/forms';

import { ProjectsService } from "../services/projects/projects.service";
import { ProjectsServiceMongoDB } from "../services_MongoDB/projects/projects.service";

import { SearchProjectPipe } from "../pipes/search-project.pipe";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
@Pipe({name:"SearchProjectPipe"})


export class ProjectsComponent {

  SingleProDetailID=null;
  constructor(private _ProjectsService: ProjectsService,
    private _ProjectsServicesMongoDB: ProjectsServiceMongoDB){
    this.selectedEvent = new Project();
  }
  pageTitle: string = "Synechron Future Events List";
  subTitle: string = "Published by Synechron Hr, Pune!";
  selectedEvent: Project;
  onEventSelection(project: Project): void {
    this.selectedEvent = project;
  }

  projects: Project[] = [];
  projects1: Project[] = [];
  ngOnInit() {
      this._ProjectsService.getAllProjects().subscribe(
          data => this.projects = data,
          err => console.log(err),
          () => console.log("Service call completed!")
      );

      this._ProjectsServicesMongoDB.mongoSelectAll().subscribe(
        data => this.projects1=data,
        err => console.log(err),
        () => console.log("Mongo service called Projets")
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
