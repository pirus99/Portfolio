import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnClearLineWave } from './btn-clear-line-wave';

describe('BtnClearLineWave', () => {
  let component: BtnClearLineWave;
  let fixture: ComponentFixture<BtnClearLineWave>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnClearLineWave]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnClearLineWave);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
