import { Component } from '@angular/core';
import { ScrollService } from '../../../../services/scroll.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  standalone: false,
})
export class ServicesComponent {
  constructor(private scrollService: ScrollService) {}

  scrollToContact(): void {
    this.scrollService.scrollToElement('contact');
  }
}
