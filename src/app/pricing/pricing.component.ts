import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { LanguageSpecificContent } from '../content.interface';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
  standalone: false,
})
export class PricingComponent implements OnInit {
  content:
    | (LanguageSpecificContent & {
        trialButtonText: string;
        callButtonText: string;
      })
    | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPricingContent().subscribe((data) => {
      this.content = data;
    });
  }
}
