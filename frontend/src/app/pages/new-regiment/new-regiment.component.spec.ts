import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRegimentComponent } from './new-regiment.component';

describe('NewRegimentComponent', () => {
  let component: NewRegimentComponent;
  let fixture: ComponentFixture<NewRegimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewRegimentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRegimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
