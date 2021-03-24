import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SimpleCaculatorComponent } from './simple-caculator.component';

describe('SimpleCaculatorComponent', () => {
  let component: SimpleCaculatorComponent;
  let fixture: ComponentFixture<SimpleCaculatorComponent>;

  beforeEach(waitForAsync(() => {
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
