import { Injectable } from '@angular/core';
import { BulkExtractService } from 'src/app/util/data-service';
/*
export interface Element {
    title:string;
    network_path:string;
    status:string;
}

const data: Element[] = [
   {
        title:'Block CA2 JMC Q1 2016 Final',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\PSA & JOA \\Block CA1 \\Block CA1 - Confidentiality Agreement (Signed).pdf',
        status:'OCR Successful',
    },
    {
        title:'Brunei Block CA2 TCM#3 Rev9 Final',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\PSA & JOA \\Block CA1 \\Block CA1 - Confidentiality Agreement (Signed).pdf',
        status:'OCR Failed',
    },
    {
        title:'2018 12 04 MOM JMC Q4 2018',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\PSA & JOA \\Block CA1 \\Block CA1 - Confidentiality Agreement (Signed).pdf',
        status:'OCR in Progress',
    },
    {
        title:'Block CA2 JMC Q1 2016 Final',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\PSA & JOA \\Block CA1 \\Block CA1 - Confidentiality Agreement (Signed).pdf',
        status:'In Queue for OCR',
    },
    {
        title:'Block CA2 JMC Q1 2016 Final',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\PSA & JOA \\Block CA1 \\Block CA1 - Confidentiality Agreement (Signed).pdf',
        status:'Content Extracted',
    },
    {
        title:'Block CA2 JMC Q1 2016 Final',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\PSA & JOA \\Block CA1 \\Block CA1 - Confidentiality Agreement (Signed).pdf',
        status:'OCR Successful',
    },
    {
        title:'Block CA2 JMC Q1 2016 Final',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\PSA & JOA \\Block CA1 \\Block CA1 - Confidentiality Agreement (Signed).pdf',
        status:'OCR Successful',
    },
    {
        title:'Block CA2 JMC Q1 2016 Final',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\PSA & JOA \\Block CA1 \\Block CA1 - Confidentiality Agreement (Signed).pdf',
        status:'OCR Successful',
    },
    {
        title:'Block CA2 JMC Q1 2016 Final',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\PSA & JOA \\Block CA1 \\Block CA1 - Confidentiality Agreement (Signed).pdf',
        status:'OCR Successful',
    },
    {
        title:'Block CA2 JMC Q1 2016 Final',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\PSA & JOA \\Block CA1 \\Block CA1 - Confidentiality Agreement (Signed).pdf',
        status:'OCR Successful',
    },
    {
        title:'Block CA2 JMC Q1 2016 Final',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\PSA & JOA \\Block CA1 \\Block CA1 - Confidentiality Agreement (Signed).pdf',
        status:'OCR Successful',
    },
];
*/

@Injectable()
export class DocumentsOcrService {

    constructor(private bulkExtractService:BulkExtractService) { }
    /*
    getData(){
      return data;
    }
    */
    getRestApiData(bulkExtractId)
    {
      return this.bulkExtractService.getOcrDocsByBulkId(bulkExtractId);
    }
  }
  