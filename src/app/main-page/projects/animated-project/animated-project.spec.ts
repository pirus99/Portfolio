import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedProject } from './animated-project';

describe('AnimatedProject', () => {
  let component: AnimatedProject;
  let fixture: ComponentFixture<AnimatedProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
