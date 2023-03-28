import { Client } from './../client-list/model/Client';
import { Service } from '../service-list/model/Service';
import { Component, OnInit } from '@angular/core';
import { Contract } from './models/Contract';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  contracts: Contract[] = [
      {
        id: "1",
        serviceMakeContract:{
        id:1,
        purpose:"Tom tat",
        img:"jssjsnsns",
        content:"Nhu cc",
      },clientMakeContract : {
          idClient : 1,
          clientName : "Tin",
          dateOfBirth : '12052003',
          idCard : '012250325023',
          phoneNumber : '115264715220',
          email : 'tkesmdasmdak',
          address : 'msdmmsadask'
        },dateMakeContract : '1205032322',
        nameContract : "thue nha"
    },
    {
      id: "1",
      serviceMakeContract:{
        id:1,
        purpose:"Tom tat",
        img:"jssjsnsns",
        content:"Nhu cc",
      },clientMakeContract : {
        idClient : 1,
        clientName : "Tin",
        dateOfBirth : '12052003',
        idCard : '012250325023',
        phoneNumber : '115264715220',
        email : 'tkesmdasmdak',
        address : 'msdmmsadask'
      },dateMakeContract : '1205032322',
      nameContract : "thue nha"
    },
    {
      id: "1",
      serviceMakeContract:{
        id:1,
        purpose:"Tom tat",
        img:"jssjsnsns",
        content:"Nhu cc",
      },clientMakeContract : {
        idClient : 1,
        clientName : "Tin",
        dateOfBirth : '12052003',
        idCard : '012250325023',
        phoneNumber : '115264715220',
        email : 'tkesmdasmdak',
        address : 'msdmmsadask'
      },dateMakeContract : '1205032322',
      nameContract : "thue nha"
    }
    , {
      id: "1",
      serviceMakeContract:{
        id:1,
        purpose:"Tom tat",
        img:"jssjsnsns",
        content:"Nhu cc",
      },clientMakeContract : {
        idClient : 1,
        clientName : "Tin",
        dateOfBirth : '12052003',
        idCard : '012250325023',
        phoneNumber : '115264715220',
        email : 'tkesmdasmdak',
        address : 'msdmmsadask'
      },dateMakeContract : '1205032322',
      nameContract : "thue nha"
    },
    {
      id: "1",
      serviceMakeContract:{
        id:1,
        purpose:"Tom tat",
        img:"jssjsnsns",
        content:"Nhu cc",
      },clientMakeContract : {
        idClient : 1,
        clientName : "Tin",
        dateOfBirth : '12052003',
        idCard : '012250325023',
        phoneNumber : '115264715220',
        email : 'tkesmdasmdak',
        address : 'msdmmsadask'
      },dateMakeContract : '1205032322',
      nameContract : "thue nha"
    },
    {
      id: "1",
      serviceMakeContract:{
        id:1,
        purpose:"Tom tat",
        img:"jssjsnsns",
        content:"Nhu cc",
      },clientMakeContract : {
        idClient : 1,
        clientName : "Tin",
        dateOfBirth : '12052003',
        idCard : '012250325023',
        phoneNumber : '115264715220',
        email : 'tkesmdasmdak',
        address : 'msdmmsadask'
      },dateMakeContract : '1205032322',
      nameContract : "thue nha"
    }

  ]



  constructor() {
  }

  ngOnInit(): void {
  }

}
