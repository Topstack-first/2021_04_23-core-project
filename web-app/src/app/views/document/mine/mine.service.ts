import { Injectable } from '@angular/core';
import { DocumentService, TYPE } from 'src/app/util/data-service';
/*
export interface Element {
    title:string;
    author:string;
    department:string;
    stakeholder:string;
    event:string;
    location:string;
    category:string;
    well:string;
    date:string;
    document_date:string;
    action:string;
}

const data: Element[] = [
   {
        title:'Block CA2 JMC Q1 2016 Final', 
        author:'Syed',
        department:'Project',
        stakeholder:'Technical Committee and Review',
        event:'-',
        location:'PCBL Office Brunei',
        category:'Technical',
        well:'-',
        date:'Published 31-01-2021',
        document_date:'31-01-2021',
        action:''
    },
    {
        title:'Block CA2 JMC Q1 2016 Final', 
        author:'Syed',
        department:'Project',
        stakeholder:'Technical Committee and Review',
        event:'-',
        location:'PCBL Office Brunei',
        category:'Technical',
        well:'-',
        date:'Published 31-01-2021',
        document_date:'31-01-2021',
        action:''
    },
    {
        title:'Block CA2 JMC Q1 2016 Final', 
        author:'Syed',
        department:'Project',
        stakeholder:'Technical Committee and Review',
        event:'-',
        location:'PCBL Office Brunei',
        category:'Technical',
        well:'-',
        date:'Published 31-01-2021',
        document_date:'31-01-2021',
        action:''
    }
];

*/
@Injectable()
export class MineService {

  constructor(private documentService:DocumentService) { }

  getRestApiData()
  {
    return this.documentService.getDocuments(TYPE.MINE);
  }
}
