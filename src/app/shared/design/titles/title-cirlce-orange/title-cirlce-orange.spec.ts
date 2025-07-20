import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCirlceOrange } from './title-cirlce-orange';

describe('TitleCirlceOrange', () => {
  let component: TitleCirlceOrange;
  let fixture: ComponentFixture<TitleCirlceOrange>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleCirlceOrange]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleCirlceOrange);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
