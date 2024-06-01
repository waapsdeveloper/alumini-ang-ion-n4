import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobProflePage } from './job-profle.page';

describe('JobProflePage', () => {
  let component: JobProflePage;
  let fixture: ComponentFixture<JobProflePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JobProflePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
