import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicsComponent } from './servics.component';

describe('ServicsComponent', () => {
  let component: ServicsComponent;
  let fixture: ComponentFixture<ServicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
