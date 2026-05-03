import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Peel } from './peel';

describe('Peel', () => {
  let component: Peel;
  let fixture: ComponentFixture<Peel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Peel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Peel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
