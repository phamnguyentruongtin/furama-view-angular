import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Service } from './model/Service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  serviceFuramaList : Service[]
 
 
  

 
  constructor() { 
    this.serviceFuramaList = [
      {
        id : 1,
        content : "hay den voi chung toi ban se co nhung trai nghiem tuyet voi",
        purpose : "vui choi ngay he",
        img : "https://furamavietnam.com/wp-content/uploads/2018/07/Vietnam_Danang_Furama_Resort_Exterior_Beach.jpg"
      },{
        id : 2,
        content : "hay den voi chung toi ban se co nhung trai nghiem tuyet voi",
        purpose : "vui choi ngay he",
        img : "https://furamavietnam.com/wp-content/uploads/2018/07/Vietnam_Danang_Furama_Resort_Exterior_Beach.jpg"
      },
      {
        id : 1,
        content : "hay den voi chung toi ban se co nhung trai nghiem tuyet voi",
        purpose : "vui choi ngay he",
        img : "https://furamavietnam.com/wp-content/uploads/2018/07/Vietnam_Danang_Furama_Resort_Exterior_Beach.jpg"
      },
     
    ]

  }

  ngOnInit(): void {
  }

}
