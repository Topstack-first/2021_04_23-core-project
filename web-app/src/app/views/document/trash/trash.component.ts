import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DocumentDto } from 'src/app/util/data-service';
import { BulkDeleteDocumentDialog, BulkDeletePermanentDialog, BulkEditDialog, BulkRestoreDocumentDialog, DeleteDocumentDialog, DeletePermanentDialog,  DocumentDialog, RestoreDocumentDialog } from '../dialogs';
import { TrashService } from './trash.service';
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {
  @Input() filters:any;

  bulkAction:string = "Bulk Action";
  bulkActions = [
    "Bulk Action",
    "Delete Permanently",
    "Restore"
  ];
  public selection = new SelectionModel<Element>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public displayedColumns = ['select','title', 'author', 'department', 'stakeholder', 'event', 'location', 'category', 'well', 'date','document_date','action'];
  public dataSource: any;
  public pageSize:number = 5;
  public pageSizeOptions = [5,10,20];

  constructor(private trashService:TrashService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.loadRestApiData();
  }
  loadRestApiData():void {
    this.trashService.getRestApiData().subscribe(data=>{
      this.dataSource = new MatTableDataSource<DocumentDto>(data);
      this.dataSource.paginator = this.paginator;
      this.paginator.showFirstLastButtons = true;
    });
  }
  ngAfterViewInit() {
    
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
  restoreDocument(element:any):void{
    let dialogRef = this.dialog.open(RestoreDocumentDialog, {
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined && result.restored == true)
      {
        this.loadRestApiData();
      }
    });
  }
  deleteDocument(element:any):void{
    let dialogRef = this.dialog.open(DeletePermanentDialog, {
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadRestApiData();
    });
  }
  apply():void{
    const numSelected = this.selection.selected.length;
    if(numSelected > 0 && this.bulkAction == "Restore")
    {
      let dialogRef = this.dialog.open(BulkRestoreDocumentDialog, {
        data:this.selection.selected
      });
      dialogRef.afterClosed().subscribe(result => {
        this.loadRestApiData();
      });
    }
    else if(numSelected > 0 && this.bulkAction == "Delete Permanently")
    {
      let dialogRef = this.dialog.open(BulkDeletePermanentDialog, {
        data:this.selection.selected
      });
      dialogRef.afterClosed().subscribe(result => {
        this.loadRestApiData();
      });
    }
  }
}
