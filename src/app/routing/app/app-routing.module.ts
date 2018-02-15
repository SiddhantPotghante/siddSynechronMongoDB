import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const defaultRoute: Routes = [
  {
      path: '',
      loadChildren: '../home/home.module#HomeModule'
  }
];
const homeRoute: Routes = [
  {
      path: 'home',
      loadChildren: '../home/home.module#HomeModule'
  }
];
const projectsRoute: Routes = [
  {
      path: 'projects',
      loadChildren: '../projects/projects.module#ProjectsModule'
  }
];
const employeesRoute: Routes = [
  {
      path: 'employees',
      loadChildren: '../employees/employees.module#EmployeesModule'
  }
];
const abcRoute: Routes = [
  {
      path: 'abc',
      loadChildren: '../abc/abc.module#AbcModule'
  }
];


const appRouteConfig: Routes = [
  ...homeRoute,
  ...employeesRoute,
  ...projectsRoute,
 // ...jphRoute,
  ...abcRoute,
  ...defaultRoute
];

@NgModule({
  imports: [RouterModule.forRoot(appRouteConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
