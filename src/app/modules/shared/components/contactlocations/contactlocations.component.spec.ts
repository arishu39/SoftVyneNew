import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactlocationsComponent } from './contactlocations.component';

describe('ContactlocationsComponent', () => {
  let component: ContactlocationsComponent;
  let fixture: ComponentFixture<ContactlocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactlocationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactlocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
