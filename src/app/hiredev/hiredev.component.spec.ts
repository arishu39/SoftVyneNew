import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiredevComponent } from './hiredev.component';

describe('HiredevComponent', () => {
  let component: HiredevComponent;
  let fixture: ComponentFixture<HiredevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiredevComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiredevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
