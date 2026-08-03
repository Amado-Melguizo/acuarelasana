import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoringPicture } from './coloring-picture';

describe('ColoringPicture', () => {
  let component: ColoringPicture;
  let fixture: ComponentFixture<ColoringPicture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColoringPicture],
    }).compileComponents();

    fixture = TestBed.createComponent(ColoringPicture);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
