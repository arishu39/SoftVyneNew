import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Content } from '../content.interface';

@Component({
  selector: 'app-pricing',
  imports: [],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
})
export class PricingComponent implements OnInit {
  content: Content | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPricingContent().subscribe((data) => {
      this.content = data;
    });
  }
}
