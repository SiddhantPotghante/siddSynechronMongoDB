import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "../../home/home.component";

const homeRouteConfig: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(homeRouteConfig)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
