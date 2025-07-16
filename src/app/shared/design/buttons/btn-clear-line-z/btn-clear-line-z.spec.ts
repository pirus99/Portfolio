import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnClearLineZ } from './btn-clear-line-z';

describe('BtnClearLineZ', () => {
  let component: BtnClearLineZ;
  let fixture: ComponentFixture<BtnClearLineZ>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnClearLineZ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnClearLineZ);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
