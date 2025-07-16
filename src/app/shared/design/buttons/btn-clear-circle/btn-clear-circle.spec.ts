import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnClearCircle } from './btn-clear-circle';

describe('BtnClearCircle', () => {
  let component: BtnClearCircle;
  let fixture: ComponentFixture<BtnClearCircle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnClearCircle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnClearCircle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
