import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkFilter } from './artwork-filter';

describe('ArtworkFilter', () => {
  let component: ArtworkFilter;
  let fixture: ComponentFixture<ArtworkFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtworkFilter],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtworkFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
