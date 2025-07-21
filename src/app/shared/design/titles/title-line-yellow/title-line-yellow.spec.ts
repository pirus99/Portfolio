import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleLineYellow } from './title-line-yellow';

describe('TitleLineYellow', () => {
  let component: TitleLineYellow;
  let fixture: ComponentFixture<TitleLineYellow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleLineYellow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleLineYellow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
