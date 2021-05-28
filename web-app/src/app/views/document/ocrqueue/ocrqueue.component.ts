import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DocumentDto } from 'src/app/util/data-service';
import { OcrqueueService } from './ocrqueue.service';
@Component({
  selector: 'app-ocrqueue',
  templateUrl: './ocrqueue.component.html',
  styleUrls: ['./ocrqueue.component.css']
})
export class OcrqueueComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public displayedColumns = ['title', 'network_path', 'status','action'];
  public dataSource: any;
  public pageSize:number = 5;
  public pageSizeOptions = [5,10,20];


  filterStatus:string = '';
  statuses = [
    'All Status',
    'OCR Successful',
    'OCR Failed',
    'OCR in Progress',
    'In Queue for OCR',
    'Content Extracted'
  ];

  constructor(private ocrqueueService:OcrqueueService) { }

  ngOnInit(): void {
    this.ocrqueueService.getRestApiData().subscribe(data=>{
      this.dataSource = new MatTableDataSource<DocumentDto>(data);
      this.dataSource.paginator = this.paginator;
      this.paginator.showFirstLastButtons = true;
    });
  }
  
  ngAfterViewInit() {
    
  }
  filterStatusChange():void{
    if(this.filterStatus == "All Status")
    {
      this.dataSource.filter = "";
    }
    else{
      this.dataSource.filter = this.filterStatus.trim().toLowerCase();
    }
    
  }
  pageSizeOptionChange():void{
    this.paginator._changePageSize(this.pageSize);
    
  }
}
