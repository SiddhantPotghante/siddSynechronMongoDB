import { Component, OnInit } from '@angular/core';
import { Employee } from "./employee";

import { EmployeesService } from "../services/employees/employees.service";
import { EmployeesServiceMongoDB } from "../services_MongoDB/employees/employees.service";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

  SingleEmpDetailID= null;

    constructor(private _EmployeesService: EmployeesService,
      private _EmployeesServiceMongoDB: EmployeesServiceMongoDB) {

    }

    


  title: string = "Synechron Employees List";
    subTitle: string = "Core Development Team!";

    employees: Employee[] = [];
    employees1: Employee[]=[];
    SingleEmployee: Employee[]=[];
    CountOfEmployees= null;

  ngOnInit() {
      this._EmployeesService.getAllEmployees().subscribe(
          data => this.employees = data,
          err => console.log(err),
          () => console.log("Service call completed!")
      );

      this._EmployeesServiceMongoDB.mongoSelectAll().subscribe(
        data => this.employees1 = data,
        err => console.log(err),
        ()=> console.log("Hiiiii")
      );

      this._EmployeesServiceMongoDB.mongoCountEmployee().subscribe(
        data => this.CountOfEmployees = data,
        err => console.log(err),
        ()=> console.log("Count here")
      );
  }


  SelectRecord(){
    this._EmployeesServiceMongoDB.mongoFindOneEmployee(this.SingleEmpDetailID).subscribe(
      data => this.SingleEmployee = data,
      err => console.log(err),
      ()=> console.log("Found record with ID: "+ this.SingleEmpDetailID)
    );
    console.log(this.SingleEmployee);
  }
  
  // this.employees1 = data

  //api call to select all
  // SelectData(){
  //   this._EmployeesServiceMongoDB.mongoSelectAll().subscribe(
  //     data => this.employees1 = data,
  //     err => console.log(err),
  //     ()=> console.log("Hiiiii")
  //   )
  // }
  
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
