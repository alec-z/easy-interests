import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestToItemPageComponent } from './interest-to-item-page.component';

describe('InterestToItemPageComponent', () => {
  let component: InterestToItemPageComponent;
  let fixture: ComponentFixture<InterestToItemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestToItemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestToItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
