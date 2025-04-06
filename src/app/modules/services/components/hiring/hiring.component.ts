import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { DataService } from '../../../../services/data.service';
import {
  Content,
  LanguageSpecificContent,
} from '../../../../interfaces/content.interface';

@Component({
  selector: 'app-hiring',
  templateUrl: './hiring.component.html',
  styleUrl: './hiring.component.scss',
  standalone: false,
})
export class HiringComponent implements OnInit, OnChanges {
  @Input() serviceType: string = '';
  hiringContent:
    | (LanguageSpecificContent & {
        trialButtonText: string;
        callButtonText: string;
      })
    | undefined;

  constructor(private dataService: DataService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['serviceType'] && this.serviceType) {
      this.dataService
        .getHiringContent(this.serviceType)
        .subscribe((content) => {
          this.hiringContent = content;
        });
    }
  }

  ngOnInit(): void {
    // Remove the content fetching from here as it's now handled in ngOnChanges
  }
}
