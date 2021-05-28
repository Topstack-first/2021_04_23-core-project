import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkExtractComponent } from './bulk-extract.component';

describe('BulkExtractComponent', () => {
  let component: BulkExtractComponent;
  let fixture: ComponentFixture<BulkExtractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkExtractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkExtractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
