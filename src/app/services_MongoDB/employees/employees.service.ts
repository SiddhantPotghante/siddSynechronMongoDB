import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

import { Employee } from "../../employees/employee";

@Injectable()
export class EmployeesServiceMongoDB {

  employees=[];

  //private mongoURL: string = "https://api.mongolab.com/api/1/databases/(DataBase_Name)/collections/";
  private mongoURL: string= "https://api.mongolab.com/api/1/databases/sidswap/collections/";
  //private apiKey: string = "(API_key_name)";
  private apiKey: string="8CElfGmeiIwc5errIFY3flpWvqq_HZnc";
  // private apiKey:any;
  // private apiKey1:any;
  //collection name means table name
  private EmployeesCollection: string="Employees";
  private EmployeesConnectionString: string= this.mongoURL + this.EmployeesCollection + "?apiKey=" + this.apiKey;
  private EmployeesConnectionString1: string= this.mongoURL + this.EmployeesCollection + "?apiKey=" ;
 

  //Full connection String of MongoDB connection
  //https://api.mongolab.com/api/1/databases/sidswap/collections/Employees?apiKey=8CElfGmeiIwc5errIFY3flpWvqq_HZnc

  constructor(private _http: HttpClient) {

  }
  // getAllEmployees(): Observable<Employee[]> {
  //     return this._http.get<Employee[]>("https://raw.githubusercontent.com/SiddhantPotghante/siddhant1/employees/empdb.json");
  // }
  // mongoSelectAll(): Observable<Employee[]>{
  //   return this._http.get<Employee[]>(this.EmployeesConnectionString);
	// }
  
  // mongoSelectOne(collection: string, field: string, sort: string): Observable<Employee[]> {
  //   return this._http.get(this.EmployeesConnectionString + '?f=' + field + '&s=' + sort + '&l=1');
  // }


  // ngOnInit(){
  //   alert("done");
  //   this._http.get('http://localhost:8081/apikey').subscribe(data => {
  //   console.log(data);
  //   this.apiKey1=data;
  //   alert(this.apiKey);
  // });
  // this.apiKey=this.apiKey1.key;
  // }
	
	mongoSelectAll(apikkey): Observable<Employee[]>{
    return this._http.get<Employee[]>(this.EmployeesConnectionString1 + this.apiKey);
	}

	mongoFindOneEmployee(id): Observable<Employee[]>{
		return this._http.get<Employee[]>(this.EmployeesConnectionString + '&q={"employeeId": '+ id +'}');
  }
  
  mongoCountEmployee(): Observable<Employee[]>{
		return this._http.get<Employee[]>(this.EmployeesConnectionString + '&c=true');
  }
  
//   getApiKey()
// {
//   this._http.get('http://localhost:8081/apikey').subscribe(data => {
//     console.log(data);
//     this.apiKey=data;
//   });
//   // alert(this.apikey);
//   // console.log(this.apikey.key);
// }


}
