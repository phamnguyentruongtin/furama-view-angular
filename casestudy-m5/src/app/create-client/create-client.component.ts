import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  creatClientForm : FormGroup
  constructor() { 
    this.creatClientForm = new FormGroup({
      idClient : new FormControl(''),
      clientName : new FormControl(''),
      dateOfBirth : new FormControl(''),
      idCard : new FormControl(''),
      phoneNumber : new FormControl(''),
      email : new FormControl(''),
      address : new FormControl('')
    })
  }
  createClient(){
    console.log(this.creatClientForm)
  }
  ngOnInit(): void {
  }

}
