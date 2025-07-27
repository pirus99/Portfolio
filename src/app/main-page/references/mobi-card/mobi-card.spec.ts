import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiCard } from './mobi-card';

describe('MobiCard', () => {
  let component: MobiCard;
  let fixture: ComponentFixture<MobiCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobiCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobiCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
