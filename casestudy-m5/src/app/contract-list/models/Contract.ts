import { Client } from '../../client-list/model/Client';
import { Service } from '../../service-list/model/Service';
export interface Contract{
    id:string;
    serviceMakeContract? : Service
    clientMakeContract? : Client
    dateMakeContract : String
    nameContract : String
}