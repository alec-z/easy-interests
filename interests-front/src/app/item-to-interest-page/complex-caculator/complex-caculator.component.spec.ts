import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ComplexCaculatorComponent } from './complex-caculator.component';

describe('ComplexCaculatorComponent', () => {
  let component: ComplexCaculatorComponent;
  let fixture: ComponentFixture<ComplexCaculatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexCaculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexCaculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
