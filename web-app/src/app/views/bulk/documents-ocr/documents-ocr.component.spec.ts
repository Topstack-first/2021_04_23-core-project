import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsOcrComponent } from './documents-ocr.component';

describe('DocumentsOcrComponent', () => {
  let component: DocumentsOcrComponent;
  let fixture: ComponentFixture<DocumentsOcrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsOcrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsOcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
