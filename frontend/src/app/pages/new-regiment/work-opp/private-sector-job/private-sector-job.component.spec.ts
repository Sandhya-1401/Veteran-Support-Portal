import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateSectorJobComponent } from './private-sector-job.component';

describe('PrivateSectorJobComponent', () => {
  let component: PrivateSectorJobComponent;
  let fixture: ComponentFixture<PrivateSectorJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateSectorJobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateSectorJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
