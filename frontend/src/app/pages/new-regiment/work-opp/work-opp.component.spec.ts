import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOppComponent } from './work-opp.component';

describe('WorkOppComponent', () => {
  let component: WorkOppComponent;
  let fixture: ComponentFixture<WorkOppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkOppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkOppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
