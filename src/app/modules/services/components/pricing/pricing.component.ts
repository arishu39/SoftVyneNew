import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { DataService } from '../../../../services/data.service';
import { LanguageSpecificContent } from '../../../../interfaces/content.interface';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
  standalone: false,
})
export class PricingComponent implements OnInit, OnChanges {
  @Input() serviceType: string = '';
  @Input() mainRoute: string = '';
  @Input() subRoute: string = '';
  content:
    | (LanguageSpecificContent & {
        trialButtonText: string;
        callButtonText: string;
      })
    | undefined;

  constructor(private dataService: DataService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes['mainRoute'] || changes['subRoute']) && this.mainRoute) {
      this.dataService.getPricingContent(this.mainRoute).subscribe((data) => {
        this.content = data;
      });
    }
  }

  ngOnInit(): void {
    // Remove the content fetching from here as it's now handled in ngOnChanges
  }
}
