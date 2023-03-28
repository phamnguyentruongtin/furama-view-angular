import { Component, OnInit } from '@angular/core';
import { Client } from './model/client';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clientList : Client[]
  constructor() {
    this.clientList = [{
        idClient : 1,
      clientName : 'pham nguyen truong tin',
      dateOfBirth : '2000/01/01',
      idCard : '12321312312321',
      phoneNumber : '0799144145',
      email : 'truongtin1206@gmail.com',
      address : '22 tran tong'
    
    },
    {
      idClient : 1,
    clientName : 'pham nguyen truong tin',
    //@ts-ignore
    dateOfBirth : '2000/01/01',
    idCard : '12321312312321',
    phoneNumber : '0799144145',
    email : 'truongtin1206@gmail.com',
    address : '22 tran tong'
  
  },
  {
    idClient : 1,
  clientName : 'pham nguyen truong tin',
  //@ts-ignore
  dateOfBirth : '2000/01/01',
  idCard : '12321312312321',
  phoneNumber : '0799144145',
  email : 'truongtin1206@gmail.com',
  address : '22 tran tong'

},
{
  idClient : 1,
clientName : 'pham nguyen truong tin',
//@ts-ignore
dateOfBirth : '2000/01/01',
idCard : '12321312312321',
phoneNumber : '0799144145',
email : 'truongtin1206@gmail.com',
address : '22 tran tong'

},
{
  idClient : 1,
clientName : 'pham nguyen truong tin',
//@ts-ignore
dateOfBirth : '2000/01/01',
idCard : '12321312312321',
phoneNumber : '0799144145',
email : 'truongtin1206@gmail.com',
address : '22 tran tong'

},
{
  idClient : 1,
clientName : 'pham nguyen truong tin',
//@ts-ignore
dateOfBirth : '2000/01/01',
idCard : '12321312312321',
phoneNumber : '0799144145',
email : 'truongtin1206@gmail.com',
address : '22 tran tong'

},]
   }

  ngOnInit(): void {
  }

}
