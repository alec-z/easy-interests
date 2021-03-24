import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ItemGeneratorComponent } from './item-generator.component';

describe('ItemGeneratorComponent', () => {
  let component: ItemGeneratorComponent;
  let fixture: ComponentFixture<ItemGeneratorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
