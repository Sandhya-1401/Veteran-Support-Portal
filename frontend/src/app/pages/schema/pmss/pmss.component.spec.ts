import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmssComponent } from './pmss.component';

describe('PmssComponent', () => {
  let component: PmssComponent;
  let fixture: ComponentFixture<PmssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmssComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
