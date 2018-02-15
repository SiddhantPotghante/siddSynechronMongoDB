import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { MenuBarComponent } from "./menu-bar.component";

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    MenuBarComponent
  ],
  declarations: [
    MenuBarComponent
  ]
})
export class MenuBarModule { }
