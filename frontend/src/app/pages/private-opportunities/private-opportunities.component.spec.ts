import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateOpportunitiesComponent } from './private-opportunities.component';

describe('PrivateOpportunitiesComponent', () => {
  let component: PrivateOpportunitiesComponent;
  let fixture: ComponentFixture<PrivateOpportunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateOpportunitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
