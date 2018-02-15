import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from "../../employees/employees.component";
import { EmployeesService } from "../../services/employees/employees.service";

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[EmployeesComponent],
  declarations: [EmployeesComponent],
  providers:[EmployeesService]
})
export class EmployeesModule { }
