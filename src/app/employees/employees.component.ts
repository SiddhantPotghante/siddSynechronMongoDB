import { Component, OnInit } from '@angular/core';
import { Employee } from "./employee";

import { EmployeesService } from "../services/employees/employees.service";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

    constructor(private _EmployeesService: EmployeesService) {

    }

  title: string = "Synechron Employees List";
    subTitle: string = "Core Development Team!";

    employees: Employee[] = [];
  ngOnInit() {
      this._EmployeesService.getAllEmployees().subscribe(
          data => this.employees = data,
          err => console.log(err),
          () => console.log("Service call completed!")
      );
  }
    // employees: Employee[] = [
    //     {
    //         employeeId: 2378,
    //         employeeName: "Siddhant P",
    //         address: "Warje",
    //         city: "Pune",
    //         email: "a@b.com",
    //         phone: "+91 9898989898"
    //     },
    //     {
    //         employeeId: 2379,
    //         employeeName: "Siddhant P",
    //         address: "Warje",
    //         city: "Pune",
    //         email: "a@b.com",
    //         phone: "+91 9898989898"
    //     },
    //     {
    //         employeeId: 2380,
    //         employeeName: "Siddhant P",
    //         address: "Warje",
    //         city: "Pune",
    //         email: "a@b.com",
    //         phone: "+91 9898989898"
    //     },
    //     {
    //         employeeId: 2381,
    //         employeeName: "Siddhant P",
    //         address: "Warje",
    //         city: "Pune",
    //         email: "a@b.com",
    //         phone: "+91 9898989898"
    //     },
    //     {
    //         employeeId: 2382,
    //         employeeName: "Siddhant P",
    //         address: "Warje",
    //         city: "Pune",
    //         email: "a@b.com",
    //         phone: "+91 9898989898"
    //     }
    // ];

  

}
