import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbcComponent } from "../../abc/abc.component";

const abcRouteConfig: Routes = [
  {
    path: '',
    component: AbcComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(abcRouteConfig)],
  exports: [RouterModule]
})
export class AbcRoutingModule { }
