import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelfareComponent } from './welfare.component';

describe('WelfareComponent', () => {
  let component: WelfareComponent;
  let fixture: ComponentFixture<WelfareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelfareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelfareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
