import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovOpportunitiesComponent } from './gov-opportunities.component';

describe('GovOpportunitiesComponent', () => {
  let component: GovOpportunitiesComponent;
  let fixture: ComponentFixture<GovOpportunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovOpportunitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
