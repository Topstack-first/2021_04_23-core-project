import { Injectable } from '@angular/core';
import { BulkExtractService } from 'src/app/util/data-service';
/*
export interface Element {
  doc_title:string;
  doc_path:string;
  well_name:string;
  category:string;
  subcategory:string;
  department:string;
  stakeholder:string;
  event:string;
  location:string;
}

const data: Element[] = [
   {
        doc_title:'Block CA2 JMC Q1 2016 Final', 
        doc_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\2016\\1) Block CA2\\1) JMC\\JMC',
        well_name:'',
        category:'Technical',
        subcategory:'Plan',
        department:'Project',
        stakeholder:'Technical Committ',
        event:'',
        location:'PCBL Office, Bru'
    },
    {
        doc_title:'Brunei Block CA2 TCM3 Rev9 Final', 
        doc_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\2016\\1) Block CA2\\1) JMC\\JMC',
        well_name:'',
        category:'Technical',
        subcategory:'Plan',
        department:'Project',
        stakeholder:'Technical Committ',
        event:'',
        location:'PCBL Office, Bru'
    },
    {
        doc_title:'2018 12 04 MOM JMC Q4 2018', 
        doc_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\2016\\1) Block CA2\\1) JMC\\JMC',
        well_name:'',
        category:'Technical',
        subcategory:'Plan',
        department:'Project',
        stakeholder:'Technical Committ',
        event:'',
        location:'PCBL Office, Bru'
    },
];

*/
export interface ProcessElement {
  status:string;
  doc_title:string;
  doc_path:string;
  content_extract:string;
}

const processData: ProcessElement[] = [
   {
    status:'Upload Complete',
    doc_title:'Block CA2 JMC Q1 2016 Final', 
    doc_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\2016\\1) Block CA2\\1) JMC\\JMC',
    content_extract:'Yes'
    },
  {
    status:'Upload Complete',
    doc_title:'Block CA2 JMC Q1 2016 Final', 
    doc_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\2016\\1) Block CA2\\1) JMC\\JMC',
    content_extract:'Yes'
    },
  {
    status:'Upload Complete',
    doc_title:'Block CA2 JMC Q1 2016 Final', 
    doc_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\2016\\1) Block CA2\\1) JMC\\JMC',
    content_extract:'No'
    },
];
@Injectable()
export class ImportedDocumentsService {

  constructor(private bulkExtractService:BulkExtractService) { }
  /*
  getData(){
    return data;
  }
  */
  getRestApiData(bulkExtractId)
    {
      return this.bulkExtractService.getImportedDocsByBulkId(bulkExtractId);
    }
  getProcessData()
  {
    return processData;
  }
}
