import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


import { Employee } from "../../employees/employee";
import { error } from 'util';

@Injectable()
export class EmployeesServiceMongoDB {

  //private mongoURL: string = "https://api.mongolab.com/api/1/databases/(DataBase_Name)/collections/";
  private mongoURL: string= "https://api.mongolab.com/api/1/databases/sidswap/collection/";
  //private apiKey: string = "(API_key_name)";
  private apiKey: string="8CElfGmeiIwc5errIFY3flpWvqq_HZnc";
  //collection name means table name
  private EmployeesCollection: string="Employees";
  private EmployeesConnectionString: string= this.mongoURL + this.EmployeesCollection + "?apiKey=" + this.apiKey
  private one=[];

  cats = [];
	files = [];
	users = [];
	totFiles = 0;

  //Full connection String of MongoDB connection
  //https://api.mongolab.com/api/1/databases/sidswap/collections/Employees?apiKey=8CElfGmeiIwc5errIFY3flpWvqq_HZnc

  constructor(private _http: HttpClient) {

    this._http.get(this.mongoURL + "cats" + '?apiKey=' + this.apiKey).map((res:Response) => res.json()).subscribe(
			data => this.cats = data,
			error => console.log("Error loading categories."),
			() => console.log("Categories loaded.")
		);
		// it seems like that more than 1000 files are not fetched with API
		this._http.get(this.mongoURL + "files" + '?apiKey=' + this.apiKey).map(res => res.json()).subscribe(
			data => {
				this.files = data;
				this.totFiles = this.files.length;
			},
			error => console.log("Error loading files."),
			() => console.log("Files loaded ("+this.totFiles+")")
		);
		this._http.get(this.mongoURL + "users" + '?apiKey=' + this.apiKey).map(res => res.json()).subscribe(
			data => this.users = data,
			error => console.log("Error loading users."),
			() => console.log("Users loaded.")
		);

  }
  // getAllEmployees(): Observable<Employee[]> {
  //     return this._http.get<Employee[]>("https://raw.githubusercontent.com/SiddhantPotghante/siddhant1/employees/empdb.json");
  // }
  mongoSelectAll(){
    return this._http.get(this.EmployeesConnectionString).map((res:Response) => res.json())
  }



}
