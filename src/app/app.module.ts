import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
// import { EmployeesComponent } from './employees/employees.component';
// import { ProjectsComponent } from './projects/projects.component';
// import { ProjectDetailsComponent } from './project-details/project-details.component';
// import { MenuBarComponent } from './menu-bar/menu-bar.component';
// import { HomeComponent } from './home/home.component';

// import { HomeRoutingModule } from "./routing/home/home-routing.module";
import { AppRoutingModule } from "./routing/app/app-routing.module";
import { MenuBarModule } from "./menu-bar/menu-bar.module";
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
// import { AbcComponent } from './abc/abc.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    // AbcComponent,
    // EmployeesComponent,
    // ProjectsComponent,
    // ProjectDetailsComponent,
    // MenuBarComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    MenuBarModule,
    // MenuBarComponent,
    // HomeRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
