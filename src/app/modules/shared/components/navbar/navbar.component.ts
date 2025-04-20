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
      name: 'AI & Machine Learning',
      route: 'ai-machine-learning',
      submenu: [
        {
          name: 'Generative AI Solutions & AI Agents',
          description:
            'Unlock productivity with powerful language models and intelligent automation.',
          route: 'ai-agents',
        },
        {
          name: 'Retrieval-Augmented Generation (RAG)',
          description:
            'Enhance knowledge management by combining AI with your data.',
          route: 'rag',
        },
        {
          name: 'Conversational AI & Voice Interfaces',
          description:
            'Engage users naturally with NLP-driven chatbots and voice-enabled experiences.',
          route: 'conversational-ai',
        },
        {
          name: 'ML & Deep Learning Model Development (TensorFlow, PyTorch)',
          description:
            'Tailored ML solutions built for accuracy, speed, and innovation.',
          route: 'ml-development',
        },
        {
          name: 'MLOps & AI Model Governance',
          description:
            'Operationalize, monitor, and scale your AI models with confidence.',
          route: 'mlops',
        },
      ],
    },
    {
      name: 'Full-Stack Engineering',
      route: 'full-stack-engineering',
      submenu: [
        {
          name: 'Modern Web & Mobile Application Development (React, Angular, Vue, Next.js)',
          description:
            'Seamless, responsive, and feature-rich apps optimized for all devices.',
          route: 'web-mobile-development',
        },
        {
          name: 'Design Systems, Accessibility & UX Excellence',
          description:
            'Delight users with intuitive, accessible interfaces that boost engagement.',
          route: 'design-systems',
        },
        {
          name: 'Microservices & API Engineering (.NET, Java/Spring, Node, Python, Go, Rust)',
          description:
            'Scalable, robust, and maintainable back-end services powering your applications.',
          route: 'microservices',
        },
        {
          name: 'Event-Driven & Serverless Architectures',
          description:
            'Build highly responsive applications with modern serverless solutions.',
          route: 'serverless-architectures',
        },
        {
          name: 'Performance, Security & Scalability Optimization',
          description:
            'Ensure reliability and speed at scale, protecting your users and your brand.',
          route: 'performance-optimization',
        },
      ],
    },
    {
      name: 'Cloud, DevOps & Automation',
      route: 'cloud-devops-automation',
      submenu: [
        {
          name: 'Multi-Cloud Strategy & Migration (AWS, Azure, GCP, Oracle, IBM)',
          description:
            'Seamlessly migrate, optimize, and manage workloads across leading cloud providers.',
          route: 'multi-cloud',
        },
        {
          name: 'Containers & Kubernetes Orchestration (Docker, Kubernetes, OpenShift)',
          description:
            'Rapid deployment, scaling, and management of applications in containerized environments.',
          route: 'containers-kubernetes',
        },
        {
          name: 'Continuous Integration/Delivery (CI/CD) & Infrastructure-as-Code (IaC)',
          description:
            'Accelerate development cycles with automated pipelines and reproducible infrastructure.',
          route: 'ci-cd',
        },
        {
          name: 'Observability & Site Reliability Engineering (SRE)',
          description:
            'Proactively manage and improve service reliability, performance, and uptime.',
          route: 'sre',
        },
      ],
    },
    {
      name: 'Data Engineering & Analytics',
      route: 'data-engineering-analytics',
      submenu: [
        {
          name: 'Data Warehousing & ETL Pipelines',
          description:
            'Design, build, and optimize scalable data pipelines and warehouses for actionable insights.',
          route: 'data-warehousing-etl',
        },
        {
          name: 'Business Intelligence & Dashboarding',
          description:
            'Empower decision-making with interactive dashboards and advanced analytics.',
          route: 'business-intelligence',
        },
        {
          name: 'Data Lake & Big Data Solutions',
          description:
            'Leverage big data platforms for storage, processing, and analytics at scale.',
          route: 'data-lake-bigdata',
        },
        {
          name: 'Data Governance & Quality',
          description:
            'Ensure data accuracy, consistency, and compliance across your organization.',
          route: 'data-governance',
        },
        {
          name: 'Real-Time Data Streaming & Analytics',
          description:
            'Unlock value from real-time data with streaming analytics and event processing.',
          route: 'real-time-analytics',
        },
      ],
    },
  ];

  isMainDropdownOpen = false;
  activeSubmenu: string | null = null;
  isMobile = window.innerWidth < 992;
  isMegaMenuOpen = false;

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

  toggleMegaMenu(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.isMegaMenuOpen = !this.isMegaMenuOpen;
    if (this.isMegaMenuOpen) {
      document.body.classList.add('mega-menu-open');
      setTimeout(() => {
        window.addEventListener('click', this.handleOutsideClick, true);
      });
    } else {
      this.closeMegaMenu();
    }
  }

  closeMegaMenu = () => {
    this.isMegaMenuOpen = false;
    document.body.classList.remove('mega-menu-open');
    window.removeEventListener('click', this.handleOutsideClick, true);
  };

  handleOutsideClick = (event: Event) => {
    const menuPanel = document.querySelector('.mega-menu-panel');
    const toggle = document.querySelector('.mega-menu-toggle');
    if (
      menuPanel &&
      !menuPanel.contains(event.target as Node) &&
      toggle &&
      !toggle.contains(event.target as Node)
    ) {
      this.closeMegaMenu();
    }
  };
}
