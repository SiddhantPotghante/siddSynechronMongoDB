import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

import { Employee } from "../../employees/employee";

@Injectable()
export class EmployeesService {

  //private mongoURL: string = "https://api.mongolab.com/api/1/databases/(DataBase_Name)/collections/";
  private mongoURL: string= "https://api.mongolab.com/api/1/databases/sidswap/collection/Employees/";
  //private apiKey: string = "(API_key_name)";
  private apiKey: string="8CElfGmeiIwc5errIFY3flpWvqq_HZnc";
  //collection name means table name
  private EmployeesCollection: string="Employees";
  

  //Full connection String of MongoDB connection
  //https://api.mongolab.com/api/1/databases/sidswap/collections/Employees?apiKey=8CElfGmeiIwc5errIFY3flpWvqq_HZnc

  constructor(private _http: HttpClient) {

  }
  // getAllEmployees(): Observable<Employee[]> {
  //     return this._http.get<Employee[]>("https://raw.githubusercontent.com/SiddhantPotghante/siddhant1/employees/empdb.json");
  // }

}
