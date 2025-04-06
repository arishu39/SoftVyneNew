import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: false,
})
export class NavbarComponent {
  services = [
    { name: 'Angular', route: 'angular' },
    { name: 'Vue', route: 'vue' },
    { name: 'React', route: 'react' },
    { name: 'Frontend', route: 'frontend' },
    { name: 'AI & ML', route: 'ai-ml' },
  ];
}
