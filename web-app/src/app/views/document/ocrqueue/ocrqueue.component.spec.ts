import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcrqueueComponent } from './ocrqueue.component';

describe('OcrqueueComponent', () => {
  let component: OcrqueueComponent;
  let fixture: ComponentFixture<OcrqueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcrqueueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcrqueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
