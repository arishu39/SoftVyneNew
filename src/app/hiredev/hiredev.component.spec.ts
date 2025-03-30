import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HiredevComponent } from './hiredev.component';
import { DataService } from '../data.service';
import { of } from 'rxjs';

describe('HiredevComponent', () => {
  let component: HiredevComponent;
  let fixture: ComponentFixture<HiredevComponent>;
  let dataService: DataService;

  beforeEach(async () => {
    const dataServiceMock = {
      getHiredevContent: () =>
        of({
          heroTitle: 'Test Title',
          heroDescription: 'Test Description',
          trialButtonText: 'Test Trial',
          callButtonText: 'Test Call',
          experienceYears: 'Test Years',
          upgradeServiceText: 'Test Upgrade',
          costSavingText: 'Test Cost',
          imageUrl: 'test.jpg',
          positions: [],
        }),
    };

    await TestBed.configureTestingModule({
      imports: [HiredevComponent],
      providers: [{ provide: DataService, useValue: dataServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(HiredevComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch hiredev content on init', () => {
    expect(component.hiredevContent).toEqual({
      heroTitle: 'Test Title',
      heroDescription: 'Test Description',
      trialButtonText: 'Test Trial',
      callButtonText: 'Test Call',
      experienceYears: 'Test Years',
      upgradeServiceText: 'Test Upgrade',
      costSavingText: 'Test Cost',
      imageUrl: 'test.jpg',
      positions: [],
    });
  });
});
