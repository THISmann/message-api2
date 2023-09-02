import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListsComponent } from './card-lists.component';

describe('CardListsComponent', () => {
  let component: CardListsComponent;
  let fixture: ComponentFixture<CardListsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardListsComponent]
    });
    fixture = TestBed.createComponent(CardListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
