import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RakshaComponent } from './raksha.component';

describe('RakshaComponent', () => {
  let component: RakshaComponent;
  let fixture: ComponentFixture<RakshaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RakshaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RakshaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
