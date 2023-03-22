import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  editClientForm : FormGroup
  constructor() { 
    this.editClientForm = new FormGroup({
      idClient : new FormControl(''),
      clientName : new FormControl(''),
      dateOfBirth : new FormControl(''),
      idCard : new FormControl(''),
      phoneNumber : new FormControl(''),
      email : new FormControl(''),
      address : new FormControl('')
    })
  }
  editClient(){
    console.log(this.editClientForm)
  }
  ngOnInit(): void {
  }

}
