declare const Calendly: any;

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
        { name: 'AI Agents', route: 'ai-agents' },
        { name: 'Semantic Kernel', route: 'semantic-kernel' },
        { name: 'RAG', route: 'rag' },
        { name: 'Generative AI', route: 'generative-ai' },
        { name: 'Large Language Models', route: 'llm' },
        { name: 'Transformers', route: 'transformers' },
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
        { name: 'TypeScript', route: 'typescript' },
        { name: 'Next.js', route: 'nextjs' },
        { name: 'Nuxt.js', route: 'nuxtjs' },
        { name: 'Svelte', route: 'svelte' },
        { name: 'Tailwind CSS', route: 'tailwind' },
      ],
    },
    {
      name: 'Backend',
      route: 'backend',
      submenu: [
        { name: '.NET', route: 'dotnet' },
        { name: 'Node.js', route: 'nodejs' },
        { name: 'Python', route: 'python' },
        { name: 'Java', route: 'java' },
        { name: 'Go', route: 'golang' },
        { name: 'Ruby', route: 'ruby' },
        { name: 'PHP', route: 'php' },
        { name: 'Rust', route: 'rust' },
        { name: 'Kotlin', route: 'kotlin' },
        { name: 'Spring Boot', route: 'spring-boot' },
      ],
    },
  ];

  isMainDropdownOpen = false;
  activeSubmenu: string | null = null;
  isMobile = window.innerWidth < 992;

  constructor() {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 992;
      if (!this.isMobile) {
        this.isMainDropdownOpen = false;
        this.activeSubmenu = null;
      }
    });
  }

  toggleMainDropdown(state: boolean) {
    if (this.isMobile) {
      this.isMainDropdownOpen = state;
      // Reset active submenu only when closing main dropdown
      if (!state) {
        this.activeSubmenu = null;
      }
    } else {
      this.isMainDropdownOpen = state;
      if (!state) {
        this.activeSubmenu = null;
      }
    }
  }

  setActiveSubmenu(route: string | null, event: MouseEvent) {
    if (!this.isMobile) {
      event.stopPropagation();
      this.activeSubmenu = route;
    }
  }

  toggleSubmenu(route: string, event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();

    // Always toggle on mobile
    if (this.isMobile) {
      if (this.activeSubmenu === route) {
        this.activeSubmenu = null;
      } else {
        this.activeSubmenu = route;
      }
    }
  }

  isSubmenuActive(route: string): boolean {
    return this.activeSubmenu === route;
  }

  openCalendly(): void {
    Calendly.initPopupWidget({
      url: 'https://calendly.com/contact-fynore/30min', // Replace 'yourusername' with your Calendly username
    });
  }

  closeMenu() {
    this.isMainDropdownOpen = false;
    this.activeSubmenu = null;
  }

  onMenuItemClick() {
    this.closeMenu();
    if (this.isMobile) {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      navbarCollapse?.classList.remove('show');
      const toggler = document.querySelector('.navbar-toggler');
      if (navbarCollapse?.classList.contains('show')) {
        (toggler as HTMLElement)?.click();
      }
    }
  }
}
