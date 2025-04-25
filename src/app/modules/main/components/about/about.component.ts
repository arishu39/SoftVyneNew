import { Component } from '@angular/core';
import { ScrollService } from '../../../../services/scroll.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  standalone: false,
})
export class AboutComponent {
  constructor(private scrollService: ScrollService) {}

  scrollToContact(): void {
    this.scrollService.scrollToElement('contact');
  }
}
