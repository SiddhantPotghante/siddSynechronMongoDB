import { Component, OnInit } from '@angular/core';

import { Employee } from "../employee";
import { EmployeesServiceMongoDB } from "../../services_MongoDB/employees/employees.service";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  private employee: Employee;
  private formSubmitted = false;

  private msgEmployeeAdded="Employee added successfully! Redirecting...";


  constructor(private _EmployeesServiceMongoDB: EmployeesServiceMongoDB) { }


  onSubmit(employeeForm){
    this._EmployeesServiceMongoDB.employees.push()

  }


}
