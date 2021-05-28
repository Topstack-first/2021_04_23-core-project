import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportedDocumentsComponent } from './imported-documents.component';

describe('ImportedDocumentsComponent', () => {
  let component: ImportedDocumentsComponent;
  let fixture: ComponentFixture<ImportedDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportedDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportedDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
