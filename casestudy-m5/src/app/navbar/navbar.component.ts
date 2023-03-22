import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  url1 : String = "/home"
  url2 : String = "employee"
  url3 : String = "customer"
  url4 : String = "service"
  url5 : String = "contract"


  constructor() { }

  ngOnInit(): void {
  }

}
