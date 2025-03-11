import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefenceJobComponent } from './defence-job.component';

describe('DefenceJobComponent', () => {
  let component: DefenceJobComponent;
  let fixture: ComponentFixture<DefenceJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefenceJobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefenceJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
