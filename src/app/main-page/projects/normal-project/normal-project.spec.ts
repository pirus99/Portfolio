import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalProject } from './normal-project';

describe('NormalProject', () => {
  let component: NormalProject;
  let fixture: ComponentFixture<NormalProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NormalProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormalProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
