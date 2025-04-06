import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import { LanguageSpecificContent } from '../../../../interfaces/content.interface';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
  standalone: false,
})
export class PricingComponent implements OnInit {
  @Input() serviceType: string = '';
  content:
    | (LanguageSpecificContent & {
        trialButtonText: string;
        callButtonText: string;
      })
    | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    if (this.serviceType) {
      this.dataService.getPricingContent(this.serviceType).subscribe((data) => {
        this.content = data;
      });
    }
  }
}
