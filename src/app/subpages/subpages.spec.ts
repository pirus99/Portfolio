import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subpages } from './subpages';

describe('Subpages', () => {
  let component: Subpages;
  let fixture: ComponentFixture<Subpages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subpages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subpages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
