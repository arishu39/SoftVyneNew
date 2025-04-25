import { Component } from '@angular/core';
import { ScrollService } from '../../../../services/scroll.service';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.scss',
  standalone: false,
})
export class IndustriesComponent {
  constructor(private scrollService: ScrollService) {}

  scrollToContact(): void {
    this.scrollService.scrollToElement('contact');
  }
}
