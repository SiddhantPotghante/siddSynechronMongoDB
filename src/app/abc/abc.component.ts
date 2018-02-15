import { Component, OnInit } from '@angular/core';

import { AbcService } from "../services/abc/abc.service";
import { abc } from "./abc";

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent implements OnInit {

  constructor(private _AbcService: AbcService) {

  }
  pageTitle:string="Json Placeholder's Post Data!";
  abcs: abc[] = [];
  ngOnInit() {
      this._AbcService.getAllPosts().subscribe(
          data => this.abcs = data,
          err => console.log(err),
          () => console.log("Service call completed!")
      );
  }

}
