
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-serivice',
  templateUrl: './edit-serivice.component.html',
  styleUrls: ['./edit-serivice.component.css']
})
export class EditSeriviceComponent implements OnInit {
  editServiceForm : FormGroup
  
  constructor() {
    this.editServiceForm = new FormGroup({
      idService : new FormControl('',[Validators.min(1)]),
      purpose : new FormControl('',[Validators.required]),
      img : new FormControl('',[Validators.required]),
      content : new FormControl('',[Validators.required])
    })
   }
   editService(){
    console.log(this.editServiceForm)
    
   }
  ngOnInit(): void {
  }

}
