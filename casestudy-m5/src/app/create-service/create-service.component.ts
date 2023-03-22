import { Content } from '@angular/compiler/src/render3/r3_ast';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {
  createServiceForm : FormGroup
  constructor() {
    this.createServiceForm = new FormGroup({
      idService : new FormControl(''),
      purpose : new FormControl(''),
      img :  new FormControl(''),
      content : new FormControl('',[Validators.required])
    })
   }
   createService(){
    console.log(this.createServiceForm)
   }
  ngOnInit(): void {
  }

}
