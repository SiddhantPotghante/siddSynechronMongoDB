import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

import { Employee } from "../../employees/employee";

@Injectable()
export class EmployeesService {

  constructor(private _http: HttpClient) {

  }
  getAllEmployees(): Observable<Employee[]> {
      return this._http.get<Employee[]>("https://raw.githubusercontent.com/SiddhantPotghante/siddhant1/employees/empdb.json");
  }

}
