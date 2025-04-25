import { Component } from '@angular/core';
import { ScrollService } from '../../../../services/scroll.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss',
  standalone: false,
})
export class ClientComponent {
  logos = [
    { src: 'assets/part/client_1_120_60.png', alt: 'Client 1' },
    { src: 'assets/part/client_2_120_60.png', alt: 'Client 2' },
    { src: 'assets/part/client_3_90_60.png', alt: 'Client 3' },
    { src: 'assets/part/client_4_120_60.png', alt: 'Client 4' },
    { src: 'assets/part/client_5_120_60.png', alt: 'Client 5' },
    { src: 'assets/part/client_6_120_60.png', alt: 'Client 6' },
    { src: 'assets/part/client_7_120_60.png', alt: 'Client 7' },
    { src: 'assets/part/client_8_120_60.png', alt: 'Client 8' },
    { src: 'assets/part/client_9_120_60.png', alt: 'Client 9' },
    { src: 'assets/part/client_10_120_60.png', alt: 'Client 10' },
    { src: 'assets/part/client_11_120_60.png', alt: 'Client 11' },
    { src: 'assets/part/client_12_120_60.png', alt: 'Client 12' },
  ];

  constructor(private scrollService: ScrollService) {}

  scrollToContact(): void {
    this.scrollService.scrollToElement('contact');
  }
}
