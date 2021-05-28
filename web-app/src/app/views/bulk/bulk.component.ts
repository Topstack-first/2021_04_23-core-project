import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ImportedDocumentsService, ProcessElement } from './imported-documents/imported-documents.service';
import { MatTableDataSource } from '@angular/material/table';
import { BulkExtractService, DocumentDto } from 'src/app/util/data-service';
@Component({
  selector: 'app-bulk',
  templateUrl: './bulk.component.html',
  styleUrls: ['./bulk.component.css']
})
export class BulkComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
@Component({
  selector: 'process-dialog',
  templateUrl: 'process-dialog.html',
  styleUrls: ['./bulk.component.css']
})
export class ProcessDialog {
  public displayedColumns: string[] = ['status', 'doc_title', 'doc_path', 'content_extract'];
  public dataSource:any;
  constructor(
    public dialogRef: MatDialogRef<ProcessDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DocumentDto[],
    private router:Router) {

      this.dataSource = new MatTableDataSource<DocumentDto>(data);
  }

  close(): void {
    this.dialogRef.close();
  }
}


@Component({
  selector: 'import-dialog',
  templateUrl: 'import-dialog.html',
  styleUrls: ['./bulk.component.css']
})
export class ImportDialog {
  networkPath:string = "";
  extractTitle:string = "";
  extractDescription:string = "";
  documentType:string;
  documentTypes = [
    'PDF Files Only',
    'LAS Files Only',
    'All Types of Files'
  ];
  constructor(
    public dialogRef: MatDialogRef<ImportDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private bulkExtractService:BulkExtractService,
    private router:Router) {

  }
  submit():void{
    this.bulkExtractService.importDocuments([this.networkPath,this.extractTitle,this.extractDescription,this.documentType]).subscribe(result=>{
      
      //this.router.navigate(['core/bulk-uploader/import']);
      this.close();
    });
  }
  close(): void {
    this.dialogRef.close();
  }
}
