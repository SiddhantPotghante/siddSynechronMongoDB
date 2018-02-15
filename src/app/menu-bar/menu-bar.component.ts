  import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor() { }
  logo:string="SE Portal";
  menuOptions:string[]=[
      'Home',
      'projects',
      'New Event',//not used
      'Jph Posts',//not used
      'About Us',
      'Contact Us',
      'employees',
      'abc'
  ];

  ngOnInit() {
  }

}
