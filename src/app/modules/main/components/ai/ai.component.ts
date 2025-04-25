import { Component } from '@angular/core';
import { ScrollService } from '../../../../services/scroll.service';

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrl: './ai.component.scss',
  standalone: false,
})
export class AIComponent {
  constructor(private scrollService: ScrollService) {}

  scrollToContact(): void {
    this.scrollService.scrollToElement('contact');
  }
}
