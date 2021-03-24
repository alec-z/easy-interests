import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PaySetComponent } from './pay-set.component';

describe('PaySetComponent', () => {
  let component: PaySetComponent;
  let fixture: ComponentFixture<PaySetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaySetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaySetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
