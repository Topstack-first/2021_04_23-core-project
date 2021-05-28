import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { DocumentDto } from 'src/app/util/data-service';
import { DocumentsOcrService } from './documents-ocr.service';

@Component({
  selector: 'app-documents-ocr',
  templateUrl: './documents-ocr.component.html',
  styleUrls: ['./documents-ocr.component.css']
})
export class DocumentsOcrComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public displayedColumns = ['title', 'network_path', 'status'];
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

  bulkExtractId:number;
  constructor(private documentsOcrService:DocumentsOcrService,private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.bulkExtractId =Number.parseInt(this.activatedRoute.snapshot.paramMap.get('bulkExtractId'));
    });
 }

 ngOnInit(): void {

  this.documentsOcrService.getRestApiData(this.bulkExtractId).subscribe(data=>{
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
