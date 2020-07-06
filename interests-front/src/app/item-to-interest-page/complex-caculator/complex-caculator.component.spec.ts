import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexCaculatorComponent } from './complex-caculator.component';

describe('ComplexCaculatorComponent', () => {
  let component: ComplexCaculatorComponent;
  let fixture: ComponentFixture<ComplexCaculatorComponent>;

  beforeEach(async(() => {
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
