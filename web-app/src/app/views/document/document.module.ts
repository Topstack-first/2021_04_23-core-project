import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulkDeleteDocumentDialog, BulkDeletePermanentDialog, BulkEditDialog, BulkRestoreDocumentDialog, DeleteDocumentDialog, DeletePermanentDialog,  DocumentDialog, RestoreDocumentDialog, SelectFileDialog } from './dialogs';
import {DocumentComponent} from './document.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AllComponent } from './all/all.component';
import { MineComponent } from './mine/mine.component';
import { ApprovedComponent } from './approved/approved.component';
import { InreviewComponent } from './inreview/inreview.component';
import { RejectedComponent } from './rejected/rejected.component';
import { OcrqueueComponent } from './ocrqueue/ocrqueue.component';
import { TrashComponent } from './trash/trash.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllService } from './all/all.service';
import { MineService } from './mine/mine.service';
import { ApprovedService } from './approved/approved.service';
import { InreviewService } from './inreview/inreview.service';
import { RejectedService } from './rejected/rejected.service';
import { TrashService } from './trash/trash.service';
import { OcrqueueService } from './ocrqueue/ocrqueue.service';



export const routes = [
  { path: '', component: DocumentComponent, data: { breadcrumb: 'document' }  }
];

@NgModule({
  declarations: [
    DocumentComponent, 
    AllComponent, 
    MineComponent, 
    ApprovedComponent, 
    InreviewComponent, 
    RejectedComponent, 
    OcrqueueComponent, 
    TrashComponent,
    DocumentDialog,
    DeleteDocumentDialog,
    BulkDeleteDocumentDialog,
    RestoreDocumentDialog,
    DeletePermanentDialog,
    BulkEditDialog,
    BulkRestoreDocumentDialog,
    BulkDeletePermanentDialog,
    SelectFileDialog
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    AllService,
    MineService,
    ApprovedService,
    InreviewService,
    RejectedService,
    TrashService,
    OcrqueueService
  ]
})
export class DocumentModule { }
