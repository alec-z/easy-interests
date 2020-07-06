import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaySetComponent } from './pay-set.component';

describe('PaySetComponent', () => {
  let component: PaySetComponent;
  let fixture: ComponentFixture<PaySetComponent>;

  beforeEach(async(() => {
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
