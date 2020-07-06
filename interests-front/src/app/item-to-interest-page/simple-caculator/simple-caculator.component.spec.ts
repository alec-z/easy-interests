import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCaculatorComponent } from './simple-caculator.component';

describe('SimpleCaculatorComponent', () => {
  let component: SimpleCaculatorComponent;
  let fixture: ComponentFixture<SimpleCaculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleCaculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleCaculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
