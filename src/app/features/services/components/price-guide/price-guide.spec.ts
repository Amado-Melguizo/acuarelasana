import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceGuide } from './price-guide';

describe('PriceGuide', () => {
  let component: PriceGuide;
  let fixture: ComponentFixture<PriceGuide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceGuide],
    }).compileComponents();

    fixture = TestBed.createComponent(PriceGuide);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
