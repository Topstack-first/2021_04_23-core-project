import { Injectable } from '@angular/core';
import { DocumentService, TYPE } from 'src/app/util/data-service';
/*
export interface Element {
    title:string;
    network_path:string;
    status:string;
    action:string;
}

const data: Element[] = [
   {
        title:'Block CA2 JMC Q1 2016 Final',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\PSA & JOA \\Block CA1 \\Block CA1 - Confidentiality Agreement (Signed).pdf',
        status:'OCR Successful',
        action:''
    },
    {
        title:'Brunei Block CA2 TCM#3 Rev9 Final',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\PSA & JOA \\Block CA1 \\Block CA1 - Confidentiality Agreement (Signed).pdf',
        status:'OCR Failed',
        action:''
    },
    {
        title:'2018 12 04 MOM JMC Q4 2018',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\PSA & JOA \\Block CA1 \\Block CA1 - Confidentiality Agreement (Signed).pdf',
        status:'OCR in Progress',
        action:''
    },
    {
        title:'Block CA2 JMC Q1 2016 Final',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\PSA & JOA \\Block CA1 \\Block CA1 - Confidentiality Agreement (Signed).pdf',
        status:'In Queue for OCR',
        action:''
    },
    {
        title:'Block CA2 JMC Q1 2016 Final',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\PSA & JOA \\Block CA1 \\Block CA1 - Confidentiality Agreement (Signed).pdf',
        status:'Content Extracted',
        action:''
    },
    {
        title:'Block CA2 JMC Q1 2016 Final',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\PSA & JOA \\Block CA1 \\Block CA1 - Confidentiality Agreement (Signed).pdf',
        status:'OCR Successful',
        action:''
    },
    {
        title:'Block CA2 JMC Q1 2016 Final',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\PSA & JOA \\Block CA1 \\Block CA1 - Confidentiality Agreement (Signed).pdf',
        status:'OCR Successful',
        action:''
    },
    {
        title:'Block CA2 JMC Q1 2016 Final',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\PSA & JOA \\Block CA1 \\Block CA1 - Confidentiality Agreement (Signed).pdf',
        status:'OCR Successful',
        action:''
    },
    {
        title:'Block CA2 JMC Q1 2016 Final',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\PSA & JOA \\Block CA1 \\Block CA1 - Confidentiality Agreement (Signed).pdf',
        status:'OCR Successful',
        action:''
    },
    {
        title:'Block CA2 JMC Q1 2016 Final',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\PSA & JOA \\Block CA1 \\Block CA1 - Confidentiality Agreement (Signed).pdf',
        status:'OCR Successful',
        action:''
    },
    {
        title:'Block CA2 JMC Q1 2016 Final',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\PSA & JOA \\Block CA1 \\Block CA1 - Confidentiality Agreement (Signed).pdf',
        status:'OCR Successful',
        action:''
    },
];
*/

@Injectable()
export class OcrqueueService {

    constructor(private documentService:DocumentService) { }
    /*
    getData(){
      return data;
    }
    */
    getRestApiData()
    {
      return this.documentService.getDocuments(TYPE.OCR_QUEUE);
    }
  }
  