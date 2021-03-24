import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OpenCloseComponent } from './open-close.component';

describe('OpenCloseComponent', () => {
  let component: OpenCloseComponent;
  let fixture: ComponentFixture<OpenCloseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenCloseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
