import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ENTER } from '@angular/cdk/keycodes';
import { DocumentService,DocumentDto, FileParameter } from 'src/app/util/data-service';
import * as moment from 'moment';
import { AllComponent } from './all/all.component';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DocumentDialog } from './dialogs';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  selectedDate:string = "All";
  dates = [
    "All",
    "March 2021",
    "February 2021",
    "January 2021",
    "December 2020",
    "November 2020",
  ];

  selectedCategory:string = "All";
  categories = [
    "All",
    "Agreement",
    "Audit",
    "Compliance",
    "Design",
    "Email and Letter",
  ];

  selectedDepartment:string = "All";
  departments = [
    "All",
    "Administration",
    "Business Planning",
    "Commercial",
    "Exploration",
    "Finance",
  ];

  selectedStakeholder:string = "All";
  stakeholders = [
    "All",
    "Brunei National Petroleum",
    "Integrated Technical Review",
    "Committee",
    "Internal Commercial Task",
  ];

  selectedEvent:string = "All";
  events = [
    "All",
    "Assurance Review",
    "Contractor Risk Opportunity",
    "Framing Workshop",
  ];

  selectedLocation:string = "All";
  locations = [
    "All",
    "Brunei",
    "Convention Centre, KL",
    "International - Oversea",
    "Kuala Lumpur",
  ];

  selectedWell:string = "All";
  wells = [
    "All",
    "Kelldang North East-1",
    "Kembayau East-1",
    "Kempas-1",
    "Keratau-1",
  ];

  @ViewChild('appAll') appAll: AllComponent;
  @ViewChild('appMine') appMine: AllComponent;
  @ViewChild('appApproved') appApproved: AllComponent;
  @ViewChild('appInReview') appInReview: AllComponent;
  @ViewChild('appRejected') appRejected: AllComponent;
  @ViewChild('appOCRQueue') appOCRQueue: AllComponent;
  @ViewChild('appTrash') appTrash: AllComponent;
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  addDocument():void{
    let dialogRef = this.dialog.open(DocumentDialog, {
      data: { title: "Add Document",element:null}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  tabClick($event){
    if($event.index == 0)
    {
      this.appAll.loadRestApiData();
    }
    else if($event.index == 1)
    {
      this.appMine.loadRestApiData();
    }
    else if($event.index == 2)
    {
      this.appApproved.loadRestApiData();
    }
    else if($event.index == 3)
    {
      this.appInReview.loadRestApiData();
    }
    else if($event.index == 4)
    {
      this.appRejected.loadRestApiData();
    }
    else if($event.index == 5)
    {
      this.appOCRQueue.loadRestApiData();
    }
    else if($event.index == 6)
    {
      this.appTrash.loadRestApiData();
    }

  }
}


