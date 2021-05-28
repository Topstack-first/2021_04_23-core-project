import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { ImportedDocumentsService } from './imported-documents.service';
import { ThrowStmt } from '@angular/compiler';
import { ProcessDialog } from '../bulk.component';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';
import { BulkExtractService, DocumentDto } from 'src/app/util/data-service';
@Component({
  selector: 'app-imported-documents',
  templateUrl: './imported-documents.component.html',
  styleUrls: ['./imported-documents.component.css']
})
export class ImportedDocumentsComponent implements OnInit {
  public displayedColumns: string[] = ['select', 'doc_title', 'doc_path', 'well_name', 'category', 'subcategory', 'department', 'stakeholder', 'event', 'location'];
  public dataSource:any;
  public selection = new SelectionModel<DocumentDto>(true, []);

  well_name_header:string = "";
  well_names=[
    "Kelldang North East-1",
    "Kembayau East-1",
    "Kempas-1",
    "Keratau-1",
  ];
  category_header:string = "";
  categories=[
    "Agreement",
    "Audit",
    "Compliance",
    "Design",
    "Email and Letter",
  ];
  subcategory_header:string = "";
  subcategories=[
    "Agreement",
    "Audit",
    "Compliance",
    "Design",
    "Email and Letter",
  ];
  department_header:string = "";
  departments=[
    "Administration",
    "Business Planning",
    "Commercial",
    "Exploration",
    "Finance",
  ];
  stakeholder_header:string = "";
  stakeholders=[
    "Brunei National Petroleum",
    "Integrated Technical Review",
    "Committee",
    "Internal Commercial Task",
  ];
  event_header:string = "";
  events=[
    "Assurance Review",
    "Contractor Risk Opportunity",
    "Framing Workshop",
  ];
  location_header:string = "";
  locations=[
    "Brunei",
    "Convention Centre, KL",
    "International - Oversea",
    "Kuala Lumpur",
  ];
  
  bulkExtractId:number;
  constructor(
    private importedDocumentsService:ImportedDocumentsService,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private bulkExtractService:BulkExtractService) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.bulkExtractId =Number.parseInt(this.activatedRoute.snapshot.paramMap.get('bulkExtractId'));
    });
  }

  ngOnInit(): void {
    this.importedDocumentsService.getRestApiData(this.bulkExtractId).subscribe(data=>{
      this.dataSource = new MatTableDataSource<DocumentDto>(data);
    });
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
  categoryHeaderChange()
  {
    if(this.category_header != "")
    {
      
      this.selection.selected.forEach(row => row.categoryName=this.category_header);
    }
  }
  subcategoryHeaderChange()
  {
    if(this.subcategory_header != "")
    {
      
      this.selection.selected.forEach(row => row.subcategoryName=this.subcategory_header);
    }
  }
  departmentHeaderChange()
  {
    if(this.department_header != "")
    {
      
      this.selection.selected.forEach(row => row.departmentName=this.department_header);
    }
  }
  stakeholderHeaderChange()
  {
    if(this.stakeholder_header != "")
    {
      
      this.selection.selected.forEach(row => row.stakeholderName=this.stakeholder_header);
    }
  }
  eventHeaderChange()
  {
    if(this.event_header != "")
    {
      
      this.selection.selected.forEach(row => row.eventName=this.event_header);
    }
  }
  locationHeaderChange()
  {
    if(this.location_header != "")
    {
      
      this.selection.selected.forEach(row => row.locationName=this.location_header);
    }
  }
  wellNameHeaderChange()
  {
    if(this.well_name_header != "")
    {
      
      this.selection.selected.forEach(row => row.wellName=this.well_name_header);
    }
  }
  process():void
  {
    this.bulkExtractService.processImportedDocuments(this.selection.selected).subscribe(result=>{
      let dialogRef = this.dialog.open(ProcessDialog, {
        data:result
      });
  
      dialogRef.afterClosed().subscribe(result => {
        this.router.navigate(["core/bulk-uploader"]);
      });
    });
    
  }
}
