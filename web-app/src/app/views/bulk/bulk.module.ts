import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulkComponent, ImportDialog, ProcessDialog } from './bulk.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImportedDocumentsComponent } from './imported-documents/imported-documents.component';
import { BulkExtractComponent } from './bulk-extract/bulk-extract.component';
import { DocumentsOcrComponent } from './documents-ocr/documents-ocr.component';
import { ImportedDocumentsService } from './imported-documents/imported-documents.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { BulkService } from './bulk-extract/bulk-extract.service';
import { DocumentsOcrService } from './documents-ocr/documents-ocr.service';

export const routes = [
  { path: '', component: BulkComponent, data: { breadcrumb: 'bulk' } ,
    children: [
      { path: '', component: BulkExtractComponent },
      { path: 'import/:bulkExtractId', component: ImportedDocumentsComponent },
      { path: 'ocr/:bulkExtractId', component: DocumentsOcrComponent },
    ]
  }
];

@NgModule({
  declarations: [BulkComponent, ImportedDocumentsComponent, BulkExtractComponent, DocumentsOcrComponent,ProcessDialog,ImportDialog],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  bootstrap: [BulkComponent],
  providers: [
    ImportedDocumentsService,
    BulkService,
    DocumentsOcrService
  ]
})
export class BulkModule { }
