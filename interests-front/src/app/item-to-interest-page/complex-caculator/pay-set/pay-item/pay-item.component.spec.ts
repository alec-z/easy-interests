import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PayItemComponent } from './pay-item.component';

describe('PayItemComponent', () => {
  let component: PayItemComponent;
  let fixture: ComponentFixture<PayItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PayItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
