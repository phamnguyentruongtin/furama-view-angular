import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { service } from './model/service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  serviceFuramaList : service[]
 
 
  

 
  constructor() { 
    this.serviceFuramaList = [
      {
        idService : 1,
        content : "hay den voi chung toi ban se co nhung trai nghiem tuyet voi",
        purpose : "vui choi ngay he",
        img : "https://furamavietnam.com/wp-content/uploads/2018/07/Vietnam_Danang_Furama_Resort_Exterior_Beach.jpg"
      },{
        idService : 2,
        content : "hay den voi chung toi ban se co nhung trai nghiem tuyet voi",
        purpose : "vui choi ngay he",
        img : "https://furamavietnam.com/wp-content/uploads/2018/07/Vietnam_Danang_Furama_Resort_Exterior_Beach.jpg"
      },
      {
        idService : 1,
        content : "hay den voi chung toi ban se co nhung trai nghiem tuyet voi",
        purpose : "vui choi ngay he",
        img : "https://furamavietnam.com/wp-content/uploads/2018/07/Vietnam_Danang_Furama_Resort_Exterior_Beach.jpg"
      },
     
    ]

  }

  ngOnInit(): void {
  }

}
