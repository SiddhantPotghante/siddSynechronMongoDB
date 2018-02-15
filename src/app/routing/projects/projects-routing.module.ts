import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from "../../projects/projects.component";
import { ProjectDetailsComponent } from "../../project-details/project-details.component";

const projectsRouteConfig: Routes = [
  {
    path:'',
    component:ProjectsComponent
},
{
    path:':id',
    component:ProjectDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(projectsRouteConfig)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
