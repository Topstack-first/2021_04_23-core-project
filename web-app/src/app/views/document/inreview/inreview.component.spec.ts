import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InreviewComponent } from './inreview.component';

describe('InreviewComponent', () => {
  let component: InreviewComponent;
  let fixture: ComponentFixture<InreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
