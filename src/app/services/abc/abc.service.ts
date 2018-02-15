import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

import { abc } from "../../abc/abc";

@Injectable()
export class AbcService {

  constructor(private _http: HttpClient) {

  }
  getAllPosts(): Observable<abc[]> {
      return this._http.get<abc[]>("https://jsonplaceholder.typicode.com/posts");
  }

}
