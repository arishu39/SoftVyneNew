import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HiringComponent } from './hiring.component';
import { DataService } from '../../../../data.service';
import { of } from 'rxjs';

describe('HiringComponent', () => {
  let component: HiringComponent;
  let fixture: ComponentFixture<HiringComponent>;
  let dataService: DataService;

  beforeEach(async () => {
    const dataServiceMock = {
      getHiringContent: () =>
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
      imports: [HiringComponent],
      providers: [{ provide: DataService, useValue: dataServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(HiringComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch hiring content on init', () => {
    expect(component.hiringContent).toEqual({
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
