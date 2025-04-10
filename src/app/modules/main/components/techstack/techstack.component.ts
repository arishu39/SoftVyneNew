import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-techstack',
  templateUrl: './techstack.component.html',
  styleUrl: './techstack.component.scss',
  standalone: false,
  animations: [
    trigger('tabAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '0.5s ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class TechstackComponent implements OnInit {
  ngOnInit() {
    // Initialize any required functionality
  }
}
