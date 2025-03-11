import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfEmployComponent } from './self-employ.component';

describe('SelfEmployComponent', () => {
  let component: SelfEmployComponent;
  let fixture: ComponentFixture<SelfEmployComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelfEmployComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfEmployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
