import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DocumentDto } from 'src/app/util/data-service';
import { BulkDeleteDocumentDialog, BulkEditDialog, DeleteDocumentDialog, DocumentDialog } from '../dialogs';
import { RejectedService } from './rejected.service';
@Component({
  selector: 'app-rejected',
  templateUrl: './rejected.component.html',
  styleUrls: ['./rejected.component.css']
})
export class RejectedComponent implements OnInit {
  @Input() filters:any;

  bulkAction:string = "Bulk Action";
  bulkActions = [
    "Bulk Action",
    "Delete",
    "Edit"
  ];
  public selection = new SelectionModel<Element>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public displayedColumns = ['select','title', 'author', 'department', 'stakeholder', 'event', 'location', 'category', 'well', 'date','document_date','action'];
  public dataSource: any;
  public pageSize:number = 5;
  public pageSizeOptions = [5,10,20];

  constructor(private rejectedService:RejectedService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.loadRestApiData();
  }
  loadRestApiData():void{
    this.rejectedService.getRestApiData().subscribe(data=>{
      this.dataSource = new MatTableDataSource<DocumentDto>(data);
      this.dataSource.paginator = this.paginator;
      this.paginator.showFirstLastButtons = true;
    });

  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngAfterViewInit() {
    
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  pageSizeOptionChange():void{
      this.paginator._changePageSize(this.pageSize);
      
  }
  filtersToggle():void{
    this.filters.toggle();    
  }
  editDocument(element:any):void{
    let dialogRef = this.dialog.open(DocumentDialog, {
      data: { title: "Edit Document", element:element}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadRestApiData();
    });
  }
  deleteDocument(element:any):void{
    let dialogRef = this.dialog.open(DeleteDocumentDialog, {
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadRestApiData();
    });
  }
  apply():void{
    const numSelected = this.selection.selected.length;
    if(numSelected > 0 && this.bulkAction == "Edit")
    {
      let dialogRef = this.dialog.open(BulkEditDialog, {
        data:this.selection.selected
      });
      dialogRef.afterClosed().subscribe(result => {
        this.loadRestApiData();
      });
    }
    else if(numSelected > 0 && this.bulkAction == "Delete")
    {
      let dialogRef = this.dialog.open(BulkDeleteDocumentDialog, {
        data:this.selection.selected
      });
      dialogRef.afterClosed().subscribe(result => {
        this.loadRestApiData();
      });
    }
  }
}
