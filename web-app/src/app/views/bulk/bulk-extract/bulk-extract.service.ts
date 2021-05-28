import { Injectable } from '@angular/core';
import { BulkExtractService } from 'src/app/util/data-service';
/*
export interface Element {
    title:string;
    description:string;
    network_path:string;
    total:number;
    processed:number;
    uploaded:number;
    date:string;
    user:string;
    action:string;
}

const data: Element[] = [
   {
        title:'Business Planning Documents',
        description:'From 2016 to 2019',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\2016\\1) Block CA2\\1) JMC\\JMC',
        total:3,
        processed:3,
        uploaded:2,
        date:'31-01-2021',
        user:'Syed',
        action:'some url'
    },
    {
        title:'Technical Study Documents',
        description:'Mostly project reports',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\2016\\1) Block CA2\\1) JMC\\JMC',
        total:20,
        processed:20,
        uploaded:0,
        date:'18-01-2021',
        user:'Furqan',
        action:'some url'
    },
    {
        title:'Review Documents',
        description:'Mostly review from subsurface',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\2016\\1) Block CA2\\1) JMC\\JMC',
        total:13,
        processed:10,
        uploaded:0,
        date:'25-12-2020',
        user:'Furqan',
        action:'some url'
    },
    {
        title:'Business Planning Documents',
        description:'From 2016 to 2019',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\2016\\1) Block CA2\\1) JMC\\JMC',
        total:9,
        processed:5,
        uploaded:0,
        date:'31-01-2021',
        user:'Syed',
        action:'some url'
    },
    {
        title:'Business Planning Documents',
        description:'From 2016 to 2019',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\2016\\1) Block CA2\\1) JMC\\JMC',
        total:31,
        processed:26,
        uploaded:0,
        date:'17-11-2020',
        user:'Syed',
        action:'some url'
    },
    {
        title:'Technical Study Documents',
        description:'Mostly project reports',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\2016\\1) Block CA2\\1) JMC\\JMC',
        total:20,
        processed:20,
        uploaded:0,
        date:'18-01-2021',
        user:'Furqan',
        action:'some url'
    },
    {
        title:'Review Documents',
        description:'Mostly review from subsurface',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\2016\\1) Block CA2\\1) JMC\\JMC',
        total:13,
        processed:10,
        uploaded:0,
        date:'25-12-2020',
        user:'Furqan',
        action:'some url'
    },
    {
        title:'Business Planning Documents',
        description:'From 2016 to 2019',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\2016\\1) Block CA2\\1) JMC\\JMC',
        total:9,
        processed:5,
        uploaded:0,
        date:'31-01-2021',
        user:'Syed',
        action:'some url'
    },
    {
        title:'Business Planning Documents',
        description:'From 2016 to 2019',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\2016\\1) Block CA2\\1) JMC\\JMC',
        total:31,
        processed:26,
        uploaded:0,
        date:'17-11-2020',
        user:'Syed',
        action:'some url'
    },
    {
        title:'Technical Study Documents',
        description:'Mostly project reports',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\2016\\1) Block CA2\\1) JMC\\JMC',
        total:20,
        processed:20,
        uploaded:0,
        date:'18-01-2021',
        user:'Furqan',
        action:'some url'
    },
    {
        title:'Review Documents',
        description:'Mostly review from subsurface',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\2016\\1) Block CA2\\1) JMC\\JMC',
        total:13,
        processed:10,
        uploaded:0,
        date:'25-12-2020',
        user:'Furqan',
        action:'some url'
    },
    {
        title:'Business Planning Documents',
        description:'From 2016 to 2019',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\2016\\1) Block CA2\\1) JMC\\JMC',
        total:9,
        processed:5,
        uploaded:0,
        date:'31-01-2021',
        user:'Syed',
        action:'some url'
    },
    {
        title:'Business Planning Documents',
        description:'From 2016 to 2019',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\2016\\1) Block CA2\\1) JMC\\JMC',
        total:31,
        processed:26,
        uploaded:0,
        date:'17-11-2020',
        user:'Syed',
        action:'some url'
    },
    {
        title:'Technical Study Documents',
        description:'Mostly project reports',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\2016\\1) Block CA2\\1) JMC\\JMC',
        total:20,
        processed:20,
        uploaded:0,
        date:'18-01-2021',
        user:'Furqan',
        action:'some url'
    },
    {
        title:'Review Documents',
        description:'Mostly review from subsurface',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\2016\\1) Block CA2\\1) JMC\\JMC',
        total:13,
        processed:10,
        uploaded:0,
        date:'25-12-2020',
        user:'Furqan',
        action:'some url'
    },
    {
        title:'Business Planning Documents',
        description:'From 2016 to 2019',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\2016\\1) Block CA2\\1) JMC\\JMC',
        total:9,
        processed:5,
        uploaded:0,
        date:'31-01-2021',
        user:'Syed',
        action:'some url'
    },
    {
        title:'Business Planning Documents',
        description:'From 2016 to 2019',
        network_path:'\\\\bfa-nas\\tech3\\core 2.0\\7_client_core_folder\\pcbl_common drive\\general\\core@pcbl\\business planning\\2016\\1) Block CA2\\1) JMC\\JMC',
        total:31,
        processed:26,
        uploaded:0,
        date:'17-11-2020',
        user:'Syed',
        action:'some url'
    },
    
];

*/
@Injectable()
export class BulkService {

    constructor(private bulkExtractService:BulkExtractService) { }
    /*
    getData(){
      return data;
    }
    */
    getRestApiData()
    {
      return this.bulkExtractService.getBulkExtracts();
    }
  }
  