import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemToInterestPageComponent } from './item-to-interest-page.component';

describe('ItemToInterestPageComponent', () => {
  let component: ItemToInterestPageComponent;
  let fixture: ComponentFixture<ItemToInterestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemToInterestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemToInterestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
