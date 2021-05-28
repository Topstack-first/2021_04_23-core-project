import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BulkExtractDto } from 'src/app/util/data-service';
import { ImportDialog } from '../bulk.component';
import { BulkService } from './bulk-extract.service';

@Component({
  selector: 'app-bulk-extract',
  templateUrl: './bulk-extract.component.html',
  styleUrls: ['./bulk-extract.component.css']
})
export class BulkExtractComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public displayedColumns = ['title', 'description', 'network_path', 'total', 'processed', 'uploaded', 'date', 'user', 'action'];
  public dataSource: any;
  public pageSize:number = 5;
  public pageSizeOptions = [5,10,20];
  public bulkExtractId:number;
  constructor(private bulkService:BulkService,public dialog: MatDialog) {
   }

  ngOnInit(): void {
    this.loadRestApiData();
    
  }
  loadRestApiData():void{
    this.bulkService.getRestApiData().subscribe(data=>{
      this.dataSource = new MatTableDataSource<BulkExtractDto>(data);
      this.dataSource.paginator = this.paginator;
      this.paginator.showFirstLastButtons = true;
    });
  }
  ngAfterViewInit() {
    
  }
  import()
  {
    let dialogRef = this.dialog.open(ImportDialog, {
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadRestApiData();
    });
  }
  pageSizeOptionChange():void{
    this.paginator._changePageSize(this.pageSize);
    
  }
}
