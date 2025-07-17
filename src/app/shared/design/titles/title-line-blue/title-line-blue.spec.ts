import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleLineBlue } from './title-line-blue';

describe('TitleLineBlue', () => {
  let component: TitleLineBlue;
  let fixture: ComponentFixture<TitleLineBlue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleLineBlue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleLineBlue);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
