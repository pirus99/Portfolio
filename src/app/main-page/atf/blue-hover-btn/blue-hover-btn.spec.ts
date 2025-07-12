import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueHoverBtn } from './blue-hover-btn';

describe('BlueHoverBtn', () => {
  let component: BlueHoverBtn;
  let fixture: ComponentFixture<BlueHoverBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlueHoverBtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueHoverBtn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
