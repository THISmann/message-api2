import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRestaurantComponent } from './detail-restaurant.component';

describe('DetailRestaurantComponent', () => {
  let component: DetailRestaurantComponent;
  let fixture: ComponentFixture<DetailRestaurantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailRestaurantComponent]
    });
    fixture = TestBed.createComponent(DetailRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
