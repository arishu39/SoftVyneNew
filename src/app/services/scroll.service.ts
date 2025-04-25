import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.scrollToTop();
      });
  }

  // Method for scrolling to specific elements
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      // Try modern smooth scroll first
      try {
        element.scrollIntoView({ behavior: 'smooth' });
      } catch (e) {
        // Fallback for older browsers
        element.scrollIntoView();
      }
    }
  }

  // Improved scroll to top method with iOS support
  private scrollToTop(): void {
    try {
      // Try modern smooth scroll first
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (e) {
      // Fallback for iOS and older browsers
      this.fallbackScroll();
    }
  }

  // Fallback scroll method for iOS
  private fallbackScroll(): void {
    // For iOS, we need to scroll both the documentElement and body
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }
    // Force scroll with window.scrollTo as final fallback
    window.scrollTo(0, 0);
  }
}
