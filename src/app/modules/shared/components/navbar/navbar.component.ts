import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: false,
})
export class NavbarComponent {
  services = [
    {
      name: 'AI & ML',
      route: 'ai-ml',
      submenu: [
        { name: 'Machine Learning', route: 'machine-learning' },
        { name: 'Deep Learning', route: 'deep-learning' },
        { name: 'Natural Language Processing', route: 'nlp' },
        { name: 'Computer Vision', route: 'computer-vision' },
      ],
    },
    {
      name: 'Frontend',
      route: 'frontend',
      submenu: [
        { name: 'Angular', route: 'angular' },
        { name: 'Vue', route: 'vue' },
        { name: 'React', route: 'react' },
        { name: 'HTML/CSS', route: 'html-css' },
        { name: 'JavaScript', route: 'javascript' },
      ],
    },
    {
      name: 'Backend',
      route: 'backend',
      submenu: [
        { name: '.Net', route: 'dotnet' },
        { name: 'Node.js', route: 'nodejs' },
        { name: 'Python', route: 'python' },
        { name: 'Java', route: 'java' },
        { name: '.NET', route: 'dotnet' },
      ],
    },
  ];

  isMainDropdownOpen = false;
  activeSubmenu: string | null = null;

  toggleMainDropdown(state: boolean) {
    this.isMainDropdownOpen = state;
    if (!state) {
      this.activeSubmenu = null;
    }
  }

  setActiveSubmenu(route: string | null, event: MouseEvent) {
    event.stopPropagation();
    this.activeSubmenu = route;
  }

  isSubmenuActive(route: string): boolean {
    return this.activeSubmenu === route;
  }
}
