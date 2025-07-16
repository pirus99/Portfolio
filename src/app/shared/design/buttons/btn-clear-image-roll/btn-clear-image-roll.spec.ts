import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnClearImageRoll } from './btn-clear-image-roll';

describe('BtnClearImageRoll', () => {
  let component: BtnClearImageRoll;
  let fixture: ComponentFixture<BtnClearImageRoll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnClearImageRoll]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnClearImageRoll);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
