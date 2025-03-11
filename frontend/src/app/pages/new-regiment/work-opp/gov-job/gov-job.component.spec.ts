import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovJobComponent } from './gov-job.component';

describe('GovJobComponent', () => {
  let component: GovJobComponent;
  let fixture: ComponentFixture<GovJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovJobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
