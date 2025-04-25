declare const Calendly: any;

import { Component } from '@angular/core';
import { ScrollService } from '../../../../services/scroll.service';

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
      route: 'ai-machine-learning-experts',
      submenu: [
        {
          name: 'Generative AI Solutions & AI Agents',
          description:
            'Unlock productivity with powerful language models and intelligent automation.',
          route: 'hire-generative-ai-developers-agents',
        },
        {
          name: 'Retrieval-Augmented Generation (RAG)',
          description:
            'Enhance knowledge management by combining AI with your data.',
          route: 'hire-retrieval-augmented-generation-rag-developers',
        },
        {
          name: 'Conversational AI & Voice Interfaces',
          description:
            'Engage users naturally with NLP-driven chatbots and voice-enabled experiences.',
          route: 'hire-conversational-ai-voice-bots-developers',
        },
        {
          name: 'ML & Deep Learning Model Development (TensorFlow, PyTorch)',
          description:
            'Tailored ML solutions built for accuracy, speed, and innovation.',
          route: 'hire-ml-deep-learning-developers',
        },
        {
          name: 'MLOps & AI Model Governance',
          description:
            'Operationalize, monitor, and scale your AI models with confidence.',
          route: 'hire-mlops-model-ai-governance-experts',
        },
      ],
    },
    {
      name: 'Full-Stack Engineering',
      route: 'full-stack-developers',
      submenu: [
        {
          name: 'Modern Web & Mobile Application Development (React, Angular, Vue, Next.js)',
          description:
            'Seamless, responsive, and feature-rich apps optimized for all devices.',
          route: 'hire-web-mobile-app-developers',
        },
        {
          name: 'Design Systems, Accessibility & UX Excellence',
          description:
            'Delight users with intuitive, accessible interfaces that boost engagement.',
          route: 'hire-ux-ui-design-experts',
        },
        {
          name: 'Microservices & API Engineering (.NET, Java/Spring, Node, Python, Go, Rust)',
          description:
            'Scalable, robust, and maintainable back-end services powering your applications.',
          route: 'hire-microservices-api-developers',
        },
        {
          name: 'Event-Driven & Serverless Architectures',
          description:
            'Build highly responsive applications with modern serverless solutions.',
          route: 'hire-serverless-architectures-experts',
        },
        {
          name: 'Performance, Security & Scalability Optimization',
          description:
            'Ensure reliability and speed at scale, protecting your users and your brand.',
          route: 'hire-performance-security-optimization',
        },
      ],
    },
    {
      name: 'Cloud, DevOps & Automation',
      route: 'cloud-devops-engineers',
      submenu: [
        {
          name: 'Multi-Cloud Strategy & Migration (AWS, Azure, GCP, Oracle, IBM)',
          description:
            'Seamlessly migrate, optimize, and manage workloads across leading cloud providers.',
          route: 'hire-multi-cloud-migration-experts',
        },
        {
          name: 'Containers & Kubernetes Orchestration (Docker, Kubernetes, OpenShift)',
          description:
            'Rapid deployment, scaling, and management of applications in containerized environments.',
          route: 'hire-kubernetes-docker-orchestration-experts',
        },
        {
          name: 'Continuous Integration/Delivery (CI/CD) & Infrastructure-as-Code (IaC)',
          description:
            'Accelerate development cycles with automated pipelines and reproducible infrastructure.',
          route: 'hire-cicd-infrastructure-code-experts',
        },
        {
          name: 'Observability & Site Reliability Engineering (SRE)',
          description:
            'Proactively manage and improve service reliability, performance, and uptime.',
          route: 'hire-sre-observability-engineers',
        },
      ],
    },
    {
      name: 'Data Engineering & Analytics',
      route: 'data-engineering-analytics-experts',
      submenu: [
        {
          name: 'Data Warehousing & ETL Pipelines',
          description:
            'Design, build, and optimize scalable data pipelines and warehouses for actionable insights.',
          route: 'hire-data-warehousing-etl-developers',
        },
        {
          name: 'Business Intelligence & Dashboarding',
          description:
            'Empower decision-making with interactive dashboards and advanced analytics.',
          route: 'hire-business-intelligence-developers',
        },
        {
          name: 'Data Lake & Big Data Solutions',
          description:
            'Leverage big data platforms for storage, processing, and analytics at scale.',
          route: 'hire-big-data-lake-experts',
        },
        {
          name: 'Data Governance & Quality',
          description:
            'Ensure data accuracy, consistency, and compliance across your organization.',
          route: 'hire-data-governance-quality-experts',
        },
        {
          name: 'Real-Time Data Streaming & Analytics',
          description:
            'Unlock value from real-time data with streaming analytics and event processing.',
          route: 'hire-real-time-analytics-developers',
        },
      ],
    },
  ];

  isMainDropdownOpen = false;
  activeSubmenu: string | null = null;
  isMobile = window.innerWidth < 992;
  isMegaMenuOpen = false;

  constructor(private scrollService: ScrollService) {
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

  scrollToContact(): void {
    this.onMenuItemClick(); // Close mobile menu
    this.closeMegaMenu(); // Close mega menu if open
    this.scrollService.scrollToElement('contact');
  }
}
