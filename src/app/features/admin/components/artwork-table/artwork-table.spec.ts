import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkTable } from './artwork-table';

describe('ArtworkTable', () => {
  let component: ArtworkTable;
  let fixture: ComponentFixture<ArtworkTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtworkTable],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtworkTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
