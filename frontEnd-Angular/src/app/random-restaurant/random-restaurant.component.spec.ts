import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomRestaurantComponent } from './random-restaurant.component';

describe('RandomRestaurantComponent', () => {
  let component: RandomRestaurantComponent;
  let fixture: ComponentFixture<RandomRestaurantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomRestaurantComponent]
    });
    fixture = TestBed.createComponent(RandomRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
