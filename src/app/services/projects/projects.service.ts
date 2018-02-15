import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

import { Project } from "../../projects/project";

@Injectable()
export class ProjectsService {

  constructor(private _http: HttpClient) {

  }
  getAllProjects(): Observable<Project[]> {
    return this._http.get<Project[]>("https://raw.githubusercontent.com/SiddhantPotghante/siddhant1/employees/projectsdb.json");
}

}
