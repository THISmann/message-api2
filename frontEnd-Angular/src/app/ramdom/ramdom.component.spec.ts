import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamdomComponent } from './ramdom.component';

describe('RamdomComponent', () => {
  let component: RamdomComponent;
  let fixture: ComponentFixture<RamdomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RamdomComponent]
    });
    fixture = TestBed.createComponent(RamdomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
