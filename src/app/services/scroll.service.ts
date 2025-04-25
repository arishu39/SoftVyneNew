import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor(private router: Router) {
    // Subscribe to router events for automatic scroll to top
    this.router.events
      .pipe(
        // Filter only NavigationEnd events
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        // Scroll to top on navigation end
        window.scrollTo(0, 0);
      });
  }

  // Method for scrolling to specific elements
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
