import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesComponent } from "../../employees/employees.component";
import { EmployeeDetailsComponent } from "../../employee-details/employee-details.component";

const employeesRouteConfig: Routes = [
  {
    path:'',
    component:EmployeesComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(employeesRouteConfig)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
