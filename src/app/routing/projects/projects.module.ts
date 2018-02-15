import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from "../../projects/projects.component";
import { ProjectDetailsComponent } from "../../project-details/project-details.component";
import { ProjectsService } from "../../services/projects/projects.service";

// import { EventsService } from "./services/events.service";


@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[ProjectDetailsComponent],
  declarations: [
    ProjectsComponent,
    ProjectDetailsComponent
  ],
  providers:[
    ProjectsService
  ]
  // providers: [EventsService]
})
export class ProjectsModule { }
