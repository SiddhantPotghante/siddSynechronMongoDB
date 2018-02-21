import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

import { Project } from "../../projects/project";

@Injectable()
export class ProjectsServiceMongoDB {

   //private mongoURL: string = "https://api.mongolab.com/api/1/databases/(DataBase_Name)/collections/";
   private mongoURL: string= "https://api.mongolab.com/api/1/databases/sidswap/collections/";
   //private apiKey: string = "(API_key_name)";
   private apiKey: string="8CElfGmeiIwc5errIFY3flpWvqq_HZnc";
   //collection name means table name
   private ProjectsCollection: string="Projects";
   private ProjectsConnectionString: string= this.mongoURL + this.ProjectsCollection + "?apiKey=" + this.apiKey;
  
 
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
   
   mongoSelectAll(): Observable<Project[]>{
     return this._http.get<Project[]>(this.ProjectsConnectionString);
   }
 
   mongoFindOneProject(id): Observable<Project[]>{
     return this._http.get<Project[]>(this.ProjectsConnectionString + '&q={"projectId": '+ id +'}');
   }
   
   mongoCountProjects(): Observable<Project[]>{
     return this._http.get<Project[]>(this.ProjectsConnectionString + '&c=true');
   }
 
 
 }
 

