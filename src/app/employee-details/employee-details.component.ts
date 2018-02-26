import { Component, OnInit, Input } from '@angular/core';
import { Employee } from "../employees/employee";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  PageTitle = "Details of ";
  @Input() employee: Employee;
  constructor() { 
    this.employee = new Employee();
  }



}
