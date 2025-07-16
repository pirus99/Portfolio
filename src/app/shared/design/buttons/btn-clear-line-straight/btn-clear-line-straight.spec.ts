import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnClearLineStraight } from './btn-clear-line-straight';

describe('BtnClearLineStraight', () => {
  let component: BtnClearLineStraight;
  let fixture: ComponentFixture<BtnClearLineStraight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnClearLineStraight]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnClearLineStraight);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
