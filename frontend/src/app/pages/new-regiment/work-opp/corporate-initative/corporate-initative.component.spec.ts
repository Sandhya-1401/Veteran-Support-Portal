import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateInitativeComponent } from './corporate-initative.component';

describe('CorporateInitativeComponent', () => {
  let component: CorporateInitativeComponent;
  let fixture: ComponentFixture<CorporateInitativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorporateInitativeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateInitativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
