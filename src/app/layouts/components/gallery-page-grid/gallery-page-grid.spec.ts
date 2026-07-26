import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPageGrid } from './gallery-page-grid';

describe('GalleryPageGrid', () => {
  let component: GalleryPageGrid;
  let fixture: ComponentFixture<GalleryPageGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryPageGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryPageGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
