import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFairComponent } from './job-fair.component';

describe('JobFairComponent', () => {
  let component: JobFairComponent;
  let fixture: ComponentFixture<JobFairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobFairComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobFairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
