import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";


import { AbcRoutingModule } from './abc-routing.module';
import { AbcComponent } from "../../abc/abc.component";
import { AbcService } from "../../services/abc/abc.service";

@NgModule({
  imports: [
    CommonModule,
    AbcRoutingModule,
    HttpClientModule
  ],
  exports:[
    AbcComponent
  ],
  declarations: [AbcComponent],
  providers:[
    AbcService
  ]
})
export class AbcModule { }
