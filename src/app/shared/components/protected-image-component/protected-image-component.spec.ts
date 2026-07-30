import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedImageComponent } from './protected-image-component';

describe('ProtectedImageComponent', () => {
  let component: ProtectedImageComponent;
  let fixture: ComponentFixture<ProtectedImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtectedImageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProtectedImageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
